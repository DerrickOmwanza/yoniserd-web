"use client";

import { useActionState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";

import { sendContactMessage, type ContactFormState } from "@/app/contact/actions";
import { contactTopics, isContactTopic } from "@/content/contact-topics";

const initialState: ContactFormState = { status: "idle" };

const inputClass =
  "mt-2 block w-full rounded-xl border border-line bg-white px-4 py-3 text-ink shadow-xs transition-colors placeholder:text-muted/60 hover:border-navy-900/30 focus:border-navy-900 focus:outline-none focus-visible:outline-none focus:ring-3 focus:ring-sky-500/30 aria-invalid:border-red-600 aria-invalid:ring-red-600/20";

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-2 text-sm font-medium text-red-700">
      {error}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const searchParams = useSearchParams();
  const startedAtRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const requestedTopic = searchParams.get("topic");
  const defaultTopic = state.values?.topic ?? (isContactTopic(requestedTopic) ? requestedTopic : "general");
  const errors = state.fieldErrors ?? {};

  // Timestamp is set in the browser (the page itself is pre-rendered at build time).
  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now());
  }, [state]);

  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col items-start rounded-2xl border border-line bg-white p-8 shadow-sm focus:outline-none sm:p-10"
      >
        <CheckCircle2 aria-hidden="true" className="size-10 text-gold-700" />
        <h2 className="mt-5 text-3xl font-medium">Thank you — your message is on its way.</h2>
        <p className="mt-3 text-lg leading-relaxed text-muted">
          Our team will get back to you by email, usually within two working days.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      aria-describedby={state.status === "error" ? "form-status" : undefined}
      className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-10"
    >
      <h2 className="text-3xl font-medium">Send us a message</h2>
      <p className="mt-2 text-muted">All fields marked * are required.</p>

      {state.status === "error" && state.message && (
        <p
          id="form-status"
          role="alert"
          className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
        >
          {state.message}
        </p>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-navy-900">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            defaultValue={state.values?.name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
          />
          <FieldError id="name-error" error={errors.name} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy-900">
            Email address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            defaultValue={state.values?.email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
          <FieldError id="email-error" error={errors.email} />
        </div>
        <div>
          <label htmlFor="organisation" className="text-sm font-semibold text-navy-900">
            Organisation <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            maxLength={160}
            defaultValue={state.values?.organisation}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="topic" className="text-sm font-semibold text-navy-900">
            What is this about?
          </label>
          <select
            id="topic"
            name="topic"
            key={defaultTopic}
            defaultValue={defaultTopic}
            className={`${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%234b5563'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'/%3E%3C/svg%3E")] bg-[length:1.25rem] bg-[right_0.9rem_center] bg-no-repeat pr-10`}
          >
            {contactTopics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-navy-900">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            maxLength={5000}
            defaultValue={state.values?.message}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputClass} resize-y`}
          />
          <FieldError id="message-error" error={errors.message} />
        </div>
      </div>

      {/* Spam protection — hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">We only use your details to reply to you.</p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-navy-800 disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-5 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send aria-hidden="true" className="size-4" />
              Send message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
