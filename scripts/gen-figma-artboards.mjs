// Generates branded, multi-screen SVG artboards for each project.
// Output:
//   public/figma/<slug>-screens.svg   → used as case-study posters + drag-import into Figma
//   figma-kit/plugin/artboards.js      → SVG strings embedded for the Figma plugin
// Run:  node scripts/gen-figma-artboards.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const W = 1600;
const H = 1000;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function rr(x, y, w, h, r, fill, opts = {}) {
  const stroke = opts.stroke ? ` stroke="${opts.stroke}" stroke-width="${opts.sw ?? 1}"` : "";
  const op = opts.opacity != null ? ` opacity="${opts.opacity}"` : "";
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke}${op}/>`;
}
function ci(cx, cy, r, fill, opts = {}) {
  const stroke = opts.stroke ? ` stroke="${opts.stroke}" stroke-width="${opts.sw ?? 1}"` : "";
  const f = fill === "none" ? "none" : fill;
  const extra = opts.extra ?? "";
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${f}"${stroke}${extra}/>`;
}
function t(x, y, str, o = {}) {
  const {
    size = 14,
    weight = 400,
    fill = "#000",
    anchor = "start",
    family = "Inter, 'Helvetica Neue', Arial, sans-serif",
    spacing,
    opacity,
  } = o;
  const ls = spacing != null ? ` letter-spacing="${spacing}"` : "";
  const op = opacity != null ? ` opacity="${opacity}"` : "";
  return `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}"${ls}${op}>${esc(str)}</text>`;
}
function g(id, kids) {
  return `<g id="${id}">${kids.join("")}</g>`;
}

function phone(x, y, w, h, screen, bg = "#ffffff") {
  const r = 40;
  return g("phone", [
    rr(x - 6, y - 6, w + 12, h + 12, r + 6, "#0d0d10"),
    rr(x, y, w, h, r, bg),
    `<clipPath id="clip${x}${y}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath>`,
    `<g clip-path="url(#clip${x}${y})">${screen}</g>`,
    rr(x + w / 2 - 34, y + 12, 68, 18, 9, "#0d0d10"),
  ]);
}

function browser(x, y, w, h, screen, label, bg = "#ffffff") {
  return g("browser", [
    rr(x, y, w, h, 16, bg, { stroke: "#00000014" }),
    rr(x, y, w, 40, 16, "#f3f3f2"),
    rr(x, y + 24, w, 16, 0, "#f3f3f2"),
    ci(x + 22, y + 20, 5, "#ff5f57"),
    ci(x + 40, y + 20, 5, "#febc2e"),
    ci(x + 58, y + 20, 5, "#28c840"),
    rr(x + w / 2 - 110, y + 11, 220, 18, 9, "#ffffff"),
    t(x + w / 2, y + 24, label, { size: 11, fill: "#9a968c", anchor: "middle", family: "'SF Mono', monospace" }),
    `<clipPath id="bclip${x}${y}"><rect x="${x}" y="${y + 40}" width="${w}" height="${h - 40}" rx="0"/></clipPath>`,
    `<g clip-path="url(#bclip${x}${y})">${screen}</g>`,
  ]);
}

function header(title, category, accent, dark) {
  const ink = dark ? "#eeece4" : "#16150f";
  const muted = dark ? "#9b978c" : "#6a665c";
  return g("header", [
    ci(64, 74, 8, accent),
    t(88, 80, title, { size: 30, weight: 700, fill: ink, family: "'Space Grotesk', Inter, sans-serif" }),
    t(W - 64, 68, "FIGMA · KEY SCREENS", { size: 12, weight: 600, fill: muted, anchor: "end", family: "'SF Mono', monospace", spacing: 2 }),
    t(W - 64, 88, esc(category), { size: 13, fill: muted, anchor: "end" }),
    rr(64, 108, W - 128, 1.5, 1, dark ? "#ffffff1f" : "#00000014"),
  ]);
}

