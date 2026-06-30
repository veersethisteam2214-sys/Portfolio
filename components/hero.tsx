import { ArrowRight, Star } from "lucide-react";
import { site, stats } from "@/lib/site";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { Sparkles } from "@/components/ui/sparkles";
import { SystemsCockpit } from "@/components/systems-cockpit";

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden pt-28 sm:pt-32">
      {/* ── cinematic background stack ── */}
      <div className="aurora" />
      {/* diagonal spotlight beam */}
      <div className="pointer-events-none absolute -left-1/4 -top-1/3 h-[120%] w-[80%] -rotate-12 bg-[radial-gradient(closest-side,hsl(var(--ember)/0.10),transparent)] blur-2xl" />
      <div className="blueprint pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(115%_80%_at_72%_0%,#000_25%,transparent_72%)]" />
      <Sparkles count={20} className="opacity-70" />
      <div className="vignette pointer-events-none absolute inset-0" />

      <div className="wrap relative grid grid-cols-1 items-center gap-12 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28">
        {/* LEFT */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="kicker">[ 00 ]</span>
              <span className="rule max-w-[40px]" />
              <span className="kicker">{site.role}</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
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
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-faint">
              I&apos;m {site.name} — a web &amp; automation engineer. I design fast
              websites and AI systems that take the repetitive work off your plate
              and quietly handle it, around the clock. This portfolio is built to
              show that standard before you ever book a call.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a href="#contact" className="btn-ember group text-[15px]">
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Magnetic>
              <a href="#work" className="btn-steel text-[15px]">
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
          </Reveal>

          <Reveal delay={280}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-bg/80 px-4 py-5 backdrop-blur-sm">
                  <dt className="font-display text-2xl font-bold tracking-tight text-ink sm:text-[1.7rem]">
                    {s.value}
                    <span className="text-ember">{s.suffix}</span>
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-faint">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* RIGHT — signature systems cockpit */}
        <Reveal delay={180}>
          <SystemsCockpit />
        </Reveal>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-9 w-5 justify-center rounded-full border border-line pt-1.5">
          <span className="h-1.5 w-1 animate-scroll-cue rounded-full bg-faint" />
        </div>
      </div>
    </section>
  );
}
