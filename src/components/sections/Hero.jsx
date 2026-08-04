// src/components/sections/Hero.jsx
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { siteConfig } from '../../data/siteConfig';

// Glass panel component for the hero visual
function GlassPanel({ children, style = {}, className = '' }) {
  return (
    <div
      className={`absolute rounded-2xl ${className}`}
      style={{
        background: 'rgba(23,23,31,0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Ambient glow blob
function AmbientGlow({ color, style }) {
  return (
    <div
      aria-hidden="true"
      className="absolute rounded-full pointer-events-none animate-ambient"
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(40px)',
        ...style,
      }}
    />
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };

    const el = heroRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => { if (el) el.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-base"
      aria-label="Hero section"
      style={{ paddingTop: '80px' }}
    >
      {/* Ambient background glows */}
      <AmbientGlow
        color="rgba(91,110,245,0.15)"
        style={{ width: '600px', height: '600px', top: '10%', left: '-10%', opacity: 0.4 }}
      />
      <AmbientGlow
        color="rgba(155,123,255,0.1)"
        style={{ width: '500px', height: '500px', bottom: '10%', right: '5%', opacity: 0.3, animationDelay: '4s' }}
      />

      {/* Cursor glow — desktop only */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute pointer-events-none transition-all duration-700 rounded-full"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(91,110,245,0.07) 0%, transparent 70%)',
          transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)`,
          top: '50%',
          left: '50%',
          marginTop: '-200px',
          marginLeft: '-200px',
          filter: 'blur(20px)',
        }}
      />

      <div className="container-wide w-full">
        <div
          className="grid gap-12 items-center"
          style={{ gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,0.8fr)', paddingTop: '2rem', paddingBottom: '6rem' }}
        >
          {/* LEFT — Content */}
          <motion.div
            className="flex flex-col gap-6"
            style={{ gridColumn: '1', maxWidth: '640px' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants}>
              <span className="status-badge status-available inline-flex">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                  style={{ color: '#34D399' }}
                  aria-hidden="true"
                />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <p
                className="text-primary"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                Karthik Bangera
              </p>
              <h1 className="text-hero text-primary" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Transforming ideas into{' '}
                <span className="gradient-text">thoughtful digital experiences.</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.p
              variants={itemVariants}
              className="text-secondary font-medium"
              style={{ fontSize: '1rem', letterSpacing: '0.01em' }}
            >
              Design Engineer · Full-Stack Developer · AI Explorer
            </motion.p>

            {/* Intro */}
            <motion.p
              variants={itemVariants}
              className="text-body text-secondary"
              style={{ maxWidth: '520px', lineHeight: '1.75' }}
            >
              I'm a BCA graduate passionate about designing and building modern digital products. I enjoy transforming ideas into clean, intuitive user experiences using React, FastAPI, and PostgreSQL.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById('work');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                View My Work
                <ChevronRight size={16} aria-hidden="true" />
              </button>
              <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-1 pt-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label="GitHub"
                style={{ padding: '0.5rem', minHeight: '44px', minWidth: '44px', justifyContent: 'center' }}
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label="LinkedIn"
                style={{ padding: '0.5rem', minHeight: '44px', minWidth: '44px', justifyContent: 'center' }}
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={siteConfig.emailLink}
                className="btn-ghost"
                aria-label="Email"
                style={{ padding: '0.5rem', minHeight: '44px', minWidth: '44px', justifyContent: 'center' }}
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Visual composition (desktop only) */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: '480px', perspective: '1200px' }}
          >
            {/* Main photo panel */}
            <GlassPanel
              className="animate-float"
              style={{
                top: '0',
                left: '10%',
                width: '240px',
                height: '300px',
                transform: 'rotate(-2deg)',
                overflow: 'hidden',
                animationDelay: '0s',
              }}
            >
              <img
                src="/src/assets/karthik-bangera.jpg"
                alt="Karthik Bangera — Design Engineer"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.85)' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #17171F 0%, #1D1D27 100%)';
                  e.currentTarget.parentElement.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;height:100%;color:#6E6E7C;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;flex-direction:column;gap:8px">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      <span>Photo</span>
                    </div>
                  `;
                }}
              />
            </GlassPanel>

            {/* Stats panel */}
            <GlassPanel
              className="animate-float"
              style={{
                top: '30px',
                right: '0',
                width: '180px',
                padding: '1.25rem',
                transform: 'rotate(1.5deg)',
                animationDelay: '2s',
              }}
            >
              <p className="text-mono-label text-tertiary mb-3">Academic</p>
              <div className="flex flex-col gap-2">
                <div>
                  <p
                    className="font-display font-black text-primary"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '2rem', lineHeight: '1' }}
                  >
                    9.12
                  </p>
                  <p className="text-tertiary" style={{ fontSize: '0.6875rem', marginTop: '2px' }}>CGPA</p>
                </div>
                <div
                  style={{
                    width: '100%', height: '1px',
                    background: 'rgba(255,255,255,0.06)',
                  }}
                />
                <div>
                  <p className="font-display font-black text-primary" style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '1.5rem', lineHeight: '1' }}>
                    5
                  </p>
                  <p className="text-tertiary" style={{ fontSize: '0.6875rem', marginTop: '2px' }}>Projects Shipped</p>
                </div>
              </div>
            </GlassPanel>

            {/* Code snippet panel */}
            <GlassPanel
              className="animate-float"
              style={{
                bottom: '20px',
                left: '0',
                width: '260px',
                padding: '1rem 1.125rem',
                transform: 'rotate(1deg)',
                animationDelay: '4s',
              }}
            >
              <div className="flex items-center gap-1.5 mb-2">
                <div className="browser-dot" style={{ background: '#F87171' }} />
                <div className="browser-dot" style={{ background: '#FBBF24' }} />
                <div className="browser-dot" style={{ background: '#34D399' }} />
              </div>
              <code
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6875rem',
                  lineHeight: '1.7',
                  display: 'block',
                  color: '#A6A6B3',
                }}
              >
                <span style={{ color: '#5B6EF5' }}>const</span>{' '}
                <span style={{ color: '#4FD1E8' }}>stack</span>{' '}= {'{'}
                <br />
                &nbsp; react:{' '}
                <span style={{ color: '#34D399' }}>'⚡ expert'</span>,
                <br />
                &nbsp; api:{' '}
                <span style={{ color: '#34D399' }}>'🔌 FastAPI'</span>,
                <br />
                &nbsp; ai:{' '}
                <span style={{ color: '#9B7BFF' }}>'✨ Gemini'</span>,
                <br />
                {'}'};
              </code>
            </GlassPanel>

            {/* Floating accent panel */}
            <GlassPanel
              className="animate-float"
              style={{
                bottom: '60px',
                right: '10px',
                padding: '0.75rem 1rem',
                transform: 'rotate(-1deg)',
                animationDelay: '6s',
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #5B6EF5, #9B7BFF)' }}
                />
                <span className="text-mono-label text-secondary" style={{ fontSize: '0.6875rem' }}>
                  Design + Engineering
                </span>
              </div>
            </GlassPanel>
          </motion.div>
        </div>

        {/* Mobile visual — stacked below content */}
        <motion.div
          className="lg:hidden flex flex-wrap gap-3 justify-center pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <span className="gradient-text font-display font-black text-2xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>9.12</span>
            <span className="text-tertiary text-sm">CGPA</span>
          </div>
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <span className="gradient-text font-display font-black text-2xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>5</span>
            <span className="text-tertiary text-sm">Projects</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue — intentional subtle indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 3, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ArrowDown size={14} className="text-tertiary" />
      </motion.div>
    </section>
  );
}
