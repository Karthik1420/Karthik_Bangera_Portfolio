// src/pages/NotFound.jsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen flex items-center justify-center bg-base"
        style={{ paddingTop: '80px' }}
      >
        <div className="container-wide text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-mono-label text-accent mb-4">404</p>
            <h1
              className="text-hero text-primary mb-6"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Lost in the{' '}
              <span className="gradient-text">continuum.</span>
            </h1>
            <p className="text-body text-secondary mb-10 max-w-md mx-auto">
              This page doesn't exist. Perhaps you took a wrong turn somewhere in the design system.
            </p>
            <button
              onClick={() => navigate('/')}
              className="btn-primary"
            >
              <Home size={16} aria-hidden="true" />
              Back to Home
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
