"use client";

import { FiMail } from "react-icons/fi";
import { ProfessionalOneGuestData, ProfessionalOneInvitationData } from "./core/types";
import Image from "next/image";

type GateSectionProps = {
  invitation: ProfessionalOneInvitationData;
  onOpen: () => void;
  guest: ProfessionalOneGuestData;
};

export function InvitationGate({ invitation, onOpen, guest }: GateSectionProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-stone-900">
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-transparent px-6 py-4 font-serif italic text-stone-100 backdrop-blur-sm md:px-8 md:py-6">
        <div className="font-headline text-lg font-bold text-stone-50 drop-shadow-md md:text-xl">
          Kala Waktu
        </div>
      </header>

      <main className="relative flex h-full w-full items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmnh04kLKNQYghV2ncnl0FhXBTcJR9yXdNL-fcCXb006fs0SBwHh5P8g4gMPhtGCQ32bt2qn0YbKUAkGMx7Ywx90MoZLKZNPrmFHYtDEmxNpY_ZaZkM0E-Fi2IKjTqthWXWGzXsrNQnWTVEC8vASvaEZ69Ed9jARGOusYGzNJd_LTkZfaWSjGqTbdexjqhF5ljOkPEA87kEay6vx0g-Tm8hcToIBIb72arMyvA22b1fVpNu1AUMDvVuo54hiG3zycuME0SldyBnyuZ" // Ganti dengan path lokal atau remote yang valid
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="editorial-overlay absolute inset-0" />
        </div>

        <div className="animate-fade-in relative z-10 flex flex-col items-center px-6 text-center">
          <div className="mb-6 md:mb-10">
            <span className="font-label rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[9px] font-bold uppercase tracking-[0.4em] text-white shadow-xl backdrop-blur-md md:text-xs">
              24 September 2024
            </span>
          </div>

          <div className="mb-8 space-y-4 md:mb-12">
            <p className="font-label text-[9px] font-light uppercase tracking-[0.3em] text-stone-300 opacity-80 md:text-[10px]">
              Selamat Datang di Undangan Pernikahan Kami
            </p>

            <div className="flex flex-col items-center gap-1">
              <span className="mb-1 h-px w-8 bg-secondary md:w-12" />
              <h2 className="text-shadow-elegant font-headline text-2xl font-extralight italic text-white md:text-5xl">
                Kepada Bapak/Ibu/Saudara/i
              </h2>
              <div className="mt-2 border-b border-white/20 px-4 py-1 md:mt-4 md:px-8">
                <span className="font-headline text-xl font-medium italic text-secondary-fixed-dim md:text-3xl">
                  {guest.name}
                </span>
              </div>
            </div>

            <p className="font-label text-[10px] font-medium uppercase tracking-[0.2em] text-stone-300 md:text-xs">
              The Wedding Celebration of
            </p>

            <h1 className="font-headline text-5xl font-extralight italic leading-tight text-white md:text-9xl">
              {invitation.partnerOne}
              <span className="block text-3xl text-secondary md:inline md:text-9xl"> & </span>
              {invitation.partnerTwo}
            </h1>
          </div>

          <button
            onClick={onOpen}
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-secondary px-8 py-4 font-label text-xs font-bold tracking-[0.15em] text-on-secondary shadow-2xl transition-all hover:scale-105 cursor-pointer active:scale-95 md:px-12 md:py-5"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FiMail size={16} /> BUKA UNDANGAN
            </span>
            <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
          </button>
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
          animation: fadeIn 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
}
