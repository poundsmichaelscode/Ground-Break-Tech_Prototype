import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, CloudOff, FileText, Home, LockKeyhole, MessageSquareText, Ruler, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SiteFooter, SiteNav } from "@/components/marketing/site-nav";
import { MarketingCard } from "@/components/marketing/marketing-card";
import { ThreeHomeVisualizer } from "@/components/visualizer/three-home-visualizer";
import { approvals, projects } from "@/data/mock";
import { formatCurrency } from "@/lib/utils";

const metrics = ["4 active builds", "$3.98M managed budget", "318 offline changes synced", "12 proposals converted"];
const workflows = [
  ["Plan", "Blueprints, comments, versions, and field measurements live in one workspace.", Ruler],
  ["Approve", "Every owner selection is sandboxed until cost, timeline, and scope are approved.", ClipboardCheck],
  ["Build", "Crews work from the latest decision record with offline checklists and sync confidence.", CloudOff],
  ["Bill", "Proposals, contracts, invoices, and payment history stay connected to the project.", FileText]
] as const;

export function LandingPage() {
  return <main className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
    <SiteNav />
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_.92fr] lg:items-center">
      <div>
        <Badge tone="blue">Premium construction management</Badge>
        <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-.055em] md:text-7xl">One operating system for custom home construction.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Groundbreak Tech gives contractors, homeowners, and administrators a shared place to manage blueprints, finish decisions, approvals, budgets, messages, offline updates, proposals, contracts, and invoices.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><Link href="/login">Open role demo <ArrowRight className="h-5 w-5" /></Link></Button><Button asChild size="lg" variant="outline"><Link href="/features">See product tour</Link></Button></div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">{metrics.map((m) => <div key={m} className="rounded-2xl border bg-white px-4 py-3 text-sm font-bold dark:bg-slate-900"><CheckCircle2 className="mr-2 inline h-4 w-4 text-emerald-500" />{m}</div>)}</div>
      </div>
      <div className="space-y-5">
        <ThreeHomeVisualizer />
        <MarketingCard className="p-5">
          <div className="flex items-center justify-between"><div><p className="font-black">Palm Residence</p><p className="text-sm text-slate-500">Interior finishes · {projects[0].lastSync}</p></div><Badge tone="green">On track</Badge></div>
          <div className="mt-5"><div className="mb-2 flex justify-between text-sm"><span>Project progress</span><b>{projects[0].progress}%</b></div><Progress value={projects[0].progress} /></div>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950"><p className="text-sm font-bold">Pending owner decision</p><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{approvals[0].title} · {formatCurrency(approvals[0].amount)}</p></div>
        </MarketingCard>
      </div>
    </section>

    <section className="border-y bg-white px-6 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="font-bold text-blue-600">Workflow coverage</p><h2 className="mt-3 text-4xl font-black tracking-tight">Built around how construction decisions actually move.</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{workflows.map(([title, body, Icon]) => <MarketingCard key={title}><Icon className="h-7 w-7 text-blue-600" /><h3 className="mt-6 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></MarketingCard>)}</div></div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 lg:grid-cols-3">
      {["Contractor command center", "Homeowner decision portal", "Admin operating layer"].map((title, index) => <MarketingCard key={title} className={index === 1 ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : ""}><div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-white">{index === 0 ? <Home className="h-5 w-5" /> : index === 1 ? <MessageSquareText className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}</div><h3 className="mt-6 text-2xl font-black">{title}</h3><p className="mt-4 text-sm leading-7 opacity-75">Role-specific dashboards keep people focused: builders manage execution, buyers make controlled selections, and administrators monitor growth, billing, security, and audit activity.</p></MarketingCard>)}
    </section>

    <section className="mx-auto max-w-7xl px-6 pb-20"><div className="rounded-[2rem] border bg-slate-950 p-8 text-white dark:bg-white dark:text-slate-950 md:p-10"><div className="grid gap-8 lg:grid-cols-[.75fr_.25fr] lg:items-center"><div><LockKeyhole className="h-7 w-7" /><h2 className="mt-5 text-3xl font-black tracking-tight">Designed to become a real SaaS product, not a disposable mockup.</h2><p className="mt-4 max-w-3xl leading-7 opacity-75">The architecture includes route groups, role-aware navigation, mock APIs, reusable modules, Stripe-ready billing structure, and production deployment fixes.</p></div><Button asChild variant="secondary" size="lg"><Link href="/register">Start beta</Link></Button></div></div></section>
    <SiteFooter />
  </main>;
}
