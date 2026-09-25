import type { StaticImageData } from "next/image";

import g1 from "@/assets/gallery/gallery-1.jpg";
import g2 from "@/assets/gallery/gallery-2.jpg";
import g3 from "@/assets/gallery/gallery-3.jpg";
import g4 from "@/assets/gallery/gallery-4.jpg";
import g5 from "@/assets/gallery/gallery-5.jpg";
import g6 from "@/assets/gallery/gallery-6.jpg";
import g7 from "@/assets/gallery/gallery-7.jpg";
import g8 from "@/assets/gallery/gallery-8.jpg";
import g9 from "@/assets/gallery/gallery-9.jpg";
import g10 from "@/assets/gallery/gallery-10.jpg";
import g12 from "@/assets/gallery/gallery-12.jpg";
import g13 from "@/assets/gallery/gallery-13.jpg";

export type GalleryPhoto = { src: StaticImageData; caption: string };

export const photos: GalleryPhoto[] = [
  { src: g10, caption: "Young people at the National Mental Health Walk, Kisii" },
  { src: g6, caption: "Marching with the Kenya Counselling and Psychological Association" },
  { src: g12, caption: "Opening a community forum with youth and local leaders" },
  { src: g4, caption: "World AIDS Day with Kisii University and partners" },
  { src: g2, caption: "Hand-made placards against gender-based violence and drug abuse" },
  { src: g7, caption: "Youth advocates calling for healthy minds and healthy lives" },
  { src: g13, caption: "A community dialogue held in the open air" },
  { src: g5, caption: "International Day Against Drug Abuse, 26 June 2025" },
  { src: g1, caption: "A youth-led campaign against substance abuse and GBV" },
  { src: g8, caption: "Mental health awareness on the streets of Kisii" },
  { src: g9, caption: "A confidential peer counselling session" },
  { src: g3, caption: "Mobilising the community for drug-free neighbourhoods" },
];

export type GalleryVideo = { src: string; poster: string; caption: string };

export const videos: GalleryVideo[] = [
  {
    src: "/media/field-1.mp4",
    poster: "/media/field-1-poster.jpg",
    caption: "Team-building at the community youth forum",
  },
  {
    src: "/media/field-2.mp4",
    poster: "/media/field-2-poster.jpg",
    caption: "Warm-up activity with forum participants",
  },
  { src: "/media/field-3.mp4", poster: "/media/field-3-poster.jpg", caption: "Trust and teamwork exercises" },
  { src: "/media/field-4.mp4", poster: "/media/field-4-poster.jpg", caption: "Group session with young leaders" },
];
