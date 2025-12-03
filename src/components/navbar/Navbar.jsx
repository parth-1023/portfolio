import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        {/* <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Parth Shroff
        </motion.span> */}

        <Logo type="terminal"/>
        
        <div className="social">
          <a 
            href="https://github.com/parth-1023" 
            target="_blank" 
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/parth1510" 
            target="_blank" 
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://www.instagram.com/_parthshroff_/" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;