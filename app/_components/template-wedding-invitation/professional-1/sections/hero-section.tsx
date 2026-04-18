import { FiChevronDown } from "react-icons/fi";
import type { ProfessionalOneInvitationData } from "../core/types";

type HeroSectionProps = {
  invitation: ProfessionalOneInvitationData;
};

export function ProfessionalOneHeroSection({ invitation }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full object-cover opacity-30"
          alt="cinematic soft focus portrait of a young couple"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5FpZA6ZZqEcdeNIUGXcDHZYG77xkWvsQFRmjrBDYAR23_oqT25KGX4STw1DQoBbQtbh_vuy8oeGB5kvqxRdzSETx-UE4nbi6PrK0S6O84B4U_OZ73_HVU9vEzBg5d5Uje_kCuaTjDgFg2QZ8baWFELWu0EXIy50oIy0F51DxfZNraKRle6df8_qeURRc5ddlpcEVeZ2OtyBc9pGxEECbdQGqR0dzfbdJZaMVfzhQP97ftNbpmmfMJ5FfW7McS3yfcKIsaO5ATLVpf"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/40 to-surface" />
      </div>
      <div className="relative z-10 px-6 text-center">
        <span className="mb-6 block font-label text-sm uppercase tracking-[0.3em] text-primary">
          The Wedding Celebration of
        </span>
        <h1 className="mb-8 font-headline text-[5rem] leading-[0.9] font-light italic text-primary md:text-[8rem]">
          {invitation.partnerOne} <span className="text-secondary">&amp;</span> {invitation.partnerTwo}
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
