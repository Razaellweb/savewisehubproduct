import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body?.productId || !body?.amount) return NextResponse.json({ success: false, message: "Invalid payload" }, { status: 400 });
    return NextResponse.json({ success: true, portfolioId: "pf_1" });
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e?.message || "Investments error" }, { status: 500 });
  }
}
