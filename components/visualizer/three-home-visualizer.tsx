"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const controls=["Paint","Floor","Kitchen","Roof","Landscape"];
export function ThreeHomeVisualizer(){return <div className="overflow-hidden rounded-[2rem] border bg-slate-950 shadow-luxury">
    <div className="relative min-h-[430px] bg-slate-950 p-6">
      <div className="flex items-center justify-between"><Badge tone="green">Three.js-ready placeholder</Badge><span className="text-xs font-semibold text-white/70">Interactive 3D Home Visualizer</span></div>
      <div className="absolute inset-x-8 top-28 h-56 rounded-[3rem] border border-white/10 bg-slate-900" />
      <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:4, repeat:Infinity }} className="absolute left-1/2 top-36 -translate-x-1/2">
        <div className="h-28 w-44 rounded-b-xl rounded-t-[3rem] bg-white shadow-2xl"><div className="mx-auto mt-12 h-16 w-12 rounded-t-xl bg-slate-900" /></div>
        <div className="mx-auto h-8 w-64 rounded-full bg-black/20 blur-xl" />
      </motion.div>
      <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"><p className="text-sm font-bold text-white">Customize finishes</p><div className="mt-3 flex flex-wrap gap-2">{controls.map(c=><Button key={c} size="sm" variant="outline" className="border-white/15 bg-slate-950 text-white hover:bg-slate-900">{c}</Button>)}</div></div>
    </div>
  </div>}
