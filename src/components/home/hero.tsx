"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: EASE },
  });

  return (
    <section className="relative overflow-hidden">
      {/* backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-[-10%] h-[42rem] w-[42rem] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[34rem] w-[34rem] rounded-full bg-fg/[0.04] blur-[100px]" />
        <div className="grain-overlay absolute inset-0 opacity-[0.15] mix-blend-overlay dark:opacity-[0.22]" />
      </div>

      <div className="wrap relative pb-16 pt-32 sm:pb-24 sm:pt-40">
        <motion.div
          {...rise(0.05)}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.availability}
          </span>
          <span className="text-fg-faint">Based in {site.location}</span>
        </motion.div>

        <h1 className="mt-8 font-display font-medium leading-[0.9] tracking-tight">
          <motion.span
            {...rise(0.12)}
            className="block text-[clamp(3.2rem,12vw,9.5rem)]"
          >
            Rishi Chauhan
          </motion.span>
          <motion.span
            {...rise(0.22)}
            className="mt-2 block text-[clamp(1.6rem,5vw,3.4rem)] text-fg-muted"
          >
            <span className="marker-hl text-fg">UI/UX Developer</span>
          </motion.span>
        </h1>

        <motion.p
          {...rise(0.32)}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted sm:text-xl"
        >
          I craft clean, human-centred product interfaces — and build them in{" "}
          <span className="text-fg">React &amp; Next.js</span>, so ideas survive the trip from
          Figma to production. From a live e-commerce brand to fintech, wellness and AI.
        </motion.p>

        <motion.div {...rise(0.42)} className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            View selected work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </Link>
          <a
            href={site.resume}
            className="group inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-medium transition-colors hover:bg-bg-subtle"
          >
            Download resume
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>

          <motion.div
            aria-hidden
            initial={reduce ? {} : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="ml-auto hidden sm:block"
          >
            <div className="relative h-24 w-24">
              <motion.svg
                viewBox="0 0 100 100"
                className="h-full w-full"
                animate={reduce ? {} : { rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                <defs>
                  <path
                    id="heroBadge"
                    d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="fill-fg-muted font-mono text-[8.5px] uppercase tracking-[0.25em]">
                  <textPath href="#heroBadge">
                    Design × Code · Available 2026 ·
                  </textPath>
                </text>
              </motion.svg>
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-ink">
                  <ArrowDown className="h-4 w-4" />
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
