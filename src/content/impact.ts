import { yearsActive } from "./site";

export type Stat = { value: string; label: string; note?: string };

/**
 * Headline figures shown on the home and impact pages.
 * TODO(client): confirm these totals with YoNISeRD's M&E records before launch.
 */
export const headlineStats: Stat[] = [
  { value: "10,000+", label: "Young people reached", note: "through programmes and campaigns" },
  { value: "50", label: "Communities", note: "across Kisii and neighbouring counties" },
  { value: "5", label: "Programme areas", note: "health, rights, environment & more" },
  { value: `${yearsActive()}`, label: "Years of service", note: "registered NGO since 2018" },
];

export const milestones = [
  {
    year: 2018,
    title: "Registered as an NGO",
    description: "YoNISeRD is registered under the NGO Co-ordination Act on 30 April 2018.",
  },
  {
    year: 2019,
    title: "First programme launched",
    description: "The Seed of Hope vocational programme reaches its first 100+ young people.",
  },
  { year: 2020, title: "Growing our reach", description: "Operations extend to 20 communities." },
  {
    year: 2022,
    title: "Community research hub",
    description: "A dedicated hub for community-led research and evidence-building is launched.",
  },
  { year: 2024, title: "10,000+ young people reached", description: "Programmes now active across 50 communities." },
] as const;

/** How YoNISeRD works — drawn from the mission statement. */
export const approach = [
  {
    title: "Connect",
    description:
      "We build inclusive youth networks that link young people to peers, mentors, institutions and opportunity.",
  },
  {
    title: "Research",
    description:
      "We generate community evidence so that programmes — and policy — respond to what young people actually need.",
  },
  {
    title: "Empower",
    description: "We deliver integrated services and training that build leadership, skills and wellbeing.",
  },
  {
    title: "Transform",
    description: "Young people lead change in their own communities, and we measure and share what works.",
  },
] as const;
