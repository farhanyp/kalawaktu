"use client";

import { CopyButton } from "@/components/animate-ui/components/buttons/copy";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ProfessionalOneGiftSection() {
  const qrisImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCeJbPRvdEd5_RMkATSZXpMd_zd_jf4aJ_tupCvIvNT5ly80EsTTPF1txSi-fFOS3uqgygzv8yjIeWEPhBTUBPsoOI-S1-mavM0KHf8g8VnFqZ_HgLotQcVqexgTN9AjG9DR8hw3zPcj2_2qhZdYx5hwIGplHf-FuMMQFJf-pQVqphT0QguqMZU2uG13b614dXIqvEYLBZEtPgFe399nytpCFl0QBzS1CmoqgGZJooRlnr6181WEXRQdU2Cdf1omniuV1sR4J5rqR47";

  return (
    <section className="bg-surface px-6 py-24" id="hadiah">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-4xl italic text-primary">Kado Digital</h2>
          <p className="mx-auto max-w-md text-on-surface-variant">
            Doa restu Anda adalah hadiah terindah, namun jika Anda ingin memberikan tanda kasih,
            Anda dapat melakukannya secara digital.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl bg-surface-container-low p-8 text-center shadow-sm transition-transform hover:-translate-y-2">
            <div className="mb-6 flex h-8 items-center text-xl font-bold italic text-tertiary">
              BANK BCA
            </div>
            <p className="mb-1 text-sm text-on-surface-variant">A.N. Tiara Saraswati</p>
            <p className="mb-6 text-xl font-bold text-primary">1234567890</p>
            <CopyButton content="1234567890" variant="ghost" size="sm" className="cursor-pointer" />
          </div>
          <div className="flex flex-col items-center rounded-xl bg-surface-container-low p-8 text-center shadow-sm transition-transform hover:-translate-y-2">
            <div className="mb-6 flex h-8 items-center text-xl font-bold italic text-primary">
              BANK MANDIRI
            </div>
            <p className="mb-1 text-sm text-on-surface-variant">A.N. Alexander Wijaya</p>
            <p className="mb-6 text-xl font-bold text-primary">0987654321</p>
            <CopyButton content="0987654321" variant="ghost" size="sm" className="cursor-pointer" />
          </div>
          <Dialog>
            <div className="flex flex-col items-center rounded-xl border-2 border-dashed border-outline-variant bg-surface-container-low p-8 text-center shadow-sm transition-transform hover:-translate-y-2">
              <div className="mb-6 flex h-8 items-center text-xl font-bold italic text-error">
                QRIS
              </div>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group mb-6 cursor-zoom-in rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
                  aria-label="Perbesar QRIS"
                >
                  <div className="h-32 w-32 overflow-hidden rounded">
                    <img
                      alt="QR Code"
                      className="h-full w-full transition-transform duration-300 group-hover:scale-105"
                      src={qrisImage}
                    />
                  </div>
                  <span className="mt-2 block text-[10px] font-semibold tracking-[0.16em] text-secondary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    TAP UNTUK PERBESAR
                  </span>
                </button>
              </DialogTrigger>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                Pindai untuk berbagi kasih
              </p>
            </div>

            <DialogContent className="max-w-md border-border/60 bg-surface-container-lowest p-5">
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl italic text-primary">QRIS</DialogTitle>
                <DialogDescription>Pindai QR berikut untuk berbagi kasih.</DialogDescription>
              </DialogHeader>
              <div className="mt-4 rounded-xl bg-white p-4">
                <img
                  alt="QR Code ukuran besar"
                  className="h-auto w-full rounded-lg"
                  src={qrisImage}
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
