import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import myCV from "../files/AliAzzam-CV-.pdf";

//import "../styles/Footer.css";

const Footer = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = myCV; // Remplace avec le bon chemin de ton CV
    link.download = "AliAzzam-CV-.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="footer-container">
      {/* Download CV Button */}
      <motion.button 
        className="download-cv" 
        onClick={handleDownload}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Download CV
      </motion.button>
      
      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/ali-azzam-b841a8235/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://www.facebook.com/share/1EBNRA65GJ/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon facebook" />
        </a>
        <a href="https://www.instagram.com/ali.tech.solutions?igsh=MjRuNHc5a3pvMHpk" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
        <a href="mailto:alitechsolutions2425@gmail.com">
          <FaEnvelope className="icon email" />
        </a>
        <a href="https://wa.me/96176915446" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon whatsapp" />
        </a>
      </div>

      {/* Copyright */}
      <p className="copyright">CopyRight © Ali Azzam 2024 - 2025</p>
    </footer>
  );
};

export default Footer;
