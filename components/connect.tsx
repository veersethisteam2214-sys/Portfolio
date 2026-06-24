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
import { site } from "@/lib/site";

const Node = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; label?: string; right?: boolean }
>(({ children, label, right }, ref) => (
  <div className={`flex items-center gap-3 ${right ? "flex-row-reverse" : ""}`}>
    <div
      ref={ref}
      className="glass-rim z-10 grid h-12 w-12 place-items-center rounded-lg bg-surface text-ink"
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
    <section className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      {/* ion-tinted "lab" background */}
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
            className="beam-border panel relative mt-14 grid grid-cols-3 items-stretch gap-6 overflow-hidden rounded-[20px] p-7 sm:p-12"
          >
            <div className="blueprint-fine pointer-events-none absolute inset-0 opacity-[0.2]" />

            {/* inputs */}
            <div className="relative z-10 flex flex-col justify-between gap-6">
              <Node ref={wa} label="WhatsApp"><MessageCircle className="h-5 w-5" strokeWidth={1.5} /></Node>
              <Node ref={mail} label="Email"><Mail className="h-5 w-5" strokeWidth={1.5} /></Node>
              <Node ref={shop} label="Store"><ShoppingBag className="h-5 w-5" strokeWidth={1.5} /></Node>
              <Node ref={sheet} label="Sheets / CRM"><Table2 className="h-5 w-5" strokeWidth={1.5} /></Node>
            </div>

            {/* core = profile pic */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative">
                {/* expanding pulse rings */}
                <span className="absolute inset-0 animate-pulse-ring rounded-[50%] border border-ion/40" />
                <span
                  className="absolute inset-0 animate-pulse-ring rounded-[50%] border border-ember/40"
                  style={{ animationDelay: "1.5s" }}
                />
                <div
                  ref={hub}
                  className="beam-border relative grid h-24 w-24 place-items-center rounded-[50%] bg-bg p-1.5"
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
            <div className="relative z-10 flex flex-col items-end justify-between gap-6">
              <Node ref={cal} right><CalendarCheck className="h-5 w-5 text-ember" strokeWidth={1.5} /></Node>
              <Node ref={report} right><FileText className="h-5 w-5 text-ember" strokeWidth={1.5} /></Node>
              <Node ref={notify} right><BellRing className="h-5 w-5 text-ember" strokeWidth={1.5} /></Node>
            </div>

            {/* beams in: ion energy */}
            {ins.map((r, i) => (
              <AnimatedBeam
                key={`in-${i}`}
                containerRef={container}
                fromRef={r}
                toRef={hub}
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
