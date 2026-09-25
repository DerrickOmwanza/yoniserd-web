import Image from "next/image";
import Link from "next/link";

import { formatStoryDate, type Story } from "@/content/stories";

function Meta({ story, onDark = false }: { story: Story; onDark?: boolean }) {
  const date = formatStoryDate(story.date);
  return (
    <p
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-[0.14em] uppercase ${onDark ? "text-gold-300" : "text-gold-700"}`}
    >
      <span>{story.category}</span>
      {date && (
        <>
          <span aria-hidden="true" className={onDark ? "text-white/40" : "text-line"}>
            ●
          </span>
          <time dateTime={story.date} className={onDark ? "text-white/80" : "text-muted"}>
            {date}
          </time>
        </>
      )}
    </p>
  );
}

/** Large image-led card with the text overlaid — used for the lead story. */
export function FeaturedStoryCard({ story }: { story: Story }) {
  return (
    <article className="group relative isolate flex min-h-[28rem] overflow-hidden rounded-2xl bg-navy-950 sm:min-h-[34rem]">
      <Image
        src={story.image}
        alt={story.imageAlt}
        fill
        sizes="(min-width: 1024px) 58vw, 100vw"
        placeholder="blur"
        className="-z-10 object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/0"
      />
      <div className="mt-auto p-6 sm:p-10">
        <Meta story={story} onDark />
        <h3 className="mt-3 max-w-xl text-3xl leading-tight font-medium text-white sm:text-4xl">
          <Link href={`/news#${story.slug}`} className="after:absolute after:inset-0">
            {story.title}
          </Link>
        </h3>
        <p className="mt-3 max-w-xl leading-relaxed text-white/85">{story.excerpt}</p>
      </div>
    </article>
  );
}

/** Compact horizontal card. */
export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group relative grid grid-cols-[7.5rem_1fr] gap-5 sm:grid-cols-[11rem_1fr]">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-navy-100">
        <Image
          src={story.image}
          alt={story.imageAlt}
          fill
          sizes="176px"
          placeholder="blur"
          className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center">
        <Meta story={story} />
        <h3 className="mt-2 text-xl leading-snug font-medium sm:text-2xl">
          <Link
            href={`/news#${story.slug}`}
            className="decoration-gold-500 decoration-2 underline-offset-4 after:absolute after:inset-0 group-hover:underline"
          >
            {story.title}
          </Link>
        </h3>
        <div className="mt-2 hidden sm:block">
          <p className="line-clamp-2 text-sm leading-relaxed text-muted">{story.excerpt}</p>
        </div>
      </div>
    </article>
  );
}

/** Vertical card for grids. */
export function StoryTile({ story, headingLevel = "h3" }: { story: Story; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-100">
        <Image
          src={story.image}
          alt={story.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
        />
      </div>
      <div className="mt-5">
        <Meta story={story} />
        <Heading className="mt-2 font-serif text-2xl leading-snug font-medium text-navy-900">
          <Link
            href={`/news#${story.slug}`}
            className="decoration-gold-500 decoration-2 underline-offset-4 after:absolute after:inset-0 group-hover:underline"
          >
            {story.title}
          </Link>
        </Heading>
        <p className="mt-2 leading-relaxed text-muted">{story.excerpt}</p>
        <p className="mt-3 text-sm text-muted">{story.location}</p>
      </div>
    </article>
  );
}
