"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";

// cobe v2's published types omit the onRender callback; extend them.
type GlobeOptions = COBEOptions & {
  onRender: (state: Record<string, number>) => void;
};

/**
 * Interactive globe via cobe — the Magic UI "Globe" component published on
 * 21st.dev. Only spins up while on-screen (IntersectionObserver) and respects
 * prefers-reduced-motion, so it costs nothing when scrolled away.
 */
export function Globe({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const widthRef = useRef(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let globe: { destroy: () => void } | null = null;
    let phi = 0;

    const onResize = () => {
      widthRef.current = canvas.offsetWidth;
    };

    const start = () => {
      if (globe) return;
      onResize();
      const options: GlobeOptions = {
        devicePixelRatio: 2,
        width: widthRef.current * 2,
        height: widthRef.current * 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 8,
        baseColor: [0.45, 0.43, 0.4],
        markerColor: [0.94, 0.42, 0.16],
        glowColor: [0.2, 0.18, 0.16],
        markers: [
          { location: [28.6139, 77.209], size: 0.08 },
          { location: [40.7128, -74.006], size: 0.06 },
          { location: [51.5074, -0.1278], size: 0.06 },
          { location: [25.2048, 55.2708], size: 0.06 },
          { location: [-33.8688, 151.2093], size: 0.05 },
          { location: [1.3521, 103.8198], size: 0.05 },
        ],
        onRender: (state) => {
          if (!reduce) phi += 0.004;
          state.phi = phi;
          state.width = widthRef.current * 2;
          state.height = widthRef.current * 2;
        },
      };
      globe = createGlobe(canvas, options);
      requestAnimationFrame(() => (canvas.style.opacity = "1"));
    };

    const stop = () => {
      if (!globe) return;
      globe.destroy();
      globe = null;
      canvas.style.opacity = "0";
    };

    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? start() : stop()),
      { rootMargin: "100px" }
    );
    io.observe(wrap);
    window.addEventListener("resize", onResize);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", onResize);
      stop();
    };
  }, []);

  return (
    <div ref={wrapRef} className={`relative aspect-square w-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-0 transition-opacity duration-700 [contain:layout_paint_size]"
      />
    </div>
  );
}
