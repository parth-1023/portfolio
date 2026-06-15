import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* Link wrapper for the button */}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.1, backgroundColor: "white", color: "black" }}
              >Check it out!</motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}

      <section>
        <div className="container">
          <div
            className="wrapper"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '30px'
            }}
          >
            <h2 style={{ fontSize: '56px', textAlign: 'center' }}>Check out more of my work</h2>
            <a href="https://github.com/parth-1023" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "white", color: "black" }}
                style={{
                  padding: '20px 60px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  backgroundColor: 'orange',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 'bold'
                }}
              >
                More Projects on GitHub
              </motion.button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;