"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { Magnetic } from "@/components/ui/magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // active-section tracking for the animated nav state
    const ids = navLinks.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-[20px] px-3 py-2 transition-all duration-500 ${
          scrolled
            ? "glass-rim bg-bg/70 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        {/* wordmark */}
        <a href="#top" className="flex items-center gap-2.5 pl-1">
          <span className="glass-rim grid h-9 w-9 place-items-center rounded-lg">
            <span className="font-mono text-[13px] font-bold tracking-tight text-ink">
              {site.initials}
            </span>
          </span>
          <span className="hidden font-mono text-[12px] tracking-[0.18em] text-ink sm:block">
            {site.brand}
          </span>
        </a>

        {/* floating dock links with animated active pill */}
        <div className="hidden items-center md:flex">
          {navLinks.map((l) => {
            const on = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  on ? "text-ink" : "text-faint hover:text-ink"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg border border-line bg-raised/80"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {l.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Magnetic className="hidden md:inline-block" strength={0.4}>
            <a href="#contact" className="btn-ember beam-border overflow-hidden rounded-md">
              Start a project
            </a>
          </Magnetic>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="btn-steel grid h-10 w-10 place-items-center !rounded-lg !px-0 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <div
        className={`absolute inset-x-4 top-[4.5rem] overflow-hidden rounded-[20px] transition-all duration-300 md:hidden ${
          open ? "max-h-[26rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="glass-rim rounded-[20px] bg-bg/90 p-3 backdrop-blur-xl">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg border-b border-line/60 px-3 py-3.5 text-ink last:border-0"
            >
              <span className="font-mono text-[11px] text-ember">{l.num}</span>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-ember mt-3 w-full">
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}
