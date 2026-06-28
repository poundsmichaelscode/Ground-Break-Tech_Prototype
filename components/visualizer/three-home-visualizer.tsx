"use client";
import { motion } from "framer-motion";
import { Box, Brush, CookingPot, LandPlot, PaintBucket, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const controls = [["Paint", PaintBucket], ["Floor", Box], ["Kitchen", CookingPot], ["Roof", Brush], ["Landscape", Trees]] as const;
export function ThreeHomeVisualizer() {
  return <Card className="overflow-hidden bg-slate-950 p-0 text-white">
    <div className="relative min-h-[430px] bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,.45),transparent_35%),linear-gradient(135deg,#0f172a,#020617)] p-6">
      <div className="absolute inset-0 bg-hero-grid bg-[size:40px_40px] opacity-20" />
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[.28em] text-blue-200">Three.js placeholder</p><h2 className="mt-3 text-3xl font-black tracking-tight">Interactive 3D Home Visualizer</h2><p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">A premium sandbox where buyers preview finishes without changing production plans until contractor approval.</p></div>
        <div className="flex flex-wrap gap-2">{controls.map(([label, Icon])=><Button key={label} variant="outline" className="border-white/15 bg-white/10 text-white hover:bg-white/20"><Icon className="h-4 w-4" />{label}</Button>)}</div>
      </div>
      <motion.div animate={{ y: [0,-12,0], rotate: [0,1,0] }} transition={{ duration: 6, repeat: Infinity }} className="relative z-10 mx-auto mt-10 grid h-56 max-w-lg place-items-center rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur">
        <div className="h-28 w-44 rounded-t-[3rem] rounded-b-xl bg-gradient-to-br from-white/95 to-blue-100 shadow-2xl"><div className="mx-auto mt-12 h-16 w-12 rounded-t-xl bg-slate-900" /></div>
        <div className="absolute bottom-8 left-16 h-10 w-24 rounded-full bg-emerald-400/35 blur-xl" />
        <div className="absolute right-16 top-14 h-10 w-24 rounded-full bg-blue-400/35 blur-xl" />
      </motion.div>
    </div>
  </Card>
}
