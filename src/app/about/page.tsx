import type { Metadata } from "next";

import { ComingSoon, PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A registered Kenyan NGO connecting, empowering and mobilising young people through networks, research and integrated services since 2018.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About YoNISeRD"
        title="Rooted in Kisii. Led by young people."
        intro="A registered Kenyan NGO connecting, empowering and mobilising young people through networks, research and integrated services since 2018."
      />
      <ComingSoon />
    </>
  );
}
