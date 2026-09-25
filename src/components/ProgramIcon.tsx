import { HeartPulse, Leaf, Ribbon, ShieldCheck, Users, type LucideIcon } from "lucide-react";

import type { ProgramIcon as ProgramIconName } from "@/content/programs";

const icons: Record<ProgramIconName, LucideIcon> = {
  shield: ShieldCheck,
  leaf: Leaf,
  heart: HeartPulse,
  ribbon: Ribbon,
  users: Users,
};

export function ProgramIcon({ name, className = "size-5" }: { name: ProgramIconName; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" className={className} />;
}
