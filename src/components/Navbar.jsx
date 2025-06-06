import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaTelegramPlane } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="navbar-title">My Portfolio</h1>
      <div className="navbar-links">
        <a href="#aboutme" className="navbar-link">About Me</a>
        <a href="#projects" className="navbar-link">Projects</a>
        <a href="#footer" className="navbar-link">Footer</a>
      </div>
      <div className="navbar-icons">
        <a href="https://www.instagram.com/imase_x077/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://github.com/27502" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://t.me/https://t.me/Natsu_nakamura" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane size={30} />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
