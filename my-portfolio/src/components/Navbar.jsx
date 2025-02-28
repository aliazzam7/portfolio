// components/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ scrollToSection, refs }) => {
  const { aboutRef, educationRef, experienceRef, skillsRef, projectsRef, certificatesRef,footerRef } = refs;
  
  // Animation for name letters
  const nameLetters = " Ali Azzam ".split("");
  const colors = ["#240046"," #3a0ca3", "#0994b7"," #fa1fd5"];
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <motion.div className="animated-name">
          {nameLetters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ color: "#FFFFFF" }}
              animate={{ 
                color: colors,
                transition: { 
                  repeat: Infinity, 
                  duration: 3, 
                  repeatType: "reverse",
                  delay: index * 0.1 
                } 
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className="navbar-links">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(educationRef)}
        >
          Education
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(experienceRef)}
        >
          Experience
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(skillsRef)}
        >
          Skills
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(certificatesRef)}
        >
          Certificates
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(footerRef)}
        >
          Download CV
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;