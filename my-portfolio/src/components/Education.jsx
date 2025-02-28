// components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationItems = [
    {
      degree: "Master's 2 in Information System Engineering",
      school: "Lebanese University - Faculty of Technology",
      year: "Dec 2024 - Present",
      description: "Advanced studies in Information System Engineering with a focus on software development and system architecture."
    },
    {
      degree: "Master's 1 in Information System Engineering",
      school: "Lebanese University - Faculty of Technology",
      year: "Jan 2024 - Sep 2024",
      description: "Specialized coursework in database systems, Inteligence Artificielle, MVC, network security, and software engineering."
    },
    {
      degree: "Bachelor of Science in Engineering - Technology and Science of Information Systems",
      school: "Lebanese University - Faculty of Technology",
      year: "Sep 2020 - Oct 2023",
      description: "Comprehensive studies in programming, data structures, and system analysis."
    },
    {
      degree: "Sociology and Economics Baccalaureate Degree",
      school: "Abbasseih Public High School",
      year: "2019 - 2020",
      description: "Fundamental education in economics, social sciences, and analytical reasoning."
    }
  ];

  return (
    <motion.section 
      className="section education-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>Education</h2>
      <div className="content">
        {educationItems.map((item, index) => (
          <motion.div 
            key={index}
            className="card"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>{item.degree}</h3>
            <h4>{item.school} | {item.year}</h4>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;