import { Reveal } from "@/components/ui/reveal";

export function SectionHead({
  num,
  label,
  title,
  description,
  center = false,
}: {
  num: string;
  label: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="kicker">[ {num} ]</span>
        <span className="rule max-w-[40px]" />
        <span className="kicker">{label}</span>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-6 font-display text-[2rem] font-bold leading-[1.02] tracking-tightest text-ink sm:text-[2.6rem] lg:text-[3.25rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={120}>
          <p
            className={`mt-5 text-lg leading-relaxed text-faint sm:text-[1.15rem] ${
              center ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
