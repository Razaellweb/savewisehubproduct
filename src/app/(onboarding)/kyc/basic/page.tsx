"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const basicSchema = z.object({ phone: z.string().min(10), bvn: z.string().length(11) });

export default function BasicKYCPage() {
  const form = useForm<{ phone: string; bvn: string }>({ resolver: zodResolver(basicSchema), defaultValues: { phone: "", bvn: "" } });
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<string | null>(null);

  const onSubmit = async (values: { phone: string; bvn: string }) => {
    setLoading(true); setResult(null);
    const res = await fetch("/api/kyc/basic", { method: "POST", body: JSON.stringify(values) });
    const json = await res.json();
    setResult(json?.success ? "Basic KYC verified" : json?.message || "KYC failed");
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold">Basic KYC</h1>
      <p className="text-slate-600 text-sm">Verify your phone and BVN to start using SaveWise Hub.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 grid gap-3">
          <FormField name="phone" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl><Input placeholder="0803 000 0000" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="bvn" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>BVN</FormLabel>
              <FormControl><Input placeholder="11-digit BVN" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <Button disabled={loading} className="bg-gradient-to-r from-emerald-700 to-blue-700 text-white">{loading ? "Verifying..." : "Verify"}</Button>
        </form>
      </Form>
      {result && <p className="text-sm mt-3">{result}</p>}
    </div>
  );
}
