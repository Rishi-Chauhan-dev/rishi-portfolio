import { ArrowUpRight } from "lucide-react";

/**
 * Figma embed slot.
 * - Pass `url` (a Figma file/prototype share link) to render a live embedded prototype.
 * - Leave `url` empty to show a styled slot with a static poster (the SVG artboard)
 *   and instructions. Add the link in src/lib/projects.ts to go live.
 */
export function FigmaEmbed({
  url,
  title = "Figma prototype",
  poster,
  accent = "#c3f53c",
  height = 560,
}: {
  url?: string;
  title?: string;
  poster?: string;
  accent?: string;
  height?: number;
}) {
  if (url) {
    const src = `https://www.figma.com/embed?embed_host=rishi-portfolio&url=${encodeURIComponent(url)}`;
    return (
      <div className="overflow-hidden rounded-2xl border border-border bg-bg-subtle">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <span className="flex items-center gap-2 font-mono text-xs text-fg-muted">
            <FigmaGlyph /> {title}
          </span>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs text-fg-muted transition-colors hover:text-fg"
          >
            Open in Figma <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <iframe title={title} src={src} className="w-full" style={{ height }} allowFullScreen />
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-dashed border-border-strong bg-bg-subtle">
      {poster ? (
        <div
          className="aspect-[16/10] w-full bg-cover bg-center"
          style={{ backgroundImage: `url("${poster}")` }}
          role="img"
          aria-label={`${title} — design preview`}
        />
      ) : (
        <div className="aspect-[16/10] w-full" />
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-bg via-bg/40 to-transparent p-5">
        <div className="flex items-center gap-3">
          <span
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-black"
            style={{ background: accent }}
          >
            <FigmaGlyph className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-medium">{title} — Figma embed slot</p>
            <p className="text-xs text-fg-muted">
              Live-ready: drop your share link into <code className="text-fg">projects.ts</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FigmaGlyph({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8Z" opacity=".9" />
      <path d="M4 12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4Z" opacity=".7" />
      <path d="M4 4a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4Z" opacity=".5" />
      <path d="M12 0h4a4 4 0 0 1 0 8h-4V0Z" opacity=".8" />
      <path d="M20 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" opacity=".6" />
    </svg>
  );
}
