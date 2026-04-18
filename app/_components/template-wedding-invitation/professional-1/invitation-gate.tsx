"use client";

import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { ProfessionalOneTemplateData } from "./core/types";

type GateSectionProps = {
  data: ProfessionalOneTemplateData;
};

export function InvitationGate({ data }: GateSectionProps) {
  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-transparent px-8 py-6 font-serif italic tracking-tight text-stone-100 backdrop-blur-sm">
        <div className="font-headline text-xl font-bold text-stone-50 drop-shadow-md">
          The Editorial Union
        </div>
      </header>

      <main className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full scale-105 object-cover"
            alt="Cinematic wide shot of a modern couple walking through a minimalist architectural garden at dusk"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmnh04kLKNQYghV2ncnl0FhXBTcJR9yXdNL-fcCXb006fs0SBwHh5P8g4gMPhtGCQ32bt2qn0YbKUAkGMx7Ywx90MoZLKZNPrmFHYtDEmxNpY_ZaZkM0E-Fi2IKjTqthWXWGzXsrNQnWTVEC8vASvaEZ69Ed9jARGOusYGzNJd_LTkZfaWSjGqTbdexjqhF5ljOkPEA87kEay6vx0g-Tm8hcToIBIb72arMyvA22b1fVpNu1AUMDvVuo54hiG3zycuME0SldyBnyuZ"
          />
          <div className="editorial-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="animate-fade-in relative z-10 flex max-w-4xl flex-col items-center px-6 text-center">
          <div className="mb-10">
            <span className="font-label rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.5em] text-white shadow-xl backdrop-blur-md md:text-xs">
              24 September 2024
            </span>
          </div>

          <div className="mb-12 space-y-6">
            <div className="flex flex-col items-center">
              <p className="font-label mb-4 text-[10px] font-light uppercase tracking-[0.4em] text-stone-300 opacity-80">
                Selamat Datang di Undangan Pernikahan Kami
              </p>
              <div className="group mb-8 flex flex-col items-center gap-2">
                <span className="mb-2 h-px w-12 bg-secondary transition-all group-hover:w-20" />
                <h2 className="text-shadow-elegant font-headline text-3xl font-extralight italic text-white md:text-5xl">
                  Kepada Bapak/Ibu/Saudara/i
                </h2>
                <div className="mt-4 border-b border-white/30 px-8 py-2">
                  <span className="font-headline text-2xl font-medium italic tracking-wide text-secondary-fixed-dim md:text-3xl">
                    Nama Tamu Undangan
                  </span>
                </div>
              </div>
              <p className="text-shadow-elegant font-label mb-4 text-xs font-medium uppercase tracking-[0.3em] text-stone-300">
                The Wedding Celebration of
              </p>
              <h1 className="font-headline mb-4 text-7xl leading-none font-extralight tracking-tighter text-white italic md:text-9xl">
                {data.invitation.partnerOne}
                <span className="text-secondary [filter:drop-shadow(0_0_15px_rgba(159,66,38,0.4))]">
                  &amp;
                </span>
                {data.invitation.partnerTwo}
              </h1>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <Link
              href={data.url}
              className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-secondary px-12 py-5 font-label text-sm font-bold tracking-[0.2em] text-on-secondary shadow-[0_20px_50px_rgba(159,66,38,0.4)] transition-all duration-500 hover:scale-105 hover:bg-secondary-dim"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FiMail size={18} />
                BUKA UNDANGAN
              </span>
              <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
            </Link>

            <div className="flex flex-col items-center gap-3">
              <p className="font-label text-[10px] uppercase tracking-[0.4em] text-stone-400 opacity-70">
                Scroll to explore our story
              </p>
              <div className="h-12 w-px bg-gradient-to-b from-stone-400 to-transparent" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-12 hidden md:block">
          <div className="relative h-32 w-px bg-white/20">
            <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-secondary shadow-[0_0_15px_rgba(159,66,38,0.9)]" />
          </div>
        </div>

        <div className="vertical-text absolute top-1/2 right-12 hidden -translate-y-1/2 lg:block">
          <p className="font-label origin-right rotate-90 text-[9px] uppercase tracking-[0.8em] text-white/30">
            Union Editorial - 2024
          </p>
        </div>
      </main>

      <style jsx global>{`
        .text-shadow-elegant {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
    </>
  );
}
