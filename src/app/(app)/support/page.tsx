"use client";
import React from "react";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold">Support</h1>
      <p className="text-slate-600 text-sm">Get help via in-app chat, WhatsApp, or email.</p>

      <div className="mt-4 grid gap-4">
        <a className="rounded-xl border border-slate-200 bg-white p-4" href="mailto:support@savewisehub.com">Email support@savewisehub.com</a>
        <a className="rounded-xl border border-slate-200 bg-white p-4" href="https://wa.me/2347000000000" target="_blank" rel="noreferrer">WhatsApp +234 700 000 0000</a>
        <Link className="rounded-xl border border-slate-200 bg-white p-4" href="/">Open chat (coming soon)</Link>
      </div>
    </div>
  );
}
