// src/components/motion/FadeUp.jsx
// Reusable scroll-reveal component with upward fade animation
import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FadeUp({ children, delay = 0, className = '', as = 'div', ...props }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      variants={defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
