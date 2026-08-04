// src/components/motion/PageLoader.jsx
// Intro animation overlay — appears only on first page load, never on SPA navigation.
// Uses framer-motion (already a project dependency) and matches existing brand tokens.
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Module-level flag: set to true after the TIMER fires, not when effect mounts.
// This is Strict Mode safe: the flag isn't set until the animation is actually committed.
let _loaderDismissed = false;

export default function PageLoader() {
  const [visible, setVisible] = useState(!_loaderDismissed);
  const timerRef = useRef(null);

  useEffect(() => {
    // Already dismissed in this session (e.g. user navigated away and back)
    if (_loaderDismissed) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const holdMs = prefersReducedMotion ? 50 : 1550;

    timerRef.current = setTimeout(() => {
      _loaderDismissed = true;
      setVisible(false);
    }, holdMs);

    // Cleanup runs in Strict Mode's double-invoke — clears the first timer so only
    // the committed effect's timer actually fires.
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#0A0A0F',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
          }}
        >
          {/* ── Name: clip-reveal from below ───────────────────── */}
          <div style={{ overflow: 'hidden', lineHeight: 1 }}>
            <motion.p
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.72,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08,
              }}
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: 'clamp(1.875rem, 5.5vw, 3.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#F2F2F5',
                margin: 0,
              }}
            >
              KARTHIK BANGERA
            </motion.p>
          </div>

          {/* ── Accent line: scales in from left ──────────────── */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.58,
            }}
            style={{
              transformOrigin: 'left',
              height: '2px',
              width: 'clamp(100px, 28vw, 260px)',
              background: 'linear-gradient(90deg, #5B6EF5 0%, #9B7BFF 55%, transparent 100%)',
              borderRadius: '999px',
            }}
          />

          {/* ── Subtitle: fade + slide up ─────────────────────── */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.48,
              ease: 'easeOut',
              delay: 0.6,
            }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(0.5rem, 1.3vw, 0.6875rem)',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#5B6EF5',
              margin: 0,
            }}
          >
            Design Engineer&nbsp;·&nbsp;Full-Stack Developer&nbsp;·&nbsp;AI Explorer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
