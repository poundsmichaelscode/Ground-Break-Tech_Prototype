import { NextResponse } from "next/server";
import { materials } from "@/data/mock";
export async function GET(){ return NextResponse.json({ data: materials }); }
