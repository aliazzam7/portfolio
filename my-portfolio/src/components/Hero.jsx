// components/Hero.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import me1  from '../images/me1.jpeg';

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <meshStandardMaterial
        wireframe
        color="#1E3A8A"
        emissive="#7C3AED"
        roughness={0.1}
      />
    </Sphere>
  );
};

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div 
          className="profile-image-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-image">
            {/* Replace with your image */}
            <img src={me1} alt="Profile" />
          </div>
          <div className="canvas-container">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <AnimatedSphere />
              <OrbitControls enableZoom={false} autoRotate={true} />
            </Canvas>
          </div>
        </motion.div>
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1> Welcome to My Portfolio </h1>
          <p> Mobile Application Developer | Full Stack Web Developer </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;