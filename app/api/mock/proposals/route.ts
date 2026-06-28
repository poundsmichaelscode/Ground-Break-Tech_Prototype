import { NextResponse } from "next/server";
import { proposals } from "@/data/mock";
export async function GET(){ return NextResponse.json({ data: proposals }); }
export async function POST(request: Request){ const body = await request.json().catch(()=>({})); return NextResponse.json({ data: { id: `proposal-${Date.now()}`, status: "Draft", ...body }, message: "Proposal created" }, { status: 201 }); }
