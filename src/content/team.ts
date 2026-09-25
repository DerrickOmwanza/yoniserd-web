import type { StaticImageData } from "next/image";

import samsonBarongo from "@/assets/team/samson-barongo.png";
import robertFoster from "@/assets/team/robert-foster.jpg";
import catherineNgotho from "@/assets/team/catherine-ngotho.jpg";
import odliahTemba from "@/assets/team/odliah-temba.jpg";
import mukolwePatrick from "@/assets/team/mukolwe-patrick.jpg";
import sherilleAdoyo from "@/assets/team/sherille-adoyo.jpg";

export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  photo: StaticImageData;
  /** Tailwind object-position class to keep the face in frame. */
  photoPosition?: string;
};

export const ceo = {
  name: "Dr. Samson Barongo, PhD",
  role: "Chief Executive Officer",
  photo: samsonBarongo,
  quote: "We believe that youth empowerment is the cornerstone of sustainable development.",
};

export const team: TeamMember[] = [
  { name: ceo.name, role: ceo.role, photo: samsonBarongo },
  {
    name: "Robert Foster",
    role: "Managing Director",
    bio: "Oversees programme implementation, financial management and day-to-day operations.",
    photo: robertFoster,
  },
  {
    name: "Mukolwe Alubokho Patrick",
    role: "Board Member",
    photoPosition: "object-[50%_22%]",
    bio: "Strengthens programme outcomes through resource mobilisation, data-driven decisions and stakeholder engagement.",
    photo: mukolwePatrick,
  },
  {
    name: "Catherine Ngotho",
    role: "Programme Officer",
    photoPosition: "object-[50%_12%]",
    photo: catherineNgotho,
  },
  {
    name: "Sherille Adoyo",
    role: "Programme Officer",
    bio: "Supports the planning, implementation and monitoring of programmes and projects.",
    photo: sherilleAdoyo,
  },
  {
    name: "Odliah Temba",
    role: "Field Officer",
    photo: odliahTemba,
  },
];
