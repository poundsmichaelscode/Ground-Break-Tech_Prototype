import { NextResponse } from "next/server";
import { invoices } from "@/data/mock";
export async function GET(){ return NextResponse.json({ data: invoices }); }
export async function POST(request: Request){ const body = await request.json().catch(()=>({})); return NextResponse.json({ data: { id: `invoice-${Date.now()}`, status: "Pending", ...body }, message: "Invoice created" }, { status: 201 }); }
