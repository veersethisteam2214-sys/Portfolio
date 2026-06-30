"use client";

import { useState } from "react";
import { Mail, MessageCircle, ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { Globe } from "@/components/ui/globe";
import { Sparkles } from "@/components/ui/sparkles";
import { site } from "@/lib/site";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Website",
    budget: "$300 – $900",
    message: "",
  });

  // Opens the visitor's email app pre-filled. Swap for Formspree/Resend later
  // to have submissions land in an inbox automatically (see README).
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New project inquiry — ${form.type} (${form.name})`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const waText = encodeURIComponent(
    "Hi Veer — I saw your site and I'd like to discuss a project."
  );

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="aurora-ion opacity-40" />
      <Sparkles count={22} color="hsl(200 90% 80%)" className="opacity-60" />
      <div className="blueprint-fine pointer-events-none absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(70%_60%_at_50%_50%,#000,transparent_85%)]" />
      <div className="wrap relative grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* left */}
        <div>
          <Reveal className="flex items-center gap-3">
            <span className="kicker">[ 06 ]</span>
            <span className="rule max-w-[40px]" />
            <span className="kicker">Contact</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1] tracking-tightest text-ink sm:text-5xl">
              Got something
              <br />
              worth building?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-faint">
              Tell me what you&apos;re trying to do. I reply within a day, and the
              first conversation is always free — no obligation.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-9 flex items-center gap-6 border-y border-line py-6">
              <div className="w-28 shrink-0 sm:w-36">
                <Globe />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-ink">
                  6 continents
                </div>
                <p className="mt-1 max-w-[16rem] text-sm text-faint">
                  Clients across the map — everything done remotely, around your
                  timezone.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-2 divide-y divide-line border-b border-line">
              <a
                href={`https://wa.me/${site.whatsapp}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-4"
              >
                <MessageCircle className="h-5 w-5 text-ember" strokeWidth={1.5} />
                <span className="flex-1">
                  <span className="block text-sm font-medium text-ink">WhatsApp</span>
                  <span className="font-mono text-xs text-faint">
                    Fastest way to reach me
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={`mailto:${site.email}`} className="group flex items-center gap-4 py-4">
                <Mail className="h-5 w-5 text-ember" strokeWidth={1.5} />
                <span className="flex-1">
                  <span className="block text-sm font-medium text-ink">Email</span>
                  <span className="font-mono text-xs text-faint">{site.email}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="flex items-center gap-4 py-4">
                <MapPin className="h-5 w-5 text-ember" strokeWidth={1.5} />
                <span className="flex-1">
                  <span className="block text-sm font-medium text-ink">Based remote</span>
                  <span className="font-mono text-xs text-faint">{site.location}</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* form */}
        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="glass-rim rounded-xl p-2">
            <div className="panel rounded-lg p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name">
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="cinput"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="cinput"
                  />
                </Field>
                <Field label="Project type">
                  <select
                    name="project-type"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="cinput"
                  >
                    <option>Website</option>
                    <option>AI Automation</option>
                    <option>Chatbot / AI Agent</option>
                    <option>E-commerce</option>
                    <option>Data / Lead Gen</option>
                    <option>Something else</option>
                  </select>
                </Field>
                <Field label="Budget">
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="cinput"
                  >
                    <option>Under $300</option>
                    <option>$300 – $900</option>
                    <option>$900 – $3,000</option>
                    <option>$3,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </Field>
              </div>
              <Field label="Tell me about your project" className="mt-4 block">
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What are you trying to build or automate?"
                  className="cinput resize-none"
                />
              </Field>
              <Magnetic className="mt-5 block w-full">
                <button type="submit" className="btn-ember w-full">
                  Send message
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </Magnetic>
              <p className="mt-3 text-center font-mono text-[11px] text-faint">
                Opens your email app, pre-filled. Prefer WhatsApp? Use the link.
              </p>
            </div>
          </form>
        </Reveal>
      </div>

      <style jsx global>{`
        .cinput {
          width: 100%;
          border-radius: 8px;
          border: 1px solid hsl(var(--line));
          background: hsl(var(--bg) / 0.7);
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          color: hsl(var(--ink));
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .cinput::placeholder {
          color: hsl(var(--faint) / 0.7);
        }
        .cinput:focus {
          border-color: hsl(var(--ember) / 0.6);
          box-shadow: inset 0 0 0 1px hsl(var(--ember) / 0.4);
        }
        .cinput option {
          background: hsl(var(--surface));
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-faint">
        {label}
      </span>
      {children}
    </label>
  );
}
