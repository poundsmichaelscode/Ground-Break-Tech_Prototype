import * as React from "react";
import { cn } from "@/lib/utils";
export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) { return <input className={cn("focus-ring h-11 w-full rounded-xl border bg-background/70 px-4 text-sm shadow-sm placeholder:text-muted-foreground", className)} {...props} />; }
