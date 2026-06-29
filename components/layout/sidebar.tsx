"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Bell, Boxes, Building2, CalendarDays, CheckCircle2, ClipboardList, CreditCard, FileQuestion, FileSignature, Gauge, Home, Layers3, LogOut, MessageSquare, NotebookText, ReceiptText, RadioTower, Settings, Shield, Sparkles, UserRound, UsersRound, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { canAccess } from "@/lib/auth";
import { useAuth } from "@/hooks/use-auth";
import { Badge } from "@/components/ui/badge";

const nav = [
  ["Dashboard", "/dashboard", Gauge], ["Projects", "/projects", Building2], ["Tasks", "/tasks", ClipboardList], ["Schedule", "/schedule", CalendarDays], ["Daily Logs", "/daily-logs", NotebookText], ["RFIs", "/rfis", FileQuestion], ["AI Assistant", "/ai-assistant", Sparkles], ["Team", "/team", UsersRound], ["Blueprints", "/blueprint-viewer", Layers3], ["Approvals", "/approvals", CheckCircle2], ["Budget", "/budget", BarChart3], ["Messages", "/messages", MessageSquare], ["Proposals", "/proposals", FileSignature], ["Contracts", "/contracts", FileSignature], ["Invoices", "/invoices", ReceiptText], ["Materials", "/materials", Boxes], ["Offline Mode", "/offline", RadioTower], ["Billing", "/billing", CreditCard], ["Analytics", "/analytics", BarChart3], ["Admin", "/admin", Shield], ["Notifications", "/notifications", Bell], ["Profile", "/profile", UserRound], ["Settings", "/settings", Settings]
] as const;

function NavContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const visible = nav.filter(([, href]) => canAccess(user.role, href));
  return <div className="flex h-full flex-col bg-card">
    <Link href="/dashboard" onClick={onNavigate} className="flex h-20 shrink-0 items-center gap-3 px-5 sm:px-6">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950"><Home className="h-5 w-5" /></div>
      <div><p className="font-black tracking-tight">Groundbreak</p><p className="text-xs text-muted-foreground">Construction OS</p></div>
    </Link>
    <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-6 sm:px-4">
      {visible.map(([label, href, Icon]) => <Link key={href} href={href} onClick={onNavigate} className={cn("focus-ring flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground", pathname===href && "bg-slate-950 text-white shadow-sm hover:bg-slate-950 hover:text-white dark:bg-white dark:text-slate-950")}><Icon className="h-4 w-4 shrink-0" /><span className="truncate">{label}</span></Link>)}
    </nav>
    <div className="m-3 rounded-3xl border bg-slate-50 p-4 dark:bg-slate-950 sm:m-4">
      <div className="flex items-center justify-between gap-2"><p className="truncate text-sm font-bold">{user.company}</p><Badge tone={user.plan === "premium" ? "green" : "blue"}>{user.plan}</Badge></div>
      <p className="mt-1 text-xs leading-5 text-muted-foreground">Signed in as {user.title}. Role-based access is active.</p>
      <button onClick={logout} className="mt-4 flex w-full items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold text-red-500 hover:bg-red-500/10"><LogOut className="h-4 w-4" /> Logout</button>
    </div>
  </div>;
}

export function Sidebar() {
  return <aside className="hidden border-r bg-card/95 lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col"><NavContent /></aside>;
}

export function MobileSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return <div className={cn("fixed inset-0 z-50 lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")} aria-hidden={!open}>
    <div onClick={onClose} className={cn("absolute inset-0 bg-slate-950/50 transition-opacity", open ? "opacity-100" : "opacity-0")} />
    <aside className={cn("absolute inset-y-0 left-0 w-[86vw] max-w-sm border-r bg-card shadow-2xl transition-transform duration-300", open ? "translate-x-0" : "-translate-x-full")}>
      <button onClick={onClose} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-2xl border bg-background text-muted-foreground" aria-label="Close navigation"><X className="h-5 w-5" /></button>
      <NavContent onNavigate={onClose} />
    </aside>
  </div>;
}
