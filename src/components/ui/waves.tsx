"use client";

import { motion } from "framer-motion";

interface WavesProps {
  controls?: {
    colors?: string[]; // Array of colors for different wave layers
  };
}

const Waves: React.FC<WavesProps> = ({ controls }) => {
  const colors = controls?.colors || ["#5091ce", "#52e0d7", "#0a0a0a", "#ff6ec7"];

  return (
    <div className="w-full h-full absolute bottom-0 left-0 overflow-hidden">
      {colors.map((color, index) => (
        <motion.svg
          key={index}
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 6 + index, // different duration per layer
            ease: "easeInOut",
          }}
        >
          <path
            d="M0,192L48,186.7C96,181,192,171,288,149.3C384,128,480,96,576,101.3C672,107,768,149,864,170.7C960,192,1056,192,1152,165.3C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill={color}
            fillOpacity={0.3 - index * 0.05} // layer transparency
          />
        </motion.svg>
      ))}
    </div>
  );
};

export default Waves;
