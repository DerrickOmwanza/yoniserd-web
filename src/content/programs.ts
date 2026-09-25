export type ProgramIcon = "shield" | "leaf" | "heart" | "ribbon" | "users";

export type Program = {
  slug: string;
  title: string;
  icon: ProgramIcon;
  summary: string;
  description: string;
  /** Headline reach figures — confirm with the YoNISeRD team before each report period. */
  reach: string;
};

export const programs: Program[] = [
  {
    slug: "childrens-rights",
    title: "Children’s Rights",
    icon: "shield",
    summary:
      "Protecting and empowering vulnerable children through education, policy engagement and community support.",
    description:
      "We advocate for the protection and empowerment of vulnerable children through education, evidence-based policy engagement and direct community support, so that every child has access to quality education, protection from exploitation and a voice in decisions affecting their lives.",
    reach: "2,500+ children through direct programmes; 10,000+ through advocacy campaigns.",
  },
  {
    slug: "environment",
    title: "Environment & Climate",
    icon: "leaf",
    summary:
      "Youth-led conservation and climate action that protects natural resources and builds sustainable livelihoods.",
    description:
      "We position young people as environmental leaders — driving climate action, sustainable livelihoods and community-based conservation that combines local knowledge with modern solutions.",
    reach: "1,500+ youth engaged; 500+ hectares of natural resources protected.",
  },
  {
    slug: "reproductive-health",
    title: "Reproductive Health",
    icon: "heart",
    summary: "Youth-friendly reproductive health education and services that enable informed, healthy choices.",
    description:
      "Our evidence-based, youth-centred reproductive health education and referral services help young people make informed decisions about their health and futures while breaking down stigma.",
    reach: "3,000+ young people reached with education and services.",
  },
  {
    slug: "hiv-aids",
    title: "HIV/AIDS Awareness",
    icon: "ribbon",
    summary: "Community outreach that reduces stigma and connects people to testing, treatment and peer support.",
    description:
      "We combine education, peer support and linkage to healthcare to reduce stigma and promote HIV testing, prevention and treatment — including annual World AIDS Day mobilisation with Kisii University and partners.",
    reach: "4,000+ people reached; 800+ supported to access testing and treatment.",
  },
  {
    slug: "gender-based-violence",
    title: "Gender-Based Violence Prevention",
    icon: "users",
    summary: "Preventing GBV through advocacy, survivor support and community mobilisation led by young people.",
    description:
      "Through advocacy, survivor support and community mobilisation, we equip young people to challenge harmful norms and build cultures of respect and safety.",
    reach: "600+ survivors supported; 5,000+ community members mobilised.",
  },
];
