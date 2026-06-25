"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Portrait with a graceful fallback. Drop your photo at /public/veer.jpg and it
 * appears automatically; until then a clean monogram plate shows instead.
 */
export function Portrait() {
  const [ok, setOk] = useState(true);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-raised">
      {ok ? (
        <Image
          src="/veer.jpg"
          alt={`${site.name} — ${site.role}`}
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 480px"
          onError={() => setOk(false)}
          className="object-cover object-top grayscale contrast-[1.05] transition-all duration-700 hover:grayscale-0"
        />
      ) : (
        <div className="grid h-full w-full place-items-center">
          <div className="blueprint-fine absolute inset-0 opacity-30" />
          <span className="relative font-display text-7xl font-extrabold tracking-tightest text-ink/15">
            {site.initials}
          </span>
          <span className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-wider text-faint/70">
            drop your photo at /public/veer.jpg
          </span>
        </div>
      )}

      {/* subtle top sheen on the glass */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
    </div>
  );
}
