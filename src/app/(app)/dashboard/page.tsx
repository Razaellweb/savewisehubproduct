"use client";
import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ShieldCheck, PiggyBank, Wallet, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-slate-600">Your money at a glance—savings, investments, loans, and groups.</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard title="Total Savings" value="₦120,000" icon={<PiggyBank className="w-5 h-5" />} badge="+₦15k this month" />
        <StatCard title="Investments" value="+12.4%" icon={<Wallet className="w-5 h-5" />} badge="YTD" />
        <StatCard title="Loan Eligibility" value="₦96,000" icon={<ShieldCheck className="w-5 h-5" />} badge="Up to 80%" />
        <StatCard title="Ajo/Esusu" value="2 groups" icon={<Users className="w-5 h-5" />} badge="Active" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Current goal: MacBook Fund</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-3xl font-semibold">₦120,000</div>
                <div className="text-slate-600 text-sm">of ₦600,000</div>
              </div>
              <Link href="/savings" className="text-emerald-700 hover:underline">Manage goals</Link>
            </div>
            <Progress value={20} className="mt-4" />
            <div className="mt-3 text-sm text-slate-600">Auto-debit: ₦15,000 monthly via Paystack</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Instant Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 text-sm">Borrow against your savings up to 80%—approval in minutes.</p>
            <Link href="/loans" className="inline-flex items-center gap-2 mt-3 text-white bg-gradient-to-r from-emerald-600 to-blue-700 px-4 py-2 rounded-lg shadow hover:opacity-95">Request loan</Link>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>₦15,000 auto-debit collected • Savings • Today</li>
              <li>₦20,000 invested in T-Bills • Yesterday</li>
              <li>Joined Ajo circle “Techies” • 2 days ago</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function StatCard({ title, value, icon, badge }: { title: string; value: string; icon: React.ReactNode; badge?: string }) {
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_auto] items-center">
        <CardTitle>
          <div className="text-slate-600 text-sm">{title}</div>
          <div className="text-2xl font-semibold mt-1">{value}</div>
        </CardTitle>
        <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">{icon}</div>
      </CardHeader>
      <CardContent>
        {badge && <div className="text-xs text-slate-600">{badge}</div>}
      </CardContent>
    </Card>
  );
}
