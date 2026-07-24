import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { otherProjects, type Project } from "@/lib/projects";

/* ---------------- Frames ---------------- */

export function BrowserFrame({
  children,
  label = "shreenavyafoodproducts.com",
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div className={"overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/10 " + (className ?? "")}>
      <div className="flex items-center gap-2 border-b border-border bg-bg-subtle px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="mx-auto rounded-md bg-bg px-3 py-1 font-mono text-[11px] text-fg-faint">
          {label}
        </span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export function DeviceFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={"mx-auto w-full max-w-[300px] rounded-[2.6rem] border-[10px] border-fg bg-fg p-0 shadow-2xl shadow-black/20 " + (className ?? "")}>
      <div className="relative overflow-hidden rounded-[2rem]">
        <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-fg" />
        {children}
      </div>
    </div>
  );
}

/* ---------------- Hero ---------------- */

export function CaseHero({ project, visual }: { project: Project; visual: ReactNode }) {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem]"
        style={{
          background: `radial-gradient(60% 60% at 50% 0%, ${project.accent}22 0%, transparent 70%)`,
        }}
      />
      <div className="wrap">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-fg-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All work
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span
              className="grid h-8 place-items-center rounded-full px-3 font-mono text-xs text-white"
              style={{ background: project.accent }}
            >
              {project.index}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-fg-muted">
              {project.category}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] tracking-tight sm:text-7xl">
            {project.name}
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-2xl text-xl text-fg-muted">{project.tagline}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
              >
                Visit live site <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm text-fg-muted">
              {project.platform}
            </span>
          </div>
        </Reveal>
      </div>

      <div className="wrap mt-14">
        <Reveal delay={0.1}>{visual}</Reveal>
      </div>

      <div className="wrap mt-12">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {[
            { k: "Role", v: project.role },
            { k: "Timeline", v: project.timeline },
            { k: "Platform", v: project.platform },
            { k: "Year", v: project.year },
          ].map((m) => (
            <div key={m.k} className="bg-bg p-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-faint">{m.k}</p>
              <p className="mt-2 text-sm font-medium">{m.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section block ---------------- */

export function CaseBlock({
  label,
  title,
  intro,
  children,
  className,
}: {
  label: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={"wrap py-16 sm:py-20 " + (className ?? "")}>
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">( {label} )</p>
        {title && (
          <h2 className="mt-5 max-w-3xl font-display text-3xl leading-[1.05] tracking-tight sm:text-5xl">
            {title}
          </h2>
        )}
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">{intro}</p>}
      </Reveal>
      {children && <div className="mt-10">{children}</div>}
    </section>
  );
}

export function Figure({ children, caption }: { children: ReactNode; caption?: string }) {
  return (
    <figure>
      {children}
      {caption && (
        <figcaption className="mt-3 text-center font-mono text-xs text-fg-faint">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ---------------- Overview ---------------- */

export function Overview({
  items,
}: {
  items: { k: string; v: string }[];
}) {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {items.map((it, i) => (
        <Reveal key={it.k} delay={i * 0.06}>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-faint">{it.k}</p>
            <p className="mt-3 text-base leading-relaxed text-fg-muted">{it.v}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- Feature list ---------------- */

export function FeatureList({ items, accent }: { items: { t: string; d: string }[]; accent: string }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
      {items.map((it) => (
        <div key={it.t} className="bg-bg p-6">
          <div className="flex items-start gap-3">
            <span
              className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white"
              style={{ background: accent }}
            >
              <Check className="h-3.5 w-3.5" />
            </span>
            <div>
              <h3 className="font-display text-lg tracking-tight">{it.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{it.d}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Design system: swatches + type ---------------- */

export function Swatches({ colors }: { colors: { name: string; hex: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
      {colors.map((c) => (
        <div key={c.hex} className="overflow-hidden rounded-xl border border-border">
          <div className="h-20" style={{ background: c.hex }} />
          <div className="p-3">
            <p className="text-xs font-medium">{c.name}</p>
            <p className="font-mono text-[11px] uppercase text-fg-faint">{c.hex}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Metrics ---------------- */

export function Metrics({ items }: { items: { v: string; l: string }[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
      {items.map((m) => (
        <div key={m.l} className="bg-bg p-8">
          <p className="font-display text-4xl tracking-tight sm:text-5xl">{m.v}</p>
          <p className="mt-2 text-sm text-fg-muted">{m.l}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Next project ---------------- */

export function NextProjectNav({ current }: { current: string }) {
  const next = otherProjects(current)[0];
  if (!next) return null;
  return (
    <section className="border-t border-border">
      <Link href={`/work/${next.slug}`} className="group block">
        <div className="wrap flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              ( Next project )
            </p>
            <p className="mt-4 font-display text-4xl tracking-tight transition-colors group-hover:text-fg-muted sm:text-6xl">
              {next.name}
            </p>
            <p className="mt-2 text-fg-muted">{next.category}</p>
          </div>
          <span
            className="grid h-16 w-16 shrink-0 place-items-center rounded-full text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            style={{ background: next.accent }}
          >
            <ArrowUpRight className="h-7 w-7" />
          </span>
        </div>
      </Link>
    </section>
  );
}
