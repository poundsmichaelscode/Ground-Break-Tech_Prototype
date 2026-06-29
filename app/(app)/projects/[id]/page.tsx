import { notFound } from "next/navigation";
import { projects } from "@/data/mock";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThreeHomeVisualizer } from "@/components/visualizer/three-home-visualizer";
import { formatCurrency } from "@/lib/utils";

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params; const project = projects.find(p=>p.id===id); if(!project) notFound();
 return <div className="space-y-8"><section className="rounded-[2rem] border bg-slate-50 dark:bg-slate-950 p-8"><Badge tone="green">{project.status}</Badge><h1 className="mt-4 text-4xl font-black tracking-tight">{project.name}</h1><p className="mt-2 text-muted-foreground">{project.client} · {project.location} · Last synced {project.lastSync}</p><div className="mt-8 max-w-xl"><div className="mb-2 flex justify-between text-sm"><span>{project.stage}</span><b>{project.progress}%</b></div><Progress value={project.progress}/></div></section><section className="grid gap-5 lg:grid-cols-4"><Card><p className="text-sm text-muted-foreground">Budget</p><p className="mt-2 text-2xl font-black">{formatCurrency(project.budget)}</p></Card><Card><p className="text-sm text-muted-foreground">Spent</p><p className="mt-2 text-2xl font-black">{formatCurrency(project.spent)}</p></Card><Card><p className="text-sm text-muted-foreground">Approvals</p><p className="mt-2 text-2xl font-black">7 pending</p></Card><Card><p className="text-sm text-muted-foreground">Crew</p><p className="mt-2 text-2xl font-black">18 active</p></Card></section><ThreeHomeVisualizer/></div>
}
