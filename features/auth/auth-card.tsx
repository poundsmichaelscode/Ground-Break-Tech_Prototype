"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/use-auth";
import { Role } from "@/types";
import { roleLabels } from "@/lib/auth";

export function AuthCard({ mode }: { mode: "login" | "register" | "forgot" }) {
 const router = useRouter();
 const { login } = useAuth();
 const [role, setRole] = useState<Role>("contractor");
 const [loading, setLoading] = useState(false);
 const [message, setMessage] = useState("");
 const title = mode === "login" ? "Welcome back" : mode === "register" ? "Create your workspace" : "Reset your password";
 const cta = mode === "login" ? "Sign in" : mode === "register" ? "Create account" : "Send reset link";
 const submit = (event: FormEvent<HTMLFormElement>) => {
   event.preventDefault(); setLoading(true); setMessage("");
   window.setTimeout(() => {
     setLoading(false);
     if (mode === "forgot") { setMessage("Password reset link sent to your inbox."); return; }
     login(role);
     setMessage(`Authenticated as ${roleLabels[role]}. Redirecting...`);
     router.push(role === "admin" ? "/admin" : "/dashboard");
   }, 500);
 };
 return <main className="grid min-h-screen place-items-center bg-premium-gradient px-6 py-12"><Card className="w-full max-w-md"><Link href="/" className="mb-8 flex items-center gap-3 font-black"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950"><Building2 className="h-5 w-5"/></span>Groundbreak Tech</Link><h1 className="text-3xl font-black tracking-tight">{title}</h1><p className="mt-2 text-sm leading-6 text-muted-foreground">Secure role-based access for contractors, homeowners, and administrators.</p><form onSubmit={submit} className="mt-8 space-y-4"><Input required type="email" placeholder="Email address" aria-label="Email address" defaultValue={mode === "login" ? "marcus@atlasbuildco.com" : ""} />{mode!=="forgot" && <Input required minLength={6} type="password" placeholder="Password" aria-label="Password" defaultValue="groundbreak" />}{mode==="register" && <Input required placeholder="Company or project name" aria-label="Company or project name" />}{mode==="login" && <div className="rounded-3xl border bg-muted/40 p-4"><p className="mb-3 text-sm font-bold">Continue as:</p><div className="grid gap-2">{(["admin","contractor","buyer"] as Role[]).map((item)=><label key={item} className="flex cursor-pointer items-center justify-between rounded-2xl border bg-card px-4 py-3 text-sm font-semibold"><span className="flex items-center gap-3"><input type="radio" name="role" checked={role===item} onChange={()=>setRole(item)} />{roleLabels[item]}</span>{item === "contractor" && <Badge tone="green">Premium</Badge>}{item === "buyer" && <Badge tone="blue">Free</Badge>}</label>)}</div></div>}<Button disabled={loading} className="w-full" variant="secondary">{loading ? "Processing..." : cta}</Button></form>{message && <p className="mt-4 flex items-center gap-2 rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-600"><CheckCircle2 className="h-4 w-4" />{message}</p>}<div className="mt-6 flex justify-between text-sm text-muted-foreground"><Link href="/login">Login</Link><Link href="/register">Register</Link><Link href="/forgot-password">Forgot?</Link></div></Card></main>
}
