import { ArrowRight, Command, Gauge, Layers3, MousePointer2, Workflow } from "lucide-react";
import { proofHighlights } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const signals = [
  { label: "Motion", value: "scroll + hover", icon: MousePointer2 },
  { label: "System", value: "content-driven", icon: Layers3 },
  { label: "Speed", value: "Next.js build", icon: Gauge },
  { label: "Automation", value: "lead flow ready", icon: Workflow },
];

const checks = [
  "Responsive sections without template filler",
  "Cursor-aware cards and restrained animated borders",
  "Project data ready for real case studies",
  "Contact routes wired for email and WhatsApp",
];

export function Proof() {
  return (
    <section id="proof" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="aurora opacity-20" />
      <div className="blueprint pointer-events-none absolute inset-0 opacity-[0.18] [mask-image:linear-gradient(to_bottom,#000,transparent_82%)]" />

      <div className="wrap relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <SectionHead
            num="02"
            label="Website as proof"
            title={<>The portfolio is also the product demo.</>}
            description="A visitor should not have to trust a claim that you can build polished, useful web systems. They should feel it in the page."
          />

          <Reveal>
            <div className="glass-rim rounded-[20px] p-2">
              <div className="panel scan-panel overflow-hidden rounded-xl">
                <div className="flex items-center justify-between border-b border-line px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Command className="h-4 w-4 text-ion" strokeWidth={1.5} />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink">
                      proof console
                    </span>
                  </div>
                  <span className="rounded-sm border border-line bg-bg/70 px-2 py-1 font-mono text-[10px] text-faint">
                    Press K
                  </span>
                </div>
                <div className="grid gap-px bg-line sm:grid-cols-4">
                  {signals.map((signal) => {
                    const Icon = signal.icon;
                    return (
                      <div key={signal.label} className="bg-surface p-4">
                        <Icon className="h-4 w-4 text-ember" strokeWidth={1.5} />
                        <div className="mt-4 font-mono text-[10px] uppercase tracking-wider text-faint">
                          {signal.label}
                        </div>
                        <div className="mt-1 text-sm font-medium text-ink">{signal.value}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {proofHighlights.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 80}>
              <SpotlightCard className="elevate elevate-hover h-full rounded-xl">
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="tag border-ion/30 text-ion">{item.label}</span>
                    <div className="text-right">
                      <div className="font-display text-4xl font-extrabold tracking-tightest text-ink">
                        {item.metric}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-faint">
                        {item.metricLabel}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold leading-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-faint">{item.detail}</p>
                  <div className="mt-auto pt-6">
                    <a
                      href={idx === 2 ? "#work" : "#contact"}
                      className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ember"
                    >
                      {idx === 2 ? "See project structure" : "Use this system"}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-6 grid gap-2 border-y border-line py-5 sm:grid-cols-2 lg:grid-cols-4">
            {checks.map((check) => (
              <div key={check} className="flex items-center gap-2 text-sm text-faint">
                <span className="h-1.5 w-1.5 shrink-0 rounded-[50%] bg-ember" />
                {check}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
