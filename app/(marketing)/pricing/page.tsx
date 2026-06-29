import Link from "next/link";
import { ArrowRight, Check, HelpCircle, Lock, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const freeFeatures = ["1 active project", "2 blueprint uploads", "Basic budget view", "Client messaging", "Standard approvals"];
const premiumFeatures = ["Unlimited projects", "Unlimited blueprint uploads", "Offline sync", "Proposal management", "Contracts", "Invoicing", "Advanced analytics", "Premium reports", "Team collaboration"];
const faqs = [
  ["Can I test the product before upgrading?", "Yes. The Free plan is designed for evaluation with one active construction project."],
  ["Is Stripe already connected?", "The architecture is Stripe-ready, but payments are mocked in this MVP package."],
  ["Who should use Premium?", "Contractors and firms managing multiple builds, approvals, proposals, invoices, and field teams."],
  ["Can homeowners pay invoices later?", "Yes. The invoice module is structured for future payment links and payment history."],
] as const;

export default function Page(){
 return <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-950 dark:bg-slate-950 dark:text-white">
  <div className="mx-auto max-w-7xl">
   <header className="flex items-center justify-between rounded-3xl border bg-white px-5 py-4 shadow-sm dark:bg-slate-900"><Link href="/" className="font-black">Groundbreak Tech</Link><Button asChild variant="ghost"><Link href="/features">View features</Link></Button></header>
   <section className="py-20 text-center"><Badge tone="green">Simple plans</Badge><h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Pricing that grows with your construction workflow.</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Start with one project, then unlock the operating system contractors need for proposals, invoices, reporting, offline sync, and team collaboration.</p></section>
   <section className="grid gap-6 lg:grid-cols-2">
    <Card className="bg-white dark:bg-slate-900"><CardHeader><div><CardTitle className="text-2xl">Free</CardTitle><CardDescription>Best for evaluating Groundbreak Tech with a single build.</CardDescription></div><Badge>Starter</Badge></CardHeader><p className="text-5xl font-black">$0<span className="text-base font-semibold text-muted-foreground">/mo</span></p><div className="mt-8 space-y-3">{freeFeatures.map(f=><p key={f} className="flex items-center gap-3 text-sm"><Check className="h-4 w-4 text-emerald-500"/>{f}</p>)}</div><div className="mt-8 rounded-2xl border bg-slate-50 p-4 text-sm text-muted-foreground dark:bg-slate-950"><Lock className="mb-2 h-4 w-4"/>Advanced analytics, offline sync, proposal generation, invoicing, and premium reporting remain locked.</div><Button asChild className="mt-8 w-full" variant="outline"><Link href="/register">Start free</Link></Button></Card>
    <Card className="border-slate-950 bg-white dark:border-white dark:bg-slate-900"><CardHeader><div><CardTitle className="text-2xl">Premium</CardTitle><CardDescription>For professional contractors and construction teams.</CardDescription></div><Badge tone="blue">Recommended</Badge></CardHeader><p className="text-5xl font-black">$499<span className="text-base font-semibold text-muted-foreground">/mo</span></p><div className="mt-8 grid gap-3 md:grid-cols-2">{premiumFeatures.map(f=><p key={f} className="flex items-center gap-3 text-sm"><Check className="h-4 w-4 text-emerald-500"/>{f}</p>)}</div><Button asChild className="mt-8 w-full" variant="secondary"><Link href="/upgrade">Upgrade plan <ArrowRight className="h-4 w-4"/></Link></Button></Card>
   </section>
   <section className="my-20 grid gap-6 lg:grid-cols-[.35fr_.65fr]"><div><ShieldCheck className="h-7 w-7 text-blue-600"/><h2 className="mt-4 text-3xl font-black">What changes when you upgrade?</h2><p className="mt-3 leading-7 text-muted-foreground">Premium removes operational limits and unlocks the modules needed for a real construction business workflow.</p></div><div className="grid gap-4 md:grid-cols-2">{faqs.map(([q,a])=><Card key={q} className="bg-white dark:bg-slate-900"><HelpCircle className="h-5 w-5 text-blue-600"/><h3 className="mt-4 font-black">{q}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{a}</p></Card>)}</div></section>
  </div>
 </main>;
}
