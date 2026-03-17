# Luna Beach Club - Partnership Kickoff Plan

> Created: 2026-03-16
> Status: Planning

---

## Luna Team

| # | Name | Role | Key For Us |
|---|------|------|-----------|
| 1 | **Andy Keegan** | Director of Sales & Marketing | Primary decision maker, marketing alignment |
| 2 | **Tina Ardie** | Event Manager | Operational counterpart, event coordination |
| 3 | **Afi** (Afifah Nur Hidayah) | Sales Executive (Partnership & Event) | Day-to-day partnership contact |
| 4 | **Sisylia Paramitha** | Sales Executive (Event) | Lead handoff and event booking |
| 5 | **Maria Magdalena** | Creative | Asset sharing, brand guidelines |
| 6 | **Jacob Romy** | IT Manager | API access, tech integration, website |

---

## Workstreams

### 1. PARTNERSHIP AGREEMENT

**Decision: Custom agreement or use Bali Love template?**

The existing Bali Love template (`pitch-site/partnership-agreement-template.md`) is 90% right but needs Luna-specific adjustments:

| Template Element | Works As-Is? | Luna Adjustment Needed |
|-----------------|-------------|----------------------|
| Purpose & intent | Yes | - |
| What Bali Love does | Yes | Add: API product sync, landing page hosting |
| What venue does | Mostly | Add: API access / product feed, marketing asset sharing |
| Commission (10%) | Yes | Confirm 10% with Andy |
| Payment flow | Yes | - |
| Individual event contracts | Yes | - |
| Onboarding process | Needs expansion | Detail the tech integration (API, landing page, ads) |
| Termination & wind-down | Yes | - |
| Non-exclusive | Yes | - |
| Confidentiality | Yes | Add: data sharing / guest data provisions |

**Recommendation:** Fork the template into a Luna-specific version that adds:
1. **Technology integration clause** — Luna grants API access or product data feed for catalogue sync
2. **Landing page & domain clause** — Bali Love builds and hosts Luna wedding landing pages (on Bali Love domain or Luna subdomain)
3. **Marketing rights** — Bali Love runs Google/Meta ads using Luna brand, imagery, and venue name
4. **Data sharing** — How lead data and guest data are shared between systems
5. **Ad spend** — Clarify who pays for ad spend (Bali Love, as per model) and that Luna has no ad cost exposure
6. **Website integration** — Permission to embed booking widgets or link from Luna's website

**Action Items:**
- [ ] Fork `partnership-agreement-template.md` → `luna-proposal/luna-partnership-agreement.md`
- [ ] Add technology & marketing clauses
- [ ] Review with Andy before signing
- [ ] Get legal entity name for Luna (PT name)

---

### 2. API ACCESS & PRODUCT CATALOGUE

**Goal:** Luna's products (venues, F&B packages, buyout rates, beverage packages) live in our BaliLove platform and update dynamically so couples and guests can browse and book.

**Luna's Current Tech Stack:**
- WordPress + Elementor website
- Separate booking engine at `bookings.lunabeachclubbali.com`
- CM.com for newsletters
- No public API apparent
- IT Manager: Jacob Romy

**Integration Options (in order of preference):**

#### Option A: Manual Product Entry + Periodic Sync (Fastest — Week 1)
- We manually enter Luna's products into BaliLove from the PDFs we already have
- Tina/Afi confirm pricing changes via WhatsApp/email
- We update when menus or rates change
- **Pro:** Zero tech dependency on Luna, can start immediately
- **Con:** Manual, can drift out of date

#### Option B: Structured Data Feed (Medium-term)
- Jacob provides a Google Sheet or CSV with products, pricing, availability
- We build an import script to sync periodically
- Luna updates the sheet when things change
- **Pro:** Single source of truth, low-tech for Luna
- **Con:** Still manual on Luna's side

