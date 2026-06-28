import { cn } from "@/lib/utils";
export function Avatar({ name, className }: { name: string; className?: string }) { const initials=name.split(" ").map(n=>n[0]).join("").slice(0,2); return <div className={cn("flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950", className)} aria-label={name}>{initials}</div>; }
