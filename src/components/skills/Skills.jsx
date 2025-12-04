import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";
// Importing icons to match your image
import { 
  FaHtml5, FaCss3Alt, FaJava, FaReact, FaNodeJs, FaGitAlt, FaNpm, FaAws, FaPython, FaDocker 
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp, SiPostgresql, SiTypescript } from "react-icons/si"; // Utilizing generic SQL icon
import { VscAzure } from "react-icons/vsc";
import { BiSolidZap } from "react-icons/bi"; // For the lightning bolt

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const iconList = [
  { icon: <FaHtml5 />, name: "html-5" },
  { icon: <FaCss3Alt />, name: "css3" },
  { icon: <IoLogoJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "reactjs" },
  { icon: <FaNodeJs />, name: "nodejs" },
  { icon: <SiPhp />, name: "PHP" },
  { icon: <FaGitAlt />, name: "git" },
  { icon: <FaNpm />, name: "npm" },
  { icon: <SiPostgresql />, name: "sql-db" },
  { icon: <FaAws />, name: "aws" },
  { icon: <VscAzure />, name: "azure" },
  { icon: <FaPython />, name: "python" },
  { icon: <FaDocker />, name: "docker" },
];

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on turning complex ideas into
          <br /> scalable digital reality
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            Crazy <motion.b whileHover={{ color: "orange" }}>Full Stack Developer</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            Who Wants To <motion.b whileHover={{ color: "orange" }}>Explore</motion.b> Every <motion.b whileHover={{ color: "orange" }}>Tech Stack.</motion.b>
          </h1>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        
        {/* 1. Tech Stack Icons */}
        <motion.div className="techStack" variants={variants}>
          {iconList.map((item, index) => (
            <motion.div 
              className="techItem" 
              key={index}
              whileHover={{ color: "orange", scale: 1.1 }}
            >
              <div className="icon">{item.icon}</div>
              <span>{item.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* <div></div> */}

        {/* 2. Services Text List */}
        <motion.div className="skillList" variants={variants}>
            <div className="skillItem">
                <BiSolidZap className="bolt"/>
                <p><b>Full Stack Engineering:</b> Building responsive, type-safe web applications using React, TypeScript, and JavaScript.</p>
            </div>
            <div className="skillItem">
                <BiSolidZap className="bolt"/>
                <p><b>Cloud & Backend Architecture:</b> Designing scalable, serverless infrastructure on AWS and optimizing high-performance databases.</p>
            </div>
            <div className="skillItem">
                <BiSolidZap className="bolt"/>
                <p><b>AI & ML Integration:</b> Implementing intelligent RAG workflows and predictive models using LangChain, OpenAI, and Python.</p>
            </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Skills;