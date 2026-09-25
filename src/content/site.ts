/**
 * Single source of truth for organisation details.
 * Every page, the footer, SEO metadata and the contact form read from here.
 */

export const site = {
  name: "Youth Network Integrated Services for Research and Development",
  shortName: "YoNISeRD",
  url: "https://yoniserd.co.ke",
  description:
    "YoNISeRD is a registered Kenyan NGO in Kisii that connects, empowers and mobilises young people through inclusive networks, community research and integrated development programmes.",
  motto: "Innovate. Empower. Transform.",
  vision:
    "Empowering youth through collaborative networks, innovative research, and integrated development services to build a resilient, inclusive, and knowledge-driven future.",
  mission:
    "To connect, empower, and mobilize youth through inclusive networks, innovative research, and integrated development services that foster leadership, knowledge creation, and sustainable impact across communities.",
  founded: "2018-04-30",
  foundedYear: 2018,
  headquarters: "Kisii, Kenya",
  registration: {
    status: "Registered under Section 10 of the Non-Governmental Organizations Co-ordination Act",
    number: "OP.218/051/18-058/11164",
    date: "30 April 2018",
  },
} as const;

export const contact = {
  email: "youthnetwork4@gmail.com",
  phone: "+254 725 451 006",
  phoneHref: "tel:+254725451006",
  alternatePhone: "+254 790 095 796",
  location: "Kisii, Kenya",
} as const;

// Only real, verified profiles. Add X/Facebook here once the NGO has accounts.
export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/youth-network-integrated-services-for-research-and-development/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yoniserd6",
  },
] as const;

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programs" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/impact" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
] as const;

export const coreValues = [
  "Youth Empowerment",
  "Innovation",
  "Inclusivity",
  "Collaboration",
  "Integrity",
  "Sustainability",
  "Leadership",
  "Knowledge Sharing",
] as const;

export function yearsActive(now = new Date()): number {
  return now.getFullYear() - site.foundedYear;
}
