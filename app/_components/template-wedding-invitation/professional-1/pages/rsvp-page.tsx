import Link from "next/link";
import { FiArrowLeft, FiAward, FiChevronDown, FiEdit3, FiUser } from "react-icons/fi";
import { HiHeart, HiSparkles } from "react-icons/hi2";
import { RiDoubleQuotesL } from "react-icons/ri";

export function ProfessionalOneRsvpPage() {
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

        <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
          <div className="flex flex-col gap-8 md:col-span-4">
            <article className="rounded-xl border-l-4 border-secondary/20 bg-surface-container-lowest p-8 shadow-[0_12px_40px_rgba(48,51,46,0.04)]">
              <RiDoubleQuotesL className="mb-4 text-secondary-dim" />
              <p className="mb-6 font-body leading-relaxed text-on-surface">
                Selamat menempuh hidup baru Maya dan Alex! Semoga cinta kalian selalu mekar seperti
                bunga di musim semi, abadi dan penuh warna.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high">
                  <FiUser className="text-sm text-primary" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary">Aditya Pratama</h4>
                  <p className="text-[10px] uppercase tracking-widest text-outline">
                    10 Menit yang lalu
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-transparent bg-surface-container-low p-8 transition-all hover:border-outline-variant/10 hover:bg-surface-container-lowest">
              <p className="mb-6 text-lg leading-relaxed font-body italic text-on-surface opacity-90">
                &quot;Best wishes for a lifetime of love and happiness together. So happy for you
                both!&quot;
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-headline font-bold text-primary">Sarah &amp; Mike</h4>
                  <p className="text-[10px] uppercase tracking-widest text-outline">
                    1 Jam yang lalu
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-surface-container-lowest p-8 shadow-[0_12px_40px_rgba(48,51,46,0.04)]">
              <p className="mb-6 font-body leading-relaxed text-on-surface">
                Barakallah untuk kalian berdua. Semoga menjadi keluarga yang sakinah, mawaddah,
                warahmah. Aamiin.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <HiHeart className="text-sm text-primary" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary">Ustadz Hasan</h4>
                  <p className="text-[10px] uppercase tracking-widest text-outline">
                    3 Jam yang lalu
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="flex flex-col gap-8 md:col-span-4 md:mt-12">
            <div className="relative mb-4 h-64 overflow-hidden rounded-xl">
              <img
                alt="Wedding Flowers"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUpH8FvsHU_SIeq9EAO-V22GFTWVjI65PLlzBRsvvqxTAYBny1POyU5AX8nLuiqTN0V6mnRD9S-zJt9N-E0nb1jNGpqdoiuDW90KugG60a7EiGQXjGAOPS1Yjg_aOJtIxK1xSCPI67YZXROYtGx3p3ymSGwiUa5SRWb7lM_iib2QNFsJUJlLi-wuG_I1Cciu6SEGJUFWaQdUDbtB6O8wHRR_C5yAjrPTJjy4zzItdZesytBlEukXzN7AJn3SVgMZ3HJLsIjdf0ETgk"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>

            <article className="rounded-xl bg-secondary p-8 text-on-secondary shadow-xl md:-translate-y-8">
              <RiDoubleQuotesL className="mb-4 opacity-50" />
              <p className="font-headline mb-8 text-2xl leading-snug">
                Akhirnya hari yang ditunggu tiba! Terharu melihat kalian berdua di pelaminan. Keep
                growing together!
              </p>
              <div className="flex items-center gap-4 border-t border-on-secondary/20 pt-6">
                <div>
                  <h4 className="font-body font-bold text-white">Nadia &amp; Geng SMA</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-70">
                    5 Jam yang lalu
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-surface-container-lowest p-8 shadow-[0_12px_40px_rgba(48,51,46,0.04)]">
              <p className="mb-6 font-body leading-relaxed text-on-surface">
                Selamat ya Alex! Jagain Maya baik-baik. Semoga dilancarkan segala urusannya sampai
                maut memisahkan.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-headline font-bold text-primary">Bambang Wijaya</h4>
                  <p className="text-[10px] uppercase tracking-widest text-outline">
                    6 Jam yang lalu
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-surface-container-low p-8">
              <p className="mb-6 font-body leading-relaxed text-on-surface">
                Happy wedding guys! May your journey be filled with joy and countless beautiful
                memories.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-headline font-bold text-primary">Rizky Febrian</h4>
                  <p className="text-[10px] uppercase tracking-widest text-outline">
                    8 Jam yang lalu
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="flex flex-col gap-8 md:col-span-4 md:mt-24">
            <article className="rounded-xl bg-surface-container-lowest p-8 shadow-[0_12px_40px_rgba(48,51,46,0.04)]">
              <p className="mb-6 font-body leading-relaxed text-on-surface">
                Turut bahagia untuk kalian. Semoga cinta kalian menjadi inspirasi bagi orang-orang
                di sekitar. Selamat!
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary/10">
                  <FiAward className="text-sm text-tertiary" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary">Citra Kirana</h4>
                  <p className="text-[10px] uppercase tracking-widest text-outline">
                    12 Jam yang lalu
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-8">
              <p className="mb-6 font-body leading-relaxed text-on-surface italic">
                &quot;A beautiful wedding for a beautiful couple. Congratulations on starting your
                forever.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-headline font-bold text-primary">Tante Lisa &amp; Om Rudi</h4>
                  <p className="text-[10px] uppercase tracking-widest text-outline">
                    Kemarin, 21:00
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-surface-container-lowest p-8 shadow-[0_12px_40px_rgba(48,51,46,0.04)]">
              <p className="mb-6 font-body leading-relaxed text-on-surface">
                Semoga kebahagiaan hari ini bertahan selamanya. Selamat menempuh perjalanan baru
                yang penuh berkah.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-headline font-bold text-primary">Drs. Hendrawan</h4>
                  <p className="text-[10px] uppercase tracking-widest text-outline">
                    Kemarin, 19:45
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-primary p-8 text-on-primary">
              <p className="mb-6 font-body leading-relaxed text-white/90">
                Wishing you both a lifetime of togetherness. Proud of you, Alex!
              </p>
              <div className="flex items-center gap-4 border-t border-on-primary/10 pt-6">
                <div>
                  <h4 className="font-headline font-bold text-white">Kevin Sanjaya</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/50">
                    Kemarin, 18:20
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <div className="mt-24 text-center">
          <button className="mx-auto flex items-center gap-3 rounded-full bg-surface-container-high px-12 py-4 font-semibold text-primary transition-all cursor-pointer hover:bg-surface-container-highest">
            <FiChevronDown />
            Lihat Lebih Banyak
          </button>
        </div>
      </main>

      <footer className="mt-24 w-full bg-surface-container-low py-12 dark:bg-[#252722]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-12 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="font-headline text-lg text-primary italic dark:text-[#fafaf5]">
              The Editorial Union
            </span>
            <p className="font-body text-sm tracking-wide text-primary opacity-60">
              &copy; 2024 The Editorial Union. Handcrafted for our forever.
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
