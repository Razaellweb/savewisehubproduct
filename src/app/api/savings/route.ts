import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body?.name || !body?.target || !body?.monthly) {
      return NextResponse.json({ success: false, message: "Invalid payload" }, { status: 400 });
    }
    return NextResponse.json({ success: true, data: { id: "sv_1", ...body } });
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e?.message || "Savings error" }, { status: 500 });
  }
}
