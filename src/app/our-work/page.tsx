import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";

import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { StoryTile } from "@/components/StoryCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import { stories, type StoryCategory } from "@/content/stories";

import headerImage from "@/assets/gallery/gallery-8.jpg";
import advocacyImage from "@/assets/gallery/gallery-2.jpg";
import healthImage from "@/assets/gallery/gallery-6.jpg";
import leadershipImage from "@/assets/gallery/gallery-9.jpg";
import researchImage from "@/assets/gallery/gallery-12.jpg";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Youth-led campaigns, health awareness, peer counselling and community research across Kisii County — see how YoNISeRD’s programmes show up in communities.",
  alternates: { canonical: "/our-work" },
};

type WorkArea = {
  category: StoryCategory;
  title: string;
  description: string;
  activities: string[];
  image: StaticImageData;
  imageAlt: string;
};

const areas: WorkArea[] = [
  {
    category: "Advocacy",
    title: "Advocacy & community campaigns",
    description:
      "Young people plan and lead marches, awareness days and street-level conversations on substance abuse, gender-based violence and children’s rights.",
    activities: ["Community marches", "International awareness days", "Door-to-door mobilisation"],
    image: advocacyImage,
    imageAlt: "Young people marching with hand-written placards",
  },
  {
    category: "Health & Wellbeing",
    title: "Health & wellbeing",
    description:
      "We work with health partners to break stigma around mental health and HIV, and connect young people to testing, treatment and care.",
    activities: ["Mental health walks", "World AIDS Day outreach", "Referrals to services"],
    image: healthImage,
    imageAlt: "Youth holding a National Mental Health Walk banner",
  },
  {
    category: "Youth Leadership",
    title: "Youth leadership & peer support",
    description:
      "Trained peer counsellors and youth champions offer confidential support and lead activities in their own communities.",
    activities: ["Peer counselling", "Youth champions", "Leadership training"],
    image: leadershipImage,
    imageAlt: "A one-on-one peer counselling session under a tent",
  },
  {
    category: "Community Research",
    title: "Community research & dialogue",
    description:
      "Open forums and participatory research bring young people and leaders together to set priorities grounded in evidence.",
    activities: ["Community forums", "Participatory research", "Programme evaluation"],
    image: researchImage,
    imageAlt: "A facilitator addressing young people and leaders at a community forum",
  },
];

export default function OurWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title={
          <>
            Youth-led action, <span className="text-gold-300 italic">community by community.</span>
          </>
        }
        intro="Our programmes come to life through campaigns, dialogues and services designed and delivered by young people across Kisii County."
        image={headerImage}
        imageAlt="Youth advocates gathered on a Kisii street for a mental health awareness walk"
      />

      <Section labelledBy="areas-title">
        <SectionHeading
          id="areas-title"
          eyebrow="How it happens"
          title="Four ways our programmes reach young people."
        />
        <div className="mt-16 space-y-20 sm:space-y-28">
          {areas.map((area, i) => (
            <article key={area.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${i % 2 === 1 ? "lg:order-last" : ""}`}
              >
                <Image
                  src={area.image}
                  alt={area.imageAlt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl text-gold-700 italic">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-3xl leading-tight font-medium sm:text-4xl">{area.title}</h3>
                <p className="mt-5 text-lg leading-relaxed text-muted">{area.description}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {area.activities.map((activity) => (
                    <li
                      key={activity}
                      className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-navy-900"
                    >
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="surface" labelledBy="field-title">
        <SectionHeading
          id="field-title"
          eyebrow="From the field"
          title="Recent activities."
          intro="A selection of campaigns, dialogues and services from our photo archive."
        />
        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <StoryTile key={story.slug} story={story} />
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
