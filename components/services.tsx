import { Check, ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHead } from "@/components/ui/section-head";
import { services } from "@/lib/site";

const spans = [
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="dotfield pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(90%_70%_at_50%_30%,#000,transparent_80%)]" />

      <div className="wrap relative">
        <SectionHead
          num="01"
          label="Capabilities"
          title={<>One engineer. The output of a small team — minus the meetings.</>}
          description="Whatever the bottleneck — a slow website, a task done by hand, a flood of messages — there's usually a way to build you out of it."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-3">
          {services.map((s, idx) => {
            const big = idx === 0;
            return (
              <Reveal key={s.index} delay={idx * 70} className={spans[idx]}>
                <SpotlightCard className="group h-full rounded-xl border border-line bg-surface transition-colors hover:border-faint/30">
                  <div className="flex h-full flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between">
                      <span
                        className={`grid place-items-center rounded-lg border border-line bg-bg text-ember ${
                          big ? "h-14 w-14" : "h-11 w-11"
                        }`}
                      >
                        <Icon name={s.icon} className={big ? "h-7 w-7" : "h-5 w-5"} />
                      </span>
                      <span className="font-mono text-xs text-faint/50">{s.index}</span>
                    </div>

                    <h3
                      className={`mt-5 flex items-center gap-1.5 font-display font-bold text-ink ${
                        big ? "text-2xl sm:text-3xl" : "text-lg"
                      }`}
                    >
                      {s.title}
                      <ArrowUpRight className="h-4 w-4 text-faint opacity-0 transition-opacity group-hover:opacity-100" />
                    </h3>
                    <p className={`mt-2 text-faint ${big ? "text-base" : "text-sm leading-relaxed"}`}>
                      {s.description}
                    </p>

                    {big && (
                      <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-faint">
                            <Check className="h-4 w-4 text-ember" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
