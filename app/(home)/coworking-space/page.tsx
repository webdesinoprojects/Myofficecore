import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Coworking Space | MyCoreOffice",
  description:
    "Flexible coworking spaces with shared offices, dedicated desks, meeting rooms, high-speed WiFi, receptionist support, and collaborative work environments.",
};

export default function CoworkingSpacePage() {
  return (
    <ServicePage
      eyebrow="Flexible Workspaces"
      title="Coworking Space"
      intro="Choose a workspace that fits how your team works today, from open shared areas to dedicated desks, meeting access, and fully supported collaborative offices."
      image="https://images.unsplash.com/photo-1760611656615-db3fad24a314?auto=format&fit=crop&fm=jpg&q=80&w=3000"
      imageAlt="Modern coworking space with people working at desks"
      imageCredit={{
        name: "David Kristianto",
        href: "https://unsplash.com/photos/modern-office-space-with-people-working-at-desks-sXYBmejEK8U",
      }}
      sections={[
        {
          heading: "Work beside a professional community",
          body: "Our coworking spaces give founders, small teams, freelancers, and expanding businesses the freedom to work in a shared environment without committing to a traditional office. You can hot desk when you need flexibility or reserve a dedicated desk in a workspace you prefer.",
        },
        {
          heading: "Designed for collaboration and momentum",
          body: "A good shared office does more than provide a seat. It creates everyday opportunities to meet people, exchange ideas, build contacts, and find useful synergies with other entrepreneurs and professionals working around you.",
        },
        {
          heading: "Plug-and-play spaces in strong locations",
          body: "Our fully furnished coworking environments are built for immediate productivity, with flexible seating, open workstations, private office options, managerial cabins, meeting rooms, and shared support spaces across well-connected business locations.",
        },
      ]}
      features={[
        {
          title: "Meeting rooms",
          description: "Professional rooms for client discussions, interviews, reviews, and team planning sessions.",
          icon: "Presentation",
        },
        {
          title: "Dedicated desk",
          description: "Reserve a consistent desk in your preferred collaborative workspace.",
          icon: "Monitor",
        },
        {
          title: "Shared office space",
          description: "Work from an open, well-managed office environment built for focus and collaboration.",
          icon: "Users",
        },
        {
          title: "High-speed Wifi",
          description: "Reliable connectivity for everyday operations, calls, documents, and online work.",
          icon: "Wifi",
        },
        {
          title: "On-site support team",
          description: "Get local assistance for workspace needs, visitor handling, and day-to-day support.",
          icon: "Headphones",
        },
        {
          title: "Unlimited coffee and tea",
          description: "Keep the day moving with beverage access and shared refreshment areas.",
          icon: "Coffee",
        },
      ]}
      bulletsTitle="Workspace includes"
      bullets={[
        "Meeting rooms",
        "Dedicated desk",
        "Conference room access",
        "Shared office space",
        "Parking Space",
        "Unlimited coffee and tea",
        "On-site support team",
        "High-speed Wifi",
        "Regular networking events",
        "Kitchen and lounge area",
        "Pay for the workspace you need",
        "Professional receptionist to greet guests",
      ]}
      ctaTitle="Create a workplace that is right for your business today."
      ctaText="Tell us your preferred city, team size, and seating style, and our team will help you choose a workspace setup that supports your workday without unnecessary overhead."
    />
  );
}
