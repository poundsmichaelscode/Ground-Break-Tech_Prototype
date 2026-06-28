import { NextResponse } from "next/server";
import { contracts } from "@/data/mock";
export async function GET(){ return NextResponse.json({ data: contracts }); }
export async function POST(request: Request){ const body = await request.json().catch(()=>({})); return NextResponse.json({ data: { id: `contract-${Date.now()}`, status: "Pending", ...body }, message: "Contract created" }, { status: 201 }); }
