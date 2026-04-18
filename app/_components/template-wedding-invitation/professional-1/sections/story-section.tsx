import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type StorySectionProps = {
  basePath: string;
};

export function ProfessionalOneStorySection({ basePath }: StorySectionProps) {
  return (
    <section className="bg-surface px-6 py-24 md:px-24" id="cerita">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="relative">
          <div className="aspect-3/4 overflow-hidden rounded-xl shadow-2xl">
            <img
              className="h-full w-full object-cover"
              alt="vintage style warm toned photograph"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUUSmpddMfP9vWLVoWTno-_dgYX7KUz6gIt872UxtaVtd_UH1179ce3nBe4p71VIfmgPl1cOBb4YeBTAFaA6RXeBgMJ-NXpCGENUBcLrUTBsXe3B9xb-KiIQ98WhwtNciRJakQHVC7Hq4O6mIuDs1uSDRnWGkUtPcCeaqk-G-fMgwbAX_22qsWHmGrMG5os1nnhNbbEdYyTmYH6bud-IZjQ9Ylje0m-n9xpbqoLpVrduNJLHS-gxDptIb11vLf09K3SsreasHh_MLj"
            />
          </div>
          <div className="absolute -right-8 -bottom-8 -z-10 h-48 w-48 rounded-xl bg-secondary-container" />
        </div>
        <div className="space-y-8">
          <h2 className="font-headline text-5xl leading-tight italic text-primary">
            Sebuah Cerita
            <br />
            Tentang Kita.
          </h2>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            Dimulai dari sebuah pertemuan singkat di perpustakaan kota, hingga perjalanan panjang
            melintasi benua. Kami menemukan bahwa rumah bukanlah sebuah tempat, melainkan satu sama
            lain.
          </p>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            Tiga tahun berlalu, penuh dengan tawa, tantangan, dan ribuan cangkir kopi. Hari ini,
            kami mengundang Anda untuk menjadi saksi awal dari bab baru kehidupan kami.
          </p>
          <div className="w-56">
            <Link
              href={`${basePath}/cerita`}
              className="group flex items-center gap-3 border-b-2 border-primary-container pb-1 font-label text-sm font-bold uppercase tracking-wider text-primary transition-all hover:border-secondary hover:text-secondary"
            >
              Lihat Cerita Lengkap
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


