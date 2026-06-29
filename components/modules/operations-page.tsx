import Link from "next/link";
import { ArrowRight, Bell, Boxes, FileText, MessageSquare, ShieldCheck, UsersRound } from "lucide-react";
import { approvals, chartData, crews, invoices, materials, notifications, projects, usageStats } from "@/data/mock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BudgetChart } from "@/components/dashboard/budget-chart";
import { ProjectCard } from "@/components/dashboard/project-card";
import { formatCurrency } from "@/lib/utils";

type PageType = "projects" | "approvals" | "budget" | "materials" | "messages" | "notifications" | "offline" | "analytics" | "admin";

const copy: Record<PageType, { label: string; title: string; description: string; cta: string; href: string }> = {
  projects: { label: "Portfolio", title: "Projects", description: "Track every custom build by health, progress, budget, stage, contractor, and upcoming decision risk.", cta: "Open Palm Residence", href: "/projects/palm-residence" },
  approvals: { label: "Decision control", title: "Approval Center", description: "Approve, reject, comment, and audit homeowner requests before they touch live construction data.", cta: "Review pending request", href: "/proposals" },
  budget: { label: "Financial control", title: "Budget Dashboard", description: "Compare planned spend, actual cost, upgrade requests, invoice exposure, and material pricing in one place.", cta: "Generate invoice", href: "/invoices" },
  materials: { label: "Procurement", title: "Material Catalog", description: "Manage supplier pricing, lead times, availability, sustainability tiers, and finish allowances.", cta: "Create proposal", href: "/proposals" },
  messages: { label: "Communication", title: "Messages", description: "Centralize client questions, contractor replies, blueprint references, attachments, and read receipts.", cta: "Open approvals", href: "/approvals" },
  notifications: { label: "Real-time feed", title: "Notifications", description: "Surface approvals, payments, blueprint comments, project updates, schedule risks, and system sync events.", cta: "Open dashboard", href: "/dashboard" },
  offline: { label: "Field reliability", title: "Offline Mode", description: "Show sync queue, queued changes, last synced time, reconnect state, and offline-first confidence indicators.", cta: "Open blueprint viewer", href: "/blueprint-viewer" },
  analytics: { label: "Portfolio intelligence", title: "Analytics", description: "Monitor usage, project health, revenue, approval velocity, invoice status, and construction statistics.", cta: "View billing", href: "/billing" },
  admin: { label: "System control", title: "Admin Dashboard", description: "Manage users, subscriptions, billing, permissions, projects, audit logs, and system health.", cta: "Open settings", href: "/settings" }
};

function tone(status: string) { return status.includes("risk") || status === "Overdue" || status === "Rejected" ? "red" : status.includes("Approval") || status === "Pending" ? "orange" : status === "Paid" || status === "Approved" ? "green" : "blue"; }

