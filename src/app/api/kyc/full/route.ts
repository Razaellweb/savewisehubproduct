import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { bvn, idType, idNumber, address } = body || {};
    if (!bvn || !idType || !idNumber || !address) return NextResponse.json({ success: false, message: "All fields required" }, { status: 400 });
    if (String(bvn).length !== 11) return NextResponse.json({ success: false, message: "BVN must be 11 digits" }, { status: 400 });
    await new Promise((r) => setTimeout(r, 700));
    return NextResponse.json({ success: true, level: "full", message: "Full KYC verified" });
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e?.message || "KYC error" }, { status: 500 });
  }
}
