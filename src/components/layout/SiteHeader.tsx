"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { mainNav, site } from "@/content/site";
import logoMark from "@/assets/logo-mark.png";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled || open
            ? "border-line bg-white/95 shadow-[0_1px_12px_rgba(11,24,48,0.06)] backdrop-blur-md"
            : "border-transparent bg-white"
        }`}
      >
        <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${site.shortName} — home`}>
            <Image
              src={logoMark}
              alt=""
              width={44}
              height={44}
              priority
              className="size-11 rounded-full ring-1 ring-line"
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-semibold tracking-tight text-navy-900">{site.shortName}</span>
              <span className="mt-1 hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted sm:block">
                Youth · Research · Development
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative rounded-full px-2.5 py-2 text-[0.95rem] font-medium whitespace-nowrap transition-colors xl:px-3.5 ${
                        active ? "text-navy-900" : "text-muted hover:text-navy-900"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-2.5 -bottom-0.5 xl:inset-x-3.5 h-0.5 rounded-full bg-gold-500 transition-transform duration-300 ease-out-soft ${
                          active ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-navy-800 sm:inline-flex"
            >
              Get involved
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex size-11 items-center justify-center rounded-full text-navy-900 hover:bg-navy-50 lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Kept outside <header>: its backdrop-filter would otherwise trap this fixed panel. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="px-5 pt-6 pb-10 sm:px-8">
          <ul className="divide-y divide-line">
            {[{ label: "Home", href: "/" }, ...mainNav, { label: "Contact", href: "/contact" }].map((item) => {
              const active = item.href === "/" ? pathname === "/" : isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-4 font-serif text-2xl ${
                      active ? "text-navy-900" : "text-navy-900/75"
                    }`}
                  >
                    {item.label}
                    {active && <span aria-hidden="true" className="size-2 rounded-full bg-gold-500" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="mt-8 flex w-full items-center justify-center rounded-full bg-navy-900 px-6 py-3.5 font-semibold text-white"
          >
            Get involved
          </Link>
        </nav>
      </div>
    </>
  );
}
