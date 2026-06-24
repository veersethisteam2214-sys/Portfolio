import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { process } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="relative border-t border-line py-24 sm:py-32">
      <div className="blueprint-fine pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(80%_60%_at_50%_0%,#000,transparent_80%)]" />
      <div className="wrap relative">
        <SectionHead
          num="03"
          label="How it works"
          title={<>Clear from the first call. No surprises on the invoice.</>}
          description="You always know what's happening, what it costs, and when it's done. Four steps, every time."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 90}>
              <div className="relative border-t-2 border-line pt-6 lg:pr-8">
                {/* node marker on the top rule */}
                <span className="absolute -top-[5px] left-0 h-2 w-2 rounded-full bg-ember" />
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-ember">{p.step}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-faint/50">
                    step
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 pb-8 text-sm leading-relaxed text-faint lg:pb-0">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
