// src/pages/CaseStudy.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getProjectBySlug } from '../data/projects';
import CaseStudyHero from '../components/case-study/CaseStudyHero';
import CaseStudyContent from '../components/case-study/CaseStudyContent';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollProgress from '../components/motion/ScrollProgress';

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // Update page title
  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Karthik Bangera`;
    }
  }, [project]);

  if (!project) {
    navigate('/404', { replace: true });
    return null;
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <CaseStudyHero project={project} />
        <CaseStudyContent project={project} />
      </main>
      <Footer />
    </>
  );
}
