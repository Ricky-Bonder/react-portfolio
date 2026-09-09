import {
  Activity,
  Layers,
  Monitor,
  Radio,
  Server,
  Thermometer,
  type LucideProps,
} from "lucide-react";
import type { ProjectIcon as ProjectIconName } from "@/lib/data";

const icons = {
  layers: Layers,
  monitor: Monitor,
  activity: Activity,
  radio: Radio,
  thermometer: Thermometer,
  server: Server,
} as const;

export function ProjectIcon({
  name,
  ...props
}: { name: ProjectIconName } & LucideProps) {
  const Icon = icons[name];
  return <Icon {...props} />;
}
