import { cn } from "@/lib/utils";
export function Badge({ children, className, tone="slate" }: { children: React.ReactNode; className?: string; tone?: "slate"|"blue"|"green"|"orange"|"red" }) {
 const tones={slate:"bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",blue:"bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",green:"bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",orange:"bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300",red:"bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300"};
 return <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold", tones[tone], className)}>{children}</span>;
}
