import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Physics Simulator",
    img: "./physics.png",
    desc: "An interactive, game-based physics learning platform where students can simulate physics concepts, run calculations, and receive real-time feedback.",
    link: "https://ball-simulator.vercel.app/",
  },
  {
    id: 2,
    title: "GPThermo",
    img: "./gpthermo.png",
    desc: "A distributed, AI-driven web application leveraging OpenAI and LangChain to provide guided problem-solving for complex thermodynamics problems.",
    link: "https://gpthermo.wpi.edu/",
  },
  {
    id: 3,
    title: "AI Pong",
    img: "./aipong.png",
    desc: "A classic Pong game reimagined with AI opponents trained using reinforcement learning techniques to challenge players of all levels.",
    link: "https://github.com/parth-1023/AI-pong",
  },
  {
    id: 4,
    title: "Cricket World Cup Viz",
    img: "./dataviz.png",
    desc: "Data visualization dashboard showcasing stats and insights from the Cricket World Cup using dynamic charts and graphs.",
    link: "https://vizhub.com/parth-1023/2e6f345d7b304c5ead755144aa27438b",
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