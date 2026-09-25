import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { ProgramIcon } from "@/components/ProgramIcon";
import { FeaturedStoryCard, StoryCard } from "@/components/StoryCard";
import { StatGrid } from "@/components/StatGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/Section";
import { approach, headlineStats } from "@/content/impact";
import { programs } from "@/content/programs";
import { site } from "@/content/site";
import { stories } from "@/content/stories";
import { ceo } from "@/content/team";

import heroImage from "@/assets/gallery/gallery-10.jpg";
import heroInset from "@/assets/gallery/gallery-4.jpg";
import aboutMain from "@/assets/gallery/gallery-13.jpg";
import aboutInset from "@/assets/gallery/gallery-7.jpg";

export default function HomePage() {
  const featured = stories.find((s) => s.slug === "national-mental-health-walk-kisii") ?? stories[0];
  const more = stories.filter((s) => s !== featured).slice(0, 3);

  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:72px_72px]"
        />
        <div
          aria-hidden="true"
          className="absolute -top-40 -left-40 -z-10 size-[36rem] rounded-full bg-sky-500/20 blur-3xl"
        />

        <Container className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
          <div className="lg:col-span-6 xl:col-span-7">
            <Eyebrow onDark>Registered NGO · Kisii, Kenya · Since {site.foundedYear}</Eyebrow>
            <h1
              id="hero-title"
              className="text-[2.75rem] leading-[1.04] font-medium text-white sm:text-6xl xl:text-7xl"
            >
              Evidence-led programmes. <span className="whitespace-nowrap text-gold-300 italic">Youth-led</span> change.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-100/85 sm:text-xl">
              We connect young people to networks, research and integrated services — so they can lead healthier, safer
              and more prosperous communities.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/programs" variant="gold" size="lg" arrow>
                Explore our programmes
              </ButtonLink>
              <ButtonLink href="/contact?topic=partnership" variant="outline-light" size="lg">
                Partner with us
              </ButtonLink>
            </div>
          </div>

          <div className="relative lg:col-span-6 xl:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -top-4 -right-4 bottom-8 left-8 rounded-2xl border border-gold-500/60"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
              <Image
                src={heroImage}
                alt="Smiling young people at the National Mental Health Walk in Kisii"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 48vw, 100vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
            <figure className="absolute -bottom-8 -left-4 hidden w-56 overflow-hidden rounded-xl bg-white shadow-xl sm:block lg:-left-10">
              <div className="relative aspect-[4/3]">
                <Image
                  src={heroInset}
                  alt="Students marching on World AIDS Day with Kisii University"
                  fill
                  sizes="224px"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs leading-snug font-medium text-navy-900">
                World AIDS Day with Kisii University &amp; partners
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* ───────────── Headline figures ───────────── */}
      <section aria-label="Our reach in numbers" className="border-b border-line bg-white">
        <Container>
          <StatGrid stats={headlineStats} />
        </Container>
      </section>

      {/* ───────────── Who we are ───────────── */}
      <Section tone="surface" labelledBy="about-title">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
              <Image
                src={aboutMain}
                alt="Young people seated in a circle during a YoNISeRD community forum"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-3 -bottom-10 w-2/5 overflow-hidden rounded-xl border-[6px] border-surface shadow-lg sm:-right-8">
              <div className="relative aspect-[3/4]">
                <Image
                  src={aboutInset}
                  alt="Youth advocates holding mental health awareness placards"
                  fill
                  placeholder="blur"
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              id="about-title"
              eyebrow="Who we are"
              title={
                <>
                  A youth network built on <span className="italic">evidence</span> and trust.
                </>
              }
              intro={site.mission}
            />
            <div className="mt-8 flex items-start gap-4 rounded-xl border border-line bg-white p-5">
              <ShieldCheck aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-gold-700" />
              <p className="text-sm leading-relaxed text-muted">
                <strong className="font-semibold text-navy-900">Registered NGO No. {site.registration.number}</strong>
                <br />
                {site.registration.status}, on {site.registration.date}.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/about" variant="outline" arrow>
                About {site.shortName}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* ───────────── Programmes ───────────── */}
      <Section labelledBy="programs-title">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="programs-title"
            eyebrow="What we do"
            title="Five programme areas, one integrated approach."
            intro="Each programme combines community research, youth leadership and direct services — because lasting change needs all three."
          />
          <ButtonLink href="/programs" variant="link" arrow className="shrink-0 self-start md:self-auto">
            All programmes
          </ButtonLink>
        </div>

        <ol className="mt-14 border-t border-line">
          {programs.map((program, i) => {
            return (
              <li key={program.slug} className="group relative border-b border-line">
                <div className="grid items-center gap-x-8 gap-y-3 py-7 transition-colors duration-300 sm:grid-cols-[4rem_1fr_auto] md:grid-cols-[5rem_minmax(0,18rem)_1fr_auto] md:py-9">
                  <span className="font-serif text-2xl text-gold-700 italic">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl leading-tight font-medium md:text-[1.7rem]">
                    <Link href={`/programs#${program.slug}`} className="after:absolute after:inset-0">
                      {program.title}
                    </Link>
                  </h3>
                  <p className="leading-relaxed text-muted sm:col-start-2 md:col-start-auto">{program.summary}</p>
                  <span className="hidden size-12 items-center justify-center rounded-full border border-line text-navy-900 transition-colors duration-300 group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-white sm:inline-flex sm:row-span-2 sm:row-start-1 sm:col-start-3 md:row-span-1 md:col-start-auto">
                    <ProgramIcon name={program.icon} className="size-5 group-hover:hidden" />
                    <ArrowUpRight aria-hidden="true" className="hidden size-5 group-hover:block" />
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* ───────────── Approach ───────────── */}
      <Section tone="navy" labelledBy="approach-title" className="relative overflow-hidden">
        <SectionHeading
          id="approach-title"
          onDark
          eyebrow="How we work"
          title="From networks to evidence to lasting change."
          intro="Our model follows the journey of every young person we work with — and the communities around them."
        />
        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {approach.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold-500 font-serif text-lg text-gold-300">
                  {i + 1}
                </span>
                {i < approach.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-px flex-1 bg-gradient-to-r from-gold-500/70 to-gold-500/0 lg:block"
                  />
                )}
              </div>
              <h3 className="mt-6 text-2xl font-medium text-white">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-navy-100/75">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ───────────── Leadership voice ───────────── */}
      <Section labelledBy="ceo-quote">
        <figure className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="relative mx-auto size-48 md:size-60">
            <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-full bg-gold-100" />
            <Image
              src={ceo.photo}
              alt={ceo.name}
              fill
              sizes="240px"
              placeholder="blur"
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <span aria-hidden="true" className="block font-serif text-8xl leading-[0.6] text-gold-500">
              “
            </span>
            <blockquote id="ceo-quote" className="mt-4 font-serif text-3xl leading-snug text-navy-900 sm:text-4xl">
              {ceo.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-gold-500" />
              <span>
                <span className="block font-semibold text-navy-900">{ceo.name}</span>
                <span className="text-sm text-muted">{ceo.role}</span>
              </span>
            </figcaption>
          </div>
        </figure>
      </Section>

      {/* ───────────── From the field ───────────── */}
      <Section tone="surface" labelledBy="stories-title">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="stories-title" eyebrow="From the field" title="Stories of youth-led change." />
          <ButtonLink href="/news" variant="link" arrow className="shrink-0 self-start md:self-auto">
            All news &amp; stories
          </ButtonLink>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <FeaturedStoryCard story={featured} />
          </div>
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            {more.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
