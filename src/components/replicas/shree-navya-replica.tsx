/**
 * Faithful UI/UX rebuild of shreenavyafoodproducts.com "as it is now".
 * Theme-locked (light, Inter, orange-500 / stone) so it renders identically
 * inside the portfolio regardless of dark/light mode. Product packaging is
 * original recreated artwork (no assets lifted from the live site).
 */

const ORANGE = "#f97316";
const INK = "#0c0a09";
const MUTED = "#78716c";

type Tone = { bg: string; ink: string };

const products: {
  name: string;
  cat: "Flour" | "Spices";
  desc: string;
  weights: string[];
  sel: number;
  price: string;
  tone: Tone;
}[] = [
  { name: "SATTU", cat: "Flour", desc: "Traditional roasted gram flour, rich in protein and fiber.", weights: ["60gm", "200gm", "250gm"], sel: 0, price: "₹10", tone: { bg: "#fcd34d", ink: "#92400e" } },
  { name: "BESAN", cat: "Flour", desc: "Premium quality gram flour for perfect pakoras and sweets.", weights: ["250gm"], sel: 0, price: "₹110", tone: { bg: "#fb923c", ink: "#7c2d12" } },
  { name: "SUJI", cat: "Flour", desc: "Fine semolina for delicious upma, halwa and other dishes.", weights: ["500gm"], sel: 0, price: "₹28", tone: { bg: "#38bdf8", ink: "#0c4a6e" } },
  { name: "MAIDA", cat: "Flour", desc: "Refined wheat flour for soft breads, cakes and pastries.", weights: ["500gm"], sel: 0, price: "₹26", tone: { bg: "#a3e635", ink: "#3f6212" } },
  { name: "HALDI", cat: "Spices", desc: "Pure turmeric powder with rich aroma and authentic flavor.", weights: ["10g", "50g", "1kg"], sel: 0, price: "₹5", tone: { bg: "#facc15", ink: "#854d0e" } },
  { name: "DHANIYA", cat: "Spices", desc: "Aromatic coriander powder for enhancing flavor in curries.", weights: ["10g", "50g", "1kg"], sel: 0, price: "₹5", tone: { bg: "#4ade80", ink: "#14532d" } },
];

function Packet({ name, tone }: { name: string; tone: Tone }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden" style={{ background: `linear-gradient(160deg, ${tone.bg}, ${tone.bg}cc)` }}>
      <div className="rounded-md bg-white/90 px-3 py-2 text-center shadow-md">
        <p className="text-[9px] font-bold leading-none text-red-600">श्री Navya</p>
        <p className="mt-1 text-sm font-extrabold leading-none" style={{ color: tone.ink }}>{name}</p>
        <p className="mt-1 text-[7px] font-bold tracking-wide text-neutral-500">PREMIUM QUALITY</p>
      </div>
    </div>
  );
}

