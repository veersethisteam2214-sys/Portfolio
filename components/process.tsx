import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { process } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="aurora-ion opacity-25" />
      <div className="wrap relative">
        <SectionHead
          num="03"
          label="How it works"
          title={<>Clear from the first call. No surprises on the invoice.</>}
          description="You always know what's happening, what it costs, and when it's done. Four steps, every time."
        />

        {/* connector rail with a travelling pulse */}
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-0 hidden h-px overflow-hidden bg-line lg:block">
            <div className="absolute inset-y-0 -left-1/4 w-1/4 animate-sheen bg-gradient-to-r from-transparent via-ion to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="relative border-t border-line pt-6 lg:border-t-0 lg:pr-8">
                  <span className="absolute -top-[5px] left-0 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-[50%] border border-ion bg-bg lg:block">
                    <span className="absolute inset-0 animate-pulse-ring rounded-[50%] border border-ion/50" />
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl font-extrabold tracking-tightest text-ion">
                      {p.step}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-faint/50">
                      step
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-3 pb-8 text-sm leading-relaxed text-faint lg:pb-0">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