function artboard(inner, { bg }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Inter, sans-serif">
<rect width="${W}" height="${H}" fill="${bg}"/>
${inner}
</svg>`;
}

/* ---------------- Shree Navya ---------------- */
function shreeNavya() {
  const O = "#f97316";
  const ink = "#0c0a09";
  const muted = "#78716c";
  const homeScreen = (x, y, w) =>
    g("sn-home", [
      rr(x, y + 40, w, 54, 0, "#ffffff"),
      ci(x + 30, y + 67, 12, O),
      t(x + 50, y + 72, "Shree Navya Food Products", { size: 13, weight: 700, fill: ink }),
      rr(x + w - 108, y + 54, 88, 26, 6, O),
      t(x + w - 64, y + 71, "Contact Us", { size: 11, weight: 600, fill: "#fff", anchor: "middle" }),
      t(x + 40, y + 150, "Authentic Indian", { size: 34, weight: 700, fill: ink }),
      t(x + 40, y + 190, "Food Products", { size: 34, weight: 700, fill: ink }),
      t(x + 40, y + 226, "Premium quality ingredients for your", { size: 14, fill: muted }),
      t(x + 40, y + 246, "everyday cooking needs.", { size: 14, fill: muted }),
      rr(x + 40, y + 270, 150, 40, 8, O),
      t(x + 115, y + 295, "Explore Products", { size: 12, weight: 600, fill: "#fff", anchor: "middle" }),
      rr(x + 200, y + 270, 90, 40, 8, "#ffffff", { stroke: "#d6d3d1" }),
      t(x + 245, y + 295, "About Us", { size: 12, weight: 600, fill: ink, anchor: "middle" }),
      rr(x + 40, y + 340, w - 80, 150, 14, "#fef3c7"),
      ...[0, 1, 2, 3].map((i) => rr(x + 60 + i * ((w - 120) / 4), y + 360, (w - 150) / 4, 110, 8, ["#fcd34d", "#fb923c", "#38bdf8", "#a3e635"][i])),
    ]);

  const card = (cx, cy, cw, ch, name, price, tone) =>
    g("sn-card", [
      rr(cx, cy, cw, ch, 12, "#ffffff", { stroke: "#e7e5e4" }),
      rr(cx + 1, cy + 1, cw - 2, ch * 0.42, 11, tone),
      rr(cx + cw - 52, cy + 12, 40, 18, 9, O),
      t(cx + cw - 32, cy + 25, "Flour", { size: 9, weight: 600, fill: "#fff", anchor: "middle" }),
      t(cx + 16, cy + ch * 0.42 + 30, `SHREE NAVYA ${name}`, { size: 12, weight: 700, fill: ink }),
      t(cx + 16, cy + ch * 0.42 + 50, "Premium quality, authentic taste.", { size: 10, fill: muted }),
      rr(cx + 16, cy + ch - 78, 48, 22, 6, "#ffffff", { stroke: O }),
      t(cx + 40, cy + ch - 63, "250gm", { size: 9, weight: 600, fill: ink, anchor: "middle" }),
      t(cx + cw - 16, cy + ch - 60, price, { size: 15, weight: 700, fill: O, anchor: "end" }),
      rr(cx + 16, cy + ch - 46, cw - 32, 30, 8, O),
      t(cx + cw / 2, cy + ch - 26, "View Details", { size: 11, weight: 600, fill: "#fff", anchor: "middle" }),
    ]);

  const productsScreen = (x, y, w) => {
    const pad = 30;
    const cw = (w - pad * 3) / 2;
    const ch = 250;
    return g("sn-products", [
      rr(x, y + 40, w, 44, 0, "#ffffff"),
      t(x + 30, y + 68, "Our Products", { size: 18, weight: 700, fill: ink }),
      rr(x + 30, y + 100, 260, 34, 8, "#f5f5f4"),
      rr(x + 34, y + 104, 84, 26, 6, "#ffffff", { stroke: "#e7e5e4" }),
      t(x + 76, y + 121, "All Products", { size: 10, weight: 600, fill: ink, anchor: "middle" }),
      t(x + 150, y + 121, "Flour", { size: 10, fill: muted, anchor: "middle" }),
      t(x + 220, y + 121, "Spices", { size: 10, fill: muted, anchor: "middle" }),
      card(x + pad, y + 154, cw, ch, "SATTU", "₹10", "#fcd34d"),
      card(x + pad * 2 + cw, y + 154, cw, ch, "BESAN", "₹110", "#fb923c"),
      card(x + pad, y + 154 + ch + 24, cw, ch, "SUJI", "₹28", "#38bdf8"),
      card(x + pad * 2 + cw, y + 154 + ch + 24, cw, ch, "MAIDA", "₹26", "#a3e635"),
    ]);
  };

  return g("screens", [
    browser(80, 170, 700, 720, homeScreen(80, 170, 700), "shreenavyafoodproducts.com"),
    browser(820, 170, 700, 720, productsScreen(820, 170, 700), "shreenavyafoodproducts.com/products"),
  ]);
}

/* ---------------- Aurora ---------------- */
function aurora() {
  const V = "#7c6bff";
  const halo = "#b39cff";
  const surface = "#141033";
  const pos = "#7dffb0";
  const w = 320;
  const h = 680;
  const ys = 170;
  const homeS = (x) =>
    g("au-home", [
      rr(x, ys, w, h, 0, "#0e0b26"),
      t(x + 28, ys + 84, "Total balance", { size: 12, fill: "#ffffff88" }),
      t(x + 28, ys + 122, "₹2,48,900", { size: 34, weight: 700, fill: "#fff" }),
      rr(x + 24, ys + 148, w - 48, 120, 18, V),
      t(x + 44, ys + 182, "AURORA", { size: 11, weight: 700, fill: "#ffffffcc", spacing: 2 }),
      t(x + w - 44, ys + 182, "•••• 4291", { size: 11, fill: "#ffffffcc", anchor: "end" }),
      t(x + 44, ys + 244, "RISHI CHAUHAN", { size: 12, fill: "#fff", spacing: 1 }),
      ...[0, 1, 2].map((i) =>
        g("tx", [
          ci(x + 42, ys + 322 + i * 56, 16, "#ffffff14"),
          t(x + 70, ys + 320 + i * 56, ["Spotify", "Salary", "Blinkit"][i], { size: 13, weight: 500, fill: "#fff" }),
          t(x + 70, ys + 338 + i * 56, ["Subscription", "Acme Studio", "Groceries"][i], { size: 10, fill: "#ffffff66" }),
          t(x + w - 28, ys + 328 + i * 56, ["-₹119", "+₹84,000", "-₹640"][i], { size: 13, weight: 600, fill: i === 1 ? pos : "#ffffffcc", anchor: "end" }),
        ]),
      ),
      rr(x + 24, ys + h - 72, w - 48, 52, 26, "#ffffff10"),
      ...[0, 1, 2, 3].map((i) => ci(x + 60 + i * 66, ys + h - 46, 5, i === 0 ? halo : "#ffffff44")),
    ]);
  const sendS = (x) =>
    g("au-send", [
      rr(x, ys, w, h, 0, "#0e0b26"),
      t(x + 28, ys + 74, "Send money", { size: 20, weight: 700, fill: "#fff" }),
      ...[0, 1, 2, 3].map((i) => g("av", [ci(x + 48 + i * 64, ys + 128, 22, ["#7c6bff", "#f97316", "#2fb98a", "#38bdf8"][i]), t(x + 48 + i * 64, ys + 168, ["A", "R", "M", "S"][i], { size: 11, fill: "#ffffff99", anchor: "middle" })])),
      t(x + w / 2, ys + 250, "₹5,000", { size: 40, weight: 700, fill: "#fff", anchor: "middle" }),
      t(x + w / 2, ys + 280, "to Meera · HDFC ••4821", { size: 12, fill: "#ffffff77", anchor: "middle" }),
      ...[0, 1, 2, 3].map((r) =>
        [0, 1, 2].map((c) => rr(x + 40 + c * 84, ys + 320 + r * 62, 64, 48, 12, "#ffffff0c")).join(""),
      ).join(""),
      rr(x + 24, ys + h - 84, w - 48, 52, 26, V),
      t(x + w / 2, ys + h - 52, "Send  →", { size: 14, weight: 600, fill: "#fff", anchor: "middle" }),
    ]);
  const insightS = (x) => {
    const bars = [70, 120, 90, 150, 110, 60, 130];
    return g("au-insight", [
      rr(x, ys, w, h, 0, "#0e0b26"),
      t(x + 28, ys + 74, "Spending", { size: 20, weight: 700, fill: "#fff" }),
      t(x + 28, ys + 100, "This month · ₹42,180", { size: 12, fill: "#ffffff77" }),
      rr(x + 24, ys + 124, w - 48, 200, 18, surface),
      ...bars.map((b, i) => rr(x + 48 + i * 34, ys + 300 - b, 20, b, 6, i === 3 ? halo : V)),
      ...[0, 1, 2].map((i) =>
        g("cat", [
          ci(x + 44, ys + 372 + i * 50, 6, ["#7c6bff", "#2fb98a", "#f97316"][i]),
          t(x + 62, ys + 377 + i * 50, ["Food & dining", "Shopping", "Transport"][i], { size: 13, fill: "#fff" }),
          t(x + w - 28, ys + 377 + i * 50, ["₹12,400", "₹9,800", "₹5,200"][i], { size: 13, weight: 600, fill: "#fff", anchor: "end" }),
        ]),
      ),
    ]);
  };
  return g("screens", [
    phone(240, ys, w, h, homeS(240), "#0e0b26"),
    phone(640, ys, w, h, sendS(640), "#0e0b26"),
    phone(1040, ys, w, h, insightS(1040), "#0e0b26"),
  ]);
}

/* ---------------- Bloom ---------------- */
function bloom() {
  const G = "#2fb98a";
  const ink = "#0c1f17";
  const muted = "#6b8078";
  const w = 320;
  const h = 680;
  const ys = 170;
  const ring = (cx, cy, r, pct, col) => {
    const c = 2 * Math.PI * r;
    return g("ring", [
      ci(cx, cy, r, "none", { stroke: "#d1fae5", sw: 14 }),
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${col}" stroke-width="14" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct)}" transform="rotate(-90 ${cx} ${cy})"/>`,
    ]);
  };
  const todayS = (x) =>
    g("bl-today", [
      rr(x, ys, w, h, 0, "#f4fbf7"),
      t(x + 28, ys + 78, "Good morning,", { size: 14, fill: muted }),
      t(x + 28, ys + 104, "Rishi", { size: 26, weight: 700, fill: ink }),
      rr(x + w - 92, ys + 60, 64, 26, 13, "#d1fae5"),
      t(x + w - 60, ys + 77, "7-day", { size: 10, weight: 600, fill: "#047857", anchor: "middle" }),
      ring(x + w / 2, ys + 240, 78, 0.72, G),
      t(x + w / 2, ys + 234, "72%", { size: 34, weight: 700, fill: ink, anchor: "middle" }),
      t(x + w / 2, ys + 258, "of daily goal", { size: 11, fill: muted, anchor: "middle" }),
      rr(x + 28, ys + 360, (w - 76) / 2, 84, 16, "#ecfdf5"),
      t(x + 46, ys + 392, "Breathe", { size: 11, fill: "#047857" }),
      t(x + 46, ys + 418, "5 min", { size: 18, weight: 700, fill: ink }),
      rr(x + 28 + (w - 76) / 2 + 20, ys + 360, (w - 76) / 2, 84, 16, "#eefaf5"),
      t(x + 66 + (w - 76) / 2, ys + 392, "Sleep", { size: 11, fill: muted }),
      t(x + 66 + (w - 76) / 2, ys + 418, "7h 42m", { size: 18, weight: 700, fill: ink }),
      rr(x + 28, ys + h - 82, w - 56, 50, 25, G),
      t(x + w / 2, ys + h - 51, "Start today's plan", { size: 13, weight: 600, fill: "#fff", anchor: "middle" }),
    ]);
  const breatheS = (x) =>
    g("bl-breathe", [
      `<defs><radialGradient id="brG" cx="50%" cy="45%"><stop offset="0%" stop-color="#6ee7b7"/><stop offset="100%" stop-color="#2fb98a"/></radialGradient></defs>`,
      rr(x, ys, w, h, 0, "#0c1f17"),
      t(x + w / 2, ys + 80, "Breathe", { size: 20, weight: 700, fill: "#eafaf3", anchor: "middle" }),
      ci(x + w / 2, ys + 300, 118, "url(#brG)", { extra: ' opacity="0.28"' }),
      ci(x + w / 2, ys + 300, 84, "url(#brG)"),
      t(x + w / 2, ys + 296, "Inhale", { size: 20, weight: 600, fill: "#06281d", anchor: "middle" }),
      t(x + w / 2, ys + 322, "4s", { size: 13, fill: "#0a3b2b", anchor: "middle" }),
      t(x + w / 2, ys + 470, "Box breathing · 2:00", { size: 13, fill: "#8fd8bf", anchor: "middle" }),
      rr(x + 60, ys + 500, w - 120, 6, 3, "#ffffff22"),
      rr(x + 60, ys + 500, (w - 120) * 0.4, 6, 3, G),
    ]);
  const sleepS = (x) => {
    const bars = [80, 120, 100, 140, 90, 160, 130];
    return g("bl-sleep", [
      rr(x, ys, w, h, 0, "#f4fbf7"),
      t(x + 28, ys + 78, "Sleep", { size: 22, weight: 700, fill: ink }),
      t(x + 28, ys + 104, "Avg 7h 34m this week", { size: 12, fill: muted }),
      rr(x + 24, ys + 130, w - 48, 220, 18, "#ffffff", { stroke: "#d9efe6" }),
      ...bars.map((b, i) => rr(x + 50 + i * 34, ys + 320 - b, 20, b, 6, i === 5 ? G : "#a7f3d0")),
      ...["M", "T", "W", "T", "F", "S", "S"].map((d, i) => t(x + 60 + i * 34, ys + 340, d, { size: 10, fill: muted, anchor: "middle" })),
      rr(x + 24, ys + 372, w - 48, 70, 16, "#ecfdf5"),
      t(x + 44, ys + 404, "Sleep score", { size: 12, fill: "#047857" }),
      t(x + w - 44, ys + 414, "86", { size: 26, weight: 700, fill: ink, anchor: "end" }),
    ]);
  };
  return g("screens", [
    phone(240, ys, w, h, todayS(240), "#f4fbf7"),
    phone(640, ys, w, h, breatheS(640), "#0c1f17"),
    phone(1040, ys, w, h, sleepS(1040), "#f4fbf7"),
  ]);
}

