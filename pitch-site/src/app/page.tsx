'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PITCH_PASSWORD = 'shut-up-and-take-my-money';

// Navigation items for the pitch
const pitchNavigation = [
  { id: 'hero', label: 'Overview', description: 'The opportunity' },
  { id: 'problem', label: 'Problem', description: 'Market pain point' },
  { id: 'solution', label: 'Solution', description: 'Our platform' },
  { id: 'traction', label: 'Traction', description: '10K+ bookings' },
  { id: 'market', label: 'Market', description: '$300B opportunity' },
  { id: 'business-model', label: 'Business Model', description: 'How we make money' },
  { id: 'competition', label: 'Competition', description: 'Our advantage' },
  { id: 'team', label: 'Team', description: 'Who we are' },
  { id: 'the-ask', label: 'The Ask', description: '$500K-1M seed' },
];

export default function PitchPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('pitch-auth');
    if (stored === 'true') setIsAuthenticated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PITCH_PASSWORD) {
      sessionStorage.setItem('pitch-auth', 'true');
      setIsAuthenticated(true);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-dark-red flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <h1 className="font-heading text-white text-3xl mb-2">LoveOS</h1>
          <p className="text-white/50 text-sm mb-8">Password to continue</p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Password"
              className={`w-full px-4 py-3 bg-white/10 text-white placeholder-white/40 border ${error ? 'border-red-red' : 'border-white/20'} focus:border-white/50 outline-none mb-4`}
              autoFocus
            />
            {error && <p className="text-red-red text-sm mb-4">Wrong password. Try again.</p>}
            <button
              type="submit"
              className="w-full bg-red text-white py-3 text-sm tracking-wide hover:bg-white hover:text-dark-red transition-colors"
            >
              Enter
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
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-72 bg-pale-pink/30 border-r border-dark-red/10 z-50">
        {/* Logo/Brand */}
        <div className="p-8 pb-0">
          <Link href="/" className="block">
            <h1 className="font-logo text-dark-red text-3xl tracking-wide">
              LoveOS
            </h1>
            <p className="text-dark-red/50 text-xs mt-2 uppercase tracking-widest">
              Investor Pitch
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-8 pt-12 overflow-y-auto">
          <ul className="space-y-5">
            {pitchNavigation.map((item) => (
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
            href="mailto:tom@bali.love"
            className="block w-full text-center bg-red text-white py-4 text-sm tracking-wide hover:bg-dark-red transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Contact Info */}
        <div className="px-8 pb-8 text-dark-red/50 text-xs space-y-1">
          <p>Seed Round 2026</p>
          <p>$500K - $1M</p>
        </div>
      </aside>

      {/* ============================================
          MAIN CONTENT - Scrolling sections
          ============================================ */}
      <main className="flex-1 lg:ml-72 bg-white">
        {/* Mobile Header */}
        <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-dark-red">
          <h1 className="font-logo text-white text-xl">LoveOS</h1>
          <span className="text-white/70 text-sm">Pitch Deck</span>
        </header>

        {/* ============================================
            HERO - The Hook
            ============================================ */}
        <section id="hero" className="relative min-h-screen w-full flex items-center bg-dark-red">
          <div className="px-6 lg:px-16 py-32 lg:py-0 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-red-red text-sm tracking-[0.3em] uppercase mb-6">
                Seed Round 2026
              </p>
              <h1 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                The wedding software<br />
                hotels actually need.
              </h1>
              <p className="font-secondary text-white/70 text-xl max-w-2xl mb-12 leading-relaxed">
                A battle-tested wedding platform that helps hotels capture the $120K+
                revenue opportunity from every wedding they host.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl">
                <div>
                  <p className="font-heading text-red-red text-4xl md:text-5xl mb-2">300+</p>
                  <p className="font-secondary text-white/50 text-sm uppercase tracking-wide">Weddings Delivered</p>
                </div>
                <div>
                  <p className="font-heading text-red-red text-4xl md:text-5xl mb-2">2+</p>
                  <p className="font-secondary text-white/50 text-sm uppercase tracking-wide">Years in Production</p>
                </div>
                <div>
                  <p className="font-heading text-red-red text-4xl md:text-5xl mb-2">$500K</p>
                  <p className="font-secondary text-white/50 text-sm uppercase tracking-wide">Raising</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-white/40 animate-pulse" />
          </div>
        </section>

        {/* ============================================
            PROBLEM - The Pain Point
            ============================================ */}
        <section id="problem" className="py-24 lg:py-32 px-6 lg:px-16 bg-sky-blue">
          <div className="max-w-4xl">
            <p className="text-red text-sm tracking-[0.25em] uppercase mb-6">
              The Problem
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              Hotel wedding teams are<br />
              undervalued & under-tooled.
            </h2>
            <div className="space-y-6 font-secondary text-dark-red/80 text-lg leading-relaxed">
              <p>
                A single wedding generates <span className="text-red-red font-medium">$120,000+</span> for
                a hotel — the wedding itself plus guest room nights. Yet wedding teams are stuck
                using email, WhatsApp, and spreadsheets.
              </p>
              <p>
                They struggle to get budget for software. Meanwhile, hotels happily pay
                <span className="text-red-red font-medium"> 15-20% commissions</span> to external planners
                and OTAs like Booking.com to fill their rooms.
              </p>
            </div>

            {/* Pain Points */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l-2 border-red pl-6">
                <p className="font-heading text-dark-red text-lg mb-2">No Purpose-Built Tools</p>
                <p className="font-secondary text-dark-red/60 text-sm">Generic CRMs don&apos;t understand weddings</p>
              </div>
              <div className="border-l-2 border-red pl-6">
                <p className="font-heading text-dark-red text-lg mb-2">Lost Revenue</p>
                <p className="font-secondary text-dark-red/60 text-sm">Guest bookings slip through the cracks</p>
              </div>
              <div className="border-l-2 border-red pl-6">
                <p className="font-heading text-dark-red text-lg mb-2">Manual Everything</p>
                <p className="font-secondary text-dark-red/60 text-sm">Hours spent on tasks that should be automated</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SOLUTION - What We Built
            ============================================ */}
        <section id="solution" className="py-24 lg:py-32 px-6 lg:px-16">
          <div className="max-w-4xl">
            <p className="text-red text-sm tracking-[0.25em] uppercase mb-6">
              The Solution
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-8">
              A complete wedding platform<br />
              hotels white-label as their own.
            </h2>
            <p className="font-secondary text-dark-red/70 text-lg leading-relaxed mb-12">
              Built from 2+ years of real wedding operations. Not a CRM with wedding features
              bolted on — a platform designed from the ground up for how hotel wedding teams
              actually work.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title="Lead Management"
                description="Track every enquiry from first contact to signed contract. Never lose a lead again."
              />
              <FeatureCard
                title="Guest Self-Service"
                description="Couples and guests book rooms, RSVP, and manage their experience directly."
              />
              <FeatureCard
                title="Wedding Coordination"
                description="Timeline, tasks, vendor management, seating — everything in one place."
              />
              <FeatureCard
                title="Financial Integration"
                description="Payments, invoicing, and Xero integration. Real-time revenue visibility."
              />
            </div>

            {/* Tech Stack Note */}
            <div className="mt-12 p-6 bg-pale-pink/50 border-l-4 border-red">
              <p className="font-heading text-dark-red text-sm uppercase tracking-wide mb-2">
                Production-Proven Technology
              </p>
              <p className="font-secondary text-dark-red/70">
                192 database entities • 63+ server modules • 70+ API services
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            TRACTION - What We've Done
            ============================================ */}
        <section id="traction" className="py-24 lg:py-32 px-6 lg:px-16 bg-pale-pink">
          <div className="max-w-4xl">
            <p className="text-red-red text-sm tracking-[0.25em] uppercase mb-6">
              Traction
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              This isn&apos;t a concept.<br />
              <span className="italic font-light">It&apos;s proven.</span>
            </h2>
            <p className="font-secondary text-dark-red/80 text-xl leading-relaxed mb-8">
              We&apos;ve been running weddings on this platform for over two years through BaliLove,
              our destination wedding business in Bali. <span className="text-red-red font-medium">The software isn&apos;t a concept — it&apos;s
              live and operating right now.</span>
            </p>

            {/* Pipeline */}
            <div className="p-6 bg-white border-l-4 border-red mb-12">
              <p className="font-heading text-dark-red text-lg mb-2">Already in Conversations</p>
              <p className="font-secondary text-dark-red/70 text-base leading-relaxed">
                We&apos;re in active discussions with <span className="text-red-red font-medium">4 hotels and 1 beach club</span> to
                implement our solution. Beyond the platform, we offer lead generation and done-for-you sales
                and planning services — hotels don&apos;t even need to resource those teams if they don&apos;t want to.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-dark-red/20">
              <div>
                <p className="font-heading text-4xl md:text-5xl text-red-red mb-2">10K+</p>
                <p className="font-secondary text-dark-red/60 text-sm uppercase tracking-wide">Bookings Processed</p>
              </div>
              <div>
                <p className="font-heading text-4xl md:text-5xl text-red-red mb-2">15K+</p>
                <p className="font-secondary text-dark-red/60 text-sm uppercase tracking-wide">Guests in 2026</p>
              </div>
              <div>
                <p className="font-heading text-4xl md:text-5xl text-red-red mb-2">220+</p>
                <p className="font-secondary text-dark-red/60 text-sm uppercase tracking-wide">Couples in Planning</p>
              </div>
              <div>
                <p className="font-heading text-4xl md:text-5xl text-red-red mb-2">2+</p>
                <p className="font-secondary text-dark-red/60 text-sm uppercase tracking-wide">Years Live</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            MARKET - The Opportunity
            ============================================ */}
        <section id="market" className="py-24 lg:py-32 px-6 lg:px-16">
          <div className="max-w-4xl">
            <p className="text-red text-sm tracking-[0.25em] uppercase mb-6">
              Market Opportunity
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-8">
              $300B global wedding market.<br />
              25% are destination weddings.
            </h2>

            <div className="space-y-6 font-secondary text-dark-red/70 text-lg leading-relaxed mb-12">
              <p>
                91% of couples plan their weddings online. Hotels with wedding venues
                are our target — they already have the infrastructure, they just need
                the tools.
              </p>
            </div>

            {/* Market Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-sky-blue/30">
                <p className="font-heading text-dark-red text-3xl mb-2">$300B</p>
                <p className="font-secondary text-dark-red/60 text-sm">Global Wedding Market</p>
              </div>
              <div className="p-6 bg-sky-blue/30">
                <p className="font-heading text-dark-red text-3xl mb-2">25%</p>
                <p className="font-secondary text-dark-red/60 text-sm">Destination Weddings</p>
              </div>
              <div className="p-6 bg-sky-blue/30">
                <p className="font-heading text-dark-red text-3xl mb-2">91%</p>
                <p className="font-secondary text-dark-red/60 text-sm">Plan Online</p>
              </div>
            </div>

            {/* Go-to-Market */}
            <div className="mt-12">
              <p className="font-heading text-dark-red text-lg mb-6">Go-to-Market Strategy</p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="font-heading text-red-red">01</span>
                  <div>
                    <p className="text-dark-red font-medium">Bali Proof of Concept</p>
                    <p className="font-secondary text-dark-red/60 text-sm">2-3 brand-name hotel pilots leveraging existing relationships</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-heading text-red-red">02</span>
                  <div>
                    <p className="text-dark-red font-medium">Regional Expansion</p>
                    <p className="font-secondary text-dark-red/60 text-sm">India, Europe — high-volume destination wedding markets</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-heading text-red-red">03</span>
                  <div>
                    <p className="text-dark-red font-medium">Global Scale</p>
                    <p className="font-secondary text-dark-red/60 text-sm">Luxury hotel chains, independent venues worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            BUSINESS MODEL - How We Make Money
            ============================================ */}
        <section id="business-model" className="py-24 lg:py-32 px-6 lg:px-16 bg-dark-red">
          <div className="max-w-4xl">
            <p className="text-red-red text-sm tracking-[0.25em] uppercase mb-6">
              Business Model
            </p>
            <h2 className="font-heading text-white text-3xl md:text-4xl leading-tight mb-8">
              Low-friction commission model.<br />
              Hotels pay when they win.
            </h2>

            <div className="space-y-6 font-secondary text-white/70 text-lg leading-relaxed mb-12">
              <p>
                3-4% commission on bookings processed through the platform. Compare to
                15-20% they pay external planners. Small onboarding fee covers training
                and setup.
              </p>
            </div>

            {/* Revenue Per Wedding */}
            <div className="bg-white/10 p-8 mb-8">
              <p className="font-heading text-white text-lg mb-6">Revenue Per Wedding</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-wide mb-1">Wedding Package (4% of $50K)</p>
                  <p className="font-heading text-red-red text-2xl">$2,000</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-wide mb-1">Room Revenue (4% of $72K)</p>
                  <p className="font-heading text-red-red text-2xl">$2,880</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/50 text-sm uppercase tracking-wide mb-1">Total Per Wedding</p>
                <p className="font-heading text-white text-4xl">$4,880</p>
              </div>
            </div>

            {/* Future Upside */}
            <div className="border-l-2 border-red-red pl-6">
              <p className="font-heading text-white text-lg mb-2">Future: Marketplace Revenue</p>
              <p className="font-secondary text-white/60">
                When guests book honeymoons, tours, and experiences across our venue network —
                additional $1,500-3,000+ per wedding.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            COMPETITION - Our Advantage
            ============================================ */}
        <section id="competition" className="py-24 lg:py-32 px-6 lg:px-16">
          <div className="max-w-4xl">
            <p className="text-red text-sm tracking-[0.25em] uppercase mb-6">
              Competitive Landscape
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-8">
              Built from operations,<br />
              not from a boardroom.
            </h2>

            <p className="font-secondary text-dark-red/70 text-lg leading-relaxed mb-12">
              Competitors are event platforms that added wedding features. We built from
              real wedding operations — and we have the relationships and trust with Bali&apos;s
              top venues that took years to develop.
            </p>

            {/* Comparison */}
            <div className="space-y-4">
              <CompetitorRow
                competitor="Tripleseat / Event Temple"
                weakness="General event focus, not wedding-specific"
                ourEdge="Purpose-built for wedding workflows"
              />
              <CompetitorRow
                competitor="Planning Pod"
                weakness="Planner tools, not venue/hotel focused"
                ourEdge="Designed for hotel teams"
              />
              <CompetitorRow
                competitor="Generic CRMs"
                weakness="No guest self-service, no wedding logic"
                ourEdge="Full guest experience + operations"
              />
            </div>

            {/* Key Differentiators */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-pale-pink/50">
                <p className="font-heading text-dark-red text-sm uppercase tracking-wide mb-2">
                  Relational Moat
                </p>
                <p className="font-secondary text-dark-red/60 text-sm">
                  Years of trust with Bali&apos;s top venues — relationships competitors can&apos;t replicate overnight
                </p>
              </div>
              <div className="p-6 bg-pale-pink/50">
                <p className="font-heading text-dark-red text-sm uppercase tracking-wide mb-2">
                  Zero Friction Adoption
                </p>
                <p className="font-secondary text-dark-red/60 text-sm">
                  Commission model means no budget approval needed — teams can say yes immediately
                </p>
              </div>
              <div className="p-6 bg-pale-pink/50">
                <p className="font-heading text-dark-red text-sm uppercase tracking-wide mb-2">
                  Makes Teams Less Busy
                </p>
                <p className="font-secondary text-dark-red/60 text-sm">
                  Automation + done-for-you services mean wedding teams can handle more with less stress
                </p>
              </div>
              <div className="p-6 bg-pale-pink/50">
                <p className="font-heading text-dark-red text-sm uppercase tracking-wide mb-2">
                  Guest Self-Service
                </p>
                <p className="font-secondary text-dark-red/60 text-sm">
                  Only platform where guests book directly — hotels capture more room revenue
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            TEAM - Who We Are
            ============================================ */}
        <section id="team" className="py-24 lg:py-32 px-6 lg:px-16 bg-pale-pink">
          <div className="max-w-4xl">
            <p className="text-red-red text-sm tracking-[0.25em] uppercase mb-6">
              The Team
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-12">
              Operators who built the product<br />
              we needed ourselves.
            </h2>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TeamCard
                name="Tom Hay"
                role="Founder & CEO"
                description="Built and operated BaliLove for 2+ years. Background in hospitality and digital marketing."
              />
              <TeamCard
                name="Diana"
                role="Digital Transformation"
                description="Director-level, leaving corporate to join. Deep enterprise software experience."
              />
              <TeamCard
                name="Imelda"
                role="Venue Relationships"
                description="20 years at The Mulia + top Bali venues. Unmatched hotel network."
              />
              <TeamCard
                name="Development Team"
                role="Engineering (5 people)"
                description="Full-stack team: developers, QA, UX, and product management."
              />
            </div>
          </div>
        </section>

        {/* ============================================
            THE ASK - Investment
            ============================================ */}
        <section id="the-ask" className="py-24 lg:py-32 px-6 lg:px-16 bg-dark-red">
          <div className="max-w-4xl">
            <p className="text-red-red text-sm tracking-[0.25em] uppercase mb-6">
              The Ask
            </p>
            <h2 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              $500K - $1M<br />
              <span className="italic font-light">Seed Round</span>
            </h2>

            <p className="font-secondary text-white/70 text-xl leading-relaxed mb-12">
              Capital to transform a proven wedding business into a scalable SaaS platform
              for the global hotel industry.
            </p>

            {/* Use of Funds */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-6">
                <p className="font-heading text-white text-lg mb-4">Product Development</p>
                <ul className="space-y-2 font-secondary text-white/60 text-sm">
                  <li>• Multi-tenant architecture</li>
                  <li>• Mobile app (iOS/Android)</li>
                  <li>• White-label customization</li>
                  <li>• Enterprise integrations</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6">
                <p className="font-heading text-white text-lg mb-4">Go-to-Market</p>
                <ul className="space-y-2 font-secondary text-white/60 text-sm">
                  <li>• Sales team for hotel pilots</li>
                  <li>• Customer success & onboarding</li>
                  <li>• Marketing & brand launch</li>
                  <li>• Regional expansion prep</li>
                </ul>
              </div>
            </div>

            {/* Milestones */}
            <div className="border-t border-white/20 pt-8">
              <p className="font-heading text-white text-lg mb-6">12-Month Milestones</p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="font-heading text-red-red text-3xl mb-2">10</p>
                  <p className="font-secondary text-white/50 text-sm">Venues Live in Bali</p>
                </div>
                <div>
                  <p className="font-heading text-red-red text-3xl mb-2">800</p>
                  <p className="font-secondary text-white/50 text-sm">Weddings Per Year</p>
                </div>
                <div>
                  <p className="font-heading text-red-red text-3xl mb-2">$3.9M</p>
                  <p className="font-secondary text-white/50 text-sm">Platform Revenue</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FOOTER / CONTACT
            ============================================ */}
        <footer className="py-16 px-6 lg:px-16 bg-sky-blue">
          <div className="max-w-4xl">
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl mb-8">
              Let&apos;s talk.
            </h2>
            <div className="space-y-4 font-secondary text-dark-red/70">
              <p>
                <a href="mailto:tom@bali.love" className="text-red hover:text-dark-red transition-colors">
                  tom@bali.love
                </a>
              </p>
              <p>Bali, Indonesia</p>
            </div>
            <div className="mt-12 pt-8 border-t border-dark-red/10">
              <p className="font-secondary text-dark-red/50 text-sm">
                &copy; {new Date().getFullYear()} LoveOS. All rights reserved.
              </p>
            </div>
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
   Component: Feature Card
   ============================================ */
function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-l-2 border-red pl-6">
      <p className="font-heading text-dark-red text-lg mb-2">{title}</p>
      <p className="font-secondary text-dark-red/60 text-sm">{description}</p>
    </div>
  );
}

/* ============================================
   Component: Competitor Row
   ============================================ */
function CompetitorRow({ competitor, weakness, ourEdge }: { competitor: string; weakness: string; ourEdge: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-dark-red/10">
      <p className="font-heading text-dark-red text-sm">{competitor}</p>
      <p className="font-secondary text-dark-red/50 text-sm">{weakness}</p>
      <p className="font-secondary text-red text-sm">{ourEdge}</p>
    </div>
  );
}

/* ============================================
   Component: Team Card
   ============================================ */
function TeamCard({ name, role, description }: { name: string; role: string; description: string }) {
  return (
    <div className="p-6 bg-white">
      <p className="font-heading text-dark-red text-lg mb-1">{name}</p>
      <p className="text-red text-sm uppercase tracking-wide mb-4">{role}</p>
      <p className="font-secondary text-dark-red/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
