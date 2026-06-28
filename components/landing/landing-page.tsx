import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, CloudOff, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThreeHomeVisualizer } from "@/components/visualizer/three-home-visualizer";

const features = [
  ["Blueprint collaboration", "Annotate construction drawings, resolve RFIs, and keep field teams aligned.", Layers3],
  ["Buyer customization", "Sandbox paint, flooring, kitchen, roof, and landscape changes before approval.", Sparkles],
  ["Approval workflow", "Every upgrade, budget impact, and contractor decision is audit-ready.", CheckCircle2],
  ["Offline-first field mode", "Crews can mark progress and sync when connectivity returns.", CloudOff],
  ["Enterprise controls", "Permissions, billing, analytics, subscriptions, and audit logs for admins.", ShieldCheck]
] as const;

export function LandingPage() {
 return <main className="overflow-hidden bg-background">
  <section className="relative bg-premium-gradient px-6 py-6"><nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border bg-card/70 px-5 py-4 backdrop-blur-xl"><Link href="/" className="flex items-center gap-3 font-black"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950"><Building2 className="h-5 w-5"/></span>Groundbreak Tech</Link><div className="hidden gap-6 text-sm font-semibold text-muted-foreground md:flex"><Link href="/features">Features</Link><Link href="/pricing">Pricing</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><div className="flex gap-2"><Button asChild variant="ghost"><Link href="/login">Login</Link></Button><Button asChild variant="secondary"><Link href="/register">Start beta</Link></Button></div></nav>
  <div className="mx-auto grid max-w-7xl gap-12 px-2 py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-center"><div><Badge tone="blue">Series A-ready construction OS</Badge><h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-.05em] md:text-7xl">Build custom homes with fewer surprises.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">Groundbreak Tech connects contractors, buyers, and administrators in one premium offline-first platform where blueprints, finish selections, approvals, budgets, messages, and field progress stay synchronized.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><Link href="/dashboard">View prototype <ArrowRight className="h-5 w-5"/></Link></Button><Button asChild size="lg" variant="outline"><Link href="/features">Explore workflow</Link></Button></div></div><ThreeHomeVisualizer /></div></section>
  <section className="mx-auto max-w-7xl px-6 py-24"><div className="max-w-2xl"><p className="font-bold text-blue-600">Product suite</p><h2 className="mt-3 text-4xl font-black tracking-tight">A polished command center for every build stakeholder.</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{features.map(([title, body, Icon])=><Card key={title}><Icon className="h-6 w-6 text-blue-600"/><h3 className="mt-6 font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p></Card>)}</div></section>
  <section className="mx-auto max-w-7xl px-6 pb-24"><div className="grid gap-6 lg:grid-cols-3">{["Buyer explores upgrades", "Contractor approves impact", "Admin tracks revenue"].map((step,i)=><Card key={step} className="bg-slate-950 text-white dark:bg-white dark:text-slate-950"><p className="text-sm font-bold text-blue-300">0{i+1}</p><h3 className="mt-5 text-2xl font-black">{step}</h3><p className="mt-4 text-sm leading-7 opacity-75">Designed with premium hierarchy, auditability, and real construction workflow constraints.</p></Card>)}</div></section>
  <footer className="border-t px-6 py-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-muted-foreground md:flex-row"><p>© 2026 Groundbreak Tech. Premium construction management prototype.</p><p>Built for contractors, buyers, and administrators.</p></div></footer>
 </main>
}
