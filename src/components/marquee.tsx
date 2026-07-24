import type { ReactNode } from "react";

export function Marquee({
  items,
  slow = false,
  className,
}: {
  items: ReactNode[];
  slow?: boolean;
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={"mask-fade-x overflow-hidden " + (className ?? "")}>
      <div
        className="flex w-max shrink-0 items-center gap-10 pr-10"
        style={{ animation: slow ? "var(--animate-marquee-slow)" : "var(--animate-marquee)" }}
      >
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center gap-10" aria-hidden={i >= items.length}>
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}
