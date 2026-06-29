"use client";
import { useState } from "react";
import { MobileSidebar, Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { RouteGuard } from "@/components/layout/route-guard";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background">
    <Sidebar />
    <MobileSidebar open={open} onClose={() => setOpen(false)} />
    <Topbar onMenu={() => setOpen(true)} />
    <main className="px-3 py-5 sm:px-4 sm:py-8 lg:ml-72 lg:px-8"><RouteGuard>{children}</RouteGuard></main>
  </div>;
}
