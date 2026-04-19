"use client";

import { useState, useEffect } from "react";
import { ProfessionalOneHeroSection } from "../sections/hero-section";
import { ProfessionalOneEventSection } from "../sections/event-section";
import { ProfessionalOneStorySection } from "../sections/story-section";
import { ProfessionalOneGallerySection } from "../sections/gallery-section";
import { ProfessionalOneGiftSection } from "../sections/gift-section";
import { ProfessionalOneRsvpSection } from "../sections/rsvp-section";
import { ProfessionalOneFooterSection } from "../sections/footer-section";
import { InvitationGate } from "../invitation-gate";
import type { ProfessionalOneInvitationData } from "../core/types";
import { getCookie, setCookie } from "../utils";

type Props = {
  basePath: string;
  invitation: ProfessionalOneInvitationData;
};

export function ProfessionalOneLandingPage({ basePath, invitation }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const status = getCookie("invitation_opened");

      requestAnimationFrame(() => {
        if (status === "true") {
          setIsOpen(true);
        }
        setIsInitialized(true);
      });
    };

    checkStatus();
  }, [getCookie]);

  useEffect(() => {
    if (isInitialized) {
      if (!isOpen) {
        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);
      } else {
        document.body.style.overflow = "unset";
      }
    }
  }, [isOpen, isInitialized]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setCookie("invitation_opened", "true", 30);
  };

  if (!isInitialized) {
    return <div className="fixed inset-0 bg-stone-900 z-9999" />;
  }

  return (
    <div className="relative overflow-x-hidden">
      <div
        className={`fixed inset-0 z-9999 w-full h-screen transition-transform duration-1200 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? "-translate-y-full pointer-events-none" : "translate-y-0"
        }`}
      >
        <InvitationGate invitation={invitation} onOpen={handleOpenInvitation} />
      </div>

      <main
        className={`bg-surface font-body text-on-surface transition-opacity duration-700 ${
          !isOpen ? "h-screen overflow-hidden opacity-0" : "opacity-100"
        }`}
      >
        <ProfessionalOneHeroSection invitation={invitation} />
        <ProfessionalOneEventSection invitation={invitation} />
        <ProfessionalOneStorySection basePath={basePath} />
        <ProfessionalOneGallerySection basePath={basePath} />
        <ProfessionalOneGiftSection />
        <ProfessionalOneRsvpSection invitation={invitation} />
        <ProfessionalOneFooterSection />
      </main>
    </div>
  );
}
