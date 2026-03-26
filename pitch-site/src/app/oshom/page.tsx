'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const OSHOM_PASSWORD = 'oshom2026';

const navigation = [
  { id: 'opportunity', label: 'Opportunity' },
  { id: 'about', label: 'Bali Love' },
  { id: 'why-oshom', label: 'Why Oshom' },
  { id: 'products', label: 'Products' },
  { id: 'buyout-model', label: 'Month by Month' },
  { id: 'revenue', label: 'Revenue' },
  { id: 'yield', label: 'Yield' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'cashflow', label: 'Cash Flow' },
  { id: 'partnership', label: 'Partnership' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'pricing-strategy', label: 'The Plan' },
  { id: 'next-steps', label: 'Next Steps' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div variants={fadeUp} className="text-center">
      <div className="text-5xl font-bold text-amber-600 mb-2 font-mono">{number}</div>
      <div className="text-xs tracking-widest uppercase text-stone-500">{label}</div>
    </motion.div>
  );
}

function BigNumberCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div variants={fadeUp} className="bg-white p-8 border-t-3 border-amber-600 text-center">
      <div className="text-4xl font-bold text-amber-600 mb-2 font-mono">{number}</div>
      <div className="text-sm text-stone-500 leading-relaxed">{label}</div>
    </motion.div>
  );
}

