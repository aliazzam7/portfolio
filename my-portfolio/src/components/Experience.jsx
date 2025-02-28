// components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experienceItems = [
    {
      position: "Freelance Mobile Application Developer",
      company: "Self-Employed",
      year: "March 2024 - Present",
      description: "Developing mobile applications using Flutter for front-end and Firebase for back-end and database management."
    },
    {
      position: "Full Stack Web Development Trainee",
      company: "ESA Coding Lab (France)",
      year: "May 2024 - December 2024",
      description: "Enrolled in an intensive 7-month training program, focusing on full-stack web development with modern technologies."
    },
    {
      position: "IT Intern",
      company: "Imam Al-Sadr Foundation",
      year: "May 2023 - July 2024",
      description: "Worked on software development using VB.Net, Python, and Java, developing various applications including barcode scanners, messaging tools, and inventory management systems. Provided hardware maintenance support."
    },
    {
      position: "Senior Project - Android Pharmacy Delivery App",
      company: "University Project",
      year: "2023",
      description: "Developed a pharmacy delivery mobile application using Java for front-end and PHP with JSON for back-end processing."
    },
    {
      position: "AI Research Project - Fake News Detection",
      company: "Lebanese University (Master 1)",
      year: "2024",
      description: "Built an AI model for detecting fake news using Neural Networks, including RNN, Markov models, MLP, and CNN."
    }
  ];
  

  return (
    <motion.section 
      className="section experience-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>Experience</h2>
      <div className="content">
        {experienceItems.map((item, index) => (
          <motion.div 
            key={index}
            className="card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>{item.position}</h3>
            <h4>{item.company} | {item.year}</h4>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;