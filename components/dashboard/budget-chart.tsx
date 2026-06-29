"use client";
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartData } from "@/data/mock";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export function BudgetChart() { return <Card><CardHeader><div><CardTitle>Budget intelligence</CardTitle><CardDescription>Budget versus actual spend across active builds.</CardDescription></div></CardHeader><div className="h-72"><ResponsiveContainer width="100%" height="100%"><LineChart data={chartData}><CartesianGrid strokeDasharray="3 3" opacity={0.2}/><XAxis dataKey="name"/><YAxis/><Tooltip/><Line type="monotone" dataKey="actual" stroke="#2563EB" strokeWidth={3}/><Line type="monotone" dataKey="budget" stroke="#10B981" strokeWidth={2}/></LineChart></ResponsiveContainer></div></Card> }
