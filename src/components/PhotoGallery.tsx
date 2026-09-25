"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { GalleryPhoto } from "@/content/gallery";

export function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    dialog.addEventListener("keydown", onKey);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("keydown", onKey);
      dialog.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = index === null ? null : photos[index];

  return (
    <>
      <ul className="grid grid-flow-dense grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {photos.map((photo, i) => (
          <li key={photo.caption} className={i === 0 || i === 7 ? "col-span-2 row-span-2" : ""}>
            <button
              type="button"
              onClick={() => open(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-navy-100"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                placeholder="blur"
                sizes={i === 0 || i === 7 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 to-transparent px-4 pt-10 pb-4 text-left text-sm leading-snug font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {photo.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-navy-950/95 p-0 text-white backdrop:bg-navy-950/80"
      >
        {current && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <p className="text-sm text-navy-100/80" aria-live="polite">
                {index! + 1} / {photos.length}
              </p>
              <button
                type="button"
                onClick={close}
                className="inline-flex size-11 items-center justify-center rounded-full hover:bg-white/10"
              >
                <X aria-hidden="true" className="size-6" />
                <span className="sr-only">Close photo viewer</span>
              </button>
            </div>
            <figure className="relative flex min-h-0 flex-1 flex-col items-center justify-center gap-5 px-5 pb-8 sm:px-20">
              <div className="relative h-full w-full">
                <Image
                  key={current.caption}
                  src={current.src}
                  alt={current.caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="max-w-2xl text-center font-serif text-xl">{current.caption}</figcaption>
            </figure>
            <button
              type="button"
              onClick={() => step(-1)}
              className="absolute top-1/2 left-3 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft aria-hidden="true" className="size-6" />
              <span className="sr-only">Previous photo</span>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="absolute top-1/2 right-3 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 sm:right-6"
            >
              <ChevronRight aria-hidden="true" className="size-6" />
              <span className="sr-only">Next photo</span>
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
