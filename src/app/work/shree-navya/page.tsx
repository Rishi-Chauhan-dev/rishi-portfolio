import type { Metadata } from "next";
import {
  BrowserFrame,
  CaseBlock,
  CaseHero,
  FeatureList,
  Figure,
  Metrics,
  NextProjectNav,
  Overview,
  Swatches,
} from "@/components/case-study";
import { FigmaEmbed } from "@/components/figma-embed";
import { ShreeNavyaReplica } from "@/components/replicas/shree-navya-replica";
import { Reveal } from "@/components/reveal";
import { getProject } from "@/lib/projects";

const project = getProject("shree-navya")!;

export const metadata: Metadata = {
  title: `${project.name} — Case Study`,
  description:
    "A faithful UI/UX rebuild and case study of the Shree Navya Food Products storefront — a live Indian FMCG e-commerce experience.",
};

export default function ShreeNavyaPage() {
  return (
    <article className="pb-8">
      <CaseHero
        project={project}
        visual={
          <BrowserFrame label="shreenavyafoodproducts.com">
            <div className="relative max-h-[560px] overflow-hidden">
              <ShreeNavyaReplica />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
            </div>
          </BrowserFrame>
        }
      />

      <CaseBlock
        label="Overview"
        title="A heritage food brand, brought online end to end."
      >
        <Overview
          items={[
            {
              k: "The challenge",
              v: "An authentic Indian food brand with no digital storefront needed one that felt as trustworthy as its products — and let customers browse variants and prices with zero friction.",
            },
            {
              k: "My role",
              v: "End to end: UX flows, visual identity, a reusable component system, and the full responsive front-end in React / Next.js.",
            },
            {
              k: "The outcome",
              v: "A live, fast storefront with a filterable catalog and variant-aware product cards — shipped to production and serving real customers.",
            },
          ]}
        />
      </CaseBlock>

      <CaseBlock
        label="The Problem"
        title="Trust is the whole product."
        intro="For a food brand, buying online is an act of trust. The interface had to do the reassuring: clean typography, honest product info, transparent pricing, and a warm identity that mirrors the kitchen it comes from."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { t: "Variety", d: "Multiple products, each with different weight variants and prices to communicate clearly." },
            { t: "Mobile-first", d: "Most customers browse on phones — the catalog had to feel effortless on small screens." },
            { t: "Credibility", d: "A founder story and real contact details to turn a new brand into a believable one." },
          ].map((x) => (
            <Reveal key={x.t}>
              <div className="rounded-2xl border border-border bg-bg-subtle p-6">
                <h3 className="font-display text-xl tracking-tight">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </CaseBlock>

      <CaseBlock
        label="The Rebuild"
        title="The storefront, rebuilt pixel-for-pixel."
        intro="Below is a faithful recreation of the live experience — header, hero, the full product catalog, founder story and contact. Built with the same warm orange-and-stone system the brand ships today."
      >
        <Reveal>
          <BrowserFrame label="shreenavyafoodproducts.com">
            <ShreeNavyaReplica />
          </BrowserFrame>
        </Reveal>
      </CaseBlock>

      <CaseBlock
        label="Design System"
        title="Warm, appetising, unmistakably food."
        intro="Orange for appetite and energy, stone neutrals for an earthy, authentic base, and Inter for crisp legibility across long product names and prices."
      >
        <Swatches
          colors={[
            { name: "Primary", hex: "#F97316" },
            { name: "Ink", hex: "#0C0A09" },
            { name: "Muted", hex: "#78716C" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Subtle", hex: "#FAFAF9" },
            { name: "Border", hex: "#E7E5E4" },
          ]}
        />
        <div className="mt-6 rounded-2xl border border-border bg-bg-subtle p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-faint">Typeface — Inter</p>
          <p className="mt-3 text-5xl font-bold tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>
            Authentic Indian Food Products
          </p>
          <p className="mt-2 text-lg text-fg-muted" style={{ fontFamily: "Inter, sans-serif" }}>
            Premium quality ingredients for your everyday cooking needs.
          </p>
        </div>
      </CaseBlock>

      <CaseBlock label="Key Features" title="Small interactions, big clarity.">
        <FeatureList
          accent={project.accent}
          items={[
            { t: "Variant-aware product cards", d: "A segmented weight selector updates the displayed weight and price inline — no page reload, no confusion." },
            { t: "Category filtering", d: "An All / Flour / Spices control lets shoppers narrow the catalog instantly." },
            { t: "Trustworthy identity", d: "Founder story, transparent pricing and real contact details build credibility for a young brand." },
            { t: "Responsive & fast", d: "A mobile-first grid, optimised images and clean routing keep it quick on any device." },
          ]}
        />
      </CaseBlock>

      <CaseBlock
        label="Figma"
        title="From canvas to code."
        intro="The screens were designed as a token-driven Figma library, then built 1:1 in Next.js. Drop the share link in to embed the live prototype."
      >
        <FigmaEmbed
          url={project.figma}
          title="Shree Navya — storefront"
          poster="/figma/shree-navya-screens.svg"
          accent={project.accent}
        />
      </CaseBlock>

      <CaseBlock label="Outcome" title="Live, and doing its job.">
        <Metrics
          items={[
            { v: "Live", l: "Shipped to production & publicly available" },
            { v: "6 SKUs", l: "across 2 categories, variant-aware" },
            { v: "100%", l: "responsive, mobile-first experience" },
          ]}
        />
        <Reveal>
          <div className="mt-8 rounded-2xl border border-border bg-bg-subtle p-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-faint">Reflection</p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-fg-muted">
              Shipping a real product taught me where design meets reality. Next, I&apos;d add search,
              a cart &amp; checkout flow, and a lightweight CMS so the team can manage the catalog
              without touching code.
            </p>
          </div>
        </Reveal>
      </CaseBlock>

      <NextProjectNav current="shree-navya" />
    </article>
  );
}
