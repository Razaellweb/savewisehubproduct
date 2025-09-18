import Link from "next/link";
import CTA from "@/components/cta";
import { ShieldCheck, PiggyBank, Wallet, Users, ArrowRight, CheckCircle2, Lock, Sparkles, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="mt-10 md:mt-16 mb-24">
      {/* Hero */}
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="w-fit mx-auto md:mx-0 inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <span className="text-sm font-medium">Friendly. Secure. Nigerian.</span>
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl leading-tight font-semibold tracking-tight mt-4">
            Save, invest, and borrow—built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-blue-700">Nigerians</span>.
          </h1>

          <p className="text-base md:text-lg text-slate-600 mt-5 max-w-xl mx-auto md:mx-0">
            SaveWise Hub is a mobile-first fintech platform designed for Nigerians to build disciplined savings, access curated low-risk investments, get instant collateralized loans, and run trusted Ajo/Esusu groups—all with seamless Paystack/Flutterwave payments.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
            <Link href="/signup" className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-700 to-blue-700 text-white text-base font-medium shadow hover:opacity-95">
              Get started free
            </Link>
            <Link href="#features" className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50">
              See how it works
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start text-slate-600">
            <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-teal-700" /><span className="text-sm">Bank-grade security</span></div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-teal-700" /><span className="text-sm">CBN-aligned operations</span></div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="w-full rounded-3xl bg-gradient-to-br from-slate-50 via-white to-indigo-50 border border-slate-200 shadow-inner flex items-center justify-center min-h-[320px] md:min-h-[400px]">
            <div className="grid grid-cols-2 gap-4 p-6 w-[90%]">
              <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center"><PiggyBank className="w-5 h-5" /></div>
                <p className="mt-3 text-sm text-slate-600">Automated savings goals</p>
                <p className="text-sm font-semibold mt-1">₦120,000 saved</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-blue-700 flex items-center justify-center"><Wallet className="w-5 h-5" /></div>
                <p className="mt-3 text-sm text-slate-600">Investment portfolio</p>
                <p className="text-sm font-semibold mt-1">+12.4% YTD</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center"><Users className="w-5 h-5" /></div>
                <p className="mt-3 text-sm text-slate-600">Ajo/Esusu circle</p>
                <p className="text-sm font-semibold mt-1">8 members</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center"><ShieldCheck className="w-5 h-5" /></div>
                <p className="mt-3 text-sm text-slate-600">Loan eligibility</p>
                <p className="text-sm font-semibold mt-1">Up to 80% of savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="mt-12" aria-label="partners">
        <div className="flex flex-wrap items-center justify-center gap-3 text-slate-600">
          <span className="text-sm">Integrated with</span>
          <span className="px-3 py-1.5 bg-slate-100 rounded-full text-sm font-medium">Paystack</span>
          <span className="px-3 py-1.5 bg-slate-100 rounded-full text-sm font-medium">Flutterwave</span>
          <span className="px-3 py-1.5 bg-slate-100 rounded-full text-sm font-medium">Secured by industry best-practices</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Everything you need to grow money confidently</h2>
        <p className="text-slate-600 text-center mt-3 max-w-2xl mx-auto">Automated savings, safe investments, instant loans, and trusted group savings — in one friendly app.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
          {[
            {
              icon: PiggyBank,
              title: "Automated savings",
              desc: "Flexible goals and auto-debits via Paystack/Flutterwave.",
              color: "bg-teal-50 text-teal-700",
            },
            {
              icon: Wallet,
              title: "Curated investments",
              desc: "Low-risk options with transparent returns and easy withdrawals.",
              color: "bg-indigo-50 text-blue-700",
            },
            {
              icon: ShieldCheck,
              title: "Instant loans",
              desc: "Collateralized up to 80% of your savings — approved in minutes.",
              color: "bg-teal-50 text-teal-700",
            },
            {
              icon: Users,
              title: "Ajo/Esusu groups",
              desc: "Smart safeguards, schedules, and rewards for saving together.",
              color: "bg-amber-50 text-amber-600",
            },
          ].map((f, i) => (
            <article key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-11 h-11 rounded-full ${f.color} flex items-center justify-center`}>
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="text-slate-600 text-sm mt-1.5">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Investments */}
      <section id="investments" className="mt-16">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-indigo-50 to-white p-6 md:p-10">
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Curated low-risk investment marketplace</h2>
              <p className="text-slate-600 mt-3">Explore T-bills, money market funds, and other vetted, low-volatility instruments with clear terms and easy liquidity.</p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-700" /> Transparent yields and fees</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-700" /> Auto-rollover and partial withdrawals</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-700" /> Real-time portfolio tracking</li>
              </ul>
              <div className="mt-6">
                <Link href="/signup" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-700 text-white shadow hover:bg-blue-800">
                  Start investing <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {["T-Bills (91D)", "Money Market Fund", "Fixed Income Note", "Dollar Denominated"].map((name, i) => (
                <div key={i} className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                  <div className="text-sm text-slate-500">{name}</div>
                  <div className="text-2xl font-semibold mt-2">{[9.8, 12.6, 14.2, 7.1][i]}% <span className="text-sm font-normal text-slate-500">est. APY</span></div>
                  <div className="mt-2 text-xs text-slate-500">Liquidity: {["High", "High", "Med", "Low"][i]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Simple, transparent pricing</h2>
        <p className="text-slate-600 text-center mt-3 max-w-2xl mx-auto">No hidden fees. Save and invest for free; pay small, fair fees on advanced features and loan interest.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {[{
            name: "Starter",
            price: "Free",
            features: ["Automated savings goals", "Ajo/Esusu circles (up to 10)", "Paystack/Flutterwave auto-debits"],
            cta: "Get started",
            highlight: false,
          },
          {
            name: "Pro",
            price: "₦1,500/mo",
            features: ["Priority withdrawals", "Advanced analytics", "Referral rewards boost"],
            cta: "Upgrade",
            highlight: true,
          },
          {
            name: "Loans",
            price: "From 2%/mo",
            features: ["Instant collateralized loans", "Up to 80% of savings", "Flexible repayment"],
            cta: "Check eligibility",
            highlight: false,
          }].map((plan, i) => (
            <div key={i} className={`rounded-2xl border ${plan.highlight ? "border-blue-700 shadow-lg" : "border-slate-200 shadow-sm"} bg-white p-6 flex flex-col`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${plan.highlight ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"}`}>{plan.highlight ? "Popular" : ""}</span>
              </div>
              <div className="text-3xl font-semibold mt-2">{plan.price}</div>
              <ul className="mt-4 space-y-2 text-slate-700 text-sm">
                {plan.features.map((f, idx) => (
                  <li className="flex items-center gap-2" key={idx}><CheckCircle2 className="w-4 h-4 text-teal-700" /> {f}</li>
                ))}
              </ul>
              <Link href="/signup" className={`mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full ${plan.highlight ? "bg-blue-700 text-white hover:bg-blue-800" : "bg-slate-900 text-white hover:bg-black"}`}>
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Loved by young Nigerians</h2>
        <p className="text-slate-600 text-center mt-3 max-w-2xl mx-auto">Real stories from users building better money habits with SaveWise Hub.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {[{
            quote: "SaveWise helped me automate my savings. I bought my first laptop cash!",
            name: "Aisha",
            role: "Student, Lagos",
            img: "https://randomuser.me/api/portraits/women/65.jpg"
          }, {
            quote: "The loan against my savings came through in minutes — no drama.",
            name: "Emeka",
            role: "SME Owner, Abuja",
            img: "https://randomuser.me/api/portraits/men/32.jpg"
          }, {
            quote: "Our Esusu group runs smoothly with reminders and auto-collection.",
            name: "Tolu",
            role: "NYSC, Ibadan",
            img: "https://randomuser.me/api/portraits/men/85.jpg"
          }].map((t, i) => (
            <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full" />
                <div>
                  <figcaption className="text-sm font-semibold">{t.name}</figcaption>
                  <div className="text-xs text-slate-600">{t.role}</div>
                </div>
              </div>
              <blockquote className="text-slate-700 text-sm mt-3">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Frequently asked questions</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[{
            q: "Is SaveWise Hub regulated?",
            a: "We operate with bank-grade security and partner with compliant payment providers like Paystack and Flutterwave."
          },{
            q: "How do instant loans work?",
            a: "Your savings act as collateral. You can request up to 80% of your savings and get approval in minutes."
          },{
            q: "Are investments safe?",
            a: "We curate low-risk options with transparent terms. However, all investments carry some risk; read product documents before investing."
          },{
            q: "Can I create Ajo/Esusu groups?",
            a: "Yes. Set rules, schedules, and auto-collection to keep your group accountable and safe."
          }].map((item, i) => (
            <details key={i} className="rounded-xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-medium text-slate-900">{item.q}</summary>
              <p className="text-slate-600 mt-2 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Talk to us</h3>
            <p className="text-slate-600 mt-1">Have questions about saving, investing, or loans? Our team is here to help.</p>
            <div className="mt-4 space-y-2 text-slate-700 text-sm">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-teal-700" /> support@savewisehub.com</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-teal-700" /> +234 700 000 0000</div>
            </div>
          </div>
          <form className="rounded-2xl border border-slate-200 bg-white p-6 grid grid-cols-1 gap-3" action="#" noValidate>
            <div>
              <label className="text-sm text-slate-700">Full name</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm text-slate-700">Message</label>
              <textarea className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-28 focus:outline-none focus:ring-2 focus:ring-blue-700" placeholder="How can we help?" />
            </div>
            <button className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white hover:bg-black" type="button">
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}
