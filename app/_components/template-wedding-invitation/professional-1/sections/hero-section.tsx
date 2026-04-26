import { FiChevronDown } from "react-icons/fi";
import type { GalleryItem, ProfessionalOneInvitationData } from "../core/types";
import Image from "next/image";

type HeroSectionProps = {
  invitation: ProfessionalOneInvitationData;
  photo: GalleryItem;
};

export function ProfessionalOneHeroSection({ invitation, photo }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={photo.src}
          alt={photo.alt || "Wedding Hero Image"}
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-linear-to-b from-surface/0 via-surface/40 to-surface" />
      </div>
      <div className="relative z-10 px-6 text-center">
        <span className="mb-6 block font-label text-sm uppercase tracking-[0.3em] text-primary">
          The Wedding Celebration of
        </span>
        <h1 className="mb-8 font-headline text-[5rem] leading-[0.9] font-light italic text-primary md:text-[8rem]">
          {invitation.partnerOne} <span className="text-secondary">&amp;</span>{" "}
          {invitation.partnerTwo}
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-12">
          <div className="text-center">
            <p className="font-headline text-2xl italic text-on-surface-variant">
              {invitation.weddingDateLabel}
            </p>
          </div>
          <div className="hidden h-px w-12 bg-outline-variant md:block" />
          <div className="text-center">
            <p className="font-headline text-2xl italic text-on-surface-variant">
              {invitation.venueLabel}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-primary">
        <FiChevronDown size={34} />
      </div>
    </section>
  );
}
