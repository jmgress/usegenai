---
description: Visual theme and authoring conventions for the dark-blue HTML slide deck. Copy this file into any project's .github/instructions/ folder to keep new slides on-theme.
applyTo: "**/slides/**/*.html"
---

# Slide Deck Theme

Apply these rules whenever creating or editing an HTML slide deck (`slides/index.html`).
The deck is a single, dependency-free HTML file with an inline `<style>` block and an
inline slide-engine `<script>`. Keep it that way.

## Non-negotiables

- Single file: all CSS and JavaScript stay inline in the deck HTML. No CDN links, no
  external `.css`/`.js`, no build step, no Markdown slide sources, no Marp.
- Each slide is `<section class="slide">` inside `#deck`, in document order.
- Speaker notes go in the slide's `data-notes` attribute (not HTML comments).
- Images are PNG files under `slides/img/`, referenced by relative path (`img/name.png`).
  Never embed base64 data URIs.
- Diagrams use inline HTML/CSS or inline SVG only.
- Preserve the keyboard/click/touch navigation engine, slide counter, footer, and progress bar.
- Each slide must fit one screen (1280×720 stage). Prefer concise bullets, two-column
  `.columns` layouts, and the existing card/table/code styles.
- Commit messages describe the presentation content change, not the HTML mechanics.

## Design tokens (`:root`)

Reuse these CSS variables; do not hard-code new colors.

```css
--bg: #0a1228;          /* slide base */
--bg-deep: #050816;     /* gradient anchor */
--fg: #e8eefc;          /* primary text */
--muted: #93a4c8;       /* secondary text */
--accent: #60a5fa;      /* primary blue */
--accent-2: #93c5fd;    /* light blue */
--good: #34d399;        /* green */
--amber: #fbbf24;       /* amber */
--bad: #f87171;         /* red */
--purple: #a78bfa;      /* purple */
--card: rgba(15, 26, 58, 0.6);
--card-solid: #0f1a3a;
--border: rgba(99, 145, 255, 0.12);
--border-strong: rgba(99, 145, 255, 0.22);
--code-bg: rgba(8, 15, 35, 0.72);
--code-border: rgba(99, 145, 255, 0.18);
--slide-pad: 34px;
--base-font: 24px;
--ui-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
--mono-font: "JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
```

- Stage: fixed 1280×720 (16:9), scaled to fit the viewport.
- Backgrounds use the layered radial + linear gradients already defined on `.slide`.
- UI text uses `--ui-font`; code uses `--mono-font`.
- Gradient headline accent: blue → light blue → purple (see `.gradient-text` / `.slide.section h1`).

## Component classes (reuse, don't reinvent)

- Headings: `h1` (2.0em, `--fg`), `h2` (accent), `h3` (accent-2).
- Section divider: `<section class="slide section">` for centered, gradient-title breaks.
- Centered content: add `center` to the slide.
- Columns: `.columns` (2-up), `.columns3` (3-up).
- Cards: `.card` with optional status accent `good` | `bad` | `warn` | `info`; title via `.card-title`.
- Status chips: `.chip` + `green` | `amber` | `red` | `purple` | `blue`.
- Eyebrow label: `.eyebrow` (small uppercase accent kicker).
- Pills: `.pill` for inline tags; accent link style is built in.
- Keyboard keys: `<span class="kbd">Ctrl/Cmd + I</span>`.
- Code: fenced `<pre><code>…</code></pre>`; inline `<code>` auto-styles.
- Tables: plain `<table><thead>/<tbody>`; theming (accent header, zebra rows) is automatic.
- Quotes: `.quote` with `.who` / `.said` / `.when`.
- Editor mockup: `.editor` with `.ln .kw .fn .st .ghost .cursor` spans.
- Flow diagram: `.flow` with `.node` and `.arrow`.
- Full-bleed image slide: `<section class="slide bg-contain" style="background-image:url('img/x.png')">`.
- Emphasis: `<strong>` renders white; `<em>` renders muted; `.accent` colors text blue.
- Source caption under content: `.note-source`.

## Authoring style

- Lead with a clear `h1`; use `h2`/`h3` sparingly to group.
- Prefer short, parallel bullets over paragraphs.
- Use cards and two-column layouts to balance dense slides.
- Put demo cues and talking points in `data-notes`, kept in sync with slide content.
- When adding a slide, match the surrounding numbering comments and spacing style.
