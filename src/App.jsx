// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import NotFound from './pages/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/motion/ScrollProgress';
import PageLoader from './components/motion/PageLoader';

function HomeLayout() {
  return (
    <>
      {/* Intro loader — shows only on first page load, never on SPA navigation */}
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
