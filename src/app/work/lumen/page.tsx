import type { Metadata } from "next";
import {
  BrowserFrame,
  CaseBlock,
  CaseHero,
  FeatureList,
  Metrics,
  NextProjectNav,
  Overview,
  Swatches,
} from "@/components/case-study";
import { FigmaEmbed } from "@/components/figma-embed";
import { ProjectMock } from "@/components/project-mock";
import { Reveal } from "@/components/reveal";
import { getProject } from "@/lib/projects";

const project = getProject("lumen")!;

export const metadata: Metadata = {
  title: `${project.name} — Case Study`,
  description:
    "Lumen is an AI-native analytics dashboard concept — a copilot that turns plain-language questions into charts and narratives, in a dark, data-dense bento UI.",
};

export default function LumenPage() {
  return (
    <article className="pb-8">
      <CaseHero
        project={project}
        visual={
          <BrowserFrame label="app.lumen.ai">
            <div className="aspect-[16/10] w-full">
              <ProjectMock kind="lumen" />
            </div>
          </BrowserFrame>
        }
      />

      <CaseBlock label="Overview" title="Analytics that explains itself.">
        <Overview
          items={[
            {
              k: "The challenge",
              v: "Dashboards show what happened but rarely why. Lumen pairs data-dense visualisation with an AI copilot that answers questions in plain language — and shows its working.",
            },
            {
              k: "My role",
              v: "Product design and design-system work — a scalable dark UI, a bento layout system, data-viz patterns and the conversational AI surface.",
            },
            {
              k: "The outcome",
              v: "A dark, high-density analytics concept where anyone can ask a question and get a chart, a number and a narrative they can trust.",
            },
          ]}
        />
      </CaseBlock>

      <CaseBlock
        label="The Problem"
        title="Dashboards answer 'what', not 'why'."
        intro="The gap between a chart and a decision is interpretation — and that's exactly where most tools abandon the user. Lumen closes it with three moves:"
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { t: "Density vs clarity", d: "Power users want everything on screen. A strict bento grid keeps it dense but scannable." },
            { t: "Trust in AI", d: "An AI answer is worthless if you can't verify it — every response cites its source query." },
            { t: "Scale", d: "A component system that survives from a single KPI tile to a 40-widget board." },
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
        label="Approach"
        title="Dark canvas, electric data, a bento grid."
        intro="A near-black canvas lets data light up. A modular bento grid organises density into rhythm, an electric-blue accent guides the eye to what changed, and the AI copilot lives in a persistent, non-intrusive rail."
      >
        <Swatches
          colors={[
            { name: "Lumen", hex: "#4F7DFF" },
            { name: "Glow", hex: "#8FB0FF" },
            { name: "Canvas", hex: "#0A0E1A" },
            { name: "Panel", hex: "#0F1424" },
            { name: "Positive", hex: "#7DFFB0" },
            { name: "Muted", hex: "#6B7594" },
          ]}
        />
      </CaseBlock>

      <CaseBlock label="Key Features" title="Ask. See. Decide.">
        <FeatureList
          accent={project.accent}
          items={[
            { t: "AI copilot", d: "Ask “why did revenue dip in week 3?” and get a chart, a number and a written explanation." },
            { t: "Bento dashboards", d: "Drag-arrange KPI tiles, charts and tables into a grid that always stays aligned." },
            { t: "Explainable answers", d: "Every AI response links to the underlying query and data so it can be trusted and audited." },
            { t: "Live metrics", d: "Real-time tiles with sparkline trends and threshold alerts that surface anomalies fast." },
          ]}
        />
      </CaseBlock>

      <CaseBlock
        label="Figma"
        title="A system, not a screen."
        intro="Built in Figma as a full dark-mode design system — tokens, chart components, and bento layout primitives that compose into any board. Add a share link to embed the prototype."
      >
        <FigmaEmbed
          url={project.figma}
          title="Lumen — AI analytics"
          poster="/figma/lumen-screens.svg"
          accent={project.accent}
        />
      </CaseBlock>

      <CaseBlock label="Outcome" title="Insight, not just information.">
        <Metrics
          items={[
            { v: "24", l: "reusable components in the system" },
            { v: "1", l: "unified bento grid, infinitely composable" },
            { v: "0", l: "AI answers without a cited source" },
          ]}
        />
        <Reveal>
          <div className="mt-8 rounded-2xl border border-border bg-bg-subtle p-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-faint">Reflection</p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-fg-muted">
              Designing an AI surface meant designing for doubt — the interface has to make an AI
              answer <em className="text-fg not-italic">verifiable</em>, or it&apos;s worse than no
              answer at all. Next: an onboarding that teaches users to ask better questions.
            </p>
          </div>
        </Reveal>
      </CaseBlock>

      <NextProjectNav current="lumen" />
    </article>
  );
}
