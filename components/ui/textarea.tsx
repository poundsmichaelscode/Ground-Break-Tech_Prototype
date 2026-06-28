import * as React from "react";
import { cn } from "@/lib/utils";
export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("focus-ring min-h-28 w-full rounded-2xl border bg-background px-4 py-3 text-sm shadow-sm placeholder:text-muted-foreground", className)} {...props} />;
}
