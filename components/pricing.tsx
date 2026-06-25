import { Check, Zap, Rocket, Settings2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Magnetic } from "@/components/ui/magnetic";
import { plans } from "@/lib/site";

const icons = [Zap, Rocket, Settings2];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      {/* warm spotlight behind the recommended plan */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[360px] w-[600px] -translate-x-1/2 rounded-[50%] bg-ember/[0.07] blur-[90px]" />

      <div className="wrap relative">
        <SectionHead
          num="04"
          label="Pricing"
          title={<>Choose your build.</>}
          description="Fixed prices, agreed before a line is written. Starting points below — your final quote depends on scope, and you approve it up front. No hourly meters, no surprises."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p, idx) => {
            const Ico = icons[idx] ?? Zap;
            const hot = p.highlighted;
            return (
              <Reveal
                key={p.name}
                delay={idx * 90}
                className={hot ? "lg:-mt-5 lg:mb-5 lg:scale-[1.02]" : ""}
              >
                <div
                  className={`group relative h-full overflow-hidden rounded-[20px] ${
                    hot ? "beam-border" : ""
                  }`}
                >
                  <SpotlightCard
                    className={`elevate elevate-hover h-full rounded-[20px] ${
                      hot ? "bg-raised" : ""
                    }`}
                  >
                    <div className="flex h-full flex-col p-8">
                      <div className="flex items-center justify-between">
                        <span
                          className={`grid h-11 w-11 place-items-center rounded-lg border ${
                            hot
                              ? "border-ember/40 bg-ember/15 text-ember"
                              : "border-line bg-bg text-ink"
                          }`}
                        >
                          <Ico className="h-5 w-5" strokeWidth={1.5} />
                        </span>
                        {hot && (
                          <span className="tag border-ember/40 text-ember">
                            ◆ Recommended
                          </span>
                        )}
                      </div>

                      <h3 className="mt-6 font-mono text-sm uppercase tracking-widest text-ink">
                        {p.name}
                      </h3>
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="font-display text-5xl font-extrabold tracking-tightest text-ink">
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
                            <span
                              className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-sm ${
                                hot ? "bg-ember/20 text-ember" : "bg-ink/[0.06] text-ink"
                              }`}
                            >
                              <Check className="h-3 w-3" />
                            </span>
                            <span className="text-ink/85">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 pt-2">
                        {hot ? (
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
                  </SpotlightCard>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-sm text-faint">
            Not sure which fits? Tell me what you need and I&apos;ll point you to the
            right one — no pressure.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
