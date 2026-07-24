export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  timeline: string;
  platform: string;
  accent: string;
  accentInk: string;
  summary: string;
  tags: string[];
  live?: string;
  figma?: string;
  index: string;
  kind: "shree-navya" | "aurora" | "bloom" | "lumen";
};

export const projects: Project[] = [
  {
    slug: "shree-navya",
    name: "Shree Navya Food Products",
    tagline: "Taking a heritage Indian food brand online — end to end.",
    category: "E-commerce · Brand",
    year: "2024",
    role: "UI/UX Design + Front-end",
    timeline: "6 weeks",
    platform: "Responsive Web",
    accent: "#f97316",
    accentInk: "#ffffff",
    summary:
      "A production e-commerce storefront for an authentic Indian FMCG brand — product catalog, category filtering, variant selection and a warm, trustworthy identity. Shipped and live.",
    tags: ["Product Design", "E-commerce", "Design System", "Next.js", "Responsive"],
    live: "https://www.shreenavyafoodproducts.com/",
    figma: "",
    index: "01",
    kind: "shree-navya",
  },
  {
    slug: "aurora",
    name: "Aurora",
    tagline: "A neobank that makes money feel calm.",
    category: "Fintech · Mobile",
    year: "2025",
    role: "Product Design + Prototyping",
    timeline: "5 weeks",
    platform: "iOS / Android",
    accent: "#7c6bff",
    accentInk: "#ffffff",
    summary:
      "A next-gen mobile banking concept: instant insights, effortless transfers, and spend intelligence — wrapped in fluid motion and a focused, low-anxiety interface.",
    tags: ["Mobile App", "Fintech", "Design System", "Motion", "Prototyping"],
    live: "",
    figma: "",
    index: "02",
    kind: "aurora",
  },
  {
    slug: "bloom",
    name: "Bloom",
    tagline: "Mindful wellness & fitness, gently gamified.",
    category: "Health & Wellness · Mobile",
    year: "2025",
    role: "UX Research + UI Design",
    timeline: "4 weeks",
    platform: "iOS / Android",
    accent: "#2fb98a",
    accentInk: "#ffffff",
    summary:
      "A calm, encouraging companion for daily movement, breathwork and sleep. Habit streaks, adaptive plans and friendly data-viz that nudges without pressure.",
    tags: ["Mobile App", "Health", "Data Viz", "Accessibility", "Micro-interactions"],
    live: "",
    figma: "",
    index: "03",
    kind: "bloom",
  },
  {
    slug: "lumen",
    name: "Lumen",
    tagline: "AI analytics that explains itself.",
    category: "AI SaaS · Dashboard",
    year: "2026",
    role: "Product Design + Design System",
    timeline: "6 weeks",
    platform: "Web App",
    accent: "#4f7dff",
    accentInk: "#ffffff",
    summary:
      "A dark, data-dense analytics platform where an AI copilot turns questions into charts and narratives. Bento layouts, live metrics and a component library built to scale.",
    tags: ["SaaS", "Dashboard", "AI UX", "Data Viz", "Design System"],
    live: "",
    figma: "",
    index: "04",
    kind: "lumen",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function otherProjects(slug: string): Project[] {
  return projects.filter((p) => p.slug !== slug);
}
