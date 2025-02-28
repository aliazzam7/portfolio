/*// components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
/*import img1 from "../images/img1.png";
import img2 from "../images/img2.png";*//*
import img3 from "../images/transaction.jpeg";
import img4 from "../images/notiapp.jpeg";
import img5 from "../images/cofeeapp.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "Chalet Reservation Website",
      description: "A website where users can book chalets in any city in Lebanon.",
      image: "img1",
      tech: ["HTML5", "CSS3", "PHP", "JavaScript"]
    },
    {
      title: "Gym Booking Website",
      description: "Allows clients to book gym sessions, choose a coach, and purchase fitness products.",
      image: "img1",
      tech: ["React", "Node.js", "MongoDb", "Express"]
    },
    {
      title: "Finance Website (Monty Mobile)",
      description: "A finance tracking platform with AI analysis to predict transaction success and future outcomes.",
      image: img3,
      tech: ["React", "AI API", "SQL", "Squelize"]
    },
    {
      title: "3D Portfolio",
      description: "Interactive 3D portfolio website using Three.js and React.",
      image: "img1",
      tech: ["React", "Three.js", "Framer Motion"]
    },
    {
      title: "Private Notification App",
      description: "A mobile app where the admin can send notifications/messages to all followers(all user in this app).",
      image: img4,
      tech: ["Flutter", "Firebase", "Push Notifications","Vercel"]
    },
    {
      title: "Café Ordering App",
      description: "A mobile app for a café where customers can order, reserve, and check prices.",
      image: img5,
      tech: ["Flutter", "Firebase", "Google Maps API"]
    }
  ];


  return (
    <motion.section 
      className="section projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>
      <div className="content">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;*/import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../images/chalet.jpeg";
import img2 from "../images/gym.jpeg";
import img0 from "../images/port.png";
import img3 from "../images/transaction.jpeg";
import img4 from "../images/notiapp.jpeg";
import img5 from "../images/cofeeapp.jpeg";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Chalet Reservation Website",
      description: "A website where users can book chalets in any city in Lebanon.",
      image: img1,
      tech: ["HTML5", "CSS3", "PHP", "JavaScript"]
    },
    {
      title: "Gym Booking Website",
      description: "Allows clients to book gym sessions, choose a coach, and purchase fitness products.",
      image: img2,
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Finance Website (Monty Mobile)",
      description: "A finance tracking platform with AI analysis to predict transaction success and future outcomes.",
      image: img3,
      tech: ["React", "AI API", "SQL", "Sequelize"]
    },
    {
      title: "3D Portfolio",
      description: "Interactive 3D portfolio website using Three.js and React.",
      image: img0,
      tech: ["React", "Three.js", "Framer Motion"]
    },
    {
      title: "Private Notification App",
      description: "A mobile app where the admin can send notifications/messages to all followers.",
      image: img4,
      tech: ["Flutter", "Firebase", "Push Notifications", "Vercel"]
    },
    {
      title: "Café Ordering App",
      description: "A mobile app for a café where customers can order, reserve, and check prices.",
      image: img5,
      tech: ["Flutter", "Firebase", "Google Maps API"]
    }
  ];

  return (
    <>
      <motion.section 
        className="section projects-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, rotateY: 180 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="project-image" onClick={() => setSelectedImage(project.image)}>
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <span>Click to enlarge</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Modal pour afficher l'image en grand */}
      <AnimatePresence>
        {selectedImage && (
          <div className="modal-backdrop" onClick={() => setSelectedImage(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.3 }}
              className="modal-content"
              onClick={e => e.stopPropagation()}
            >
              <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
              <img src={selectedImage} alt="Project in full view" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
