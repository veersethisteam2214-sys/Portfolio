"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Mail,
  ShoppingBag,
  Table2,
  CalendarCheck,
  FileText,
  BellRing,
} from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { SectionHead } from "@/components/ui/section-head";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

const Node = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; label?: string; right?: boolean }
>(({ children, label, right }, ref) => (
  <div className={`flex items-center gap-2.5 ${right ? "flex-row-reverse" : ""}`}>
    <div
      ref={ref}
      className="glass-rim z-10 grid h-10 w-10 place-items-center rounded-lg bg-surface text-ink sm:h-12 sm:w-12"
    >
      {children}
    </div>
    {label && (
      <span className="hidden font-mono text-[11px] text-faint lg:block">{label}</span>
    )}
  </div>
));
Node.displayName = "Node";

export function Connect() {
  const container = useRef<HTMLDivElement>(null);
  const hub = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const wa = useRef<HTMLDivElement>(null);
  const mail = useRef<HTMLDivElement>(null);
  const shop = useRef<HTMLDivElement>(null);
  const sheet = useRef<HTMLDivElement>(null);
  const cal = useRef<HTMLDivElement>(null);
  const report = useRef<HTMLDivElement>(null);
  const notify = useRef<HTMLDivElement>(null);

  const ins = [wa, mail, shop, sheet];
  const outs = [cal, report, notify];

  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), {
      rootMargin: "0px 0px -10% 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="aurora-ion" />
      <div className="blueprint pointer-events-none absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(80%_70%_at_50%_50%,#000,transparent_85%)]" />

      <div className="wrap relative">
        <SectionHead
          num="*"
          label="The engine"
          title={<>Your tools, wired into one system that runs itself.</>}
          description="I connect the apps you already use to an automation core I build and run. Work flows in from one side; finished tasks come out the other — no copy-paste, no chasing."
        />

        <Reveal>
          <div
            ref={container}
            className="beam-border panel relative mt-14 grid grid-cols-3 items-stretch gap-3 overflow-hidden rounded-[20px] p-5 sm:gap-6 sm:p-12"
          >
            <div className="blueprint-fine pointer-events-none absolute inset-0 opacity-[0.2]" />

            {/* HUD corner brackets */}
            {[
              "left-3 top-3 border-l border-t",
              "right-3 top-3 border-r border-t",
              "left-3 bottom-3 border-l border-b",
              "right-3 bottom-3 border-r border-b",
            ].map((c) => (
              <span key={c} className={`pointer-events-none absolute h-4 w-4 border-ion/40 ${c}`} />
            ))}
            <span className="absolute left-1/2 top-3 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.3em] text-ion/60">
              system online
            </span>

            {/* inputs */}
            <div className="relative z-10 flex flex-col justify-center gap-5 sm:gap-6">
              <Node ref={wa} label="WhatsApp"><MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} /></Node>
              <Node ref={mail} label="Email"><Mail className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} /></Node>
              <Node ref={shop} label="Store"><ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} /></Node>
              <Node ref={sheet} label="Sheets / CRM"><Table2 className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} /></Node>
            </div>

            {/* core = profile pic */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative">
                {active && (
                  <>
                    <span className="absolute inset-0 animate-pulse-ring rounded-[50%] border border-ion/40" />
                    <span
                      className="absolute inset-0 animate-pulse-ring rounded-[50%] border border-ember/40"
                      style={{ animationDelay: "1.5s" }}
                    />
                  </>
                )}
                <div
                  ref={hub}
                  className="beam-border relative grid h-16 w-16 place-items-center rounded-[50%] bg-bg p-1 sm:h-24 sm:w-24 sm:p-1.5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/veer.jpg"
                    alt={site.name}
                    className="h-full w-full rounded-[50%] object-cover object-top grayscale"
                  />
                </div>
              </div>
            </div>

            {/* outputs */}
            <div className="relative z-10 flex flex-col items-end justify-center gap-5 sm:gap-6">
              <Node ref={cal} right label="Meetings booked"><CalendarCheck className="h-4 w-4 text-ember sm:h-5 sm:w-5" strokeWidth={1.5} /></Node>
              <Node ref={report} right label="Reports sent"><FileText className="h-4 w-4 text-ember sm:h-5 sm:w-5" strokeWidth={1.5} /></Node>
              <Node ref={notify} right label="Alerts fired"><BellRing className="h-4 w-4 text-ember sm:h-5 sm:w-5" strokeWidth={1.5} /></Node>
            </div>

            {/* beams in: ion energy */}
            {ins.map((r, i) => (
              <AnimatedBeam
                key={`in-${i}`}
                containerRef={container}
                fromRef={r}
                toRef={hub}
                active={active}
                duration={4 + i * 0.5}
                curvature={i % 2 === 0 ? 16 : -16}
                gradientStartColor="#38bdf8"
                gradientStopColor="#0ea5e9"
                particles={1}
                particleColor="#7dd3fc"
              />
            ))}
            {/* beams out: ember energy */}
            {outs.map((r, i) => (
              <AnimatedBeam
                key={`out-${i}`}
                containerRef={container}
                fromRef={hub}
                toRef={r}
                active={active}
                duration={3.6 + i * 0.5}
                curvature={i % 2 === 0 ? -16 : 16}
                gradientStartColor="#ef6a2a"
                gradientStopColor="#f7a04a"
                particles={1}
                particleColor="#f7a04a"
              />
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider text-faint/70">
            <span className="text-ion">in — the apps you already use</span>
            <span>core — built &amp; run by {site.initials}</span>
            <span className="text-ember">out — meetings · reports · alerts</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
