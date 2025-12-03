import { useRef } from "react";
import "./education.scss";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const educationData = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Worcester Polytechnic Institute (WPI)",
    date: "2023 - 2025",
    desc: "Specialized in advanced software methodologies, distributed systems, and AI. Focused on building scalable, data-driven applications and researching retrieval-augmented generation workflows.",
    subjects: ["Distributed Systems", "Algorithm Design", "Cloud Computing", "Machine Learning"],
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Thadomal Shahani Engineering College",
    date: "2019 - 2023",
    desc: "Built a strong foundation in core computer science principles. Conducted research in predictive modeling and engineered automated data pipelines for academic analytics.",
    subjects: ["Data Structures", "Database Systems", "Operating Systems", "Web Development"],
  },
];

const Education = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="education"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            Educational <motion.b whileHover={{ color: "orange" }}>Background</motion.b>
          </h1>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        {educationData.map((item) => (
          <motion.div
            className="box"
            key={item.id}
            whileHover={{ borderColor: "orange" }}
          >
            <div className="header">
                <div className="icon">
                    <FaGraduationCap />
                </div>
                <div className="details">
                    <h3>{item.degree}</h3>
                    <span>{item.institution} • {item.date}</span>
                </div>
            </div>
            
            <p className="description">
                {item.desc}
            </p>

            <div className="subjects">
                <div className="subject-title">
                    <FaBookOpen /> <span>Key Subjects</span>
                </div>
                <div className="tags">
                    {item.subjects.map((sub, i) => (
                        <span key={i} className="tag">{sub}</span>
                    ))}
                </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Education;