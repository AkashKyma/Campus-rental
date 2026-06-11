# CampusRent

CampusRent is a mobile-first peer-to-peer student rental marketplace prototype built with Next.js.

## MVP scope
- Browse nearby rental listings by campus/city
- Highlight categories, pricing, deposits, and availability
- Show rental request lifecycle states
- Surface admin moderation examples
- Present a clean code structure for future API and database integration

## Run locally
```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Project structure
- `app/` - Next.js App Router pages and styles
- `components/` - reusable UI pieces
- `data/` - mock marketplace data for the MVP preview
- `docs/` - supporting notes for future contributors

## Next implementation steps

1. Implement location-based filtering and searching
2. Add authentication for renter/owner/admin roles
3. Wire category, price, and distance filters
4. Introduce tests, linting gates, and form validation
