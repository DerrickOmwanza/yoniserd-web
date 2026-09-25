import type { Metadata } from "next";

import { ComingSoon, PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Campaigns, dialogues and services delivered by young people across Kisii County.",
  alternates: { canonical: "/our-work" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Youth-led action in communities."
        intro="Campaigns, dialogues and services delivered by young people across Kisii County."
      />
      <ComingSoon />
    </>
  );
}
