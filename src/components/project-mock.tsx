import { cn } from "@/lib/utils";

/**
 * Lightweight, fully-CSS/SVG in-browser mockups for each project.
 * Used on the homepage work grid and the case-study heroes so the site
 * feels alive without shipping heavy raster assets.
 */
export function ProjectMock({ kind, className }: { kind: string; className?: string }) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {kind === "shree-navya" && <ShreeNavyaMock />}
      {kind === "aurora" && <AuroraMock />}
      {kind === "bloom" && <BloomMock />}
      {kind === "lumen" && <LumenMock />}
    </div>
  );
}

function ShreeNavyaMock() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(120%_120%_at_20%_0%,#fff7ed_0%,#fed7aa_55%,#fdba74_100%)] p-6">
      <div className="w-full max-w-[248px] rounded-2xl border border-black/10 bg-white p-3 shadow-2xl shadow-orange-950/20">
        <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-amber-300 to-orange-400">
          <span className="absolute right-2 top-2 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-semibold text-white shadow">
            Flour
          </span>
          <div className="grid h-14 w-14 place-items-center rounded-full bg-white/80 text-[10px] font-bold text-orange-600 shadow-inner">
            SATTU
          </div>
        </div>
        <p className="mt-3 text-[13px] font-bold tracking-tight text-neutral-900">SHREE NAVYA SATTU</p>
        <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-neutral-500">
          Traditional roasted gram flour, rich in protein and fiber.
        </p>
        <div className="mt-2.5 flex gap-1.5">
          <span className="rounded-md border border-orange-500 bg-white px-2 py-1 text-[10px] font-semibold text-neutral-900">
            60gm
          </span>
          <span className="rounded-md bg-neutral-100 px-2 py-1 text-[10px] text-neutral-400">200gm</span>
          <span className="rounded-md bg-neutral-100 px-2 py-1 text-[10px] text-neutral-400">250gm</span>
        </div>
        <div className="mt-2.5 flex items-center justify-between">
          <span className="text-[11px] text-neutral-500">Weight: 60gm</span>
          <span className="text-base font-bold text-orange-500">₹10</span>
        </div>
        <div className="mt-2.5 rounded-lg bg-orange-500 py-2 text-center text-[11px] font-semibold text-white">
          View Details
        </div>
      </div>
    </div>
  );
}

function AuroraMock() {
  const tx = [
    { n: "Spotify", s: "Subscription", a: "-₹119" },
    { n: "Salary", s: "Acme Studio", a: "+₹84,000" },
    { n: "Blinkit", s: "Groceries", a: "-₹640" },
  ];
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(120%_120%_at_80%_0%,#2b2358_0%,#15102e_55%,#0b0820_100%)] p-6">
      <div className="w-[212px] rounded-[26px] border border-white/10 bg-[#141033]/90 p-3.5 shadow-2xl backdrop-blur">
        <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-white/20" />
        <p className="text-[10px] text-white/50">Total balance</p>
        <p className="text-2xl font-semibold tracking-tight text-white">₹2,48,900</p>
        <div className="mt-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#7c6bff] to-[#b39cff] p-3">
          <div className="flex justify-between text-[9px] text-white/80">
            <span className="font-semibold tracking-wide">AURORA</span>
            <span>•••• 4291</span>
          </div>
          <div className="mt-5 text-[11px] tracking-[0.15em] text-white/95">RISHI CHAUHAN</div>
        </div>
        <div className="mt-3 space-y-2">
          {tx.map((t) => (
            <div key={t.n} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-white/10" />
                <div>
                  <p className="text-[11px] font-medium text-white">{t.n}</p>
                  <p className="text-[9px] text-white/40">{t.s}</p>
                </div>
              </div>
              <span
                className={cn(
                  "text-[11px] font-semibold",
                  t.a.startsWith("+") ? "text-[#7dffb0]" : "text-white/80",
                )}
              >
                {t.a}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-around rounded-full bg-white/5 py-2">
          {["●", "◑", "＋", "◇"].map((s, i) => (
            <span key={i} className={cn("text-[11px]", i === 0 ? "text-[#b39cff]" : "text-white/30")}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BloomMock() {
  const r = 34;
  const c = 2 * Math.PI * r;
  const pct = 0.72;
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(120%_120%_at_50%_0%,#ecfdf5_0%,#a7f3d0_55%,#6ee7b7_100%)] p-6">
      <div className="w-[212px] rounded-[26px] border border-black/5 bg-white p-4 shadow-2xl shadow-emerald-950/10">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-neutral-800">Today</span>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
            7-day streak
          </span>
        </div>
        <div className="my-4 grid place-items-center">
          <div className="relative grid place-items-center">
            <svg width="120" height="120" viewBox="0 0 84 84" className="-rotate-90">
              <circle cx="42" cy="42" r={r} fill="none" stroke="#d1fae5" strokeWidth="8" />
              <circle
                cx="42"
                cy="42"
                r={r}
                fill="none"
                stroke="#2fb98a"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={c}
                strokeDashoffset={c * (1 - pct)}
              />
            </svg>
            <div className="absolute text-center">
              <p className="text-xl font-bold text-neutral-900">72%</p>
              <p className="text-[9px] text-neutral-400">of daily goal</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-emerald-50 p-2">
            <p className="text-[9px] text-emerald-700">Breathe</p>
            <p className="text-sm font-semibold text-neutral-900">5 min</p>
          </div>
          <div className="rounded-xl bg-neutral-100 p-2">
            <p className="text-[9px] text-neutral-500">Sleep</p>
            <p className="text-sm font-semibold text-neutral-900">7h 42m</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LumenMock() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0a0e1a] p-6">
      <div className="w-full max-w-[320px] rounded-2xl border border-white/10 bg-[#0f1424] p-3 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 rounded-md bg-[#4f7dff]" />
            <span className="text-[11px] font-semibold text-white">Lumen</span>
          </div>
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#4f7dff]" />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { k: "MRR", v: "$48.2k", d: "+12%" },
            { k: "Users", v: "9,410", d: "+4%" },
            { k: "Churn", v: "1.8%", d: "-0.3%" },
          ].map((m) => (
            <div key={m.k} className="rounded-lg border border-white/10 bg-[#0b1020] p-2">
              <p className="text-[8px] uppercase tracking-wide text-white/40">{m.k}</p>
              <p className="text-[13px] font-semibold text-white">{m.v}</p>
              <p className="text-[8px] text-[#7dffb0]">{m.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 rounded-xl border border-white/10 bg-[#0b1020] p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-white/60">Revenue</p>
            <p className="text-[9px] text-white/30">Last 30 days</p>
          </div>
          <svg viewBox="0 0 300 90" className="mt-2 w-full">
            <defs>
              <linearGradient id="lumenFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4f7dff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#4f7dff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,70 C30,60 45,30 75,35 C110,41 120,15 155,20 C195,26 210,55 245,45 C275,37 285,22 300,18 L300,90 L0,90 Z"
              fill="url(#lumenFill)"
            />
            <path
              d="M0,70 C30,60 45,30 75,35 C110,41 120,15 155,20 C195,26 210,55 245,45 C275,37 285,22 300,18"
              fill="none"
              stroke="#6f96ff"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-xl border border-[#4f7dff]/30 bg-[#4f7dff]/10 p-2">
          <span className="text-[#8fb0ff]">✦</span>
          <p className="text-[10px] text-[#9db4ff]">Ask Lumen — “Why did revenue dip in week 3?”</p>
        </div>
      </div>
    </div>
  );
}
