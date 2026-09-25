import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { contact, mainNav, site, socials } from "@/content/site";
import { programs } from "@/content/programs";
import logoMark from "@/assets/logo-mark.png";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto w-full max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src={logoMark} alt="" width={48} height={48} className="size-12 rounded-full bg-white" />
              <span className="font-serif text-2xl font-semibold text-white">{site.shortName}</span>
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-navy-100/75">{site.name}.</p>
            <p className="mt-6 font-serif text-xl text-gold-300 italic">{site.motto}</p>
          </div>

          <nav aria-label="Footer — explore" className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase">Explore</h2>
            <ul className="mt-5 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-navy-100/75 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — programmes" className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase">Programmes</h2>
            <ul className="mt-5 space-y-3">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link href={`/programs#${p.slug}`} className="text-navy-100/75 transition-colors hover:text-white">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase">Contact</h2>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold-500" />
                <span>{contact.location}</span>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold-500" />
                <a href={`mailto:${contact.email}`} className="break-all hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold-500" />
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm transition-colors hover:border-gold-500 hover:text-white"
                  >
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-navy-100/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.shortName}. Registered NGO No. {site.registration.number}
          </p>
          <p>Kisii, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