#### Option C: Direct API Integration (Ideal — if their booking engine supports it)
- Investigate `bookings.lunabeachclubbali.com` — what platform is it? (SevenRooms? Resy? Custom?)
- If it has an API, we pull products, availability, and pricing directly
- **Pro:** Real-time sync, no manual work
- **Con:** Depends on what their booking engine exposes

#### Option D: WordPress REST API Scrape
- WordPress has a REST API at `lunabeachclubbali.com/wp-json/wp/v2/`
- Could pull page content, menus, media programmatically
- **Pro:** No work needed from Luna
- **Con:** WordPress content isn't structured product data

**Immediate Product Catalogue (from PDFs we have):**

| Category | Products | Source Doc |
|----------|----------|-----------|
| **Venue Buyouts** | Elysium (full/half), Beer Garden (full/half), Table 369, Full LBC, Main Stage | Buyout Rates PDF |
| **Food — Canapés** | 5/9/12 type packages | Menu Packages PDF |
| **Food — Sit-Down** | Japanese degustation, Indonesian halal (2/3 course), Vegetarian (2/3 course) | Menu Packages PDF |
| **Food — Buffet** | International (18 items), Asian | Menu Packages PDF |
| **Food — Add-ons** | Oysters, caviar, king crab | Menu Packages PDF |
| **Beverage** | Free flow alcohol (2/3hr), free flow non-alcohol (2/3hr), +1hr add-ons | Menu Packages PDF |
| **Champagne** | Laurent Perrier, Moët, Cristal, Dom Pérignon (shower packages) | Menu Packages PDF |
| **Experiences** | EPIC NOW VR Michelin Dining (18 pax) | Functions PDF |

**Action Items:**
- [ ] Enter Luna products into BaliLove platform manually (Day 1-3)
- [ ] Ask Jacob: What is the booking engine at `bookings.lunabeachclubbali.com`? Does it have an API?
- [ ] Ask Jacob: Can we get a structured product/pricing feed (even a Google Sheet)?
- [ ] Investigate WordPress REST API at `lunabeachclubbali.com/wp-json/`
- [ ] Set up product update cadence with Tina (monthly? quarterly?)

---

### 3. LANDING PAGE & MARKETING PIPELINE

**Goal:** Build a high-converting landing page for Luna weddings, run Google/Meta ads to it, capture all leads, and funnel them through our sales pipeline.

