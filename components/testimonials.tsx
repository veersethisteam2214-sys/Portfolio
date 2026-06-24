"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { SectionHead } from "@/components/ui/section-head";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/site";

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
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
    const t = setInterval(() => setState(([cur]) => [(cur + 1) % n, 1]), 5500);
    return () => clearInterval(t);
  }, [paused, n]);

  const active = testimonials[i];

  return (
    <section className="relative border-t border-line py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          num="*"
          label="Signal"
          title={<>The people who&apos;d hire me again.</>}
        />

        <div
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line lg:grid-cols-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* selector rail */}
          <div className="flex flex-col bg-surface lg:col-span-5">
            {testimonials.map((t, idx) => {
              const on = idx === i;
              return (
                <button
                  key={t.name}
                  onClick={() => go(idx)}
                  className={`group relative flex items-center gap-4 border-b border-line px-6 py-5 text-left transition-colors last:border-b-0 ${
                    on ? "bg-raised" : "hover:bg-raised/50"
                  }`}
                >
                  {on && <span className="absolute inset-y-0 left-0 w-0.5 bg-ember" />}
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-md border font-mono text-xs ${
                      on
                        ? "border-ember/40 bg-bg text-ember"
                        : "border-line bg-bg text-faint"
                    }`}
                  >
                    {t.initials}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block truncate text-sm font-medium ${
                        on ? "text-ink" : "text-faint group-hover:text-ink"
                      }`}
                    >
                      {t.name}
                    </span>
                    <span className="block truncate text-xs text-faint">
                      {t.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* active quote */}
          <div className="grain relative flex min-h-[22rem] flex-col justify-between bg-surface p-8 sm:p-10 lg:col-span-7">
            <div className="flex items-center justify-between">
              <Quote className="h-9 w-9 text-ember" strokeWidth={1.5} />
              <div className="flex">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-ember text-ember" />
                ))}
              </div>
            </div>

            <div className="relative flex-1 py-8">
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
              <div>
                <div className="text-sm font-semibold text-ink">{active.name}</div>
                <div className="text-sm text-faint">{active.title}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="mr-2 font-mono text-xs text-faint">
                  {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                </span>
                <button
                  aria-label="Previous"
                  onClick={() => go(i - 1)}
                  className="btn-steel grid h-9 w-9 place-items-center !px-0"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  aria-label="Next"
                  onClick={() => go(i + 1)}
                  className="btn-steel grid h-9 w-9 place-items-center !px-0"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
