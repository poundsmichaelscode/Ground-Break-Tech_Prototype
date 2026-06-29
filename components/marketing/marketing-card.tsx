import { cn } from "@/lib/utils";
export function MarketingCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-[2rem] border bg-white p-6 shadow-sm dark:bg-slate-900", className)} {...props} />;
}
