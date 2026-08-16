/**
 * All copy in one place. The layout is subject-agnostic — swapping the product
 * means editing this file and the images, nothing else.
 */

export const NAV_LINKS = [
  { label: "Overview", href: "#overview", active: true },
  { label: "Features", href: "#features", active: false },
  { label: "Insights", href: "#insights", active: false },
  { label: "Learn", href: "#learn", active: false },
  { label: "Pricing", href: "#pricing", active: false },
];

export const HERO = {
  /* Broken across two lines deliberately, so the break is a design decision
     rather than whatever the viewport happens to do. */
  headlineTop: "Know exactly where",
  headlineBottom: "your money goes.",
  /* ~34ch measure: wraps to three short lines and reads as a caption. */
  caption:
    "Track every rupee, catch overspending before it compounds, and learn the investing basics — built for India.",
  cta: "Start tracking free",
};

/** Floating hero tiles. Sizes, offsets and rotations are authored, not generated —
 *  the composition is scattered but weighted to the outer edges so the centre
 *  column of text stays clear. */
export const TILES = [
  { src: "/img/tile-1.svg", alt: "", size: 108, top: "8%",  left: "6%",  rot: -5, speed: 0.16 },
  { src: "/img/tile-2.svg", alt: "", size: 68,  top: "46%", left: "14%", rot: 4,  speed: 0.3 },
  { src: "/img/tile-3.svg", alt: "", size: 84,  top: "74%", left: "4%",  rot: -3, speed: 0.22 },
  { src: "/img/tile-4.svg", alt: "", size: 120, top: "12%", left: "82%", rot: 6,  speed: 0.2 },
  { src: "/img/tile-5.svg", alt: "", size: 62,  top: "52%", left: "90%", rot: -4, speed: 0.34 },
  { src: "/img/tile-6.svg", alt: "", size: 92,  top: "78%", left: "78%", rot: 3,  speed: 0.26 },
];

export const SECTION = {
  heading: "Where your money went",
  ranges: ["Day", "Week", "Month"],
};

export const CARDS = [
  {
    src: "/img/card-1.svg",
    title: "Spending breakdown",
    glyph: "◆",
    meta: "12 categories tracked",
  },
  {
    src: "/img/card-2.svg",
    title: "Overspend alerts",
    glyph: "▲",
    meta: "Flagged the moment it happens",
  },
  {
    src: "/img/card-3.svg",
    title: "Investing basics",
    glyph: "●",
    meta: "18 guides, no jargon",
  },
];

export const FOOTER = {
  copyright: "© 2026 PaisaTrack",
  legal: ["Terms", "Privacy", "Security"],
  mailingLabel: "Monthly money notes",
  mailingPlaceholder: "you@email.com",
  policyLabel: "Policies",
  policyButtons: ["Refunds", "Disclosures"],
  socials: ["X", "IN", "GH"],
};
