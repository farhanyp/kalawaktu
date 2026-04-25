"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiChevronDown, FiEdit3, FiUser } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { RiDoubleQuotesL } from "react-icons/ri";
import { formatFriendlyDate } from "../utils";

type InteractionItem = {
  id: string;
  name: string;
  message: string | null;
  totalGuest: number | null;
  absence: boolean | null;
  isConfirmed: boolean | null;
  createdAt?: string;
};

type ProfessionalOneRsvpPageProps = {
  brandName?: string;
  interactions?: InteractionItem[];
};

export function ProfessionalOneRsvpPage({
  brandName = "Kala Waktu",
  interactions = [],
}: ProfessionalOneRsvpPageProps) {
  const PAGE_SIZE = 6;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const displayedInteractions = interactions.slice(0, visibleCount);
  const canLoadMore = visibleCount < interactions.length;

  return (
    <>
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-12 lg:px-24">
        <section className="mb-24 text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface-container-high px-4 py-1 text-xs font-label uppercase tracking-widest text-on-surface-variant">
            <HiSparkles className="text-sm" />
            Digital Guestbook
          </div>
          <h1 className="mb-8 font-headline text-5xl leading-tight text-primary italic md:text-7xl">
            Doa Restu dari Kerabat
          </h1>
          <p className="max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant opacity-80">
            Terima kasih atas segala ucapan manis dan doa tulus yang telah diberikan. Kehadiran dan
            perhatian Anda adalah kado terindah bagi perjalanan baru kami.
          </p>
          <div className="mt-12">
            <Link
              className="inline-flex items-center gap-3 font-semibold text-secondary transition-all hover:gap-5"
              href="../"
            >
              <FiArrowLeft />
              Kembali ke Beranda
            </Link>
          </div>
        </section>

        {interactions.length > 0 ? (
          <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedInteractions.map((item) => (
              <article
                key={item.id}
                className="rounded-xl bg-surface-container-lowest p-8 shadow-[0_12px_40px_rgba(48,51,46,0.04)]"
              >
                <RiDoubleQuotesL className="mb-4 text-secondary-dim" />
                <p className="mb-6 font-body leading-relaxed text-on-surface">
                  {item.message ?? "Terima kasih atas doa dan restunya."}
                </p>
                <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high">
                    <FiUser className="text-sm text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary">{item.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-outline">
                      {formatFriendlyDate(item.createdAt)}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-outline/70">
                      {item.absence ? "Tidak hadir" : "Hadir"}
                      {item.totalGuest ? ` - ${item.totalGuest} tamu` : ""}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="rounded-2xl bg-surface-container-low p-10 text-center">
            <h2 className="font-headline text-3xl italic text-primary">Belum Ada Ucapan</h2>
            <p className="mt-3 text-on-surface-variant">Ucapan dari tamu akan tampil di sini.</p>
          </section>
        )}

        {interactions.length > 0 && canLoadMore ? (
          <div className="mt-24 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              className="mx-auto flex cursor-pointer items-center gap-3 rounded-full bg-surface-container-high px-12 py-4 font-semibold text-primary transition-all hover:bg-surface-container-highest"
            >
              <FiChevronDown />
              Lihat Lebih Banyak
            </button>
          </div>
        ) : null}
      </main>

      <footer className="mt-24 w-full bg-surface-container-low py-12 dark:bg-[#252722]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-12 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="font-headline text-lg text-primary italic dark:text-[#fafaf5]">
              {brandName}
            </span>
            <p className="font-body text-sm tracking-wide text-primary opacity-60">
              &copy; 2024 {brandName}. Handcrafted for our forever.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              className="font-body text-sm tracking-wide text-primary opacity-60 transition-colors hover:text-secondary"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-body text-sm tracking-wide text-primary opacity-60 transition-colors hover:text-secondary"
              href="#"
            >
              Contact Us
            </a>
            <a
              className="font-body text-sm tracking-wide text-primary opacity-60 transition-colors hover:text-secondary"
              href="#"
            >
              Registry
            </a>
          </div>
        </div>
      </footer>

      <button className="group fixed right-8 bottom-8 z-40 flex items-center justify-center rounded-full bg-secondary p-4 text-on-secondary shadow-2xl transition-all hover:scale-110 active:scale-95">
        <FiEdit3 />
        <span className="max-w-0 overflow-hidden whitespace-nowrap px-0 font-medium transition-all duration-500 group-hover:max-w-xs group-hover:px-2">
          Kirim Doa
        </span>
      </button>
    </>
  );
}


