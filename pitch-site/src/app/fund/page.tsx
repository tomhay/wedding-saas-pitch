'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FUND_PASSWORD = 'balilove2026';

const navigation = [
  { id: 'opportunity', label: 'Opportunity' },
  { id: 'operator', label: 'Track Record' },
  { id: 'model', label: 'Unit Economics' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'vision', label: 'Vision' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'structure', label: 'Structure' },
  { id: 'terms', label: 'Fund Terms' },
  { id: 'returns', label: 'Returns' },
  { id: 'market', label: 'Market' },
  { id: 'team', label: 'Team' },
  { id: 'risks', label: 'Risks' },
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
      <div className="text-4xl md:text-5xl font-bold text-red mb-2 font-heading">{number}</div>
      <div className="text-xs tracking-widest uppercase text-dark-red/60">{label}</div>
    </motion.div>
  );
}

function MetricRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`flex justify-between items-center py-3 border-b border-dark-red/10 ${highlight ? 'font-bold' : ''}`}>
      <span className="text-sm text-dark-red/70">{label}</span>
      <span className={`text-sm font-heading ${highlight ? 'text-red' : 'text-dark-red'}`}>{value}</span>
    </div>
  );
}

function PropertyCard({ name, price, status, weddings, ebitda, description }: {
  name: string; price: string; status: string; weddings: string; ebitda: string; description: string;
}) {
  return (
    <motion.div variants={fadeUp} className="bg-white p-8 border-l-4 border-red">
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-lg font-bold font-heading uppercase tracking-wide text-dark-red">{name}</h4>
        <span className="text-xs bg-pale-pink text-dark-red px-3 py-1 uppercase tracking-wider">{status}</span>
      </div>
      <p className="text-sm text-dark-red/60 mb-6">{description}</p>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-1">Price</div>
          <div className="text-sm font-bold font-heading text-dark-red">{price}</div>
        </div>
        <div>
          <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-1">Weddings/yr</div>
          <div className="text-sm font-bold font-heading text-dark-red">{weddings}</div>
        </div>
        <div>
          <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-1">EBITDA</div>
          <div className="text-sm font-bold font-heading text-red">{ebitda}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SingaporeFundPitch() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem('fund-auth');
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
    if (password === FUND_PASSWORD) {
      sessionStorage.setItem('fund-auth', 'true');
      setIsAuthenticated(true);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-dark-red flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <h1 className="font-heading font-bold text-white text-3xl mb-2 uppercase tracking-wider">Bali Love Property Fund</h1>
          <p className="text-white/50 text-sm mb-8">Investor materials &mdash; confidential</p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              className="w-full bg-white/10 text-white px-4 py-3 text-sm border border-white/20 focus:border-red outline-none mb-4"
              placeholder="Password"
            />
            {error && <p className="text-red-red text-xs mb-4">Incorrect password</p>}
            <button type="submit" className="w-full bg-red text-white py-3 text-sm uppercase tracking-widest hover:bg-red/80 transition-colors">
              View Deck
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-72 bg-white border-r border-dark-red/10 flex-col z-50 hidden lg:flex">
        <div className="p-8 border-b border-dark-red/10">
          <div className="text-[10px] tracking-[0.2em] uppercase text-dark-red/40 mb-3">Investment Opportunity</div>
          <div className="font-heading text-sm font-bold tracking-wider uppercase text-dark-red">
            Bali Love<br />Property Fund
          </div>
        </div>
        <nav className="flex-1 p-8 overflow-y-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-dark-red/40 mb-4">Contents</p>
          <ul className="space-y-4">
            {navigation.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`text-[11px] tracking-wider uppercase transition-colors ${
                    activeSection === id ? 'text-red font-bold' : 'text-dark-red/70 hover:text-red'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-6 border-t border-dark-red/10">
          <a href="mailto:tom@bali.love" className="block bg-red text-white text-center py-3 text-[11px] tracking-[0.15em] uppercase hover:bg-dark-red transition-colors">
            Express Interest
          </a>
        </div>
        <div className="px-6 pb-6 text-[11px] text-dark-red/50 leading-relaxed">
          <p><strong className="text-dark-red">Tom Hay</strong><br />Founder, Bali Love<br /><a href="mailto:tom@bali.love" className="text-red">tom@bali.love</a></p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72">

        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 text-white relative overflow-hidden bg-dark-red">
          <div className="absolute inset-0 bg-dark-red/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-red/80 via-transparent to-dark-red/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80"
            alt="Bali tropical venue"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <motion.div className="relative z-20 max-w-4xl" initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-pale-pink mb-6">Investment Opportunity</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold uppercase tracking-wider mb-8 leading-tight font-heading">
              Bali Love<br />Property Fund
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-4 font-secondary">
              268 weddings booked. Growing 45% year-on-year.<br />
              <span className="text-pale-pink font-bold">Every single one books at your venues.</span>
            </motion.p>
            <motion.p variants={fadeUp} className="text-sm text-white/50 max-w-xl mx-auto mb-12 font-secondary">
              Own the properties. Asia&apos;s largest destination wedding operator books exclusively through them. 100% of pipeline, 100% of venue revenue &mdash; yours.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pale-pink font-heading">268</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Weddings Booked</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pale-pink font-heading">25-38%</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Property Yield</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pale-pink font-heading">39%</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Blended Portfolio</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pale-pink font-heading">7yr</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Operator Track Record</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* THE OPPORTUNITY */}
        <motion.section id="opportunity" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">The Opportunity</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              Own The Venue.<br /><span className="font-normal text-red">Earn The Yield.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-dark-red/60 leading-relaxed max-w-2xl mb-12 font-secondary">
              Bali Love currently sends 200+ weddings per year to third-party venues, paying owners 30-40% of couple spend. Post-acquisition, BaliLove transitions to booking <strong>exclusively at owned venues</strong>. Every couple in BL&apos;s pipeline &mdash; growing at 45% YoY &mdash; flows through your properties. You own the real estate. You capture 100% of the venue revenue.
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeUp} className="bg-pale-pink/30 p-8">
                <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-4">What Venue Owners Earn Today</div>
                <div className="text-4xl font-bold text-dark-red font-heading mb-2">$4-5M</div>
                <div className="text-sm text-dark-red/60">Per Year from BL Weddings</div>
                <div className="mt-4 text-xs text-dark-red/40 font-secondary">BL pays 30-40% of $73K per wedding<br />to venue owners we don&apos;t control<br />That&apos;s the yield you capture</div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-red/5 p-8 border-2 border-red">
                <div className="text-xs tracking-widest uppercase text-red mb-4">Fund-Owned Venue Returns</div>
                <div className="text-4xl font-bold text-red font-heading mb-2">25-38%</div>
                <div className="text-sm text-dark-red/60">Cash-on-Cash Yield</div>
                <div className="mt-4 text-xs text-dark-red/40 font-secondary">Property EBITDA flows to fund investors<br />BL operates under management agreement<br />Your return = property income, not equity in BL</div>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard number="$73K" label="Avg Wedding Spend" />
              <StatCard number="200+" label="BL Weddings/Year" />
              <StatCard number="25-38%" label="Property Yield" />
              <StatCard number="268" label="Weddings Booked" />
            </motion.div>
          </div>
        </motion.section>

        {/* THE OPERATOR */}
        <motion.section id="operator" className="py-24 px-6 bg-pale-pink/20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">The Operator</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              BaliLove Is<br /><span className="font-normal text-red">The Machine</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-dark-red/60 leading-relaxed max-w-2xl mb-12 font-secondary">
              You&apos;re not investing in BaliLove the company &mdash; you&apos;re investing in properties that BaliLove guarantees to fill. BL is a 7-year-old operating company with 300+ completed weddings, 64 staff, and $13M in projected 2026 revenue. These metrics matter because they prove demand for the venues you&apos;ll own. BL is the contracted operator &mdash; its scale is your guarantee of occupancy.
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red font-heading">$5.4M</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mt-2">2025 Revenue (AUD)</div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red font-heading">$13M</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mt-2">2026 Projected</div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red font-heading">45%</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mt-2">YoY Growth Rate</div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red font-heading">300+</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mt-2">Weddings Completed</div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red font-heading">268</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mt-2">Booked Pipeline</div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red font-heading">64</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mt-2">Team Members</div>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white p-8 border-l-4 border-red">
              <div className="text-xs tracking-widest uppercase text-red mb-3">Growth Trajectory</div>
              <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                BaliLove is growing at 45% year-on-year and will transition to booking <strong>exclusively at owned venues</strong>. 100% of BL&apos;s couple pipeline &mdash; currently 268 booked weddings and growing &mdash; flows through fund-owned properties. No leakage to third-party venues. BL&apos;s growth is your revenue growth.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* BUSINESS SUMMARY — Revenue Stack */}
        <motion.section className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-4xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">Business Summary</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              How We<br /><span className="font-normal text-red">Make Money</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-dark-red/60 leading-relaxed max-w-2xl mb-12 font-secondary">
              Every couple generates revenue across four streams. Today we capture three. Venue ownership unlocks the fourth &mdash; and doubles gross profit per wedding.
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-4 gap-0 mb-8">
              {/* Pillar 1 */}
              <div className="bg-white border border-dark-red/10 p-6 relative">
                <div className="text-[10px] tracking-[0.15em] uppercase text-dark-red/40 mb-3">Current</div>
                <h4 className="font-heading font-bold text-dark-red text-base uppercase tracking-wide mb-4">Wedding</h4>
                <div className="space-y-1 mb-6">
                  <p className="text-xs font-bold text-dark-red/80">Wedding Planning</p>
                  <p className="text-xs text-dark-red/50">Wedding Coordination</p>
                  <p className="text-xs text-dark-red/50">Styling</p>
                  <p className="text-xs text-dark-red/50">Content Production</p>
                  <p className="text-xs text-dark-red/50">Vendor Booking</p>
                </div>
                <div className="pt-4 border-t border-dark-red/10">
                  <div className="text-xs text-dark-red/40">Ave. gross profit</div>
                  <div className="text-lg font-bold font-heading text-dark-red">$11,365</div>
                </div>
                <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 bg-dark-red/10 items-center justify-center text-dark-red/40 text-xs font-bold">&rarr;</div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white border border-dark-red/10 p-6 relative">
                <div className="text-[10px] tracking-[0.15em] uppercase text-dark-red/40 mb-3">Current</div>
                <h4 className="font-heading font-bold text-dark-red text-base uppercase tracking-wide mb-4">Additional Events</h4>
                <div className="space-y-1 mb-6">
                  <p className="text-xs font-bold text-dark-red/80">Event Planning</p>
                  <p className="text-xs text-dark-red/50">Bucks</p>
                  <p className="text-xs text-dark-red/50">Hens</p>
                  <p className="text-xs text-dark-red/50">Rehearsal Dinners</p>
                  <p className="text-xs text-dark-red/50">Recovery Days</p>
                </div>
                <div className="pt-4 border-t border-dark-red/10">
                  <div className="text-xs text-dark-red/40">Ave. gross profit</div>
                  <div className="text-lg font-bold font-heading text-dark-red">$1,392</div>
                </div>
                <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 bg-dark-red/10 items-center justify-center text-dark-red/40 text-xs font-bold">+</div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white border border-dark-red/10 p-6 relative">
                <div className="text-[10px] tracking-[0.15em] uppercase text-sky-blue/80 mb-3">In Development</div>
                <h4 className="font-heading font-bold text-dark-red text-base uppercase tracking-wide mb-4">Guests</h4>
                <div className="space-y-1 mb-6">
                  <p className="text-xs font-bold text-dark-red/80">Guest Services</p>
                  <p className="text-xs text-dark-red/50">Accommodation</p>
                  <p className="text-xs text-dark-red/50">Tours</p>
                  <p className="text-xs text-dark-red/50">Activities</p>
                  <p className="text-xs text-dark-red/50">Beauty &amp; Wellness</p>
                </div>
                <div className="pt-4 border-t border-dark-red/10">
                  <div className="text-xs text-dark-red/40">Gross profit</div>
                  <div className="text-lg font-bold font-heading text-dark-red">$2,130</div>
                </div>
                <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 bg-dark-red/10 items-center justify-center text-dark-red/40 text-xs font-bold">+</div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white border-2 border-red/30 p-6">
                <div className="text-[10px] tracking-[0.15em] uppercase text-red mb-3">Coming Soon</div>
                <h4 className="font-heading font-bold text-dark-red text-base uppercase tracking-wide mb-4">Owned Venue</h4>
                <div className="space-y-1 mb-6">
                  <p className="text-xs font-bold text-dark-red/80">Venue Fees</p>
                  <p className="text-xs text-dark-red/50">BL earns commissions from venues but misses out on the venue fees</p>
                  <p className="text-xs font-bold text-dark-red/80 mt-2">Food &amp; Beverage</p>
                </div>
                <div className="pt-4 border-t border-red/20">
                  <div className="text-xs text-dark-red/40">EBITDA</div>
                  <div className="text-lg font-bold font-heading text-red">$11,761</div>
                </div>
              </div>
            </motion.div>

            {/* Total */}
            <motion.div variants={fadeUp} className="bg-pale-pink/40 border-2 border-red p-6 flex flex-col md:flex-row items-center justify-between">
              <div className="text-sm text-dark-red/60 font-secondary mb-2 md:mb-0">
                Gross Profit Per Wedding (with owned venue)
              </div>
              <div className="text-4xl md:text-5xl font-bold text-red font-heading">$26,648</div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 text-center">
              <p className="text-[10px] tracking-[0.15em] uppercase text-dark-red/30">Powered by Bali.Love Proprietary Software</p>
            </motion.div>
          </div>
        </motion.section>

        {/* UNIT ECONOMICS */}
        <motion.section id="model" className="py-24 px-6 bg-pale-pink/20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">Unit Economics</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              Your Property.<br /><span className="font-normal text-red">Your Yield.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-dark-red/60 leading-relaxed max-w-2xl mb-12 font-secondary">
              The fund owns properties. BaliLove operates them under a long-term exclusive management agreement. All venue revenue flows to the fund entity (your investment). BL earns separately through its wedding planning commissions &mdash; paid by couples, not by the fund.
            </motion.p>

            <motion.div variants={fadeUp} className="bg-red/5 p-8 border-2 border-red mb-12">
              <div className="text-xs tracking-widest uppercase text-red mb-4">Example: Boutique Villa (Fund Acquisition)</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <MetricRow label="Your Investment (Property)" value="$920K" />
                  <MetricRow label="Venue Revenue to Fund" value="$1.01M/yr" />
                  <MetricRow label="Property Operating Costs" value="($485K)" />
                  <MetricRow label="Property EBITDA (Your Return)" value="$525K/yr" highlight />
                </div>
                <div>
                  <MetricRow label="Cash-on-Cash Yield" value="38%" highlight />
                  <MetricRow label="Weddings Per Year" value="60" />
                  <MetricRow label="EBITDA Margin" value="57%" />
                  <MetricRow label="Payback Period" value="~21 months" highlight />
                </div>
              </div>
              <div className="mt-4 text-xs text-dark-red/40 font-secondary">You own the villa. BL fills it with 60 weddings/year. Property EBITDA is yours.</div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-dark-red text-white p-8">
              <div className="text-xs tracking-widest uppercase text-pale-pink mb-4">The Structure</div>
              <p className="text-lg font-secondary leading-relaxed">
                <strong>You own the property.</strong> BaliLove is the exclusive operator under a long-term management agreement.
                Venue revenue flows to the fund. BL earns its planning fees separately from couples.
                Your return is pure property yield &mdash; not a share of BL&apos;s business.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* THE PIPELINE */}
        <motion.section id="pipeline" className="py-24 px-6 bg-pale-pink/20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">The Pipeline</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              Three Deals<br /><span className="font-normal text-red">In Progress</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-dark-red/60 leading-relaxed max-w-2xl mb-12 font-secondary">
              The fund has three properties at various stages of acquisition. Combined deployment of ~$7.7M generates projected $3.0M/year EBITDA &mdash; a 39% blended yield.
            </motion.p>

            <motion.div variants={stagger} className="space-y-6 mb-12">
              <PropertyCard
                name="Property A — Riverside Estate"
                price="$4.1M"
                status="DD Completing"
                weddings="72"
                ebitda="$1.55M"
                description="LOI signed. Due diligence completing. Lease-to-own structure — ~$750K upfront, 12-month grace period, purchase option at fixed price. Premium riverside estate, 72 weddings/year capacity."
              />
              <PropertyCard
                name="Property B — Boutique Villa (Leasehold)"
                price="$920K"
                status="Negotiating"
                weddings="60"
                ebitda="$525K"
                description="Terms agreed, final negotiation. Leasehold boutique villa ideal for elopements and micro-weddings. Template deal for the fund's acquisition strategy."
              />
              <PropertyCard
                name="Property C — Beachfront Estate (Freehold)"
                price="$6M"
                status="Early Stage"
                weddings="144"
                ebitda="$960K"
                description="Owner willing to sell. Freehold title. 12/month capacity. 386 historical events on record. BaliLove's highest-volume venue — 27% of annual couple pipeline."
              />
            </motion.div>

            {/* Portfolio Summary */}
            <motion.div variants={fadeUp} className="bg-white p-8 mb-6">
              <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-4">Combined Portfolio (Initial 3 Deals)</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red font-heading">$7.7M</div>
                  <div className="text-xs text-dark-red/50 mt-1">Total Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red font-heading">$3.0M</div>
                  <div className="text-xs text-dark-red/50 mt-1">Annual EBITDA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red font-heading">39%</div>
                  <div className="text-xs text-dark-red/50 mt-1">Blended Yield</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red font-heading">276</div>
                  <div className="text-xs text-dark-red/50 mt-1">Weddings/Year</div>
                </div>
              </div>
            </motion.div>

            {/* Beyond Initial Portfolio */}
            <motion.div variants={fadeUp} className="bg-sky-blue/20 p-8 border-l-4 border-sky-blue">
              <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-3">Beyond The Initial Portfolio</div>
              <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                Following a successful raise, we have a shortlist of additional venues to approach and will run an active acquisition campaign to build a deeper pipeline of targets. BaliLove operates across 50+ venues today &mdash; we know which owners are open to selling, which properties underperform their potential, and where our operating model creates the biggest uplift. The initial three deals are just the starting point.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* THE VISION */}
        <motion.section id="vision" className="py-24 px-6 bg-dark-red text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-pale-pink mb-4">The Vision</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-6 leading-tight font-heading">
              The Aman For<br /><span className="font-normal text-pale-pink">Destination Weddings</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-white/70 leading-relaxed max-w-2xl mb-12 font-secondary">
              We&apos;re not just buying properties. We&apos;re building a global portfolio of design-led wedding venues &mdash; powered by AI technology that fills them, operated by the team that&apos;s delivered 300+ weddings. Each property is a unique product, not a cookie-cutter hotel.
            </motion.p>

            <motion.div variants={stagger} className="space-y-8 mb-12">
              <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-8">
                <div className="text-xs tracking-widest uppercase text-pale-pink mb-3">Phase 1 — Now</div>
                <h4 className="font-bold text-white mb-2 font-heading text-sm uppercase tracking-wide">Acquire &amp; Refurbish</h4>
                <p className="text-sm text-white/60 font-secondary">
                  Buy existing properties with proven wedding demand. Refurbish with world-class design to elevate the product and increase yield. Speed to revenue &mdash; properties generate income from day one while renovation adds long-term value.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-8">
                <div className="text-xs tracking-widest uppercase text-pale-pink mb-3">Phase 2 — Future</div>
                <h4 className="font-bold text-white mb-2 font-heading text-sm uppercase tracking-wide">Ground-Up Builds</h4>
                <p className="text-sm text-white/60 font-secondary">
                  Purpose-built destination wedding venues designed from scratch. Longer timeline but total creative control &mdash; unique architectural products that command premium pricing and become destination brands in their own right.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/10 p-8">
              <div className="text-xs tracking-widest uppercase text-pale-pink mb-3">Design Partner</div>
              <h4 className="font-bold text-white mb-2 font-heading text-sm uppercase tracking-wide">YSG Studio</h4>
              <p className="text-sm text-white/60 font-secondary leading-relaxed">
                Australia&apos;s most awarded interior design studio. AD100 listed (European Architectural Digest&apos;s top 100 designers worldwide). Hospitality portfolio includes Hotel Collectionist. Co-founded by Yasmine Saleh Ghoniem, host of ABC&apos;s Grand Designs Transformations. YSG brings the design language that transforms a property into a destination.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 bg-white/10 border border-pale-pink/30 p-8">
              <div className="text-xs tracking-widest uppercase text-pale-pink mb-3">Why Now — The Demand Wave</div>
              <p className="text-sm text-white/60 font-secondary leading-relaxed mb-4">
                We are about to launch <strong className="text-white">free AI wedding planning tools</strong> alongside a full rebrand &mdash; the result of 18 months of preparation. We expect this to dramatically accelerate couple acquisition and dominate the destination wedding market online.
              </p>
              <p className="text-sm text-white/60 font-secondary leading-relaxed mb-4">
                <strong className="text-white">The biggest constraint on growth is not demand &mdash; it&apos;s venue access.</strong> We can channel couples into third-party venues, but that means paying 30-40% to owners we don&apos;t control. Acquiring and refurbishing venues now means we&apos;re ready to absorb the demand wave with owned properties &mdash; capturing 100% of venue revenue instead of giving it away.
              </p>
              <p className="text-sm text-white/60 font-secondary leading-relaxed">
                This is the window. The AI tools launch, demand surges, and every wedding that books into someone else&apos;s venue is yield that could have been yours.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 bg-white/5 border border-white/10 p-8">
              <div className="text-xs tracking-widest uppercase text-pale-pink mb-3">Technology Moat</div>
              <p className="text-sm text-white/60 font-secondary leading-relaxed">
                The AI platform handles lead capture, couple matching, automated coordination, and demand forecasting. Free planning tools bring couples to us at zero acquisition cost. This technology means our venues achieve occupancy rates that independent operators cannot match &mdash; and it scales across every property in the portfolio.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* THE STRATEGY */}
        <motion.section id="strategy" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">The Strategy</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              How The<br /><span className="font-normal text-red">Fund Works</span>
            </motion.h2>

            <motion.div variants={stagger} className="space-y-6 mb-12">
              <motion.div variants={fadeUp} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-red text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-dark-red mb-1 font-heading text-sm uppercase tracking-wide">Commit Capital</h4>
                  <p className="text-sm text-dark-red/60 font-secondary">Investors commit $500K+ to the fund. Capital is not called upfront &mdash; it&apos;s drawn down per deal as each acquisition closes.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-red text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-dark-red mb-1 font-heading text-sm uppercase tracking-wide">Acquire Venues</h4>
                  <p className="text-sm text-dark-red/60 font-secondary">Fund acquires wedding venues through Indonesian PT PMA entities (100% foreign-owned). Each property ring-fenced in its own sub-fund. BaliLove contracted as exclusive operator.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-red text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-dark-red mb-1 font-heading text-sm uppercase tracking-wide">Retain, Compound &amp; Lever</h4>
                  <p className="text-sm text-dark-red/60 font-secondary">Years 1-5: retain all earnings and reinvest into additional acquisitions (22% corporate tax, no withholding on reinvested capital). Properties are highly cash-flow positive, enabling leverage &mdash; your initial investment compounds into a larger portfolio than equity alone would buy. Year 5+: flexibility to switch to income distributions or continue compounding.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-red text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-dark-red mb-1 font-heading text-sm uppercase tracking-wide">Multiple Exit Paths</h4>
                  <p className="text-sm text-dark-red/60 font-secondary">(1) Continue compounding &mdash; switch to income distributions when investors prefer yield over growth. (2) Selective property sales at appreciated values if advantageous. (3) Portfolio sale to hospitality group or incoming capital (Elite Havens sold for $15M). (4) REIT conversion for liquidity. Flexibility is the point &mdash; strong cash flows create options.</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-sky-blue/20 p-8 border-l-4 border-sky-blue">
              <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-3">Why This Works</div>
              <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                Traditional property funds buy assets and <em>hope</em> for tenants. This fund buys venues for an operator that already has <strong>268 weddings booked</strong> and <strong>12-18 months forward visibility</strong>. The demand is proven before capital is deployed. Your investment is real estate &mdash; not equity in an operating company.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* FUND STRUCTURE */}
        <motion.section id="structure" className="py-24 px-6 bg-pale-pink/10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">Legal Structure</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              Clean Separation<br /><span className="font-normal text-red">Complete Protection</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-dark-red/60 leading-relaxed max-w-2xl mb-12 font-secondary">
              The fund and the operating company are entirely separate legal entities. You invest in properties, not in BaliLove. Each property is ring-fenced with no cross-liability.
            </motion.p>

            {/* Structure Diagram */}
            <motion.div variants={fadeUp} className="bg-white p-8 mb-8">
              <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-6 text-center">Fund Architecture</div>
              <div className="space-y-4 font-secondary text-sm">
                <div className="text-center py-3 bg-pale-pink/40 text-dark-red font-bold">
                  Investors (Max 10-15 Accredited)
                </div>
                <div className="text-center text-dark-red/30 text-lg">&darr;</div>
                <div className="text-center py-3 bg-sky-blue/30 text-dark-red font-bold">
                  Singapore Pooled Fund Vehicle
                </div>
                <div className="text-center text-dark-red/30 text-lg">&darr;</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="text-center py-3 bg-dark-red/5 text-dark-red text-xs">
                    <strong>Sub-Fund A</strong><br />PT PMA &rarr; Property A
                  </div>
                  <div className="text-center py-3 bg-dark-red/5 text-dark-red text-xs">
                    <strong>Sub-Fund B</strong><br />PT PMA &rarr; Property B
                  </div>
                  <div className="text-center py-3 bg-dark-red/5 text-dark-red text-xs">
                    <strong>Sub-Fund C</strong><br />PT PMA &rarr; Property C
                  </div>
                </div>
                <div className="text-center text-dark-red/30 text-lg">&uarr;</div>
                <div className="text-center py-3 border-2 border-red/30 text-dark-red">
                  <strong className="text-red">Bali Love</strong> (Separate Company, 100% Founder-Owned)<br />
                  <span className="text-xs text-dark-red/50">Contracted as exclusive operator &mdash; not owned by fund</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div variants={fadeUp} className="bg-white p-5">
                <div className="text-xs font-bold text-dark-red uppercase tracking-wider mb-2">Ring-Fenced</div>
                <p className="text-xs text-dark-red/50 font-secondary">Each property in its own sub-fund. One asset&apos;s performance doesn&apos;t affect others.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-5">
                <div className="text-xs font-bold text-dark-red uppercase tracking-wider mb-2">PT PMA Protected</div>
                <p className="text-xs text-dark-red/50 font-secondary">100% foreign-owned Indonesian entities. Standard structure for international Bali investors.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-5">
                <div className="text-xs font-bold text-dark-red uppercase tracking-wider mb-2">Operator Separation</div>
                <p className="text-xs text-dark-red/50 font-secondary">BL is contracted, not owned. Fund has no claim on BL; BL has no claim on fund assets.</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* FUND TERMS */}
        <motion.section id="terms" className="py-24 px-6 bg-dark-red text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-pale-pink mb-4">Fund Terms</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-12 leading-tight font-heading">
              Clean &amp; Aligned
            </motion.h2>

            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10">
              <div className="grid grid-cols-1 divide-y divide-white/10">
                <div className="flex justify-between items-center p-6">
                  <span className="text-sm text-white/60">Commitment Target</span>
                  <span className="text-sm font-bold text-pale-pink font-heading">$5-10M</span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <span className="text-sm text-white/60">Minimum Investment</span>
                  <span className="text-sm font-bold text-white font-heading">$500K USD</span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <span className="text-sm text-white/60">Preferred Return</span>
                  <span className="text-sm font-bold text-pale-pink font-heading">12% Compounding</span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <span className="text-sm text-white/60">Carry</span>
                  <span className="text-sm font-bold text-white font-heading">80/20 Above Hurdle</span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <span className="text-sm text-white/60">Management Fee</span>
                  <span className="text-sm font-bold text-white font-heading">1.5% Deployed Capital</span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <span className="text-sm text-white/60">Term</span>
                  <span className="text-sm font-bold text-white font-heading">7 Years + 3yr Exit Window</span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <span className="text-sm text-white/60">Capital Calls</span>
                  <span className="text-sm font-bold text-white font-heading">Per Deal (As Acquired)</span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <span className="text-sm text-white/60">Distributions</span>
                  <span className="text-sm font-bold text-white font-heading">Yr 1-5 Retain &amp; Compound / Yr 5+ Flexible</span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <span className="text-sm text-white/60">Structure</span>
                  <span className="text-sm font-bold text-white font-heading">SG Pooled Vehicle (Counsel Advising)</span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <span className="text-sm text-white/60">Key-Man</span>
                  <span className="text-sm font-bold text-white font-heading">Tom Hay (Suspension Clause)</span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <span className="text-sm text-white/60">Fund Administration</span>
                  <span className="text-sm font-bold text-white font-heading">Independent SG-Based Admin</span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <span className="text-sm text-white/60">Target Investors</span>
                  <span className="text-sm font-bold text-white font-heading">Max 10-15 (Accredited)</span>
                </div>
                <div className="flex justify-between items-center p-6">
                  <span className="text-sm text-white/60">Reporting</span>
                  <span className="text-sm font-bold text-white font-heading">Quarterly NAV + Annual Audit</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* PROJECTED RETURNS */}
        <motion.section id="returns" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">Projected Returns</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              Scenario<br /><span className="font-normal text-red">Analysis</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-dark-red/60 leading-relaxed max-w-2xl mb-12 font-secondary">
              Returns modelled on 7-year hold with earnings retained and reinvested into additional acquisitions. Venues are highly cash-flow positive, enabling debt leverage to magnify equity returns. 12% compounding hurdle protects downside &mdash; GP earns nothing until investors clear it.
            </motion.p>

            <motion.div variants={fadeUp} className="overflow-x-auto mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-dark-red">
                    <th className="text-left py-4 text-xs uppercase tracking-wider text-dark-red/50">Scenario</th>
                    <th className="text-right py-4 text-xs uppercase tracking-wider text-dark-red/50">Yield</th>
                    <th className="text-right py-4 text-xs uppercase tracking-wider text-dark-red/50">MOIC</th>
                    <th className="text-right py-4 text-xs uppercase tracking-wider text-dark-red/50">IRR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-dark-red/10 bg-red/5">
                    <td className="py-4 font-bold text-dark-red">Boutique Villa Model (Upside)</td>
                    <td className="py-4 text-right font-heading text-red">38%</td>
                    <td className="py-4 text-right font-heading text-red">10.6x</td>
                    <td className="py-4 text-right font-heading text-red">40%</td>
                  </tr>
                  <tr className="border-b border-dark-red/10">
                    <td className="py-4 font-bold text-dark-red">Conservative</td>
                    <td className="py-4 text-right font-heading">25%</td>
                    <td className="py-4 text-right font-heading">4.0x</td>
                    <td className="py-4 text-right font-heading">22%</td>
                  </tr>
                  <tr className="border-b border-dark-red/10">
                    <td className="py-4 font-bold text-dark-red">Downside</td>
                    <td className="py-4 text-right font-heading">20%</td>
                    <td className="py-4 text-right font-heading">2.8x</td>
                    <td className="py-4 text-right font-heading">16%</td>
                  </tr>
                  <tr className="bg-dark-red/5">
                    <td className="py-4 font-bold text-dark-red/50">Hurdle Rate</td>
                    <td className="py-4 text-right font-heading text-dark-red/50">12%</td>
                    <td className="py-4 text-right font-heading text-dark-red/50">2.2x</td>
                    <td className="py-4 text-right font-heading text-dark-red/50">12%</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-pale-pink/30 p-8">
              <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-3">Investor Protection</div>
              <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                The 12% compounding hurdle means investors receive 2.2x their money before the GP earns any carry. In the downside scenario (20% yield), investors still achieve a 16% IRR and 2.8x MOIC over 7 years. The GP only participates in outsized returns.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* MARKET CONTEXT */}
        <motion.section id="market" className="py-24 px-6 bg-pale-pink/20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">Market Context</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              Why Bali.<br /><span className="font-normal text-red">Why Now.</span>
            </motion.h2>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <motion.div variants={fadeUp} className="bg-white p-6">
                <div className="text-2xl font-bold text-red font-heading mb-1">7-8%</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-2">Bali Cap Rates</div>
                <div className="text-xs text-dark-red/40 font-secondary">300bps above gateway Asian markets</div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-6">
                <div className="text-2xl font-bold text-red font-heading mb-1">15-20%</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-2">Gross Rental Yields</div>
                <div className="text-xs text-dark-red/40 font-secondary">Resort-integrated wedding venues</div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-6">
                <div className="text-2xl font-bold text-red font-heading mb-1">21.5%</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-2">RevPAR Growth YoY</div>
                <div className="text-xs text-dark-red/40 font-secondary">Accelerating tourism recovery</div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-6">
                <div className="text-2xl font-bold text-red font-heading mb-1">12% CAGR</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-2">Indo Hospitality Growth</div>
                <div className="text-xs text-dark-red/40 font-secondary">$2.06B → $3.65B by 2030</div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 mb-8">
              <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-4">Comparable Transactions</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-dark-red/5">
                  <span className="text-sm text-dark-red/70 font-secondary">Elite Havens (Bali villa portfolio)</span>
                  <span className="text-sm font-bold font-heading text-dark-red">$15M</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-red/5">
                  <span className="text-sm text-dark-red/70 font-secondary">Sofitel Bali Nusa Dua (acquisition)</span>
                  <span className="text-sm font-bold font-heading text-dark-red">$140M</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-dark-red/70 font-secondary">Kedungu Surf &amp; Villa Fund</span>
                  <span className="text-sm font-bold font-heading text-dark-red">$12.5M</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-sky-blue/20 p-8 border-l-4 border-sky-blue">
              <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                <strong>Key insight:</strong> Bali wedding venues trade at 7-8% cap rates, but when operated by BaliLove yield 25-38% on equity. The arbitrage exists because most venue owners don&apos;t have a 64-person wedding operation filling their calendar.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* TEAM */}
        <motion.section id="team" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">The Team</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-12 leading-tight font-heading">
              Operator-Led<br /><span className="font-normal text-red">Fund</span>
            </motion.h2>

            <motion.div variants={stagger} className="space-y-8">
              <motion.div variants={fadeUp} className="flex gap-6 items-start p-6 bg-pale-pink/20">
                <div className="w-16 h-16 bg-red text-white flex items-center justify-center text-xl font-bold flex-shrink-0 font-heading">TH</div>
                <div>
                  <h4 className="font-bold text-dark-red font-heading text-sm uppercase tracking-wide">Tom Hay</h4>
                  <p className="text-xs text-red uppercase tracking-wider mb-2">Founder &amp; Fund Manager</p>
                  <p className="text-sm text-dark-red/60 font-secondary">7 years building BaliLove from zero to Asia&apos;s largest destination wedding company. 300+ weddings, 64 staff, $13M revenue. Deep operator who knows every venue, vendor, and margin lever in Bali weddings.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6 items-start p-6 bg-pale-pink/10">
                <div className="w-16 h-16 bg-dark-red/80 text-white flex items-center justify-center text-xl font-bold flex-shrink-0 font-heading">D</div>
                <div>
                  <h4 className="font-bold text-dark-red font-heading text-sm uppercase tracking-wide">Diana</h4>
                  <p className="text-xs text-red uppercase tracking-wider mb-2">Digital Transformation</p>
                  <p className="text-sm text-dark-red/60 font-secondary">Director-level corporate background. Left corporate to build the technology and systems layer. Drives the platform that makes 64 staff operate like 200.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6 items-start p-6 bg-pale-pink/10">
                <div className="w-16 h-16 bg-dark-red/80 text-white flex items-center justify-center text-xl font-bold flex-shrink-0 font-heading">I</div>
                <div>
                  <h4 className="font-bold text-dark-red font-heading text-sm uppercase tracking-wide">Imelda</h4>
                  <p className="text-xs text-red uppercase tracking-wider mb-2">Venue Relationships</p>
                  <p className="text-sm text-dark-red/60 font-secondary">20 years at The Mulia and top Bali luxury venues. The relationships that open doors to off-market deals and preferred partnerships across the island.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6 items-start p-6 bg-pale-pink/10">
                <div className="w-16 h-16 bg-dark-red/80 text-white flex items-center justify-center text-xl font-bold flex-shrink-0 font-heading">64</div>
                <div>
                  <h4 className="font-bold text-dark-red font-heading text-sm uppercase tracking-wide">Operating Team</h4>
                  <p className="text-xs text-red uppercase tracking-wider mb-2">Planners, Coordinators, Sales, Tech</p>
                  <p className="text-sm text-dark-red/60 font-secondary">Full-stack wedding operation: sales team converting leads, planners coordinating events, coordinators executing on-day, tech team building the platform. Zero unwanted turnover.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* RISKS */}
        <motion.section id="risks" className="py-24 px-6 bg-pale-pink/20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">Transparency</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-12 leading-tight font-heading">
              Risks &amp;<br /><span className="font-normal text-red">Mitigants</span>
            </motion.h2>

            <motion.div variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark-red text-sm mb-1">First-time fund manager</h4>
                    <p className="text-sm text-dark-red/60 font-secondary">
                      <strong className="text-dark-red/80">Mitigant:</strong> 7 years operating track record. 300+ weddings delivered. $13M revenue. This is an operator raising a fund, not a fund manager learning an industry. Independent Singapore-based fund administrator handles all compliance, NAV reporting, and capital calls.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark-red text-sm mb-1">Operator dependency (key-man risk)</h4>
                    <p className="text-sm text-dark-red/60 font-secondary">
                      <strong className="text-dark-red/80">Mitigant:</strong> Key-man clause suspends new deployments if Tom is incapacitated. 64-person team with zero unwanted turnover operates day-to-day without founder involvement. Senior leadership (Diana, Imelda) have full operational authority. Properties retain value regardless &mdash; fund owns the real estate.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark-red text-sm mb-1">Tourism cyclicality</h4>
                    <p className="text-sm text-dark-red/60 font-secondary">
                      <strong className="text-dark-red/80">Mitigant:</strong> 12-18 month forward pipeline (268 weddings already booked). Proven COVID recovery &mdash; weddings were first to return and grew through it. Couples book 12+ months ahead, providing recession-resistant visibility.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark-red text-sm mb-1">Currency risk (IDR/SGD)</h4>
                    <p className="text-sm text-dark-red/60 font-secondary">
                      <strong className="text-dark-red/80">Mitigant:</strong> Revenue collected in USD-equivalent (couples pay in AUD/USD/GBP). Indonesian corporate tax at 22% with no withholding on reinvested earnings. Natural hedge: costs in IDR, revenue in hard currency.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark-red text-sm mb-1">Land ownership structure</h4>
                    <p className="text-sm text-dark-red/60 font-secondary">
                      <strong className="text-dark-red/80">Mitigant:</strong> PT PMA structure (100% foreign-owned Indonesian company). Reputable Indonesian law firm advising. Standard structure used by major international investors in Bali hospitality.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* NEXT STEPS */}
        <motion.section id="next-steps" className="py-24 px-6 bg-dark-red text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto text-center">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-pale-pink mb-4">Next Steps</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-6 leading-tight font-heading">
              Express Interest
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-white/60 leading-relaxed max-w-xl mx-auto mb-12 font-secondary">
              We&apos;re accepting expressions of interest for $500K minimum commitments.
              The fund is capped at 10-15 investors to maintain a high-trust, intimate structure.
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-6">
                <div className="text-2xl font-bold text-pale-pink font-heading mb-2">1</div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-2">Express Interest</h4>
                <p className="text-xs text-white/50 font-secondary">$500K minimum commitment. Non-binding at this stage.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-6">
                <div className="text-2xl font-bold text-pale-pink font-heading mb-2">2</div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-2">Site Visit</h4>
                <p className="text-xs text-white/50 font-secondary">Visit Bali. See the properties. Meet the 64-person team in action.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-6">
                <div className="text-2xl font-bold text-pale-pink font-heading mb-2">3</div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-2">Commit</h4>
                <p className="text-xs text-white/50 font-secondary">Sign commitment letter. Capital called only as deals close.</p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <a href="mailto:tom@bali.love" className="inline-block bg-red text-white px-12 py-4 text-sm uppercase tracking-widest hover:bg-red/80 transition-colors font-heading">
                Contact Tom
              </a>
              <p className="text-xs text-white/40 mt-4">tom@bali.love</p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-white/5 border border-white/10 p-4">
                <div className="text-xs text-white/70 font-bold uppercase tracking-wider mb-1">Available on Request</div>
                <p className="text-xs text-white/40 font-secondary">Audited financials (Xero-backed), property valuations, management agreement template</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4">
                <div className="text-xs text-white/70 font-bold uppercase tracking-wider mb-1">Legal Counsel</div>
                <p className="text-xs text-white/40 font-secondary">Singapore fund structuring counsel advising on vehicle. Indonesian property law firm on PT PMA entities.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4">
                <div className="text-xs text-white/70 font-bold uppercase tracking-wider mb-1">Due Diligence</div>
                <p className="text-xs text-white/40 font-secondary">Full data room access for committed investors. Site visits arranged quarterly.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-16 pt-8 border-t border-white/10">
              <p className="text-[10px] text-white/30 font-secondary leading-relaxed max-w-lg mx-auto">
                This document is confidential and for discussion purposes only. It does not constitute an offer to sell or a solicitation of an offer to buy any securities. Investment involves risk of loss. Past performance does not guarantee future results.
              </p>
            </motion.div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
