import { ArrowRight, Check, Star } from "lucide-react";
import { site, stats } from "@/lib/site";
import { Magnetic } from "@/components/ui/magnetic";

const runRows = [
  { label: "Lead captured from website form", done: true },
  { label: "Contact enriched & scored", done: true },
  { label: "Personalised reply drafted by AI", done: true },
  { label: "Follow-up scheduled · meeting booked", done: false },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* texture, not glow */}
      <div className="blueprint pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(110%_80%_at_70%_0%,#000_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-[50%] bg-ember/[0.06] blur-[120px]" />

      <div className="wrap grid grid-cols-1 items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3">
            <span className="kicker">[ 00 ]</span>
            <span className="rule max-w-[40px]" />
            <span className="kicker">{site.role}</span>
          </div>

          <h1 className="mt-7 font-display text-[2.7rem] font-extrabold leading-[0.98] tracking-tightest text-balance text-ink sm:text-6xl lg:text-[4.4rem]">
            Built like machines.
            <br />
            Made to run{" "}
            <span className="relative whitespace-nowrap text-ember">
              without you
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 5.5C40 2 160 2 199 5.5"
                  stroke="hsl(18 90% 55%)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-faint">
            I&apos;m {site.name} — a web &amp; automation engineer. I design fast
            websites and AI systems that take the repetitive work off your plate
            and quietly handle it, around the clock.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a href="#contact" className="btn-ember group">
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <a href="#work" className="btn-steel">
              See the work
            </a>
            <div className="ml-1 hidden items-center gap-2 sm:flex">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-ember text-ember" />
                ))}
              </div>
              <span className="text-sm text-faint">4.9 from clients worldwide</span>
            </div>
          </div>

          {/* engineered stat row */}
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-bg px-4 py-5">
                <dt className="font-display text-2xl font-bold tracking-tight text-ink sm:text-[1.7rem]">
                  {s.value}
                  <span className="text-ember">{s.suffix}</span>
                </dt>
                <dd className="mt-1 text-xs leading-snug text-faint">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* RIGHT — liquid-glass automation console */}
        <div className="relative">
          <div className="glass-rim grain relative rounded-xl p-2">
            {/* sheen sweep */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
              <div className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 animate-sheen bg-gradient-to-r from-transparent via-ink/[0.06] to-transparent" />
            </div>

            <div className="panel rounded-lg">
              {/* titlebar */}
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-carbon-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-carbon-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
                </div>
                <span className="font-mono text-[11px] tracking-wider text-faint">
                  automation.run
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-ember">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
                  live
                </span>
              </div>

              {/* workflow rows */}
              <div className="space-y-2.5 p-4">
                {runRows.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-md border border-line bg-bg/60 px-3 py-2.5"
                  >
                    <span
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-sm border ${
                        r.done
                          ? "border-ember/40 bg-ember/15 text-ember"
                          : "border-line text-faint"
                      }`}
                    >
                      {r.done ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
                      )}
                    </span>
                    <span className="font-mono text-[10px] text-faint/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-ink/90">{r.label}</span>
                  </div>
                ))}
              </div>

              {/* footer metric */}
              <div className="flex items-center justify-between border-t border-line px-4 py-3.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
                  Hours saved this week
                </span>
                <span className="font-display text-xl font-bold text-ink">
                  41<span className="text-ember">h</span>
                </span>
              </div>
            </div>
          </div>

          {/* spec caption — a human, designed detail */}
          <div className="mt-3 flex items-center justify-between px-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-faint/70">
              fig. 01 — a live client workflow
            </span>
            <span className="font-mono text-[10px] tracking-wider text-faint/70">
              {site.location.split("·")[0].trim()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
