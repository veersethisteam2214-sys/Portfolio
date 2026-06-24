"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { faqs, site } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-line py-24 sm:py-32">
      <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* left rail */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="flex items-center gap-3">
            <span className="kicker">[ 05 ]</span>
            <span className="rule max-w-[40px]" />
            <span className="kicker">FAQ</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">
              Questions, answered.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-faint">
              Still unsure about something? Ask me directly — I&apos;ll explain it in
              plain English, no obligation.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <a href={`mailto:${site.email}`} className="btn-steel mt-6">
              Ask a question
            </a>
          </Reveal>
        </div>

        {/* accordion */}
        <div className="border-t border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q}>
                <div className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-xs text-ember">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-medium text-ink">{f.q}</span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-faint transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-ember" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pl-9 pr-6 text-faint">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
