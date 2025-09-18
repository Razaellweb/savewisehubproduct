"use client";

import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#investments", label: "Investments" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden xl:block">
        <section className="w-full bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="left-0 flex gap-2 items-center">
            <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center text-white font-bold">S</div>
            <h1 className="text-2xl font-semibold tracking-tight">SaveWise Hub</h1>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center left-1/2">
            {links.map((link) => (
              <h1
                key={link.href}
                className={`text-base px-4 py-2 rounded-full cursor-pointer transition-colors hover:bg-slate-100`}
              >
                <Link href={link.href}>{link.label}</Link>
              </h1>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-base text-slate-700 hover:text-slate-900">Login</Link>
            <Link
              href="/signup"
              className="px-5 py-2.5 rounded-full bg-teal-700 text-white text-base font-medium shadow hover:bg-teal-800"
            >
              Get started free
            </Link>
          </div>
        </section>
      </div>

      {/* Mobile & Tablet Navbar */}
      <div className="xl:hidden w-[97%] mx-auto bg-white border border-slate-200 px-4 py-3 flex justify-between items-center rounded-full shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center text-white font-bold">S</div>
          <h1 className="text-lg font-semibold">SaveWise Hub</h1>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="text-white text-3xl z-[100] px-3 py-2 rounded-full bg-teal-700 hover:bg-teal-800"
        >
          <Bars3BottomRightIcon className="w-7 h-7" />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-40"
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 z-[1000] right-0 h-full w-72 bg-white text-slate-900 px-6 py-6 border-l border-slate-200 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="text-slate-700 text-3xl mb-6"
        >
          <HiOutlineX />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base cursor-pointer px-3 py-2 rounded-lg hover:bg-slate-100`}
            >
              {link.label}
            </Link>
          ))}

          <hr className="border-slate-200 my-4" />
          <Link href="/login" onClick={() => setMenuOpen(false)} className="text-base">
            Login
          </Link>
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center mt-2 py-3 rounded-full bg-teal-700 text-white text-base hover:bg-teal-800"
          >
            Get started free
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
