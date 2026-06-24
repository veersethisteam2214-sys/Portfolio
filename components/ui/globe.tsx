"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";

// cobe v2's published types omit the onRender callback; extend them.
type GlobeOptions = COBEOptions & {
  onRender: (state: Record<string, number>) => void;
};

/**
 * Interactive globe via cobe — the Magic UI "Globe" component published on
 * 21st.dev. Tuned to the graphite + ember palette and a few client markers.
 */
export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ value: 0 });
  const widthRef = useRef(0);

  useEffect(() => {
    let phi = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      if (canvas) widthRef.current = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);
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
        { location: [28.6139, 77.209], size: 0.08 }, // Delhi
        { location: [40.7128, -74.006], size: 0.06 }, // New York
        { location: [51.5074, -0.1278], size: 0.06 }, // London
        { location: [25.2048, 55.2708], size: 0.06 }, // Dubai
        { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
        { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
      ],
      onRender: (state) => {
        phi += 0.004;
        state.phi = phi + pointer.current.value;
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    };

    const globe = createGlobe(canvas, options);

    setTimeout(() => {
      if (canvas) canvas.style.opacity = "1";
    }, 100);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={`relative aspect-square w-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-0 transition-opacity duration-700 [contain:layout_paint_size]"
      />
    </div>
  );
}
