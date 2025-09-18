"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const schema = z.object({ amount: z.coerce.number().min(5000), tenor: z.coerce.number().min(1) });

export default function LoansPage() {
  const form = useForm<{ amount: number; tenor: number }>({ resolver: zodResolver(schema), defaultValues: { amount: 20000, tenor: 3 } });
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<string | null>(null);

  const onSubmit = async (values: { amount: number; tenor: number }) => {
    setLoading(true); setStatus(null);
    const res = await fetch("/api/loans", { method: "POST", body: JSON.stringify(values) });
    const json = await res.json();
    if (json?.requireFullKYC) {
      setStatus("Full KYC required. Redirecting...");
      setTimeout(() => location.assign("/kyc/full"), 1200);
    } else if (json?.approved) {
      setStatus(`Approved! Disbursing ₦${values.amount.toLocaleString()}`);
    } else {
      setStatus(json?.message || "Unable to process loan");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold">Instant loans</h1>
      <p className="text-slate-600 text-sm">Borrow up to 80% of your savings. Approval in minutes.</p>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-3">
            <FormField name="amount" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Amount (₦)</FormLabel>
                <FormControl><Input type="number" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="tenor" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Tenor (months)</FormLabel>
                <FormControl><Input type="number" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button disabled={loading} className="bg-gradient-to-r from-emerald-600 to-blue-700 text-white">{loading ? "Requesting..." : "Request loan"}</Button>
          </form>
        </Form>
        {status && <p className="text-sm mt-3">{status}</p>}
        <p className="text-xs text-slate-600 mt-3">Note: Loans require full KYC and sufficient savings.</p>
        <p className="text-xs text-slate-600">Need to complete KYC? <Link href="/kyc/full" className="text-emerald-700 hover:underline">Do it now</Link></p>
      </div>
    </div>
  );
}
