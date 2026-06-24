"use client";

import { forwardRef, useRef } from "react";
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

const Node = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string; label?: string }
>(({ children, className = "", label }, ref) => (
  <div className="flex items-center gap-3">
    <div
      ref={ref}
      className={`glass-rim z-10 grid h-12 w-12 place-items-center rounded-md bg-surface text-ink ${className}`}
    >
      {children}
    </div>
    {label && (
      <span className="hidden font-mono text-[11px] text-faint lg:block">
        {label}
      </span>
    )}
  </div>
));
Node.displayName = "Node";

export function Connect() {
  const container = useRef<HTMLDivElement>(null);
  const hub = useRef<HTMLDivElement>(null);

  const wa = useRef<HTMLDivElement>(null);
  const mail = useRef<HTMLDivElement>(null);
  const shop = useRef<HTMLDivElement>(null);
  const sheet = useRef<HTMLDivElement>(null);

  const cal = useRef<HTMLDivElement>(null);
  const report = useRef<HTMLDivElement>(null);
  const notify = useRef<HTMLDivElement>(null);

  const ins = [wa, mail, shop, sheet];
  const outs = [cal, report, notify];

  return (
    <section className="relative border-t border-line py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          num="*"
          label="The engine"
          title={<>Your tools, wired into one system that runs itself.</>}
          description="I connect the apps you already use to an automation core. Work flows in from one side, finished tasks come out the other — no copy-paste, no chasing."
        />

        <Reveal>
          <div
            ref={container}
            className="panel relative mt-14 grid grid-cols-3 items-stretch gap-6 overflow-hidden rounded-xl p-7 sm:p-12"
          >
            <div className="blueprint-fine pointer-events-none absolute inset-0 opacity-[0.25]" />

            {/* inputs */}
            <div className="relative z-10 flex flex-col justify-between gap-6">
              <Node ref={wa} label="WhatsApp">
                <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
              </Node>
              <Node ref={mail} label="Email">
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </Node>
              <Node ref={shop} label="Store">
                <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              </Node>
              <Node ref={sheet} label="Sheets / CRM">
                <Table2 className="h-5 w-5" strokeWidth={1.5} />
              </Node>
            </div>

            {/* hub */}
            <div className="relative z-10 flex items-center justify-center">
              <div
                ref={hub}
                className="glass-rim grid h-20 w-20 place-items-center rounded-lg bg-raised"
              >
                <div className="grid h-12 w-12 place-items-center rounded-md bg-ember text-carbon-950">
                  <span className="font-mono text-base font-bold">VS</span>
                </div>
              </div>
            </div>

            {/* outputs */}
            <div className="relative z-10 flex flex-col items-end justify-between gap-6">
              <Node ref={cal} className="!flex-row-reverse">
                <CalendarCheck className="h-5 w-5 text-ember" strokeWidth={1.5} />
              </Node>
              <Node ref={report}>
                <FileText className="h-5 w-5 text-ember" strokeWidth={1.5} />
              </Node>
              <Node ref={notify}>
                <BellRing className="h-5 w-5 text-ember" strokeWidth={1.5} />
              </Node>
            </div>

            {/* beams: inputs -> hub */}
            {ins.map((r, i) => (
              <AnimatedBeam
                key={`in-${i}`}
                containerRef={container}
                fromRef={r}
                toRef={hub}
                duration={4 + i * 0.4}
                curvature={i % 2 === 0 ? 14 : -14}
              />
            ))}
            {/* beams: hub -> outputs */}
            {outs.map((r, i) => (
              <AnimatedBeam
                key={`out-${i}`}
                containerRef={container}
                fromRef={hub}
                toRef={r}
                duration={4 + i * 0.4}
                curvature={i % 2 === 0 ? -14 : 14}
              />
            ))}
          </div>
        </Reveal>

        {/* legend */}
        <Reveal>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider text-faint/70">
            <span>in — the apps you already use</span>
            <span className="text-ember">core — automation built &amp; run by VS</span>
            <span>out — meetings booked · reports · alerts</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
