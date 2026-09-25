import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Section";
import { contact, socials } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Partner, volunteer or collaborate on research with YoNISeRD in Kisii, Kenya. Send us a message.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
  { icon: MapPin, label: "Office", value: contact.location },
  { icon: Clock, label: "Response time", value: "Usually within two working days" },
];

const shortcuts = [
  { id: "partner", title: "Partner or fund a programme", href: "/contact?topic=partnership#message" },
  { id: "research", title: "Collaborate on research", href: "/contact?topic=research#message" },
  { id: "volunteer", title: "Volunteer with us", href: "/contact?topic=volunteer#message" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let’s work <span className="text-gold-300 italic">together.</span>
          </>
        }
        intro="Whether you want to partner on a programme, collaborate on research or volunteer your skills, we would love to hear from you."
      />

      <Container className="py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <h2 className="text-3xl font-medium">Get in touch</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4 py-5">
                  <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold-700" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 block font-medium break-all text-navy-900 hover:underline">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-navy-900">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-sans text-xs font-semibold tracking-[0.2em] text-gold-700 uppercase">
              I want to…
            </h2>
            <ul className="mt-4 space-y-3">
              {shortcuts.map((s) => (
                <li key={s.id} id={s.id}>
                  <Link
                    href={s.href}
                    scroll={false}
                    className="flex items-center justify-between rounded-xl bg-surface px-5 py-4 font-medium text-navy-900 transition-colors hover:bg-navy-50"
                  >
                    {s.title}
                    <span aria-hidden="true" className="text-gold-700">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-10 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-line px-4 py-2 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
                  >
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div id="message" className="lg:col-span-8">
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </>
  );
}
