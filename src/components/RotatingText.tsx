import React from "react";
import { AnimatePresence, motion, Transition,TargetAndTransition } from "framer-motion";

export interface RotatingTextProps {
  texts: string[];
  duration?: number;
  transition?: Transition;
  y?: number;
  containerClassName?: string;
  mainClassName?: string;
  staggerFrom?: "first" | "last";
  staggerDuration?: number;
  splitLevelClassName?: string;
  rotationInterval?: number;
  initial?: TargetAndTransition; 
  animate?: TargetAndTransition; 
  exit?: TargetAndTransition;   
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  duration = 2000,
  transition = { duration: 0.3, ease: "easeOut" },
  y = -50,
  containerClassName = "",
}) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, duration);
    return () => clearInterval(interval);
  }, [texts, duration]);

  const currentText = texts[index];

  return (
    <div className={`inline-block overflow-hidden ${containerClassName}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          transition={transition}
          initial={{ opacity: 0, y: -y }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y }}
          className="inline-block"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
