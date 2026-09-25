import type { Metadata } from "next";
import Image from "next/image";
import { Check, ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { milestones } from "@/content/impact";
import { coreValues, site, yearsActive } from "@/content/site";
import { ceo, team } from "@/content/team";

import headerImage from "@/assets/gallery/gallery-13.jpg";
import certificate from "@/assets/gallery/registration-certificate.jpg";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "YoNISeRD is a registered Kenyan NGO, founded in 2018 in Kisii, that connects and empowers young people through networks, community research and integrated services.",
  alternates: { canonical: "/about" },
};

const commitments = [
  "Connect and empower young people through research-backed programmes",
  "Build resilient communities through networks and shared knowledge",
  "Respond to critical needs in youth development, health and sustainability",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About YoNISeRD"
        title={
          <>
            Rooted in Kisii. <span className="text-gold-300 italic">Led</span> by young people.
          </>
        }
        intro={`Since ${site.foundedYear}, ${site.shortName} has worked alongside young people to turn community evidence into programmes that change lives.`}
        image={headerImage}
        imageAlt="Young people seated in a circle at an open-air YoNISeRD community forum"
      />

      {/* ───────────── Purpose ───────────── */}
      <Section id="overview" labelledBy="purpose-title">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="purpose-title" eyebrow="Our purpose" title="Why we exist." />
            <p className="mt-8 font-serif text-2xl text-gold-700 italic">{site.motto}</p>
          </div>
          <dl className="grid gap-10 lg:col-span-8">
            <div className="border-l-2 border-gold-500 pl-6 sm:pl-10">
              <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Vision</dt>
              <dd className="mt-3 font-serif text-2xl leading-snug text-navy-900 sm:text-3xl">{site.vision}</dd>
            </div>
            <div className="border-l-2 border-navy-900 pl-6 sm:pl-10">
              <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Mission</dt>
              <dd className="mt-3 font-serif text-2xl leading-snug text-navy-900 sm:text-3xl">{site.mission}</dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ───────────── Leadership ───────────── */}
      <Section tone="surface" id="leadership" labelledBy="leadership-title">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-navy-100">
              <Image
                src={ceo.photo}
                alt={ceo.name}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-xl bg-navy-900 px-6 py-4 text-white shadow-lg">
              <p className="font-serif text-xl">{ceo.name}</p>
              <p className="text-sm text-gold-300">{ceo.role}</p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-6">
            <SectionHeading id="leadership-title" eyebrow="A message from our CEO" title="Welcome to YoNISeRD." />
            <blockquote className="mt-8 font-serif text-2xl leading-snug text-navy-900 sm:text-3xl">
              “{ceo.quote}”
            </blockquote>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              As CEO of {site.name}, I’m honoured to welcome you. Our commitment is simple:
            </p>
            <ul className="mt-6 space-y-4">
              {commitments.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                    <Check aria-hidden="true" className="size-4" />
                  </span>
                  <span className="text-lg text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-28">
          <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-gold-700 uppercase">Our team</h3>
          <ul className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {team
              .filter((member) => member.name !== ceo.name)
              .map((member) => (
                <li key={member.name}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-100">
                    <Image
                      src={member.photo}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className={`object-cover ${member.photoPosition ?? "object-top"}`}
                    />
                  </div>
                  <p className="mt-5 font-serif text-2xl text-navy-900">{member.name}</p>
                  <p className="mt-1 text-sm font-semibold text-gold-700">{member.role}</p>
                  {member.bio && <p className="mt-3 leading-relaxed text-muted">{member.bio}</p>}
                </li>
              ))}
          </ul>
        </div>
      </Section>

      {/* ───────────── Journey ───────────── */}
      <Section tone="navy" id="journey" labelledBy="journey-title">
        <SectionHeading
          id="journey-title"
          onDark
          eyebrow="Our journey"
          title={`${yearsActive()} years of growing alongside young people.`}
        />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          <span aria-hidden="true" className="absolute top-[1.2rem] right-0 left-0 hidden h-px bg-white/15 md:block" />
          {milestones.map((m) => (
            <li key={m.year} className="relative border-l border-white/15 pl-6 md:border-l-0 md:pl-0">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[5px] size-2.5 rounded-full bg-gold-500 md:relative md:top-auto md:left-auto md:block md:size-3 md:translate-y-[0.9rem]"
              />
              <p className="font-serif text-4xl text-gold-300 md:mt-8">{m.year}</p>
              <h3 className="mt-3 font-sans text-lg font-semibold text-white">{m.title}</h3>
              <p className="mt-2 leading-relaxed text-navy-100/75">{m.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ───────────── Values ───────────── */}
      <Section id="values" labelledBy="values-title">
        <SectionHeading
          id="values-title"
          eyebrow="Our values"
          title="Principles that anchor every partnership."
          intro="These values guide how we design programmes, work with communities and hold ourselves accountable."
        />
        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, i) => (
            <li key={value} className="bg-white p-7">
              <span className="font-serif text-lg text-gold-700 italic">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-6 font-serif text-2xl text-navy-900">{value}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ───────────── Registration ───────────── */}
      <Section tone="surface" id="registration" labelledBy="registration-title">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="registration-title"
              eyebrow="Accountability"
              title="A registered, accountable NGO."
              intro="YoNISeRD is registered with Kenya’s NGOs Co-ordination Board and operates under the Non-Governmental Organizations Co-ordination Act."
            />
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {[
                ["Registration number", site.registration.number],
                ["Date of registration", site.registration.date],
                ["Legal status", site.registration.status],
                ["Headquarters", site.headquarters],
              ].map(([label, value]) => (
                <div key={label} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                  <dt className="text-sm font-semibold text-navy-900">{label}</dt>
                  <dd className="text-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="mx-auto w-full max-w-md">
            <div className="relative">
              <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-xl bg-navy-100" />
              <div className="relative overflow-hidden rounded-xl border border-line bg-white p-3 shadow-lg">
                <Image
                  src={certificate}
                  alt="YoNISeRD’s certificate of registration issued by the NGOs Co-ordination Board"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <figcaption className="mt-8 flex items-center gap-2 text-sm text-muted">
              <ShieldCheck aria-hidden="true" className="size-4 text-gold-700" />
              Certificate of Registration, 30 April 2018
            </figcaption>
          </figure>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
