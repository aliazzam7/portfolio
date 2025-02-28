/* components/About.jsx*/
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      className="section about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <div className="content">
        <p>
        Passionate, innovative, and always pushing the boundaries of technology,
        I am a <b>Freelance Mobile Application Developer & Full-Stack Web Developer </b>
        with expertise in <b>Machine Learning, Artificial Intelligence, Neural Networks, and Cybersecurity.</b>
        </p>
        
        <p>
        With a deep understanding of both front-end and back-end technologies,
        I build seamless, high-performance web and mobile applications that deliver real-world impact.
        My experience spans across modern frameworks, responsive design, 
        and intelligent systems that integrate AI-driven solutions.
        </p>
        
        <p>
        Currently, I am expanding my expertise in<b>Cybersecurity</b>,
        taking advanced courses to strengthen my skills in ethical hacking, network security, and digital forensics.
        I also actively participate in <b>major CTF (Capture The Flag) competitions</b>across universities in Lebanon,
        continuously challenging myself to solve real-world security problems.
        </p>
        
        <p>
        💭 I believe in<b> pushing the limits of innovation</b> and transforming ideas into reality.
        If you're looking for someone who combines technical expertise with a passion for excellence—<b>you're in
        the right place.</b>
        </p>
      </div>
    </motion.section>
  );
};

export default About;