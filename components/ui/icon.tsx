import {
  Globe,
  Workflow,
  Bot,
  Database,
  Gauge,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Globe,
  Workflow,
  Bot,
  Database,
  Gauge,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Globe;
  return <Cmp className={className} strokeWidth={1.5} />;
}
