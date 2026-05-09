# Project Rules

Auto-loaded every session. No manual review needed.

## HTML & CSS Rules

All rules from `.claude/skills/html-css-rules/skill.md` apply to every task in this project.

### HTML Rules Summary
1. No classes on `body`, `html`, `header`, `footer` tags — style via CSS selectors in CSS files using `@apply`
2. No inline `style=""` attributes — all styles in CSS files via `@apply`
3. Every `<a>` needs: `href`, `role="link"`, `target`, `aria-label` — each on new line
4. Every `<button>` needs: `type="button"|"submit"`, `aria-label` — each on new line
5. Every `<section>` gets two classes: specific section name + `general-padding`
6. Every `<img>` needs: `width`, `height`, `alt` — each on new line, alt never blank
7. Every `h1–h6` wrapped in `.title .title-{color}` div — no classes on heading tags directly
8. Every `<p>` wrapped in `.content .content-{color}` div — no classes on `<p>` directly
9. Phone `href` = `tel:`, email `href` = `mailto:`
10. All `<section>` inside `<main>`
11. Only allowed Tailwind direct in HTML: `p-*`, `m-*`, `max-w-*`, `flex`, `flex-col`, `flex-row`, `grid`, `grid-cols-*`
12. Strict SEO / semantic HTML — Lighthouse score priority
13. Every `<input>` has associated `<label>` with `for`/`id`
14. Clean indentation and formatting always
15. Pixel perfect to Figma design

### CSS Rules Summary
- Files: `style.css`, `base.css`, `component.css`, `layout.css`, `utilities.css`
- All styles via Tailwind `@apply` — no raw CSS properties
- Breakpoints via `max-*`/`min-*` Tailwind prefixes — no `@media` queries
- All responsive classes in same `@apply` line
- No `[]` arbitrary value syntax
- No fixed `h-*`, `min-h-*`, `w-*`, `min-w-*` on sections (except `h-full`, `w-full`)
- No `:root` variables — all vars defined in `style.css` `@theme{}`
- No `@layer` blocks
- Tailwind v4 classes only

### style.css contains (inside `@theme{}`)
- `@import` of css files in order: base → component → layout → utilities
- Breakpoints (1920 down to 375)
- `--spacing: 1px`
- Font families (from Figma MCP)
- Colors (from Figma MCP)
- Font sizes: `--text-heading-1` through `--text-heading-6` + `--text-{size}` variants

### base.css contains
- `h1,.h1` through `h6,.h6` heading styles
- `.content p` paragraph styles
- `.title-{color}` wrappers for heading colors
- `.content-{color}` wrappers for paragraph colors
- Container classes (`.container-fluid`, etc.) — no `max-width`, padding from Figma
- `.general-padding` — Y-axis section padding

### component.css contains
- `.btn` base + `.btn-{variant}` modifier classes (with hover transitions)
- `input`, `textarea`, `select` styles

### layout.css contains
- Header and footer CSS only

### utilities.css contains
- Section-specific and helper utility classes

## Figma Workflow
- Always use Figma MCP to fetch colors, fonts, spacing, font sizes
- All tokens dynamically generated from Figma — no hardcoded values
- Fetch section names from Figma for class naming
