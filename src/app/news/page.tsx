import type { Metadata } from "next";

import { ComingSoon, PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "News & Stories",
  description: "Updates, events and stories from YoNISeRD’s work across Kisii and beyond.",
  alternates: { canonical: "/news" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="News & stories"
        title="News from the field."
        intro="Updates, events and stories from YoNISeRD’s work across Kisii and beyond."
      />
      <ComingSoon />
    </>
  );
}
