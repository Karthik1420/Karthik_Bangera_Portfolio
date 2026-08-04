// src/components/case-study/CaseStudyHero.jsx
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { useNavigate } from 'react-router-dom';

export default function CaseStudyHero({ project }) {
  const navigate = useNavigate();

  return (
    <section
      className="relative overflow-hidden"
      aria-label={`${project.title} — Case Study`}
      style={{
        background: 'linear-gradient(180deg, #08080D 0%, #0A0A0F 60%, #0D0D14 100%)',
        paddingTop: '7rem',
        paddingBottom: '5rem',
      }}
    >
      {/* Ambient glow top-center */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(91,110,245,0.1) 0%, rgba(155,123,255,0.05) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Subtle grid lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container-wide relative">
        {/* Back button */}
        <motion.button
          onClick={() => navigate('/#work')}
          className="btn-ghost mb-12"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ gap: '0.5rem' }}
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to work
        </motion.button>

        <div className="max-w-6xl">
          {/* Category + status badges */}
          <motion.div
            className="flex flex-wrap items-center gap-3 mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-mono-label text-tertiary">{project.category}</span>
            <span className="text-tertiary" aria-hidden="true">·</span>
            <span
              className={`status-badge ${
                project.status === 'live'
                  ? 'status-live'
                  : project.status === 'development'
                  ? 'status-development'
                  : 'status-completed'
              }`}
            >
              {project.status === 'live' && (
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#34D399' }} />
              )}
              {project.statusLabel}
            </span>
            {project.featured && (
              <span
                className="text-mono-label px-2 py-0.5 rounded"
                style={{
                  background: 'rgba(91,110,245,0.12)',
                  border: '1px solid rgba(91,110,245,0.3)',
                  color: '#5B6EF5',
                  fontSize: '0.625rem',
                }}
              >
                Featured
              </span>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-hero text-primary mb-5"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {project.title}
          </motion.h1>

          {/* Accent line under title */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transformOrigin: 'left',
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #5B6EF5, #9B7BFF)',
              borderRadius: '999px',
              marginBottom: '1.5rem',
            }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-h3 text-secondary mb-10"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 400,
              maxWidth: '680px',
              lineHeight: 1.4,
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.subtitle}
          </motion.p>

          {/* Glass meta card */}
          <motion.div
            className="inline-flex flex-wrap gap-8 px-6 py-4 rounded-2xl mb-10"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {[
              { label: 'Role', value: project.role },
              { label: 'Year', value: project.year },
              { label: 'Status', value: project.statusLabel },
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col gap-1">
                <p className="text-mono-label text-tertiary">{item.label}</p>
                <p className="text-primary font-semibold" style={{ fontSize: '0.9375rem' }}>
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA links */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon size={14} aria-hidden="true" />
                GitHub
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
