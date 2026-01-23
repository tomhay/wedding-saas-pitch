# Luna Proposal - Data Sources

## Source Project
All financial modeling data comes from: `C:\Users\User\apps\blxero`

## Key Files

### Partnership Model
- **Database tables:** `partnerships`, `partnership_assumptions`, `partnership_staff`
- **Calculation engine:** `lib/financial-calculations/partnership-model.ts`
- **API:** `/api/partnerships/[slug]`
- **UI:** `/admin/partnerships/luna-beach-club`

### Planning Documentation
- `.planning-luna-partnership/PROJECT.md` - Business context
- `.planning-luna-partnership/ROADMAP.md` - Implementation phases
- `.planning-luna-partnership/STATE.md` - Current model summary

## Key Assumptions (from blxero model)

### Volume
- Current Luna: ~20 weddings/year (~1.7/month)
- Target: 8 weddings/month (96/year) at base scenario
- Conservative: 4-5/month, Optimistic: 8-10/month

### Pricing (IDR)
- Planning fee: 25,000,000 IDR per wedding
- Average guests: 80
- F&B per guest: ~1,500,000 IDR
- Venue buyout: 50,000,000 IDR

### Commission Structure
- 10% on F&B revenue
- 10% on venue buyout
- Luna keeps 90%

### Costs (Monthly)
- Staff: 30,000,000 IDR
- Marketing: 25,000,000 IDR
- Operations: 5,000,000 IDR
- Total: 60,000,000 IDR/month

### Currency
- Exchange rate used: ~11,000 IDR = 1 AUD
- All AUD figures are approximate conversions

## Calculated Results (Base Scenario)

### Per Wedding
| Item | IDR | AUD |
|------|-----|-----|
| Planning fee | 25,000,000 | ~2,300 |
| F&B commission (10%) | 12,000,000 | ~1,100 |
| Venue commission (10%) | 5,000,000 | ~450 |
| Vendor margins | ~2,000,000 | ~180 |

### Annual (96 weddings)
| Metric | IDR | AUD |
|--------|-----|-----|
| Revenue | ~4.0B | ~370,000 |
| Costs | ~720M | ~66,000 |
| Profit | ~3.3B | ~304,000 |
| Margin | ~82% | ~82% |

### Luna Revenue (what Luna keeps)
- Per wedding: 153,000,000 IDR (90% of F&B + venue)
- Annual (96 weddings): ~14.7B IDR (~A$1.4M)

## Notes

- These are model outputs, not guarantees
- Actual results depend on execution, market conditions, etc.
- Model can be adjusted in blxero admin panel
- Scenarios available: Conservative, Base, Optimistic

## To Update Numbers

1. Go to blxero project
2. Navigate to `/admin/partnerships/luna-beach-club`
3. Adjust assumptions
4. View updated projections
5. Update this proposal accordingly
