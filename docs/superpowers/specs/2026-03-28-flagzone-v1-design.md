# FlagZone V1 — Design Spec

## Overview

**FlagZone** (flagzone.de) is a German-language flag football content site targeting SEO traffic around the sport's growing momentum in Germany — driven by the 2026 IFAF World Championship in Dusseldorf, Olympics 2028, and NFL expansion into Germany.

**Core hypothesis:** Flag football will gain significant traction in Germany. Early SEO positioning captures traffic as search interest grows. Monetization via affiliate links (V1), ads (later), and digital products (future).

**V1 goal:** Launch a lean, fast, SEO-optimized site with 6 content pages targeting beginner-focused keywords. Establish FlagZone as the go-to German flag football resource.

---

## Brand

**Name:** FlagZone
**Domain:** flagzone.de (available, ~EUR 5-10/year)
**Tagline:** "Dein Einstieg in Flag Football"

**Voice:** Szene-Insider with editorial polish. Du-Form throughout. Writes from within the community, welcomes everyone in. Uses football terminology naturally but always explains it for newcomers. Authentic enthusiasm, no corporate speak.

**Color palette:**
- Primary navy: #002B5C (IFAF blue)
- Navy light: #0a3a6b
- Flag gold: #FFC72C (the literal color of flag football flags)
- Gold hover: #e6b000
- Background: #fafaf9
- Background warm: #f5f5f0
- Text: #18181b
- Text muted: #52525b

**Typography:** Inter (Google Fonts) — 900 for hero headlines, 800 for h2, 700 for h3, 400 for body.

**Logo:** "FlagZone" wordmark, "Flag" in white, "Zone" in gold. Simple, works as favicon.

**Brand preview:** See `brand-preview.html` in project root for the approved visual direction.

---

## Target Audience

**V1 primary:** Complete beginners — people who heard about flag football via Olympics news, NFL games in Germany, or word of mouth. They want to understand the sport, learn rules, find a team.

**V1 secondary (high-level, parked for V2):** Active players and teams in DFFL/regional leagues who want news, standings, strategy content.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX files for editorial pages
- **Structured data:** JSON files for teams, events
- **Deployment:** Vercel
- **Analytics:** Cookie-free solution (Plausible, Fathom, or Vercel Analytics) — no cookie banner required
- **SEO:** Auto-generated sitemap.xml, robots.txt, JSON-LD structured data

---

## V1 Pages

### Page structure

```
/                          -> Startseite (hero, cards, events, article teasers)
/was-ist-flag-football     -> Beginner explainer (rules, positions, field, scoring)
/olympia-2028              -> Flag Football at the Olympics — SEO pillar page
/wm-2026-duesseldorf       -> World Championship — timely pillar page
/ausruestung               -> Equipment guide + affiliate links
/team-finden               -> Interactive team directory with search/filter
/impressum                 -> Legal (required for German sites)
/datenschutz               -> Privacy policy (required, GDPR)
```

### SEO targeting per page

| Page | Target keyword cluster | Search intent |
|------|----------------------|---------------|
| Startseite | "Flag Football Deutschland" | Navigational |
| Was ist Flag Football | "Flag Football Regeln", "Was ist Flag Football" | Informational |
| Olympia 2028 | "Flag Football Olympia", "Flag Football olympisch" | Informational |
| WM 2026 | "Flag Football WM 2026", "Flag Football Dusseldorf" | Informational |
| Ausrustung | "Flag Football Ausrustung", "Flag Football Set" | Transactional |
| Team finden | "Flag Football in meiner Nahe", "Flag Football Verein" | Local/action |

### Content writing order (priority)

1. Was ist Flag Football — evergreen anchor, highest volume
2. WM 2026 Dusseldorf — most time-sensitive (Aug 2026)
3. Olympia 2028 — evergreen with growing interest
4. Ausrustung — monetization page
5. Startseite — ties everything together
6. Team finden — needs initial team dataset

---

## Content Data Models

### MDX frontmatter (editorial pages)

```yaml
title: "Flag Football Regeln einfach erklart"
description: "Spielfeld, Positionen, Downs, Scoring..."
slug: "was-ist-flag-football"
publishedAt: "2026-04-01"
updatedAt: "2026-04-01"
tags: ["regeln", "einsteiger"]
readingTime: 8
```

### Team data (JSON)

```json
{
  "name": "Dusseldorf Firecats",
  "city": "Dusseldorf",
  "state": "NRW",
  "lat": 51.2277,
  "lng": 6.7735,
  "league": "DFFL",
  "website": "https://...",
  "gender": ["women"]
}
```

---

## SEO Strategy

**Approach:** Pillar-cluster model. V1 ships the pillar pages only. Cluster articles (blog) come in V1.1+.

**On-page SEO:**
- Semantic HTML (proper h1/h2/h3 hierarchy)
- Meta title + description per page (from MDX frontmatter)
- Open Graph + Twitter Card meta tags
- JSON-LD structured data: Organization, Article, FAQPage, SportsEvent
- Internal linking between all pages
- Image alt tags in German

**Technical SEO:**
- Auto-generated sitemap.xml and robots.txt
- Canonical URLs
- Static generation (SSG) for fast TTFB and strong Core Web Vitals
- Mobile-first responsive design
- hreflang tag (de-DE)

---

## Monetization

### V1: Affiliate only
- Amazon.de Partnerprogramm + sport-thieme.de on Ausrustung page
- Natural in-content product recommendations, not banners
- "Affiliate-Link" disclosure (Kennzeichnungspflicht)

### Ad slot preparation (no ads in V1)
- Sidebar placeholder on article pages (hidden)
- Between-section slot on long-form content
- Sticky footer slot on mobile
- Implemented as empty containers, zero visual impact

### Revenue roadmap

| Phase | Traffic | Revenue |
|-------|---------|---------|
| V1 (launch) | 0-5k/mo | Affiliate only |
| V1.1 (~3 months) | 5-20k/mo | + AdSense |
| V2 (~6-12 months) | 20-50k/mo | + Mediavine/Raptive, sponsored content |
| V3 (post-Olympics) | 50k+/mo | + Digital products, newsletter sponsorship |

---

## Legal Requirements

- **Impressum:** Mandatory, full name and address (German Telemediengesetz)
- **Datenschutzerklarung:** GDPR privacy policy
- **Cookie banner:** Not needed for V1 (cookie-free analytics)
- **Affiliate disclosure:** On pages with affiliate links

---

## Language

German only (V1). English pages for international events may be added later.

---

## What V1 Does NOT Include (Parked)

- Blog / news section
- DFFL standings / league coverage
- Player profiles / interviews
- Strategy / playbook content
- Newsletter
- Coaching courses / digital products
- English content
- Ads
- Cookie-based analytics

These are documented for future phases but explicitly out of scope for V1.

---

## Key Context (Research Findings)

- IFAF World Championship: Aug 13-16, 2026, Dusseldorf — 32 teams, 19 nations
- Die Finals (German nationals): Jul 23-24, 2026, Hannover
- Olympics 2028: Flag football confirmed, NFL players can participate
- Germany: European champion 2023, 500+ clubs, 75k+ AFVD members, 20M+ NFL fans
- No dedicated German-language flag football website currently exists
- Existing coverage fragmented across afvd.de, amfoo.de, 5erdffl.de, club sites
- Flag football debuted on German public TV (ZDF/ARD) at Die Finals 2025
