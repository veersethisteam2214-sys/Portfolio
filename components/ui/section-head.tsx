import { Reveal } from "@/components/ui/reveal";

export function SectionHead({
  num,
  label,
  title,
  description,
}: {
  num: string;
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Reveal className="flex items-center gap-3">
        <span className="kicker">[ {num} ]</span>
        <span className="rule max-w-[40px]" />
        <span className="kicker">{label}</span>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tightest text-ink sm:text-4xl lg:text-[2.9rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={120}>
          <p className="mt-5 text-lg leading-relaxed text-faint">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
