import { NextResponse } from "next/server";
import { teamMembers } from "@/data/mock";
export async function GET(){ return NextResponse.json({ data: teamMembers }); }
export async function POST(request: Request){ const body = await request.json().catch(()=>({})); return NextResponse.json({ ok:true, data: body, message:"Mock record saved" }, { status: 201 }); }
