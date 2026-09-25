import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { socials } from "@/content/site";
import { formatStoryDate, stories } from "@/content/stories";

export const metadata: Metadata = {
  title: "News & Stories",
  description: "News, events and stories from YoNISeRD’s youth-led work across Kisii County, Kenya.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & stories"
        title={
          <>
            News from <span className="text-gold-300 italic">the field.</span>
          </>
        }
        intro="Campaigns, events and stories from young people leading change across Kisii and beyond."
      />

      <Container className="py-20 sm:py-28">
        <h2 className="sr-only">All stories</h2>
        <ol className="divide-y divide-line border-y border-line">
          {stories.map((story, i) => {
            const date = formatStoryDate(story.date);
            return (
              <li key={story.slug}>
                <article
                  id={story.slug}
                  aria-labelledby={`${story.slug}-title`}
                  className="grid gap-8 py-12 md:grid-cols-12 md:gap-12 md:py-16"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-100 md:col-span-5">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      placeholder="blur"
                      priority={i === 0}
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center md:col-span-7">
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-[0.14em] text-gold-700 uppercase">
                      <span>{story.category}</span>
                      {date && (
                        <>
                          <span aria-hidden="true" className="text-line">
                            ●
                          </span>
                          <time dateTime={story.date} className="text-muted">
                            {date}
                          </time>
                        </>
                      )}
                    </p>
                    <h3 id={`${story.slug}-title`} className="mt-3 text-3xl leading-tight font-medium sm:text-4xl">
                      {story.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted">{story.excerpt}</p>
                    <p className="mt-5 flex items-center gap-2 text-sm text-muted">
                      <MapPin aria-hidden="true" className="size-4 text-gold-700" />
                      {story.location}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </Container>

      <Section tone="surface" labelledBy="follow-title">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="follow-title"
            eyebrow="Stay in touch"
            title="Follow our work as it happens."
            intro="We share updates from events and programmes on social media first."
          />
          <ul className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-navy-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  {s.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
