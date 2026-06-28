import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function StatCard({ label, value, delta, icon: Icon, tone="blue" }: { label: string; value: string; delta: string; icon: LucideIcon; tone?: "blue"|"green"|"orange"|"red" }) {
  return <Card className="group overflow-hidden">
    <div className="flex items-start justify-between"><div><p className="text-sm font-medium text-muted-foreground">{label}</p><p className="mt-3 text-3xl font-black tracking-tight">{value}</p></div><div className="rounded-2xl bg-muted p-3 transition group-hover:scale-110"><Icon className="h-5 w-5" /></div></div>
    <div className="mt-5"><Badge tone={tone}>{delta}</Badge></div>
  </Card>;
}
