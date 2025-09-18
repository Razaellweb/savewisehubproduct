"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const schema = z.object({ name: z.string().min(2), target: z.coerce.number().min(1000), monthly: z.coerce.number().min(1000) });

type Values = z.infer<typeof schema>;

export default function SavingsPage() {
  const form = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { name: "", target: 500000, monthly: 15000 } });
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);

  const onSubmit = async (values: Values) => {
    setLoading(true); setMessage(null);
    const res = await fetch("/api/savings", { method: "POST", body: JSON.stringify(values) });
    const json = await res.json();
    setMessage(json?.success ? "Goal saved. Set up auto-debit next." : json?.message || "Failed");
    setLoading(false);
  };

  const setupAutoDebit = async () => {
    setLoading(true); setMessage(null);
    const res = await fetch("/api/savings/autodebit", { method: "POST", body: JSON.stringify({ amount: 15000, email: "you@example.com" }) });
    const json = await res.json();
    if (json?.paymentUrl) window.location.href = json.paymentUrl; else setMessage(json?.message || "Unable to init payment");
    setLoading(false);
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold">Savings goals</h1>
      <p className="text-slate-600 text-sm">Create goals and automate monthly debits with Paystack/Flutterwave.</p>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="text-lg font-medium">Create goal</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-3 grid gap-3">
            <FormField name="name" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl><Input placeholder="Eg. MacBook Fund" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <div className="grid grid-cols-2 gap-3">
              <FormField name="target" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Target (₦)</FormLabel>
                  <FormControl><Input type="number" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="monthly" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly (₦)</FormLabel>
                  <FormControl><Input type="number" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <Button disabled={loading} className="bg-slate-900 text-white hover:bg-black">{loading ? "Saving..." : "Save goal"}</Button>
          </form>
        </Form>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-slate-600 text-sm">MacBook Fund</div>
            <div className="text-2xl font-semibold">₦120,000 <span className="text-sm text-slate-600 font-normal">/ ₦600,000</span></div>
          </div>
          <Button onClick={setupAutoDebit} className="bg-gradient-to-r from-emerald-600 to-blue-700 text-white">Set up auto-debit</Button>
        </div>
        <Progress value={20} className="mt-3" />
      </div>

      {message && <p className="text-sm mt-3">{message}</p>}
    </div>
  );
}
