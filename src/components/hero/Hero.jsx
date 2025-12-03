import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>PARTH SHROFF</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          
          <motion.p variants={textVariants}>
            Master's candidate at WPI specializing in Full Stack Development and AI. 
            I build scalable web applications using React, AWS, and Python to turn complex ideas into reality.
          </motion.p>

          <motion.div variants={textVariants} className="buttons">
            <a href="#Portfolio">
                <motion.button variants={textVariants}>See Latest Works</motion.button>
            </a>
            <a href="#Contact">
                <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
            <a href="/Parth_Shroff_Resume.pdf" download>
                <motion.button variants={textVariants}>See my Resume</motion.button>
            </a>
          </motion.div>
          
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer"
      >
        Software Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/parth.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;