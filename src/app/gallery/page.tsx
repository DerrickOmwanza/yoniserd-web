import type { Metadata } from "next";

import { ComingSoon, PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and videos from YoNISeRD events, campaigns and programmes.",
  alternates: { canonical: "/gallery" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments of youth-led change."
        intro="Photos and videos from YoNISeRD events, campaigns and programmes."
      />
      <ComingSoon />
    </>
  );
}
