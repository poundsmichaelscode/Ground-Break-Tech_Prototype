"use client";
import Link from "next/link";
import { Bell, Menu, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/use-auth";

export function Topbar({ title="Command Center" }: { title?: string }) {
 const { theme, setTheme } = useTheme();
 const { user } = useAuth();
 return <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b bg-background/82 px-4 backdrop-blur-xl lg:ml-72 lg:px-8">
   <div className="flex items-center gap-3"><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation"><Menu className="h-5 w-5" /></Button><div><p className="text-xs font-semibold uppercase tracking-[.24em] text-muted-foreground">Groundbreak Tech</p><h1 className="text-xl font-black tracking-tight">{title}</h1></div></div>
   <div className="hidden w-full max-w-md items-center gap-2 rounded-2xl border bg-card px-3 shadow-sm md:flex"><Search className="h-4 w-4 text-muted-foreground" /><Input className="border-0 bg-transparent shadow-none focus-visible:ring-0" placeholder="Search projects, blueprints, approvals..." /></div>
   <div className="flex items-center gap-2"><Badge tone={user.plan === "premium" ? "green" : "blue"}>{user.plan === "premium" ? "Premium" : "Free"}</Badge><Button variant="ghost" size="icon" onClick={()=>setTheme(theme==="dark"?"light":"dark")} aria-label="Toggle theme">{theme==="dark"?<Sun className="h-5 w-5"/>:<Moon className="h-5 w-5"/>}</Button><Button asChild variant="outline" size="icon" aria-label="Notifications"><Link href="/notifications"><Bell className="h-5 w-5" /></Link></Button><Link href="/profile"><Avatar name={user.name} /></Link></div>
 </header>;
}
