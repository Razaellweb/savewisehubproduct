"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({ name: z.string().min(3), members: z.coerce.number().min(2), amount: z.coerce.number().min(1000) });

type Values = z.infer<typeof schema>;

export default function GroupsPage() {
  const form = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { name: "", members: 5, amount: 5000 } });
  const [message, setMessage] = React.useState<string | null>(null);

  const onSubmit = async (values: Values) => {
    const res = await fetch("/api/groups", { method: "POST", body: JSON.stringify(values) });
    const json = await res.json();
    setMessage(json?.success ? "Group created" : json?.message || "Failed");
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold">Ajo/Esusu groups</h1>
      <p className="text-slate-600 text-sm">Create or join transparent groups with smart safeguards.</p>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="text-lg font-medium">Create group</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-3 grid gap-3">
            <FormField name="name" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Group name</FormLabel>
                <FormControl><Input placeholder="Eg. Team Techies" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <div className="grid grid-cols-2 gap-3">
              <FormField name="members" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Members</FormLabel>
                  <FormControl><Input type="number" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="amount" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Contribution (₦)</FormLabel>
                  <FormControl><Input type="number" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <Button className="bg-slate-900 text-white hover:bg-black">Create</Button>
          </form>
        </Form>
      </div>

      {message && <p className="text-sm mt-3">{message}</p>}
    </div>
  );
}
