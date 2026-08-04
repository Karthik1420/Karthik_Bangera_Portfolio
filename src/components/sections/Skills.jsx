// src/components/sections/Skills.jsx
import { motion } from 'framer-motion';
import {
  Monitor, Server, Sparkles, Database, GitBranch, Cpu
} from 'lucide-react';
import { FigmaIcon } from '../ui/SocialIcons';
import FadeUp from '../motion/FadeUp';
import { skillCategories } from '../../data/skills';

const iconMap = {
  monitor: Monitor,
  server: Server,
  figma: FigmaIcon,
  sparkles: Sparkles,
  database: Database,
  'git-branch': GitBranch,
  cpu: Cpu,
};

function SkillCard({ category, index }) {
  const Icon = iconMap[category.icon] || Monitor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="relative flex flex-col gap-4 p-6 rounded-2xl transition-colors duration-300"
      style={{
        background: category.accent
          ? 'rgba(91,110,245,0.05)'
          : 'rgba(23,23,31,0.8)',
        border: category.accent
          ? '1px solid rgba(91,110,245,0.2)'
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: category.accent
          ? '0 0 40px rgba(91,110,245,0.08), inset 0 1px 0 rgba(255,255,255,0.06)'
          : 'none',
      }}
    >
      {/* Accent AI glow */}
      {category.accent && (
        <div
          aria-hidden="true"
          className="absolute -inset-px rounded-2xl pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top left, rgba(91,110,245,0.08) 0%, transparent 60%)',
          }}
        />
      )}

      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center w-9 h-9 rounded-lg"
          style={{
            background: category.accent
              ? 'linear-gradient(135deg, rgba(91,110,245,0.2), rgba(155,123,255,0.2))'
              : 'rgba(255,255,255,0.05)',
            border: category.accent
              ? '1px solid rgba(91,110,245,0.3)'
              : '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <Icon
            size={16}
            style={{ color: category.accent ? '#9B7BFF' : '#6E6E7C' }}
            aria-hidden="true"
          />
        </div>
        <p
          className="text-mono-label"
          style={{ color: category.accent ? '#A6A6B3' : '#6E6E7C' }}
        >
          {category.label}
        </p>
      </div>

      {/* Skills list */}
      <ul className="flex flex-col gap-2" role="list">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="flex items-center gap-2"
            style={{ color: '#A6A6B3', fontSize: '0.9375rem' }}
          >
            <span
              aria-hidden="true"
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: category.accent ? '#9B7BFF' : '#6E6E7C',
                flexShrink: 0,
              }}
            />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-spacing" style={{ background: '#0D0D13' }}>
      <div className="container-wide">
        {/* Label */}
        <FadeUp>
          <span className="section-label">02 · Skills</span>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.1}>
          <h2
            className="text-h2 text-primary mt-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif", maxWidth: '480px' }}
          >
            The toolkit.
          </h2>
          <p className="text-body text-secondary mt-3" style={{ maxWidth: '440px' }}>
            A carefully chosen set of technologies for building fast, scalable, and thoughtful digital products.
          </p>
        </FadeUp>

        {/* Grid — 3 columns desktop, 2 tablet, 1 mobile */}
        <div
          className="mt-12 grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          }}
        >
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
        {/* Responsive overrides */}
        <style>{`
          @media (max-width: 900px) {
            #skills .grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          }
          @media (max-width: 560px) {
            #skills .grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
