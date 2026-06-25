import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Veer Sethi — Web & AI Automation Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0e0d0c",
          backgroundImage:
            "radial-gradient(900px circle at 78% 0%, rgba(239,106,42,0.18), transparent 55%), radial-gradient(700px circle at 10% 100%, rgba(56,189,248,0.10), transparent 55%), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 64px 64px, 64px 64px",
          color: "#eceae5",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#1a1817",
              border: "1px solid #2e2b28",
              color: "#ef6a2a",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            VS
          </div>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#9b9590" }}>
            VEER SETHI
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Websites & AI automation,
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            built to run <span style={{ color: "#ef6a2a" }}>without you</span>.
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#9b9590",
          }}
        >
          <div>Web & Automation Engineer</div>
          <div style={{ color: "#eceae5" }}>veersafety.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
