import { ArrowUpRight, Clock3, Layers3 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { projects, type Project } from "@/lib/site";

// subtle on-brand gradients per project (warm/cool over graphite, no purple)
const grads = [
  "from-ember/20 via-surface to-surface",
  "from-ion/20 via-surface to-surface",
  "from-ember/15 via-surface to-raised",
  "from-ion/15 via-surface to-raised",
  "from-ember/20 via-raised to-surface",
];

function Thumb({
  project,
  grad,
}: {
  project: Project;
  grad: string;
}) {
  const modules = project.proof.slice(0, 3);
  return (
    <div className="elevate elevate-hover group/thumb overflow-hidden rounded-lg">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-line/80 bg-bg/60 px-3 py-2">
        <span className="h-2 w-2 rounded-[50%] bg-carbon-600" />
        <span className="h-2 w-2 rounded-[50%] bg-carbon-600" />
        <span className="h-2 w-2 rounded-[50%] bg-ember/70" />
        <span className="ml-2 truncate font-mono text-[9px] text-faint/60">
          {project.title.toLowerCase().replace(/[^a-z]+/g, "")}.studio
        </span>
      </div>
      {/* faux UI */}
      <div className={`scan-panel relative aspect-[16/11] bg-gradient-to-br ${grad}`}>
        <div className="absolute inset-0 blueprint-fine opacity-20" />

        <div className="absolute inset-4 grid grid-cols-[0.72fr_1.28fr] gap-3">
          <aside className="flex flex-col justify-between rounded-lg border border-line bg-bg/55 p-3 backdrop-blur-sm">
            <div>
              <div className="flex items-center justify-between">
                <span className="grid h-7 w-7 place-items-center rounded-md border border-line bg-bg/70 font-mono text-[10px] text-ember">
                  {project.index}
                </span>
                <span className="rounded-sm border border-line bg-bg/55 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-faint">
                  {project.type}
                </span>
              </div>
              <div className="mt-5 font-display text-3xl font-extrabold leading-none text-ink/90">
                {project.metric}
              </div>
              <div className="mt-1 h-1.5 w-16 rounded-sm bg-ember/45" />
            </div>

            <div className="space-y-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <div key={tag} className="rounded-sm border border-line bg-raised/70 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-faint">
                  {tag}
                </div>
              ))}
            </div>
          </aside>

          <div className="flex flex-col gap-3">
            <div className="rounded-lg border border-line bg-bg/55 p-3 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-wider text-faint">
                  system map
                </span>
                <span className="h-1.5 w-1.5 animate-pulse rounded-[50%] bg-ion" />
              </div>
              <div className="grid grid-cols-3 items-center gap-2">
                {modules.map((module, idx) => (
                  <div key={module} className="relative rounded-md border border-line bg-surface/80 p-2">
                    <span className="block h-1.5 w-8 rounded-sm bg-ink/15" />
                    <span className="mt-2 block h-1 w-12 max-w-full rounded-sm bg-ink/10" />
                    <span className="mt-2 block truncate font-mono text-[7px] uppercase tracking-wider text-faint/70">
                      {idx + 1}. {module}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid flex-1 grid-cols-5 gap-1.5">
              {[34, 62, 48, 78, 55].map((height, idx) => (
                <div key={height} className="flex items-end rounded-md border border-line bg-bg/45 p-1.5">
                  <span
                    className={`block w-full rounded-sm ${
                      idx === 3 ? "bg-ember/70" : "bg-ion/35"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
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
            title={<>Builds, systems, and concept work with receipts.</>}
            description="Some entries are client-style concept builds until real case studies are added. The point is the same: clear problem, useful system, measurable outcome."
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

        <Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
            {[
              ["Catalog rhythm", "Real-style previews instead of flat screenshots."],
              ["Outcome first", "Metrics lead the eye before tools and tags."],
              ["System proof", "Each project shows what actually got wired."],
            ].map(([title, copy]) => (
              <div key={title} className="bg-surface p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-ember">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-faint">{copy}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-10 border-t border-line lg:pl-10">
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
                      <span className="rounded-sm border border-line px-1.5 py-0.5 text-[9px] text-ion">
                        {p.type}
                      </span>
                      <span>{p.category}</span>
                      <span className="text-faint/50">·</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="mt-3 flex items-center gap-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                      {p.title}
                      <ArrowUpRight className="h-5 w-5 text-faint opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember group-hover:opacity-100" />
                    </h3>
                    <p className="mt-3 leading-relaxed text-faint">{p.blurb}</p>
                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <div className="flex items-center gap-2 rounded-md border border-line bg-ink/[0.02] px-3 py-2">
                        <Clock3 className="h-4 w-4 text-ion" strokeWidth={1.5} />
                        <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
                          {p.buildTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 rounded-md border border-line bg-ink/[0.02] px-3 py-2">
                        <Layers3 className="h-4 w-4 text-ember" strokeWidth={1.5} />
                        <span className="truncate font-mono text-[11px] uppercase tracking-wider text-faint">
                          {p.scope}
                        </span>
                      </div>
                    </div>
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
                    <Thumb project={p} grad={grads[i % grads.length]} />
                    <ul className="mt-3 grid gap-1.5 font-mono text-[10px] uppercase tracking-wider text-faint/70">
                      {p.proof.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-[50%] bg-ion" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-wider text-faint/70">
            * Concept entries are clearly labelled. Replace with verified live projects as your portfolio grows.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
