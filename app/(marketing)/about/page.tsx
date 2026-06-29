import Link from "next/link";
import { Building2, CheckCircle2, ClipboardCheck, Hammer, MessageSquareWarning, UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const principles = [
  ["Clarity before speed", "Construction decisions should be visible, documented, and approved before they reach the job site.", ClipboardCheck],
  ["Buyers deserve confidence", "Homeowners should understand progress, budget impact, and finish choices without calling the builder daily.", UsersRound],
  ["Field teams need simplicity", "Crews need offline-ready checklists and project context, not another confusing enterprise dashboard.", Hammer],
] as const;

export default function Page(){
 return <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-950 dark:bg-slate-950 dark:text-white">
  <div className="mx-auto max-w-7xl">
   <header className="flex items-center justify-between rounded-3xl border bg-white px-5 py-4 shadow-sm dark:bg-slate-900"><Link href="/" className="font-black">Groundbreak Tech</Link><Button asChild variant="ghost"><Link href="/contact">Contact</Link></Button></header>
   <section className="grid gap-10 py-20 lg:grid-cols-[1fr_.8fr] lg:items-center"><div><Badge tone="blue">Our story</Badge><h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">We are building the communication layer for custom home construction.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">Groundbreak Tech was shaped around a simple problem: custom builds fail when decisions are scattered across calls, PDFs, messages, spreadsheets, and site notes. The platform brings contractors, homeowners, and administrators into one reliable workflow.</p></div><Card className="bg-white dark:bg-slate-900"><Building2 className="h-8 w-8 text-blue-600"/><h2 className="mt-6 text-2xl font-black">Built for the moments where mistakes become expensive.</h2><div className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground"><p><b className="text-foreground">A finish change</b> should show budget impact before approval.</p><p><b className="text-foreground">A blueprint comment</b> should stay attached to the right project version.</p><p><b className="text-foreground">A field update</b> should sync cleanly when the crew reconnects.</p></div></Card></section>
   <section className="grid gap-5 md:grid-cols-3">{principles.map(([title,body,Icon])=><Card key={title} className="bg-white dark:bg-slate-900"><Icon className="h-6 w-6 text-blue-600"/><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p></Card>)}</section>
   <section className="my-20 grid gap-6 rounded-3xl border bg-white p-8 dark:bg-slate-900 lg:grid-cols-3"><div><MessageSquareWarning className="h-7 w-7 text-orange-500"/><h2 className="mt-4 text-3xl font-black">The problem we solve</h2></div><div className="lg:col-span-2"><p className="text-lg leading-8 text-muted-foreground">Builders work from blueprints while buyers think in finishes, rooms, budgets, and timelines. Groundbreak Tech translates those needs into one approval-driven system so every stakeholder can collaborate without losing control of the build.</p><div className="mt-8 grid gap-3 md:grid-cols-3">{["Fewer communication gaps","Clearer approval history","More confident clients"].map(item=><div key={item} className="flex items-center gap-2 rounded-2xl border bg-slate-50 p-4 text-sm font-bold dark:bg-slate-950"><CheckCircle2 className="h-4 w-4 text-emerald-500"/>{item}</div>)}</div></div></section>
  </div>
 </main>;
}
