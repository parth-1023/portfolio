import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Catchline",
    img: "./catchline.png",
    desc: "A full-stack traceability and quality dashboard for seafood, forecasting freshness from real sensor data and routing each batch to the right sales lane based on revenue at risk.",
    link: "https://shinkeios-lite-gamma.vercel.app/",
  },
  {
    id: 2,
    title: "PromptForge",
    img: "./v0clone.png",
    desc: "A full-stack AI code generation platform where a multi-agent system powered by Google Gemini writes code, installs dependencies, and returns a live preview from a single prompt.",
    link: "https://github.com/parth-1023/v0-clone",
  },
  {
    id: 3,
    title: "CampusPulse",
    img: "./campuspulse.png",
    desc: "An event-driven monitoring platform that streams live sensor telemetry through RabbitMQ, flags anomalies in real time, and visualizes incidents on an interactive 3D map.",
    link: "https://github.com/parth-1023/campus-pulse",
  },
  {
    id: 4,
    title: "Distributed Job Scheduler",
    img: "./scheduler.png",
    desc: "A fault-tolerant job scheduler in Go that dispatches tasks across multiple Dockerized services and automatically detects and recovers from worker failures.",
    link: "https://github.com/parth-1023/job-scheduler",
  },
  {
    id: 5,
    title: "GPThermo",
    img: "./gpthermo.png",
    desc: "A distributed, AI-driven web application leveraging OpenAI and LangChain to provide guided problem-solving for complex thermodynamics problems.",
    link: "https://gpthermo.wpi.edu/",
  },
  {
    id: 6,
    title: "Physics Simulator",
    img: "./physics.png",
    desc: "An interactive, game-based physics learning platform where students can simulate physics concepts, run calculations, and receive real-time feedback.",
    link: "https://ball-simulator.vercel.app/",
  },
];

const ProjectCard = ({ item, index }) => {
  return (
    <motion.div
      className="projectCardScrollWrapper"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.2, ease: "easeOut" }}
    >
      <motion.div
        className="projectCard"
        whileHover={{
          y: -8,
          borderColor: "rgba(255, 165, 0, 0.4)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(255, 165, 0, 0.15)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="imageContainer">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="textContainer">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
              whileTap={{ scale: 0.95 }}
            >
              Check it out!
            </motion.button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section className="portfolio auto-height" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      <div className="portfolioContainer">
        <div className="grid">
          {items.map((item, index) => (
            <ProjectCard item={item} key={item.id} index={index} />
          ))}
        </div>
      </div>

      <div className="moreWork">
        <h2>Check out more of my work</h2>
        <a href="https://github.com/parth-1023" target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "white", color: "black" }}
            whileTap={{ scale: 0.95 }}
          >
            More Projects on GitHub
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;