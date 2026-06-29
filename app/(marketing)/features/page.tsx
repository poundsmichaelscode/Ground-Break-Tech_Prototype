import Link from "next/link";
import { BellRing, Building2, CheckCircle2, CloudOff, FileSignature, Layers3, LockKeyhole, MessageSquareText, PaintBucket, ReceiptText, Ruler, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteNav } from "@/components/marketing/site-nav";
import { MarketingCard } from "@/components/marketing/marketing-card";

const sections = [
  { title: "Project execution", description: "Field and office tools for contractors who need blueprint clarity, checklist discipline, and owner-ready decisions.", items: [["Blueprint workspace", "Version history, annotations, measurements, comments, and offline badges for field confidence.", Layers3], ["Construction phases", "Foundation, framing, MEP, roofing, finishes, punch list, and handover tracked by accountable owner.", CheckCircle2], ["Offline sync", "Crews can queue updates, notes, checklist progress, and document activity when connectivity fails.", CloudOff]] },
  { title: "Owner experience", description: "A controlled buyer portal that lets homeowners explore decisions without disrupting approved construction data.", items: [["Finish customization", "Paint, flooring, kitchen, roof, and landscape selections with budget and timeline impact.", PaintBucket], ["Upgrade requests", "Requests stay sandboxed until a contractor approves cost, scope, and schedule impact.", Ruler], ["Notifications", "Owners receive clear updates when decisions are submitted, reviewed, accepted, rejected, or expired.", BellRing]] },
  { title: "Commercial operations", description: "Proposal, contract, invoice, and subscription workflows designed for construction companies preparing to scale.", items: [["Proposal management", "Create, duplicate, preview, send, and convert proposals into contracts.", FileSignature], ["Invoice controls", "Create invoices, mark paid or overdue, download PDFs, and track recent payment history.", ReceiptText], ["Role permissions", "Separate administrator, contractor, and homeowner access so every page matches authority.", LockKeyhole]] }
] as const;

export default function FeaturesPage() {
  return <main className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
    <SiteNav />
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
        <div><Badge tone="blue">Features</Badge><h1 className="mt-6 text-5xl font-black tracking-[-.05em] md:text-7xl">Everything required to run a premium custom build.</h1></div>
        <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">Groundbreak Tech is not a generic project tracker. It is organized around construction-specific decisions: drawings, finish selections, change approvals, budgets, contracts, invoices, and field synchronization.</p>
      </div>
      <div className="mt-14 grid gap-8">
        {sections.map((section) => <MarketingCard key={section.title} className="p-8"><div className="grid gap-8 lg:grid-cols-[.35fr_.65fr]"><div><h2 className="text-2xl font-black">{section.title}</h2><p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{section.description}</p></div><div className="grid gap-4 md:grid-cols-3">{section.items.map(([title, body, Icon]) => <div key={title} className="rounded-2xl border bg-slate-50 p-5 dark:bg-slate-950"><Icon className="h-6 w-6 text-blue-600" /><h3 className="mt-5 font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div>)}</div></div></MarketingCard>)}
      </div>
    </section>
    <section className="border-y bg-white px-6 py-20 dark:bg-slate-900"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">{[{ title: "Contractors", body: "Manage projects, crews, blueprints, proposals, budgets, approvals, and invoices.", Icon: Building2 }, { title: "Homeowners", body: "View progress, customize finishes, approve proposals, and understand budget impact.", Icon: MessageSquareText }, { title: "Administrators", body: "Control users, subscriptions, billing, analytics, permissions, and audit logs.", Icon: ShieldCheck }].map(({ title, body, Icon }) => <MarketingCard key={title}><Icon className="h-7 w-7 text-blue-600" /><h3 className="mt-6 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></MarketingCard>)}</div></section>
    <section className="mx-auto max-w-7xl px-6 py-20"><div className="rounded-[2rem] border bg-slate-950 p-8 text-white dark:bg-white dark:text-slate-950"><h2 className="text-3xl font-black">See the role-aware MVP.</h2><p className="mt-3 max-w-2xl leading-7 opacity-75">Use the login page to switch between administrator, contractor, and homeowner workflows.</p><Button asChild className="mt-6" variant="secondary"><Link href="/login">Open role selector</Link></Button></div></section>
    <SiteFooter />
  </main>;
}