export default function OshomProposal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem('oshom-auth');
    if (stored === 'true') setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    navigation.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === OSHOM_PASSWORD) {
      sessionStorage.setItem('oshom-auth', 'true');
      setIsAuthenticated(true);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <h1 className="font-mono font-bold text-white text-3xl mb-2 uppercase tracking-wider">Oshom x Bali Love</h1>
          <p className="text-white/50 text-sm mb-8 font-mono">Enter password to view proposal</p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              className="w-full bg-white/10 text-white px-4 py-3 font-mono text-sm border border-white/20 focus:border-amber-500 outline-none mb-4"
              placeholder="Password"
            />
            {error && <p className="text-red-400 text-xs mb-4 font-mono">Incorrect password</p>}
            <button type="submit" className="w-full bg-amber-600 text-white py-3 font-mono text-sm uppercase tracking-widest hover:bg-amber-700 transition-colors">
              View Proposal
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen font-mono">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-72 bg-stone-50 border-r border-stone-200 flex-col z-50 hidden lg:flex">
        <div className="p-8 border-b border-stone-200">
          <div className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-3">Partnership Proposal</div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider uppercase text-stone-900">OSHOM</span>
            <span className="text-sm text-amber-600">&times;</span>
            <span className="text-sm font-bold tracking-wider uppercase text-stone-900">BALI LOVE</span>
          </div>
        </div>
        <nav className="flex-1 p-8 overflow-y-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-4">Contents</p>
          <ul className="space-y-4">
            {navigation.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`text-[11px] tracking-wider uppercase transition-colors ${
                    activeSection === id ? 'text-amber-600 font-bold' : 'text-stone-700 hover:text-amber-600'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-6 border-t border-stone-200">
          <a href="mailto:tom@bali.love" className="block bg-amber-600 text-white text-center py-3 text-[11px] tracking-[0.15em] uppercase hover:bg-stone-900 transition-colors">
            Let&apos;s Talk
          </a>
        </div>
        <div className="px-6 pb-6 text-[11px] text-stone-400 leading-relaxed">
          <p><strong className="text-stone-600">Tom</strong><br />Founder, Bali Love<br /><a href="mailto:tom@bali.love" className="text-amber-600">tom@bali.love</a></p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72">

        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-stone-900/70 z-10" />
          <img
            src="https://oshombali.com/wp-content/uploads/2025/10/Sunbed-Pool-scaled.jpg"
            alt="Oshom Bali"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <motion.div className="relative z-20" initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-300 mb-6">Partnership Proposal</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold uppercase tracking-wider mb-6 leading-tight">
              Oshom Bali<br /><span className="font-normal text-amber-300">x Bali Love</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-sm text-white/70 max-w-xl mx-auto leading-relaxed mb-12">
              A partnership to bring 50 destination weddings per year to Oshom &mdash;
              adding ~15 billion IDR in revenue on top of normal hotel operations.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-8 justify-center">
              <img src="https://oshombali.com/wp-content/uploads/2024/09/Oshom-Logo-Full-Beige-300x300.png" alt="Oshom" className="h-16 opacity-80" />
              <span className="text-2xl text-white/30">+</span>
              <span className="text-lg font-bold tracking-[0.15em] uppercase">BALI LOVE</span>
            </motion.div>
          </motion.div>
        </section>

        {/* THE BIG NUMBERS */}
        <motion.section id="opportunity" className="py-24 px-6 bg-stone-900 text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-300 mb-6 text-center">What This Partnership Delivers</motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div variants={fadeUp} className="text-center p-8 border border-white/10">
                <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-3 font-mono">~276M</div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">IDR Per Wedding</div>
                <div className="text-sm text-white/70">Revenue to Oshom from a single 2-night, 80-guest wedding</div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center p-8 border border-white/10">
                <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-3 font-mono">~15B</div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">IDR Per Year</div>
                <div className="text-sm text-white/70">Annual wedding revenue from 50 weddings using just 32% of your calendar</div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center p-8 border border-white/10">
                <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-3 font-mono">+62%</div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">Revenue Increase</div>
                <div className="text-sm text-white/70">On top of your 2026 budgeted room revenue of 16.1B IDR</div>
              </motion.div>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl font-bold text-white mb-1 font-mono">100%</div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-white/40">Occupancy on wedding days</div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl font-bold text-white mb-1 font-mono">9.6x</div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-white/40">Revenue vs your weakest month</div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl font-bold text-white mb-1 font-mono">248</div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-white/40">Days still normal hotel ops</div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl font-bold text-white mb-1 font-mono">$0</div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-white/40">Cost to Oshom</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* THE OPPORTUNITY — CONTEXT */}
        <motion.section className="py-24 px-6 bg-stone-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto text-center">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">The Opportunity</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              Fill your calendar.<br /><span className="font-normal text-amber-600">Boost revenue 62%.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-2xl mx-auto">
              Oshom has 18 rooms, world-class F&amp;B, and a stunning venue &mdash; but at 47% occupancy in 2025,
              there&apos;s significant capacity to fill. Destination weddings bring guaranteed full-property bookings,
              premium F&amp;B revenue, and advance cash flow. We bring 50 weddings a year. You keep running
              your hotel the other 248 days as normal.
            </motion.p>
          </div>
        </motion.section>

        {/* THREE REVENUE STREAMS */}
        <motion.section className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'Venue Fee', desc: 'The couple pays for exclusive use of the property on their wedding day. Access to The Lawn, restaurant, rooftop, and all event spaces.' },
                { num: '02', title: 'Food & Beverage', desc: 'The couple pays for wedding catering — your in-house kitchen delivers a 3-course dinner and drinks for 80 guests at premium per-head rates.' },
                { num: '03', title: 'Accommodation Buyout', desc: 'The couple guarantees an exclusive buyout of all 18 rooms. Oshom is paid for full occupancy regardless — 100% guaranteed room revenue.' },
              ].map((card) => (
                <motion.div key={card.num} variants={fadeUp} className="bg-stone-50 p-6 border-t-3 border-amber-600">
                  <div className="text-xs font-bold text-amber-600 mb-3">{card.num}</div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-2">{card.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-600 p-8 mt-8 text-center">
              <p className="text-sm text-stone-900 leading-relaxed">
                <strong>Three separate revenue streams per wedding.</strong> The couple pays for the accommodation buyout, venue fee, and F&amp;B.
                All revenue flows to Oshom. Deposits arrive months before anyone shows up.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ABOUT BALI LOVE */}
        <motion.section id="about" className="py-24 px-6 bg-amber-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">About Bali Love</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              Bali&apos;s largest<br /><span className="font-normal text-amber-600">wedding planner.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-12">
              Since 2017, we&apos;ve delivered hundreds of destination weddings across Bali.
              Our team handles everything from marketing and lead generation to day-of
              coordination &mdash; so venue partners just deliver hospitality.
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-5 gap-12">
              <StatCard number="5" label="Weddings Per Week" />
              <StatCard number="80" label="Avg Guests" />
              <StatCard number="50+" label="Team Members" />
              <StatCard number="200+" label="Weddings Delivered" />
              <StatCard number="7" label="Years in Bali" />
            </motion.div>
          </div>
        </motion.section>

        {/* WHY OSHOM */}
        <motion.section id="why-oshom" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp} className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: "url('https://oshombali.com/wp-content/uploads/2025/10/Suite-scaled.jpg')" }} />
              <div>
                <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Why Oshom</motion.p>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
                  The perfect<br /><span className="font-normal text-amber-600">wedding hotel.</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed mb-6">
                  Oshom has what our couples want: a boutique hotel they can take over entirely,
                  with in-house catering, beautiful grounds, and rooms for all their guests &mdash;
                  all in one location inside Nuanu Creative City.
                </motion.p>
                <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed">
                  <strong className="text-stone-900">18 rooms. In-house F&amp;B. Exclusive buyout.</strong>{' '}
                  Unlike villa venues where guests scatter across Bali, Oshom keeps the
                  entire wedding party together. That&apos;s the experience couples pay a premium for.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* GALLERY STRIP */}
        <div className="grid grid-cols-4 h-48 md:h-64">
          {[1, 3, 5, 6].map((n) => (
            <div key={n} className="bg-cover bg-center" style={{ backgroundImage: `url('https://oshombali.com/wp-content/uploads/2025/10/${n}.-Gallery-Website-Resize.jpg')` }} />
          ))}
        </div>

        {/* WHAT OSHOM EARNS */}
        <motion.section id="products" className="py-24 px-6 bg-stone-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">What Oshom Earns</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              Per wedding<br /><span className="font-normal text-amber-600">revenue breakdown.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-12">
              All amounts below are what Oshom receives (inclusive of 21% tax &amp; service).
              Bali Love&apos;s fee is built into the couple-facing price &mdash; you never see it or pay it.
            </motion.p>

            {/* Per-Wedding Total */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-base font-bold uppercase tracking-wider text-stone-900 mb-4">2-Night Wedding &mdash; 80 Guests &mdash; Standard F&amp;B</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-amber-600 bg-stone-100">
                      <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Revenue Stream</th>
                      <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Who Pays</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Oshom Receives</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-200"><td className="p-3">Accommodation buyout &mdash; 18 rooms &times; 2 nights</td><td className="p-3">Couple</td><td className="p-3 text-right font-mono">107,100,000</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">Venue fee &mdash; exclusive use of event spaces</td><td className="p-3">Couple</td><td className="p-3 text-right font-mono">40,000,000</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">Food &mdash; Family Style 3-course, 80 guests</td><td className="p-3">Couple</td><td className="p-3 text-right font-mono">58,080,000</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">Drinks &mdash; Silver package (spirits), 80 guests</td><td className="p-3">Couple</td><td className="p-3 text-right font-mono">53,240,000</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">Guest spending &mdash; bar, spa, dining on non-wedding days</td><td className="p-3">Guests</td><td className="p-3 text-right font-mono">~17,500,000</td></tr>
                    <tr className="border-b-2 border-amber-600 font-bold bg-white"><td className="p-3">Total per wedding</td><td className="p-3"></td><td className="p-3 text-right font-mono text-lg">~275,920,000</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* F&B Tiers */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-base font-bold uppercase tracking-wider text-stone-900 mb-4">F&amp;B Options (Oshom Receives Per Head)</h3>
              <p className="text-xs text-stone-500 leading-relaxed mb-4">
                Based on your published menu prices. Your kitchen delivers the food and drinks. No external caterers.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-amber-600 bg-stone-100">
                      <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Tier</th>
                      <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Food</th>
                      <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Drinks</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Oshom Receives /Head</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">80 Guests</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-200">
                      <td className="p-3 font-bold">Base</td>
                      <td className="p-3">Family Style 3-course</td>
                      <td className="p-3 text-stone-400">None (BYO/bar menu)</td>
                      <td className="p-3 text-right font-mono">726,000</td>
                      <td className="p-3 text-right font-mono">58,080,000</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-amber-50">
                      <td className="p-3 font-bold">Standard</td>
                      <td className="p-3">Family Style 3-course</td>
                      <td className="p-3">Silver (spirits)</td>
                      <td className="p-3 text-right font-mono font-bold">1,391,500</td>
                      <td className="p-3 text-right font-mono font-bold">111,320,000</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="p-3 font-bold">Premium</td>
                      <td className="p-3">BBQ Family Style</td>
                      <td className="p-3">Gold (cocktails)</td>
                      <td className="p-3 text-right font-mono">1,815,000</td>
                      <td className="p-3 text-right font-mono">145,200,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Accommodation Buyout Rate */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-base font-bold uppercase tracking-wider text-stone-900 mb-4">Accommodation Buyout</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-amber-600 bg-stone-100">
                      <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600"></th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Oshom Receives</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-200"><td className="p-3">Per room / night (incl 21% tax)</td><td className="p-3 text-right font-mono">2,975,000 IDR</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3 font-bold">All 18 rooms / night</td><td className="p-3 text-right font-mono font-bold">53,550,000 IDR</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">2-night buyout</td><td className="p-3 text-right font-mono">107,100,000 IDR</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">3-night buyout</td><td className="p-3 text-right font-mono">160,650,000 IDR</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed mt-4">
                Based on Oshom net rate of 2,975,000/room/night — competitive rate that guarantees 100% occupancy + 21% tax &amp; service.
                The couple guarantees the full buyout &mdash; Oshom is paid for all 18 rooms regardless.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-amber-50 border-l-4 border-amber-600 p-8">
              <p className="text-sm text-stone-900 leading-relaxed">
                <strong>Zero cost to Oshom.</strong> No retainers, no monthly fees, no marketing spend.
                Bali Love earns a commission built into the couple-facing price. You receive the amounts shown above.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* WEDDING vs NORMAL — MONTH BY MONTH */}
        <motion.section id="buyout-model" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Month by Month</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              What a wedding earns<br /><span className="font-normal text-amber-600">vs a normal night.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-12">
              Based on your 2025 actual occupancy and room rates. A wedding night delivers ~129M IDR
              in total revenue to Oshom. Here&apos;s how that compares to what you currently earn per night in each month.
            </motion.p>

            <motion.div variants={fadeUp} className="overflow-x-auto mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-amber-600 bg-stone-50">
                    <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Month</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Occupancy</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Normal Night</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Wedding Night</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Multiple</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { month: 'Nov', occ: '29.8%', normal: '13,400,000', mult: '9.6x' },
                    { month: 'Apr', occ: '34.4%', normal: '19,400,000', mult: '6.6x' },
                    { month: 'Mar', occ: '35.3%', normal: '20,400,000', mult: '6.3x' },
                    { month: 'Feb', occ: '40.8%', normal: '23,300,000', mult: '5.5x' },
                    { month: 'Jun', occ: '40.6%', normal: '23,100,000', mult: '5.6x' },
                    { month: 'Dec', occ: '41.4%', normal: '24,700,000', mult: '5.2x' },
                    { month: 'Jan', occ: '39.5%', normal: '29,300,000', mult: '4.4x' },
                    { month: 'May', occ: '49.3%', normal: '27,900,000', mult: '4.6x' },
                    { month: 'Oct', occ: '62.0%', normal: '33,200,000', mult: '3.9x' },
                    { month: 'Jul', occ: '53.9%', normal: '34,700,000', mult: '3.7x' },
                    { month: 'Sep', occ: '61.7%', normal: '35,900,000', mult: '3.6x' },
                    { month: 'Aug', occ: '70.1%', normal: '48,000,000', mult: '2.7x' },
                  ].map((row, i) => (
                    <tr key={row.month} className={`border-b border-stone-200 ${i < 4 ? 'bg-amber-50 font-bold' : ''}`}>
                      <td className="p-3">{row.month}</td>
                      <td className="p-3 text-right font-mono">{row.occ}</td>
                      <td className="p-3 text-right font-mono">{row.normal}</td>
                      <td className="p-3 text-right font-mono text-amber-700">129,000,000</td>
                      <td className="p-3 text-right font-mono text-amber-700 font-bold">{row.mult}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-amber-50 border-l-4 border-amber-600 p-8">
              <p className="text-sm text-stone-900 leading-relaxed">
                <strong>Your weakest months benefit the most.</strong> Nov&ndash;Apr is when destination weddings book &mdash;
                and those are exactly the months where you&apos;re at 30&ndash;40% occupancy. Even in August (your best month at 70%),
                a wedding night still earns 2.7x more.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* PER WEDDING TOTAL — 3-Night Comparison */}
        <motion.section className="py-24 px-6 bg-stone-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Per Wedding</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-8 leading-tight">
              2-night vs 3-night<br /><span className="font-normal text-amber-600">what Oshom receives.</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-amber-600 bg-white">
                    <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Revenue Stream</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">2-Night</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">3-Night</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">Accommodation buyout (18 rooms)</td><td className="p-3 text-right font-mono">107,100,000</td><td className="p-3 text-right font-mono">160,650,000</td></tr>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">Venue fee</td><td className="p-3 text-right font-mono">40,000,000</td><td className="p-3 text-right font-mono">40,000,000</td></tr>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">F&amp;B &mdash; Standard (80 guests)</td><td className="p-3 text-right font-mono">111,320,000</td><td className="p-3 text-right font-mono">111,320,000</td></tr>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">Guest in-resort spending</td><td className="p-3 text-right font-mono">~17,500,000</td><td className="p-3 text-right font-mono">~35,000,000</td></tr>
                  <tr className="border-b-2 border-amber-600 font-bold bg-white"><td className="p-3">Total Oshom receives</td><td className="p-3 text-right font-mono text-lg">~275,920,000</td><td className="p-3 text-right font-mono text-lg">~346,970,000</td></tr>
                </tbody>
              </table>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <BigNumberCard number="~276M" label="IDR per 2-night wedding to Oshom" />
              <BigNumberCard number="~347M" label="IDR per 3-night wedding to Oshom" />
            </motion.div>
          </div>
        </motion.section>

        {/* ANNUAL REVENUE */}
        <motion.section id="revenue" className="py-24 px-6 bg-amber-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Annual Revenue</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              50 weddings.<br /><span className="font-normal text-amber-600">+62% revenue.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-8">
              Based on 33 two-night and 17 three-night weddings (matching
              the proven demand pattern from our top venue). Standard F&amp;B tier, 80 guests.
              All figures are what Oshom receives.
            </motion.p>
            <motion.div variants={fadeUp} className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-amber-600 bg-white">
                    <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Revenue Stream</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Annual (Oshom Receives)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">Accommodation buyouts (50 weddings)</td><td className="p-3 text-right font-mono">6,433,500,000</td></tr>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">Venue fees (50 weddings)</td><td className="p-3 text-right font-mono">2,000,000,000</td></tr>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">F&amp;B &mdash; Standard (80 guests &times; 50)</td><td className="p-3 text-right font-mono">5,566,000,000</td></tr>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">Guest in-resort spending</td><td className="p-3 text-right font-mono">~1,200,000,000</td></tr>
                  <tr className="border-b-2 border-amber-600 font-bold bg-white"><td className="p-3">Total annual wedding revenue to Oshom</td><td className="p-3 text-right font-mono text-lg">~15,200,000,000</td></tr>
                </tbody>
              </table>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <BigNumberCard number="~15B" label="IDR annual wedding revenue to Oshom" />
              <BigNumberCard number="+62%" label="Increase on 2026 budgeted room revenue" />
              <BigNumberCard number="32%" label="Of calendar used — 248 days normal hotel ops" />
            </motion.div>
          </div>
        </motion.section>

        {/* YIELD ANALYSIS */}
        <motion.section id="yield" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Yield Analysis</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              3.5x your<br /><span className="font-normal text-amber-600">normal yield.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-12">
              Every wedding night earns 3.5 times what a normal hotel night generates.
              Here&apos;s how your current revenue per room-night compares to wedding days.
            </motion.p>

            {/* Current yield stats */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-base font-bold uppercase tracking-wider text-stone-900 mb-4">Your Current Numbers</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-amber-600 bg-stone-50">
                      <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Metric</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-200"><td className="p-3">Total room-nights per year</td><td className="p-3 text-right font-mono">6,570</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">2025 occupancy</td><td className="p-3 text-right font-mono">47%</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">Occupied nights per year</td><td className="p-3 text-right font-mono">3,088</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">2026 budgeted revenue</td><td className="p-3 text-right font-mono">16,100,000,000 IDR</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">ADR (average daily rate)</td><td className="p-3 text-right font-mono">5,214,000 IDR</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">RevPAR (revenue per available room)</td><td className="p-3 text-right font-mono">2,451,000 IDR</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Yield comparison bars */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-base font-bold uppercase tracking-wider text-stone-900 mb-4">Revenue Per Room-Night</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs uppercase tracking-wider text-stone-500 mb-1">
                    <span>Normal hotel (RevPAR)</span><span className="font-mono">2.45M IDR</span>
                  </div>
                  <div className="h-10 bg-stone-100 overflow-hidden">
                    <div className="bg-stone-300 h-full flex items-center px-3 text-stone-600 text-[11px] font-bold" style={{ width: '29%' }}>2.45M</div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs uppercase tracking-wider text-stone-500 mb-1">
                    <span>Normal hotel (ADR &mdash; occupied nights only)</span><span className="font-mono">5.2M IDR</span>
                  </div>
                  <div className="h-10 bg-stone-100 overflow-hidden">
                    <div className="bg-stone-400 h-full flex items-center px-3 text-white text-[11px] font-bold" style={{ width: '61%' }}>5.2M</div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs uppercase tracking-wider text-amber-600 mb-1">
                    <span>Wedding days (per room-night)</span><span className="font-mono font-bold">8.5M IDR</span>
                  </div>
                  <div className="h-10 bg-amber-50 overflow-hidden">
                    <div className="bg-amber-600 h-full flex items-center px-3 text-white text-[11px] font-bold" style={{ width: '100%' }}>8.5M &mdash; 3.5x RevPAR</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* P&L impact table */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-base font-bold uppercase tracking-wider text-stone-900 mb-4">Net Impact on Annual Revenue</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-amber-600 bg-stone-50">
                      <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600"></th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">IDR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-200"><td className="p-3">Current budgeted revenue</td><td className="p-3 text-right font-mono">16,100,000,000</td></tr>
                    <tr className="border-b border-stone-200 text-stone-400"><td className="p-3">Displaced hotel revenue on wedding days (47% occ &times; 1,989 room-nights)</td><td className="p-3 text-right font-mono">-4,900,000,000</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">Remaining normal hotel revenue</td><td className="p-3 text-right font-mono">11,200,000,000</td></tr>
                    <tr className="border-b border-stone-200 text-amber-700 font-bold"><td className="p-3">Wedding revenue (Oshom receives)</td><td className="p-3 text-right font-mono">+15,200,000,000</td></tr>
                    <tr className="border-b-2 border-amber-600 font-bold bg-amber-50"><td className="p-3">New Annual Total</td><td className="p-3 text-right font-mono text-lg">26,400,000,000</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BigNumberCard number="3.5x" label="Wedding yield vs normal RevPAR" />
              <BigNumberCard number="30%" label="Of room-nights used for weddings" />
              <BigNumberCard number="60%" label="Of total revenue from those wedding nights" />
            </motion.div>

            <motion.div variants={fadeUp} className="bg-amber-50 border-l-4 border-amber-600 p-8 mt-8">
              <p className="text-sm text-stone-900 leading-relaxed">
                <strong>Weddings use 30% of your room-nights but generate 60% of your total revenue.</strong> The remaining 70% of
                your calendar still runs as a normal hotel earning 11.2 billion IDR. This isn&apos;t a pivot &mdash;
                it&apos;s an overlay that adds +62% to your revenue without changing how you operate the other 248 days.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CALENDAR IMPACT */}
        <motion.section id="calendar" className="py-24 px-6 bg-stone-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Calendar Impact</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-8 leading-tight">
              32% weddings.<br /><span className="font-normal text-amber-600">68% normal hotel.</span>
            </motion.h2>

            {/* Calendar bar */}
            <motion.div variants={fadeUp} className="mb-8">
              <div className="flex justify-between text-xs uppercase tracking-wider text-stone-500 mb-2">
                <span>Calendar Days</span><span>365 days</span>
              </div>
              <div className="h-10 bg-stone-100 flex overflow-hidden">
                <div className="bg-amber-600 h-full flex items-center px-3 text-white text-xs font-bold" style={{ width: '32%' }}>117 wedding days</div>
                <div className="h-full flex items-center px-3 text-stone-400 text-xs flex-1">248 days normal hotel</div>
              </div>
            </motion.div>

            {/* Occupancy comparison */}
            <motion.div variants={fadeUp} className="mb-8">
              <div className="text-xs uppercase tracking-wider text-stone-500 mb-2">Occupancy on wedding days</div>
              <div className="h-8 bg-stone-100 flex overflow-hidden mb-1">
                <div className="bg-stone-300 h-full flex items-center px-3 text-stone-600 text-[11px]" style={{ width: '61%' }}>Normal: 61%</div>
                <div className="h-full flex items-center px-3 text-stone-300 text-[11px]">Empty 39%</div>
              </div>
              <div className="h-8 bg-amber-600 flex items-center px-3">
                <span className="text-white text-[11px] font-bold">With weddings: 100% (all 17 rooms)</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-amber-50 border-l-4 border-amber-600 p-8">
              <p className="text-sm text-stone-900 leading-relaxed">
                <strong>Weddings fill your weakest months.</strong> Your 2025 data shows November at 29.8% occupancy,
                April at 34.4%, May at 35.3%. These are exactly the months weddings book first. Instead of
                hoping walk-in tourists fill those rooms, you have confirmed bookings with deposits already collected.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CASH FLOW */}
        <motion.section id="cashflow" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Cash Flow</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              Money arrives<br /><span className="font-normal text-amber-600">months before guests.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-12">
              Normal hotel guests book days before arrival and pay on checkout.
              Wedding couples pay 12&ndash;18 months in advance.
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                { when: 'On Booking (18 months out)', amount: '25%', desc: '~100M IDR deposit per wedding' },
                { when: '12 Months Out', amount: '25%', desc: 'Second payment' },
                { when: '3 Months Out', amount: '50%', desc: 'Final balance' },
              ].map((item) => (
                <motion.div key={item.when} variants={fadeUp} className="bg-white p-6 border-l-3 border-amber-600">
                  <div className="text-[11px] tracking-wider uppercase text-amber-600 mb-1">{item.when}</div>
                  <div className="text-2xl font-bold text-stone-900 mb-1">{item.amount}</div>
                  <div className="text-[11px] text-stone-400">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <BigNumberCard number="3.0B" label="IDR in deposits received 12–18 months before weddings" />
              <BigNumberCard number="6.0B" label="IDR received before the 3-month mark (50% of total)" />
            </motion.div>

            <motion.div variants={fadeUp} className="bg-amber-50 border-l-4 border-amber-600 p-8 mt-8">
              <p className="text-sm text-stone-900 leading-relaxed">
                <strong>Guaranteed working capital.</strong> 3.0 billion IDR sitting in your bank account
                well before any guest arrives. Use it to improve the property, fund marketing,
                or smooth out seasonal cash flow dips.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* PARTNERSHIP MODEL */}
        <motion.section id="partnership" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Partnership Model</motion.p>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
                  Clean split.<br /><span className="font-normal text-amber-600">Zero upfront cost.</span>
                </motion.h2>
                <motion.div variants={fadeUp} className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-stone-50 p-5">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-amber-600 mb-3">Bali Love handles</p>
                    <ul className="space-y-2">
                      {['Marketing & leads', 'Landing pages', 'Sales & conversion', 'Wedding planning', 'Styling & decor', 'Photography & video', 'Guest communications', 'Room bookings'].map((item) => (
                        <li key={item} className="text-xs text-stone-700 pb-2 border-b border-stone-200">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-stone-50 p-5">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-amber-600 mb-3">Oshom handles</p>
                    <ul className="space-y-2">
                      {['Venue & property', 'Food & beverage', 'Guest rooms', 'On-site hospitality', 'AV & technical'].map((item) => (
                        <li key={item} className="text-xs text-stone-700 pb-2 border-b border-stone-200">{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
              <motion.div variants={fadeUp} className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: "url('https://oshombali.com/wp-content/uploads/2025/10/Treehouse-scaled.jpg')" }} />
            </div>
          </div>
        </motion.section>

        {/* HOW IT WORKS */}
        <motion.section id="how-it-works" className="py-24 px-6 bg-amber-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">How It Works</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              From first click<br /><span className="font-normal text-amber-600">to final photo.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-12">
              We drive leads, convert enquiries, plan and deliver weddings, then capture content that drives more leads.
            </motion.p>

            <motion.div variants={stagger} className="space-y-8">
              {[
                { num: '01', title: 'Attract', sub: 'We drive qualified couples to Oshom', services: ['Paid Campaigns — Google, Meta, TikTok targeting Bali wedding couples', 'Landing Pages — Oshom-branded wedding pages for multiple markets', 'Bali Love Pipeline — Direct recommendations from 5+ weekly enquiries'] },
                { num: '02', title: 'Convert', sub: 'We handle the entire sales process', services: ['Enquiry Response — Fast, professional, same day', 'Online Quoting — Instant quotes couples approve online', 'Sales Calls — Video calls, follow-ups, deposit collection'] },
                { num: '03', title: 'Deliver', sub: 'We plan, Oshom hosts', services: ['Wedding Planning — Timeline, run sheets, vendor coordination', 'Styling & Decor — Design concept, florals, setup', 'Photography & Video — Professional content capture', 'Oshom delivers F&B + Rooms + Venue hospitality'] },
                { num: '04', title: 'Grow', sub: 'Content drives more leads', services: ['Reviews & testimonials for Oshom\'s marketing', 'Professional photo & video assets', 'Referral network — guests come back for their own events'] },
              ].map((phase) => (
                <motion.div key={phase.num} variants={fadeUp} className="bg-white p-8">
                  <div className="flex items-baseline gap-4 mb-6 flex-wrap">
                    <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 tracking-wider">{phase.num}</span>
                    <h3 className="text-xl font-bold uppercase tracking-wider text-stone-900">{phase.title}</h3>
                    <p className="text-xs text-stone-400 flex-basis-full mt-2 w-full">{phase.sub}</p>
                  </div>
                  <div className="space-y-3">
                    {phase.services.map((service, i) => (
                      <div key={i} className={`p-4 text-xs leading-relaxed ${i === phase.services.length - 1 && phase.num === '03' ? 'bg-amber-50 border-l-3 border-amber-600 text-stone-900 font-bold' : 'bg-stone-50 text-stone-600'}`}>
                        {service}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* BENEFITS */}
        <motion.section id="benefits" className="py-24 px-6 bg-stone-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">What Oshom Gets</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-12 leading-tight">
              Revenue without<br /><span className="font-normal text-amber-600">the workload.</span>
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: '+62% Revenue', desc: '~15 billion IDR in wedding revenue on top of normal hotel operations, using only 32% of your calendar.' },
                { title: '100% Occupancy', desc: 'Every wedding fills all 17 rooms, guaranteed. Compare that to your current 47–61% occupancy from walk-in tourists.' },
                { title: 'Advance Cash Flow', desc: '5 billion IDR in deposits received 12–18 months before weddings. Guaranteed working capital vs uncertain hotel bookings.' },
                { title: 'Fill Weak Months', desc: 'Weddings book into your lowest-occupancy months first. November (29.8%), April (34.4%), May (35.3%) — exactly when you need revenue most.' },
                { title: 'Zero Sales Cost', desc: 'We handle all marketing, sales, enquiry management, and conversion. Your team doesn\'t touch sales. Commission only on delivered revenue.' },
                { title: 'Content & Brand', desc: 'Every wedding generates professional photos and testimonials. Builds Oshom\'s reputation as a premier wedding destination.' },
              ].map((benefit) => (
                <motion.div key={benefit.title} variants={fadeUp} className="pl-6 border-l-2 border-amber-600">
                  <div className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-3">{benefit.title}</div>
                  <div className="text-sm text-stone-500 leading-relaxed">{benefit.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* PRICING STRATEGY — THE PLAN */}
        <motion.section id="pricing-strategy" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">The Plan</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              Volume first.<br /><span className="font-normal text-amber-600">Then optimise.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-12">
              100% occupancy on wedding days is the prize. Our strategy is to win volume at competitive pricing,
              get bookings in the bank, build cash flow and confidence in the system &mdash; then work the
              revenue up over time. Our team has done this 300+ times. We know how to fill a calendar.
            </motion.p>

            {/* The core insight */}
            <motion.div variants={fadeUp} className="bg-amber-50 border-l-4 border-amber-600 p-8 mb-12">
              <p className="text-sm text-stone-900 leading-relaxed">
                <strong>Why start competitive?</strong> 70% of destination wedding couples budget $30&ndash;35K AUD.
                At $35K we capture the mass market &mdash; not just the top 30%. That means more bookings, faster.
                More bookings means more revenue, more content, more referrals, and the data to push prices up with confidence.
              </p>
            </motion.div>

            {/* Three phases */}
            <motion.div variants={stagger} className="space-y-6 mb-12">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Fill the Calendar',
                  timeline: 'Now \u2192 May 2026',
                  target: '20 bookings',
                  points: [
                    'Launch at $35K \u2014 beat every competitor on price',
                    'Get bookings in the bank and deposits flowing',
                    'Build confidence in the system, the team, and the process',
                    'Deliver exceptional weddings \u2014 create the Oshom portfolio',
                  ],
                  highlight: '20 weddings booked by end of May. Cash in the bank. Calendar filling up.',
                },
                {
                  phase: 'Phase 2',
                  title: 'Season-Based Pricing',
                  timeline: 'Jun \u2192 Dec 2026',
                  target: '35\u201340 total bookings',
                  points: [
                    '$35K off-peak (Nov\u2013Apr) \u2014 fill the weak months',
                    '$40K peak season (May\u2013Oct) \u2014 premium positioning',
                    'Upsell Premium F&B and extra nights from real booking data',
                    'Testimonials and photos from real Oshom weddings drive higher conversion',
                  ],
                  highlight: 'Revenue per wedding starts climbing. Weak months are covered. Peak months earn a premium.',
                },
                {
                  phase: 'Phase 3',
                  title: 'Full Optimisation',
                  timeline: '2027+',
                  target: '50+ weddings per year',
                  points: [
                    'Dynamic pricing based on demand, season, and lead time',
                    'Average wedding value pushes toward $40K+',
                    'Data-backed confidence to maximise every booking',
                    'Marketplace revenue from guest activities and vendor network',
                  ],
                  highlight: 'The system is proven. Revenue is optimised. The calendar runs itself.',
                },
              ].map((phase) => (
                <motion.div key={phase.phase} variants={fadeUp} className="bg-stone-50 p-8">
                  <div className="flex items-baseline gap-4 mb-2 flex-wrap">
                    <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 tracking-wider">{phase.phase}</span>
                    <h3 className="text-base font-bold uppercase tracking-wider text-stone-900">{phase.title}</h3>
                  </div>
                  <p className="text-xs text-stone-400 mb-4">{phase.timeline} &bull; Target: {phase.target}</p>
                  <ul className="space-y-2 mb-4">
                    {phase.points.map((point, i) => (
                      <li key={i} className="text-xs text-stone-600 leading-relaxed pl-4 border-l-2 border-stone-200">{point}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-amber-700 font-bold bg-amber-50 p-3">{phase.highlight}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Volume comparison */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-base font-bold uppercase tracking-wider text-stone-900 mb-6">Why volume wins</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-amber-600 bg-stone-50">
                      <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Metric</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">20 weddings @ $35K</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">10 weddings @ $43K</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-200 bg-white"><td className="p-3">Calendar days used</td><td className="p-3 text-right font-mono">47 (13%)</td><td className="p-3 text-right font-mono">23 (6%)</td></tr>
                    <tr className="border-b border-stone-200 bg-white"><td className="p-3">Oshom revenue</td><td className="p-3 text-right font-mono">5.8B IDR</td><td className="p-3 text-right font-mono">3.6B IDR</td></tr>
                    <tr className="border-b border-stone-200 bg-white"><td className="p-3">Net incremental revenue</td><td className="p-3 text-right font-mono font-bold text-amber-700">+3.75B IDR</td><td className="p-3 text-right font-mono">+2.6B IDR</td></tr>
                    <tr className="border-b border-stone-200 bg-white"><td className="p-3">Guest in-resort spend</td><td className="p-3 text-right font-mono">473M IDR</td><td className="p-3 text-right font-mono">228M IDR</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mt-4">
                <p className="text-sm text-stone-900 leading-relaxed">
                  <strong>20 weddings at $35K delivers 44% more net revenue than 10 weddings at $43K</strong> &mdash;
                  using only 13% of the calendar. Lower price, more bookings, more money.
                </p>
              </div>
            </motion.div>

            {/* The ask */}
            <motion.div variants={fadeUp} className="bg-stone-900 text-white p-10">
              <p className="text-xs tracking-[0.2em] uppercase text-amber-300 mb-4">What we need from you</p>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">Give us the pricing and the sales process.</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Our team has 300+ weddings of experience. We know exactly who&apos;s buying, what they want,
                how to overcome every objection, and how to close. Give us full control of pricing and sales,
                and we&apos;ll have 20 weddings booked by end of May &mdash; with deposits in your bank account.
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                We&apos;ll work the total revenue and profit up over time. The first priority is getting
                bookings in the bank, building cash flow, and proving the system works. That&apos;s what
                we&apos;re best at.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section id="next-steps" className="py-24 px-6 text-white text-center relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="absolute inset-0 bg-stone-900/85 z-10" />
          <img
            src="https://oshombali.com/wp-content/uploads/2025/10/NATURE-PAGE.jpg"
            alt="Oshom"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-300 mb-4">Next Steps</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-6 leading-tight">
              Let&apos;s make<br /><span className="font-normal text-amber-300">this happen.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-white/70 leading-relaxed max-w-lg mx-auto mb-12">
              We&apos;re ready to start building Oshom&apos;s wedding presence and driving
              qualified couples to your property.
            </motion.p>
            <motion.div variants={stagger} className="flex flex-wrap justify-center gap-4 mb-12">
              {['Agree on product pricing', 'Sign partnership agreement', 'Build landing pages & content', 'Launch campaigns & start booking'].map((step, i) => (
                <motion.div key={step} variants={fadeUp} className="flex items-center gap-3 bg-white/10 px-5 py-3">
                  <span className="bg-white text-stone-900 w-6 h-6 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                  <span className="text-sm">{step}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex gap-4 justify-center flex-wrap">
              <a href="mailto:tom@bali.love" className="bg-white text-stone-900 px-12 py-4 text-sm uppercase tracking-wider hover:bg-amber-100 transition-colors">Get Started</a>
              <a href="https://bali.love" className="border border-white/50 text-white px-12 py-4 text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">Visit Bali.Love</a>
            </motion.div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="bg-stone-900 text-white py-12 px-6 text-center">
          <div className="mb-6">
            <p className="font-bold">Tom</p>
            <p className="text-sm text-white/60">Founder, Bali Love</p>
            <p><a href="mailto:tom@bali.love" className="text-amber-300 text-sm">tom@bali.love</a></p>
          </div>
          <p className="text-xs text-white/30">
            This proposal was prepared exclusively for Oshom Bali &bull; March 2026
          </p>
        </footer>

      </main>
    </div>
  );
}
