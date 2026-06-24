"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/ui/section-head";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/site";

const variants = {
  enter: (d: number) => ({ opacity: 0, y: d > 0 ? 20 : -20 }),
  center: { opacity: 1, y: 0 },
  exit: (d: number) => ({ opacity: 0, y: d > 0 ? -20 : 20 }),
};

export function Testimonials() {
  const [[i, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;

  const go = useCallback(
    (next: number) => setState(([cur]) => [(next + n) % n, next > cur ? 1 : -1]),
    [n]
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setState(([c]) => [(c + 1) % n, 1]), 5000);
    return () => clearInterval(t);
  }, [paused, n]);

  const active = testimonials[i];

  return (
    <section className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="aurora-ion opacity-30" />
      <div className="wrap relative">
        <SectionHead
          num="*"
          label="Signal"
          title={<>Client signal, intercepted live.</>}
          description="Real words from people I've built for. The system below cycles through them — or pick a node to lock on."
        />

        <div
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-line bg-line lg:grid-cols-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* ── radar scope ── */}
          <div className="relative flex items-center justify-center bg-surface p-8 sm:p-10">
            <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-ion/80">
              ◦ radar // {n} nodes tracked
            </div>
            <div className="relative aspect-square w-full max-w-[360px]">
              {/* concentric rings */}
              {[100, 72, 44].map((s) => (
                <span
                  key={s}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-ion/20"
                  style={{ width: `${s}%`, height: `${s}%` }}
                />
              ))}
              {/* crosshair */}
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ion/10" />
              <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-ion/10" />
              {/* rotating sweep */}
              <div
                className="absolute inset-0 animate-radar-sweep rounded-[50%]"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, hsl(var(--ion) / 0.35) 350deg, hsl(var(--ion) / 0.6) 360deg)",
                  maskImage: "radial-gradient(#000 60%, transparent 71%)",
                  WebkitMaskImage: "radial-gradient(#000 60%, transparent 71%)",
                }}
              />
              {/* center */}
              <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-ion" />

              {/* blips */}
              {testimonials.map((t, idx) => {
                const ang = (idx / n) * Math.PI * 2 - Math.PI / 2;
                const rad = 26 + (idx % 3) * 9;
                const x = 50 + Math.cos(ang) * rad;
                const y = 50 + Math.sin(ang) * rad;
                const on = idx === i;
                return (
                  <button
                    key={t.name}
                    onClick={() => go(idx)}
                    aria-label={t.name}
                    className="group/blip absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <span
                      className={`grid place-items-center rounded-[50%] font-mono transition-all ${
                        on
                          ? "h-9 w-9 border border-ember bg-ember/20 text-[10px] text-ember"
                          : "h-7 w-7 border border-line bg-bg text-[9px] text-faint hover:border-ion/50 hover:text-ion"
                      }`}
                    >
                      {t.initials}
                    </span>
                    {on && (
                      <span className="absolute inset-0 animate-pulse-ring rounded-[50%] border border-ember/50" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── intercepted signal ── */}
          <div className="grain relative flex min-h-[24rem] flex-col justify-between bg-surface p-8 sm:p-10">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-faint">
              <span className="flex items-center gap-2 text-ion">
                <span className="h-1.5 w-1.5 animate-pulse rounded-[50%] bg-ion" />
                signal locked
              </span>
              <span>
                {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
              </span>
            </div>

            <div className="relative flex-1 py-8">
              <Quote className="mb-5 h-8 w-8 text-ember" strokeWidth={1.5} />
              <AnimatePresence mode="wait" custom={dir}>
                <motion.blockquote
                  key={i}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                  className="font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-[1.7rem]"
                >
                  {active.quote}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="flex items-end justify-between border-t border-line pt-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-md border border-line bg-bg font-mono text-sm text-ink">
                  {active.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">{active.name}</div>
                  <div className="text-sm text-faint">{active.title}</div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-ember text-ember" />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button aria-label="Previous" onClick={() => go(i - 1)} className="btn-steel grid h-8 w-8 place-items-center !rounded-md !px-0">
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button aria-label="Next" onClick={() => go(i + 1)} className="btn-steel grid h-8 w-8 place-items-center !rounded-md !px-0">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
