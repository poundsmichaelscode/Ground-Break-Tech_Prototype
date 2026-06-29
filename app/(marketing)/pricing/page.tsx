import Link from "next/link";
import { CheckCircle2, LockKeyhole, MinusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteNav } from "@/components/marketing/site-nav";
import { MarketingCard } from "@/components/marketing/marketing-card";

const free = ["1 active project", "2 blueprint uploads", "Basic project timeline", "Buyer messages", "Simple budget summary"];
const premium = ["Unlimited projects", "Unlimited blueprint uploads", "Offline sync", "Proposal and contract management", "Invoice management", "Advanced budgeting", "Portfolio analytics", "Team collaboration", "Premium reports"];
const comparison = [
  ["Active projects", "1", "Unlimited"], ["Blueprint uploads", "2", "Unlimited"], ["Offline field sync", "Locked", "Included"], ["Proposal generation", "Locked", "Included"], ["Invoice management", "Locked", "Included"], ["Advanced analytics", "Locked", "Included"], ["Premium reports", "Locked", "Included"]
] as const;

export default function PricingPage() {
  return <main className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white"><SiteNav />
    <section className="mx-auto max-w-7xl px-6 py-20 text-center"><Badge tone="blue">Pricing</Badge><h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black tracking-[-.05em] md:text-7xl">Start with one project. Upgrade when your team is ready to scale.</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">The pricing page is focused on plan decisions, limits, upgrade triggers, and Stripe-ready subscription architecture.</p></section>
    <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-12 md:grid-cols-2">
      <MarketingCard className="p-8"><div className="flex items-center justify-between"><h2 className="text-3xl font-black">Free</h2><Badge>Preview</Badge></div><p className="mt-3 text-slate-600 dark:text-slate-300">Best for a homeowner demo or one small project.</p><p className="mt-8 text-5xl font-black">$0</p><ul className="mt-8 space-y-3 text-sm">{free.map((f) => <li key={f} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />{f}</li>)}</ul><Button asChild className="mt-8 w-full" variant="outline"><Link href="/register">Create free workspace</Link></Button></MarketingCard>
      <MarketingCard className="border-blue-300 p-8"><div className="flex items-center justify-between"><h2 className="text-3xl font-black">Premium</h2><Badge tone="blue">Recommended</Badge></div><p className="mt-3 text-slate-600 dark:text-slate-300">For contractors and construction teams managing real client workflows.</p><p className="mt-8 text-5xl font-black">$499<span className="text-base text-slate-500">/mo</span></p><ul className="mt-8 space-y-3 text-sm">{premium.map((f) => <li key={f} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />{f}</li>)}</ul><Button asChild className="mt-8 w-full" variant="secondary"><Link href="/upgrade">Upgrade with Stripe mock</Link></Button></MarketingCard>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-12"><MarketingCard className="overflow-hidden p-0"><div className="grid grid-cols-3 border-b bg-slate-50 p-4 text-sm font-black dark:bg-slate-950"><span>Capability</span><span>Free</span><span>Premium</span></div>{comparison.map(([feature, f, p]) => <div key={feature} className="grid grid-cols-3 border-b p-4 text-sm last:border-b-0"><span className="font-semibold">{feature}</span><span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">{f === "Locked" && <LockKeyhole className="h-4 w-4 text-orange-500" />}{f}</span><span className="flex items-center gap-2 font-semibold">{p === "Included" ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <MinusCircle className="h-4 w-4" />}{p}</span></div>)}</MarketingCard></section>
    <section className="mx-auto max-w-7xl px-6 py-16"><div className="rounded-[2rem] border bg-white p-8 dark:bg-slate-900"><h2 className="text-3xl font-black">When should you upgrade?</h2><p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">Upgrade when your team needs more than one active project, proposal generation, invoices, offline field sync, or advanced analytics. The mock implementation is already structured for Stripe checkout and subscription state.</p></div></section>
    <SiteFooter />
  </main>;
}