**Luna's Current Website Situation:**
- WordPress + Elementor at `lunabeachclubbali.com`
- Has a "Weddings" page under Private Events
- Has an enquiry form (name, email, WhatsApp, event type, guest count, details)
- Branding: Teal (#2E7D76), dark backgrounds, Montserrat font, rounded corners
- Booking engine separate at `bookings.lunabeachclubbali.com`

**Two Landing Page Strategies:**

#### Strategy A: Hosted on Our Domain (Recommended for speed)
- Build at something like `bali.love/luna-weddings` or `weddings.lunabeachclubbali.com`
- We control everything: design, forms, tracking, A/B testing
- All leads come directly into our pipeline
- We already have a Luna proposal page pattern (`pitch-site/src/app/luna/page.tsx`)
- **Google Ads** point here, **Meta Ads** point here
- **Pro:** Full control, fast to build, clean attribution
- **Con:** Not on Luna's domain (unless we get a subdomain)

#### Strategy B: Embedded on Luna's Website
- Work with Jacob to add a wedding landing page to `lunabeachclubbali.com`
- Embed our lead capture form or redirect to our booking flow
- Leverage Luna's existing domain authority for SEO
- **Pro:** Luna's domain, better SEO long-term, feels native
- **Con:** Dependent on Jacob/WordPress, slower to iterate, shared analytics

#### Strategy C: Both (Recommended long-term)
- **Phase 1:** Build on our domain for speed → start running ads immediately
- **Phase 2:** Work with Jacob to add a page on Luna's site that links to or embeds our flow
- **Phase 3:** SEO-optimized content on Luna's domain pointing to our booking experience

**Landing Page Requirements:**
- Hero with Luna venue imagery (get high-res from Maria)
- Key selling points (clifftop, ocean views, 6 spaces, up to 5000 capacity)
- Photo gallery / video
- Package overview (ceremony + reception from A$17K)
- Social proof (if available — past event photos, testimonials)
- Lead capture form: Name, Email, Phone/WhatsApp, Wedding Date, Guest Count, Budget Range
- CTA: "Plan Your Luna Wedding" or "Get Your Custom Quote"
- Mobile-first (most wedding traffic is mobile)

**Google Ads Strategy:**
- Keywords: "Bali beach club wedding", "Luna Beach Club wedding", "Bali clifftop wedding", "destination wedding Bali", "beach club wedding venue Bali"
- Landing page optimized for these keywords
- Conversion tracking on form submission

**Lead Flow:**
```
Google/Meta Ad → Landing Page → Form Submit → BaliLove Lead Pipeline
                                                    ↓
                                            Auto-email to lead
                                                    ↓
                                            Sales team follow-up
                                                    ↓
                                            Tour booking at Luna
                                                    ↓
                                            Proposal → Booking
```

**Action Items:**
- [ ] Request brand assets from Maria (logos, high-res venue photos, brand guidelines)
- [ ] Build Luna wedding landing page (extend pitch-site or standalone)
- [ ] Set up lead capture form → BaliLove EventLead pipeline
- [ ] Set up Google Ads campaign structure
- [ ] Set up Meta Ads campaign structure
- [ ] Discuss with Jacob: subdomain or page on Luna's site for Phase 2
- [ ] Set up conversion tracking and attribution

---

### 4. ONBOARDING CHECKLIST

**Week 1: Agreement & Setup**
- [ ] Sign partnership agreement
- [ ] Get Luna legal entity details (PT name, NPWP, bank details)
- [ ] Get brand assets (logos, photos, brand guide) from Maria
- [ ] Create Luna vendor profile in BaliLove platform
- [ ] Enter all Luna products/pricing from PDFs into catalogue
- [ ] Assign internal coordinator for Luna weddings
- [ ] Set up WhatsApp group with Tina + Afi for operational comms

**Week 2: Marketing Launch**
- [ ] Build and launch Luna wedding landing page
- [ ] Set up Google Ads campaigns (start with A$50-100/day)
- [ ] Set up Meta Ads (retargeting + prospecting)
- [ ] Create Luna wedding content for social channels
- [ ] Set up email templates for Luna leads (auto-response, follow-up sequence)
- [ ] Agree on tour protocol with Tina (how we book site visits)

**Week 3: Pipeline & Process**
- [ ] First leads flowing → test full pipeline
- [ ] Tour protocol live → first site visits booked
- [ ] Sales process documented (Luna-specific objection handling, pricing walkthrough)
- [ ] Financial setup: Xero accounts for Luna commission tracking
- [ ] Confirm payment flow with Luna finance team

**Week 4: Optimize & Scale**
- [ ] Review first 2 weeks of ad performance
- [ ] Adjust targeting and spend
- [ ] Review lead quality with sales team
- [ ] First booking target
- [ ] Monthly check-in cadence set with Andy

---

### 5. THINGS TO THINK THROUGH

#### Revenue & Commission
- **Confirm 10% commission with Andy** — The proposal says 10%, but need formal agreement
- **What's the commission base?** — Pre-tax or post-tax? (23.2% tax is significant)
- **Planning fee** — Do we charge couples separately, or is it built into Luna pricing?
- **Ad spend recovery** — At what volume does ad spend become self-sustaining from commissions?

#### Operations
- **Tour protocol** — Who gives tours? Do we send our person or does Tina/Afi handle with our brief?
- **Day-of coordination** — Our coordinator on-site, or Luna's team, or both?
- **Vendor coordination** — Photography, videography, florals, entertainment — do we bring our vendor network or use Luna's preferred vendors?
- **Communication protocol** — WhatsApp group? Email? Platform messages? Define clearly.

#### Legal & Data
- **Guest data ownership** — Who owns the guest data? Can we market to past Luna wedding guests?
- **Lead attribution** — If someone enquires through Luna's website AND our landing page, who gets credit?
- **Intellectual property** — We build landing pages using Luna brand; who owns the creative?
- **Insurance** — Do we need event insurance for Luna venue, or does Luna's cover it?

#### Technical
- **Booking engine** — What platform runs `bookings.lunabeachclubbali.com`? Can we integrate?
- **Calendar sync** — How do we know what dates are available? Manual check with Tina, or API?
- **Payment processing** — Couples pay us → we pay Luna. Need to confirm bank transfer process and timing.
- **Xero integration** — Set up Luna as a vendor in our Xero for automated billing/reconciliation.

#### Marketing
- **Brand usage rights** — Written permission to use "Luna Beach Club" in ads
- **Image licensing** — Rights to use Luna photos in advertising
- **Ad account ownership** — We run ads on our accounts, Luna has no access/liability
- **Review/approval process** — Does Andy want to approve ad creative before it runs?
- **SEO strategy** — Long-term content play on Luna's domain vs. our domain

#### Competitive Dynamics
- **Other planners at Luna** — Is Luna working with other wedding planners? How do we differentiate?
- **Luna's own wedding sales** — Do they sell weddings directly? Will we conflict with their team?
- **Pricing parity** — If someone goes direct to Luna, is the price the same or different?

---

### 6. KEY QUESTIONS FOR KICKOFF MEETING

**For Andy (Director of Sales & Marketing):**
1. Are you open to us running Google/Meta ads under the Luna brand?
2. What does your current wedding pipeline look like? How many enquiries/month?
3. Are there other wedding planners you work with currently?
4. What's your comfort level with the 10% commission structure?
5. Can we get a subdomain (e.g., `weddings.lunabeachclubbali.com`) for our landing page?

**For Tina (Event Manager):**
1. What's the current process when a wedding enquiry comes in?
2. How far in advance do weddings typically book?
3. What dates/spaces are currently booked for the next 12 months?
4. What's the typical wedding package you sell? (space + F&B + drinks)
5. Any no-go dates or restrictions we should know about?

**For Jacob (IT Manager):**
1. What platform runs `bookings.lunabeachclubbali.com`? Does it have an API?
2. Can we get WordPress admin access or a contributor role to add a wedding page?
3. Can you set up a subdomain pointing to our landing page?
4. Is there a product/pricing feed we can sync with, or would a Google Sheet work?
5. What analytics do you currently have? (GA4, etc.)

**For Maria (Creative):**
1. Can we get the brand guidelines document?
2. High-res venue photography (especially Elysium, Beer Garden, ceremony setups)?
3. Any existing wedding-specific content or photos from past events?
4. Logo files (SVG/PNG, light and dark versions)?

---

### 7. SUCCESS METRICS (First 90 Days)

| Metric | Month 1 | Month 2 | Month 3 |
|--------|---------|---------|---------|
| Landing page live | ✓ | - | - |
| Google Ads running | ✓ | - | - |
| Products in catalogue | ✓ | - | - |
| Leads generated | 20-30 | 40-60 | 60-80 |
| Tours booked | 3-5 | 8-12 | 10-15 |
| Bookings confirmed | 0-1 | 2-3 | 3-5 |
| Revenue to Luna (IDR) | 0 | 300-500M | 500-750M |

---

### 8. RISKS & MITIGATIONS

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Luna team unresponsive to leads | Lost bookings | Define SLA in agreement (24hr response), WhatsApp group |
| Low ad conversion | Wasted spend | Start small (A$50/day), optimize weekly, kill bad campaigns fast |
| Commission dispute | Relationship damage | Clear agreement, Xero tracking, transparent reporting |
| Luna sells direct at lower price | Undermines our leads | Address pricing parity in agreement |
| Seasonal slowdown | Revenue gap | Diversify to corporate events, target off-season markets |
| Tech integration stalls | Manual overhead continues | Start manual, iterate to automation — don't block on tech |
