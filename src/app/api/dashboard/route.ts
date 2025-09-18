import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    savings: 120000,
    investmentsReturn: 0.124,
    loanEligibility: 96000,
    groups: 2,
  });
}
