import type { Metadata } from "next";
import LocationsClient from "./locations-client";

export const metadata: Metadata = {
  title: "Virtual Office Locations across India | MyCoreOffice",
  description: "Get a professional business address for GST registration, company formation, and mailing address across all major cities in India, including Delhi, Noida, Gurgaon, Mumbai, and Bangalore.",
  keywords: [
    "virtual office address for gst registration",
    "virtual office address for company registration",
    "virtual office address in Delhi",
    "virtual office address in Noida",
    "virtual office address in gurgaon",
    "virtual office address in banglore",
    "virtual office address in Mumbai for gst registration",
    "virtual office address in rohini",
    "virtual office address in pitampura",
    "virtual office address in Hyderabad",
    "virtual office address in Ahmedabad",
    "virtual office address in Chennai",
    "virtual office address in chandigarh",
    "virtual office address in himachal",
    "virtual office address in jammu",
    "virtual office address in Delhi for gst registration",
    "virtual office address in kolkata",
    "virtual office address in Navi Mumbai",
    "virtual office address in Ranchi",
    "virtual office address in goa",
  ],
};

export default function LocationsPage() {
  return <LocationsClient />;
}
