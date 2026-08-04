// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { siteConfig } from '../../data/siteConfig';
import { useActiveSection } from '../../hooks/useActiveSection';

const sectionIds = ['about', 'skills', 'work', 'journey', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop / Mobile Nav Bar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(17, 17, 24, 0.7)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
        }}
      >
        <div className="container-wide w-full">
          <nav
            className="flex items-center justify-between transition-all duration-500"
            style={{ 
              height: scrolled ? '64px' : '96px',
            }}
            aria-label="Main navigation"
          >
            {/* KB Wordmark */}
            <a
              href="/"
              className="flex items-center gap-[6px] group py-2"
              aria-label="Karthik Bangera — Home"
            >
              <span
                className="font-display text-[17px] font-bold tracking-wide text-primary transition-colors duration-300 group-hover:text-white"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                KB
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full opacity-80"
                style={{ background: '#9B7BFF' }}
                aria-hidden="true"
              />
            </a>

            {/* Desktop center links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="relative flex flex-col items-center group py-2"
                  >
                    <span 
                      className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-[#8A8A98] group-hover:text-white'
                      }`}
                    >
                      {link.label}
                    </span>
                    <span 
                      className={`absolute -bottom-1 w-1 h-1 rounded-full bg-white transition-all duration-300 ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-40 group-hover:scale-100'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Desktop right actions */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-[13px] font-medium text-[#8A8A98] hover:text-white transition-colors duration-300"
              >
                Resume
                <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-[1px] group-hover:translate-x-[1px] transition-transform duration-300" />
              </a>
              
              <button
                onClick={() => handleNavClick('#contact')}
                className="relative group flex items-center justify-center text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-[1px]"
                style={{ 
                  padding: '0.45rem 1.125rem',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)' }} 
                />
                <span className="relative z-10">Let's Talk</span>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center text-[#8A8A98] hover:text-white transition-colors p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              <Menu size={20} />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            style={{
              background: 'rgba(17, 17, 24, 0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between mb-12">
              <span
                className="font-display text-[17px] font-bold tracking-wide text-primary"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                KB
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full ml-1.5 align-middle"
                  style={{ background: '#9B7BFF' }}
                />
              </span>
              <button
                className="flex items-center justify-center text-[#8A8A98] hover:text-white transition-colors p-2"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                style={{ minHeight: '44px', minWidth: '44px' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-6 flex-1 px-2">
              {navLinks.map((link, i) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                
                return (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className={`text-left text-2xl font-semibold tracking-wide transition-colors ${
                      isActive ? 'text-white' : 'text-[#8A8A98] hover:text-white'
                    }`}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                    }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </nav>

            {/* Mobile bottom row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6 pt-8 mt-auto"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <a 
                href={siteConfig.resume} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-medium text-white transition-all duration-300 w-full"
                style={{ 
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                Download Resume
                <ArrowUpRight size={16} className="opacity-60" />
              </a>
              <div className="flex gap-4 justify-center">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A8A98] hover:text-white transition-colors p-2"
                  aria-label="GitHub"
                >
                  <GithubIcon size={22} />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A8A98] hover:text-white transition-colors p-2"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={22} />
                </a>
                <a
                  href={siteConfig.emailLink}
                  className="text-[#8A8A98] hover:text-white transition-colors p-2"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

