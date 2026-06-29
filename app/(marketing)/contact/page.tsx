"use client";
import { useState } from "react";
import Link from "next/link";
import { CalendarCheck2, Mail, MapPin, MessageSquareText, Phone, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiteFooter, SiteNav } from "@/components/marketing/site-nav";
import { MarketingCard } from "@/components/marketing/marketing-card";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return <main className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white"><SiteNav />
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[.85fr_1.15fr]">
      <div><Badge tone="blue">Contact</Badge><h1 className="mt-6 text-5xl font-black tracking-[-.05em] md:text-7xl">Book a construction SaaS product walkthrough.</h1><p className="mt-7 text-lg leading-8 text-slate-600 dark:text-slate-300">Use this page as the sales and support entry point. The form uses mock submission behavior so the prototype feels complete during demos.</p><div className="mt-10 grid gap-4">{[{ Icon: Mail, title: "sales@groundbreak.tech", body: "For demos, pricing, pilots, and investor walkthroughs." }, { Icon: Phone, title: "+1 (415) 555-0198", body: "Monday to Friday, 9:00 AM - 6:00 PM PT." }, { Icon: MapPin, title: "San Francisco · Austin · Remote", body: "Designed with construction teams across the United States." }].map(({ Icon, title, body }) => <div key={title} className="rounded-2xl border bg-white p-5 dark:bg-slate-900"><Icon className="h-5 w-5 text-blue-600" /><p className="mt-3 font-black">{title}</p><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div>)}</div></div>
      <MarketingCard className="p-8"><h2 className="text-2xl font-black">Request a demo</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Tell us what you build and which workflows you want to test.</p><form className="mt-8 grid gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}><div className="grid gap-4 md:grid-cols-2"><Input required placeholder="Full name" aria-label="Full name" /><Input required type="email" placeholder="Work email" aria-label="Work email" /></div><div className="grid gap-4 md:grid-cols-2"><Input required placeholder="Company" aria-label="Company" /><Input placeholder="Phone" aria-label="Phone" /></div><Input placeholder="Role e.g. Contractor, Developer, Homeowner" aria-label="Role" /><Textarea required placeholder="What do you want to see in the demo?" aria-label="Demo message" /><Button type="submit" variant="secondary"><Send className="h-4 w-4" />Submit request</Button>{sent && <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">Demo request received. The sales workflow is mocked for this MVP.</div>}</form></MarketingCard>
    </section>
    <section className="border-y bg-white px-6 py-20 dark:bg-slate-900"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{[{ Icon: CalendarCheck2, title: "Pilot planning", body: "Explore a 30-day pilot for one active build and one contractor team." }, { Icon: MessageSquareText, title: "Support", body: "Ask about onboarding, workflows, or how role permissions should map to your team." }, { Icon: Send, title: "Partnerships", body: "Discuss integrations with storage, accounting, scheduling, or construction ERPs." }].map(({ Icon, title, body }) => <MarketingCard key={title}><Icon className="h-7 w-7 text-blue-600" /><h3 className="mt-6 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{body}</p></MarketingCard>)}</div></section>
    <section className="mx-auto max-w-7xl px-6 py-16"><div className="rounded-[2rem] border bg-slate-950 p-8 text-white dark:bg-white dark:text-slate-950"><h2 className="text-3xl font-black">Want to test the product now?</h2><p className="mt-3 max-w-2xl leading-7 opacity-75">Use the development role selector to preview administrator, contractor, and homeowner workflows.</p><Button asChild className="mt-6" variant="secondary"><Link href="/login">Open login demo</Link></Button></div></section>
    <SiteFooter />
  </main>;
}
