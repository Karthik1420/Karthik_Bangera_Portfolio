// src/components/layout/Footer.jsx
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { siteConfig } from '../../data/siteConfig';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      className="bg-base"
    >
      <div className="container-wide py-10">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          {/* Left — Name + tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <span
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#F2F2F5',
                }}
              >
                Karthik Bangera
              </span>
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #5B6EF5, #9B7BFF, #4FD1E8)',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
            </div>
            <p
              style={{
                fontSize: '0.75rem',
                color: '#6E6E7C',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Design Engineer · Full-Stack Developer · AI Explorer
            </p>
          </div>

          {/* Center — Copyright */}
          <p className="text-tertiary text-sm text-center" style={{ fontSize: '0.8125rem', whiteSpace: 'nowrap' }}>
            © {year} Karthik Bangera
          </p>

          {/* Right — Social icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', justifyContent: 'flex-end' }}>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost p-2"
              aria-label="GitHub"
              style={{ minHeight: '40px', minWidth: '40px', justifyContent: 'center' }}
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost p-2"
              aria-label="LinkedIn"
              style={{ minHeight: '40px', minWidth: '40px', justifyContent: 'center' }}
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={siteConfig.emailLink}
              className="btn-ghost p-2"
              aria-label="Email"
              style={{ minHeight: '40px', minWidth: '40px', justifyContent: 'center' }}
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Mobile: stack */}
        <style>{`
          @media (max-width: 640px) {
            footer .container-wide > div {
              grid-template-columns: 1fr !important;
              text-align: center;
            }
            footer .container-wide > div > div:first-child {
              align-items: center;
            }
            footer .container-wide > div > div:last-child {
              justify-content: center !important;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}
