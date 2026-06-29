import Link from "next/link";
import { ArrowRight, BellRing, CheckCircle2, CloudOff, FileCheck2, Layers3, LockKeyhole, MessageSquareText, PaintBucket, Ruler, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const featureGroups = [
  {
    title: "For construction teams",
    description: "Keep field work, office approvals, and client communication connected without forcing crews into complicated software.",
    items: [
      ["Blueprint workspace", "Upload drawings, review versions, add comments, and keep decisions attached to the exact plan area.", Layers3],
      ["Construction stages", "Track foundation, framing, MEP, roofing, finishes, punch list, and handover with accountable owners.", CheckCircle2],
      ["Offline field mode", "Queue site updates, checklist progress, notes, and photos when connectivity is poor.", CloudOff]
    ]
  },
  {
    title: "For homeowners",
    description: "Give buyers a premium, controlled experience where they can explore finishes without disrupting the live build.",
    items: [
      ["Finish selections", "Compare paint, flooring, kitchen, roof, and landscape options inside a sandboxed customization flow.", PaintBucket],
      ["Budget impact", "Show upgrade cost, timeline impact, and approval status before any field instruction changes.", Ruler],
      ["Approval notifications", "Notify buyers and contractors when requests are submitted, reviewed, accepted, or rejected.", BellRing]
    ]
  },
  {
    title: "For operations leaders",
    description: "Create the management layer needed to scale from a few projects to a professional construction portfolio.",
    items: [
      ["Role permissions", "Separate administrator, contractor, and homeowner access so every user sees only what they need.", LockKeyhole],
      ["Proposal to invoice flow", "Move from estimate to contract to invoice with consistent data and audit-ready records.", FileCheck2],
      ["Client messaging", "Centralize project questions, attachments, blueprint references, and read receipts.", MessageSquareText]
    ]
  }
] as const;

export default function Page(){
 return <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-950 dark:bg-slate-950 dark:text-white">
  <div className="mx-auto max-w-7xl">
   <header className="flex items-center justify-between rounded-3xl border bg-white px-5 py-4 shadow-sm dark:bg-slate-900">
    <Link href="/" className="font-black">Groundbreak Tech</Link>
    <div className="flex gap-2"><Button asChild variant="ghost"><Link href="/pricing">Pricing</Link></Button><Button asChild variant="secondary"><Link href="/login">Login</Link></Button></div>
   </header>
   <section className="grid gap-10 py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
    <div><Badge tone="blue">Product capabilities</Badge><h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">Features built around real construction workflows.</h1></div>
    <p className="text-lg leading-8 text-muted-foreground">Groundbreak Tech is not a generic task board. It connects blueprints, selections, approvals, budgets, contracts, invoices, messages, and offline field updates inside one role-aware construction operating system.</p>
   </section>
   <section className="grid gap-6">
    {featureGroups.map((group)=><Card key={group.title} className="bg-white dark:bg-slate-900"><div className="grid gap-8 lg:grid-cols-[.35fr_.65fr]"><div><h2 className="text-2xl font-black">{group.title}</h2><p className="mt-4 leading-7 text-muted-foreground">{group.description}</p></div><div className="grid gap-4 md:grid-cols-3">{group.items.map(([title, body, Icon])=><div key={title} className="rounded-2xl border bg-slate-50 p-5 dark:bg-slate-950"><Icon className="h-6 w-6 text-blue-600"/><h3 className="mt-5 font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p></div>)}</div></div></Card>)}
   </section>
   <section className="my-20 rounded-3xl border bg-slate-950 p-8 text-white dark:bg-white dark:text-slate-950"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><ShieldCheck className="h-7 w-7"/><h2 className="mt-4 text-3xl font-black">Designed for investor demos and beta customers.</h2><p className="mt-3 max-w-2xl text-sm leading-6 opacity-75">Every capability is structured so it can later connect to real APIs, Stripe, document storage, notifications, and project databases.</p></div><Button asChild variant="secondary"><Link href="/register">Start beta <ArrowRight className="h-4 w-4"/></Link></Button></div></section>
  </div>
 </main>;
}
