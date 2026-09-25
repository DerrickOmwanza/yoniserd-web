import type { ReactNode } from "react";

import { Container, Eyebrow } from "@/components/ui/Section";

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:72px_72px]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 -z-10 size-[32rem] rounded-full bg-sky-500/20 blur-3xl"
      />
      <Container className="py-20 sm:py-28">
        <Eyebrow onDark>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl text-5xl leading-[1.05] font-medium text-white sm:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100/85 sm:text-xl">{intro}</p>}
      </Container>
    </section>
  );
}

/** Temporary notice for pages that are still being rebuilt in the redesign. */
export function ComingSoon() {
  return (
    <Container className="py-20">
      <p className="max-w-2xl rounded-xl border border-dashed border-line bg-surface p-6 text-muted">
        This page is being redesigned. The full content will appear here in the next update.
      </p>
    </Container>
  );
}
