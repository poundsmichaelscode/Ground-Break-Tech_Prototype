import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("focus-ring inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all active:scale-[.98] disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-slate-950 text-white shadow-luxury hover:bg-slate-800 dark:bg-white dark:text-slate-950",
      secondary: "bg-blue-600 text-white shadow-glass hover:bg-blue-500",
      outline: "border bg-background/60 hover:bg-muted",
      ghost: "hover:bg-muted",
      emerald: "bg-emerald-500 text-white hover:bg-emerald-400",
      danger: "bg-red-500 text-white hover:bg-red-400"
    },
    size: { sm: "h-9 px-3", md: "h-11 px-5", lg: "h-13 px-7 text-base", icon: "h-10 w-10" }
  },
  defaultVariants: { variant: "default", size: "md" }
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
