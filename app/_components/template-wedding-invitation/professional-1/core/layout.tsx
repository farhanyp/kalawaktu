import type { Metadata } from "next";
import { ProfessionalOneTopNavbar } from "../sections/top-navbar";
import type { ProfessionalOneMetadata } from "./types";

type ProfessionalOneLayoutProps = {
  children: React.ReactNode;
  basePath: string;
  brandLabel: string;
};

export function buildProfessionalOneMetadata(config: ProfessionalOneMetadata): Metadata {
  return {
    title: config.title,
    description: config.description,
  };
}

export function ProfessionalOneLayout({
  children,
  basePath,
  brandLabel,
}: ProfessionalOneLayoutProps) {
  return (
    <>
      <ProfessionalOneTopNavbar basePath={basePath} brandLabel={brandLabel} />
      {children}
    </>
  );
}
