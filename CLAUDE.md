# Wedding SaaS Startup - Pitch Project

## Project Purpose
This folder contains all materials for raising seed funding ($500k-1M) for a multi-tenant wedding planning SaaS platform targeting hotels and wedding venues.

## The Business

### Problem
Hotel wedding teams are undervalued and under-tooled despite generating massive revenue:
- Use email, WhatsApp, spreadsheets - no purpose-built software
- A single wedding generates $120k+ (wedding spend + guest room nights)
- Teams struggle to get budget for software, but hotels pay 15-20% commissions to planners

### Solution
A battle-tested wedding planning platform (300+ weddings proven via BaliLove) that hotels white-label for their wedding teams:
- Lead management and sales tools
- Guest-facing app for self-service bookings
- Complete wedding coordination platform
- Xero integration for financial tracking

### Business Model
- Low-friction commission (3-4%) on bookings processed through platform
- Small onboarding/training fee
- Future: Marketplace commissions when guests book across venue network (honeymoons, tours, etc.)

### Target Market
- Initial: Luxury hotels/resorts with wedding venues (Bali proof of concept)
- Expansion: India, Europe, global destination wedding markets

## Team

| Role | Person | Background |
|------|--------|------------|
| Founder/CEO | TBD | Built and operated BaliLove for 2+ years |
| Digital Transformation | Diana | Director-level, leaving corporate for this |
| Venue Relationships | Imelda | 20 years at The Mulia + top Bali venues, hotel network |
| Development | Team of 5 | Developers, QA, UX, Product Manager |

## Traction
- 300+ weddings completed on BaliLove platform
- Production-proven technology for 2+ years
- Strong operational metrics and customer satisfaction
- Warm intros to brand-name hotel pilots

## Funding
- **Raising:** $500k-1M seed
- **Use:** Balanced between product (multi-tenant, mobile) and sales team
- **Timeline:** 3-6 month POC with 2-3 hotels, then global expansion
- **Target investors:** Angel investors (hospitality/travel), seed VCs (vertical SaaS)

---

## Process Management - CRITICAL

### NEVER do these:
- `taskkill //F //IM node.exe` - This kills ALL Node processes including other Claude Code instances
- `taskkill //F //IM npm.exe` - Same problem
- `taskkill //F //IM python.exe` - Kills ALL Python processes
- Any broad process killing that affects the whole system

### When a port is in use:
1. Find the specific PID using the port: `netstat -ano | findstr :<port>`
2. Kill only that specific process: `taskkill //F //PID <pid>`
3. Or use: `npx kill-port <port>`

### Example - correct way to free a port:
```bash
# Find what's using the port
netstat -ano | findstr :3000

# Kill only that specific PID (e.g., 12345)
taskkill //F //PID 12345
```

### If a server/script won't start:
- Check if there's an existing process on the port first
- Kill only the specific process, not all node.exe or python.exe
- Ask the user if you're unsure

## Competitive Landscape
See `research/competitors.md` for detailed analysis.

Key competitors: Tripleseat, Event Temple, Planning Pod, Chkdin, TTO
Our edge: Only platform built from real wedding ops, designed for hotel teams, with guest self-service

## Files in This Project

```
/research           - Market research, competitor analysis
/pitch-deck         - Slide content and structure
/financials         - Unit economics, projections, models
/brand              - Name options, positioning, messaging
/one-pagers         - Investor summaries
```

## Key Decisions Needed
1. Brand name (BaliLove is too location-specific)
2. Specific revenue/GMV milestones for 18 months
3. Detailed financial model
4. Founder story narrative

## Source Codebase
The proven technology is in: `c:\Users\User\apps\bl2`
- 192 database entities
- 63+ server modules
- Full feature inventory documented
