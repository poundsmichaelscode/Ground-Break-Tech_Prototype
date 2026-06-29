import { NextResponse } from "next/server";
import { scheduleEvents } from "@/data/mock";
export async function GET(){ return NextResponse.json({ data: scheduleEvents }); }
export async function POST(request: Request){ const body = await request.json().catch(()=>({})); return NextResponse.json({ ok:true, data: body, message:"Mock record saved" }, { status: 201 }); }
