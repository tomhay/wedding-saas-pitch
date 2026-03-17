'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const KICKOFF_PASSWORD = 'luna-bali-love';

const kickoffNavigation = [
  { id: 'hero', label: 'Welcome', description: 'Let\'s get started' },
  { id: 'timeline', label: 'Timeline', description: 'Week by week' },
  { id: 'your-team', label: 'Your Team', description: 'Who does what' },
  { id: 'from-andy', label: 'Andy', description: 'Sales & marketing' },
  { id: 'from-tina', label: 'Tina', description: 'Events & ops' },
  { id: 'from-maria', label: 'Maria', description: 'Creative & brand' },
  { id: 'from-jacob', label: 'Jacob', description: 'Tech & API' },
  { id: 'our-team', label: 'Our Team', description: 'Tom & Imelda' },
  { id: 'our-side', label: 'Our Side', description: 'What we\'re building' },
  { id: 'kickoff-meeting', label: 'Kickoff Meeting', description: 'Agenda' },
  { id: 'lets-go', label: 'Let\'s Go', description: 'Next steps' },
];

export default function LunaKickoffPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('luna-auth');
    if (stored === 'true') setIsAuthenticated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === KICKOFF_PASSWORD) {
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
          <p className="text-dark-red/50 text-sm mb-8">Partnership Kickoff</p>
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
              View Kickoff
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* LEFT SIDEBAR */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-72 bg-sky-blue/30 border-r border-dark-red/10 z-50">
        <div className="p-8 pb-0">
          <Link href="/luna-kickoff" className="block">
            <h1 className="font-logo text-dark-red text-2xl tracking-wide">
              Luna × Bali Love
            </h1>
            <p className="text-dark-red/50 text-xs mt-2 uppercase tracking-widest">
              Partnership Kickoff
            </p>
          </Link>
        </div>

        <nav className="flex-1 px-8 pt-12 overflow-y-auto">
          <ul className="space-y-5">
            {kickoffNavigation.map((item) => (
              <NavItem
                key={item.id}
                href={`#${item.id}`}
                label={item.label}
                description={item.description}
              />
            ))}
          </ul>
        </nav>

        <div className="p-8">
          <a
            href="#lets-go"
            className="block w-full text-center bg-red text-white py-4 text-sm tracking-wide hover:bg-dark-red transition-colors"
          >
            Let&apos;s Go
          </a>
        </div>

        <div className="px-8 pb-8 text-dark-red/50 text-xs space-y-1">
          <p>Bali Love</p>
          <p>Partnership Kickoff 2026</p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 lg:ml-72 bg-white">
        {/* Mobile Header */}
        <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-dark-red">
          <h1 className="font-logo text-white text-xl">Luna × Bali Love</h1>
          <span className="text-white/70 text-sm">Kickoff</span>
        </header>

        {/* ============================================
            HERO
            ============================================ */}
        <section id="hero" className="relative min-h-screen w-full flex items-center bg-sky-blue">
          <div className="px-6 lg:px-16 py-32 lg:py-0 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-dark-red/60 text-sm tracking-[0.3em] uppercase mb-6">
                Partnership Kickoff
              </p>
              <h1 className="font-heading text-dark-red text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                Let&apos;s get this<br />
                off the ground.
              </h1>
              <p className="font-secondary text-dark-red/70 text-xl max-w-2xl mb-12 leading-relaxed">
                Everything we need from each other to launch the Luna wedding program.
                Clear actions, clear owners, clear timeline.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl">
                <div className="border-l-2 border-dark-red/30 pl-6">
                  <p className="font-heading text-dark-red text-3xl mb-1">8</p>
                  <p className="font-secondary text-dark-red/60 text-sm">Weeks to launch</p>
                </div>
                <div className="border-l-2 border-dark-red/30 pl-6">
                  <p className="font-heading text-dark-red text-3xl mb-1">6</p>
                  <p className="font-secondary text-dark-red/60 text-sm">Luna team members</p>
                </div>
                <div className="border-l-2 border-dark-red/30 pl-6">
                  <p className="font-heading text-dark-red text-3xl mb-1">0</p>
                  <p className="font-secondary text-dark-red/60 text-sm">Cost to Luna</p>
                </div>
                <div className="border-l-2 border-dark-red/30 pl-6">
                  <p className="font-heading text-dark-red text-3xl mb-1">90%</p>
                  <p className="font-secondary text-dark-red/60 text-sm">Luna keeps</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-red/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-dark-red/40 animate-pulse" />
          </div>
        </section>

        {/* ============================================
            TIMELINE - Week by Week
            ============================================ */}
        <section id="timeline" className="py-24 lg:py-32 px-6 lg:px-16 bg-white">
          <div className="max-w-4xl">
            <p className="text-red text-sm tracking-[0.25em] uppercase mb-6">
              Timeline
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              Eight weeks to<br />
              first leads flowing.
            </h2>
            <p className="font-secondary text-dark-red/70 text-lg leading-relaxed mb-12">
              Here&apos;s how we get from signed agreement to live ads and leads in your pipeline.
            </p>

            <div className="space-y-12">
              <PhaseCard
                phase="W1"
                title="Agreement & Setup"
                timeline="Week 1–2"
                items={[
                  'Sign partnership agreement',
                  'Share brand assets (logos, photos, guidelines)',
                  'Provide POS API access credentials',
                  'Products loaded into our platform',
                  'WhatsApp ops group created',
                ]}
              />
              <PhaseCard
                phase="W2"
                title="Team Introductions & Site Familiarisation"
                timeline="Week 3–4"
                items={[
                  'Imelda visits Luna — meets Tina, Afi, Sisylia, and the events team',
                  'Full venue walkthrough of all event spaces',
                  'Understand Luna\'s products, setup logistics, and day-of operations',
                  'Product setup and configuration in the Bali Love app',
                  'Tour protocol agreed with Tina',
                ]}
              />
              <PhaseCard
                phase="W3"
                title="Marketing Launch"
                timeline="Week 5–6"
                items={[
                  'Luna wedding landing page goes live',
                  'Google Ads campaigns start running',
                  'Meta Ads campaigns start running',
                  'Email sequences built for Luna leads',
                  'Tom and Andy align on ad creative and messaging',
                ]}
              />
              <PhaseCard
                phase="W4"
                title="Pipeline Live & Optimise"
                timeline="Week 7–8"
                items={[
                  'First leads flowing from ads',
                  'Sales team following up on enquiries',
                  'First site tours booked at Luna',
                  'Lead quality review and ad optimisation',
                  'Monthly review cadence set with Andy',
                ]}
              />
            </div>
          </div>
        </section>

        {/* ============================================
            YOUR TEAM - Luna's team and roles
            ============================================ */}
        <section id="your-team" className="py-24 lg:py-32 px-6 lg:px-16 bg-pale-pink">
          <div className="max-w-4xl">
            <p className="text-red-red text-sm tracking-[0.25em] uppercase mb-6">
              Your Team
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-8">
              Who we need,<br />
              and what we need from them.
            </h2>
            <p className="font-secondary text-dark-red/70 text-lg leading-relaxed mb-12">
              We&apos;ve broken down exactly what we need from each person on your team.
              Most of it is one-time setup — then we take it from there.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TeamRoleCard
                name="Andy Keegan"
                role="Director of Sales & Marketing"
                tag="Commercial"
                description="Sign-off on the agreement, ad approval process, and overall partnership direction."
              />
              <TeamRoleCard
                name="Tina Ardie"
                role="Event Manager"
                tag="Operations"
                description="Availability calendar, tour protocol, standard packages, and day-of coordination."
              />
              <TeamRoleCard
                name="Afi"
                role="Sales Executive"
                tag="Day-to-Day"
                description="Partnership support, lead handoffs, and ongoing operational communication."
              />
              <TeamRoleCard
                name="Maria Magdalena"
                role="Creative"
                tag="Brand"
                description="Logos, venue photography, brand guidelines, and video content for marketing."
              />
              <TeamRoleCard
                name="Jacob Romy"
                role="IT Manager"
                tag="Tech"
                description="POS API access, booking engine details, subdomain setup, and analytics."
              />
              <TeamRoleCard
                name="Sisylia Paramitha"
                role="Sales Executive"
                tag="Events"
                description="Event booking support and coordination with our planning team."
              />
            </div>
          </div>
        </section>

        {/* ============================================
            FROM ANDY - What we need
            ============================================ */}
        <section id="from-andy" className="py-24 lg:py-32 px-6 lg:px-16 bg-dark-red">
          <div className="max-w-4xl">
            <p className="text-red-red text-sm tracking-[0.25em] uppercase mb-6">
              Andy Keegan
            </p>
            <h2 className="font-heading text-white text-3xl md:text-4xl leading-tight mb-4">
              Sales & Marketing
            </h2>
            <p className="font-secondary text-white/60 text-lg leading-relaxed mb-12">
              The commercial decisions that get us started.
            </p>

            <div className="space-y-4 mb-12">
              <ChecklistItem text="Review and sign the partnership agreement" />
              <ChecklistItem text="Provide Luna's legal entity name (PT name) for the agreement" />
              <ChecklistItem text="Confirm signatory name and title for Luna's side" />
              <ChecklistItem text="Introduce us to the full team (Tina, Afi, Sisylia, Maria, Jacob)" />
              <ChecklistItem text="Confirm who our day-to-day operational contact is" />
              <ChecklistItem text="Share any existing wedding enquiry pipeline or leads in progress" />
              <ChecklistItem text="Confirm ad creative approval process — who reviews, and expected turnaround time" />
            </div>

            <div className="border-l-2 border-red-red pl-6">
              <p className="font-heading text-white text-lg mb-2">Questions We&apos;d Like To Discuss</p>
              <div className="space-y-3 font-secondary text-white/60 text-sm">
                <p>• Are you open to us running Google/Meta ads under the Luna brand?</p>
                <p>• What does your current wedding pipeline look like? How many enquiries per month?</p>
                <p>• Are there other wedding planners you work with currently?</p>
                <p>• Can we get a subdomain (e.g., weddings.lunabeachclubbali.com) for our landing page?</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FROM TINA - Events & Operations
            ============================================ */}
        <section id="from-tina" className="py-24 lg:py-32 px-6 lg:px-16 bg-white">
          <div className="max-w-4xl">
            <p className="text-red text-sm tracking-[0.25em] uppercase mb-6">
              Tina Ardie
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-4">
              Events & Operations
            </h2>
            <p className="font-secondary text-dark-red/70 text-lg leading-relaxed mb-12">
              The operational details that make weddings run smoothly.
            </p>

            <div className="space-y-4 mb-12">
              <ChecklistItemDark text="Share availability calendar — which dates and spaces are booked for the next 12 months" />
              <ChecklistItemDark text="Confirm standard wedding packages (which spaces + F&B combos are most common)" />
              <ChecklistItemDark text="Tour protocol — how do we book site visits for couples? Who gives the tour?" />
              <ChecklistItemDark text="Any date restrictions, blackout periods, or minimum spend requirements" />
              <ChecklistItemDark text="Day-of coordination — what does Luna's team handle vs our coordinator" />
              <ChecklistItemDark text="Confirm event setup/pack-down timelines and venue-specific logistics" />
            </div>

            <div className="border-l-2 border-red pl-6">
              <p className="font-heading text-dark-red text-lg mb-2">Questions We&apos;d Like To Discuss</p>
              <div className="space-y-3 font-secondary text-dark-red/60 text-sm">
                <p>• What&apos;s the current process when a wedding enquiry comes in?</p>
                <p>• How far in advance do weddings typically book?</p>
                <p>• What&apos;s the typical wedding package you sell? (space + F&B + drinks)</p>
                <p>• Any no-go dates or restrictions we should know about?</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FROM MARIA - Creative & Brand
            ============================================ */}
        <section id="from-maria" className="py-24 lg:py-32 px-6 lg:px-16 bg-sky-blue">
          <div className="max-w-4xl">
            <p className="text-dark-red/60 text-sm tracking-[0.25em] uppercase mb-6">
              Maria Magdalena
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-4">
              Creative & Brand
            </h2>
            <p className="font-secondary text-dark-red/70 text-lg leading-relaxed mb-12">
              The assets we need to market Luna beautifully.
            </p>

            <div className="space-y-4 mb-12">
              <ChecklistItemDark text="Luna logo files (SVG and PNG, light and dark versions)" />
              <ChecklistItemDark text="Brand guidelines document (colours, fonts, tone of voice)" />
              <ChecklistItemDark text="High-resolution venue photography" />
              <ChecklistItemDark text="Video content if available (drone footage, walkthrough, event highlights)" />
              <ChecklistItemDark text="Any existing wedding-specific marketing materials or brochures" />
            </div>

            <div className="p-6 bg-white border-l-4 border-red">
              <p className="font-heading text-dark-red text-lg mb-4">Photography We Need Most</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-secondary text-dark-red/60 text-sm">
                <div>
                  <p className="text-dark-red font-medium mb-1">Elysium</p>
                  <p>Ceremony setup, ocean views, interior, air-conditioned space</p>
                </div>
                <div>
                  <p className="text-dark-red font-medium mb-1">Beer Garden</p>
                  <p>Reception setup, clifftop views, fire pit, dining layout</p>
                </div>
                <div>
                  <p className="text-dark-red font-medium mb-1">Restaurant 369</p>
                  <p>Dinner setup, sunset views, bamboo centrepiece</p>
                </div>
                <div>
                  <p className="text-dark-red font-medium mb-1">Main Stage</p>
                  <p>Overview, daybeds, pool area, Luna statue at sunset</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FROM JACOB - Tech & API
            ============================================ */}
        <section id="from-jacob" className="py-24 lg:py-32 px-6 lg:px-16 bg-dark-red">
          <div className="max-w-4xl">
            <p className="text-red-red text-sm tracking-[0.25em] uppercase mb-6">
              Jacob Romy
            </p>
            <h2 className="font-heading text-white text-3xl md:text-4xl leading-tight mb-4">
              Tech & API
            </h2>
            <p className="font-secondary text-white/60 text-lg leading-relaxed mb-12">
              The technical integration that connects our platforms.
            </p>

            <div className="space-y-4 mb-12">
              <ChecklistItem text="What POS system does Luna use? Can we get API credentials?" />
              <ChecklistItem text="What platform runs bookings.lunabeachclubbali.com?" />
              <ChecklistItem text="Can we set up a subdomain for the wedding landing page? (e.g., weddings.lunabeachclubbali.com)" />
              <ChecklistItem text="Google Analytics access (GA4) — or what tracking is currently in place" />
              <ChecklistItem text="Any existing CRM or lead tracking system we should know about" />
            </div>

            <div className="p-6 bg-white/10">
              <p className="font-heading text-white text-lg mb-4">What We&apos;re Building</p>
              <p className="font-secondary text-white/60 text-sm leading-relaxed mb-6">
                We want to connect to Luna&apos;s POS so that products, pricing, and availability
                sync automatically into our platform. Couples and guests can then browse and book
                Luna products directly. This means:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 p-4">
                  <p className="font-heading text-white text-sm mb-1">Product Sync</p>
                  <p className="font-secondary text-white/50 text-xs">F&B packages, venue rates, drinks menus pulled from your POS</p>
                </div>
                <div className="bg-white/10 p-4">
                  <p className="font-heading text-white text-sm mb-1">Availability</p>
                  <p className="font-secondary text-white/50 text-xs">Real-time availability so we never double-book</p>
                </div>
                <div className="bg-white/10 p-4">
                  <p className="font-heading text-white text-sm mb-1">Pricing</p>
                  <p className="font-secondary text-white/50 text-xs">Always up to date, no manual syncing needed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            OUR TEAM - Tom & Imelda
            ============================================ */}
        <section id="our-team" className="py-24 lg:py-32 px-6 lg:px-16 bg-white">
          <div className="max-w-4xl">
            <p className="text-red text-sm tracking-[0.25em] uppercase mb-6">
              Our Team
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-8">
              Who you&apos;ll be<br />
              working with.
            </h2>
            <p className="font-secondary text-dark-red/70 text-lg leading-relaxed mb-12">
              Two people leading the Luna partnership from our side — one on the ground,
              one driving marketing and the commercial relationship.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-sky-blue/30">
                <p className="font-heading text-dark-red text-2xl mb-1">Imelda</p>
                <p className="font-secondary text-red text-sm mb-6">On-the-Ground Lead</p>
                <div className="space-y-3 font-secondary text-dark-red/70 text-sm">
                  <p>• 20 years at The Mulia and top Bali venues</p>
                  <p>• Visits Luna in weeks 3–4 to meet the team</p>
                  <p>• Trains and supports your events team on the platform</p>
                  <p>• Understands Luna&apos;s products and configures them in the app</p>
                  <p>• Ongoing operational relationship with Tina and Afi</p>
                  <p>• Your day-to-day point of contact for venue operations</p>
                </div>
              </div>
              <div className="p-8 bg-pale-pink/50">
                <p className="font-heading text-dark-red text-2xl mb-1">Tom Hay</p>
                <p className="font-secondary text-red text-sm mb-6">Marketing & Commercial Lead</p>
                <div className="space-y-3 font-secondary text-dark-red/70 text-sm">
                  <p>• Founder & CEO of Bali Love</p>
                  <p>• Builds and manages the marketing engine (ads, landing page, content)</p>
                  <p>• Works with Andy on commercial alignment and ad approvals</p>
                  <p>• Manages the partnership relationship</p>
                  <p>• Coordinates with Jacob on tech integration</p>
                  <p>• Your point of contact for strategy and commercial decisions</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-sky-blue/50 border-l-4 border-red">
              <p className="font-heading text-dark-red text-sm uppercase tracking-wide mb-2">
                Clear Ownership
              </p>
              <p className="font-secondary text-dark-red/70">
                Imelda handles everything on the ground — products, training, operations.
                Tom handles everything digital — marketing, ads, tech, and the commercial relationship.
                You always know who to call.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            OUR SIDE - What Bali Love is building
            ============================================ */}
        <section id="our-side" className="py-24 lg:py-32 px-6 lg:px-16 bg-pale-pink">
          <div className="max-w-4xl">
            <p className="text-red text-sm tracking-[0.25em] uppercase mb-6">
              Our Side
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-8">
              What we&apos;re doing<br />
              in parallel.
            </h2>
            <p className="font-secondary text-dark-red/70 text-lg leading-relaxed mb-12">
              While your team provides the assets and access above, we&apos;re building
              everything else. Here&apos;s what&apos;s happening on our side — at zero cost to Luna.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <CapabilityCard
                number="01"
                title="Platform Setup"
                description="Luna vendor profile, all products and pricing loaded, API integration configured."
              />
              <CapabilityCard
                number="02"
                title="Landing Page"
                description="Dedicated Luna wedding landing page — designed, built, and optimised for conversion."
              />
              <CapabilityCard
                number="03"
                title="Paid Advertising"
                description="Google Ads and Meta Ads campaigns targeting wedding couples. All spend is ours."
              />
              <CapabilityCard
                number="04"
                title="Sales Pipeline"
                description="Lead capture, automated follow-ups, email sequences, and CRM setup for Luna leads."
              />
              <CapabilityCard
                number="05"
                title="Team Assignment"
                description="Dedicated wedding coordinator assigned to Luna. Your single point of contact."
              />
              <CapabilityCard
                number="06"
                title="Financial Setup"
                description="Xero integration for commission tracking, invoicing, and payment reconciliation."
              />
            </div>

            <div className="p-6 bg-pale-pink/50 border-l-4 border-red">
              <p className="font-heading text-dark-red text-sm uppercase tracking-wide mb-2">
                Zero Cost To Luna
              </p>
              <p className="font-secondary text-dark-red/70">
                All of this — the landing page, the ads, the platform setup, the team —
                is funded entirely by Bali Love. Luna pays nothing. We earn only when
                bookings are delivered.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            KICKOFF MEETING - Agenda
            ============================================ */}
        <section id="kickoff-meeting" className="py-24 lg:py-32 px-6 lg:px-16 bg-pale-pink">
          <div className="max-w-4xl">
            <p className="text-red-red text-sm tracking-[0.25em] uppercase mb-6">
              Kickoff Meeting
            </p>
            <h2 className="font-heading text-dark-red text-3xl md:text-4xl leading-tight mb-8">
              30 minutes to<br />
              align and launch.
            </h2>
            <p className="font-secondary text-dark-red/70 text-lg leading-relaxed mb-12">
              We&apos;d like to get Andy, Tina, and Jacob together for a quick kickoff.
              Here&apos;s what we&apos;ll cover.
            </p>

            <div className="space-y-6">
              <AgendaItem
                time="5 min"
                title="Alignment"
                description="Confirm the partnership model: we bring demand, Luna delivers the experience, 10% commission. Walk through key agreement points."
              />
              <AgendaItem
                time="5 min"
                title="Commercial — Andy"
                description="Luna's legal entity name, signatory, ad approval process. Any existing wedding leads to hand over."
              />
              <AgendaItem
                time="8 min"
                title="Operations — Tina"
                description="Availability calendar, standard wedding packages, tour protocol, day-of coordination split."
              />
              <AgendaItem
                time="8 min"
                title="Tech — Jacob"
                description="POS system and API access, booking engine platform, subdomain setup, current analytics."
              />
              <AgendaItem
                time="2 min"
                title="Brand Assets — Maria"
                description="Brief Maria on what we need: logos, photography, brand guidelines, video content."
              />
              <AgendaItem
                time="2 min"
                title="Next Steps"
                description="Confirm week 1 actions, schedule 30-day review, and we're off."
              />
            </div>
          </div>
        </section>

        {/* ============================================
            LET'S GO - Next Steps
            ============================================ */}
        <section id="lets-go" className="py-24 lg:py-32 px-6 lg:px-16 bg-dark-red">
          <div className="max-w-4xl">
            <p className="text-red-red text-sm tracking-[0.25em] uppercase mb-6">
              Next Steps
            </p>
            <h2 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Let&apos;s go.
            </h2>

            <div className="space-y-6 font-secondary text-white/70 text-xl leading-relaxed mb-12">
              <p>
                We&apos;re ready to start building this today. Everything is set up on our side —
                we just need the green light and the assets above from your team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <StepCard number="01" title="Sign" description="Agreement signed, week 1–2" />
              <StepCard number="02" title="Meet" description="Imelda visits Luna, week 3–4" />
              <StepCard number="03" title="Build" description="Landing page + ads, week 5–6" />
              <StepCard number="04" title="Launch" description="First leads flowing, week 7–8" />
            </div>

            {/* Contact */}
            <div className="border-t border-white/20 pt-8">
              <p className="font-heading text-white text-lg mb-4">Bali Love</p>
              <p className="font-secondary text-white/60 mb-2">
                <a href="mailto:tom@bali.love" className="text-red-red hover:text-white transition-colors">
                  tom@bali.love
                </a>
              </p>
              <p className="font-secondary text-white/40 text-sm mt-6">
                See the full partnership proposal at{' '}
                <a href="/luna" className="text-red-red hover:text-white transition-colors underline">
                  Luna × Bali Love Proposal
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 px-6 lg:px-16 bg-sky-blue">
          <div className="max-w-4xl flex justify-between items-center">
            <p className="font-secondary text-dark-red/50 text-sm">
              &copy; {new Date().getFullYear()} Bali Love. Confidential.
            </p>
            <p className="font-secondary text-dark-red/50 text-sm">
              Partnership Kickoff — Luna Beach Club
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ============================================
   Components
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

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <span className="font-heading text-red-red text-3xl block mb-2">{number}</span>
      <p className="font-heading text-white text-sm mb-1">{title}</p>
      <p className="font-secondary text-white/50 text-xs">{description}</p>
    </div>
  );
}

function TeamRoleCard({ name, role, tag, description }: { name: string; role: string; tag: string; description: string }) {
  return (
    <div className="p-6 bg-white">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-heading text-dark-red text-lg">{name}</p>
          <p className="font-secondary text-dark-red/50 text-sm">{role}</p>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-red bg-pale-pink px-3 py-1">
          {tag}
        </span>
      </div>
      <p className="font-secondary text-dark-red/60 text-sm">{description}</p>
    </div>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 border border-white/30 flex-shrink-0 mt-0.5" />
      <p className="font-secondary text-white/70 text-sm">{text}</p>
    </div>
  );
}

function ChecklistItemDark({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 border border-dark-red/30 flex-shrink-0 mt-0.5" />
      <p className="font-secondary text-dark-red/70 text-sm">{text}</p>
    </div>
  );
}

function AgendaItem({ time, title, description }: { time: string; title: string; description: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-16 text-right">
        <span className="font-heading text-red-red text-sm">{time}</span>
      </div>
      <div className="flex-1 border-l border-dark-red/20 pl-6 pb-6">
        <p className="font-heading text-dark-red text-lg mb-2">{title}</p>
        <p className="font-secondary text-dark-red/60 text-sm">{description}</p>
      </div>
    </div>
  );
}
