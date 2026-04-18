import { ProfessionalOneEventSection } from "../sections/event-section";
import { ProfessionalOneFooterSection } from "../sections/footer-section";
import { ProfessionalOneGallerySection } from "../sections/gallery-section";
import { ProfessionalOneGiftSection } from "../sections/gift-section";
import { ProfessionalOneHeroSection } from "../sections/hero-section";
import { ProfessionalOneRsvpSection } from "../sections/rsvp-section";
import { ProfessionalOneStorySection } from "../sections/story-section";
import type { ProfessionalOneInvitationData } from "../core/types";

type ProfessionalOneLandingPageProps = {
  basePath: string;
  invitation: ProfessionalOneInvitationData;
};

export function ProfessionalOneLandingPage({
  basePath,
  invitation,
}: ProfessionalOneLandingPageProps) {
  return (
    <main className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <ProfessionalOneHeroSection invitation={invitation} />
      <ProfessionalOneEventSection />
      <ProfessionalOneStorySection basePath={basePath} />
      <ProfessionalOneGallerySection basePath={basePath} />
      <ProfessionalOneGiftSection />
      <ProfessionalOneRsvpSection />
      <ProfessionalOneFooterSection />
    </main>
  );
}
