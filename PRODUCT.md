# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: Editorial Team & Content Authors**: Non-technical editors coming from WordPress habits who need an intuitive, distraction-free interface to assemble articles from modular blocks, manage drafts, preview privately, and schedule releases.
- **Secondary: Muslim Travelers & Cultural Explorers**: Readers seeking verified Islamic-compliant travel guides, halal culinary advice, pilgrimage planning, and family-friendly itineraries.

## Product Purpose

NERO CMS powers TUYBA — an Islamic-compliant travel publishing platform. It exists to provide an agile, block-based publishing engine with enterprise-grade SEO and Next.js performance, allowing editorial teams to publish high-ranking, beautifully typeset destination guides without developer intervention.

## Positioning

A modern headless publishing architecture (Next.js 15 App Router + Payload CMS v3) that provides the ease and familiar workflows of WordPress (block layout, live slugs, auto-drafts) combined with rock-solid security, instant edge-ready reads, and zero draft leakage.

## Operating Context

- **Editorial Workflow**: Admin workspace at `/admin` where editors compose with 8 core blocks, assign primary and secondary taxonomies, customize SEO metadata, and preview with one-time tokens.
- **Visitor Consumption**: Clean, fast, distraction-free reading experience at `/` and `/blog/[slug]`, optimized for scannability, accessibility, and high visual appeal on all devices.

## Capabilities and Constraints

- 8-block modular catalog (`hero`, `richText`, `imageAndText`, `gallery`, `callout`, `contentCards`, `faq`, `cta`).
- Strict published-only visitor seam with draft token gate for `/preview`.
- Scheduled publication (`publishAt`) with background transitions.
- Relational taxonomy structure (Primary Category + Additional Categories + Tags).
- Structured SEO (Schema.org Article JSON-LD, XML sitemaps, OpenGraph metadata).
- PostgreSQL database via Docker.

## Brand Commitments

- **TUYBA Identity**: Culturally conscious, peaceful, serene, premium, and trustworthy. Colors and typography must evoke thoughtful exploration, tranquility, and clarity.
- **Platform Separation**: Core architecture remains cleanly named (NERO CMS) while public UI expresses the TUYBA identity.

## Evidence on Hand

- Architectural specifications: `docs/PRD.md`, `docs/implementation/SPRINT-01.md`, `SPRINT-02.md`, `SPRINT-03A.md`.
- Working codebase: Payload 3 collections (`Articles`, `Categories`, `Tags`, `Media`, `Pages`, `Redirects`) and frontend block renderer.

## Product Principles

1. **WordPress-Class Editorial Comfort**: Avoid developer jargon; provide intuitive sidebars, automated slugs, and clear draft statuses.
2. **Zero Draft Leakage**: Visitor routes strictly guard against unapproved or future-scheduled content.
3. **Elevated Reading Craft**: Typography, rhythm, and layout should make long-form travel journalism an absolute pleasure to read.
4. **Resilient Rendering**: Unrecognized or corrupt blocks log warnings and skip gracefully rather than breaking the page.

## Accessibility & Inclusion

Targeting WCAG 2.1 AA compliance: accessible contrast ratios, semantic heading hierarchies, screen-reader friendly accordion semantics, and responsive touch targets.
