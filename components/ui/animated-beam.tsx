"use client";

import { RefObject, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Animated Beam — adapted from the Magic UI component published on 21st.dev.
 * Draws an SVG path between two elements and runs a moving gradient along it.
 */
export interface AnimatedBeamProps {
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  className?: string;
  /** number of glowing energy particles travelling the beam */
  particles?: number;
  particleColor?: string;
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "hsl(30 6% 24%)",
  pathWidth = 2,
  pathOpacity = 0.6,
  gradientStartColor = "#ef6a2a",
  gradientStopColor = "#f7a04a",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  className,
  particles = 0,
  particleColor = "#f7a04a",
}: AnimatedBeamProps) {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const gradientCoordinates = reverse
    ? { x1: ["90%", "-10%"], x2: ["100%", "0%"], y1: ["0%", "0%"], y2: ["0%", "0%"] }
    : { x1: ["10%", "110%"], x2: ["0%", "100%"], y1: ["0%", "0%"], y2: ["0%", "0%"] };

  useEffect(() => {
    const update = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;
      const c = containerRef.current.getBoundingClientRect();
      const a = fromRef.current.getBoundingClientRect();
      const b = toRef.current.getBoundingClientRect();

      setSvgDimensions({ width: c.width, height: c.height });

      const startX = a.left - c.left + a.width / 2 + startXOffset;
      const startY = a.top - c.top + a.height / 2 + startYOffset;
      const endX = b.left - c.left + b.width / 2 + endXOffset;
      const endY = b.top - c.top + b.height / 2 + endYOffset;

      const controlY = startY - curvature;
      setPathD(
        `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`
      );
    };

    const ro = new ResizeObserver(() => update());
    if (containerRef.current) ro.observe(containerRef.current);
    update();
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <>
      {pathD &&
        particles > 0 &&
        Array.from({ length: particles }).map((_, p) => (
          <span
            key={p}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 h-1.5 w-1.5 rounded-[50%]"
            style={{
              offsetPath: `path('${pathD}')`,
              background: particleColor,
              boxShadow: `0 0 8px 1px ${particleColor}`,
              animation: `particle-move ${duration}s linear ${
                delay + (p * duration) / particles
              }s infinite`,
            }}
          />
        ))}
      <svg
        fill="none"
        width={svgDimensions.width}
        height={svgDimensions.height}
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
          className
        )}
        viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
      </svg>
    </>
  );
}
