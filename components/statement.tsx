"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

const TEXT =
  "I don't build websites that just sit there. I build systems that work — bringing in leads, answering customers, and saving you hours, every single day.";

function Word({
  children,
  progress,
  range,
  accent,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className={accent ? "text-ember" : ""}>
      {children}{" "}
    </motion.span>
  );
}

export function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = TEXT.split(" ");
  const accentFrom = words.length - 4; // light the closing phrase

  return (
    <section
      ref={ref}
      className="relative border-t border-line"
      style={{ height: reduce ? "auto" : "190vh" }}
    >
      {/* near-monochrome calm + faint center glow */}
      <div
        className={`${
          reduce ? "relative" : "sticky top-0 flex h-screen items-center"
        } overflow-hidden`}
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-ember/[0.06] blur-[90px]" />
        <div className="wrap relative py-24 sm:py-0">
          <p className="mx-auto mb-10 text-center">
            <span className="kicker">[ — ] &nbsp; Why it matters</span>
          </p>
          <p className="mx-auto max-w-5xl text-center font-display text-3xl font-bold leading-[1.12] tracking-tightest text-ink sm:text-5xl lg:text-[3.6rem] lg:leading-[1.08]">
            {reduce
              ? TEXT
              : words.map((w, i) => (
                  <Word
                    key={i}
                    progress={scrollYProgress}
                    range={[i / words.length, (i + 1) / words.length]}
                    accent={i >= accentFrom}
                  >
                    {w}
                  </Word>
                ))}
          </p>
        </div>
      </div>
    </section>
  );
}
