import { NextResponse } from "next/server";
import { rfis } from "@/data/mock";
export async function GET(){ return NextResponse.json({ data: rfis }); }
export async function POST(request: Request){ const body = await request.json().catch(()=>({})); return NextResponse.json({ ok:true, data: body, message:"Mock record saved" }, { status: 201 }); }
