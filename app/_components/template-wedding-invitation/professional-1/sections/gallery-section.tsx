import Link from "next/link";

type GallerySectionProps = {
  basePath: string;
};

export function ProfessionalOneGallerySection({ basePath }: GallerySectionProps) {
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
          <div className="group aspect-square overflow-hidden rounded-xl">
            <img
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="romantic couple at dusk"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDVueI8LcrHDYUZ3S5bese09zIaFTRVyuCgplLiupD0Kzztw_xOtT8CgxrmP9lxCoP8I_K22hnA7BWjf3FQ1ROG_ifag3Ue5jkkx7NAj9-326nZNZ4g3dSrMhzoWTrUO7vVw4hZz1HnWPR75fQXNhKZq36fFgDWcYHVITEJU871X9bDsc6fYDyunYpZseMvZ1cAfzfIPPckYWd5DmA8Gs39ILctWRdNE-f6RR8IR4vDAZovOOqM18xThgWG1L7y4nvcICnxEZDOoPN"
            />
          </div>
          <div className="group aspect-square translate-y-8 overflow-hidden rounded-xl">
            <img
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="wedding rings"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKR7OO8kBIKXpyv6-Bg4gx7tVSfeMQ6vwvr2rrUYbXuQUkLrAy7dgrqPP0UPuBOJCSGQvdgNgTMBXlN5Pk8EO2Ih3gqCHiC8KFwLKWWdfKHJ0NtNJFZh3HNnzC1JKZfy_ocWAD7u94kjN3LTiNEEldz9StyN2aFgY17bBbRH0byh2qaxiIrmh7yJ263V1zH16e-j-0o7dNGwBMGyzLRyCVKknjGKn-zoaM5cb-hZ4BWJNcub9NWstqVlsOjDsYLxmEgL-1yDMawIhn"
            />
          </div>
          <div className="group aspect-square overflow-hidden rounded-xl">
            <img
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="couple laughing together"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6mMMzGfHGJWkKSn53vabrJ4l9Cm_dEmcJZmk26kOjXt8HOnqgzWB1zpbLSwrBKju8xZXqcIh8Xu4hddYuu9-LuYHBaoiNsHTAJjEImHgYttU42xRg1Itgumso2phxgnZnwpweJbnjO_sgVPEicszxBBWbKOpJifuVyT4LBLZvszKIkFyz1WBmhFYDJJdjRo_Olq6MPiG1FJnizI2b4auqbnWuv_UYkQ7ppSdUFdlkBzCAAVsXdktv0vVAX8-TPCC98xSdNIjUXnbT"
            />
          </div>
          <div className="group aspect-square translate-y-8 overflow-hidden rounded-xl">
            <img
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="reception table"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsGkuJKrm_JMi_DDoEMGUwQb6UAQT-K_m0mMONxgtcoGd8x-lhkEBUGIIF0F4qnLTH5KZ9ZLG33bcAG7eYH-h8t6U-QWJbLL2oNc5cIr8KFc4y7S4BZeL9l5VYV3koH6pt54wPdo1SAbdUHrDZ5Oah6rNi-ckFc9WkiUcLxVF2rqcyuuyfNu6M7nl8w4gTrmaG5aydcbQcN9ffvBsduSuKWCtej1J5TzR8XHvLgjIlRycrwR1XevtiAEuA8xgM6H71TATks9CTh9f1"
            />
          </div>
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


