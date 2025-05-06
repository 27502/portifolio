import { FaInstagram, FaGithub, FaTelegramPlane } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/27502" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={24} />
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; 2025 habibullo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
