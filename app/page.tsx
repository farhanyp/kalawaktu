import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-surface text-on-surface">
      <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 font-label text-xs font-bold uppercase tracking-[0.35em] text-secondary">
          Digital Invitation Studio
        </p>
        <h1 className="font-headline text-[clamp(3rem,9vw,6.5rem)] italic leading-[0.88] tracking-tight text-primary">
          Kala Waktu
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
          Kami merancang undangan digital per pasangan dengan URL personal agar setiap cerita terasa
          lebih intim, elegan, dan mudah dibagikan.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/invitation/siddiq-tiara"
            className="rounded-xl bg-primary px-8 py-4 font-label text-xs font-bold uppercase tracking-[0.2em] text-on-primary transition-opacity hover:opacity-90"
          >
            Lihat Contoh Undangan
          </Link>
          <Link
            href="https://wa.me/6281234567890"
            className="rounded-xl border border-primary/25 bg-surface-container-low px-8 py-4 font-label text-xs font-bold uppercase tracking-[0.2em] text-primary transition-all hover:border-primary/40 hover:bg-surface-container"
          >
            Hubungi Admin
          </Link>
        </div>
      </section>
    </main>
  );
}

