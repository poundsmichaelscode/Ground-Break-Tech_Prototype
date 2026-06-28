"use client";
import Link from "next/link";
import { Lock } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { isPremiumLocked } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FeatureLock({ feature, children }: { feature: string; children: React.ReactNode }) {
  const { user } = useAuth();
  if (!isPremiumLocked(user.plan, feature)) return <>{children}</>;
  return <div className="rounded-3xl border bg-card/70 p-6 shadow-sm">
    <div className="flex items-center gap-2"><Lock className="h-5 w-5 text-blue-600" /><Badge tone="blue">Premium</Badge></div>
    <h3 className="mt-4 text-xl font-black tracking-tight">Unlock {feature}</h3>
    <p className="mt-2 text-sm leading-6 text-muted-foreground">This feature is limited on the Free plan. Upgrade to unlock investor-ready reporting, collaboration, automation, and unlimited construction workflows.</p>
    <Button asChild className="mt-5" variant="secondary"><Link href="/upgrade">Upgrade plan</Link></Button>
  </div>;
}
