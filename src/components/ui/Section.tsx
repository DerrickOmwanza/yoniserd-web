import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

type Tone = "light" | "surface" | "navy";

const tones: Record<Tone, string> = {
  light: "bg-white",
  surface: "bg-surface",
  navy: "bg-navy-950 text-white",
};

export function Section({
  children,
  tone = "light",
  id,
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-20 sm:py-28 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Small uppercase label with a gold rule — the signature section marker. */
export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        onDark ? "text-gold-300" : "text-gold-700"
      }`}
    >
      <span aria-hidden="true" className="h-px w-8 bg-gold-500" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  onDark = false,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  onDark?: boolean;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center [&>p:first-child]:justify-center" : ""}`}>
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <h2 id={id} className={`text-4xl leading-[1.08] font-medium sm:text-5xl ${onDark ? "text-white" : ""}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${onDark ? "text-navy-100/80" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}
