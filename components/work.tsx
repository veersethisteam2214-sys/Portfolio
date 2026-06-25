import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { projects } from "@/lib/site";

// subtle on-brand gradients per project (warm/cool over graphite, no purple)
const grads = [
  "from-ember/20 via-surface to-surface",
  "from-ion/20 via-surface to-surface",
  "from-ember/15 via-surface to-raised",
  "from-ion/15 via-surface to-raised",
  "from-ember/20 via-raised to-surface",
];

function Thumb({
  initials,
  category,
  grad,
}: {
  initials: string;
  category: string;
  grad: string;
}) {
  return (
    <div className="elevate elevate-hover overflow-hidden rounded-lg">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-line/80 bg-bg/60 px-3 py-2">
        <span className="h-2 w-2 rounded-[50%] bg-carbon-600" />
        <span className="h-2 w-2 rounded-[50%] bg-carbon-600" />
        <span className="h-2 w-2 rounded-[50%] bg-carbon-600" />
        <span className="ml-2 truncate font-mono text-[9px] text-faint/60">
          {category.toLowerCase().replace(/[^a-z]+/g, "")}.app
        </span>
      </div>
      {/* faux UI */}
      <div className={`relative aspect-[16/9] bg-gradient-to-br ${grad}`}>
        <div className="absolute inset-0 blueprint-fine opacity-20" />
        <span className="absolute right-3 top-3 font-display text-4xl font-extrabold tracking-tightest text-ink/10">
          {initials}
        </span>
        <div className="absolute inset-x-4 bottom-4 space-y-1.5">
          <div className="h-1.5 w-1/3 rounded-sm bg-ink/15" />
          <div className="h-1.5 w-2/3 rounded-sm bg-ink/10" />
          <div className="h-1.5 w-1/2 rounded-sm bg-ink/10" />
        </div>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="relative border-t border-line py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHead
            num="02"
            label="Selected work"
            title={<>Real problems. Numbers that moved.</>}
          />
          <Reveal>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm text-faint transition-colors hover:text-ink"
            >
              Want numbers like these?
              <ArrowUpRight className="h-4 w-4 text-ember transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="relative mt-14 border-t border-line lg:pl-10">
          <span className="trace-rail bottom-0 left-0 top-0 hidden lg:block" />
          {projects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.index}>
                <article className="group grid grid-cols-1 items-center gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-8">
                  {/* metric */}
                  <div
                    className={`md:col-span-3 ${
                      flip ? "md:order-3 md:text-right" : "md:order-1"
                    }`}
                  >
                    <div className="font-display text-5xl font-extrabold leading-none tracking-tightest text-ink sm:text-6xl">
                      {p.metric}
                    </div>
                    <div
                      className={`mt-2 max-w-[16rem] text-sm text-faint ${
                        flip ? "md:ml-auto" : ""
                      }`}
                    >
                      {p.metricLabel}
                    </div>
                  </div>

                  {/* content */}
                  <div className="md:order-2 md:col-span-5">
                    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-faint">
                      <span className="text-ember">{p.index}</span>
                      <span>{p.category}</span>
                      <span className="text-faint/50">·</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="mt-3 flex items-center gap-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                      {p.title}
                      <ArrowUpRight className="h-5 w-5 text-faint opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember group-hover:opacity-100" />
                    </h3>
                    <p className="mt-3 leading-relaxed text-faint">{p.blurb}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* thumbnail */}
                  <div className={`md:col-span-4 ${flip ? "md:order-1" : "md:order-3"}`}>
                    <Thumb
                      initials={p.title.slice(0, 2).toUpperCase()}
                      category={p.title.replace(/[^A-Za-z]+/g, "")}
                      grad={grads[i % grads.length]}
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-wider text-faint/70">
            * A selection. Some figures rounded. References available on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
