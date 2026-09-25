import type { Metadata } from "next";

import { ComingSoon, PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Impact",
  description: "The difference our programmes make — measured, documented and shared.",
  alternates: { canonical: "/impact" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Impact"
        title="Measuring what matters."
        intro="The difference our programmes make — measured, documented and shared."
      />
      <ComingSoon />
    </>
  );
}
