import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    { id: "t91", name: "T-Bills (91D)", apy: 9.8, liquidity: "High" },
    { id: "mmf", name: "Money Market Fund", apy: 12.6, liquidity: "High" },
    { id: "fin", name: "Fixed Income Note", apy: 14.2, liquidity: "Med" },
    { id: "usd", name: "Dollar Denominated", apy: 7.1, liquidity: "Low" },
  ];
  return NextResponse.json({ data });
}
