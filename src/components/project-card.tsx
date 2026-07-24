import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectMock } from "./project-mock";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden rounded-3xl border border-border bg-card transition-colors duration-300 hover:border-border-strong"
    >
      <div className="relative aspect-[16/11] overflow-hidden border-b border-border">
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
          <ProjectMock kind={project.kind} />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-bg/70 px-2.5 py-1 font-mono text-xs text-fg backdrop-blur-md">
          {project.index}
        </span>
        {project.live && (
          <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-bg/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
          </span>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: project.accent }} />
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted">
            {project.category}
          </p>
          <span className="ml-auto font-mono text-xs text-fg-faint">{project.year}</span>
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl tracking-tight sm:text-[27px]">{project.name}</h3>
          <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-fg-muted transition-all duration-300 group-hover:border-transparent group-hover:bg-fg group-hover:text-bg">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>
        <p className="mt-1.5 max-w-md text-sm text-fg-muted">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2.5 py-1 text-[11px] text-fg-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{ background: project.accent }}
      />
    </Link>
  );
}
