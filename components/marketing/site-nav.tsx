"use client";
import Link from "next/link";
import { useState } from "react";
import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [["Features", "/features"], ["Pricing", "/pricing"], ["About", "/about"], ["Contact", "/contact"]] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur dark:bg-slate-950/95">
    <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
      <Link href="/" className="flex min-w-0 items-center gap-3 font-black tracking-tight">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950"><Building2 className="h-5 w-5" /></span>
        <span className="truncate">Groundbreak Tech</span>
      </Link>
      <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300 md:flex">
        {links.map(([label, href]) => <Link key={href} className="hover:text-slate-950 dark:hover:text-white" href={href}>{label}</Link>)}
      </div>
      <div className="hidden gap-2 sm:flex">
        <Button asChild variant="ghost"><Link href="/login">Login</Link></Button>
        <Button asChild variant="secondary"><Link href="/register">Start beta</Link></Button>
      </div>
      <button className="grid h-10 w-10 place-items-center rounded-2xl border md:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu className="h-5 w-5" /></button>
    </nav>
    {open && <div className="fixed inset-0 z-50 md:hidden">
      <button className="absolute inset-0 h-full w-full bg-slate-950/50" aria-label="Close menu" onClick={() => setOpen(false)} />
      <div className="absolute right-0 top-0 h-dvh w-[86vw] max-w-sm border-l bg-white p-5 shadow-2xl dark:bg-slate-950">
        <div className="flex items-center justify-between"><p className="font-black">Menu</p><button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-2xl border" aria-label="Close menu"><X className="h-5 w-5" /></button></div>
        <div className="mt-8 grid gap-2">{links.map(([label, href]) => <Link key={href} onClick={() => setOpen(false)} href={href} className="rounded-2xl px-4 py-3 font-semibold hover:bg-slate-100 dark:hover:bg-slate-900">{label}</Link>)}</div>
        <div className="mt-8 grid gap-3"><Button asChild variant="outline"><Link href="/login">Login</Link></Button><Button asChild variant="secondary"><Link href="/register">Start beta</Link></Button></div>
      </div>
    </div>}
  </header>;
}

export function SiteFooter() {
  return <footer className="border-t bg-white px-4 py-12 text-sm text-slate-600 dark:bg-slate-950 dark:text-slate-400 sm:px-6">
    <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
      <div><p className="font-black text-slate-950 dark:text-white">Groundbreak Tech</p><p className="mt-3 max-w-sm leading-6">A role-aware construction operating system for custom home builders, homeowners, and administrators.</p></div>
      <div><p className="font-bold text-slate-950 dark:text-white">Product</p><div className="mt-3 grid gap-2"><Link href="/features">Features</Link><Link href="/pricing">Pricing</Link><Link href="/login">Demo login</Link></div></div>
      <div><p className="font-bold text-slate-950 dark:text-white">Company</p><div className="mt-3 grid gap-2"><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/dashboard">Dashboard</Link></div></div>
      <div><p className="font-bold text-slate-950 dark:text-white">Prototype</p><p className="mt-3 leading-6">Built with Next.js, TypeScript, Tailwind, role-aware mock workflows, and responsive SaaS layouts.</p></div>
    </div>
  </footer>;
}
