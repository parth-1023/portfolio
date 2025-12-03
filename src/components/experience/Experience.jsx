import { useRef } from "react";
import "./experience.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaUniversity } from "react-icons/fa";

// Resume Data 
const experienceData = [
  {
    id: 1,
    title: "Software Developer",
    company: "MyEdMaster",
    location: "Worcester, MA",
    date: "Aug 2025 - Present",
    desc: [
      "Designing an interactive, game-based physics learning platform using React and TypeScript.",
      "Architecting a scalable, serverless stack on AWS with Lambda and API Gateway for low-latency simulations.",
    ],
    tags: ["React", "TypeScript", "AWS", "Node.js"],
    icon: <FaLaptopCode />,
    current: true,
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "WPI",
    location: "Worcester, MA",
    date: "Feb 2025 - May 2025",
    desc: [
      "Engineered a distributed, AI-driven Web App using React, LangChain, and OpenAI.",
      "Developed a RAG workflow with FAISS vector stores to reduce model hallucinations.",
    ],
    tags: ["React", "LangChain", "OpenAI", "Python"],
    icon: <FaUniversity />,
    current: false,
  },
  {
    id: 3,
    title: "Lead Software Engineer",
    company: "No-Brainer Co.",
    location: "Mumbai, India",
    date: "Feb 2021 - Dec 2022",
    desc: [
      "Engineered a MERN stack Chrome extension with deep learning captcha detection.",
      "Deployed scalable APIs on AWS to handle over 1,000 concurrent users.",
    ],
    tags: ["MERN Stack", "AWS", "Deep Learning", "Docker"],
    icon: <FaBriefcase />,
    current: false,
  },
  {
    id: 4,
    title: "Backend Developer Intern",
    company: "AKVI",
    location: "Mumbai, India",
    date: "July 2022",
    desc: [
      "Enhanced operational efficiency by 50% by architecting a scalable MySQL database.",
      "Developed internal admin panels to streamline database management.",
    ],
    tags: ["MySQL", "Database Design", "PHP"],
    icon: <FaBriefcase />,
    current: false,
  },
];

const Experience = () => {
  const ref = useRef(null);

  // Hook for the progress bar animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="experience" ref={ref}>
      <div className="titleContainer">
        <h1>
          My <motion.b whileHover={{ color: "orange" }}>Experience</motion.b>
        </h1>
      </div>

      <div className="timeline">
        {/* The Vertical Progress Line */}
        <div className="progressBarBackground"></div>
        <motion.div className="progressBar" style={{ scaleY }}></motion.div>

        {experienceData.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

// Sub-component for individual items to handle animations cleanly
const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0; // Alternating logic

  return (
    <motion.div
      className={`timelineItem ${isLeft ? "left" : "right"}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="content">
        <div className="header">
            <div className="role-group">
                <h3>{item.title}</h3>
                {item.current && <span className="badge">Current</span>}
            </div>
            <div className="icon-box">{item.icon}</div>
        </div>
        
        <span className="subtitle">
          {item.company} • {item.location} • {item.date}
        </span>
        
        <ul>
          {item.desc.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
        
        <div className="tags">
          {item.tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* The Dot on the timeline */}
      <div className="dot"></div>
    </motion.div>
  );
};

export default Experience;