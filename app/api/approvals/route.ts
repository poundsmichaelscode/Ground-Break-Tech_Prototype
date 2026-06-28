import { NextResponse } from "next/server";
import { approvals } from "@/data/mock";
export async function GET(){ return NextResponse.json({ data: approvals }); }
