// ─────────────────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change almost everything on the site.
//  Names, links, projects, prices, testimonials all live here.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Veer Sethi",
  brand: "VEER SETHI",
  initials: "VS",
  domain: "veersafety.com",
  role: "Web & Automation Engineer",
  email: "veersethisteam2214@gmail.com",
  // Real WhatsApp number, international format, no + or spaces. e.g. 919876543210
  whatsapp: "919876543210",
  calendly: "", // optional cal.com / Calendly link
  location: "Remote · works across every timezone",
  tagline:
    "I build websites and AI automations the way good machines are built — precise, fast, and made to run without you.",
  available: true,
};

export const stats = [
  { value: "30", suffix: "+", label: "Systems shipped" },
  { value: "12,400", suffix: "h", label: "Hours automated for clients" },
  { value: "48", suffix: "h", label: "To first working prototype" },
  { value: "4.9", suffix: "/5", label: "Average client rating" },
];

export type Service = {
  index: string;
  title: string;
  description: string;
  icon: string;
  bullets: string[];
  size: "lg" | "sm";
};

export const services: Service[] = [
  {
    index: "01",
    title: "Websites that earn their keep",
    description:
      "Fast, precise sites built on Next.js — the kind that load before a visitor blinks and turn them into customers. No page-builder bloat, no template smell.",
    icon: "Globe",
    bullets: ["Next.js / React engineering", "Sub-second load times", "SEO & analytics wired in"],
    size: "lg",
  },
  {
    index: "02",
    title: "Automations that replace the busywork",
    description:
      "I wire your tools together and hand the repetitive work to software — data entry, follow-ups, reports, replies. It runs 24/7 and never asks for a raise.",
    icon: "Workflow",
    bullets: ["Make / n8n / Zapier", "Custom Python services", "Runs while you sleep"],
    size: "lg",
  },
  {
    index: "03",
    title: "AI agents & chatbots",
    description:
      "Assistants trained on your business that answer customers, qualify leads and book meetings — on the web, WhatsApp or Instagram.",
    icon: "Bot",
    bullets: ["Trained on your data", "Captures leads instantly"],
    size: "sm",
  },
  {
    index: "04",
    title: "Lead & data pipelines",
    description:
      "Clean, structured lists of exactly the customers you want — pulled, verified, enriched and dropped into your CRM.",
    icon: "Database",
    bullets: ["Targeted, verified lists", "Straight into your CRM"],
    size: "sm",
  },
  {
    index: "05",
    title: "Dashboards & reporting",
    description:
      "Live dashboards that turn scattered spreadsheets into one screen you can actually make decisions from.",
    icon: "Gauge",
    bullets: ["Real-time KPIs", "Auto-written summaries"],
    size: "sm",
  },
];

export type Project = {
  index: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  metric: string;
  metricLabel: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Lumière",
    category: "E-commerce · Shopify",
    year: "2025",
    blurb:
      "A luxury skincare storefront with a custom product configurator and abandoned-cart recovery that follows up across email and WhatsApp on its own.",
    metric: "+38%",
    metricLabel: "checkout conversion in 6 weeks",
    tags: ["Shopify", "Klaviyo", "Automation"],
  },
  {
    index: "02",
    title: "DeskFlow",
    category: "AI Agent · Support",
    year: "2025",
    blurb:
      "A support agent wired into Gmail and Slack that drafts replies, tags every ticket and escalates only the ones that genuinely need a human.",
    metric: "6h → 9m",
    metricLabel: "average first-response time",
    tags: ["OpenAI", "Make", "Gmail API"],
  },
  {
    index: "03",
    title: "Khan & Sons",
    category: "Web · Real Estate",
    year: "2024",
    blurb:
      "A listings site with live search, map view and an inquiry bot that qualifies buyers and books viewings while the office sleeps.",
    metric: "0.6s",
    metricLabel: "load time, down from 2.1s",
    tags: ["Next.js", "Mapbox", "Chatbot"],
  },
  {
    index: "04",
    title: "MealMate",
    category: "Automation · F&B",
    year: "2024",
    blurb:
      "A WhatsApp ordering line that takes the order, prints it in the kitchen and keeps the customer updated — with zero staff time spent on the phone.",
    metric: "200+",
    metricLabel: "orders a week, fully hands-off",
    tags: ["WhatsApp API", "n8n", "Python"],
  },
  {
    index: "05",
    title: "LeadForge",
    category: "Pipeline · B2B",
    year: "2025",
    blurb:
      "An end-to-end engine that scrapes, verifies and enriches targeted leads, then runs personalised cold outreach and books the replies.",
    metric: "1,400",
    metricLabel: "qualified leads in month one",
    tags: ["Python", "Apollo", "Instantly"],
  },
];

