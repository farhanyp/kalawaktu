import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { RiDoubleQuotesL } from "react-icons/ri";

type StoryItem = {
  id: number;
  header: string;
  subHeader: string | null;
  detail: string | null;
  urlImage: string | null;
};

type ProfessionalOneCeritaPageProps = {
  basePath: string;
  brandName: string;
  stories?: StoryItem[];
};

export function ProfessionalOneCeritaPage({
  basePath,
  brandName,
  stories = [],
}: ProfessionalOneCeritaPageProps) {
  const hasStories = stories.length > 0;

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

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-12 md:py-16">
        {hasStories ? (
          <div className="space-y-10">
            {stories.map((story) => (
              <article
                key={story.id}
                className="grid gap-8 rounded-3xl bg-surface-container-low p-8 md:grid-cols-[1.2fr_1fr]"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-tertiary">
                    {story.subHeader ?? "Perjalanan Cinta"}
                  </span>
                  <h2 className="mt-2 mb-4 font-headline text-4xl text-primary">{story.header}</h2>
                  <p className="text-on-surface-variant leading-relaxed">
                    {story.detail ?? "Kisah lengkap akan segera kami bagikan."}
                  </p>
                </div>
                <div className="overflow-hidden rounded-2xl bg-surface-container-high">
                  <img
                    className="h-full w-full object-cover"
                    alt={story.header}
                    src={
                      story.urlImage ??
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUUSmpddMfP9vWLVoWTno-_dgYX7KUz6gIt872UxtaVtd_UH1179ce3nBe4p71VIfmgPl1cOBb4YeBTAFaA6RXeBgMJ-NXpCGENUBcLrUTBsXe3B9xb-KiIQ98WhwtNciRJakQHVC7Hq4O6mIuDs1uSDRnWGkUtPcCeaqk-G-fMgwbAX_22qsWHmGrMG5os1nnhNbbEdYyTmYH6bud-IZjQ9Ylje0m-n9xpbqoLpVrduNJLHS-gxDptIb11vLf09K3SsreasHh_MLj"
                    }
                  />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-surface-container-low p-10 text-center">
            <h2 className="font-headline text-3xl italic text-primary">Cerita Belum Tersedia</h2>
            <p className="mt-4 text-on-surface-variant">
              Cerita perjalanan kami akan hadir sebentar lagi.
            </p>
          </div>
        )}
      </section>

      <section className="bg-surface-container-low px-6 py-32 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-surface-container-lowest p-12 md:col-span-2">
            <RiDoubleQuotesL className="mb-6 text-5xl text-secondary" />
            <p className="font-headline text-4xl italic leading-snug text-primary">
              &quot;Dalam editorial hidup yang tak terduga, kau adalah paragraf yang tak pernah
              ingin aku akhiri.&quot;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-outline-variant" />
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                {brandName}
              </span>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="rounded-3xl bg-secondary-container p-8 text-center">
              <h3 className="mb-2 font-headline text-5xl text-on-secondary-container">
                {stories.length}
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-on-secondary-container">
                Cerita Tersimpan
              </p>
            </div>
            <div className="rounded-3xl bg-primary p-8 text-center text-on-primary">
              <h3 className="mb-2 font-headline text-5xl">{hasStories ? "Live" : "Soon"}</h3>
              <p className="text-xs font-bold uppercase tracking-widest">Status Cerita</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-24 text-center">
        <h2 className="mb-8 font-headline text-5xl italic text-primary">
          Bersiaplah Menjadi Bagian Dari Kami.
        </h2>
        <div className="flex justify-center gap-6">
          <Link
            className="rounded-xl bg-secondary px-10 py-4 text-sm font-bold uppercase tracking-widest text-on-secondary shadow-lg transition-all hover:opacity-90"
            href={`${basePath}#rsvp`}
          >
            Konfirmasi Kehadiran
          </Link>
          <Link
            className="rounded-xl border border-primary px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-on-primary"
            href={`${basePath}#acara`}
          >
            Detail Acara
          </Link>
        </div>
      </section>

      <footer className="w-full border-t border-stone-200 bg-stone-100 px-8 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="font-headline text-xl italic text-stone-900">{brandName}</div>
          <div className="flex gap-8">
            <a
              className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900"
              href="#"
            >
              Registry
            </a>
            <a
              className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900"
              href="#"
            >
              Contact
            </a>
          </div>
          <div className="font-body text-xs uppercase tracking-widest text-stone-500">
            &copy; 2024 {brandName}. Designed for the modern couple.
          </div>
        </div>
      </footer>
    </main>
  );
}
