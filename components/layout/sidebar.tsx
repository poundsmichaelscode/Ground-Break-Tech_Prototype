"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Bell, Boxes, Building2, CheckCircle2, CreditCard, FileSignature, Gauge, Home, Layers3, LogOut, MessageSquare, ReceiptText, RadioTower, Settings, Shield, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { canAccess } from "@/lib/auth";
import { useAuth } from "@/hooks/use-auth";
import { Badge } from "@/components/ui/badge";

const nav = [
  ["Dashboard", "/dashboard", Gauge], ["Projects", "/projects", Building2], ["Blueprints", "/blueprint-viewer", Layers3], ["Approvals", "/approvals", CheckCircle2], ["Budget", "/budget", BarChart3], ["Messages", "/messages", MessageSquare], ["Proposals", "/proposals", FileSignature], ["Contracts", "/contracts", FileSignature], ["Invoices", "/invoices", ReceiptText], ["Materials", "/materials", Boxes], ["Offline Mode", "/offline", RadioTower], ["Billing", "/billing", CreditCard], ["Analytics", "/analytics", BarChart3], ["Admin", "/admin", Shield], ["Notifications", "/notifications", Bell], ["Profile", "/profile", UserRound], ["Settings", "/settings", Settings]
] as const;

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const visible = nav.filter(([, href]) => canAccess(user.role, href));
  return <aside className="hidden border-r bg-card/80 backdrop-blur-xl lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
    <Link href="/dashboard" className="flex h-20 items-center gap-3 px-6">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white shadow-luxury dark:bg-white dark:text-slate-950"><Home className="h-5 w-5" /></div>
      <div><p className="font-black tracking-tight">Groundbreak</p><p className="text-xs text-muted-foreground">Construction OS</p></div>
    </Link>
    <nav className="flex-1 space-y-1 overflow-y-auto px-4 pb-6">
      {visible.map(([label, href, Icon]) => <Link key={href} href={href} className={cn("focus-ring flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground", pathname===href && "bg-slate-950 text-white shadow-sm hover:bg-slate-950 hover:text-white dark:bg-white dark:text-slate-950")}><Icon className="h-4 w-4" />{label}</Link>)}
    </nav>
    <div className="m-4 rounded-3xl border bg-slate-50 dark:bg-slate-950 p-4"><div className="flex items-center justify-between"><p className="text-sm font-bold">{user.company}</p><Badge tone={user.plan === "premium" ? "green" : "blue"}>{user.plan}</Badge></div><p className="mt-1 text-xs leading-5 text-muted-foreground">Signed in as {user.title}. Role-based access is active.</p><button onClick={logout} className="mt-4 flex w-full items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold text-red-500 hover:bg-red-500/10"><LogOut className="h-4 w-4" /> Logout</button></div>
  </aside>;
}
