import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/marquee";
import { ProjectCard } from "@/components/project-card";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

const skills = [
  "Figma",
  "Prototyping",
  "Design Systems",
  "User Research",
  "Wireframing",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Accessibility",
  "Responsive Design",
  "Design Tokens",
];

const stats = [
  { k: "01", v: "Live product", d: "shipped to production" },
  { k: "04", v: "Case studies", d: "design → built" },
  { k: "’26", v: "B.Tech CSE", d: "NSIT, final year" },
  { k: "F→C", v: "Figma to Code", d: "design meets dev" },
];

const capabilities = [
  {
    n: "01",
    t: "Discover",
    d: "Understand the people, the business and the constraints. Audit what exists, map the problem before touching pixels.",
  },
  {
    n: "02",
    t: "Define",
    d: "Turn messy input into clear flows, information architecture and a sharp problem statement worth solving.",
  },
  {
    n: "03",
    t: "Design",
    d: "Wireframe → high-fidelity in Figma. Build a token-driven system so every screen stays consistent and scalable.",
  },
  {
    n: "04",
    t: "Ship",
    d: "Translate design into responsive, accessible React/Next.js — pixel-close, performant and ready for real users.",
  },
];

const toolkit = {
  Design: ["Figma", "Prototyping", "Wireframing", "Design Systems", "User Research", "Accessibility"],
  Build: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive UI"],
  Foundations: ["Design Tokens", "Information Architecture", "Usability", "Micro-interactions"],
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Skills marquee */}
      <section className="border-y border-border py-5">
        <Marquee
          items={skills.map((s) => (
            <span key={s} className="flex items-center gap-10">
              <span className="font-display text-xl text-fg-muted">{s}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ))}
        />
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-24 py-20 sm:py-28">
        <div className="wrap">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
                  ( Selected Work )
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl">
                  Four products, one obsession with the details.
                </h2>
              </div>
              <p className="max-w-xs text-sm text-fg-muted">
                A live e-commerce brand plus three new-gen concepts across fintech, wellness and AI —
                each taken from research to a build-ready interface.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 border-t border-border bg-bg-subtle py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">( About )</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-fg font-display text-2xl font-bold text-bg">
                  RC
                  <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-bg-subtle" />
                </div>
                <div>
                  <p className="font-display text-xl">{site.name}</p>
                  <p className="text-sm text-fg-muted">{site.role}</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {stats.map((s) => (
                  <div key={s.k} className="bg-bg-subtle p-5">
                    <p className="font-display text-3xl tracking-tight">{s.k}</p>
                    <p className="mt-2 text-sm font-medium">{s.v}</p>
                    <p className="text-xs text-fg-faint">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight sm:text-[2.75rem]">
                I live in the gap between{" "}
                <span className="italic font-serif text-accent-2">design</span> and{" "}
                <span className="italic font-serif text-accent-2">code</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg">
                <p>
                  I&apos;m Rishi — a UI/UX developer and final-year Computer Science student at NSIT.
                  I care about the small stuff most people scroll past: the spacing, the easing curve,
                  the exact moment an interface stops feeling like software and starts feeling
                  effortless.
                </p>
                <p>
                  Because I design <em className="text-fg not-italic">and</em> build, nothing gets
                  lost in the handoff. I&apos;ve shipped a real e-commerce storefront (
                  <a
                    href={projects[0].live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-fg underline decoration-accent decoration-2 underline-offset-4"
                  >
                    Shree Navya
                  </a>
                  ) end-to-end, and I prototype new-gen product ideas in Figma before turning them
                  into responsive, accessible front-ends.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {Object.entries(toolkit).map(([group, items], i) => (
                <Reveal key={group} delay={i * 0.06}>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-faint">
                      {group}
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {items.map((it) => (
                        <li key={it} className="flex items-center gap-2.5 text-sm">
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-24 py-20 sm:py-28">
        <div className="wrap">
          <Reveal>
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
                ( How I Work )
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl">
                From fuzzy problem to shipped pixel.
              </h2>
            </div>
          </Reveal>

          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <StaggerItem key={c.n}>
                <div className="group h-full bg-bg p-7 transition-colors hover:bg-bg-subtle">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-accent-2">{c.n}</span>
                    <span className="h-2 w-2 rounded-full bg-border-strong transition-colors group-hover:bg-accent" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl tracking-tight">{c.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">{c.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <a
              href={`mailto:${site.email}`}
              className="group mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-fg p-8 text-bg sm:flex-row sm:items-center sm:p-10"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-bg/60">
                  ( Have a role or project? )
                </p>
                <p className="mt-3 max-w-lg font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                  Let&apos;s turn your next interface into something people remember.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-ink transition-transform group-hover:-translate-y-0.5">
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
