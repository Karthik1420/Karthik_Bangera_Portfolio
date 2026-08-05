// src/components/sections/About.jsx
import { motion } from 'framer-motion';
import FadeUp from '../motion/FadeUp';

const principles = [
  {
    icon: '◎    ',
    title: 'Clarity over cleverness',
    body: 'The best solutions are the ones that feel obvious in retrospect — not impressive at first glance.',
  },
  {
    icon: '◈    ',
    title: 'Details compound',
    body: 'Small intentional decisions accumulate into products that feel truly crafted rather than merely functional.',
  },
  {
    icon: '◷    ',
    title: 'Ship, then refine',
    body: 'Real feedback from real users is worth more than a perfect spec. Build, learn, improve.',
  },
];

const credibility = [
  {
    label: 'BCA — SDM College of Business Management',
    sub: 'CGPA: 9.12',
    section: 'Education',
  },
  {
    label: 'CEO — SYGMA National-Level Technical Fest',
    sub: 'SDM College of Business Management',
    section: 'Leadership',
  },
];

// Abstract SVG geometry for the visual column
function AbstractVisual() {
  return (
    <div
      className="relative w-full h-full min-h-80 flex items-center justify-center"
      aria-hidden="true"
    >
      <svg
        width="320"
        height="320"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90"
      >
        {/* Grid dots */}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={40 + col * 34}
              cy={40 + row * 34}
              r="1.5"
              fill="rgba(255,255,255,0.08)"
            />
          ))
        )}

        {/* Connecting lines — network nodes */}
        <line x1="74" y1="74" x2="160" y2="160" stroke="rgba(91,110,245,0.25)" strokeWidth="1" />
        <line x1="160" y1="160" x2="246" y2="108" stroke="rgba(155,123,255,0.2)" strokeWidth="1" />
        <line x1="160" y1="160" x2="200" y2="246" stroke="rgba(79,209,232,0.18)" strokeWidth="1" />
        <line x1="108" y1="200" x2="160" y2="160" stroke="rgba(91,110,245,0.15)" strokeWidth="1" />

        {/* Node dots */}
        <circle cx="74" cy="74" r="4" fill="#5B6EF5" fillOpacity="0.5" />
        <circle cx="246" cy="108" r="4" fill="#9B7BFF" fillOpacity="0.5" />
        <circle cx="108" cy="200" r="4" fill="#5B6EF5" fillOpacity="0.4" />
        <circle cx="200" cy="246" r="4" fill="#4FD1E8" fillOpacity="0.4" />

        {/* Center node — larger, gradient */}
        <circle cx="160" cy="160" r="10" fill="url(#centerGrad)" />
        <circle cx="160" cy="160" r="20" fill="url(#centerGrad)" fillOpacity="0.15" />

        {/* Design labels */}
        <text x="50" y="62" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(91,110,245,0.6)" letterSpacing="1">
          DESIGN
        </text>
        <text x="220" y="104" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(155,123,255,0.6)" letterSpacing="1">
          BUILD
        </text>
        <text x="82" y="215" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(91,110,245,0.5)" letterSpacing="1">
          SHIP
        </text>
        <text x="170" y="262" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(79,209,232,0.5)" letterSpacing="1">
          REFINE
        </text>

        {/* Gradient defs */}
        <defs>
          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5B6EF5" />
            <stop offset="100%" stopColor="#9B7BFF" />
          </radialGradient>
        </defs>
      </svg>

      {/* Glass overlay cards */}
      <div
        className="absolute top-4 right-4 px-3 py-2 rounded-lg"
        style={{
          background: 'rgba(23,23,31,0.8)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          fontSize: '0.6875rem',
          fontFamily: "'JetBrains Mono', monospace",
          color: '#6E6E7C',
          letterSpacing: '0.1em',
        }}
      >
        Design ↔ Engineering
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-spacing bg-base">
      <div className="container-wide">
        {/* Section label */}
        <FadeUp>
          <span className="section-label">01 · About</span>
        </FadeUp>

        {/* Two-column layout */}
        <div
          className="mt-12 grid gap-16 items-start"
          style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)' }}
        >
          {/* LEFT — Abstract visual */}
          <FadeUp delay={0.1}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(17,17,24,0.6)',
                border: '1px solid rgba(255,255,255,0.07)',
                minHeight: '340px',
              }}
            >
              <AbstractVisual />
            </div>
          </FadeUp>

          {/* RIGHT — Content */}
          <div className="flex flex-col gap-8">
            <FadeUp delay={0.15}>
              <h2 className="text-h2 text-primary" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                I build things end-to-end because the gap between design and engineering is where most products lose their soul.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-col gap-4 text-secondary text-body">
                <p>
                  I'm a BCA graduate from SDM College of Business Management, Mangalore with a strong interest in product design and full-stack engineering. I work across the entire stack: React interfaces, FastAPI backends, and PostgreSQL databases.
                </p>
                <p>
                  Beyond code, I think in product terms user flows, information hierarchy, interaction design. I'm exploring AI-assisted development and how intelligent systems can accelerate thoughtful product building.
                </p>
              </div>
            </FadeUp>

            {/* Principles */}
            <FadeUp delay={0.25}>
              <div className="flex flex-col gap-2">
                <p className="text-mono-label text-tertiary mb-2">Principles</p>
                {principles.map((p, i) => (
                  <motion.div
                    key={p.title}
                    className="principle-card"
                    style={{ padding: '1rem 1.25rem' }}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="text-sm text-primary font-semibold">
                      <span className="text-accent mr-2">{p.icon}</span>
                      {p.title}
                    </p>
                    <p className="text-tertiary mt-1" style={{ fontSize: '0.8125rem', lineHeight: '1.55' }}>
                      {p.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </FadeUp>

            {/* Credibility strip */}
            <FadeUp delay={0.35}>
              <div
                className="flex flex-col gap-3 pt-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {credibility.map((c) => (
                  <div
                    key={c.label}
                    className="flex flex-col gap-1 px-4 py-3 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <span
                      className="text-mono-label text-tertiary"
                      style={{ fontSize: '0.625rem' }}
                    >
                      {c.section}
                    </span>
                    <span className="text-primary font-semibold" style={{ fontSize: '0.875rem' }}>
                      {c.label}
                    </span>
                    <span className="text-tertiary" style={{ fontSize: '0.75rem' }}>
                      {c.sub}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Mobile: stack columns */}
        <style>{`
          @media (max-width: 767px) {
            #about .grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
