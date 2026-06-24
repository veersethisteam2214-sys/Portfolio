import { Marquee } from "@/components/ui/marquee";
import { stack } from "@/lib/site";

export function StackStrip() {
  return (
    <section className="border-y border-line bg-surface/40">
      <div className="wrap flex flex-col items-center gap-6 py-8 lg:flex-row lg:gap-10">
        <span className="kicker shrink-0 whitespace-nowrap">
          Built with / —
        </span>
        <div className="mask-x relative w-full overflow-hidden">
          <Marquee className="[--duration:36s]" pauseOnHover>
            {stack.map((s) => (
              <span
                key={s}
                className="mx-5 select-none font-mono text-sm tracking-wide text-faint transition-colors hover:text-ink"
              >
                {s}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
