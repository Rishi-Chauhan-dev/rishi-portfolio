import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="relative mt-24 border-t border-border bg-bg-subtle">
      <div className="wrap py-20 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
          ( Contact )
        </p>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="max-w-xl font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl">
              Let&apos;s make something worth{" "}
              <span className="italic font-serif text-accent-2">shipping.</span>
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="group mt-8 inline-flex items-center gap-3 text-lg font-medium sm:text-2xl"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-ink transition-transform group-hover:rotate-12">
                <Mail className="h-5 w-5" />
              </span>
              <span className="border-b border-border-strong pb-0.5 transition-colors group-hover:border-accent">
                {site.email}
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:justify-items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-faint">
                Elsewhere
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-fg"
                  >
                    <GithubIcon className="h-4 w-4" /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-fg"
                  >
                    <LinkedinIcon className="h-4 w-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-fg"
                  >
                    {site.phone}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-faint">
                Sitemap
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="/#work" className="text-fg-muted transition-colors hover:text-fg">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-fg-muted transition-colors hover:text-fg">
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href={site.resume}
                    className="inline-flex items-center gap-1 text-fg-muted transition-colors hover:text-fg"
                  >
                    Resume <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-fg-faint sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Designed &amp; built from scratch.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.availability}
          </div>
        </div>
      </div>
    </footer>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
