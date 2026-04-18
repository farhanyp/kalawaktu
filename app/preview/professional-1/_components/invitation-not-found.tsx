import Link from "next/link";

const supportUrl =
  "https://wa.me/6281234567890?text=Halo%20tim%20Kala%20Waktu%2C%20nama%20saya%20belum%20terdaftar%20di%20undangan%20digital.";

export function InvitationNotFoundView() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface px-6 pt-28 pb-24 text-on-surface">
      <div className="pointer-events-none absolute top-20 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-8 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <div className="relative mx-auto w-full max-w-sm md:max-w-md">
          <div className="-rotate-2 overflow-hidden rounded-md bg-surface-container-highest shadow-sm transition-transform duration-700 hover:rotate-0">
            <img
              alt="Elegant floral arrangement"
              className="h-full w-full object-cover grayscale-20 sepia-10 brightness-95"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe3f6Bk8UY0aDAZPsGpnq3CwCMiiteLaZX79ZRdevHUal1IWN8mwt4u_lWZnrAvhMfe-pL94gvAhGpkUiENjmhTGbQwwI8bj0dM5EbaKU4QASmV7VV347e92T1CP0eUMFyaWwfLlhUSdnHA8SPDfkMK0nqpNKGIfEEVwYEA8PifGKYuEh6LoLigCxC62Clqax7KhjZA_WuvbzFjus3Y9vdjytejvC2fOySekCVWv1phQk3q97GuThtz3frD9ZV5lhU5zUwIt5kE80i"
            />
          </div>
          <div className="absolute -right-6 -bottom-8 flex h-36 w-36 rotate-6 items-center justify-center rounded-xl border border-primary/5 bg-surface-container-low shadow-lg backdrop-blur-sm">
            <span className="text-6xl text-primary/25">?</span>
          </div>
        </div>

        <div className="text-center md:text-left">
          <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
            Not Found
          </span>
          <h1 className="font-headline text-4xl leading-tight italic tracking-tight text-primary md:text-6xl">
            Mohon Maaf, Kami Tidak Menemukan Nama Anda
          </h1>
          <div className="my-8 mx-auto h-px w-24 bg-outline-variant/40 md:mx-0" />
          <p className="max-w-xl text-base leading-relaxed text-on-surface-variant md:text-lg">
            Setiap kehadiran sangat berharga bagi kami. Namun, tampaknya nama Anda belum terdaftar
            dalam daftar undangan digital saat ini. Jika Anda merasa ada kekeliruan, silakan hubungi
            kami untuk konfirmasi lebih lanjut.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href={supportUrl}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 font-body text-sm font-bold text-white shadow-[0_10px_20px_-10px_rgba(65,67,27,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_25px_-10px_rgba(65,67,27,0.5)]"
              target="_blank"
              rel="noreferrer"
            >
              Hubungi Bantuan
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-primary/20 bg-white/60 px-8 py-4 font-body text-sm font-semibold text-primary transition-all hover:scale-[1.02] hover:border-primary/35 hover:bg-white"
            >
              Kembali ke Beranda
            </Link>
          </div>

          <p className="pt-8 font-headline text-sm italic tracking-widest text-primary/45">
            Kala Waktu © 2026
          </p>
        </div>
      </div>
    </main>
  );
}
