import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Section";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Partner, volunteer or collaborate on research with YoNISeRD in Kisii, Kenya.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
  { icon: MapPin, label: "Office", value: contact.location },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s work together."
        intro="Whether you want to partner on a programme, collaborate on research or volunteer your skills, we would love to hear from you."
      />
      <Container className="py-20">
        <ul className="grid gap-6 md:grid-cols-3">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="rounded-2xl border border-line p-7">
              <Icon aria-hidden="true" className="size-6 text-gold-700" />
              <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-muted uppercase">{label}</p>
              {href ? (
                <a href={href} className="mt-2 block font-serif text-2xl break-all text-navy-900 hover:underline">
                  {value}
                </a>
              ) : (
                <p className="mt-2 font-serif text-2xl text-navy-900">{value}</p>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl rounded-xl border border-dashed border-line bg-surface p-6 text-muted">
          A secure contact form is coming in the next update. Until then, please email or call us directly.
        </p>
      </Container>
    </>
  );
}
