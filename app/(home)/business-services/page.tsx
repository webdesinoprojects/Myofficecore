import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Business Services | MyCoreOffice",
  description:
    "Business support services and partnership opportunities for companies looking for relevant professional solutions and customer access.",
};

export default function BusinessServicesPage() {
  return (
    <ServicePage
      eyebrow="Business Support"
      title="Business Services"
      intro="We help businesses access relevant support services at different stages of growth, while creating collaboration opportunities with capable professional service providers."
      image="https://images.unsplash.com/photo-1770048532712-4fde5ef7eb90?auto=format&fit=crop&fm=jpg&q=80&w=3000"
      imageAlt="Professional working on laptop in modern office meeting room"
      imageCredit={{
        name: "Blake Wisz",
        href: "https://unsplash.com/photos/man-working-on-laptop-in-modern-office-meeting-room-6PndD8S9XMw",
      }}
      sections={[
        {
          heading: "Support for every stage of business",
          body: "MyCoreOffice assists companies by connecting them with practical business solutions that match their operational, compliance, registration, and workspace needs. The focus is simple: make support easier to find, easier to understand, and more useful for growing teams.",
        },
        {
          heading: "Relevant services for serious customers",
          body: "We work with businesses that need reliable help and with service providers who can deliver value. This creates a focused channel for customers who are actively looking for business support, instead of generic outreach with low intent.",
        },
        {
          heading: "Partner with a growing business network",
          body: "We are open to collaborations with strong local and wider-scale providers whose products and services are useful for individuals, startups, and established companies. The aim is to build a practical partner ecosystem around business growth.",
        },
      ]}
      features={[
        {
          title: "Business support solutions",
          description: "Offer useful services that help companies move through registration, compliance, operations, and growth requirements.",
          icon: "Briefcase",
        },
        {
          title: "Service provider partnerships",
          description: "Collaborate with MyCoreOffice to reach businesses looking for credible support at the right moment.",
          icon: "Handshake",
        },
        {
          title: "Documentation support",
          description: "Make processes cleaner with structured guidance, records, paperwork, and professional service coordination.",
          icon: "FileText",
        },
        {
          title: "Compliance-first guidance",
          description: "Help businesses stay organized with support that respects documentation, verification, and practical requirements.",
          icon: "ShieldCheck",
        },
        {
          title: "Growth-focused access",
          description: "Connect with customers who are expanding, registering, relocating, or building stronger business operations.",
          icon: "LineChart",
        },
        {
          title: "Local and wider reach",
          description: "Build partnerships that can serve customers across local markets and broader business locations.",
          icon: "Globe2",
        },
      ]}
      bulletsTitle="We are looking for"
      bullets={[
        "Collaborations with professional service providers",
        "Products that are useful for individuals and corporations",
        "Support solutions for registration, compliance, and operations",
        "Partners who can deliver consistent customer value",
        "Local and wider-scale collaboration opportunities",
        "Business services that help customers save time and reduce friction",
      ]}
      ctaTitle="Join us as a partner."
      ctaText="If your services can help businesses operate, register, comply, scale, or manage work more effectively, connect with us and explore a practical collaboration with MyCoreOffice."
    />
  );
}
