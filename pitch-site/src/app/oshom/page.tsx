'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const OSHOM_PASSWORD = 'oshom2026';

const navigation = [
  { id: 'opportunity', label: 'Opportunity' },
  { id: 'about', label: 'Bali Love' },
  { id: 'why-oshom', label: 'Why Oshom' },
  { id: 'products', label: 'Products' },
  { id: 'competitors', label: 'vs Competitors' },
  { id: 'buyout-model', label: 'Buyout Model' },
  { id: 'revenue', label: 'Revenue' },
  { id: 'yield', label: 'Yield' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'cashflow', label: 'Cash Flow' },
  { id: 'volume', label: 'Volume Strategy' },
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
              adding up to 14.5 billion IDR in revenue on top of normal hotel operations.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-8 justify-center">
              <img src="https://oshombali.com/wp-content/uploads/2024/09/Oshom-Logo-Full-Beige-300x300.png" alt="Oshom" className="h-16 opacity-80" />
              <span className="text-2xl text-white/30">+</span>
              <span className="text-lg font-bold tracking-[0.15em] uppercase">BALI LOVE</span>
            </motion.div>
          </motion.div>
        </section>

        {/* THE OPPORTUNITY */}
        <motion.section id="opportunity" className="py-24 px-6 bg-stone-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto text-center">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">The Opportunity</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              Fill your calendar.<br /><span className="font-normal text-amber-600">Boost revenue 58%+.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-2xl mx-auto">
              Oshom has 18 rooms, world-class F&amp;B, and a stunning venue &mdash; but at 47% occupancy in 2025,
              there&apos;s significant capacity to fill. Destination weddings bring guaranteed full-property bookings,
              premium F&amp;B revenue, and advance cash flow. We target ~4 weddings a month, mostly in dry season
              (April&ndash;October). Your wet season and most weekdays stay free for normal hotel ops.
            </motion.p>
          </div>
        </motion.section>

        {/* FOUR REVENUE STREAMS */}
        <motion.section className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Venue Buyout', desc: 'Exclusive-use property hire for 2 or 3 nights. Event fee rolled in. Couples pay a premium for guaranteed privacy.' },
                { num: '02', title: 'Food & Beverage', desc: 'Wedding catering for 80 guests — two tiers: Standard (family style + spirits) or Premium (BBQ + cocktails). In-house F&B at Oshom\'s published rates.' },
                { num: '03', title: 'Guest Rooms', desc: 'All 17 guest rooms filled at 100% occupancy on wedding dates. Guest payments offset the couple\'s buyout cost.' },
                { num: '04', title: 'Advance Deposits', desc: '25% deposit on booking (12–18 months before), 25% at 12 months, 50% at 3 months. Cash in your bank well before anyone arrives.' },
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
                <strong>One wedding = three revenue streams.</strong> Venue buyout + Food &amp; Beverage + Guest rooms.
                All guaranteed in advance with deposits.
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
              <StatCard number="300+" label="Weddings Delivered" />
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

        {/* WEDDING PRODUCTS — Updated to $35K pricing (Section 16) */}
        <motion.section id="products" className="py-24 px-6 bg-stone-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Wedding Products</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              Simple pricing.<br /><span className="font-normal text-amber-600">Sell &amp; buy prices.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-12">
              Event fee is rolled into the buyout &mdash; one clean number. F&amp;B uses Oshom&apos;s published menu prices
              through a simple pricing chain. Sell = what the couple pays. Buy = what Oshom keeps.
            </motion.p>

            {/* Product 1: Venue Buyout */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-base font-bold uppercase tracking-wider text-stone-900 mb-2">Product 1: Venue Buyout (Event Fee Rolled In)</h3>
              <p className="text-xs text-stone-400 mb-4">Full hotel exclusive use. Room rate = 3,318,000 net/room/night (matches 2025 ADR).</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-amber-600 bg-stone-100">
                      <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600"></th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Sell (couple pays)</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Buy (Oshom keeps)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-200"><td className="p-3">2-Night Buyout (18 rooms)</td><td className="p-3 text-right font-mono">170,035,000 IDR</td><td className="p-3 text-right font-mono">144,530,000 IDR</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">3-Night Buyout (18 rooms)</td><td className="p-3 text-right font-mono">255,053,000 IDR</td><td className="p-3 text-right font-mono">216,798,000 IDR</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Product 2: F&B */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-base font-bold uppercase tracking-wider text-stone-900 mb-4">Product 2: Food &amp; Beverage (80 guests)</h3>
              <p className="text-xs text-stone-500 leading-relaxed mb-4">
                Based on Oshom&apos;s published menu prices. Two tiers: Standard or Premium.
                No minimum F&amp;B spend &mdash; couples just pick a tier.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-amber-600 bg-stone-100">
                      <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Tier</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Food / Head</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Drinks / Head</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Per Head Sell</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Total Sell (80)</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Total Buy (80)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-200">
                      <td className="p-3 font-bold">Standard</td>
                      <td className="p-3 text-right font-mono">854,118</td>
                      <td className="p-3 text-right font-mono">782,941</td>
                      <td className="p-3 text-right font-mono">1,637,059</td>
                      <td className="p-3 text-right font-mono">130,965,000</td>
                      <td className="p-3 text-right font-mono">111,320,000</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="p-3 font-bold">Premium</td>
                      <td className="p-3 text-right font-mono">1,210,000</td>
                      <td className="p-3 text-right font-mono">925,294</td>
                      <td className="p-3 text-right font-mono">2,135,294</td>
                      <td className="p-3 text-right font-mono">170,824,000</td>
                      <td className="p-3 text-right font-mono">145,200,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-400 mt-3">Standard = Family Style 3-course + Silver spirits. Premium = BBQ Family Style + Gold cocktails.</p>
            </motion.div>

            {/* Product 3: Guest Rooms */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-base font-bold uppercase tracking-wider text-stone-900 mb-4">Product 3: Guest Rooms (17 rooms)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-amber-600 bg-stone-100">
                      <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600"></th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Per Room/Night Sell</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Total Offset (17 rooms)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-200"><td className="p-3">2-Night Stay</td><td className="p-3 text-right font-mono">3,500,000</td><td className="p-3 text-right font-mono">119,000,000</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">3-Night Stay</td><td className="p-3 text-right font-mono">3,500,000</td><td className="p-3 text-right font-mono">178,500,000</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-400 mt-3">Guest room payments offset the couple&apos;s buyout obligation. No double-dipping &mdash; BL commission is built into buyout sell price only.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-amber-50 border-l-4 border-amber-600 p-8">
              <p className="text-sm text-stone-900 leading-relaxed">
                <strong>No retainers, no monthly fees.</strong> The spread between sell and buy prices is BaliLove&apos;s 15% commission.
                No cost to the venue unless we deliver revenue.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* COMPETITOR COMPARISON — NEW SECTION */}
        <motion.section id="competitors" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Competitive Position</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              Cheapest option.<br /><span className="font-normal text-amber-600">Best value.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-12">
              Compared to our top-selling venues using real wishlist pricing.
              At $35K, Oshom is the most affordable option &mdash; with the best guest experience.
            </motion.p>

            <motion.div variants={fadeUp} className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-amber-600 bg-stone-50">
                    <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Metric</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600 bg-amber-50">Oshom @ $35K</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-stone-400">Villa Vedas</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-stone-400">Bali Beach Glamping</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">Couple total (AUD)</td>
                    <td className="p-3 text-right font-mono font-bold bg-amber-50">$35,315</td>
                    <td className="p-3 text-right font-mono text-stone-400">$38,804</td>
                    <td className="p-3 text-right font-mono text-stone-400">$35,793</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">Couple venue OOP (AUD)</td>
                    <td className="p-3 text-right font-mono font-bold bg-amber-50">$19,161</td>
                    <td className="p-3 text-right font-mono text-stone-400">$22,631</td>
                    <td className="p-3 text-right font-mono text-stone-400">$19,620</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">Rooms/units on-site</td>
                    <td className="p-3 text-right font-mono font-bold bg-amber-50">18 rooms</td>
                    <td className="p-3 text-right font-mono text-stone-400">7 bedrooms</td>
                    <td className="p-3 text-right font-mono text-stone-400">50 tents</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">All guests on-site</td>
                    <td className="p-3 text-right font-mono font-bold text-amber-600 bg-amber-50">Yes</td>
                    <td className="p-3 text-right font-mono text-stone-400">No (max 16)</td>
                    <td className="p-3 text-right font-mono text-stone-400">Yes</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">In-house kitchen</td>
                    <td className="p-3 text-right font-mono font-bold text-amber-600 bg-amber-50">Yes</td>
                    <td className="p-3 text-right font-mono text-stone-400">No (external)</td>
                    <td className="p-3 text-right font-mono text-stone-400">No (external)</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">Min F&amp;B spend</td>
                    <td className="p-3 text-right font-mono font-bold text-amber-600 bg-amber-50">None</td>
                    <td className="p-3 text-right font-mono text-stone-400">40M IDR</td>
                    <td className="p-3 text-right font-mono text-stone-400">60&ndash;90M IDR</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-amber-50 border-l-4 border-amber-600 p-8">
              <p className="text-sm text-stone-900 leading-relaxed">
                <strong>Oshom at $35K is the cheapest option with the best proposition.</strong> Full private hotel,
                in-house kitchen, no minimum spend &mdash; $3,500 cheaper than Vedas (our #1 venue with 73 bookings in 2026)
                and $500 cheaper than BBG. Premium F&amp;B included at this price.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* HOW THE BUYOUT WORKS */}
        <motion.section id="buyout-model" className="py-24 px-6 bg-stone-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">The Financial Model</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              How the buyout<br /><span className="font-normal text-amber-600">actually works.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-12">
              The couple commits to two things: a venue buyout (event fee included) and F&amp;B.
              Guest room bookings offset the couple&apos;s buyout cost &mdash; and Oshom carries zero risk.
            </motion.p>

            <motion.div variants={stagger} className="space-y-6 mb-12">
              {[
                { num: '01', title: 'Couple Commits', desc: 'The couple guarantees the venue buyout (170M for 2 nights, event fee rolled in) and F&B (171M for 80 guests at Premium tier). Locked in — Oshom is guaranteed this revenue regardless.' },
                { num: '02', title: '25% Deposit Locks the Date', desc: 'Couple pays 25% of the total upfront (~85M) to secure the date. This reduces the upfront decision barrier while giving Oshom confirmed cash flow 12–18 months before the wedding.' },
                { num: '03', title: 'Guest Room Bookings Open', desc: 'Bali Love sets up guest room bookings through the platform. Guests book and pay for their rooms directly — collected by Bali Love on behalf of the couple.' },
                { num: '04', title: 'Room Revenue Offsets Buyout', desc: 'As guests book rooms (3.5M/night), that revenue offsets the couple\'s buyout balance. 17 rooms × 2 nights = 119M offset against the 170M buyout.' },
                { num: '05', title: 'Settlement', desc: 'The couple\'s remaining out-of-pocket for venue is only ~51M after guest rooms fill. Total couple cost including F&B and BL vendor services = $35,315 AUD. Oshom receives guaranteed revenue regardless.' },
              ].map((step) => (
                <motion.div key={step.num} variants={fadeUp} className="bg-white p-6 flex gap-6">
                  <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 tracking-wider h-fit">{step.num}</span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-2">{step.title}</h3>
                    <p className="text-xs text-stone-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Worked Example */}
            <motion.div variants={fadeUp} className="bg-amber-50 border-l-4 border-amber-600 p-8">
              <p className="text-[11px] tracking-[0.15em] uppercase text-amber-600 font-bold mb-4">Worked Example &mdash; 2-Night Premium ($35K)</p>
              <div className="space-y-3 text-sm text-stone-900 leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/60 p-4">
                    <p className="text-[11px] tracking-wider uppercase text-amber-600 font-bold mb-2">Couple Commits</p>
                    <p className="font-mono text-xs">Venue buyout (incl event fee): <strong>170,035,000 IDR</strong></p>
                    <p className="font-mono text-xs">F&amp;B Premium (80 pax): <strong>170,824,000 IDR</strong></p>
                    <p className="font-mono text-xs mt-2 text-stone-500">25% deposit upfront: ~85,215,000 IDR</p>
                  </div>
                  <div className="bg-white/60 p-4">
                    <p className="text-[11px] tracking-wider uppercase text-amber-600 font-bold mb-2">Guest Rooms Fill</p>
                    <p className="font-mono text-xs">17 rooms &times; 3,500,000/night &times; 2 nights</p>
                    <p className="font-mono text-xs">= <strong>119,000,000 IDR</strong> in room revenue</p>
                    <p className="font-mono text-xs mt-2 text-stone-500">Offsets 70% of buyout &rarr; couple OOP = 182M IDR ($17K AUD)</p>
                  </div>
                </div>
                <p className="text-xs text-stone-600 pt-2">
                  <strong>Result:</strong> Couple total = $35,315 AUD including all BL vendor services (Premium F&amp;B).
                  Oshom receives 289,730,000 IDR (buy) per wedding &mdash; that&apos;s <strong>144.9M per night, or 3.3&times; your normal nightly revenue.</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* PER WEDDING TOTAL */}
        <motion.section className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Per Wedding</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-8 leading-tight">
              Total revenue<br /><span className="font-normal text-amber-600">per wedding.</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-amber-600 bg-stone-50">
                    <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Component</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">2-Night Sell</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">2-Night Buy</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">3-Night Sell</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">3-Night Buy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">Buyout (event fee rolled in)</td><td className="p-3 text-right font-mono">170,035,000</td><td className="p-3 text-right font-mono">144,530,000</td><td className="p-3 text-right font-mono">255,053,000</td><td className="p-3 text-right font-mono">216,798,000</td></tr>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">F&amp;B Premium (80 guests)</td><td className="p-3 text-right font-mono">170,824,000</td><td className="p-3 text-right font-mono">145,200,000</td><td className="p-3 text-right font-mono">170,824,000</td><td className="p-3 text-right font-mono">145,200,000</td></tr>
                  <tr className="border-b-2 border-amber-600 font-bold bg-white"><td className="p-3">Total (through BL)</td><td className="p-3 text-right font-mono">340,859,000</td><td className="p-3 text-right font-mono">289,730,000</td><td className="p-3 text-right font-mono">425,877,000</td><td className="p-3 text-right font-mono">361,998,000</td></tr>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400"><td className="p-3">Guest rooms (offset couple&apos;s buyout)</td><td className="p-3 text-right font-mono">119,000,000</td><td className="p-3 text-right font-mono">&mdash;</td><td className="p-3 text-right font-mono">178,500,000</td><td className="p-3 text-right font-mono">&mdash;</td></tr>
                </tbody>
              </table>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <BigNumberCard number="$35,315" label="AUD total couple cost (2-night Premium F&amp;B, 80 guests)" />
              <BigNumberCard number="289.7M" label="IDR Oshom receives per 2-night wedding (buy)" />
            </motion.div>
          </div>
        </motion.section>

        {/* ANNUAL REVENUE — Updated to $35K scenario */}
        <motion.section id="revenue" className="py-24 px-6 bg-amber-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Annual Revenue</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              50 weddings.<br /><span className="font-normal text-amber-600">+58% revenue.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-8">
              Based on 33 two-night and 17 three-night weddings at $35K.
              Conservative projection: 70% Standard F&amp;B, 30% Premium. Revenue increases as more couples choose Premium.
            </motion.p>
            <motion.div variants={fadeUp} className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-amber-600 bg-white">
                    <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Component</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">Annual (Oshom keeps)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">Buyout (33 &times; 2-night + 17 &times; 3-night)</td><td className="p-3 text-right font-mono">8,455,000,000</td></tr>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">F&amp;B (50 &times; ~121M avg buy)</td><td className="p-3 text-right font-mono">6,074,000,000</td></tr>
                  <tr className="border-b-2 border-amber-600 font-bold bg-white"><td className="p-3">Total to Oshom (through BL)</td><td className="p-3 text-right font-mono">14,529,000,000</td></tr>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">+ Guest in-resort spend (non-wedding days)</td><td className="p-3 text-right font-mono">~1,173,000,000</td></tr>
                  <tr className="border-b border-stone-200 bg-white"><td className="p-3">+ Guest bar spend on non-wedding days</td><td className="p-3 text-right font-mono">~525,000,000</td></tr>
                  <tr className="border-b-2 border-amber-600 font-bold bg-amber-50"><td className="p-3">Total incl. direct Oshom revenue</td><td className="p-3 text-right font-mono text-lg">~16,227,000,000</td></tr>
                </tbody>
              </table>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <BigNumberCard number="+9.4B" label="IDR net revenue increase after displacement" />
              <BigNumberCard number="+58%" label="Increase on 2026 budgeted room revenue" />
              <BigNumberCard number="25.5B" label="IDR total combined revenue vs 16.1B budget" />
            </motion.div>
          </div>
        </motion.section>

        {/* YIELD ANALYSIS — Fixed ADR */}
        <motion.section id="yield" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Yield Analysis</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              3.3x your<br /><span className="font-normal text-amber-600">normal yield.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-12">
              Every wedding night earns 3.3 times what a normal hotel night generates.
              Here&apos;s how your current revenue per night compares to wedding days.
            </motion.p>

            {/* Current yield stats */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-base font-bold uppercase tracking-wider text-stone-900 mb-4">Your Current Numbers</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-amber-600 bg-stone-50">
                      <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-600">Metric</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">2025 Actual</th>
                      <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-600">2026 Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-200"><td className="p-3">Rooms</td><td className="p-3 text-right font-mono">18</td><td className="p-3 text-right font-mono">18</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">Occupancy</td><td className="p-3 text-right font-mono">47.4%</td><td className="p-3 text-right font-mono">61.0%</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">ADR (avg daily rate per room)</td><td className="p-3 text-right font-mono">3,309,000 IDR</td><td className="p-3 text-right font-mono">4,028,000 IDR</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">Revenue per night (all rooms)</td><td className="p-3 text-right font-mono">25,935,000 IDR</td><td className="p-3 text-right font-mono">44,109,000 IDR</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">Room revenue (annual)</td><td className="p-3 text-right font-mono">9,466,000,000 IDR</td><td className="p-3 text-right font-mono">16,099,000,000 IDR</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Yield comparison bars */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-base font-bold uppercase tracking-wider text-stone-900 mb-4">Revenue Per Night (All Rooms)</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs uppercase tracking-wider text-stone-500 mb-1">
                    <span>Normal night (2025 actual)</span><span className="font-mono">25.9M IDR</span>
                  </div>
                  <div className="h-10 bg-stone-100 overflow-hidden">
                    <div className="bg-stone-300 h-full flex items-center px-3 text-stone-600 text-[11px] font-bold" style={{ width: '20%' }}>25.9M</div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs uppercase tracking-wider text-stone-500 mb-1">
                    <span>Normal night (2026 budget)</span><span className="font-mono">44.1M IDR</span>
                  </div>
                  <div className="h-10 bg-stone-100 overflow-hidden">
                    <div className="bg-stone-400 h-full flex items-center px-3 text-white text-[11px] font-bold" style={{ width: '35%' }}>44.1M</div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs uppercase tracking-wider text-amber-600 mb-1">
                    <span>Wedding night ($35K Premium, buy)</span><span className="font-mono font-bold">144.9M IDR</span>
                  </div>
                  <div className="h-10 bg-amber-50 overflow-hidden">
                    <div className="bg-amber-600 h-full flex items-center px-3 text-white text-[11px] font-bold" style={{ width: '100%' }}>144.9M &mdash; 3.3x budget, 5.6x 2025</div>
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
                    <tr className="border-b border-stone-200"><td className="p-3">Current budgeted revenue</td><td className="p-3 text-right font-mono">16,099,000,000</td></tr>
                    <tr className="border-b border-stone-200 text-stone-400"><td className="p-3">Displaced hotel revenue on wedding days (117 days &times; 44.1M)</td><td className="p-3 text-right font-mono">-5,161,000,000</td></tr>
                    <tr className="border-b border-stone-200"><td className="p-3">Remaining normal hotel revenue</td><td className="p-3 text-right font-mono">10,938,000,000</td></tr>
                    <tr className="border-b border-stone-200 text-amber-700 font-bold"><td className="p-3">Wedding revenue (Oshom keeps)</td><td className="p-3 text-right font-mono">+14,529,000,000</td></tr>
                    <tr className="border-b-2 border-amber-600 font-bold bg-amber-50"><td className="p-3">New Annual Total</td><td className="p-3 text-right font-mono text-lg">25,467,000,000</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BigNumberCard number="3.3x" label="Wedding yield vs normal nightly revenue" />
              <BigNumberCard number="32%" label="Of calendar days used for weddings" />
              <BigNumberCard number="57%" label="Of total revenue from those wedding nights" />
            </motion.div>

            <motion.div variants={fadeUp} className="bg-amber-50 border-l-4 border-amber-600 p-8 mt-8">
              <p className="text-sm text-stone-900 leading-relaxed">
                <strong>Weddings use 32% of your calendar but generate 57% of your total revenue.</strong> The remaining 68% of
                your calendar still runs as a normal hotel earning ~10.9 billion IDR. This isn&apos;t a pivot &mdash;
                it&apos;s an overlay that adds 58% to your revenue without changing how you operate the other 248 days.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CALENDAR IMPACT */}
        <motion.section id="calendar" className="py-24 px-6 bg-stone-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-4">Calendar Impact</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-stone-900 mb-6 leading-tight">
              4 weddings a month.<br /><span className="font-normal text-amber-600">Mostly dry season.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-stone-500 leading-relaxed max-w-xl mb-12">
              Weddings concentrate in April&ndash;October (Bali&apos;s dry season), with lighter bookings November&ndash;March.
              That means most wedding days fall when your occupancy is already weakest &mdash; and your wet season stays largely free for normal hotel ops.
            </motion.p>

            {/* Seasonal split */}
            <motion.div variants={fadeUp} className="mb-8">
              <div className="text-xs uppercase tracking-wider text-stone-500 mb-2">Wedding Season Distribution</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-amber-50 p-5 border-l-3 border-amber-600">
                  <div className="text-[11px] tracking-wider uppercase text-amber-600 font-bold mb-1">Peak: April &ndash; October</div>
                  <div className="text-2xl font-bold text-stone-900 mb-1">5&ndash;6 weddings/month</div>
                  <div className="text-xs text-stone-500">~35&ndash;40 weddings &bull; ~80&ndash;95 wedding days</div>
                </div>
                <div className="bg-stone-50 p-5 border-l-3 border-stone-300">
                  <div className="text-[11px] tracking-wider uppercase text-stone-500 font-bold mb-1">Off-peak: November &ndash; March</div>
                  <div className="text-2xl font-bold text-stone-900 mb-1">1&ndash;2 weddings/month</div>
                  <div className="text-xs text-stone-500">~10&ndash;15 weddings &bull; ~25&ndash;35 wedding days</div>
                </div>
              </div>
            </motion.div>

            {/* Calendar bar */}
            <motion.div variants={fadeUp} className="mb-8">
              <div className="flex justify-between text-xs uppercase tracking-wider text-stone-500 mb-2">
                <span>Calendar Days</span><span>365 days</span>
              </div>
              <div className="h-10 bg-stone-100 flex overflow-hidden">
                <div className="bg-amber-600 h-full flex items-center px-3 text-white text-xs font-bold" style={{ width: '32%' }}>~117 wedding days</div>
                <div className="h-full flex items-center px-3 text-stone-400 text-xs flex-1">~248 days normal hotel</div>
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
                <span className="text-white text-[11px] font-bold">With weddings: 100% (all 18 rooms)</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-amber-50 border-l-4 border-amber-600 p-8">
              <p className="text-sm text-stone-900 leading-relaxed">
                <strong>Weddings fill your weakest months.</strong> Your 2025 data shows April at 34.4% occupancy,
                March at 35.3%, June at 41.0%. These are prime wedding months. Instead of
                hoping walk-in tourists fill those rooms, you have confirmed full-property bookings with deposits already collected.
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
              Wedding couples commit and pay months in advance &mdash; venue first, then catering.
            </motion.p>

            {/* Two payment streams */}
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeUp} className="bg-stone-50 p-6">
                <p className="text-[11px] tracking-wider uppercase text-amber-600 font-bold mb-4">Venue Buyout</p>
                <div className="space-y-3">
                  {[
                    { when: 'On booking (12–18 months out)', pct: '25%', note: 'Deposit locks the date' },
                    { when: '12 months before', pct: '25%', note: 'Second instalment' },
                    { when: '30 days before', pct: '50%', note: 'Final balance' },
                  ].map((item) => (
                    <div key={item.when} className="flex items-baseline justify-between border-b border-stone-200 pb-2">
                      <div>
                        <div className="text-xs text-stone-700">{item.when}</div>
                        <div className="text-[11px] text-stone-400">{item.note}</div>
                      </div>
                      <div className="text-lg font-bold text-stone-900 font-mono">{item.pct}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-stone-50 p-6">
                <p className="text-[11px] tracking-wider uppercase text-amber-600 font-bold mb-4">Food &amp; Beverage</p>
                <div className="space-y-3">
                  {[
                    { when: '12 months before', pct: '25%', note: 'Catering deposit' },
                    { when: '30 days before', pct: '75%', note: 'Final balance' },
                  ].map((item) => (
                    <div key={item.when} className="flex items-baseline justify-between border-b border-stone-200 pb-2">
                      <div>
                        <div className="text-xs text-stone-700">{item.when}</div>
                        <div className="text-[11px] text-stone-400">{item.note}</div>
                      </div>
                      <div className="text-lg font-bold text-stone-900 font-mono">{item.pct}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-stone-400 mt-4">F&amp;B payments come later &mdash; venue commitment comes first.</p>
              </motion.div>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BigNumberCard number="2.1B" label="IDR venue deposits on booking (12–18 months before)" />
              <BigNumberCard number="5.7B" label="IDR received by the 12-month mark" />
              <BigNumberCard number="14.5B" label="IDR total annual revenue (50 weddings)" />
            </motion.div>

            <motion.div variants={fadeUp} className="bg-amber-50 border-l-4 border-amber-600 p-8 mt-8">
              <p className="text-sm text-stone-900 leading-relaxed">
                <strong>Guaranteed working capital.</strong> Billions of IDR sitting in your bank account
                well before any guest arrives. Use it to improve the property, fund marketing,
                or smooth out seasonal cash flow dips.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* VOLUME STRATEGY — NEW SECTION */}
        <motion.section id="volume" className="py-24 px-6 bg-stone-900 text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-6xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-amber-300 mb-4">Volume Strategy</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-6 leading-tight">
              20 weddings booked<br /><span className="font-normal text-amber-300">by end of May.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-white/70 leading-relaxed max-w-xl mb-12">
              Give us control of pricing and the sales process, and we&apos;ll fill the calendar fast.
              Our team has 300+ weddings of data &mdash; we know exactly who&apos;s buying, how to overcome
              every objection, and we will work up total revenue over time.
            </motion.p>

            {/* 20 @ $35K vs 10 @ $43K */}
            <motion.div variants={fadeUp} className="overflow-x-auto mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-amber-600">
                    <th className="text-left p-3 text-[11px] tracking-wider uppercase text-amber-300">Metric</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-amber-300 bg-white/10">20 weddings @ $35K</th>
                    <th className="text-right p-3 text-[11px] tracking-wider uppercase text-white/40">10 weddings @ $43K</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10"><td className="p-3 text-white/70">Wedding days used</td><td className="p-3 text-right font-mono bg-white/5">47 (13%)</td><td className="p-3 text-right font-mono text-white/40">23 (6%)</td></tr>
                  <tr className="border-b border-white/10"><td className="p-3 text-white/70">Oshom revenue (through BL)</td><td className="p-3 text-right font-mono bg-white/5">5,826,000,000</td><td className="p-3 text-right font-mono text-white/40">3,619,000,000</td></tr>
                  <tr className="border-b border-white/10"><td className="p-3 text-white/70">Net incremental</td><td className="p-3 text-right font-mono font-bold bg-white/5">+3,753,000,000</td><td className="p-3 text-right font-mono text-white/40">+2,604,000,000</td></tr>
                  <tr className="border-b border-white/10"><td className="p-3 text-white/70">Guest in-resort spend</td><td className="p-3 text-right font-mono bg-white/5">~473,000,000</td><td className="p-3 text-right font-mono text-white/40">~228,000,000</td></tr>
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/10 border-l-4 border-amber-600 p-8 mb-12">
              <p className="text-sm text-white leading-relaxed">
                <strong className="text-amber-300">$35K at 20 weddings delivers 44% more net revenue than $43K at 10 weddings</strong> &mdash;
                using only 13% of the calendar. 70% of our leads budget $30&ndash;35K AUD. At $35K we capture
                the mass market. At $43K we only reach the top 30%.
              </p>
            </motion.div>

            {/* Growth Path */}
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { phase: 'Launch', timeline: 'Now → May 2026', target: '20 bookings', strategy: '$35K base — prove the model, fill calendar fast' },
                { phase: 'Scale', timeline: 'Jun → Dec 2026', target: '35–40 total', strategy: '$35K off-peak, $40K peak — season-based pricing, F&B upsells' },
                { phase: 'Optimise', timeline: '2027+', target: '50+ per year', strategy: 'Dynamic pricing — full revenue optimisation with real data' },
              ].map((item) => (
                <motion.div key={item.phase} variants={fadeUp} className="bg-white/5 p-6">
                  <div className="text-[11px] tracking-wider uppercase text-amber-300 mb-2">{item.phase}</div>
                  <div className="text-lg font-bold text-white mb-1">{item.target}</div>
                  <div className="text-xs text-white/50 mb-3">{item.timeline}</div>
                  <div className="text-xs text-white/70 leading-relaxed">{item.strategy}</div>
                </motion.div>
              ))}
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
                { title: '+58% Revenue', desc: '9.4 billion IDR in net incremental revenue on top of normal hotel operations at $35K pricing. Scales to +75% with seasonal peak pricing.' },
                { title: '100% Occupancy', desc: 'Every wedding fills all 18 rooms, guaranteed. Compare that to your current 47–61% occupancy from walk-in tourists.' },
                { title: 'Advance Cash Flow', desc: 'Billions in deposits received 12–18 months before weddings. Guaranteed working capital vs uncertain hotel bookings.' },
                { title: 'Fill Weak Months', desc: 'Weddings book into your lowest-occupancy months first. November (29.8%), April (34.4%), March (35.3%) — exactly when you need revenue most.' },
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
