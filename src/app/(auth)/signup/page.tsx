"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserAuth } from "@/context/AuthContext";
import Link from "next/link";

const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password should be at least 6 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  bvn: z.string().length(11, "BVN must be 11 digits"),
});

type FormValues = z.infer<typeof schema>;

export default function SignupPage() {
  const { signup } = UserAuth();
  const router = useRouter();
  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { email: "", password: "", phone: "", bvn: "" } });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (values: FormValues) => {
    setLoading(true); setError(null);
    // 1) Basic KYC on signup
    try {
      const kycRes = await fetch("/api/kyc/basic", { method: "POST", body: JSON.stringify({ phone: values.phone, bvn: values.bvn }) });
      const kycJson = await kycRes.json();
      if (!kycRes.ok || !kycJson?.success) throw new Error(kycJson?.message || "KYC failed");

      const res = await signup(values.email, values.password);
      if (!res.success) throw new Error(res.error);
      router.push("/dashboard");
    } catch (e: any) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] grid place-items-center">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Create your account</h1>
        <p className="text-slate-600 text-sm mt-1">Fast onboarding with BVN + phone. Full KYC required for loans/investments.</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 grid gap-3">
            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="password" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl><Input type="password" placeholder="••••••••" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <div className="grid grid-cols-2 gap-3">
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
            </div>
            {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
            <Button disabled={loading} className="mt-2 bg-gradient-to-r from-emerald-700 to-blue-700 text-white">{loading ? "Creating..." : "Create account"}</Button>
          </form>
        </Form>
        <p className="text-sm text-slate-600 mt-3">Already have an account? <Link href="/login" className="text-emerald-700 hover:underline">Log in</Link></p>
      </div>
    </div>
  );
}
