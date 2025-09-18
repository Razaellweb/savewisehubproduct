import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-200">
      <div className="w-[96%] md:w-[92%] 2xl:w-[80%] mx-auto py-10">
        <div className="w-full flex flex-col items-center">
          {/* Brand */}
          <div className="flex gap-2 items-center">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-teal-700 to-blue-700 flex items-center justify-center text-white font-bold">S</div>
            <h1 className="text-2xl font-semibold tracking-tight">SaveWise Hub</h1>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-1 mt-6 flex-wrap justify-center">
            <Link href="#features" className="text-sm md:text-base px-3 py-2 rounded-full hover:bg-slate-100">Features</Link>
            <Link href="#investments" className="text-sm md:text-base px-3 py-2 rounded-full hover:bg-slate-100">Investments</Link>
            <Link href="#pricing" className="text-sm md:text-base px-3 py-2 rounded-full hover:bg-slate-100">Pricing</Link>
            <Link href="#testimonials" className="text-sm md:text-base px-3 py-2 rounded-full hover:bg-slate-100">Testimonials</Link>
            <Link href="#faq" className="text-sm md:text-base px-3 py-2 rounded-full hover:bg-slate-100">FAQ</Link>
            <Link href="#contact" className="text-sm md:text-base px-3 py-2 rounded-full hover:bg-slate-100">Contact</Link>
          </nav>

          <div className="w-full h-px bg-slate-200 mt-8" />

          {/* Contact */}
          <div className="flex items-center gap-4 mt-6 flex-wrap justify-center text-slate-700">
            <span className="flex items-center gap-2 text-sm md:text-base"><Mail className="w-5 h-5 text-teal-700" /> support@savewisehub.com</span>
            <span className="flex items-center gap-2 text-sm md:text-base"><Phone className="w-5 h-5 text-teal-700" /> +234 700 000 0000</span>
            <span className="flex items-center gap-2 text-sm md:text-base"><MapPin className="w-5 h-5 text-teal-700" /> Lagos, Nigeria</span>
          </div>

          <div className="w-full h-px bg-slate-200 mt-8" />

          {/* Bottom bar */}
          <div className="w-full mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-600">
            <p className="text-sm">© {new Date().getFullYear()} SaveWise Hub. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/legal/privacy" className="hover:text-slate-900">Privacy Policy</Link>
              <span className="text-slate-300">|</span>
              <Link href="#" className="hover:text-slate-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
