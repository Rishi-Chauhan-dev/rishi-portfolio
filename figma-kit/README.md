# Figma Kit — Rishi Chauhan Portfolio

Editable Figma design files for all four portfolio projects. Because a native
`.fig` can't be authored outside Figma, these ship as **layered SVG artboards**
(Figma converts them to real, editable frames/text/vectors) plus a **one-click
Figma plugin** that rebuilds them as native frames.

## What's inside

```
figma-kit/
├─ README.md                 ← you are here
└─ plugin/
   ├─ manifest.json          ← Figma plugin manifest
   └─ code.js                ← builds all 4 artboards as native Figma frames
../public/figma/
   ├─ shree-navya-screens.svg   (E-commerce storefront)
   ├─ aurora-screens.svg        (Fintech / neobank mobile)
   ├─ bloom-screens.svg         (Wellness & fitness mobile)
   └─ lumen-screens.svg         (AI SaaS analytics dashboard)
```

## Method A — Drag-import the SVGs (fastest)

1. Open Figma → a new design file.
2. Drag any file from `rishi-portfolio/public/figma/*.svg` onto the canvas.
3. Figma converts it into an editable frame — text stays editable, shapes stay
   vectors. Repeat for each project.

## Method B — Run the plugin (native frames)

1. **Figma desktop app** → menu **Plugins → Development → Import plugin from
   manifest…**
2. Select `figma-kit/plugin/manifest.json`.
3. Run **Plugins → Development → Rishi Chauhan — Portfolio Artboards**.
4. All four artboards are created as native, editable frames and framed in view.

## Make the portfolio's Figma embeds live

Each case study has a Figma embed slot. To turn it into a live embedded
prototype:

1. In Figma, select the frame(s) for a project → **Share** → **Copy link**
   (set link access to *Anyone with the link → can view*).
2. Open `rishi-portfolio/src/lib/projects.ts`.
3. Paste the link into that project's `figma:` field, e.g.
   ```ts
   { slug: "aurora", /* … */ figma: "https://www.figma.com/proto/XXXX/Aurora?..." }
   ```
4. Save. The case study now shows a live, interactive Figma embed instead of the
   static poster.

## Regenerate the artboards

The artboards are generated from code, so they're easy to tweak:

```bash
node scripts/gen-figma-artboards.mjs
```

Edit `scripts/gen-figma-artboards.mjs` to change screens, colors, or copy, then
re-run. It rewrites both the SVGs and the plugin.
