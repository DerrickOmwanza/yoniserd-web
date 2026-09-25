import Link from "next/link";
import { ArrowUpRight, BookOpenCheck, HandHeart, Handshake } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Section";

const pathways = [
  {
    icon: Handshake,
    title: "Partner with us",
    description: "Co-design and fund programmes with a trusted, community-rooted implementing partner.",
    href: "/contact?topic=partnership",
  },
  {
    icon: BookOpenCheck,
    title: "Collaborate on research",
    description: "Work with our community research hub to generate evidence on youth wellbeing.",
    href: "/contact?topic=research",
  },
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Share your skills as a mentor, facilitator or peer counsellor in Kisii.",
    href: "/contact?topic=volunteer",
  },
];

/** Closing "Get involved" band shared by most pages. */
export function CtaBand({ title = "Let’s build Kenya’s next generation of leaders — together." }: { title?: string }) {
  return (
    <section
      aria-labelledby="involve-title"
      className="relative isolate overflow-hidden bg-navy-900 py-20 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -right-32 -bottom-48 -z-10 size-[32rem] rounded-full bg-gold-500/15 blur-3xl"
      />
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="involve-title" onDark eyebrow="Get involved" title={title} />
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="gold" size="lg" arrow>
                Talk to our team
              </ButtonLink>
            </div>
          </div>
          <ul className="grid gap-4 lg:col-span-7">
            {pathways.map(({ icon: Icon, title, description, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-gold-500/60 hover:bg-white/[0.08] sm:p-7"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-950">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-serif text-2xl text-white">{title}</span>
                    <span className="mt-1 block leading-relaxed text-navy-100/75">{description}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 size-5 shrink-0 text-gold-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
