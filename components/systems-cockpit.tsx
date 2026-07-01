import {
  ArrowDownRight,
  Bot,
  Check,
  Clock3,
  Command,
  Database,
  Gauge,
  Globe2,
  Mail,
  MessageCircle,
  Workflow,
} from "lucide-react";

const intake = [
  { label: "Website lead", icon: Globe2, tone: "text-ion" },
  { label: "WhatsApp brief", icon: MessageCircle, tone: "text-ember" },
  { label: "Email request", icon: Mail, tone: "text-ion" },
];

const automations = [
  "Qualify intent",
  "Draft scope",
  "Route follow-up",
  "Book call",
];

const metrics = [
  { label: "Prototype", value: "48h" },
  { label: "Hand-off", value: "clean" },
  { label: "Load", value: "0.6s" },
];

export function SystemsCockpit() {
  return (
    <div className="relative w-full max-w-full animate-float">
      <div className="mesh-shell beam-border glass-rim relative w-full max-w-full overflow-hidden rounded-[20px] p-2">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-12 h-56 w-56 rounded-[50%] bg-ion/[0.16] blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-[50%] bg-ember/[0.16] blur-3xl" />
        </div>

        <div className="panel relative min-w-0 overflow-hidden rounded-xl">
          <div className="scan-panel absolute inset-0 opacity-70" aria-hidden />
          <div className="relative z-10 flex items-center justify-between border-b border-line px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-[50%] bg-carbon-600" />
              <span className="h-2.5 w-2.5 rounded-[50%] bg-carbon-600" />
              <span className="h-2.5 w-2.5 rounded-[50%] bg-ember/80" />
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-faint">
              <Command className="h-3.5 w-3.5 text-ion" strokeWidth={1.5} aria-hidden />
              systems cockpit
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-ion">
              <span className="h-1.5 w-1.5 animate-pulse rounded-[50%] bg-ion" />
              live
            </div>
          </div>

          <div className="relative z-10 grid min-w-0 gap-px bg-line/80 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="min-w-0 bg-surface/90 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-faint">
                    intake routes
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-ink">
                    Every lead becomes a workflow.
                  </h3>
                </div>
                <Gauge className="h-5 w-5 text-ember" strokeWidth={1.5} aria-hidden />
              </div>

              <div className="mt-5 space-y-2.5">
                {intake.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="group flex min-w-0 items-center gap-3 rounded-lg border border-line bg-bg/60 px-3 py-2.5"
                    >
                      <span className={`grid h-8 w-8 place-items-center rounded-md border border-line bg-raised ${item.tone}`}>
                        <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1 text-sm text-ink/90">{item.label}</span>
                      <span className="data-lane hidden h-px w-12 overflow-hidden rounded-full bg-line sm:block" />
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-lg border border-line bg-bg/70 p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                    command
                  </span>
                  <kbd className="rounded-sm border border-line bg-raised px-1.5 py-0.5 font-mono text-[10px] text-ion">
                    K
                  </kbd>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {["site", "agent", "dashboard"].map((item) => (
                    <span key={item} className="rounded-sm bg-ink/[0.05] px-2 py-1 text-xs text-ink/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative min-w-0 overflow-hidden bg-bg/80 p-4">
              <div className="blueprint-fine pointer-events-none absolute inset-0 opacity-25" />
              <div className="relative grid min-w-0 gap-4">
                <div className="rounded-xl border border-line bg-surface/90 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-ember/35 bg-ember/10 text-ember">
                        <Bot className="h-4.5 w-4.5" strokeWidth={1.5} aria-hidden />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-faint">
                          automation core
                        </p>
                        <p className="text-sm font-medium text-ink">VeerOS lead engine</p>
                      </div>
                    </div>
                    <ArrowDownRight className="h-4 w-4 text-faint" strokeWidth={1.5} aria-hidden />
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {automations.map((item, idx) => (
                      <div key={item} className="rounded-md border border-line bg-bg/55 p-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`grid h-5 w-5 place-items-center rounded-sm ${
                              idx < 3 ? "bg-ember/15 text-ember" : "bg-ion/15 text-ion"
                            }`}
                          >
                            {idx < 3 ? (
                              <Check className="h-3 w-3" strokeWidth={1.8} aria-hidden />
                            ) : (
                              <Clock3 className="h-3 w-3" strokeWidth={1.8} aria-hidden />
                            )}
                          </span>
                          <span className="text-xs text-ink/85">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-line bg-surface/80 p-3">
                      <p className="font-display text-2xl font-bold leading-none text-ink">
                        {metric.value}
                      </p>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-faint">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-line bg-surface/80 p-3">
                  <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-faint">
                    <Workflow className="h-3.5 w-3.5 text-ion" strokeWidth={1.5} aria-hidden />
                    delivery path
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                    {["brief", "prototype", "launch", "automate"].map((step, idx) => (
                      <div key={step} className="relative rounded-md border border-line bg-bg/55 px-2 py-2">
                        <span className="block font-mono text-[9px] uppercase tracking-wider text-faint">
                          0{idx + 1}
                        </span>
                        <span className="mt-1 block truncate text-xs text-ink/85">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute left-8 right-8 top-[6.5rem] -z-0 h-px bg-gradient-to-r from-transparent via-ion/70 to-transparent" aria-hidden />
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between border-t border-line px-4 py-3.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
              fig. 01 / the site selling the system
            </span>
            <span className="font-display text-xl font-bold text-ink">
              41<span className="text-ember">h</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
