'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LUNA_PASSWORD = 'luna-bali-love';

// Navigation items for Luna proposal
const proposalNavigation = [
  { id: 'hero', label: 'Overview', description: 'The opportunity' },
  { id: 'what-we-bring', label: 'What We Bring', description: 'Our capabilities' },
  { id: 'how-it-works', label: 'How It Works', description: 'Partnership model' },
  { id: 'revenue-model', label: 'Revenue Model', description: 'Economics' },
  { id: 'implementation', label: 'Implementation', description: 'What we\'d do' },
  { id: 'expectations', label: 'Expectations', description: 'What we\'d expect' },
  { id: 'beyond-weddings', label: 'Beyond Weddings', description: 'LoveOS platform' },
  { id: 'why-this-works', label: 'Why This Works', description: 'Benefits' },
  { id: 'next-steps', label: 'Next Steps', description: 'Let\'s talk' },
];

export default function LunaProposalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('luna-auth');
    if (stored === 'true') setIsAuthenticated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === LUNA_PASSWORD) {
      sessionStorage.setItem('luna-auth', 'true');
      setIsAuthenticated(true);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-sky-blue flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <h1 className="font-heading text-dark-red text-3xl mb-2">Luna × Bali Love</h1>
          <p className="text-dark-red/50 text-sm mb-8">Partnership Proposal</p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Enter password"
              className={`w-full px-4 py-3 bg-white/50 text-dark-red placeholder-dark-red/40 border ${error ? 'border-red-red' : 'border-dark-red/20'} focus:border-dark-red/50 outline-none mb-4`}
              autoFocus
            />
            {error && <p className="text-red-red text-sm mb-4">Wrong password. Try again.</p>}
            <button
              type="submit"
              className="w-full bg-dark-red text-white py-3 text-sm tracking-wide hover:bg-red transition-colors"
            >
              View Proposal
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* ============================================
          LEFT SIDEBAR - Fixed navigation
          ============================================ */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-72 bg-sky-blue/30 border-r border-dark-red/10 z-50">
        {/* Logo/Brand */}
        <div className="p-8 pb-0">
          <Link href="/luna" className="block">
            <h1 className="font-logo text-dark-red text-2xl tracking-wide">
              Luna × Bali Love
            </h1>
            <p className="text-dark-red/50 text-xs mt-2 uppercase tracking-widest">
              Partnership Proposal
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-8 pt-12 overflow-y-auto">
          <ul className="space-y-5">
            {proposalNavigation.map((item) => (
              <NavItem
                key={item.id}
                href={`#${item.id}`}
                label={item.label}
                description={item.description}
              />
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="p-8">
          <a
            href="#next-steps"
            className="block w-full text-center bg-red text-white py-4 text-sm tracking-wide hover:bg-dark-red transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Contact Info */}
        <div className="px-8 pb-8 text-dark-red/50 text-xs space-y-1">
          <p>Bali Love</p>
          <p>Partnership Proposal 2026</p>
        </div>
      </aside>

      {/* ============================================
          MAIN CONTENT - Scrolling sections
          ============================================ */}
      <main className="flex-1 lg:ml-72 bg-white">
        {/* Mobile Header */}
        <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-dark-red">
          <h1 className="font-logo text-white text-xl">Luna × Bali Love</h1>
          <span className="text-white/70 text-sm">Proposal</span>
        </header>

        {/* ============================================
            HERO - The Partnership Opportunity
            ============================================ */}
        <section id="hero" className="relative min-h-screen w-full flex items-center bg-sky-blue">
          <div className="px-6 lg:px-16 py-32 lg:py-0 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-dark-red/60 text-sm tracking-[0.3em] uppercase mb-6">
                Partnership Proposal
              </p>
              <h1 className="font-heading text-dark-red text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                Let&apos;s build something<br />
                neither could alone.
              </h1>
              <p className="font-secondary text-dark-red/70 text-xl max-w-2xl mb-12 leading-relaxed">
                Luna has the venue. Bali Love has the engine. Together, we create
                a world-class wedding program that fills the calendar consistently.
              </p>

              {/* Key Value Props */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
                <div className="border-l-2 border-dark-red/30 pl-6">
                  <p className="font-heading text-dark-red text-lg mb-2">Your Venue</p>
                  <p className="font-secondary text-dark-red/60 text-sm">Stunning beachfront location, exceptional F&B, established brand</p>
                </div>
                <div className="border-l-2 border-dark-red/30 pl-6">
                  <p className="font-heading text-dark-red text-lg mb-2">Our Engine</p>
                  <p className="font-secondary text-dark-red/60 text-sm">Sales, marketing, planning systems, 300+ weddings delivered</p>
                </div>
                <div className="border-l-2 border-dark-red/30 pl-6">
                  <p className="font-heading text-dark-red text-lg mb-2">Together</p>
                  <p className="font-secondary text-dark-red/60 text-sm">Consistent bookings, professional execution, aligned incentives</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-red/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-dark-red/40 animate-pulse" />
          </div>
        </section>

        {/* ============================================
            WHAT WE BRING - Our Capabilities
            ============================================ */}
        <section id="what-we-bring" className="py-24 lg:py-32 px-6 lg:px-16 bg-white">
          <div className="max-w-4xl">
            <p className="text-red text-sm tracking-[0.25em] uppercase mb-6">
              What We Bring
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              Proven systems.<br />
              Dedicated team.
            </h2>
            <p className="font-secondary text-dark-red/70 text-lg leading-relaxed mb-12">
              Bali Love has been delivering weddings for over two years. We&apos;ve built the
              infrastructure that turns interest into bookings — consistently.
            </p>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CapabilityCard
                number="01"
                title="300+ Weddings Delivered"
                description="Real operational experience. We know what works, what doesn't, and how to make couples happy."
              />
              <CapabilityCard
                number="02"
                title="Sales & Marketing Machine"
                description="Lead generation, landing pages, ad campaigns, CRM, tour coordination. The full pipeline."
              />
              <CapabilityCard
                number="03"
                title="Dedicated Wedding Team"
                description="Coordinators, sales specialists, operations support. People focused on making it work."
              />
              <CapabilityCard
                number="04"
                title="Technology Platform"
                description="Guest management, booking tools, planning systems, financial integration. Built from real ops."
              />
              <CapabilityCard
                number="05"
                title="Distribution Network"
                description="240 weddings already booked, 15,000+ past guests in our database. Active demand, not cold marketing."
              />
            </div>

            {/* Network Callout */}
            <div className="mt-12 p-6 bg-sky-blue/50 border-l-4 border-red">
              <p className="font-heading text-dark-red text-sm uppercase tracking-wide mb-2">
                Join A Pipeline, Not Just A Platform
              </p>
              <p className="font-secondary text-dark-red/70">
                Luna doesn&apos;t just get our team — you get plugged into our existing demand channels.
                Couples actively planning. Guests who attended our weddings and will plan their own.
                Cross-promotion across events. This is warm demand flowing today.
              </p>
            </div>

            {/* Proof Point */}
            <div className="mt-12 p-6 bg-pale-pink/50 border-l-4 border-red">
              <p className="font-heading text-dark-red text-sm uppercase tracking-wide mb-2">
                This Is Not A Concept
              </p>
              <p className="font-secondary text-dark-red/70">
                Our systems are live and operating right now. The platform, the processes,
                the team — all proven through real wedding delivery.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            HOW IT WORKS - Partnership Model
            ============================================ */}
        <section id="how-it-works" className="py-24 lg:py-32 px-6 lg:px-16 bg-pale-pink">
          <div className="max-w-4xl">
            <p className="text-red-red text-sm tracking-[0.25em] uppercase mb-6">
              How It Works
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-8">
              Clear division.<br />
              Aligned incentives.
            </h2>

            {/* Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="font-heading text-dark-red text-lg mb-6 border-b border-dark-red/20 pb-4">
                  Bali Love Handles
                </p>
                <ul className="space-y-4">
                  <ResponsibilityItem text="All marketing and lead generation" />
                  <ResponsibilityItem text="Sales inquiries and venue tours" />
                  <ResponsibilityItem text="Wedding planning and coordination" />
                  <ResponsibilityItem text="Day-of execution" />
                  <ResponsibilityItem text="Guest communications" />
                </ul>
              </div>
              <div>
                <p className="font-heading text-dark-red text-lg mb-6 border-b border-dark-red/20 pb-4">
                  Luna Provides
                </p>
                <ul className="space-y-4">
                  <ResponsibilityItem text="Venue and event spaces" />
                  <ResponsibilityItem text="Food & beverage" />
                  <ResponsibilityItem text="On-site support" />
                  <ResponsibilityItem text="Brand collaboration" />
                  <ResponsibilityItem text="The Luna experience" />
                </ul>
              </div>
            </div>

            {/* Guest Experience */}
            <div className="p-6 bg-white border-l-4 border-red">
              <p className="font-heading text-dark-red text-lg mb-2">The Guest Experience</p>
              <p className="font-secondary text-dark-red/70 text-base leading-relaxed">
                Couples book through Bali Love, experience a Luna wedding, guests enjoy Luna&apos;s
                F&B and hospitality. Seamless from first inquiry to last dance.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            REVENUE MODEL - Economics
            ============================================ */}
        <section id="revenue-model" className="py-24 lg:py-32 px-6 lg:px-16 bg-dark-red">
          <div className="max-w-4xl">
            <p className="text-red-red text-sm tracking-[0.25em] uppercase mb-6">
              Revenue Model
            </p>
            <h2 className="font-heading text-white text-3xl md:text-4xl leading-tight mb-8">
              Luna keeps 90%.<br />
              We succeed when you succeed.
            </h2>

            <div className="space-y-6 font-secondary text-white/70 text-lg leading-relaxed mb-12">
              <p>
                Simple economics. We charge couples a planning fee. We receive 10% commission
                on Luna products. Luna retains 90% of all Luna revenue.
              </p>
            </div>

            {/* Revenue Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 p-6">
                <p className="text-white/50 text-sm uppercase tracking-wide mb-2">Planning Fee</p>
                <p className="font-heading text-white text-xl mb-2">Bali Love → Couples</p>
                <p className="font-secondary text-white/60 text-sm">
                  We charge couples directly for planning services. Separate from Luna pricing.
                </p>
              </div>
              <div className="bg-white/10 p-6">
                <p className="text-white/50 text-sm uppercase tracking-wide mb-2">F&B + Venue</p>
                <p className="font-heading text-white text-xl mb-2">Luna Keeps 90%</p>
                <p className="font-secondary text-white/60 text-sm">
                  10% commission to Bali Love. Luna retains the lion&apos;s share.
                </p>
              </div>
              <div className="bg-white/10 p-6">
                <p className="text-white/50 text-sm uppercase tracking-wide mb-2">Vendor Services</p>
                <p className="font-heading text-white text-xl mb-2">Separate</p>
                <p className="font-secondary text-white/60 text-sm">
                  Styling, photography, etc. Luna not involved in vendor arrangements.
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="border-l-2 border-red-red pl-6">
              <p className="font-heading text-white text-lg mb-2">The Math Is Simple</p>
              <p className="font-secondary text-white/60 mb-4">
                For every wedding at Luna:
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <p className="text-white/70">Luna F&B + Venue Revenue</p>
                  <p className="text-white">100%</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white/70">Bali Love Commission</p>
                  <p className="text-white">10%</p>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-3">
                  <p className="text-white font-medium">Luna Keeps</p>
                  <p className="text-red-red font-medium">90%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            IMPLEMENTATION - What We'd Do
            ============================================ */}
        <section id="implementation" className="py-24 lg:py-32 px-6 lg:px-16 bg-white">
          <div className="max-w-4xl">
            <p className="text-red text-sm tracking-[0.25em] uppercase mb-6">
              Implementation
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-8">
              What we&apos;d build together.
            </h2>

            <div className="space-y-12">
              <PhaseCard
                phase="01"
                title="Foundation"
                timeline="Month 1-2"
                items={[
                  'Dedicated Luna landing page',
                  'Luna-specific marketing campaigns',
                  'Sales process and tour protocol',
                  'Coordinator assignment and training',
                ]}
              />
              <PhaseCard
                phase="02"
                title="Ramp"
                timeline="Month 3-4"
                items={[
                  'Consistent lead flow established',
                  'Booking pipeline building',
                  'Operational rhythm developing',
                  'Feedback and refinement',
                ]}
              />
              <PhaseCard
                phase="03"
                title="Optimize"
                timeline="Month 5-6"
                items={[
                  'Marketing efficiency improvements',
                  'Process refinements based on learnings',
                  'Capacity planning',
                  'Potential expansion of scope',
                ]}
              />
            </div>
          </div>
        </section>

        {/* ============================================
            EXPECTATIONS - What We'd Expect
            ============================================ */}
        <section id="expectations" className="py-24 lg:py-32 px-6 lg:px-16 bg-sky-blue">
          <div className="max-w-4xl">
            <p className="text-dark-red/60 text-sm tracking-[0.25em] uppercase mb-6">
              Expectations
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-8">
              Projections, not promises.
            </h2>

            <div className="space-y-6 font-secondary text-dark-red/80 text-lg leading-relaxed mb-12">
              <p>
                <span className="text-red-red font-medium">Important:</span> These are not guarantees.
                They&apos;re projections based on what we&apos;ve seen work elsewhere, applied to Luna&apos;s situation.
                Actual results depend on execution and market conditions.
              </p>
            </div>

            {/* Scenarios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white/50">
                <p className="text-dark-red/50 text-sm uppercase tracking-wide mb-2">Conservative</p>
                <p className="font-heading text-dark-red text-3xl mb-2">4-5/month</p>
                <p className="font-secondary text-dark-red/60 text-sm">50-60 weddings/year</p>
              </div>
              <div className="p-6 bg-white border-2 border-red">
                <p className="text-red text-sm uppercase tracking-wide mb-2">Base Case</p>
                <p className="font-heading text-dark-red text-3xl mb-2">6-8/month</p>
                <p className="font-secondary text-dark-red/60 text-sm">70-96 weddings/year</p>
              </div>
              <div className="p-6 bg-white/50">
                <p className="text-dark-red/50 text-sm uppercase tracking-wide mb-2">Optimistic</p>
                <p className="font-heading text-dark-red text-3xl mb-2">8-10/month</p>
                <p className="font-secondary text-dark-red/60 text-sm">96-120 weddings/year</p>
              </div>
            </div>

            {/* What Drives Success */}
            <div className="p-6 bg-white border-l-4 border-red">
              <p className="font-heading text-dark-red text-lg mb-4">What Drives Success</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-secondary text-dark-red/70 text-sm">
                <div>• Lead quality — targeting couples who fit Luna&apos;s style</div>
                <div>• Tour experience — Luna shining during visits</div>
                <div>• F&B delivery — guests raving about the food</div>
                <div>• Coordination — smooth planning process</div>
                <div>• Word of mouth — happy couples referring others</div>
                <div>• Marketing investment level and consistency</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            BEYOND WEDDINGS - LoveOS Platform
            ============================================ */}
        <section id="beyond-weddings" className="py-24 lg:py-32 px-6 lg:px-16 bg-white">
          <div className="max-w-4xl">
            <p className="text-red text-sm tracking-[0.25em] uppercase mb-6">
              Beyond Weddings
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-8">
              Other events. One platform.<br />
              Shape it with us.
            </h2>

            <div className="space-y-6 font-secondary text-dark-red/70 text-lg leading-relaxed mb-12">
              <p>
                Weddings are the start, not the limit. We&apos;re happy to explore lead generation
                and referrals for other Luna events — corporate functions, private parties,
                special occasions. Same marketing engine, broader reach.
              </p>
            </div>

            {/* Other Events */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="border-l-2 border-red pl-6">
                <p className="font-heading text-dark-red text-lg mb-2">Other Event Lead Gen</p>
                <p className="font-secondary text-dark-red/60 text-sm">
                  Corporate events, private parties, special occasions — we can generate leads
                  and refer them to Luna. Same infrastructure, new revenue streams.
                </p>
              </div>
              <div className="border-l-2 border-red pl-6">
                <p className="font-heading text-dark-red text-lg mb-2">Multiple Lead Sources</p>
                <p className="font-secondary text-dark-red/60 text-sm">
                  Manage inquiries from other agents, direct leads, and our campaigns —
                  all in one place with clear attribution.
                </p>
              </div>
            </div>

            {/* LoveOS Platform */}
            <div className="p-8 bg-sky-blue/30 mb-8">
              <p className="font-heading text-dark-red text-xl mb-4">The LoveOS Platform</p>
              <p className="font-secondary text-dark-red/70 text-base leading-relaxed mb-6">
                We&apos;re building LoveOS — a platform that empowers venue teams to manage
                their event business. Pricing, lead sources, agent relationships, bookings —
                all in one system designed for how venues actually work.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4">
                  <p className="font-heading text-dark-red text-sm mb-1">Pricing Management</p>
                  <p className="font-secondary text-dark-red/50 text-xs">Set and adjust packages, seasonal rates</p>
                </div>
                <div className="bg-white p-4">
                  <p className="font-heading text-dark-red text-sm mb-1">Lead Tracking</p>
                  <p className="font-secondary text-dark-red/50 text-xs">All sources in one pipeline</p>
                </div>
                <div className="bg-white p-4">
                  <p className="font-heading text-dark-red text-sm mb-1">Agent Management</p>
                  <p className="font-secondary text-dark-red/50 text-xs">Track external planners and commissions</p>
                </div>
              </div>
            </div>

            {/* Design Partner */}
            <div className="p-6 bg-pale-pink border-l-4 border-red-red">
              <p className="font-heading text-dark-red text-lg mb-2">Be a Design Partner</p>
              <p className="font-secondary text-dark-red/70 text-base leading-relaxed mb-4">
                We&apos;re developing the venue version of LoveOS and we need collaborative feedback
                to get it right. Luna would be our first venue partner — helping shape the platform
                from the ground up.
              </p>
              <p className="font-secondary text-dark-red/70 text-base leading-relaxed">
                <span className="text-red-red font-medium">What this means:</span> You get early access,
                direct input on features, and a platform built around your actual needs — not our
                assumptions about what venues want.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            WHY THIS WORKS - Benefits
            ============================================ */}
        <section id="why-this-works" className="py-24 lg:py-32 px-6 lg:px-16 bg-pale-pink">
          <div className="max-w-4xl">
            <p className="text-red-red text-sm tracking-[0.25em] uppercase mb-6">
              Why This Works
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-12">
              Benefits for everyone.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BenefitCard
                title="For Luna"
                items={[
                  'Instant access to 240 booked weddings + 15,000 past guests',
                  'Incremental revenue, minimal operational burden',
                  'Professional wedding program without building the team',
                  'Marketing engine you don\'t have to run',
                  'Shape the LoveOS platform as a design partner',
                ]}
              />
              <BenefitCard
                title="For Bali Love"
                items={[
                  'Iconic venue to offer couples',
                  'Strong F&B partner',
                  'First design partner for LoveOS venue platform',
                  'Real feedback to build what venues actually need',
                ]}
              />
              <BenefitCard
                title="For Couples"
                items={[
                  'Seamless booking experience',
                  'Professional planning support',
                  'Stunning venue',
                  'Excellent food and service',
                ]}
              />
            </div>

            {/* Aligned Incentives */}
            <div className="mt-12 p-8 bg-white">
              <p className="font-heading text-dark-red text-xl mb-4">Aligned Incentives</p>
              <p className="font-secondary text-dark-red/70 text-lg leading-relaxed">
                Our 10% commission means we only make money when Luna makes money.
                We&apos;re not selling you software — we&apos;re proposing a partnership where
                both sides win together.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            NEXT STEPS
            ============================================ */}
        <section id="next-steps" className="py-24 lg:py-32 px-6 lg:px-16 bg-dark-red">
          <div className="max-w-4xl">
            <p className="text-red-red text-sm tracking-[0.25em] uppercase mb-6">
              Next Steps
            </p>
            <h2 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Let&apos;s talk.
            </h2>

            <div className="space-y-6 font-secondary text-white/70 text-xl leading-relaxed mb-12">
              <p>
                This proposal is the start of a conversation, not a contract.
                We&apos;d love to discuss how this could work for Luna.
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <StepCard number="01" title="Discussion" description="Align on model and expectations" />
              <StepCard number="02" title="Terms" description="Agree on structure and scope" />
              <StepCard number="03" title="Soft Launch" description="Start marketing, first bookings" />
              <StepCard number="04" title="Review" description="3-month check-in to assess" />
            </div>

            {/* Contact */}
            <div className="border-t border-white/20 pt-8">
              <p className="font-heading text-white text-lg mb-4">Bali Love</p>
              <p className="font-secondary text-white/60">
                <a href="mailto:tom@bali.love" className="text-red-red hover:text-white transition-colors">
                  tom@bali.love
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            FOOTER
            ============================================ */}
        <footer className="py-8 px-6 lg:px-16 bg-sky-blue">
          <div className="max-w-4xl flex justify-between items-center">
            <p className="font-secondary text-dark-red/50 text-sm">
              &copy; {new Date().getFullYear()} Bali Love. Confidential.
            </p>
            <p className="font-secondary text-dark-red/50 text-sm">
              Partnership Proposal for Luna Beach Club
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ============================================
   Component: Navigation Item
   ============================================ */
