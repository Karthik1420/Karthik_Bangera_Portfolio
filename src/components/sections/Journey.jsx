// src/components/sections/Journey.jsx
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Award, Star } from 'lucide-react';
import FadeUp from '../motion/FadeUp';
import { journeyEntries } from '../../data/journey';

const typeConfig = {
  education: {
    icon: GraduationCap,
    color: '#5B6EF5',
    bg: 'rgba(91,110,245,0.1)',
    border: 'rgba(91,110,245,0.25)',
    label: 'Education',
  },
  achievement: {
    icon: Trophy,
    color: '#FBBF24',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.2)',
    label: 'Achievement',
  },
  certification: {
    icon: Award,
    color: '#34D399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.2)',
    label: 'Certification',
  },
};

function TimelineEntry({ entry, index, total }) {
  const config = typeConfig[entry.type] || typeConfig.education;
  const Icon = config.icon;
  const isLast = index === total - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="journey-entry"
      style={{
        display: 'grid',
        gridTemplateColumns: '120px 1px 1fr',
        gap: '0 2rem',
        paddingBottom: isLast ? '0' : '3.5rem',
        position: 'relative',
      }}
    >
      {/* LEFT — Year anchor */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          paddingTop: '2px',
          gap: '0.375rem',
        }}
      >
        <span
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 800,
            color: config.color,
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          {entry.period.split('–')[0].trim().split(' ').slice(-1)[0]}
        </span>
        <span
          className="text-mono-label text-tertiary"
          style={{ fontSize: '0.625rem', textAlign: 'right', lineHeight: 1.4 }}
        >
          {entry.typeLabel}
        </span>
      </div>

      {/* CENTER — Timeline track */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        {/* Vertical line (down from dot) */}
        {!isLast && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '28px',
              bottom: '-3.5rem',
              left: '50%',
              width: '1px',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(to bottom, rgba(91,110,245,0.4), rgba(155,123,255,0.2), transparent)',
            }}
          />
        )}
        {/* Dot */}
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: config.bg,
            border: `1px solid ${config.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          <Icon size={14} style={{ color: config.color }} aria-hidden="true" />
        </div>
      </div>

      {/* RIGHT — Card */}
      <div
        className="rounded-2xl transition-colors duration-300"
        style={{
          background: 'rgba(18,18,24,0.8)',
          border: '1px solid rgba(255,255,255,0.07)',
          padding: '1.25rem 1.5rem',
          marginTop: '-4px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = config.border;
          e.currentTarget.style.background = config.bg;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
          e.currentTarget.style.background = 'rgba(18,18,24,0.8)';
        }}
      >
        {/* Period + org row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
          <span
            className="text-mono-label"
            style={{ color: config.color, fontSize: '0.6875rem' }}
          >
            {entry.period}
          </span>
          {entry.location && (
            <span className="text-mono-label text-tertiary" style={{ fontSize: '0.6875rem' }}>
              {entry.location}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-primary"
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            marginBottom: '0.25rem',
          }}
        >
          {entry.title}
        </h3>

        {/* Organization */}
        <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: 500 }}>
          {entry.organization}
        </p>

        {/* Description */}
        <p
          className="text-secondary"
          style={{ fontSize: '0.875rem', lineHeight: '1.65', marginBottom: '0.875rem' }}
        >
          {entry.description}
        </p>

        {/* Highlights */}
        {entry.highlights && entry.highlights.length > 0 && (
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            {entry.highlights.map((h) => (
              <li
                key={h}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  color: '#A6A6B3',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: config.color,
                    flexShrink: 0,
                    marginTop: '7px',
                  }}
                />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default function Journey() {
  return (
    <section id="journey" style={{ background: '#0D0D13', paddingTop: 'clamp(4rem, 8vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 8rem)' }}>
      <div className="container-wide">
        {/* Label */}
        <FadeUp>
          <span className="section-label">04 · Journey</span>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.1}>
          <h2
            className="text-h2 text-primary mt-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif", maxWidth: '560px' }}
          >
            Where it's come from,{' '}
            <span style={{ color: '#6E6E7C' }}>where it's going.</span>
          </h2>
        </FadeUp>

        {/* Timeline */}
        <div className="mt-14" style={{ maxWidth: '860px' }}>
          {journeyEntries.map((entry, i) => (
            <TimelineEntry
              key={entry.id}
              entry={entry}
              index={i}
              total={journeyEntries.length + 1}
            />
          ))}

          {/* Future placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1px 1fr',
              gap: '0 2rem',
            }}
          >
            {/* Year col */}
            <div />
            {/* Line col */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px dashed rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '0',
                }}
                aria-hidden="true"
              >
                <span style={{ color: '#3A3A4A', fontSize: '16px', lineHeight: 1 }}>+</span>
              </div>
            </div>
            {/* Content col */}
            <p
              className="text-tertiary italic"
              style={{ paddingTop: '0.375rem', fontSize: '0.875rem' }}
            >
              First internship / experience — coming soon
            </p>
          </motion.div>
        </div>

        {/* Mobile styles */}
        <style>{`
          @media (max-width: 640px) {
            .journey-entry {
              grid-template-columns: 1fr !important;
              gap: 0.75rem !important;
            }
            .journey-entry > div:first-child {
              align-items: flex-start !important;
              flex-direction: row !important;
              gap: 0.75rem !important;
            }
            .journey-entry > div:nth-child(2) {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
