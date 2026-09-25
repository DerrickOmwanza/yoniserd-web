import type { Metadata } from "next";

import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Section, SectionHeading } from "@/components/ui/Section";
import { photos, videos } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and videos from YoNISeRD campaigns, community forums and programmes in Kisii, Kenya.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={
          <>
            Moments of <span className="text-gold-300 italic">youth-led</span> change.
          </>
        }
        intro="Photos and videos from our campaigns, forums and programmes across Kisii County."
      />

      <Section labelledBy="photos-title">
        <SectionHeading id="photos-title" eyebrow="Photos" title="In the community." />
        <div className="mt-12">
          <PhotoGallery photos={photos} />
        </div>
      </Section>

      <Section tone="surface" labelledBy="videos-title">
        <SectionHeading id="videos-title" eyebrow="Videos" title="On the ground." />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {videos.map((video) => (
            <li key={video.src}>
              <figure>
                <video
                  controls
                  playsInline
                  preload="none"
                  poster={video.poster}
                  className="aspect-[9/16] w-full rounded-xl bg-navy-950 object-cover"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <figcaption className="mt-3 text-sm leading-snug font-medium text-navy-900">{video.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
