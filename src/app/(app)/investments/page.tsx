"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function InvestmentsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/investments/products").then(r => r.json()).then(j => { setProducts(j?.data || []); setLoading(false); });
  }, []);

  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-semibold">Investment marketplace</h1>
      <p className="text-slate-600 text-sm">Curated low-risk products with transparent returns and easy withdrawals.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-40 rounded-xl bg-slate-100 animate-pulse" />
          ))
        ) : (
          products.map((p) => (
            <div key={p.id} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-slate-600 text-sm">{p.name}</div>
              <div className="text-2xl font-semibold mt-1">{p.apy}% <span className="text-sm text-slate-500 font-normal">APY</span></div>
              <div className="text-xs text-slate-600">Liquidity: {p.liquidity}</div>
              <Button className="mt-3 bg-slate-900 text-white hover:bg-black">Invest</Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
