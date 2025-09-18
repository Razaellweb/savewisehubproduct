import React from 'react'
import Link from "next/link";

const CTA = () => {
  return (
    <div className="mt-16 w-full bg-white dark:bg-slate-900 py-10 relative border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm text-slate-900 dark:text-slate-100">
      <div className="w-[92%] mx-auto flex items-center flex-wrap justify-between gap-6">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl xl:text-4xl text-center md:text-left font-semibold tracking-tight">
            Start your journey with <span className="text-teal-700">SaveWise Hub</span>
          </h2>
          <p className="text-base mt-3 text-slate-600 dark:text-slate-300 text-center md:text-left">
            Build disciplined savings, invest with confidence, and access instant, affordable credit—designed for Nigerians.
          </p>
        </div>
        <div className="w-fit mx-auto md:mx-0">
          <Link href="/signup" className='px-6 py-3 rounded-full bg-teal-700 text-white text-base font-medium shadow hover:bg-teal-800'>
            Get started free
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CTA