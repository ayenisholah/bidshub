# BidsHub — Build Notes

## Run

```bash
npm run dev
# → http://localhost:3000
```

## Assumptions

1. **ETH pricing** — All subscription prices are in ETH as specified (0.20 / 0.30 / 0.45 / 0.65 ETH/month). No USD conversion is shown.
2. **Profit split range** — Displayed as a range (20–40% BidsHub / 60–80% user) without volume-based tier tables, since the brief specifies only the range and the factors that determine the exact split.
3. **"Most popular" tier** — Ultra (100 bids/sec) is marked as most popular as the balanced speed/price sweet spot before Enterprise.
4. **Hero stat "Analyzer Tools"** — Displayed as a text label since the brief doesn't specify a count. No number was invented.
5. **Discord channel pills** — All internal Discord channel references (`#subscription`, `#create-a-ticket`, `#official-links`) are rendered as styled pill links pointing to the main Discord invite URL.
6. **No real NFT imagery** — All visuals are CSS gradients, blobs, and geometric patterns. No third-party collection art is used.
7. **Static page** — No backend, no API calls, no auth. All content is hardcoded in `src/lib/content.ts`.
8. **Turbopack** — Not enabled in dev script (Next 16 scaffold defaulted to `next dev`). The app runs fine without it; add `--turbopack` to the `dev` script in `package.json` to enable it.

## Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-base` | `#0A0A0F` | Page background |
| `--color-bg-surface` | `#12121A` | Alternate section BG |
| `--color-accent-violet` | `#7C3AED` | Primary accent |
| `--color-accent-cyan` | `#06B6D4` | Secondary accent |
| `--color-accent-violet-light` | `#A78BFA` | Text on dark BG |
| `--color-accent-cyan-light` | `#67E8F9` | Text on dark BG |
| `--color-accent-magenta` | `#D946EF` | Subtle blob accent |
| `--color-text-primary` | `#F8FAFC` | Body text |
| `--color-text-secondary` | `#94A3B8` | Subdued text |
| `--color-text-muted` | `#475569` | Disabled/placeholder text |

## Fonts

- **Display (headings)** — Space Grotesk via `next/font/google`
- **Body** — Inter via `next/font/google`

## Key Files

- `src/lib/content.ts` — All pricing data, copy constants, Discord URL. Edit here to update any copy.
- `src/app/globals.css` — Tailwind v4 `@theme` tokens, grid texture, glassmorphism utilities.
- `src/components/ui/` — Shared UI: `DiscordButton`, `DiscordPill`, `GradientText`, `ScrollReveal`.
- `src/components/sections/` — One file per page section.
