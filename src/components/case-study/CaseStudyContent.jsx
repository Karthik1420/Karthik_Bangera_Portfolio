// src/components/case-study/CaseStudyContent.jsx
// Reusable case study body — renders from project data fields
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Zap, AlertCircle, Lightbulb, Rocket } from 'lucide-react';
import FadeUp from '../motion/FadeUp';
import { getSortedProjects } from '../../data/projects';

// ─── Section heading with accent dot ────────────────────────────────────────
function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div
        style={{
          width: '4px',
          height: '28px',
          borderRadius: '999px',
          background: 'linear-gradient(180deg, #5B6EF5, #9B7BFF)',
          flexShrink: 0,
        }}
      />
      <h2
        className="text-h2 text-primary"
        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
      >
        {children}
      </h2>
    </div>
  );
}

// ─── Section divider ─────────────────────────────────────────────────────────
function Divider() {
  return (
    <div
      style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
        margin: '5rem 0',
      }}
    />
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function CaseStudyContent({ project }) {
  const navigate = useNavigate();
  const all = getSortedProjects();
  const currentIndex = all.findIndex((p) => p.slug === project.slug);
  const prev = currentIndex > 0 ? all[currentIndex - 1] : null;
  const next = currentIndex < all.length - 1 ? all[currentIndex + 1] : null;

  return (
    <div className="bg-base">
      <div className="container-wide py-20">
        <div className="max-w-6xl mx-auto">

          {/* ── Context / Problem / Solution ─── */}
          <FadeUp>
            <div
              className="grid gap-6 mb-20"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
            >
              {[
                {
                  label: 'THE CONTEXT',
                  text: project.context,
                  accent: '#5B6EF5',
                  bg: 'rgba(91,110,245,0.04)',
                  border: 'rgba(91,110,245,0.15)',
                },
                {
                  label: 'THE PROBLEM',
                  text: project.problem,
                  accent: '#F87171',
                  bg: 'rgba(248,113,113,0.04)',
                  border: 'rgba(248,113,113,0.15)',
                },
                {
                  label: 'THE SOLUTION',
                  text: project.solution,
                  accent: '#34D399',
                  bg: 'rgba(52,211,153,0.04)',
                  border: 'rgba(52,211,153,0.15)',
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="rounded-2xl flex flex-col gap-4"
                  style={{
                    background: item.bg,
                    border: `1px solid ${item.border}`,
                    padding: '1.75rem',
                  }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: item.accent,
                        flexShrink: 0,
                      }}
                    />
                    <p
                      className="text-mono-label"
                      style={{ color: item.accent }}
                    >
                      {item.label}
                    </p>
                  </div>
                  <p
                    className="text-secondary"
                    style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeUp>

          <Divider />

          {/* ── Key Features ─── */}
          <FadeUp>
            <SectionHeading>Key Features</SectionHeading>
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
            >
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.45 }}
                  className="flex items-start gap-3 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    padding: '1rem 1.25rem',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  whileHover={{
                    backgroundColor: 'rgba(91,110,245,0.05)',
                    borderColor: 'rgba(91,110,245,0.2)',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #5B6EF5, #9B7BFF)',
                      flexShrink: 0,
                      marginTop: '7px',
                    }}
                  />
                  <span style={{ color: '#C4C4D1', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeUp>

          <Divider />

          {/* ── Tech Stack ─── */}
          <FadeUp>
            <SectionHeading>Tech Stack</SectionHeading>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="tech-tag"
                  style={{ fontSize: '0.8125rem', padding: '0.4rem 0.9rem' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeUp>

          <Divider />

          {/* ── Development Process ─── */}
          <FadeUp>
            <SectionHeading>Development Process</SectionHeading>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}
            >
              {project.process.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden flex flex-col gap-3"
                  style={{
                    background: 'rgba(23,23,31,0.8)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    padding: '1.5rem',
                  }}
                >
                  {/* Step number accent */}
                  <div
                    className="absolute top-0 right-0"
                    style={{
                      fontSize: '4rem',
                      fontWeight: 900,
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      color: 'rgba(91,110,245,0.06)',
                      lineHeight: 1,
                      transform: 'translate(8px, -8px)',
                      pointerEvents: 'none',
                      userSelect: 'none',
                    }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-mono-label text-accent">{step.step}</p>
                  <p
                    className="text-primary font-semibold"
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontSize: '1.0625rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </p>
                  <p className="text-secondary" style={{ fontSize: '0.875rem', lineHeight: '1.65' }}>
                    {step.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeUp>

          <Divider />

          {/* ── Challenges & Learnings ─── */}
          <FadeUp>
            <SectionHeading>Challenges &amp; Learnings</SectionHeading>
            <div
              className="grid gap-8"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
            >
              {/* Challenges */}
              <div
                className="rounded-2xl flex flex-col gap-4"
                style={{
                  background: 'rgba(248,113,113,0.03)',
                  border: '1px solid rgba(248,113,113,0.12)',
                  padding: '1.75rem',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle size={15} style={{ color: '#F87171' }} />
                  <p className="text-mono-label" style={{ color: '#F87171' }}>Challenges</p>
                </div>
                <ul className="flex flex-col gap-4">
                  {project.challenges.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                      style={{ color: '#B4B4C4', fontSize: '0.9375rem', lineHeight: '1.7' }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: '#F87171',
                          flexShrink: 0,
                          marginTop: '9px',
                        }}
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              <div
                className="rounded-2xl flex flex-col gap-4"
                style={{
                  background: 'rgba(52,211,153,0.03)',
                  border: '1px solid rgba(52,211,153,0.12)',
                  padding: '1.75rem',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb size={15} style={{ color: '#34D399' }} />
                  <p className="text-mono-label" style={{ color: '#34D399' }}>Learnings</p>
                </div>
                <ul className="flex flex-col gap-4">
                  {project.learnings.map((l, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                      style={{ color: '#B4B4C4', fontSize: '0.9375rem', lineHeight: '1.7' }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: '#34D399',
                          flexShrink: 0,
                          marginTop: '9px',
                        }}
                      />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>

          <Divider />

          {/* ── Future Improvements ─── */}
          <FadeUp>
            <SectionHeading>Future Improvements</SectionHeading>
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
            >
              {project.futureImprovements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="flex items-start gap-3 rounded-xl"
                  style={{
                    background: 'rgba(155,123,255,0.03)',
                    border: '1px solid rgba(155,123,255,0.1)',
                    padding: '1rem 1.25rem',
                    color: '#B4B4C4',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                  }}
                >
                  <Rocket
                    size={14}
                    style={{ color: '#9B7BFF', flexShrink: 0, marginTop: '3px' }}
                  />
                  {item}
                </motion.div>
              ))}
            </div>
          </FadeUp>

          <Divider />

          {/* ── Prev / Next navigation ─── */}
          <FadeUp>
            <div className="grid grid-cols-2 gap-6 mb-12">
              {prev ? (
                <motion.button
                  onClick={() => navigate(`/projects/${prev.slug}`)}
                  className="text-left rounded-2xl group"
                  style={{
                    background: 'rgba(23,23,31,0.8)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'border-color 0.25s, background 0.25s',
                  }}
                  whileHover={{
                    borderColor: 'rgba(91,110,245,0.3)',
                    backgroundColor: 'rgba(91,110,245,0.04)',
                  }}
                >
                  <p className="text-mono-label text-tertiary mb-3 flex items-center gap-1.5">
                    <ArrowLeft size={10} />
                    Previous Project
                  </p>
                  <p
                    className="text-primary font-semibold"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '1.125rem' }}
                  >
                    {prev.title}
                  </p>
                </motion.button>
              ) : (
                <div />
              )}

              {next ? (
                <motion.button
                  onClick={() => navigate(`/projects/${next.slug}`)}
                  className="text-right rounded-2xl"
                  style={{
                    background: 'rgba(23,23,31,0.8)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'border-color 0.25s, background 0.25s',
                  }}
                  whileHover={{
                    borderColor: 'rgba(91,110,245,0.3)',
                    backgroundColor: 'rgba(91,110,245,0.04)',
                  }}
                >
                  <p className="text-mono-label text-tertiary mb-3 flex items-center gap-1.5 justify-end">
                    Next Project
                    <ArrowRight size={10} />
                  </p>
                  <p
                    className="text-primary font-semibold"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '1.125rem' }}
                  >
                    {next.title}
                  </p>
                </motion.button>
              ) : (
                <div />
              )}
            </div>
          </FadeUp>

          {/* ── CTA Block ─── */}
          <FadeUp delay={0.1}>
            <motion.div
              className="relative overflow-hidden rounded-3xl text-center"
              style={{
                padding: '4rem 3rem',
                background: 'rgba(91,110,245,0.04)',
                border: '1px solid rgba(91,110,245,0.2)',
              }}
              whileHover={{ borderColor: 'rgba(91,110,245,0.35)' }}
            >
              {/* Background glow */}
              <div
                className="absolute pointer-events-none"
                aria-hidden="true"
                style={{
                  bottom: '-60px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '400px',
                  height: '200px',
                  background: 'radial-gradient(ellipse, rgba(91,110,245,0.15) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              <p
                className="text-mono-label text-accent mb-4"
                style={{ position: 'relative' }}
              >
                Let's Build Something
              </p>
              <p
                className="text-h2 text-primary mb-3"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  position: 'relative',
                }}
              >
                Liked what you saw?
              </p>
              <p
                className="text-secondary mb-8"
                style={{ fontSize: '1.0625rem', maxWidth: '420px', margin: '0 auto 2rem', position: 'relative' }}
              >
                I'm available for Design Engineering, Frontend, and Full-Stack opportunities.
              </p>
              <a
                href="mailto:karthikbangera1406@gmail.com"
                className="btn-primary"
                style={{ position: 'relative', fontSize: '1rem', padding: '0.875rem 2rem' }}
              >
                Get in Touch
              </a>
            </motion.div>
          </FadeUp>

        </div>
      </div>
    </div>
  );
}
