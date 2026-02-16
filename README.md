# San Diego Amazing Homes

Next.js site for **San Diego Amazing Homes** — real estate in San Diego County with Rosamelia Lopez-Platt, REALTOR® (Royal California Real Estate).

- **Live reference:** [sandiegoamazinghomes.com](http://sandiegoamazinghomes.com/)
- **Repo:** [github.com/abelardomyco/sandiegoamazinghomes](https://github.com/abelardomyco/sandiegoamazinghomes)

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Content from `content/*.md` and `content/_meta.json`

## Run locally

```bash
cd sandiegoamazinghomes
npm install
npm run dev
```

Site runs at **http://localhost:3001** (port 3001 so it does not conflict with The Baja Land Company on 3000).

## Structure

- `app/` — layout, home page, about page
- `components/` — Header, Footer
- `content/` — homepage.md, about.md, _meta.json (copy and images reference)
- `public/images/` — add logo, hero, or agent photos here

## Pages

- **Home** (`/`) — welcome, CTAs (looking for a house / list your home), contact, Instagram, partner link to The Baja Land Company
- **About Us** (`/about`) — agent bio and contact

No mock data; contact and partner URLs are real.

## Sync to GitHub (continuous push to main)

- **Quick sync:** Run **Tasks: Run Task** → **Sync to main (push)** (or `npm run sync` in terminal). Stages all changes, commits, and pushes to `main`.
- **Custom message:** `npm run sync -- "your commit message"`
- See `docs/Git-Sync-GitHub-2025-02-15.md` for details.
