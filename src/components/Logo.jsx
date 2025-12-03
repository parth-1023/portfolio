import { motion } from "framer-motion";

const Logo = ({ type = "terminal", color = "orange" }) => {
  const strokeColor = color === "orange" ? "#FFA500" : "white";

  // Style 1: Terminal (Matches your uploaded image)
  if (type === "terminal") {
    return (
      <motion.div
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "28px", // Slightly larger for impact
          fontWeight: "bold",
          color: "#00ff00", // Neon Green
          display: "flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer",
          textShadow: "0 0 5px rgba(0, 255, 0, 0.5)", // Subtle glow
        }}
        whileHover={{ scale: 1.05 }}
      >
        <span style={{ marginRight: "2px" }}>&gt;</span>
        Parth Shroff
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        >
          _
        </motion.span>
      </motion.div>
    );
  }

  // Style 2: The "Tech" Bracket P
  if (type === "tech") {
    return (
      <motion.svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <motion.path
          d="M30 20 L15 50 L30 80"
          stroke={strokeColor}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.path
          d="M70 20 L85 50 L70 80"
          stroke={strokeColor}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <motion.path
          d="M45 25 V75 M45 25 H60 C70 25 70 50 60 50 H45"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.svg>
    );
  }

  // Style 3: The "Monogram" PS
  if (type === "monogram") {
    return (
      <motion.svg
        width="60"
        height="60"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.1 }}
      >
        <circle cx="50" cy="50" r="45" stroke={strokeColor} strokeWidth="4" />
        <motion.text
          x="50"
          y="65"
          textAnchor="middle"
          fill="white"
          fontSize="40"
          fontWeight="bold"
          fontFamily="sans-serif"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          PS
        </motion.text>
      </motion.svg>
    );
  }

  // Style 4: Minimal Text
  return (
    <motion.div
      style={{
        fontSize: "24px",
        fontWeight: "bold",
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        cursor: "pointer",
      }}
      whileHover={{ scale: 1.05 }}
    >
      Parth
      <motion.span
        style={{ color: "#FFA500", fontSize: "30px", lineHeight: 0 }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        .
      </motion.span>
    </motion.div>
  );
};

export default Logo;