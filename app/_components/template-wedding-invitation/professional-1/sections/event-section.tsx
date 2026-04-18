import { FiHeart, FiMapPin } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export function ProfessionalOneEventSection() {
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
          <div className="flex flex-col items-center rounded-xl bg-surface-container-lowest p-10 text-center shadow-sm transition-transform hover:-translate-y-2">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container text-primary">
              <FiHeart size={32} />
            </div>
            <h3 className="mb-4 font-headline text-3xl italic text-primary">Akad Nikah</h3>
            <p className="mb-2 text-on-surface-variant">Pukul 09.00 - 10.30 WIB</p>
            <p className="font-semibold text-primary">Masjid Al-Ikhlas</p>
            <p className="mt-4 text-sm italic text-on-surface-variant">Keluarga Inti &amp; Kerabat Dekat</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-primary p-10 text-center text-on-primary shadow-xl transition-transform hover:-translate-y-2">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-on-primary text-primary">
              <HiSparkles size={30} />
            </div>
            <h3 className="mb-4 font-headline text-3xl italic">Resepsi</h3>
            <p className="mb-2 opacity-80">Pukul 12.00 - 15.00 WIB</p>
            <p className="text-lg font-semibold">The Glass House</p>
            <p className="mt-4 text-sm italic opacity-70">Mohon Kehadiran Tepat Waktu</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-surface-container-lowest p-10 text-center shadow-sm transition-transform hover:-translate-y-2">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-tertiary-container text-tertiary">
              <FiMapPin size={30} />
            </div>
            <h3 className="mb-4 font-headline text-3xl italic text-primary">Lokasi</h3>
            <p className="mb-6 text-on-surface-variant">Jl. Sudirman No. 45, Jakarta Selatan</p>
            <a className="rounded-full bg-tertiary px-6 py-3 text-sm font-bold uppercase tracking-widest text-on-tertiary hover:opacity-90" href="#">
              Buka Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


