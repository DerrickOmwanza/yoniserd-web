import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

import { Container, Eyebrow } from "@/components/ui/Section";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: StaticImageData;
  imageAlt?: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, intro, image, imageAlt = "", children }: PageHeaderProps) {
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
      <Container
        className={`py-16 sm:py-24 ${image ? "grid items-center gap-12 lg:grid-cols-12 lg:gap-10 lg:py-24" : "sm:py-28"}`}
      >
        <div className={image ? "lg:col-span-7" : ""}>
          <Eyebrow onDark>{eyebrow}</Eyebrow>
          <h1 className="max-w-4xl text-[2.75rem] leading-[1.05] font-medium text-white sm:text-6xl">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100/85 sm:text-xl">{intro}</p>}
          {children && <div className="mt-10">{children}</div>}
        </div>
        {image && (
          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -top-4 -right-4 bottom-8 left-8 rounded-2xl border border-gold-500/60"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
