// components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Web Development",
    skills: [
      { name: "React.js", level: 70 },
      { name: "JavaScript", level: 70 },
      { name: "HTML/CSS", level: 90 },
      { name: "Ajax", level: 60 },
      { name: "Laravel", level: 50 },
      { name: "MVC", level: 60 },
      { name: "ASP.Net", level: 50 },
      { name: "JQuery", level: 65 },
      { name: "Responsive Design", level: 90 },
      { name: "Figma", level: 70 }
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "Java", level: 80 },
      { name: "Spring Boot", level: 65 },
      { name: "Flutter", level: 75 },
      { name: "C#", level: 80 },
      { name: "VB.Net", level: 70 },
      { name: "Python", level: 80 },
      { name: "C", level: 80 }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "SQL Management Server", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Oracle", level: 75 },
      { name: "Access Database", level: 70 },
      { name: "Object Database", level: 80 }
    ]
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    skills: [
      { name: "Artificial Intelligence", level: 75 },
      { name: "Machine Learning", level: 85 },
      { name: "Neural Networks", level: 75 }
    ]
  },
  {
    title: "Software & Tools",
    skills: [
      { name: "Android Studio", level: 80 },
      { name: "Visual Studio", level: 85 },
      { name: "Visual Studio Code", level: 90 },
      { name: "PyCharm", level: 80 },
      { name: "Eclipse IDE", level: 75 },
      { name: "Atom", level: 70 },
      { name: "Packet Tracer", level: 75 }
    ]
  },
  {
    title: "Microsoft Office",
    skills: [
      { name: "Microsoft Word", level: 90 },
      { name: "Microsoft Excel", level: 85 },
      { name: "Microsoft PowerPoint", level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <motion.section 
      className="section skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>Skills</h2>
      <div className="content">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Category Title */}
            <h3 className="category-title">{category.title}</h3>

            <div className="skills-grid">
              {category.skills.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  className="skill-item"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4>{skill.name}</h4>
                  <div className="skill-bar-container">
                    <motion.div 
                      className="skill-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: idx * 0.1 + 0.3, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span>{skill.level}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;

