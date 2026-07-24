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

const project = getProject("aurora")!;

export const metadata: Metadata = {
  title: `${project.name} — Case Study`,
  description:
    "Aurora is a next-gen neobank concept designed to make money feel calm — a fintech mobile app with glanceable insights, instant transfers and fluid motion.",
};

export default function AuroraPage() {
  return (
    <article className="pb-8">
      <CaseHero
        project={project}
        visual={
          <div className="overflow-hidden rounded-3xl border border-border">
            <div className="aspect-[16/10] w-full">
              <ProjectMock kind="aurora" />
            </div>
          </div>
        }
      />

      <CaseBlock label="Overview" title="Banking, minus the anxiety.">
        <Overview
          items={[
            {
              k: "The challenge",
              v: "Most banking apps overwhelm — dense tables, alarming red numbers and buried actions. Aurora reimagines mobile banking as a calm, glanceable space that builds confidence.",
            },
            {
              k: "My role",
              v: "Product design and interactive prototyping — user flows, a motion language, and a scalable component system for a fintech mobile app.",
            },
            {
              k: "The outcome",
              v: "A focused concept covering balance, transfers, cards and spend intelligence — engineered for trust, speed and comfortable one-handed use.",
            },
          ]}
        />
      </CaseBlock>

      <CaseBlock
        label="The Problem"
        title="Money is emotional. The UI should respect that."
        intro="Financial anxiety is a design problem. Every hierarchy decision, colour and micro-interaction either calms the user or spikes their stress. Aurora is built around three tensions:"
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { t: "Cognitive overload", d: "Legacy apps dump everything on one screen. Aurora shows one clear thing at a time." },
            { t: "Trust & safety", d: "People need constant, quiet reassurance that their money is safe and their actions are reversible." },
            { t: "One-handed reality", d: "Banking happens on the move — every primary action lives within thumb reach." },
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
        title="Deep violet, glass and generous space."
        intro="A dark, deep-violet canvas lowers visual stress and makes balances glow. Glassmorphic cards create depth without clutter, oversized numerals stay legible at a glance, and continuous motion keeps users oriented as they move between flows."
      >
        <Swatches
          colors={[
            { name: "Aurora", hex: "#7C6BFF" },
            { name: "Halo", hex: "#B39CFF" },
            { name: "Canvas", hex: "#0B0820" },
            { name: "Surface", hex: "#141033" },
            { name: "Positive", hex: "#7DFFB0" },
            { name: "Muted", hex: "#8B86B8" },
          ]}
        />
      </CaseBlock>

      <CaseBlock label="Key Features" title="Focused flows, fluid motion.">
        <FeatureList
          accent={project.accent}
          items={[
            { t: "Instant transfers", d: "A two-tap send flow with contact avatars, smart amounts and a satisfying confirmation moment." },
            { t: "Spend intelligence", d: "Automatic categorisation surfaces where money goes — insight, not judgement." },
            { t: "Card controls", d: "Freeze, set limits and reveal details from a single tactile card interface." },
            { t: "Glanceable home", d: "Balance, recent activity and next actions — everything important, nothing noisy." },
          ]}
        />
      </CaseBlock>

      <CaseBlock
        label="Figma"
        title="Designed to prototype, built to scale."
        intro="Screens were designed in Figma with auto-layout and a token-driven component library so the whole system flexes together. Add a share link to embed the live prototype."
      >
        <FigmaEmbed
          url={project.figma}
          title="Aurora — mobile banking"
          poster="/figma/aurora-screens.svg"
          accent={project.accent}
        />
      </CaseBlock>

      <CaseBlock label="Outcome" title="A concept that feels shippable.">
        <Metrics
          items={[
            { v: "5", l: "core flows designed end-to-end" },
            { v: "60fps", l: "motion spec for every transition" },
            { v: "AA", l: "WCAG contrast on all text" },
          ]}
        />
        <Reveal>
          <div className="mt-8 rounded-2xl border border-border bg-bg-subtle p-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-faint">Reflection</p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-fg-muted">
              The hardest part wasn&apos;t adding features — it was removing them. Every element that
              survived had to earn its place by lowering anxiety or speeding up a real task. Next:
              usability testing on the transfer flow and a full dark/light theme.
            </p>
          </div>
        </Reveal>
      </CaseBlock>

      <NextProjectNav current="aurora" />
    </article>
  );
}
