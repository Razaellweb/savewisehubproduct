import { NextResponse } from "next/server";
import { PaymentService } from "@/lib/payment/service";
import { PaystackProvider } from "@/lib/payment/paystack";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, email } = body || {};
    if (!amount || !email) return NextResponse.json({ success: false, message: "Amount and email required" }, { status: 400 });

    if (!process.env.PAYSTACK_SECRET_KEY) {
      return NextResponse.json({ success: true, mode: "sandbox", paymentUrl: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/savings?mock=1` });
    }

    const paystack = new PaymentService(new PaystackProvider());
    const tx = await paystack.checkout({ email, amount, reference: `SWH-${Date.now()}`, currency: "NGN" });
    return NextResponse.json({ success: true, ...tx });
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e?.message || "Auto-debit error" }, { status: 500 });
  }
}
