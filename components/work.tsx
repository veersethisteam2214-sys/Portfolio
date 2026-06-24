import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { projects } from "@/lib/site";

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
                <article className="group grid grid-cols-1 items-center gap-6 border-b border-line py-9 md:grid-cols-12 md:gap-8">
                  {/* metric block */}
                  <div
                    className={`md:col-span-3 ${
                      flip ? "md:order-last md:text-right" : ""
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

                  {/* divider */}
                  <div className="hidden md:col-span-1 md:flex md:justify-center">
                    <span className="h-16 w-px bg-line transition-colors group-hover:bg-ember/50" />
                  </div>

                  {/* content */}
                  <div className="md:col-span-8">
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
                    <p className="mt-3 max-w-2xl leading-relaxed text-faint">
                      {p.blurb}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
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