/* ---------------- Lumen ---------------- */
function lumen() {
  const B = "#4f7dff";
  const panel = "#0f1424";
  const canvas = "#0a0e1a";
  const muted = "#6b7594";
  const pos = "#7dffb0";
  const dash = (x, y, w, h) => {
    const bars = [60, 90, 70, 120, 100, 150, 130, 170];
    return g("lu-dash", [
      rr(x, y, w, h, 0, canvas),
      rr(x, y, 150, h, 0, "#0c1120"),
      rr(x + 24, y + 30, 22, 22, 6, B),
      t(x + 56, y + 46, "Lumen", { size: 14, weight: 700, fill: "#fff" }),
      ...["Overview", "Revenue", "Users", "Reports"].map((s, i) => t(x + 28, y + 92 + i * 34, s, { size: 12, fill: i === 0 ? "#fff" : muted })),
      ...[
        ["MRR", "$48.2k", "+12%"],
        ["Users", "9,410", "+4%"],
        ["Churn", "1.8%", "-0.3%"],
      ].map(([k, v, d], i) =>
        g("kpi", [
          rr(x + 176 + i * ((w - 200) / 3), y + 28, (w - 220) / 3, 90, 12, panel, { stroke: "#ffffff10" }),
          t(x + 196 + i * ((w - 200) / 3), y + 56, k, { size: 11, fill: muted, family: "'SF Mono', monospace" }),
          t(x + 196 + i * ((w - 200) / 3), y + 86, v, { size: 22, weight: 700, fill: "#fff" }),
          t(x + 196 + i * ((w - 200) / 3), y + 106, d, { size: 11, fill: pos }),
        ]),
      ),
      rr(x + 176, y + 134, w - 200, 200, 14, panel, { stroke: "#ffffff10" }),
      t(x + 196, y + 162, "Revenue · last 30 days", { size: 12, fill: "#c7d0e8" }),
      `<path d="M${x + 196},${y + 300} C${x + 260},${y + 280} ${x + 300},${y + 220} ${x + 360},${y + 235} C${x + 440},${y + 255} ${x + 470},${y + 180} ${x + 540},${y + 195} C${x + 620},${y + 210} ${x + 660},${y + 250} ${x + w - 40},${y + 210}" fill="none" stroke="${B}" stroke-width="3"/>`,
      ...bars.map((b, i) => rr(x + 200 + i * ((w - 260) / 8), y + 320 - 0, 14, 0, 3, "#ffffff10")),
    ]);
  };
  const ai = (x, y, w, h) =>
    g("lu-ai", [
      rr(x, y, w, h, 0, canvas),
      t(x + 28, y + 44, "✦ Ask Lumen", { size: 15, weight: 700, fill: "#fff" }),
      rr(x + 24, y + 70, w - 48, 44, 10, panel, { stroke: "#ffffff12" }),
      t(x + 44, y + 97, "Why did revenue dip in week 3?", { size: 12, fill: "#c7d0e8" }),
      rr(x + 24, y + 132, w - 48, h - 170, 14, panel, { stroke: "#ffffff10" }),
      ci(x + 48, y + 164, 12, B),
      t(x + 70, y + 168, "Lumen", { size: 12, weight: 600, fill: "#fff" }),
      t(x + 44, y + 200, "Revenue fell 8% in week 3, driven mainly by", { size: 12, fill: "#c7d0e8" }),
      t(x + 44, y + 220, "a spike in churn among trial users after the", { size: 12, fill: "#c7d0e8" }),
      t(x + 44, y + 240, "pricing change on Mar 14.", { size: 12, fill: "#c7d0e8" }),
      rr(x + 44, y + 262, w - 88, 90, 10, "#0b1020"),
      `<path d="M${x + 60},${y + 330} L${x + 140},${y + 300} L${x + 220},${y + 322} L${x + 300},${y + 288} L${x + w - 60},${y + 305}" fill="none" stroke="${B}" stroke-width="2.5"/>`,
      rr(x + 44, y + 368, 150, 26, 13, "#4f7dff22"),
      t(x + 119, y + 385, "◆ Source: churn_by_cohort", { size: 10, fill: "#9db4ff", anchor: "middle", family: "'SF Mono', monospace" }),
    ]);
  return g("screens", [
    browser(80, 170, 900, 720, dash(80, 210, 900, 680), "app.lumen.ai/overview", canvas),
    browser(1010, 170, 510, 720, ai(1010, 210, 510, 680), "app.lumen.ai/ask", canvas),
  ]);
}