export function OperationsPage({ type }: { type: PageType }) {
  const c = copy[type];
  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);
  const pendingApprovals = approvals.filter((a) => a.status === "Pending").length;
  const openInvoices = invoices.filter((i) => i.status !== "Paid").length;
  const primaryRows = type === "materials" ? materials : type === "notifications" ? notifications : approvals;
  return <div className="space-y-8">
    <section className="rounded-[2rem] border bg-white p-8 shadow-sm dark:bg-slate-900">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div><Badge tone="blue">{c.label}</Badge><h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{c.title}</h1><p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{c.description}</p></div>
        <div className="flex flex-wrap gap-3"><Button asChild variant="secondary"><Link href={c.href}>{c.cta}<ArrowRight className="h-4 w-4" /></Link></Button><Button asChild variant="outline"><Link href="/dashboard">Back to dashboard</Link></Button></div>
      </div>
    </section>

    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <Card><CardTitle>{projects.length} projects</CardTitle><CardDescription>Active custom builds under management.</CardDescription><p className="mt-6 text-3xl font-black">{formatCurrency(totalBudget)}</p></Card>
      <Card><CardTitle>{formatCurrency(totalSpent)}</CardTitle><CardDescription>Committed spend across labor, materials, and approved changes.</CardDescription><Progress className="mt-6" value={Math.round((totalSpent / totalBudget) * 100)} /></Card>
      <Card><CardTitle>{pendingApprovals} pending approvals</CardTitle><CardDescription>Requests waiting for contractor or owner action.</CardDescription><p className="mt-6 text-sm font-semibold text-orange-600">Review before field execution.</p></Card>
      <Card><CardTitle>{openInvoices} open invoices</CardTitle><CardDescription>Pending or overdue payment records.</CardDescription><p className="mt-6 text-sm font-semibold text-blue-600">Stripe-ready mock billing flow.</p></Card>
    </section>

    {type === "projects" && <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">{projects.map((p) => <ProjectCard key={p.id} project={p} />)}</section>}

    <section className="grid gap-5 xl:grid-cols-[1.25fr_.75fr]">
      <Card>
        <CardHeader><div><CardTitle>{type === "analytics" ? "Budget performance" : type === "offline" ? "Sync queue" : type === "materials" ? "Material pricing" : type === "messages" ? "Conversation queue" : "Operational records"}</CardTitle><CardDescription>Realistic data with actions and role-aware construction context.</CardDescription></div></CardHeader>
        {type === "analytics" || type === "budget" ? <BudgetChart/> : <div>
          <div className="hidden overflow-hidden rounded-2xl border md:block"><table className="w-full text-sm"><thead className="bg-muted text-left"><tr><th className="p-4">Record</th><th className="p-4">Context</th><th className="p-4">Impact</th><th className="p-4">Status</th></tr></thead><tbody>{primaryRows.map((row: any) => <tr key={row.id} className="border-t"><td className="p-4 font-semibold">{row.title ?? row.name}</td><td className="p-4 text-muted-foreground">{row.project ?? row.category ?? row.type}</td><td className="p-4">{row.amount ? formatCurrency(row.amount) : row.price ? formatCurrency(row.price) : row.time}</td><td className="p-4"><Badge tone={tone(row.status ?? row.sustainability ?? row.type) as any}>{row.status ?? row.sustainability ?? row.type}</Badge></td></tr>)}</tbody></table></div>
          <div className="grid gap-3 md:hidden">{primaryRows.map((row: any) => <div key={row.id} className="rounded-2xl border bg-background p-4"><div className="flex items-start justify-between gap-3"><div><p className="font-black">{row.title ?? row.name}</p><p className="mt-1 text-sm text-muted-foreground">{row.project ?? row.category ?? row.type}</p></div><Badge tone={tone(row.status ?? row.sustainability ?? row.type) as any}>{row.status ?? row.sustainability ?? row.type}</Badge></div><p className="mt-4 text-sm font-bold">{row.amount ? formatCurrency(row.amount) : row.price ? formatCurrency(row.price) : row.time}</p></div>)}</div>
        </div>}
      </Card>
      <Card>
        <CardHeader><div><CardTitle>{type === "admin" ? "System health" : type === "offline" ? "Offline confidence" : "Quick actions"}</CardTitle><CardDescription>Every button routes to an active workflow or mock action.</CardDescription></div></CardHeader>
        <div className="space-y-4">
          {type === "offline" ? usageStats.map((u) => <div key={u.label} className="rounded-2xl border bg-slate-50 p-4 dark:bg-slate-950"><div className="flex justify-between text-sm"><span className="font-semibold">{u.label}</span><b>{u.used}</b></div><Progress className="mt-3" value={Math.min(96, u.used / 4)} /><p className="mt-2 text-xs text-muted-foreground">Limit: {u.limit}</p></div>) : crews.map((crew) => <div key={crew.name} className="rounded-2xl border bg-slate-50 p-4 dark:bg-slate-950"><div className="flex items-center justify-between"><p className="font-bold">{crew.name}</p><Badge tone={crew.status === "At risk" ? "red" : crew.status === "Scheduled" ? "blue" : "green"}>{crew.status}</Badge></div><p className="mt-2 text-sm text-muted-foreground">{crew.project} · {crew.lead}</p><p className="mt-2 text-xs font-semibold">{crew.today}</p></div>)}
          <div className="grid gap-2"><Button asChild variant="outline"><Link href="/proposals"><FileText className="h-4 w-4" />Create proposal</Link></Button><Button asChild variant="outline"><Link href="/messages"><MessageSquare className="h-4 w-4" />Send message</Link></Button><Button asChild variant="outline"><Link href="/notifications"><Bell className="h-4 w-4" />View feed</Link></Button></div>
        </div>
      </Card>
    </section>

    <section className="grid gap-5 lg:grid-cols-3">
      {[{ Icon: ShieldCheck, title: "Audit-ready", body: "Every change can be traced back to project, user, and approval state." }, { Icon: UsersRound, title: "Role-aware", body: "Administrator, contractor, and homeowner screens expose only permitted actions." }, { Icon: Boxes, title: "Operational depth", body: "Materials, invoices, budgets, proposals, contracts, and messages share consistent data." }].map(({ Icon, title, body }) => <Card key={title}><Icon className="h-7 w-7 text-blue-600" /><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p></Card>)}
    </section>
  </div>;
}