function NavItem({ href, label, description }: { href: string; label: string; description: string }) {
  return (
    <li>
      <a href={href} className="block group">
        <span className="block font-heading text-dark-red text-sm tracking-widest group-hover:text-red transition-colors">
          {label}
        </span>
        <span className="block text-dark-red/30 text-[10px] tracking-wider uppercase mt-1.5 group-hover:text-dark-red/50 transition-colors">
          {description}
        </span>
      </a>
    </li>
  );
}

/* ============================================
   Component: Capability Card
   ============================================ */
function CapabilityCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <span className="font-heading text-red-red text-lg">{number}</span>
      <div>
        <p className="font-heading text-dark-red text-lg mb-2">{title}</p>
        <p className="font-secondary text-dark-red/60 text-sm">{description}</p>
      </div>
    </div>
  );
}

/* ============================================
   Component: Responsibility Item
   ============================================ */
function ResponsibilityItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-red mt-1">•</span>
      <span className="font-secondary text-dark-red/70">{text}</span>
    </li>
  );
}

/* ============================================
   Component: Phase Card
   ============================================ */
function PhaseCard({ phase, title, timeline, items }: { phase: string; title: string; timeline: string; items: string[] }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <span className="font-heading text-red-red text-2xl">{phase}</span>
      </div>
      <div className="flex-1 border-l border-dark-red/20 pl-6">
        <div className="flex items-baseline gap-4 mb-4">
          <p className="font-heading text-dark-red text-xl">{title}</p>
          <p className="font-secondary text-dark-red/50 text-sm">{timeline}</p>
        </div>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="font-secondary text-dark-red/70 text-sm flex items-start gap-2">
              <span className="text-red">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ============================================
   Component: Benefit Card
   ============================================ */
function BenefitCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 bg-white">
      <p className="font-heading text-dark-red text-lg mb-4">{title}</p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="font-secondary text-dark-red/60 text-sm flex items-start gap-2">
            <span className="text-red">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================
   Component: Step Card
   ============================================ */
function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <span className="font-heading text-red-red text-3xl block mb-2">{number}</span>
      <p className="font-heading text-white text-sm mb-1">{title}</p>
      <p className="font-secondary text-white/50 text-xs">{description}</p>
    </div>
  );
}
