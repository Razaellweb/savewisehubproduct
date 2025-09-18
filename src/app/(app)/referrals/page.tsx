"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function ReferralsPage() {
  const code = "SWH-7F3K92";
  const share = async () => {
    const text = `Join me on SaveWise Hub! Use my code ${code} to sign up: ${location.origin}/signup`;
    try {
      await navigator.share({ title: "SaveWise Hub", text, url: location.origin + "/signup?ref=" + code });
    } catch {}
  };
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold">Referral rewards</h1>
      <p className="text-slate-600 text-sm">Share your code and earn rewards when friends join.</p>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
        <div className="text-sm text-slate-600">Your code</div>
        <div className="text-2xl font-semibold mt-1">{code}</div>
        <div className="flex gap-2 mt-3">
          <Button onClick={() => navigator.clipboard.writeText(code)} className="bg-slate-900 text-white hover:bg-black">Copy</Button>
          <Button onClick={share} className="bg-gradient-to-r from-emerald-600 to-blue-700 text-white">Share</Button>
        </div>
      </div>
    </div>
  );
}
