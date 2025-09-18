"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserAuth } from "@/context/AuthContext";
import Link from "next/link";

const schema = z.object({ email: z.string().email(), password: z.string().min(6) });

type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const { signin } = UserAuth();
  const router = useRouter();
  const next = useSearchParams().get("next") || "/dashboard";
  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { email: "", password: "" } });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (values: FormValues) => {
    setLoading(true); setError(null);
    try {
      const res = await signin(values.email, values.password);
      if (!res.success) throw new Error(res.error);
      router.push(next);
    } catch (e: any) {
      setError(e.message || "Something went wrong");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-[80vh] grid place-items-center">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-slate-600 text-sm mt-1">Login to continue building wealth with SaveWise Hub.</p>
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
            {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
            <Button disabled={loading} className="mt-2 bg-slate-900 text-white hover:bg-black">{loading ? "Signing in..." : "Sign in"}</Button>
          </form>
        </Form>
        <p className="text-sm text-slate-600 mt-3">New here? <Link href="/signup" className="text-emerald-700 hover:underline">Create an account</Link></p>
      </div>
    </div>
  );
}
