// App.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const footerRef=useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ aboutRef, educationRef, experienceRef, skillsRef, projectsRef, certificatesRef,footerRef }}
      />
      <Hero />
      <div ref={aboutRef}><About /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={certificatesRef}><Certificates /></div>
      <div ref={footerRef}><Footer /></div>
    </div>
  );
}

export default App;