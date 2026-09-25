import type { StaticImageData } from "next/image";

import antiDrugMarch from "@/assets/gallery/gallery-1.jpg";
import gbvMarch from "@/assets/gallery/gallery-2.jpg";
import communityMobilisation from "@/assets/gallery/gallery-3.jpg";
import worldAidsDay from "@/assets/gallery/gallery-4.jpg";
import drugAbuseDay from "@/assets/gallery/gallery-5.jpg";
import mentalHealthWalk from "@/assets/gallery/gallery-6.jpg";
import peerCounselling from "@/assets/gallery/gallery-9.jpg";
import communityForum from "@/assets/gallery/gallery-12.jpg";

export type StoryCategory = "Health & Wellbeing" | "Advocacy" | "Youth Leadership" | "Community Research";

export type Story = {
  slug: string;
  title: string;
  category: StoryCategory;
  /** ISO date. Omit when the exact date is not confirmed. */
  date?: string;
  location: string;
  excerpt: string;
  image: StaticImageData;
  imageAlt: string;
};

// Newest first. Dates come from event banners / camera stamps on the photos —
// confirm undated items with the YoNISeRD team.
export const stories: Story[] = [
  {
    slug: "community-forum-2026",
    title: "Community forum brings youth and local leaders to the same table",
    category: "Community Research",
    date: "2026-01-28",
    location: "Kisii County",
    excerpt:
      "An open-air dialogue where young people and community leaders shared priorities that will shape the next round of YoNISeRD programming.",
    image: communityForum,
    imageAlt: "A YoNISeRD facilitator addressing young people and community leaders gathered on a field",
  },
  {
    slug: "national-mental-health-walk-kisii",
    title: "Hundreds walk for mental health in Kisii",
    category: "Health & Wellbeing",
    date: "2025-09-12",
    location: "Kisii Town",
    excerpt:
      "Youth champions joined the Kenya Counselling and Psychological Association’s National Mental Health Walk to break stigma and point young people to support.",
    image: mentalHealthWalk,
    imageAlt: "Young people holding a National Mental Health Walk banner on a street in Kisii",
  },
  {
    slug: "international-day-against-drug-abuse-2025",
    title: "Standing against drug abuse on 26 June",
    category: "Advocacy",
    date: "2025-06-26",
    location: "People’s Park, Kisii",
    excerpt:
      "On the International Day Against Drug Abuse and Illicit Trafficking, young people rallied their community around prevention and recovery.",
    image: drugAbuseDay,
    imageAlt: "Youth holding a 26 June 2025 International Day Against Drug Abuse banner",
  },
  {
    slug: "march-against-gbv-alcohol-and-drugs",
    title: "Youth march against gender-based violence, alcohol and drug abuse",
    category: "Advocacy",
    location: "Kisii County",
    excerpt:
      "Carrying placards they wrote themselves, young people led a community march calling for safer homes and drug-free neighbourhoods.",
    image: gbvMarch,
    imageAlt: "Young people in red T-shirts marching with hand-written placards",
  },
  {
    slug: "world-aids-day-kisii-university",
    title: "World AIDS Day with Kisii University and partners",
    category: "Health & Wellbeing",
    location: "Kisii University",
    excerpt:
      "Alongside Kisii University and the National AIDS Control Council, our youth advocates promoted testing, treatment and an end to stigma.",
    image: worldAidsDay,
    imageAlt: "Students marching behind a Kisii University World AIDS Day banner",
  },
  {
    slug: "peer-counselling-sessions",
    title: "Peer counselling that meets young people where they are",
    category: "Youth Leadership",
    location: "Kisii County",
    excerpt:
      "Trained peer counsellors hold confidential one-on-one sessions and link young people to professional mental-health services.",
    image: peerCounselling,
    imageAlt: "Two young people in a one-on-one counselling session under a tent",
  },
  {
    slug: "drug-free-community-mobilisation",
    title: "Mobilising for drug-free communities",
    category: "Advocacy",
    location: "Kisii County",
    excerpt:
      "Youth champions went street by street to start honest conversations about substance abuse with families and local leaders.",
    image: communityMobilisation,
    imageAlt: "Youth advocates walking through a town street carrying a campaign banner",
  },
  {
    slug: "anti-substance-abuse-campaign",
    title: "A youth-led campaign against substance abuse",
    category: "Advocacy",
    location: "Kisii County",
    excerpt:
      "Young people planned and led a community campaign on substance abuse and gender-based violence, with county and community partners.",
    image: antiDrugMarch,
    imageAlt: "Young people holding a campaign banner against sexual and gender-based violence and drug abuse",
  },
];

export function formatStoryDate(iso?: string): string | null {
  if (!iso) return null;
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
