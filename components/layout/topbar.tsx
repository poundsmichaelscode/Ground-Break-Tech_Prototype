"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Bell, Command, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/use-auth";

const commands = [
 ["Open dashboard","/dashboard"],["View projects","/projects"],["Create task","/tasks"],["Schedule inspection","/schedule"],["Add daily log","/daily-logs"],["Review RFIs","/rfis"],["Ask AI assistant","/ai-assistant"],["Open blueprints","/blueprint-viewer"],["Manage team","/team"],["Create invoice","/invoices"],["Open billing","/billing"]
] as const;
export function Topbar({ title="Command Center", onMenu }: { title?: string; onMenu?: () => void }) {
 const { theme, setTheme } = useTheme(); const { user } = useAuth(); const [open,setOpen]=useState(false); const [q,setQ]=useState("");
 const results=useMemo(()=>commands.filter(([label])=>label.toLowerCase().includes(q.toLowerCase())).slice(0,6),[q]);
 return <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between gap-3 border-b bg-background/95 px-3 backdrop-blur-xl sm:h-20 sm:px-4 lg:ml-72 lg:px-8">
   <div className="flex min-w-0 items-center gap-2 sm:gap-3"><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation" onClick={onMenu}><Menu className="h-5 w-5" /></Button><div className="min-w-0"><p className="hidden text-xs font-semibold uppercase tracking-[.24em] text-muted-foreground sm:block">Groundbreak Tech</p><h1 className="truncate text-base font-black tracking-tight sm:text-xl">{title}</h1></div></div>
   <button onClick={()=>setOpen(true)} className="hidden w-full max-w-md items-center gap-2 rounded-2xl border bg-card px-3 py-2.5 text-left text-sm text-muted-foreground shadow-sm md:flex"><Search className="h-4 w-4" />Search projects, tasks, RFIs...<span className="ml-auto rounded-lg border px-2 py-0.5 text-xs"><Command className="inline h-3 w-3"/> K</span></button>
   <div className="flex shrink-0 items-center gap-1 sm:gap-2"><Badge className="hidden sm:inline-flex" tone={user.plan === "premium" ? "green" : "blue"}>{user.plan === "premium" ? "Premium" : "Free"}</Badge><Button variant="ghost" size="icon" onClick={()=>setOpen(true)} aria-label="Open command palette"><Search className="h-5 w-5"/></Button><Button variant="ghost" size="icon" onClick={()=>setTheme(theme==="dark"?"light":"dark")} aria-label="Toggle theme">{theme==="dark"?<Sun className="h-5 w-5"/>:<Moon className="h-5 w-5"/>}</Button><Button asChild variant="outline" size="icon" aria-label="Notifications"><Link href="/notifications"><Bell className="h-5 w-5" /></Link></Button><Link href="/profile" aria-label="Profile"><Avatar name={user.name} /></Link></div>
   {open&&<div className="fixed inset-0 z-50 bg-slate-950/40 p-4" onClick={()=>setOpen(false)}><div onClick={e=>e.stopPropagation()} className="mx-auto mt-20 max-w-2xl rounded-3xl border bg-card p-4 shadow-2xl"><div className="flex items-center gap-3"><Search className="h-5 w-5 text-muted-foreground"/><Input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Type a command or search workflow..." className="border-0 bg-transparent shadow-none focus-visible:ring-0"/><Button size="icon" variant="ghost" onClick={()=>setOpen(false)}><X className="h-4 w-4"/></Button></div><div className="mt-4 grid gap-2">{results.map(([label,href])=><Link onClick={()=>setOpen(false)} key={href} href={href} className="rounded-2xl border bg-background p-4 text-sm font-semibold transition hover:bg-muted">{label}<span className="ml-3 text-muted-foreground">{href}</span></Link>)}</div></div></div>}
 </header>;
}
