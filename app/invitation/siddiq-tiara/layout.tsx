import type { Metadata } from "next";
import {
  buildProfessionalOneMetadata,
} from "@/app/_components/template-wedding-invitation/professional-1";
import { siddiqTiaraTemplateData } from "@/app/invitation/siddiq-tiara/template-data";

export const metadata: Metadata = buildProfessionalOneMetadata(
  siddiqTiaraTemplateData.metadata,
);

export default function SiddiqTiaraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
