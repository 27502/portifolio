import { motion } from "framer-motion";
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Welcome to My Neon Portfolio!
      </motion.h1>
    </section>
  );
};

export default Hero;
