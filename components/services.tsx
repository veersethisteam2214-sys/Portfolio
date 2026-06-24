import { Check, ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHead } from "@/components/ui/section-head";
import { services } from "@/lib/site";

export function Services() {
  const large = services.filter((s) => s.size === "lg");
  const small = services.filter((s) => s.size === "sm");

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          num="01"
          label="Capabilities"
          title={
            <>
              One engineer. The output of a small team — minus the meetings.
            </>
          }
          description="Whatever the bottleneck — a slow website, a task done by hand, a flood of messages — there's usually a way to build you out of it."
        />

        {/* two large, asymmetric */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {large.map((s, i) => (
            <Reveal key={s.index} delay={i * 80}>
              <SpotlightCard className="h-full bg-surface">
                <div className="flex h-full flex-col p-7 sm:p-9">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-md border border-line bg-bg text-ember">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-xs text-faint/60">
                      {s.index} / 05
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-faint">{s.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-faint">
                        <Check className="h-4 w-4 text-ember" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* three smaller */}
        <div className="mt-px grid grid-cols-1 gap-px overflow-hidden border border-t-0 border-line bg-line md:grid-cols-3">
          {small.map((s, i) => (
            <Reveal key={s.index} delay={i * 80}>
              <SpotlightCard className="h-full bg-surface">
                <div className="group flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-ember">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-faint/60">{s.index}</span>
                  </div>
                  <h3 className="mt-5 flex items-center gap-1.5 font-display text-lg font-bold text-ink">
                    {s.title}
                    <ArrowUpRight className="h-4 w-4 text-faint opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-faint">
                    {s.description}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
