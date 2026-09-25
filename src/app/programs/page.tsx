import type { Metadata } from "next";
import { BookOpenCheck, Building2, HandCoins } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { ProgramIcon } from "@/components/ProgramIcon";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { programs } from "@/content/programs";

import headerImage from "@/assets/gallery/gallery-4.jpg";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "YoNISeRD’s five programme areas: children’s rights, environment and climate, reproductive health, HIV/AIDS awareness and gender-based violence prevention.",
  alternates: { canonical: "/programs" },
};

const partnershipModels = [
  {
    icon: HandCoins,
    title: "Fund a programme",
    description:
      "Support an existing programme area or co-design a new intervention with clear, community-level results.",
  },
  {
    icon: BookOpenCheck,
    title: "Research collaboration",
    description: "Partner with our community research hub on studies, evaluations and evidence on youth wellbeing.",
  },
  {
    icon: Building2,
    title: "Institutional partnership",
    description: "Universities, county departments and national agencies can reach young people through our networks.",
  },
];

// Institutions shown alongside YoNISeRD at events in our photo archive.
const workedAlongside = [
  "Kisii University",
  "National AIDS Control Council",
  "Kenya Counselling and Psychological Association",
];

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title={
          <>
            Programmes that meet young people <span className="text-gold-300 italic">where they are.</span>
          </>
        }
        intro="Five integrated programme areas, each combining community research, youth leadership and direct services."
        image={headerImage}
        imageAlt="Students marching behind a Kisii University World AIDS Day banner"
      >
        <ButtonLink href="#partnerships" variant="gold" size="lg" arrow>
          Partner on a programme
        </ButtonLink>
      </PageHeader>

      <Container className="py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <nav aria-label="Programme areas" className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-700 uppercase">Programme areas</p>
              <ol className="mt-6 border-t border-line">
                {programs.map((program, i) => (
                  <li key={program.slug} className="border-b border-line">
                    <a
                      href={`#${program.slug}`}
                      className="group flex items-center gap-4 py-4 text-navy-900 transition-colors hover:text-gold-700"
                    >
                      <span className="font-serif text-gold-700 italic">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-medium">{program.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="space-y-20 lg:col-span-8">
            {programs.map((program, i) => (
              <article
                key={program.slug}
                id={program.slug}
                aria-labelledby={`${program.slug}-title`}
                className="border-b border-line pb-20 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-14 items-center justify-center rounded-full bg-navy-900 text-gold-300">
                    <ProgramIcon name={program.icon} className="size-6" />
                  </span>
                  <span className="font-serif text-2xl text-gold-700 italic">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 id={`${program.slug}-title`} className="mt-6 text-4xl leading-tight font-medium sm:text-5xl">
                  {program.title}
                </h2>
                <p className="mt-4 text-xl leading-relaxed text-navy-900">{program.summary}</p>
                <p className="mt-5 text-lg leading-relaxed text-muted">{program.description}</p>
                <div className="mt-8 rounded-2xl bg-surface p-6 sm:p-8">
                  <p className="text-xs font-semibold tracking-[0.2em] text-gold-700 uppercase">Reach so far</p>
                  <p className="mt-3 font-serif text-2xl leading-snug text-navy-900">{program.reach}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>

      <Section tone="navy" id="partnerships" labelledBy="partnerships-title">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="partnerships-title"
              onDark
              eyebrow="Partnerships"
              title="A trusted partner, rooted in community."
              intro="We bring deep community networks, youth leadership and the ability to generate evidence on what works."
            />
            <div className="mt-10">
              <ButtonLink href="/contact?topic=partnership" variant="gold" size="lg" arrow>
                Start a conversation
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-4">
              {partnershipModels.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-950">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span>
                    <span className="block font-serif text-2xl text-white">{title}</span>
                    <span className="mt-1 block leading-relaxed text-navy-100/75">{description}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">We have worked alongside</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {workedAlongside.map((name) => (
                  <li key={name} className="rounded-full border border-white/20 px-4 py-2 text-sm text-navy-100">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