export function ShreeNavyaReplica() {
  return (
    <div className="bg-white text-[13px]" style={{ fontFamily: "Inter, system-ui, sans-serif", color: INK }}>
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-stone-200 bg-white/90 px-6 py-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md text-[9px] font-bold text-white" style={{ background: ORANGE }}>SN</span>
          <span className="text-sm font-bold">Shree Navya Food Products</span>
        </div>
        <nav className="hidden items-center gap-6 text-[13px] text-stone-700 md:flex">
          <span>Products</span>
          <span>About Us</span>
          <span>Contact</span>
        </nav>
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-stone-200 text-stone-500">☀</span>
          <span className="rounded-md px-4 py-2 text-[12px] font-medium text-white" style={{ background: ORANGE }}>Contact Us</span>
        </div>
      </header>

      {/* Hero */}
      <section className="grid items-center gap-8 px-6 py-14 md:grid-cols-2 md:px-12">
        <div>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">Authentic Indian<br />Food Products</h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: MUTED }}>
            Discover the rich flavors and authentic taste of Shree Navya Food Products. Premium quality ingredients for your everyday cooking needs.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-[13px] font-medium text-white" style={{ background: ORANGE }}>Explore Products →</span>
            <span className="inline-flex items-center rounded-md border border-stone-300 px-5 py-2.5 text-[13px] font-medium">About Us</span>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[radial-gradient(120%_120%_at_50%_0%,#fde68a,#f59e0b_70%,#b45309)] p-5">
          <div className="grid h-full grid-cols-3 gap-2.5">
            {products.map((p) => (
              <div key={p.name} className="overflow-hidden rounded-lg shadow-sm"><Packet name={p.name} tone={p.tone} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 py-12 md:px-12" style={{ background: "#fafaf9" }}>
        <p className="text-center text-[12px] font-medium uppercase tracking-wider" style={{ color: ORANGE }}>Our Products</p>
        <h2 className="mx-auto mt-2 max-w-xl text-center text-3xl font-bold tracking-tight">Premium Quality Food Products</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-[14px]" style={{ color: MUTED }}>
          Explore our range of authentic Indian food products made with the finest ingredients.
        </p>

        <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-xl border border-stone-200 bg-white">
              <div className="relative h-36">
                <Packet name={p.name} tone={p.tone} />
                <span className="absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-semibold text-white" style={{ background: ORANGE }}>{p.cat}</span>
              </div>
              <div className="p-4">
                <h3 className="text-[15px] font-bold tracking-tight">SHREE NAVYA {p.name}</h3>
                <p className="mt-1 line-clamp-2 text-[12px] leading-snug" style={{ color: MUTED }}>{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.weights.map((w, i) => (
                    <span key={w} className="rounded-md px-2.5 py-1 text-[11px] font-medium" style={i === p.sel ? { border: `1px solid ${ORANGE}`, background: "#fff", color: INK } : { background: "#f5f5f4", color: "#a8a29e" }}>{w}</span>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[12px]" style={{ color: MUTED }}>Weight: {p.weights[p.sel]}</span>
                  <span className="text-base font-bold" style={{ color: ORANGE }}>{p.price}</span>
                </div>
                <div className="mt-3 rounded-lg py-2 text-center text-[12px] font-semibold text-white" style={{ background: ORANGE }}>View Details</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="grid items-center gap-8 px-6 py-14 md:grid-cols-2 md:px-12">
        <div className="aspect-[4/3] rounded-2xl bg-[radial-gradient(120%_120%_at_30%_20%,#fed7aa,#f97316_75%)]" />
        <div>
          <p className="text-[12px] font-medium uppercase tracking-wider" style={{ color: ORANGE }}>About Us</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Our Story</h2>
          <p className="mt-4 text-[14px] leading-relaxed" style={{ color: MUTED }}>
            Founded in 2022, Shree Navya Food Products delivers authentic Indian food products to households across the country — high-quality, traditional products that preserve the authentic taste of Indian cuisine.
          </p>
          <p className="mt-3 text-[14px] font-semibold">Meet Our Founder — Mr. Chandan Kumar</p>
          <p className="mt-1 text-[14px] leading-relaxed" style={{ color: MUTED }}>
            With over 10 years in the food industry, he established Shree Navya to bring traditional recipes to modern kitchens.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-14 md:px-12" style={{ background: "#fafaf9" }}>
        <p className="text-center text-[12px] font-medium uppercase tracking-wider" style={{ color: ORANGE }}>Contact Us</p>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight">Get In Touch</h2>
        <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-3">
          {[
            { k: "Phone", v: "+91 99054 43317" },
            { k: "Email", v: "shreenavyabusiness@gmail.com" },
            { k: "Address", v: "Ashiyana-Digha Road, Patna - 800025" },
          ].map((c) => (
            <div key={c.k} className="rounded-xl border border-stone-200 bg-white p-5 text-center">
              <p className="text-[13px] font-semibold">{c.k}</p>
              <p className="mt-1 text-[12px]" style={{ color: MUTED }}>{c.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between px-6 py-6 text-[11px] md:px-12" style={{ color: MUTED }}>
        <span>© 2022 Shree Navya Food Products. All rights reserved.</span>
        <span className="hidden gap-4 sm:flex"><span>Privacy Policy</span><span>Terms of Service</span></span>
      </footer>
    </div>
  );
}
