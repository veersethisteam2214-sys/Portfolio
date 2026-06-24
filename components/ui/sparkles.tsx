"use client";

import { useEffect, useState } from "react";

type Dot = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  dur: number;
};

/**
 * Lightweight twinkling sparkle field (Magic UI "Sparkles" idea) — pure CSS
 * animation. Positions are randomised on the client after mount to avoid any
 * server/client hydration mismatch.
 */
export function Sparkles({
  count = 26,
  className = "",
  color = "hsl(40 60% 80%)",
}: {
  count?: number;
  className?: string;
  color?: string;
}) {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        dur: Math.random() * 3 + 3,
      }))
    );
  }, [count]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute animate-twinkle rounded-[50%]"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            background: color,
            // @ts-expect-error custom prop
            "--tw-dur": `${d.dur}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
