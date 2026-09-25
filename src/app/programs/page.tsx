import type { Metadata } from "next";

import { ComingSoon, PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Programmes",
  description: "Five integrated programme areas that combine community research, youth leadership and direct services.",
  alternates: { canonical: "/programs" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Programmes that meet young people where they are."
        intro="Five integrated programme areas that combine community research, youth leadership and direct services."
      />
      <ComingSoon />
    </>
  );
}
