"use client";
import Link from "next/link";
import { CalendarDays, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Page(){
 const [sent,setSent]=useState(false);
 return <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-950 dark:bg-slate-950 dark:text-white">
  <div className="mx-auto max-w-7xl">
   <header className="flex items-center justify-between rounded-3xl border bg-white px-5 py-4 shadow-sm dark:bg-slate-900"><Link href="/" className="font-black">Groundbreak Tech</Link><Button asChild variant="ghost"><Link href="/pricing">Pricing</Link></Button></header>
   <section className="grid gap-10 py-20 lg:grid-cols-[.9fr_1.1fr]"><div><Badge tone="green">Contact sales</Badge><h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">Talk to us about your construction workflow.</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">Use this page to request a product demo, ask about beta access, discuss contractor onboarding, or explore a custom implementation for your construction firm.</p><div className="mt-10 grid gap-4 text-sm"><p className="flex items-center gap-3"><Mail className="h-5 w-5 text-blue-600"/>hello@groundbreaktech.com</p><p className="flex items-center gap-3"><Phone className="h-5 w-5 text-blue-600"/>+1 (415) 555-0198</p><p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-blue-600"/>Remote-first · Serving builders and homeowners</p></div></div>
    <Card className="bg-white dark:bg-slate-900"><h2 className="text-2xl font-black">Request a demo</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">This is a working mock form for the MVP. Submit it to see the success state.</p><form onSubmit={(e)=>{e.preventDefault();setSent(true);}} className="mt-8 grid gap-4"><div className="grid gap-4 md:grid-cols-2"><Input required placeholder="Full name" aria-label="Full name"/><Input required type="email" placeholder="Work email" aria-label="Work email"/></div><Input required placeholder="Company name" aria-label="Company name"/><div className="grid gap-4 md:grid-cols-2"><Input placeholder="Phone number" aria-label="Phone number"/><Input placeholder="Number of active projects" aria-label="Number of active projects"/></div><Textarea required placeholder="Tell us what you want to improve: approvals, blueprints, invoicing, homeowner communication, or offline field work." aria-label="Message"/><Button type="submit" variant="secondary"><Send className="h-4 w-4"/>Send request</Button>{sent && <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">Demo request received. The sales workflow mock has been completed.</div>}</form></Card></section>
   <section className="mb-20 grid gap-5 md:grid-cols-3"><Card className="bg-white dark:bg-slate-900"><CalendarDays className="h-6 w-6 text-blue-600"/><h3 className="mt-5 font-black">Book implementation call</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Discuss migration from spreadsheets, WhatsApp, email approvals, and disconnected PDF drawings.</p></Card><Card className="bg-white dark:bg-slate-900"><MessageCircle className="h-6 w-6 text-blue-600"/><h3 className="mt-5 font-black">Get support</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Ask product questions, report beta feedback, or request workflow guidance for your team.</p></Card><Card className="bg-white dark:bg-slate-900"><Mail className="h-6 w-6 text-blue-600"/><h3 className="mt-5 font-black">Partnerships</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">For construction consultants, design studios, suppliers, and property development partners.</p></Card></section>
  </div>
 </main>;
}
