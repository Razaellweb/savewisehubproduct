"use client";
import React from "react";

export default function AdminPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Admin dashboard</h1>
      <p className="text-slate-600 text-sm">Fraud monitoring, loan review, and user management (MVP preview).</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4"><h2 className="font-medium">Fraud events</h2><p className="text-sm text-slate-600 mt-1">No suspicious activity.</p></div>
        <div className="rounded-xl border border-slate-200 bg-white p-4"><h2 className="font-medium">Loan queue</h2><p className="text-sm text-slate-600 mt-1">0 pending manual reviews.</p></div>
        <div className="rounded-xl border border-slate-200 bg-white p-4"><h2 className="font-medium">Users</h2><p className="text-sm text-slate-600 mt-1">1,245 active savers</p></div>
      </div>
    </div>
  );
}
