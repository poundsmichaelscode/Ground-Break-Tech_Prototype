import Link from "next/link";
import { Building2, CheckCircle2, HardHat, ShieldCheck, UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteNav } from "@/components/marketing/site-nav";
import { MarketingCard } from "@/components/marketing/marketing-card";

const beliefs = [
  ["Construction is emotional", "A custom home is expensive, personal, and full of small decisions that need clarity."],
  ["Builders need fewer interruptions", "Homeowner choices should be structured before they become field changes."],
  ["Software should reduce risk", "Every approval, budget impact, document, and message should leave a clean audit trail."]
];

export default function AboutPage() {
  return <main className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white"><SiteNav />
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
      <div><Badge tone="blue">About Groundbreak</Badge><h1 className="mt-6 text-5xl font-black tracking-[-.05em] md:text-7xl">Built for the messy middle of custom home construction.</h1><p className="mt-7 text-lg leading-8 text-slate-600 dark:text-slate-300">Groundbreak Tech was designed around a simple problem: builders work from drawings, homeowners think in finishes, and administrators need clean records. The platform connects those perspectives without making any role do unnecessary work.</p><Button asChild className="mt-8" variant="secondary"><Link href="/contact">Talk to the team</Link></Button></div>
      <MarketingCard className="p-8"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950"><Building2 className="h-6 w-6" /></div><h2 className="mt-6 text-3xl font-black">The problem</h2><p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">Construction teams lose time when selections, budgets, approvals, drawings, invoices, and messages live in different tools. Groundbreak turns those disconnected moments into a single workflow.</p><div className="mt-8 grid gap-3">{["Fewer missed owner decisions", "Cleaner approval audit trail", "More confident field execution"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border bg-slate-50 p-4 dark:bg-slate-950"><CheckCircle2 className="h-5 w-5 text-emerald-500" /><span className="font-semibold">{item}</span></div>)}</div></MarketingCard>
    </section>
    <section className="border-y bg-white px-6 py-20 dark:bg-slate-900"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="font-bold text-blue-600">Product philosophy</p><h2 className="mt-3 text-4xl font-black tracking-tight">Luxury software for practical jobsite reality.</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{beliefs.map(([title, body]) => <MarketingCard key={title}><h3 className="text-xl font-black">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{body}</p></MarketingCard>)}</div></div></section>
    <section className="mx-auto grid max-w-7xl gap-5 px-6 py-20 md:grid-cols-3">{[{ title: "Contractor-led", body: "Execution tools come first: drawings, checklists, budgets, materials, phases, and approvals.", Icon: HardHat }, { title: "Buyer-friendly", body: "Homeowners get a clear visual decision experience without editing construction records.", Icon: UsersRound }, { title: "Admin-ready", body: "Subscriptions, analytics, audit logs, permissions, and billing are part of the operating model.", Icon: ShieldCheck }].map(({ title, body, Icon }) => <MarketingCard key={title}><Icon className="h-7 w-7 text-blue-600" /><h3 className="mt-6 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{body}</p></MarketingCard>)}</section>
    <SiteFooter />
  </main>;
}
