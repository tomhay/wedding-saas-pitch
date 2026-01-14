# BaliLove Feature Inventory

Source codebase: `c:\Users\User\apps\bl2`

## Platform Statistics
- **192 database entities**
- **63+ server modules**
- **70+ API services**
- **300+ weddings completed**

---

## Core Features by Category

### 1. Event Management
- Event creation with customizable types
- Status tracking (Active, Archive, Cancelled, Complete, Hold, Lead, Postponed)
- Event timeline with phases and sections
- Multi-venue support
- Event cover images and branding
- Review/feedback system
- Planning guides

### 2. Couple Website Builder
- Drag-and-drop builder (Puck.js)
- Customizable sections with dynamic content
- QR codes and shareable URLs
- Template system
- Publish/unpublish control
- Guest-facing customization

### 3. Guest Management
- Comprehensive guest database
- Contact info, dietary restrictions, allergies, disabilities
- Guest age tracking
- Relationships between guests
- Multiple guest lists
- Guest groups with leaders
- Product/service assignments per guest

### 4. RSVP System
- Dynamic RSVP forms
- Question types: text, multiple choice, rating, boolean
- Conditional questions
- Status tracking
- Accommodation preferences
- Special roles (VIP tracking)

### 5. Communication
- Unified inbox with conversations
- Email templates
- Bulk email (SendGrid)
- File attachments
- Message reactions and editing
- Knock real-time notifications

### 6. Booking System
- Master bookings with vendors
- Individual booking items
- Status tracking and approval workflows
- Booking codes and expiration
- Client-initiated bookings
- Vendor-specific views
- Full audit trail

### 7. Payments
- Stripe integration
- Bank transfer with proof upload
- Multi-currency (IDR, USD, etc.)
- Deposit/installment/full payment options
- Xero sync for invoices and bills
- Payment status tracking

### 8. Cart & Wishlist
- Shopping cart for guests
- Multiple wishlists
- Wishlist templates by event type
- Drag-and-drop reordering
- Category organization

### 9. Vendor Management
- Vendor catalog with categories
- Pricing and commission tracking
- Image galleries
- Social/website links
- Preferred vendor marking
- Vendor-client relationships

### 10. Product Catalog
- Product/service listings
- Multiple pricing models (constant, variable, per-night)
- Multi-image galleries
- Category organization
- Availability tracking
- Blocked dates and night overrides

### 11. Planning Tools
- Planning briefs with templates
- Stage tracking
- Step-by-step guides
- Process management

### 12. Timeline & Tasks
- Event timeline with templates
- Time-specific tasks
- Due dates and estimated hours
- Priority levels
- Task assignment
- Status tracking (todo, in_progress, completed)

### 13. Seating Management
- Table layouts
- Seat assignments
- Guest details display
- Bulk table creation
- Print-ready charts

### 14. Team Management
- Team creation with roles
- Team leaders
- Role-based permissions
- Roster/staff scheduling
- Roster publishing
- Training modules and progress tracking

### 15. Automation & Workflows
- Trigger-based automation (date, status, booking)
- Actions: tasks, emails, notifications, comments
- Conditional logic
- Question collection workflows
- Response tracking

### 16. Style & Content
- Style guides with color palettes
- Inspiration image libraries
- FAQ management
- Layout templates
- Home page management

### 17. Integrations
- **Xero:** Invoices, bills, contacts, payments
- **Stripe:** Card payments
- **SendGrid:** Email delivery
- **Cloudinary:** Image hosting
- **Clerk:** Authentication
- **Knock:** Real-time notifications
- **Google Cloud Scheduler:** Jobs

### 18. Reporting
- Booking exports (CSV)
- Booking status dashboards
- Filter by event, vendor, status, dates
- Quote status tracking
- Real wedding galleries

### 19. Admin & Configuration
- Multi-client support (already has client segregation)
- User roles: admin, vendor, guest, staff
- Permission management
- Currency configuration
- Price type definitions
- User impersonation

---

## Adaptation for Hotel SaaS

| BaliLove Feature | Hotel SaaS Use |
|------------------|----------------|
| Event management | Wedding event management |
| Guest management | Wedding guest + room booking |
| Couple website | Guest-facing event portal |
| Booking system | Room blocks + vendor services |
| Vendor catalog | Approved vendor marketplace |
| Seating | Reception table management |
| Team/roster | Hotel wedding team scheduling |
| Automation | Check-in, reminders, follow-ups |
| Xero integration | Hotel accounting sync |

## Multi-Tenant Requirements
- Client segregation already exists
- Need: tenant branding, isolated data, tenant-specific config
- Need: admin dashboard for platform owner
- Need: usage-based billing infrastructure
