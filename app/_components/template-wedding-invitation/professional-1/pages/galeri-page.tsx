import { FiArrowUpRight, FiDownload, FiHeart } from "react-icons/fi";

type GalleryPhoto = {
  id: number;
  name: string | null;
  url: string;
};

type ProfessionalOneGaleriPageProps = {
  brandName: string;
  photos?: GalleryPhoto[];
};

const fallbackImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBipSBFGHBakGcXmikqoBflVWp80EZOB8TlxT0smJTx3xGHA4ySTbMFXReGUUnaSMo-JTVFKatfJwUVFXVjrxIbcR_xbuU98XMmPRNVUriYP9_ZsdapVY02J0CMjjwQAtWSWW-KyfB59hZ3JR2i_V7ftR-bXUplvCQg-rvDK6DsK1xput9cLKF258egGYnlT2OuA2eIoCoJAVzXN8oxKUbkSftD2elellPpmHP2HCUMNUrMmvfGTXPdMxcGy5gqSbV6FWTcepIx8HbJ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA8u8zGB3ckAx1xvO-k_2aPAy6MqAdtFqwqg-_LYmgeGu1n6p3DT4zhTRq0OboViUVWr78M9ehtX7m63wNrHChyF-l0U4w33wpIKTfX821g0HPjkCF0J_DY8dZSZMDWyR8vvWygqyQuB8aYx8VLpteY0Z3Bt6mB7M4BaDUvkSNn146oeEnzK2sVTpAtoAPYqrvcVAruHeIOOpuV1OBqkuz7NtDmtmzh7gPTkDEhMkoR-e8m0UZF1XHV8BurXB20ZGr6b3g8m4vSRQYd",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBvtMFdSox3g8KK9wKQht24_bCBRxIfbNLncZnvQCBwg-Xnhm-7i5hGLB1JN0LD77Cq09oUeMvnys-BqneNO5025nT1e1qA4n2Xxyv98EHEGb1gMSIy3Mjo19F8aoDYdpz9F7lniq7y5XYWsrWEcR5x8qM3KH1-_KAP_6sbHdGnTQvzlxEBLyiUPCaAubP0y0erSZ4qZifBMVNcbelS9LXL_isG7egElZcwoSpoLEzH1K4YBIVxpakHhy3PczMB0RIQAgTf8bqkv-gR",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7aP4N0zX_X_L6QG5mmc5af8MNHDCrSen1rJL5LOW2nntRTzCualZ48N_y062hSKrQ2ucg4qY-l57gN-GfYUiu7ewKHrwyPD3c2f8LwmIcze7h8JC_vpbhAaol3sd3WuXGYKRzrI0AoQpbz61Kn1sB-AiDMPvVTc51AWYZhOK8-X0hJ2Nr4yyPkENQISnpaQ4QXpLn8t9k7tPddIGhTXNthBrfT-cT6orUmhlfbqYUrqFl-TvzA3Whzcp9Mj7keyWF6VVWCfDZZSb",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDAKIAd5fumq9Lf9YZ80eI9DDRHgOfQ_xkmvmkgAiwyE_tnF_13T9cU0UhuiyEszmF-8Xi4_2CSl8yP5Vtw1X2Bshn-oo0xARjtOAi0cJXHSYrWZV-lC0xmvM6snCPUJI2BdNduNojNM2ZnG1F9doWaz1aU4LXFW0XCodwLA30INghyxQkFJ-nv7dsPf6IG6a7UNF_1XeQkwm39pzMrzfi_YTN593a1EJl1gmGu6LlKUDvuxm6sf-rzxxHuFGW6SqsOZQFcUFgEVLJ-",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDApbH0cZzqokbneOm_yq9SyynbzepLeqx1djcFwoXm-Pz03y_W_evPogryR36S2qK2DInPeh8KohE01T94PdZ_zDuiV4jwSXX1cRTR0gh0jlyUdZfXFg9e4KBBYxvTdFCsfGzzygn_aKGdwiSXRWqfex6AtPcqBZbEhgUlPdo2ZQf5-HtOyQkaOGf1L_4r6LTNKsXCvFxUn5OD4CWwb7DGckk432MkflAsj07Z0GUQmIAlFt00yB_U4h1RSJbj0weNO1zZW2Oote8O",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDyqtWQnerO7QkWVrEiuGP0kJmqUGad6baTNxztcoFzcCH-ma-KYLxEDp4NM4QWs0MyEU-IF7NbHECP007h0A9JroZAXghxAIDYbo-xyf3bHFawxJVlMt0Dyd-vdoQHz4j83qffksi9UvLIZIuy6JmAV-_bjSCN6MyxmfmUI71mQxoI0nROpQRNtHSjLNBFrxV7A3CEPe_V6ffHQw2W4Ff_Jw80AUr23kEpq64EfAl5mcn6uiTaWh-mCxHzXmlxDQkUgsSEWz0QbkJI",
];

export function ProfessionalOneGaleriPage({
  brandName,
  photos = [],
}: ProfessionalOneGaleriPageProps) {
  const cloudGalleryUrl = "https://drive.google.com/drive/folders/";
  const photographerWhatsAppUrl =
    "https://wa.me/6281234567890?text=Halo%20kak%2C%20saya%20ingin%20bertanya%20soal%20dokumentasi%20foto%20wedding.";

  const galleryItems =
    photos.length > 0
      ? photos.map((photo) => ({
          id: photo.id,
          url: photo.url,
          label: photo.name ?? "Wedding Moment",
        }))
      : fallbackImages.map((url, index) => ({ id: index + 1, url, label: `Photo ${index + 1}` }));

  return (
    <main className="bg-background font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-12">
        <header className="mb-14">
          <h1 className="font-headline mb-6 text-6xl leading-[0.9] tracking-tighter text-primary md:text-8xl">
            Fragmen <span className="ml-4 text-secondary italic">Kebahagiaan</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Kumpulan momen yang tertangkap dalam lensa, merangkum perjalanan cinta kami yang
            dikurasi secara editorial.
          </p>
        </header>

        <section className="mb-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl bg-surface-container-low"
            >
              <div className={index % 3 === 0 ? "aspect-4/5" : "aspect-square"}>
                <img
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={item.label}
                  src={item.url}
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <p className="truncate text-sm text-on-surface-variant">{item.label}</p>
                <FiHeart className="text-primary" />
              </div>
            </article>
          ))}
        </section>

        <section className="relative mt-20 overflow-hidden rounded-[2rem] bg-surface-container-low px-8 py-24">
          <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="font-headline mb-6 text-4xl text-primary md:text-5xl">
              Ingin Mengunduh Koleksi Lengkap?
            </h2>
            <p className="mb-10 leading-relaxed text-on-surface-variant">
              Kami telah menyiapkan folder khusus untuk tamu undangan untuk melihat seluruh
              rangkaian foto dalam resolusi tinggi.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <a
                href={cloudGalleryUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-medium text-on-primary transition-all hover:shadow-lg active:scale-95"
              >
                <FiDownload />
                Akses Galeri Cloud
              </a>
              <a
                href={photographerWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="border-b-2 border-tertiary-fixed-dim px-1 py-2 font-medium text-primary transition-colors hover:text-tertiary-dim"
              >
                Hubungi Fotografer
                <FiArrowUpRight className="ml-1 inline" />
              </a>
            </div>
          </div>
        </section>
      </div>

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