export const process = [
  {
    step: "01",
    title: "Diagnose",
    description:
      "A short call. You describe the problem; I tell you straight whether software can fix it, how, and what it costs. No jargon, no upsell.",
  },
  {
    step: "02",
    title: "Spec & quote",
    description:
      "You get a written scope, a timeline and a fixed price before anything is built. You approve it first. No surprise invoices, ever.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "I build in short cycles and show you progress as it happens, so you're never left wondering. You steer, I refine.",
  },
  {
    step: "04",
    title: "Ship & hand over",
    description:
      "We go live. I hand over everything, walk you through it, and stay on to make sure it keeps running clean.",
  },
];

export const stack = [
  "Next.js", "React", "TypeScript", "Python", "Node.js", "OpenAI",
  "Tailwind", "Make", "n8n", "Zapier", "Shopify", "Supabase",
  "PostgreSQL", "WhatsApp API", "Vercel", "Figma",
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  initials: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I expected a kid and got a professional. Clear communication, fast delivery, and the automation he built genuinely gives my team a full day back every week. We've already booked the next project.",
    name: "Sandra Okafor",
    title: "Operations Lead, DeskFlow",
    initials: "SO",
    featured: true,
  },
  {
    quote:
      "Veer rebuilt our site and set up the ordering bot in under two weeks. Sales are up and I've stopped answering the same questions all day.",
    name: "Rajat Malhotra",
    title: "Owner, MealMate",
    initials: "RM",
  },
  {
    quote:
      "Our new site loads instantly and looks sharper than competitors who paid five times more. He just gets it.",
    name: "Imran Khan",
    title: "Director, Khan & Sons",
    initials: "IK",
  },
  {
    quote:
      "The lead engine filled our pipeline inside a month. Best money we've spent on growth this year, full stop.",
    name: "Daniel Weber",
    title: "Founder, B2B SaaS",
    initials: "DW",
  },
  {
    quote:
      "Honest about what's possible, fast when it counts. The dashboard he built is the first thing I open every morning.",
    name: "Priya Nair",
    title: "Marketing Head, Pulse",
    initials: "PN",
  },
];

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$300",
    cadence: "one-time",
    description: "A clean, professional site or a single automation to get moving.",
    features: [
      "1-page premium site OR 1 automation",
      "Mobile-perfect & SEO-ready",
      "Up to 2 revisions",
      "Delivered in ~5 days",
      "1 week of support",
    ],
    cta: "Start here",
  },
  {
    name: "Growth",
    price: "$900",
    cadence: "project",
    description: "The sweet spot — a full site plus an automation that pays for itself.",
    features: [
      "Multi-page site (up to 6 pages)",
      "1 custom automation or AI agent",
      "CRM, email & payment integrations",
      "Unlimited revisions during build",
      "30 days of support",
    ],
    highlighted: true,
    cta: "Most chosen",
  },
  {
    name: "Custom",
    price: "Let's talk",
    cadence: "scoped",
    description: "Bigger systems, multiple automations or ongoing engineering.",
    features: [
      "Fully custom scope",
      "Multiple automations / agents",
      "Dashboards & integrations",
      "Priority delivery",
      "Monthly retainer option",
    ],
    cta: "Book a call",
  },
];

export const faqs = [
  {
    q: "How do we get started?",
    a: "Send a message through the form or WhatsApp with a line or two about what you need. I reply within a day, and if it's a fit we'll jump on a short call.",
  },
  {
    q: "How much will my project cost?",
    a: "It depends on scope, but the plans above cover most needs. After our first call you get a fixed price in writing — you always know the cost before any work starts.",
  },
  {
    q: "Do you work with clients in other countries?",
    a: "Yes — most of my work is remote and international. Timezones have never been a problem; I work around yours.",
  },
  {
    q: "How long does it take?",
    a: "A simple site or automation is usually 3–7 days. Larger systems run 2–4 weeks. You get a clear timeline in your quote.",
  },
  {
    q: "What if I'm not technical at all?",
    a: "That's completely fine — most of my clients aren't. I handle the technical side and explain everything in plain English. You just bring the problem.",
  },
  {
    q: "Do you stick around after launch?",
    a: "Every project includes a support window, and I offer monthly retainers if you want me on call for updates, fixes and new features.",
  },
];

export const navLinks = [
  { label: "Services", href: "#services", num: "01" },
  { label: "Work", href: "#work", num: "02" },
  { label: "Process", href: "#process", num: "03" },
  { label: "About", href: "#about", num: "04" },
  { label: "Pricing", href: "#pricing", num: "05" },
  { label: "FAQ", href: "#faq", num: "06" },
];
