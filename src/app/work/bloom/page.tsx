import type { Metadata } from "next";
import {
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

const project = getProject("bloom")!;

export const metadata: Metadata = {
  title: `${project.name} — Case Study`,
  description:
    "Bloom is a calm wellness & fitness app concept — gentle gamification, adaptive plans and friendly data-viz that nudges without pressure.",
};

export default function BloomPage() {
  return (
    <article className="pb-8">
      <CaseHero
        project={project}
        visual={
          <div className="overflow-hidden rounded-3xl border border-border">
            <div className="aspect-[16/10] w-full">
              <ProjectMock kind="bloom" />
            </div>
          </div>
        }
      />

      <CaseBlock label="Overview" title="Wellness that nudges, never nags.">
        <Overview
          items={[
            {
              k: "The challenge",
              v: "Fitness apps guilt-trip people into quitting. Bloom encourages daily movement, breathwork and sleep with warmth — progress you feel good about returning to.",
            },
            {
              k: "My role",
              v: "UX research and UI design — persona work, an information architecture for habits, and a calm, accessible visual system with friendly data-viz.",
            },
            {
              k: "The outcome",
              v: "A mobile concept with adaptive plans, gentle streaks and a home screen that greets you with one clear, achievable next step.",
            },
          ]}
        />
      </CaseBlock>

      <CaseBlock
        label="The Problem"
        title="Motivation is fragile. Design for the bad days."
        intro="Most people don't quit wellness apps because they're lazy — they quit because the app makes them feel like they're failing. Bloom is designed around the days you don't feel like it."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { t: "Streak anxiety", d: "Breaking a 40-day streak shouldn't feel like a punishment. Bloom protects progress with grace, not guilt." },
            { t: "One-size plans", d: "Rigid plans ignore real life. Bloom adapts goals to energy, sleep and time." },
            { t: "Data overwhelm", d: "Charts should reassure, not intimidate — soft, legible and human." },
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
        title="Fresh green, rounded forms, soft data."
        intro="A calm emerald palette and generous rounding signal safety and growth. Progress rings and gentle charts celebrate effort over perfection, and every empty state offers encouragement instead of a blank stare."
      >
        <Swatches
          colors={[
            { name: "Bloom", hex: "#2FB98A" },
            { name: "Mint", hex: "#6EE7B7" },
            { name: "Leaf", hex: "#ECFDF5" },
            { name: "Ink", hex: "#0C1F17" },
            { name: "Sun", hex: "#FBBF77" },
            { name: "Muted", hex: "#6B8078" },
          ]}
        />
      </CaseBlock>

      <CaseBlock label="Key Features" title="Small wins, gently celebrated.">
        <FeatureList
          accent={project.accent}
          items={[
            { t: "Adaptive daily goal", d: "One achievable focus each day, tuned to your recent sleep, energy and streak." },
            { t: "Forgiving streaks", d: "Streak-freezes and rest days keep momentum without the all-or-nothing dread." },
            { t: "Guided breathwork", d: "A calming, animated breathing exercise with haptic-timed pacing." },
            { t: "Human data-viz", d: "Soft rings and rounded charts that make progress feel warm, not clinical." },
          ]}
        />
      </CaseBlock>

      <CaseBlock
        label="Figma"
        title="Accessible by construction."
        intro="Designed in Figma with a token-driven library, generous tap targets and AA-contrast checks baked into the components. Drop a share link in to embed the prototype."
      >
        <FigmaEmbed
          url={project.figma}
          title="Bloom — wellness app"
          poster="/figma/bloom-screens.svg"
          accent={project.accent}
        />
      </CaseBlock>

      <CaseBlock label="Outcome" title="A companion, not a coach.">
        <Metrics
          items={[
            { v: "3", l: "pillars: move, breathe, sleep" },
            { v: "48px", l: "minimum tap targets throughout" },
            { v: "AA", l: "contrast on every screen" },
          ]}
        />
        <Reveal>
          <div className="mt-8 rounded-2xl border border-border bg-bg-subtle p-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-faint">Reflection</p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-fg-muted">
              Designing for the &ldquo;bad days&rdquo; reframed every screen — the empty states and
              error moments became the most important surfaces, not afterthoughts. Next: a
              longitudinal study on whether forgiving streaks actually improve retention.
            </p>
          </div>
        </Reveal>
      </CaseBlock>

      <NextProjectNav current="bloom" />
    </article>
  );
}
