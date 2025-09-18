import { NextResponse } from "next/server";

// Mock user state; in real life derive from DB
const user = { kycLevel: "basic", savings: 120000 } as const;

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();
    if (user.kycLevel !== "full") return NextResponse.json({ requireFullKYC: true, message: "Full KYC required" }, { status: 403 });
    const max = Math.floor(user.savings * 0.8);
    if (amount > max) return NextResponse.json({ approved: false, message: `Amount exceeds eligibility (max ₦${max.toLocaleString()})` }, { status: 400 });
    await new Promise((r) => setTimeout(r, 600));
    return NextResponse.json({ approved: true, disbursement: { status: "queued" } });
  } catch (e: any) {
    return NextResponse.json({ approved: false, message: e?.message || "Loan error" }, { status: 500 });
  }
}
