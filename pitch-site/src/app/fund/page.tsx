'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FUND_PASSWORD = 'balilove2026';

const navigation = [
  { id: 'founder', label: 'The Founder' },
  { id: 'tenant', label: 'The Operator' },
  { id: 'asset', label: 'The Asset' },
  { id: 'returns', label: 'Your Returns' },
  { id: 'de-risk', label: 'The De-Risk' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'structure', label: 'Structure' },
  { id: 'terms', label: 'Fund Terms' },
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

function MetricRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`flex justify-between items-center py-3 border-b border-dark-red/10 ${highlight ? 'font-bold' : ''}`}>
      <span className="text-sm text-dark-red/70">{label}</span>
      <span className={`text-sm font-heading ${highlight ? 'text-red' : 'text-dark-red'}`}>{value}</span>
    </div>
  );
}

function PropertyCard({ name, price, status, land, leaseType, description, guaranteedLease, leaseYield }: {
  name: string; price: string; status: string; land: string; leaseType: string; description: string; guaranteedLease?: string; leaseYield?: string;
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
          <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-1">Land</div>
          <div className="text-sm font-bold font-heading text-dark-red">{land}</div>
        </div>
        <div>
          <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-1">Title</div>
          <div className="text-sm font-bold font-heading text-red">{leaseType}</div>
        </div>
      </div>
      {guaranteedLease && (
        <div className="mt-4 pt-4 border-t border-dark-red/10 grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-1">Guaranteed Lease</div>
            <div className="text-sm font-bold font-heading text-red">{guaranteedLease}</div>
          </div>
          <div>
            <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-1">Lease Yield</div>
            <div className="text-sm font-bold font-heading text-red">{leaseYield}</div>
          </div>
        </div>
      )}
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
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-pale-pink mb-6">Property Investment Opportunity</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold uppercase tracking-wider mb-8 leading-tight font-heading">
              Prime Bali Freehold.<br /><span className="text-pale-pink">Guaranteed Lease.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-4 font-secondary">
              Own freehold property in the world&apos;s top destination wedding market.<br />
              <span className="text-pale-pink font-bold">Guaranteed revenue from an established operator. Zero operational headaches.</span>
            </motion.p>
            <motion.p variants={fadeUp} className="text-sm text-white/50 max-w-xl mx-auto mb-12 font-secondary">
              Scarce freehold land appreciating 8-13% annually. Long-term commercial lease from a 7-year-old operator with 300+ events delivered. You own the property. We guarantee the income.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pale-pink font-heading">8-13%</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Annual Land Appreciation</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pale-pink font-heading">18.2%</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Freehold Supply (Scarce)</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pale-pink font-heading">Guaranteed</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Lease Income</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pale-pink font-heading">7yr</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Operator Track Record</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* THE FOUNDER */}
        <motion.section id="founder" className="py-24 px-6 bg-pale-pink/20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">The Founder</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              Tom Hay
            </motion.h2>

            <motion.div variants={stagger} className="space-y-8">
              <motion.div variants={fadeUp} className="bg-white p-8 border-l-4 border-red">
                <div className="text-xs tracking-widest uppercase text-red mb-3">Before Bali</div>
                <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                  Director of Digital at one of Australia&apos;s fastest-growing professional services firms. Before that, built and ran a marketing agency specialising in sales teams and technical marketing. Also founded the Farm Cafe in inner Melbourne &mdash; grew it from a small cafe into a powerhouse wedding venue. That was the first time Tom turned a venue into a wedding business. BaliLove is the second.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white p-8 border-l-4 border-dark-red/20">
                <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-3">Why Bali</div>
                <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                  Came to Bali consulting for a venue operator and fell in love with the people. Bali has an extraordinarily talented hospitality workforce &mdash; people who want to make it a lifelong career, not a gap year. In Melbourne, hospitality teams are transient. Here, you can build something with people who stay for decades. Combined with a Hindu culture built on daily gratitude and community, it creates a working environment where nothing is impossible and the team genuinely cares.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white p-8 border-l-4 border-dark-red/20">
                <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-3">The Start</div>
                <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                  Started BaliLove pre-COVID. Was just beginning to grow when the pandemic hit. Afterwards, wasn&apos;t sure whether to restart &mdash; but had people in Bali who desperately needed work. COVID was devastating here. Decided to sell 10-20 weddings to employ 5-6 people he cared about. Sold 100 weddings in three months. Started calling everyone he knew. Now at 64 staff, 268 weddings booked, and growing 220% year-on-year.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white p-8 border-l-4 border-dark-red/20">
                <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-3">Governance</div>
                <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                  Previously merged with another company to solve the venue ownership problem. Demerged after discovering serious differences in governance around client deposits and financial management. Walked away from the deal rather than compromise on the fundamentals. This is why the fund is structured in Singapore with independent administration &mdash; strong governance, strong risk management, and rock-solid alignment from day one. You cannot build a 20-year business without taking this seriously.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-dark-red text-white p-8">
                <div className="text-xs tracking-widest uppercase text-pale-pink mb-3">The Long Game</div>
                <p className="text-sm text-white/80 font-secondary leading-relaxed">
                  &ldquo;I want to build the Aman for destination weddings. Getting groups of people together for once-in-a-lifetime celebrations in the world&apos;s most beautiful venues &mdash; it&apos;s a deeply creative and connective life. I see myself running this for 30 years. This is all I want to do.&rdquo;
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* THE OPERATOR */}
        <motion.section id="tenant" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">The Operator</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              Established Operator.<br /><span className="font-normal text-red">Long-Term Lease.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-dark-red/60 leading-relaxed max-w-2xl mb-12 font-secondary">
              Your properties come with a long-term commercial lease from BaliLove &mdash; Bali&apos;s dominant destination wedding operator. Operating since 2018. Over 300 weddings delivered. 64 full-time staff. This is your tenant. They guarantee your revenue.
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl font-bold text-red font-heading">7yr</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mt-2">Operating History</div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl font-bold text-red font-heading">300+</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mt-2">Events Delivered</div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl font-bold text-red font-heading">64</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mt-2">Full-Time Staff</div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-3xl font-bold text-red font-heading">268</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mt-2">Weddings Booked</div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 border-l-4 border-red mb-8">
              <div className="text-xs tracking-widest uppercase text-red mb-3">Why This Tenant Matters</div>
              <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                A typical Bali wedding venue earns 7-8% cap rate with passive ownership. The same venue, operated by BaliLove under a guaranteed lease, delivers significantly higher returns to you as landlord. The difference: BaliLove has the sales engine, the team, and the 268-wedding pipeline to fill your calendar year-round. You don&apos;t need to find tenants. You already have one.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-dark-red/5 p-8">
              <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-3">Co-Investment</div>
              <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                BaliLove co-invests alongside fund investors in many deals. Our capital sits beside yours. We have skin in the game on both sides &mdash; as operator guaranteeing the lease and as co-investor in the property. Our interests are fully aligned.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* THE ASSET */}
        <motion.section id="asset" className="py-24 px-6 bg-pale-pink/20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">The Asset</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              Bali Freehold.<br /><span className="font-normal text-red">Structurally Scarce.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-dark-red/60 leading-relaxed max-w-2xl mb-12 font-secondary">
              Bali freehold land (Hak Milik) is one of Asia&apos;s most structurally constrained property assets. Only 18.2% of listed supply is freehold. Cultural inheritance practices mean it rarely changes hands. An agricultural land conversion ban further constrains new supply. The result: consistent long-term appreciation with strong downside protection.
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <motion.div variants={fadeUp} className="bg-white p-6">
                <div className="text-2xl font-bold text-red font-heading mb-1">8-13%</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-2">Annual Appreciation (Prime Areas)</div>
                <div className="text-xs text-dark-red/40 font-secondary">Uluwatu, Canggu, Seminyak clifftop &amp; beachfront parcels. Consistent over 10+ years.</div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-6">
                <div className="text-2xl font-bold text-red font-heading mb-1">+51%</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-2">Post-COVID Surge (2021-2024)</div>
                <div className="text-xs text-dark-red/40 font-secondary">Cumulative appreciation. Quality assets recovered within 2-3 years of the downturn.</div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-6">
                <div className="text-2xl font-bold text-red font-heading mb-1">18.2%</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-2">Freehold Share of Supply</div>
                <div className="text-xs text-dark-red/40 font-secondary">81.8% of listed property is leasehold. Freehold is structurally scarce and getting scarcer.</div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-6">
                <div className="text-2xl font-bold text-red font-heading mb-1">6.95M</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-2">2025 International Arrivals</div>
                <div className="text-xs text-dark-red/40 font-secondary">New record. Surpassed pre-COVID peak. Tourism = 21.75% of Bali GDP.</div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-sky-blue/20 p-8 border-l-4 border-sky-blue mb-8">
              <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-3">Government Infrastructure Bet</div>
              <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                Indonesia is investing $3B in a new North Bali International Airport (50M passenger capacity, designated National Strategic Project), expanding Ngurah Rai from 24M to 32M capacity, and planning a $20B Bali MRT system (2031 target). This is not speculative &mdash; the Indonesian government is making a generational bet on Bali tourism.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-dark-red text-white p-8">
              <div className="text-xs tracking-widest uppercase text-pale-pink mb-3">Regulatory Advantage</div>
              <p className="text-sm text-white/70 font-secondary leading-relaxed">
                Recent crackdowns demolished 48 illegal structures at Bingin Beach alone. ~50% of non-hotel accommodations lack proper documentation. We operate through fully compliant PT PMA structures with established legal counsel. As regulation tightens, properly documented freehold becomes more valuable and the cowboy operators get wiped out.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* YOUR RETURNS */}
        <motion.section id="returns" className="py-24 px-6 bg-dark-red text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-pale-pink mb-4">Your Returns</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-6 leading-tight font-heading">
              Three Layers<br /><span className="font-normal text-pale-pink">Of Return</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-white/70 leading-relaxed max-w-2xl mb-12 font-secondary">
              This isn&apos;t a single bet. Your investment generates returns across three distinct layers &mdash; guaranteed cash, structural appreciation, and development upside.
            </motion.p>

            <motion.div variants={stagger} className="space-y-6 mb-12">
              <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pale-pink text-dark-red flex items-center justify-center text-sm font-bold flex-shrink-0 font-heading">1</div>
                  <div>
                    <h4 className="font-bold text-pale-pink mb-2 font-heading text-sm uppercase tracking-wide">Guaranteed Lease Income</h4>
                    <p className="text-sm text-white/60 font-secondary leading-relaxed">
                      BaliLove signs a long-term commercial lease guaranteeing baseline revenue to the property. Contractual cash flow from day one. The lease starts at a conservative yield and grows over time as operations scale and rents increase.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pale-pink text-dark-red flex items-center justify-center text-sm font-bold flex-shrink-0 font-heading">2</div>
                  <div>
                    <h4 className="font-bold text-pale-pink mb-2 font-heading text-sm uppercase tracking-wide">Freehold Capital Appreciation</h4>
                    <p className="text-sm text-white/60 font-secondary leading-relaxed">
                      Prime Bali freehold has appreciated 8-13% annually over the past decade. With only 18.2% of supply being freehold and an agricultural conversion ban limiting new supply, this is structural &mdash; not cyclical. Your land value compounds regardless of operational performance.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pale-pink text-dark-red flex items-center justify-center text-sm font-bold flex-shrink-0 font-heading">3</div>
                  <div>
                    <h4 className="font-bold text-pale-pink mb-2 font-heading text-sm uppercase tracking-wide">Development Upside</h4>
                    <p className="text-sm text-white/60 font-secondary leading-relaxed">
                      These properties are future sites for world-class destination wedding resorts. Fund investors have first right of refusal on development projects. We acquire prime land now, operate and cash-flow it, and build when the time is right. The development premium on top of land value is where outsized returns are created.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/10 p-8">
              <div className="text-xs tracking-widest uppercase text-pale-pink mb-4">Illustrative Return Stack</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-pale-pink font-heading">6-8%</div>
                  <div className="text-xs text-white/50 mt-1">Guaranteed Lease Yield</div>
                  <div className="text-xs text-white/30 mt-1">Contractual &bull; Day One</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pale-pink font-heading">8-13%</div>
                  <div className="text-xs text-white/50 mt-1">Land Appreciation</div>
                  <div className="text-xs text-white/30 mt-1">Structural &bull; Compounding</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pale-pink font-heading">TBD</div>
                  <div className="text-xs text-white/50 mt-1">Development Premium</div>
                  <div className="text-xs text-white/30 mt-1">Future &bull; First Right</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <div className="text-xs text-white/40">Combined indicative return (pre-development)</div>
                <div className="text-3xl font-bold text-pale-pink font-heading mt-1">14-21%</div>
                <div className="text-xs text-white/30 mt-1">Guaranteed cash + structural appreciation. No operational involvement required.</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-8 mt-8">
              <div className="text-xs tracking-widest uppercase text-pale-pink mb-4">Worked Example &mdash; Boutique Villa</div>
              <div className="grid grid-cols-1 divide-y divide-white/10">
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm text-white/60">Your Investment (Property Acquisition)</span>
                  <span className="text-sm font-bold text-white font-heading">$920K</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm text-white/60">Guaranteed Annual Lease (BaliLove &rarr; Fund)</span>
                  <span className="text-sm font-bold text-pale-pink font-heading">[TBC]/yr</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm text-white/60">Guaranteed Lease Yield</span>
                  <span className="text-sm font-bold text-pale-pink font-heading">[TBC]%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm text-white/60">Revenue Share Above Baseline</span>
                  <span className="text-sm font-bold text-white font-heading">[TBC]</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm text-white/60">Land Appreciation (8-13%/yr)</span>
                  <span className="text-sm font-bold text-white font-heading">$74-120K/yr</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t border-pale-pink/30 mt-2 pt-4">
                  <span className="text-sm text-white font-bold">Total Indicative Annual Return</span>
                  <span className="text-sm font-bold text-pale-pink font-heading">[TBC]</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-white/40 font-secondary">
                Guaranteed lease is contractual. Revenue share and appreciation are indicative based on historical performance. Your floor is the lease + freehold land value.
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* THE DE-RISK */}
        <motion.section id="de-risk" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">The De-Risk</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              No Headaches.<br /><span className="font-normal text-red">No Vacancy Risk.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-dark-red/60 leading-relaxed max-w-2xl mb-12 font-secondary">
              This is not a speculative property play. Every property in the fund comes with three layers of protection that eliminate the risks that normally make offshore real estate uncomfortable.
            </motion.p>

            <motion.div variants={stagger} className="space-y-6 mb-12">
              <motion.div variants={fadeUp} className="bg-pale-pink/20 p-8">
                <h4 className="font-bold text-dark-red text-sm mb-2 font-heading uppercase tracking-wide">Guaranteed Baseline Lease</h4>
                <p className="text-sm text-dark-red/60 font-secondary leading-relaxed">
                  BaliLove signs a formal long-term lease guaranteeing baseline revenue to the property entity regardless of wedding volume. This is contractual income &mdash; not projected, not aspirational. The operator has 268 weddings already booked and 12-18 months of forward visibility.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-pale-pink/20 p-8">
                <h4 className="font-bold text-dark-red text-sm mb-2 font-heading uppercase tracking-wide">Freehold Ownership</h4>
                <p className="text-sm text-dark-red/60 font-secondary leading-relaxed">
                  You own the land. In one of the world&apos;s most desirable tourism markets. The property has value completely independent of the operator. If everything else fails, you hold appreciating freehold real estate in Bali. That&apos;s your floor.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-pale-pink/20 p-8">
                <h4 className="font-bold text-dark-red text-sm mb-2 font-heading uppercase tracking-wide">Operator Co-Investment</h4>
                <p className="text-sm text-dark-red/60 font-secondary leading-relaxed">
                  BaliLove co-invests in the properties alongside fund investors. The operator&apos;s capital is at risk beside yours. Combined with the lease guarantee, this creates double alignment &mdash; we lose money if you lose money.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-dark-red text-white p-8 text-center">
              <p className="text-lg font-secondary leading-relaxed text-white/90">
                You own freehold property. You collect guaranteed lease income.<br className="hidden md:block" />
                The operator handles everything. You have zero operational involvement.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* THE PIPELINE */}
        <motion.section id="pipeline" className="py-24 px-6 bg-pale-pink/10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">The Pipeline</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              Three Properties<br /><span className="font-normal text-red">In Progress</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-dark-red/60 leading-relaxed max-w-2xl mb-12 font-secondary">
              The fund has three properties at various stages of acquisition. Each comes with a long-term lease from BaliLove and is acquired through a compliant PT PMA structure.
            </motion.p>

            <motion.div variants={stagger} className="space-y-6 mb-12">
              <PropertyCard
                name="Property A — Riverside Estate"
                price="$4.1M"
                status="DD Completing"
                land="Premium riverside"
                leaseType="Lease-to-Own"
                description="LOI signed. Due diligence completing. Lease-to-own structure — ~$750K upfront, 12-month grace period, purchase option at fixed price. Prime riverside location in established wedding corridor."
                guaranteedLease="[TBC]/yr"
                leaseYield="[TBC]%"
              />
              <PropertyCard
                name="Property B — Boutique Villa"
                price="$920K"
                status="Negotiating"
                land="Clifftop / hillside"
                leaseType="Leasehold"
                description="Terms agreed, final negotiation. Boutique property ideal for intimate events. Low acquisition cost, high yield-on-cost. Template deal for the fund's acquisition strategy."
                guaranteedLease="[TBC]/yr"
                leaseYield="[TBC]%"
              />
              <PropertyCard
                name="Property C — Beachfront Estate"
                price="$6M"
                status="Early Stage"
                land="Beachfront"
                leaseType="Freehold"
                description="Owner willing to sell. Freehold title. Large beachfront parcel with existing structures. 386 historical events on record. Prime development site for future resort build."
                guaranteedLease="[TBC]/yr"
                leaseYield="[TBC]%"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="bg-sky-blue/20 p-8 border-l-4 border-sky-blue">
              <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-3">Acquisition Pipeline</div>
              <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                BaliLove operates across 50+ venues today. We know which owners are open to selling, which properties underperform their potential, and where our operating model creates the biggest uplift. These three are the starting point &mdash; we have a deep shortlist for follow-on acquisitions.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* THE STRATEGY */}
        <motion.section id="strategy" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">The Strategy</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              How It<br /><span className="font-normal text-red">Works</span>
            </motion.h2>

            <motion.div variants={stagger} className="space-y-6 mb-12">
              <motion.div variants={fadeUp} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-red text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-dark-red mb-1 font-heading text-sm uppercase tracking-wide">Commit Capital</h4>
                  <p className="text-sm text-dark-red/60 font-secondary">Investors commit $500K+. Capital is not called upfront &mdash; it&apos;s drawn down per deal as each acquisition closes.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-red text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-dark-red mb-1 font-heading text-sm uppercase tracking-wide">Acquire Property</h4>
                  <p className="text-sm text-dark-red/60 font-secondary">Fund acquires freehold property through Indonesian PT PMA entities (100% foreign-owned). Each property ring-fenced in its own sub-entity. BaliLove signs a long-term lease on acquisition.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-red text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-dark-red mb-1 font-heading text-sm uppercase tracking-wide">Collect &amp; Compound</h4>
                  <p className="text-sm text-dark-red/60 font-secondary">Lease income flows from day one. Early years: retain earnings and reinvest into additional acquisitions. The portfolio compounds &mdash; your initial investment grows into a larger land bank than equity alone would buy. Lease payments grow over time as operations scale.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-red text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-dark-red mb-1 font-heading text-sm uppercase tracking-wide">Multiple Exit Paths</h4>
                  <p className="text-sm text-dark-red/60 font-secondary">(1) Switch to income distributions when investors prefer yield over growth. (2) Selective property sales at appreciated values. (3) Portfolio sale to hospitality group (Elite Havens sold for $15M). (4) Develop into resorts for step-change in value. (5) REIT conversion for liquidity. Strong assets create options.</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-sky-blue/20 p-8 border-l-4 border-sky-blue">
              <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-3">Why This Works</div>
              <p className="text-sm text-dark-red/70 font-secondary leading-relaxed">
                Traditional property funds buy assets and <em>hope</em> for tenants. This fund buys property for an operator that already has <strong>268 events booked</strong> and <strong>12-18 months forward visibility</strong>. You own the real estate. The lease is guaranteed. The land appreciates. And you have first right on the development upside.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <motion.div variants={fadeUp} className="bg-pale-pink/20 p-8">
                <div className="text-xs tracking-widest uppercase text-red mb-3">Phase 1 &mdash; Now</div>
                <h4 className="font-bold text-dark-red mb-2 font-heading text-sm uppercase tracking-wide">Acquire &amp; Operate</h4>
                <p className="text-sm text-dark-red/60 font-secondary">
                  Buy prime freehold in established wedding corridors. Lease to BaliLove. Collect guaranteed income. Refurbish where needed to increase asset value. Land appreciates while you earn cash yield.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-pale-pink/20 p-8">
                <div className="text-xs tracking-widest uppercase text-red mb-3">Phase 2 &mdash; Future</div>
                <h4 className="font-bold text-dark-red mb-2 font-heading text-sm uppercase tracking-wide">Develop &amp; Build</h4>
                <p className="text-sm text-dark-red/60 font-secondary">
                  Purpose-built destination wedding resorts designed by YSG Studio (AD100 listed, Australia&apos;s most awarded). Fund investors get first right of refusal on development. This is where land turns into a branded hospitality asset.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* FUND STRUCTURE */}
        <motion.section id="structure" className="py-24 px-6 bg-pale-pink/10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">Legal Structure</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              Clean Separation.<br /><span className="font-normal text-red">Connected By Lease.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-dark-red/60 leading-relaxed max-w-2xl mb-12 font-secondary">
              Three entities, clearly separated. Investors invest in real estate (PropCo). BaliLove (OpCo) guarantees revenue through a long-term lease. A management company (GP) handles acquisitions, asset management, and fund operations.
            </motion.p>

            <motion.div variants={fadeUp} className="bg-white p-8 mb-8">
              <div className="text-xs tracking-widest uppercase text-dark-red/50 mb-6 text-center">Fund Architecture</div>
              <div className="space-y-4 font-secondary text-sm">
                <div className="text-center py-3 bg-pale-pink/40 text-dark-red font-bold">
                  Investors (Max 10-15 Accredited)
                </div>
                <div className="text-center text-dark-red/30 text-lg">&darr;</div>
                <div className="text-center py-3 bg-sky-blue/30 text-dark-red font-bold">
                  PropCo &mdash; Singapore Fund Vehicle
                </div>
                <div className="text-center text-dark-red/30 text-xs">Owns the freehold properties &mdash; your investment</div>
                <div className="text-center text-dark-red/30 text-lg">&darr;</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="text-center py-3 bg-dark-red/5 text-dark-red text-xs">
                    <strong>PT PMA A</strong><br />Freehold &rarr; Property A
                  </div>
                  <div className="text-center py-3 bg-dark-red/5 text-dark-red text-xs">
                    <strong>PT PMA B</strong><br />Freehold &rarr; Property B
                  </div>
                  <div className="text-center py-3 bg-dark-red/5 text-dark-red text-xs">
                    <strong>PT PMA C</strong><br />Freehold &rarr; Property C
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="text-center py-3 bg-red/10 border-2 border-red/30 text-dark-red">
                    <strong className="text-red">Management Co</strong> (Tom Hay, GP)<br />
                    <span className="text-xs text-dark-red/50">Acquisition fees + asset management + carry</span>
                  </div>
                  <div className="text-center py-3 border-2 border-dark-red/20 text-dark-red">
                    <strong className="text-dark-red">Bali Love</strong> (OpCo &mdash; Tenant)<br />
                    <span className="text-xs text-dark-red/50">Long-term lease &rarr; guaranteed revenue to PropCo</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div variants={fadeUp} className="bg-white p-5">
                <div className="text-xs font-bold text-dark-red uppercase tracking-wider mb-2">Ring-Fenced</div>
                <p className="text-xs text-dark-red/50 font-secondary">Each property in its own PT PMA. One asset&apos;s performance doesn&apos;t affect others.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-5">
                <div className="text-xs font-bold text-dark-red uppercase tracking-wider mb-2">Lease Guarantee</div>
                <p className="text-xs text-dark-red/50 font-secondary">OpCo guarantees baseline revenue through formal long-term lease. Contractual, not aspirational.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-5">
                <div className="text-xs font-bold text-dark-red uppercase tracking-wider mb-2">Aligned Incentives</div>
                <p className="text-xs text-dark-red/50 font-secondary">GP earns carry only above hurdle. BaliLove co-invests. Everyone loses together or wins together.</p>
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
                  <span className="text-sm text-white/60">Structure</span>
                  <span className="text-sm font-bold text-white font-heading">SG Fund Vehicle (Counsel Advising)</span>
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

        {/* MARKET CONTEXT */}
        <motion.section id="market" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">Market Context</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-6 leading-tight font-heading">
              Why Bali.<br /><span className="font-normal text-red">Why Now.</span>
            </motion.h2>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <motion.div variants={fadeUp} className="bg-pale-pink/20 p-6">
                <div className="text-2xl font-bold text-red font-heading mb-1">7-8%</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-2">Bali Cap Rates</div>
                <div className="text-xs text-dark-red/40 font-secondary">300bps above gateway Asian markets (SG, HK, Tokyo)</div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-pale-pink/20 p-6">
                <div className="text-2xl font-bold text-red font-heading mb-1">$36.5B</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-2">Destination Wedding Market</div>
                <div className="text-xs text-dark-red/40 font-secondary">Growing at 26% CAGR globally</div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-pale-pink/20 p-6">
                <div className="text-2xl font-bold text-red font-heading mb-1">+37%</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-2">RevPAR Above 2019 Peak</div>
                <div className="text-xs text-dark-red/40 font-secondary">Bali hospitality has surpassed pre-COVID levels</div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-pale-pink/20 p-6">
                <div className="text-2xl font-bold text-red font-heading mb-1">12% CAGR</div>
                <div className="text-xs text-dark-red/50 uppercase tracking-wider mb-2">Indo Hospitality Growth</div>
                <div className="text-xs text-dark-red/40 font-secondary">$2.06B &rarr; $3.65B by 2030</div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white border border-dark-red/10 p-8 mb-8">
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
                <strong>Key insight:</strong> Bali freehold property trades at 7-8% cap rates for passive owners.
                With a guaranteed long-term lease from BaliLove, your baseline yield matches or exceeds this
                &mdash; contractually, from day one, before any revenue share or land appreciation.
                The arbitrage: most property owners don&apos;t have an established operator with 268 booked
                events guaranteeing their income.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* TEAM */}
        <motion.section id="team" className="py-24 px-6 bg-pale-pink/20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">The Team</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-12 leading-tight font-heading">
              Operator-Led<br /><span className="font-normal text-red">Fund</span>
            </motion.h2>

            <motion.div variants={stagger} className="space-y-8">
              <motion.div variants={fadeUp} className="flex gap-6 items-start p-6 bg-white">
                <div className="w-16 h-16 bg-red text-white flex items-center justify-center text-xl font-bold flex-shrink-0 font-heading">TH</div>
                <div>
                  <h4 className="font-bold text-dark-red font-heading text-sm uppercase tracking-wide">Tom Hay</h4>
                  <p className="text-xs text-red uppercase tracking-wider mb-2">Founder &amp; Fund Manager</p>
                  <p className="text-sm text-dark-red/60 font-secondary">7 years building BaliLove into Bali&apos;s dominant destination wedding operator. 300+ events, 64 staff. Deep local relationships, established legal and banking infrastructure. Knows every venue, vendor, and deal structure on the island.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6 items-start p-6 bg-white">
                <div className="w-16 h-16 bg-dark-red/80 text-white flex items-center justify-center text-xl font-bold flex-shrink-0 font-heading">I</div>
                <div>
                  <h4 className="font-bold text-dark-red font-heading text-sm uppercase tracking-wide">Imelda</h4>
                  <p className="text-xs text-red uppercase tracking-wider mb-2">Venue Relationships</p>
                  <p className="text-sm text-dark-red/60 font-secondary">20 years at The Mulia and top Bali luxury venues. The relationships that open doors to off-market deals and preferred terms across the island.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6 items-start p-6 bg-white">
                <div className="w-16 h-16 bg-dark-red/80 text-white flex items-center justify-center text-xl font-bold flex-shrink-0 font-heading">64</div>
                <div>
                  <h4 className="font-bold text-dark-red font-heading text-sm uppercase tracking-wide">Operating Team</h4>
                  <p className="text-xs text-red uppercase tracking-wider mb-2">Your Tenant&apos;s Workforce</p>
                  <p className="text-sm text-dark-red/60 font-secondary">64 full-time staff across sales, planning, coordination, content, and technology. Zero unwanted turnover. This is the team that guarantees your lease income is backed by real operational capacity.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* RISKS */}
        <motion.section id="risks" className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-red mb-4">Transparency</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-red mb-12 leading-tight font-heading">
              Risks &amp;<br /><span className="font-normal text-red">Mitigants</span>
            </motion.h2>

            <motion.div variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="bg-pale-pink/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark-red text-sm mb-1">First-time fund manager</h4>
                    <p className="text-sm text-dark-red/60 font-secondary">
                      <strong className="text-dark-red/80">Mitigant:</strong> 7 years operating track record. 300+ events. This is an operator raising a fund, not a fund manager learning an industry. Independent Singapore-based fund administrator handles compliance, NAV reporting, and capital calls.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-pale-pink/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark-red text-sm mb-1">Operator dependency (key-man risk)</h4>
                    <p className="text-sm text-dark-red/60 font-secondary">
                      <strong className="text-dark-red/80">Mitigant:</strong> Key-man clause suspends new deployments if Tom is incapacitated. 64-person team operates day-to-day without founder involvement. Properties retain freehold value regardless of operator performance.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-pale-pink/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark-red text-sm mb-1">Tourism cyclicality</h4>
                    <p className="text-sm text-dark-red/60 font-secondary">
                      <strong className="text-dark-red/80">Mitigant:</strong> Lease guarantee provides baseline income regardless of volume. 268 events already booked provides 12-18 months forward visibility. Bali tourism has surpassed pre-COVID peak. Freehold land value is independent of tourism cycles.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-pale-pink/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark-red text-sm mb-1">Currency risk (IDR/SGD)</h4>
                    <p className="text-sm text-dark-red/60 font-secondary">
                      <strong className="text-dark-red/80">Mitigant:</strong> Lease payments denominated in hard currency (AUD/USD). Operating costs in IDR create a natural hedge. Indonesian corporate tax at 22% with no withholding on reinvested earnings.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-pale-pink/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark-red text-sm mb-1">Land ownership structure</h4>
                    <p className="text-sm text-dark-red/60 font-secondary">
                      <strong className="text-dark-red/80">Mitigant:</strong> PT PMA structure (100% foreign-owned Indonesian company). Established Indonesian law firm on retainer. Standard structure used by major international investors in Bali hospitality. Regulatory crackdown on non-compliant operators increases value of properly structured holdings.
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
                <p className="text-xs text-white/50 font-secondary">Visit Bali. Walk the properties. See the operation first-hand.</p>
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
                <p className="text-xs text-white/40 font-secondary">Property valuations, lease agreement template, Bali market research with 30+ cited sources</p>
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