const boards = [
  { slug: "shree-navya", title: "Shree Navya", category: "E-commerce · Storefront", accent: "#f97316", bg: "#f7f5f0", dark: false, draw: shreeNavya },
  { slug: "aurora", title: "Aurora", category: "Fintech · Mobile Banking", accent: "#7c6bff", bg: "#0b0820", dark: true, draw: aurora },
  { slug: "bloom", title: "Bloom", category: "Health & Wellness · Mobile", accent: "#2fb98a", bg: "#eafaf2", dark: false, draw: bloom },
  { slug: "lumen", title: "Lumen", category: "AI SaaS · Analytics", accent: "#4f7dff", bg: "#070a12", dark: true, draw: lumen },
];

mkdirSync(resolve(root, "public/figma"), { recursive: true });
mkdirSync(resolve(root, "figma-kit/plugin"), { recursive: true });

const embed = {};
for (const b of boards) {
  const svg = artboard(header(b.title, b.category, b.accent, b.dark) + b.draw(), { bg: b.bg });
  const file = resolve(root, `public/figma/${b.slug}-screens.svg`);
  writeFileSync(file, svg);
  embed[b.slug] = svg;
  console.log("wrote", file, `(${(svg.length / 1024).toFixed(1)} kb)`);
}

const pluginCode = `// Figma plugin (auto-generated) — builds Rishi Chauhan's artboards as native frames.
// In Figma desktop: Plugins > Development > Import plugin from manifest… (pick figma-kit/plugin/manifest.json), then run it.
const ARTBOARDS = ${JSON.stringify(boards.map((b) => ({ name: b.title, svg: embed[b.slug] })))};
(function () {
  const nodes = [];
  let x = 0;
  for (const a of ARTBOARDS) {
    try {
      const node = figma.createNodeFromSvg(a.svg);
      node.name = a.name + ' \u2014 Screens';
      node.x = x;
      node.y = 0;
      x += node.width + 120;
      nodes.push(node);
    } catch (e) {
      console.error('Failed to import ' + a.name, e);
    }
  }
  if (nodes.length) {
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }
  figma.closePlugin('Imported ' + nodes.length + ' artboard(s) \u2726');
})();
`;
writeFileSync(resolve(root, "figma-kit/plugin/code.js"), pluginCode);
console.log("wrote figma-kit/plugin/code.js");
