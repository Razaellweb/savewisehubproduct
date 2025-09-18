import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inline script runs before React hydration to avoid flashing the wrong theme
  const themeInitializer = `(() => {
    try {
      const stored = localStorage.getItem('theme');
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const theme = stored ? stored : (mql.matches ? 'dark' : 'light');
      const root = document.documentElement;
      if (theme === 'dark') root.classList.add('dark');
      else root.classList.remove('dark');
    } catch (_) {}
  })();`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen overflow-x-hidden`}
      >
        <div className="w-[96%] md:w-[92%] 2xl:w-[80%] mx-auto pt-6 md:pt-8">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
