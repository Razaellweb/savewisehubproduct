import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SWRegister from "@/components/sw-register";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaveWise Hub — Save, Invest, and Borrow for Nigerians",
  description:
    "SaveWise Hub is a mobile-first fintech platform for Nigerians to automate savings, access curated low-risk investments, get instant collateralized loans, and run trusted Ajo/Esusu groups with seamless Paystack/Flutterwave payments.",
  manifest: "/manifest.json",
  themeColor: "#065f46",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#065f46" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 min-h-screen overflow-x-hidden`}
      >
        <SWRegister />
        <div className="w-[96%] md:w-[92%] 2xl:w-[80%] mx-auto pt-6 md:pt-8">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
