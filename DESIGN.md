---
name: TUYBA Publishing Platform
description: Serene, high-legibility editorial design system for Islamic-compliant travel and cultural exploration.
colors:
  primary: "#38bdf8"
  primary-hover: "#0284c7"
  bg-deep: "#0f172a"
  surface-card: "#1e293b"
  border-subtle: "#334155"
  text-headline: "#f8fafc"
  text-muted: "#94a3b8"
typography:
  display:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.15
  headline:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.25
  title:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 500
    letterSpacing: "0.04em"
rounded:
  xs: "4px"
  sm: "6px"
  md: "10px"
  lg: "16px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg-deep}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  card-article:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
---

# Design System: TUYBA Publishing Platform

## Overview

**Creative North Star: "The Mindful Caravan"**

The TUYBA visual interface is an immersive, high-contrast digital sanctuary designed for contemplation, travel discovery, and long-form editorial immersion. Designed for travelers seeking authentic cultural and Islamic-compliant itineraries, the interface prioritizes tranquil visual rhythm, deep contrast ratios, and generous negative space over cluttered widgets.

**Key Characteristics:**
- **Atmospheric Depth:** Deep slate surfaces with subtle ambient elevation and backdrop blur.
- **Typographic Poise:** Fluid responsive headlines with restrained line length for long-form comfort.
- **Intentional Restraint:** Vibrant sky-teal accents used strictly for high-value interactions and focal highlights.
- **Tactile Modularity:** Clear block borders, interactive cards, and responsive disclosure accordions.

## Colors

A focused night-sky palette rooted in serene navy-slate tones, paired with luminous twilight-sky teal accents.

### Primary
- **Dawn Sky Teal** (`#38bdf8`): Reserved for active primary calls-to-action, category pills, and focus indicators.
- **Deep Mediterranean Teal** (`#0284c7`): Hover state for buttons and pressed interactive elements.

### Neutral
- **Midnight Slate** (`#0f172a`): Page canvas background providing high contrast and eye comfort.
- **Obsidian Container** (`#1e293b`): Elevated card and block container surface.
- **Mist Slate Border** (`#334155`): Subtle architectural dividers and block outlines.
- **Pure Cloud Text** (`#f8fafc`): Primary high-readability text and headline color.
- **Oasis Muted Slate** (`#94a3b8`): Secondary metadata, dates, author credits, and descriptions.

### Named Rules
**The Rarity Rule.** Dawn Sky Teal (`#38bdf8`) is used on ≤ 10% of any visible viewport. Its scarcity preserves its orienting power.

## Typography

**Display & Body Font:** Modern high-legibility sans-serif stack (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`).

### Hierarchy
- **Display** (700, `clamp(2.25rem, 5vw, 3.25rem)`, 1.15): Primary hero statements and page titles.
- **Headline** (600, `1.75rem`, 1.25): Major section dividers, article H2s, block titles.
- **Title** (600, `1.25rem`, 1.4): Card headlines, FAQ question prompts.
- **Body** (400, `1rem` / `16px`, 1.7): Editorial article prose, max line-length 68ch.
- **Label** (500, `0.85rem`, tracking 0.04em): Category tags, metadata dates, admin indicators.

### Named Rules
**The Editorial Breathing Rule.** Body paragraphs never exceed 68 characters per line (`max-width: 68ch`) to prevent eye fatigue during travel guide reading.

## Layout

- **Max Container:** `1100px` centered with fluid `1.5rem` gutter padding.
- **Article Reading Column:** `800px` centered for optimal focus and layout block rhythm.
- **Grid Strategy:** Auto-fill responsive CSS grid (`minmax(320px, 1fr)`) with `1.5rem` gap.

## Elevation & Depth

Surfaces rely on tonal layering and luminous translucent borders rather than diffuse heavy drop shadows.

### Shadow Vocabulary
- **Card Rest:** Flat with `1px solid var(--border-color)` (`#334155`).
- **Card Hover:** Subtle upward transform (`-3px`) with a soft glow `box-shadow: 0 10px 25px -5px rgba(56, 189, 248, 0.1)`.

## Shapes

- **Base Radius:** `6px` to `10px` for buttons, cards, and input fields.
- **Feature Radius:** `12px` to `16px` for hero banners and Call-to-Action panels.
- **Borders:** Consistent `1px solid #334155` separating structural blocks.

## Components

### Buttons
- **Shape:** Rounded rectangle (radius `8px`).
- **Primary:** Background `#38bdf8`, text `#0f172a`, font-weight 600, padding `0.75rem 1.5rem`.
- **Hover:** Background `#0284c7`, text `#ffffff`, smooth color transition.

### Article Cards
- **Container:** Background `#1e293b`, border `1px solid #334155`, radius `10px`, padding `1.5rem`.
- **States:** Hover lifts by `3px` and shifts border to `#38bdf8`.

### Callouts
- **Style:** Left border accent (`4px solid #38bdf8`), background `#1e293b`, radius `0 8px 8px 0`.

### FAQ Accordion
- **Style:** Distinct `<details>` boxes with cursor pointer `<summary>` and smooth expansion.

## Do's and Don'ts

### Do:
- **Do** maintain a strict 68ch reading measure on long-form articles.
- **Do** ensure all text maintains WCAG AA contrast (≥ 4.5:1 against slate backgrounds).
- **Do** provide smooth transitions (`0.2s ease`) on interactive hover targets.

### Don't:
- **Don't** flood pages with bright primary blue; reserve it for purposeful calls-to-action.
- **Don't** use pure black (`#000000`) for surfaces; use Midnight Slate (`#0f172a`) to preserve visual warmth.
- **Don't** allow unknown blocks to crash the page; render fallback placeholders.
