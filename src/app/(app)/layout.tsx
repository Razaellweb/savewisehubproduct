"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { QueryProvider } from "@/providers/query";
import { PostHogProvider } from "@/providers/posthog";
import { AuthContextProvider, UserAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { PiggyBank, Wallet, Users, ShieldCheck, Home, Gift, Headphones } from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider>
      <QueryProvider>
        <AuthContextProvider>
          <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
            <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
              <div className="mx-auto w-[96%] md:w-[92%] 2xl:w-[80%] py-3 flex items-center justify-between">
                <Link href="/dashboard" className="text-xl font-semibold tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-blue-700">SaveWise</span> Hub
                </Link>
                <UserStatus />
              </div>
            </header>
            <main className="mx-auto w-[96%] md:w-[92%] 2xl:w-[80%] pb-24 pt-6">
              {children}
            </main>
            <BottomNav />
          </div>
        </AuthContextProvider>
      </QueryProvider>
    </PostHogProvider>
  );
}

function UserStatus() {
  const { session } = UserAuth();
  return (
    <div className="text-sm text-slate-600">
      {session?.user?.email ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">{session.user.email}</span>
      ) : (
        <Link href="/login" className="text-emerald-700 hover:underline">Login</Link>
      )}
    </div>
  );
}

function BottomNav() {
  const pathname = usePathname();
  const items = [
    { href: "/dashboard", label: "Home", icon: Home },
    { href: "/savings", label: "Savings", icon: PiggyBank },
    { href: "/investments", label: "Invest", icon: Wallet },
    { href: "/loans", label: "Loans", icon: ShieldCheck },
    { href: "/groups", label: "Groups", icon: Users },
  ];
  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40">
      <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur shadow-lg px-3 py-2 flex items-center gap-1">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className={cn(
              "flex flex-col items-center justify-center px-3 py-2 rounded-xl text-xs text-slate-600 hover:text-slate-900",
              pathname === it.href && "bg-slate-100 text-slate-900"
            )}
            aria-current={pathname === it.href ? "page" : undefined}
          >
            <it.icon className="w-5 h-5" />
            <span className="mt-0.5">{it.label}</span>
          </Link>
        ))}
        <Link href="/referrals" className="ml-1 px-3 py-2 rounded-xl text-xs bg-gradient-to-r from-emerald-600 to-blue-700 text-white shadow">
          <div className="flex items-center gap-1"><Gift className="w-4 h-4" /> Refer</div>
        </Link>
        <Link href="/support" className="ml-1 px-3 py-2 rounded-xl text-xs border border-slate-200 text-slate-700 bg-white"><div className="flex items-center gap-1"><Headphones className="w-4 h-4"/> Help</div></Link>
      </div>
    </nav>
  );
}
