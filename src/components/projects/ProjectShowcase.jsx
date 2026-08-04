// src/components/projects/ProjectShowcase.jsx
// Full-width alternating showcase — the visual centerpiece of the portfolio

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import ProjectBrowserMockup from './ProjectBrowserMockup';

function StatusBadge({ status, label }) {
  const map = {
    live: 'status-live',
    completed: 'status-completed',
    development: 'status-development',
  };
  return (
    <span className={`status-badge ${map[status] || 'status-completed'}`}>
      {status === 'live' && (
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: '#34D399' }}
          aria-hidden="true"
        />
      )}
      {label}
    </span>
  );
}

export default function ProjectShowcase({ project, index }) {
  const navigate = useNavigate();
  const isFlipped = index % 2 !== 0; // Even = visual right, Odd = visual left

  const num = String(project.order).padStart(2, '0');

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative project-showcase-item"
      style={{
        paddingTop: project.featured ? '5.5rem' : '4.5rem',
        paddingBottom: project.featured ? '5.5rem' : '4.5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Featured accent line */}
      {project.featured && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #5B6EF5, #9B7BFF, transparent)',
          }}
        />
      )}

      <div
        className="grid gap-12 md:gap-16 items-center"
        style={{
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          direction: isFlipped ? 'rtl' : 'ltr',
        }}
      >
        {/* Content column */}
        <div className="flex flex-col gap-6" style={{ direction: 'ltr' }}>
          {/* Project number + featured */}
          <div className="flex items-center gap-3">
            <span
              className="text-mono-label"
              style={{ color: '#6E6E7C', fontSize: '0.8125rem' }}
            >
              {num}
            </span>
            {project.featured && (
              <span
                className="text-mono-label px-2 py-0.5 rounded"
                style={{
                  background: 'rgba(91,110,245,0.1)',
                  border: '1px solid rgba(91,110,245,0.25)',
                  color: '#5B6EF5',
                  fontSize: '0.625rem',
                }}
              >
                Featured
              </span>
            )}
            <StatusBadge status={project.status} label={project.statusLabel} />
          </div>

          {/* Title */}
          <div>
            <h3
              className="text-primary"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: project.featured ? 'clamp(1.625rem, 3.5vw, 2.5rem)' : 'clamp(1.375rem, 2.5vw, 2rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              {project.title}
            </h3>
            <p
              className="text-secondary mt-2"
              style={{ fontSize: '1rem', fontWeight: '500' }}
            >
              {project.subtitle}
            </p>
          </div>

          {/* Category */}
          <p className="text-mono-label text-tertiary">{project.category}</p>

          {/* Description */}
          <p
            className="text-body text-secondary"
            style={{ lineHeight: '1.75', maxWidth: '460px' }}
          >
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate(`/projects/${project.slug}`)}
              className="btn-secondary"
              style={{ gap: '0.5rem' }}
            >
              View Case Study
              <ArrowRight size={14} aria-hidden="true" />
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ gap: '0.375rem' }}
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
                className="btn-ghost"
                style={{ gap: '0.375rem' }}
              >
                <GithubIcon size={14} aria-hidden="true" />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Visual column */}
        <div style={{ direction: 'ltr' }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="cursor-pointer"
            onClick={() => navigate(`/projects/${project.slug}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(`/projects/${project.slug}`)}
            aria-label={`View ${project.title} case study`}
            style={{
              filter: 'saturate(0.85)',
              transition: 'filter 0.4s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = 'saturate(1)')}
            onMouseLeave={(e) => (e.currentTarget.style.filter = 'saturate(0.85)')}
          >
            <ProjectBrowserMockup project={project} flipped={isFlipped} />
          </motion.div>
        </div>
      </div>

      {/* Mobile: stack columns */}
      <style>{`
        @media (max-width: 767px) {
          .project-showcase-item .grid {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
        }
      `}</style>
    </motion.article>
  );
}
