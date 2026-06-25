import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { Portrait } from "@/components/ui/portrait";
import { site } from "@/lib/site";

const points = [
  { k: "Approach", v: "Build it right, ship it fast, keep it simple to run." },
  { k: "Stack", v: "Modern web + AI — Next.js, Python, automation tooling." },
  { k: "Working style", v: "Direct, honest, and clear about what's possible." },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="aurora opacity-30" />
      <div className="wrap relative grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* portrait with 3D tilt */}
        <Reveal>
          <div className="relative [perspective:1200px]">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[50%] bg-ember/[0.08] blur-3xl" />
            <TiltCard className="beam-border glass-rim rounded-[20px] p-2">
              <Portrait />
              <div className="flex items-center justify-between px-2 pb-1 pt-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink">
                  {site.name}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
                  {site.role}
                </span>
              </div>
            </TiltCard>
          </div>
        </Reveal>

        {/* bio */}
        <div className="flex flex-col justify-center">
          <Reveal className="flex items-center gap-3">
            <span className="kicker">[ — ]</span>
            <span className="rule max-w-[40px]" />
            <span className="kicker">Who you&apos;re hiring</span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="mt-6 font-display text-[2rem] font-bold leading-[1.02] tracking-tightest text-ink sm:text-[2.6rem] lg:text-[3.1rem]">
              I&apos;m {site.name}. I&apos;d rather build the thing than talk about it.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-faint">
              I build websites and AI automations for businesses that want results
              without the overhead of a big agency. You get one person who actually
              does the work, answers his own messages, and treats your project like
              it&apos;s his own.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <dl className="mt-9 divide-y divide-line border-y border-line">
              {points.map((p) => (
                <div key={p.k} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[160px_1fr]">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">
                    {p.k}
                  </dt>
                  <dd className="text-ink/90">{p.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href="#contact" className="btn-ember group w-fit">
                Work with me
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              {/* signature */}
              <span className="relative font-display text-2xl font-semibold italic text-ink/80">
                {site.name}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  height="7"
                  viewBox="0 0 160 7"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 4.5C30 1.5 70 1.5 99 4 128 6 150 3.5 159 2"
                    stroke="hsl(18 90% 55%)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
