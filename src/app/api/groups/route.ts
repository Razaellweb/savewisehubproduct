import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body?.name || !body?.members || !body?.amount) return NextResponse.json({ success: false, message: "Invalid payload" }, { status: 400 });
    return NextResponse.json({ success: true, groupId: "grp_1" });
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e?.message || "Groups error" }, { status: 500 });
  }
}
