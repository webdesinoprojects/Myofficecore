import type { Metadata } from "next";
import OfficeSpaceContent from "./OfficeSpaceContent";

export const metadata: Metadata = {
  title: "Managed Office Space for Rent | MyCoreOffice",
  description: "Premium, IT-enabled office spaces for teams of all sizes. Flexible rental plans, high-speed WiFi, ergonomic furniture, and on-site support.",
};

export default function OfficeSpacePage() {
  return <OfficeSpaceContent />;
}
