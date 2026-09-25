import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ProgramIcon } from "@/components/ProgramIcon";
import { StatGrid } from "@/components/StatGrid";
import { StoryTile } from "@/components/StoryCard";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { approach, headlineStats } from "@/content/impact";
import { programs } from "@/content/programs";
import { stories } from "@/content/stories";

import headerImage from "@/assets/gallery/gallery-7.jpg";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "The reach and results of YoNISeRD’s youth programmes in Kisii and beyond — young people reached, communities served and outcomes by programme.",
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  const highlights = stories.filter((s) => s.date).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Impact"
        title={
          <>
            Measuring what <span className="text-gold-300 italic">matters.</span>
          </>
        }
        intro="Every programme is designed to be measured, so that young people, communities and partners can see what is working."
        image={headerImage}
        imageAlt="Youth advocates holding placards calling for healthy minds"
      />

      <section aria-label="Impact in numbers" className="border-b border-line bg-white">
        <Container>
          <StatGrid stats={headlineStats} />
        </Container>
      </section>

      <Section labelledBy="reach-title">
        <SectionHeading
          id="reach-title"
          eyebrow="Reach by programme"
          title="Results across our five programme areas."
          intro="Cumulative reach reported by our programme teams since 2018."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {programs.map((program) => (
            <li key={program.slug} className="group relative bg-white p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-navy-50 text-navy-900">
                  <ProgramIcon name={program.icon} />
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 text-muted transition-colors group-hover:text-navy-900"
                />
              </div>
              <h3 className="mt-6 text-2xl font-medium">
                <Link href={`/programs#${program.slug}`} className="after:absolute after:inset-0">
                  {program.title}
                </Link>
              </h3>
              <p className="mt-3 font-serif text-xl leading-snug text-gold-700">{program.reach}</p>
            </li>
          ))}
          <li className="flex flex-col justify-center bg-navy-900 p-7 text-white sm:p-9">
            <p className="font-serif text-2xl leading-snug">Want the detail behind these numbers?</p>
            <Link
              href="/contact?topic=research"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-gold-300 hover:text-gold-100"
            >
              Ask us about our data <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </li>
        </ul>
      </Section>

      <Section tone="navy" labelledBy="change-title">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="change-title"
              onDark
              eyebrow="Theory of change"
              title="How lasting change happens."
              intro="Our model links networks, evidence and services — and puts young people in charge of the change."
            />
          </div>
          <ol className="relative space-y-10 border-l border-white/15 pl-8 lg:col-span-7">
            {approach.map((step, i) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-0 -left-[3.05rem] flex size-9 items-center justify-center rounded-full border border-gold-500 bg-navy-950 font-serif text-gold-300"
                >
                  {i + 1}
                </span>
                <h3 className="text-2xl font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-navy-100/75">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="surface" labelledBy="highlights-title">
        <SectionHeading id="highlights-title" eyebrow="Impact in action" title="Recent highlights." />
        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((story) => (
            <StoryTile key={story.slug} story={story} />
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
