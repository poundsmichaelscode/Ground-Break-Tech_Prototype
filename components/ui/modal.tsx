"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
export function Modal({ trigger, title, children }: { trigger: React.ReactNode; title: string; children: React.ReactNode }){return <Dialog.Root><Dialog.Trigger asChild>{trigger}</Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm"/><Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border bg-card p-6 shadow-luxury"><div className="flex items-center justify-between"><Dialog.Title className="text-xl font-black">{title}</Dialog.Title><Dialog.Close asChild><Button variant="ghost" size="icon"><X className="h-4 w-4"/></Button></Dialog.Close></div><div className="mt-5">{children}</div></Dialog.Content></Dialog.Portal></Dialog.Root>}
