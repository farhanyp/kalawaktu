import Link from "next/link";
import { GalleryItem } from "../core/types";

type GallerySectionProps = {
  basePath: string;
  gallery: GalleryItem[];
};

export function ProfessionalOneGallerySection({ basePath, gallery }: GallerySectionProps) {
  return (
    <section className="overflow-hidden px-6 py-24" id="galeri">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-headline text-5xl italic text-primary">Momen Kami</h2>
            <p className="mt-2 italic text-on-surface-variant">Capture in time, frozen in love.</p>
          </div>
          <Link
            href={`${basePath}/galeri`}
            className="hidden border-b-2 border-primary-container pb-1 font-label text-sm font-bold uppercase tracking-widest text-primary transition-all md:block hover:border-secondary hover:text-secondary"
          >
            Lihat Semua Foto
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {gallery.map((photo, index) => (
            <div
              key={photo.src || index}
              className={`group aspect-square overflow-hidden rounded-xl ${
                index % 2 !== 0 ? "translate-y-8" : ""
              }`}
            >
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={photo.alt || "Gallery Image"}
                src={photo.src}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <Link
            href={`${basePath}/galeri`}
            className="border-b-2 border-primary-container pb-1 font-label text-sm font-bold uppercase tracking-widest text-primary"
          >
            Lihat Semua Foto
          </Link>
        </div>
      </div>
    </section>
  );
}
