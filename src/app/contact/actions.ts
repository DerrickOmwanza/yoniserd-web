"use server";

import { contact, site } from "@/content/site";
import { isContactTopic, topicLabel, type ContactTopic } from "@/content/contact-topics";

export type ContactFormValues = {
  name: string;
  email: string;
  organisation: string;
  topic: ContactTopic;
  message: string;
};

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
  values?: ContactFormValues;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FILL_TIME_MS = 3_000;

function text(formData: FormData, key: string, max: number): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

export async function sendContactMessage(_prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const rawTopic = text(formData, "topic", 40);
  const values: ContactFormValues = {
    name: text(formData, "name", 120),
    email: text(formData, "email", 200),
    organisation: text(formData, "organisation", 160),
    topic: isContactTopic(rawTopic) ? rawTopic : "general",
    message: text(formData, "message", 5_000),
  };

  // Spam traps: a hidden field real people never fill, and a form submitted faster than a human could.
  const honeypot = text(formData, "website", 200);
  const startedAt = Number(formData.get("startedAt"));
  // The timestamp is set by JavaScript; if JS hasn't run (slow phone, blocked scripts) skip this check
  // rather than silently dropping a real message.
  const tooFast = startedAt > 0 && Date.now() - startedAt < MIN_FILL_TIME_MS;
  if (honeypot || tooFast) {
    // Pretend success so bots don't learn how they were caught.
    return { status: "success" };
  }

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (values.name.length < 2) fieldErrors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email)) fieldErrors.email = "Please enter a valid email address.";
  if (values.message.length < 10) fieldErrors.message = "Please write a message of at least 10 characters.";
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || contact.email;
  const from = process.env.CONTACT_FROM_EMAIL || `${site.shortName} Website <onboarding@resend.dev>`;

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] RESEND_API_KEY not set — message not sent:", values);
      return { status: "success" };
    }
    console.error("[contact] RESEND_API_KEY is not configured");
    return {
      status: "error",
      message: `Sorry, our form is temporarily unavailable. Please email us at ${contact.email}.`,
      values,
    };
  }

  const subject = `[Website] ${topicLabel(values.topic)} — ${values.name}`;
  const rows: [string, string][] = [
    ["Name", values.name],
    ["Email", values.email],
    ["Organisation", values.organisation || "—"],
    ["Topic", topicLabel(values.topic)],
  ];
  const textBody = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${values.message}`;
  const htmlBody = `
    <table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="color:#4b5563"><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join("")}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;margin-top:16px">${escapeHtml(values.message)}</p>
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:24px">Sent from the contact form on ${site.url}. Reply to this email to answer ${escapeHtml(values.name)} directly.</p>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: values.email, subject, text: textBody, html: htmlBody }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error("[contact] Resend error", response.status, await response.text());
      throw new Error(`Resend responded ${response.status}`);
    }
  } catch (error) {
    console.error("[contact] send failed", error);
    return {
      status: "error",
      message: `Sorry, your message could not be sent. Please try again, or email us at ${contact.email}.`,
      values,
    };
  }

  return { status: "success" };
}
