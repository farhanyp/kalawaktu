"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavKey = "home" | "acara" | "cerita" | "galeri" | "hadiah" | "rsvp";

type NavItem = {
  href: string;
  key: NavKey;
  label: string;
};

const sectionItems: Array<{ id: string; key: NavKey }> = [
  { id: "acara", key: "acara" },
  { id: "cerita", key: "cerita" },
  { id: "galeri", key: "galeri" },
  { id: "hadiah", key: "hadiah" },
  { id: "rsvp", key: "rsvp" },
];

type TopNavbarProps = {
  basePath: string;
  brandLabel?: string;
};

export function ProfessionalOneTopNavbar({ basePath, brandLabel = "Kala Waktu" }: TopNavbarProps) {
  const [open, setOpen] = useState(false);
  const [sectionActiveNav, setSectionActiveNav] = useState<NavKey>("home");
  const pathname = usePathname();

  const mobileLinkClass =
    "block border-b border-stone-200/70 pb-3 font-headline text-base italic tracking-tight transition-colors";

  const closeMenu = () => setOpen(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { key: "home", label: "Home", href: basePath },
      { key: "acara", label: "Detail Acara", href: `${basePath}#acara` },
      { key: "cerita", label: "Cerita Kami", href: `${basePath}#cerita` },
      { key: "galeri", label: "Galeri", href: `${basePath}#galeri` },
      { key: "hadiah", label: "Kirim Hadiah", href: `${basePath}#hadiah` },
      { key: "rsvp", label: "RSVP", href: `${basePath}/rsvp` },
    ],
    [basePath],
  );

  const pageActiveNav = useMemo<NavKey | null>(() => {
    if (pathname === `${basePath}/cerita`) {
      return "cerita";
    }

    if (pathname === `${basePath}/galeri`) {
      return "galeri";
    }

    if (pathname === `${basePath}/rsvp`) {
      return "rsvp";
    }

    if (pathname === basePath) {
      return null;
    }

    return "home";
  }, [basePath, pathname]);

  useEffect(() => {
    if (pageActiveNav) {
      return;
    }

    const evaluateActiveSection = () => {
      const scrollAnchor = window.scrollY + 160;
      let nextActive: NavKey = "home";

      for (const section of sectionItems) {
        const element = document.getElementById(section.id);

        if (element && scrollAnchor >= element.offsetTop) {
          nextActive = section.key;
        }
      }

      setSectionActiveNav(nextActive);
    };

    const frameId = window.requestAnimationFrame(evaluateActiveSection);
    window.addEventListener("scroll", evaluateActiveSection, { passive: true });
    window.addEventListener("hashchange", evaluateActiveSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", evaluateActiveSection);
      window.removeEventListener("hashchange", evaluateActiveSection);
    };
  }, [pageActiveNav]);

  const activeNav = pageActiveNav ?? sectionActiveNav;

  return (
    <nav className="fixed top-0 z-50 w-full max-w-full bg-stone-50/70 shadow-sm backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <Link
          href={basePath}
          className="font-headline text-2xl font-bold tracking-tighter text-stone-900"
        >
          {brandLabel}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeNav === item.key;

            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setSectionActiveNav(item.key)}
                className={cn(
                  "border-b-2 pb-1 font-headline text-lg italic tracking-tight transition-all duration-200",
                  isActive
                    ? "border-orange-800 font-semibold text-orange-800 animate-in fade-in-0 slide-in-from-bottom-1"
                    : "border-transparent text-stone-600 hover:text-stone-900",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Button
          asChild
          className="hidden rounded-xl bg-secondary px-6 py-2 font-medium text-on-secondary transition-opacity hover:opacity-80 active:scale-95 md:inline-flex"
        >
          <Link href={`${basePath}#rsvp`}>RSVP Now</Link>
        </Button>

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((previous) => !previous)}
          className="rounded-xl border-stone-300/70 bg-stone-50 text-stone-800 transition-all duration-300 hover:bg-stone-100 md:hidden"
        >
          <span className="relative block h-5 w-5">
            <FiMenu
              size={20}
              className={cn(
                "absolute inset-0 transition-all duration-200",
                open ? "scale-75 opacity-0" : "scale-100 opacity-100",
              )}
            />
            <FiX
              size={20}
              className={cn(
                "absolute inset-0 transition-all duration-200",
                open ? "scale-100 opacity-100" : "scale-75 opacity-0",
              )}
            />
          </span>
        </Button>
      </div>

      <div
        className={cn(
          "overflow-hidden bg-stone-50 transition-all duration-300 ease-out md:hidden",
          open
            ? "max-h-[30rem] border-t border-stone-200/70 px-6 pb-6 pt-4 opacity-100"
            : "max-h-0 px-6 pb-0 pt-0 opacity-0 pointer-events-none",
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-4 transition-all duration-300",
            open ? "translate-y-0" : "-translate-y-2",
          )}
        >
          {navItems.map((item) => {
            const isActive = activeNav === item.key;

            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  mobileLinkClass,
                  isActive
                    ? "border-orange-800 font-semibold text-orange-800"
                    : "text-stone-700 hover:text-stone-900",
                )}
                onClick={() => {
                  setSectionActiveNav(item.key);
                  closeMenu();
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={`${basePath}#rsvp`}
            className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-secondary px-6 py-3 font-medium text-on-secondary transition-opacity hover:opacity-80"
            onClick={closeMenu}
          >
            RSVP Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
