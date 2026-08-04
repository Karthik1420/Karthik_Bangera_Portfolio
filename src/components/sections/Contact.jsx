// src/components/sections/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Download, Copy, Check, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import FadeUp from '../motion/FadeUp';
import { siteConfig } from '../../data/siteConfig';

function ContactItem({ icon: Icon, label, value, href, copyValue, accentColor = '#5B6EF5' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copyValue) return;
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-between gap-4 p-5 rounded-2xl group"
      style={{
        background: 'rgba(23,23,31,0.8)',
        border: '1px solid rgba(255,255,255,0.07)',
        transition: 'border-color 0.25s, background 0.25s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
        e.currentTarget.style.background = 'rgba(23,23,31,1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.background = 'rgba(23,23,31,0.8)';
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: `rgba(${accentColor === '#5B6EF5' ? '91,110,245' : accentColor === '#34D399' ? '52,211,153' : '155,123,255'},0.1)`,
            border: `1px solid rgba(${accentColor === '#5B6EF5' ? '91,110,245' : accentColor === '#34D399' ? '52,211,153' : '155,123,255'},0.2)`,
            flexShrink: 0,
          }}
        >
          <Icon size={16} style={{ color: accentColor }} aria-hidden="true" />
        </div>
        <div>
          <p className="text-mono-label text-tertiary mb-0.5">{label}</p>
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-primary font-medium hover:text-accent transition-colors"
            style={{ fontSize: '0.9375rem', textDecoration: 'none' }}
          >
            {value}
          </a>
        </div>
      </div>

      {copyValue && (
        <button
          onClick={handleCopy}
          className="btn-ghost p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={copied ? 'Copied!' : `Copy ${label}`}
          style={{ minHeight: '36px', minWidth: '36px', justifyContent: 'center' }}
        >
          {copied ? (
            <Check size={14} style={{ color: '#34D399' }} />
          ) : (
            <Copy size={14} />
          )}
        </button>
      )}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-spacing bg-base">
      <div className="container-wide">
        {/* Label */}
        <FadeUp>
          <span className="section-label">05 · Contact</span>
        </FadeUp>

        <div
          className="mt-12 grid gap-16 items-start"
          style={{ gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)' }}
        >
          {/* Left — Headline */}
          <div className="flex flex-col gap-6">
            <FadeUp delay={0.1}>
              <h2
                className="text-primary"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: '-0.025em',
                }}
              >
                Let's build something<br />
                worth shipping.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-body text-secondary" style={{ maxWidth: '400px', lineHeight: '1.75' }}>
                Open to Design Engineering, Frontend, Full-Stack, and Software Engineering opportunities — and always up for meaningful collaborations.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex items-center gap-2 text-tertiary" style={{ fontSize: '0.875rem' }}>
                <MapPin size={14} aria-hidden="true" />
                <span>{siteConfig.location}</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer" className="btn-primary w-fit">
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
            </FadeUp>
          </div>

          {/* Right — Contact options */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col gap-3">
              <ContactItem
                icon={Mail}
                label="Email"
                value={siteConfig.email}
                href={siteConfig.emailLink}
                copyValue={siteConfig.email}
                accentColor="#5B6EF5"
              />
              <ContactItem
                icon={Phone}
                label="Phone"
                value={siteConfig.phone}
                href={siteConfig.phoneLink}
                copyValue={siteConfig.phone}
                accentColor="#9B7BFF"
              />
              <ContactItem
                icon={LinkedinIcon}
                label="LinkedIn"
                value="karthikbangera"
                href={siteConfig.linkedin}
                accentColor="#34D399"
              />
              <ContactItem
                icon={GithubIcon}
                label="GitHub"
                value="Karthik1420"
                href={siteConfig.github}
                accentColor="#A6A6B3"
              />
            </div>
          </FadeUp>
        </div>

        {/* Mobile: stack */}
        <style>{`
          @media (max-width: 767px) {
            #contact .grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
