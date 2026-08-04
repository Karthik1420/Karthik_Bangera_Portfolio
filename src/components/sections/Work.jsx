// src/components/sections/Work.jsx
import FadeUp from '../motion/FadeUp';
import ProjectShowcase from '../projects/ProjectShowcase';
import { getSortedProjects } from '../../data/projects';

const projects = getSortedProjects();

export default function Work() {
  return (
    <section id="work" className="section-spacing bg-base">
      <div className="container-wide">
        {/* Section header */}
        <FadeUp>
          <span className="section-label">03 · Selected Work</span>
        </FadeUp>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <FadeUp delay={0.1}>
            <h2
              className="text-h1 text-primary"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", maxWidth: '560px' }}
            >
              Five ideas, shipped.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-secondary text-body" style={{ maxWidth: '300px' }}>
              A mix of AI-driven, full-stack, and design-focused builds.
            </p>
          </FadeUp>
        </div>

        {/* Project list */}
        <div className="mt-4">
          {projects.map((project, i) => (
            <ProjectShowcase key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
