import { FiHeart, FiMapPin } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { ProfessionalOneInvitationData } from "../core/types";

type EventSectionProps = {
  invitation: ProfessionalOneInvitationData;
};

export function ProfessionalOneEventSection({ invitation }: EventSectionProps) {
  // Destructuring data agar akses lebih mudah dan rapi
  const { akad, resepsi, location } = invitation.events;

  return (
    <section className="bg-surface-container-low px-6 py-24" id="acara">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-4xl italic text-primary">Detail Acara</h2>
          <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
            Simpan Tanggal Penting Ini
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Akad Nikah */}
          <div className="flex flex-col items-center rounded-xl bg-surface-container-lowest p-10 text-center shadow-sm transition-transform hover:-translate-y-2">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container text-primary">
              <FiHeart size={32} />
            </div>
            <h3 className="mb-4 font-headline text-3xl italic text-primary">Akad Nikah</h3>
            <p className="mb-2 text-on-surface-variant">{akad.time}</p>
            <p className="font-semibold text-primary">{akad.venue}</p>
            <p className="mt-4 text-sm italic text-on-surface-variant">{akad.description}</p>
          </div>

          {/* Resepsi */}
          <div className="flex flex-col items-center rounded-xl bg-primary p-10 text-center text-on-primary shadow-xl transition-transform hover:-translate-y-2">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-on-primary text-primary">
              <HiSparkles size={30} />
            </div>
            <h3 className="mb-4 font-headline text-3xl italic">Resepsi</h3>
            <p className="mb-2 opacity-80">{resepsi.time}</p>
            <p className="text-lg font-semibold">{resepsi.venue}</p>
            <p className="mt-4 text-sm italic opacity-70">{resepsi.description}</p>
          </div>

          {/* Lokasi */}
          <div className="flex flex-col items-center rounded-xl bg-surface-container-lowest p-10 text-center shadow-sm transition-transform hover:-translate-y-2">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-tertiary-container text-tertiary">
              <FiMapPin size={30} />
            </div>
            <h3 className="mb-4 font-headline text-3xl italic text-primary">Lokasi</h3>
            <p className="mb-6 text-on-surface-variant">{location.address}</p>
            <a
              className="rounded-full bg-tertiary px-6 py-3 text-sm font-bold uppercase tracking-widest text-on-tertiary hover:opacity-90 transition-opacity"
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
