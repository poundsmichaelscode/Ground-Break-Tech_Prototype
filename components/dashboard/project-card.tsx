import Link from "next/link";
import { MapPin } from "lucide-react";
import { Project } from "@/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const tone = project.status === "On track" ? "green" : project.status === "At risk" ? "orange" : project.status === "Delayed" ? "red" : "blue";
  return <Link href={`/projects/${project.id}`}><Card className="h-full">
    <div className="flex items-start justify-between"><div><h3 className="text-xl font-black tracking-tight">{project.name}</h3><p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{project.location}</p></div><Badge tone={tone}>{project.status}</Badge></div>
    <div className="mt-8 space-y-3"><div className="flex justify-between text-sm"><span className="text-muted-foreground">{project.stage}</span><span className="font-bold">{project.progress}%</span></div><Progress value={project.progress} /></div>
    <div className="mt-8 grid grid-cols-2 gap-3 rounded-2xl bg-muted/60 p-4 text-sm"><div><p className="text-muted-foreground">Budget</p><p className="font-bold">{formatCurrency(project.budget)}</p></div><div><p className="text-muted-foreground">Spent</p><p className="font-bold">{formatCurrency(project.spent)}</p></div></div>
  </Card></Link>;
}
