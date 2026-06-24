"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { Magnetic } from "@/components/ui/magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? "border-line bg-bg/80 backdrop-blur-xl"
            : "border-transparent"
        }`}
      >
        <nav className="wrap flex h-16 items-center justify-between">
          {/* wordmark */}
          <a href="#top" className="flex items-center gap-3">
            <span className="glass-rim grid h-9 w-9 place-items-center rounded-md">
              <span className="font-mono text-[13px] font-bold tracking-tight text-ink">
                {site.initials}
              </span>
            </span>
            <span className="hidden font-mono text-[13px] tracking-[0.18em] text-ink sm:block">
              {site.brand}
            </span>
          </a>

          {/* links with index numbers */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group flex items-center gap-1.5 text-sm text-faint transition-colors hover:text-ink"
              >
                <span className="font-mono text-[10px] text-faint/60 group-hover:text-ember">
                  {l.num}
                </span>
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 lg:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-[50%] bg-ember opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-[50%] bg-ember" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
                Available
              </span>
            </span>
            <Magnetic className="hidden md:inline-block">
              <a href="#contact" className="btn-ember">
                Start a project
              </a>
            </Magnetic>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="btn-steel grid h-10 w-10 place-items-center !px-0 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="border-b border-line bg-bg/95 backdrop-blur-xl md:hidden">
          <div className="wrap flex flex-col py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 border-b border-line/60 py-3.5 text-ink last:border-0"
              >
                <span className="font-mono text-[11px] text-ember">{l.num}</span>
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-ember mt-4 w-full"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
