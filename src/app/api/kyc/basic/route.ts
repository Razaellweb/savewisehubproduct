import { NextResponse } from "next/server";

// Very simple BVN uniqueness + structure check. In real life, call provider and persist.
const seenBvns = new Set<string>();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone, bvn } = body || {};
    if (!phone || !bvn) return NextResponse.json({ success: false, message: "Phone and BVN required" }, { status: 400 });
    if (String(bvn).length !== 11) return NextResponse.json({ success: false, message: "BVN must be 11 digits" }, { status: 400 });
    if (seenBvns.has(bvn)) return NextResponse.json({ success: false, message: "Duplicate BVN detected" }, { status: 409 });
    seenBvns.add(bvn);

    // Simulate sandbox verification
    await new Promise((r) => setTimeout(r, 450));
    return NextResponse.json({ success: true, level: "basic", message: "BVN/phone verified" });
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e?.message || "KYC error" }, { status: 500 });
  }
}
