"use client";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
export function ActionToast({ message, onClose }: { message: string; onClose: () => void }) {
  return <div className="fixed bottom-6 right-6 z-50 flex max-w-sm items-center gap-3 rounded-2xl border bg-card px-4 py-3 shadow-luxury">
    <CheckCircle2 className="h-5 w-5 text-emerald-500" /><p className="text-sm font-semibold">{message}</p><Button size="icon" variant="ghost" onClick={onClose} aria-label="Close toast"><X className="h-4 w-4" /></Button>
  </div>;
}
