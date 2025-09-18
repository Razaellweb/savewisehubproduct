"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  bvn: z.string().length(11),
  idType: z.enum(["NIN", "DL", "PVC"]).default("NIN"),
  idNumber: z.string().min(6),
  address: z.string().min(6),
});

type Values = z.infer<typeof schema>;

export default function FullKYCPage() {
  const form = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { bvn: "", idType: "NIN", idNumber: "", address: "" } });
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<string | null>(null);

  const onSubmit = async (values: Values) => {
    setLoading(true); setResult(null);
    const res = await fetch("/api/kyc/full", { method: "POST", body: JSON.stringify(values) });
    const json = await res.json();
    setResult(json?.success ? "Full KYC verified" : json?.message || "KYC failed");
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold">Full KYC</h1>
      <p className="text-slate-600 text-sm">Required for loans and investments. Provide your ID and address.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 grid gap-3">
          <FormField name="bvn" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>BVN</FormLabel>
              <FormControl><Input placeholder="11-digit BVN" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="idType" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>ID Type (NIN/DL/PVC)</FormLabel>
              <FormControl><Input placeholder="NIN" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="idNumber" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>ID Number</FormLabel>
              <FormControl><Input placeholder="Enter ID Number" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="address" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl><Input placeholder="Residential address" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <Button disabled={loading} className="bg-slate-900 text-white hover:bg-black">{loading ? "Submitting..." : "Submit for verification"}</Button>
        </form>
      </Form>
      {result && <p className="text-sm mt-3">{result}</p>}
    </div>
  );
}
