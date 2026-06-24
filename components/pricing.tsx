import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { Magnetic } from "@/components/ui/magnetic";
import { plans } from "@/lib/site";

export function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-line py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          num="04"
          label="Pricing"
          title={<>Fixed prices, agreed before a line is written.</>}
          description="Starting points below — your final quote depends on scope, and you approve it up front. No hourly meters, no surprise invoices."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
          {plans.map((p) => (
            <Reveal key={p.name}>
              <div
                className={`relative flex h-full flex-col p-8 ${
                  p.highlighted ? "bg-raised" : "bg-surface"
                }`}
              >
                {p.highlighted && (
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-ember" />
                )}
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-sm uppercase tracking-widest text-ink">
                    {p.name}
                  </h3>
                  {p.highlighted && (
                    <span className="tag border-ember/40 text-ember">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-extrabold tracking-tightest text-ink">
                    {p.price}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-faint">
                    {p.cadence}
                  </span>
                </div>
                <p className="mt-3 min-h-[3rem] text-sm text-faint">
                  {p.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                      <span className="text-ink/85">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  {p.highlighted ? (
                    <Magnetic className="w-full">
                      <a href="#contact" className="btn-ember w-full">
                        {p.cta}
                      </a>
                    </Magnetic>
                  ) : (
                    <a href="#contact" className="btn-steel w-full">
                      {p.cta}
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 text-center text-sm text-faint">
            Not sure which fits? Tell me what you need and I&apos;ll point you to the
            right one — no pressure.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
