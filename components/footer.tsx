import { MessageCircle, Mail } from "lucide-react";
import { site, navLinks } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      {/* oversized wordmark band */}
      <div className="wrap overflow-hidden py-12">
        <div className="select-none font-display text-[18vw] font-extrabold leading-none tracking-tightest text-ink/[0.05] lg:text-[12rem]">
          {site.brand}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="glass-rim grid h-9 w-9 place-items-center rounded-md font-mono text-[13px] font-bold text-ink">
                {site.initials}
              </span>
              <span className="font-mono text-[13px] tracking-[0.18em] text-ink">
                {site.brand}
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-faint">
              {site.tagline}
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="btn-steel grid h-10 w-10 place-items-center !px-0"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="btn-steel grid h-10 w-10 place-items-center !px-0"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <span className="kicker">Navigate</span>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-faint transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="kicker">Get in touch</span>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#contact" className="text-sm text-faint transition-colors hover:text-ink">
                  Start a project
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-sm text-faint transition-colors hover:text-ink">
                  Email me
                </a>
              </li>
              <li className="text-sm text-faint">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="wrap flex flex-col items-start justify-between gap-2 border-t border-line py-6 font-mono text-[11px] uppercase tracking-wider text-faint/70 sm:flex-row sm:items-center">
          <span>
            © {year} {site.name}
          </span>
          <span>Designed &amp; built by {site.name} · Next.js</span>
        </div>
      </div>
    </footer>
  );
}
