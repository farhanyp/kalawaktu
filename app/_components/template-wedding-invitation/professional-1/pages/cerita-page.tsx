import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { HiHeart, HiSparkles } from "react-icons/hi2";
import { MdOutlineDiamond } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";

type ProfessionalOneCeritaPageProps = {
  basePath: string;
  brandName: string;
};

export function ProfessionalOneCeritaPage({
  basePath,
  brandName,
}: ProfessionalOneCeritaPageProps) {
  return (
    <main className="bg-surface text-on-surface">
      <header className="mx-auto flex max-w-7xl flex-col items-end gap-8 px-6 pt-40 pb-24 md:flex-row md:px-12">
        <div className="flex-1">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-secondary">
            Chapter One
          </span>
          <h1 className="font-headline text-primary text-[clamp(3rem,10vw,6rem)] italic leading-[0.9] tracking-tighter">
            Sebuah Narasi <br />
            Tentang Kita.
          </h1>
        </div>
        <div className="text-on-surface-variant leading-relaxed md:w-1/3">
          Perjalanan ini tidak selalu tentang tujuan akhir, tapi tentang setiap percakapan kecil,
          tawa yang tak tertahan, dan komitmen yang tumbuh di antara barisan kata-kata.
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-12">
        <div className="timeline-line absolute top-0 bottom-0 left-1/2 hidden w-px md:block" />

        <article className="group relative mb-48 flex flex-col items-center gap-12 md:flex-row">
          <div className="order-2 w-full flex-1 text-right md:order-1">
            <div className="md:pr-16">
              <span className="text-xs font-bold uppercase tracking-widest text-tertiary">Juli 2021</span>
              <h2 className="mt-2 mb-4 font-headline text-4xl text-primary">Pertemuan Pertama</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Bukan di bawah hujan atau di tengah keramaian konser. Kita bertemu di sebuah
                perpustakaan kota yang sepi. Hanya ada aroma kertas tua dan suara mesin kopi yang
                berdengung pelan.
              </p>
            </div>
          </div>
          <div className="relative z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-outline-variant bg-surface-container-lowest md:flex">
            <HiSparkles className="text-primary" />
          </div>
          <div className="order-1 w-full flex-1 md:order-2">
            <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-surface-container-high transition-shadow duration-500 group-hover:shadow-2xl">
              <img className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" alt="first meet in library" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLWRFKSTUaf6uVJtGABQgMtJjpiLBe20M-5D6HvY_x0WLf7LJC79gg4iNz3Fvl8-ud2L6li3U8w-rK5v71Oi6o9dgB8s0RoHXL9O15CpWAQ77Z8XdGWsP9U8KyZI1YzADUe8Wtlw_rwtPZAMVNwhOwEx5B2ZszKCxFT0tdN2iTZywWEMvo1Y4sfbNyPNbibe5ZENTG5IZKIX2ryJ6cmlBdoxxWtIwjKkfSNkA1Abqt3rya87UdP2HfB-CoMjH9wR6pHcEJxbwCQFzF" />
              <div className="absolute -bottom-4 -left-4 rounded-lg border border-surface-container-high bg-surface-container-lowest p-4 font-headline italic shadow-sm">
                &quot;The day the story began.&quot;
              </div>
            </div>
          </div>
        </article>

        <article className="group relative mb-48 flex flex-col items-center gap-12 md:flex-row">
          <div className="order-1 w-full flex-1">
            <div className="aspect-video overflow-hidden rounded-xl bg-surface-container-high transition-shadow duration-500 group-hover:shadow-2xl">
              <img className="h-full w-full object-cover" alt="first date cafe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKS1y-OXXJt_nWVPf-kvtd-2OXh61r_evHSrLzKDFMsRYQZSeIr-ba4eWDFr-ZXwKpDnNqQ1k3rMy02MOUrcDJSYjiTHo4Yig_u34Js1kF5EsJaIsYK96AZLWKqrKDY8rlfjZHPLoFiOECJyMbaeVKV86o55Aq2zgQ1InTWCoRK2TgAmovd-F0_YhPjpJyupOLNmGcoNJ7qo1ieMfIK8E5Fa8AJRKI7OzUtoTlndD4kkGHP2EKaPfC7o3cSx_98tNy7EyAk7KkTrqe" />
            </div>
            <div className="mt-4 flex justify-end">
              <span className="font-headline italic text-primary/60">Senja di Sudut Kota</span>
            </div>
          </div>
          <div className="relative z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-outline-variant bg-surface-container-lowest md:flex">
            <HiHeart className="text-secondary" />
          </div>
          <div className="order-2 w-full flex-1">
            <div className="md:pl-16">
              <span className="text-xs font-bold uppercase tracking-widest text-tertiary">Agustus 2021</span>
              <h2 className="mt-2 mb-4 font-headline text-4xl text-primary">Kencan Pertama</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Kopi dingin dan pembicaraan yang tak kunjung usai. Kita menyadari bahwa kita
                memiliki daftar putar lagu yang hampir identik.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="h-32 overflow-hidden rounded-lg bg-surface-container">
                  <img className="h-full w-full object-cover grayscale" alt="latte" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoGFlV0-0xOo7ai_RU75gXjjwIWY-8zfGtLpL0Fg3ZIXz5XlnQsl8gfdOdUjWdcBTzYl1tSS4lRY2BDeqThdRWDQ8I9k7_Lt3xYPYgWO7Pt8jbgkHma5Qpvz_-EFm7ao3p2ddhyu62JXr-bV3820-57ZzgmLyOlr3iwvMGWcxLZTSU0SWKWeeBkKdX2Bg1TwkpU86pxYO8bnTm6sws9VYYGmkyEi2QyXGd4bcqMx2UFOH6dWFDCxzl0ZN1ce2hYKrw2CuYagW3ZTNW" />
                </div>
                <div className="h-32 overflow-hidden rounded-lg bg-surface-container">
                  <img className="h-full w-full object-cover grayscale" alt="city lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7JuNrKo0E9YCpHyDR8gcDvB4gS6NY-u9YcJFj2dniz2nwb39WH__WIpugWVyhNVuHxXSMOnlxcqNc_e4J3n-ZBloNT7B0rWH9tGCLA1RlVEdy4BVrTryyxxtNYIim-fr_xwdYwuGLMUGnH0LxK_o1JAnTe64EYyhIYAR6VlP7MbCFTjC0yEooHDC0BohSTX6j_GaGH3TDUA9MFdhXTEBZynmhPWZ4AIQ9F3BehMbAox24cs-cNSBQp-Fw7kvZCREzA25mcPOLyw-A" />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="group relative mb-24 flex flex-col items-center gap-12 md:flex-row">
          <div className="order-2 w-full flex-1 text-right md:order-1">
            <div className="md:pr-16">
              <span className="text-xs font-bold uppercase tracking-widest text-tertiary">Desember 2023</span>
              <h2 className="mt-2 mb-4 font-headline text-4xl text-primary">Satu Janji Selamanya</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Di puncak bukit saat matahari mulai tenggelam, sebuah pertanyaan sederhana mengubah
                segalanya: maukah kau menulis bab selanjutnya bersamaku?
              </p>
              <div className="mt-8">
                <button className="ml-auto flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm uppercase tracking-widest text-on-primary transition-all hover:opacity-90">
                  Lihat Galeri Lamaran
                  <FiArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="relative z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-primary text-on-primary md:flex">
            <MdOutlineDiamond />
          </div>
          <div className="order-1 w-full flex-1 md:order-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-high transition-shadow duration-500 group-hover:shadow-2xl">
              <img className="h-full w-full object-cover" alt="proposal at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATsj3sBrYmVDxmBnDZCMyPgvLrVuqJG2Gxlyx0xOHF2JBvSpWNRFJwpxaDLA0i8op_nufN2k91HkI3p0BAf1bJSoSpZsC6p1Qbsr4S1JLZvIuecCkWZrHLU1LuDVeg8mQMzVnBi2YuWhL7G_IRnAEF6eUKARRrSiW6uEE_uJ_SShbgwJSSiRwhHyO9FFe4Kf-2D1dkh0mpHGAL3p6Nkev70tIQLR0p0z-VTJbAILvvnrdKaWRmV63MZs27dgHqgf2V3a_Rai-kJInb" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </article>
      </section>

      <section className="bg-surface-container-low px-6 py-32 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-surface-container-lowest p-12 md:col-span-2">
            <RiDoubleQuotesL className="mb-6 text-5xl text-secondary" />
            <p className="font-headline text-4xl italic leading-snug text-primary">
              &quot;Dalam editorial hidup yang tak terduga, kau adalah paragraf yang tak pernah ingin aku akhiri.&quot;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-outline-variant" />
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{brandName}</span>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="rounded-3xl bg-secondary-container p-8 text-center">
              <h3 className="mb-2 font-headline text-5xl text-on-secondary-container">852</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-on-secondary-container">Hari Bersama</p>
            </div>
            <div className="rounded-3xl bg-primary p-8 text-center text-on-primary">
              <h3 className="mb-2 font-headline text-5xl">8</h3>
              <p className="text-xs font-bold uppercase tracking-widest">Cerita yang Menanti</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-24 text-center">
        <h2 className="mb-8 font-headline text-5xl italic text-primary">Bersiaplah Menjadi Bagian Dari Kami.</h2>
        <div className="flex justify-center gap-6">
          <Link className="rounded-xl bg-secondary px-10 py-4 text-sm font-bold uppercase tracking-widest text-on-secondary shadow-lg transition-all hover:opacity-90" href={`${basePath}#rsvp`}>
            Konfirmasi Kehadiran
          </Link>
          <Link className="rounded-xl border border-primary px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-on-primary" href={`${basePath}#acara`}>
            Detail Acara
          </Link>
        </div>
      </section>

      <footer className="w-full border-t border-stone-200 bg-stone-100 px-8 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="font-headline text-xl italic text-stone-900">{brandName}</div>
          <div className="flex gap-8">
            <a className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900" href="#">Privacy Policy</a>
            <a className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900" href="#">Registry</a>
            <a className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900" href="#">Contact</a>
          </div>
          <div className="font-body text-xs uppercase tracking-widest text-stone-500">&copy; 2024 {brandName}. Designed for the modern couple.</div>
        </div>
      </footer>
    </main>
  );
}
