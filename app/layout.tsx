import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display: industrial editorial grotesque (not the Inter/Geist default).
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Body: humanist grotesque, readable, deliberately not Inter.
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Mono: for technical labels, indices and numbers — the engineering voice.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://veersafety.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Veer Sethi — Systems, sites & automation engineering",
    template: "%s · Veer Sethi",
  },
  description:
    "I build websites and AI automations the way good machines are built — precise, fast, and made to run without you. Engineered for businesses that want output, not overhead.",
  keywords: [
    "AI automation engineer",
    "web developer",
    "workflow automation",
    "Next.js developer",
    "custom software",
    "Veer Sethi",
  ],
  authors: [{ name: "Veer Sethi" }],
  creator: "Veer Sethi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Veer Sethi — Systems, sites & automation engineering",
    description:
      "Websites and AI automations engineered to run without you.",
    siteName: "Veer Sethi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veer Sethi — Systems, sites & automation engineering",
    description: "Websites and AI automations engineered to run without you.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
