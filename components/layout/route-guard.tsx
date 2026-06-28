"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { canAccess } from "@/lib/auth";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function RouteGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, ready } = useAuth();
  if (!ready) return <div className="grid min-h-[60vh] place-items-center"><div className="h-12 w-12 animate-spin rounded-full border-4 border-muted border-t-blue-600" /></div>;
  if (!canAccess(user.role, pathname)) return <div className="grid min-h-[70vh] place-items-center"><Card className="max-w-lg text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-red-500/10 text-red-500"><LockKeyhole className="h-6 w-6" /></div><CardTitle className="mt-5">Access restricted</CardTitle><CardDescription>Your {user.role} role does not have permission to view this module. Use the login role selector to test another workspace.</CardDescription><Button asChild className="mt-6" variant="secondary"><Link href="/login">Switch role</Link></Button></Card></div>;
  return <>{children}</>;
}
