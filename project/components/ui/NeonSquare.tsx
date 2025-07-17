import { motion } from 'framer-motion';

interface NeonSquareProps {
  size: number;
  color: string;
  initialX: number;
  initialY: number;
  delay: number;
  duration: number;
}

export default function NeonSquare({ 
  size, 
  color, 
  initialX, 
  initialY, 
  delay, 
  duration 
}: NeonSquareProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        left: initialX,
        top: initialY,
      }}
      initial={{ 
        opacity: 0, 
        scale: 0,
        rotate: 0 
      }}
      animate={{
        opacity: [0, 0.8, 0.4, 0.9, 0],
        scale: [0, 1, 1.2, 0.8, 0],
        rotate: [0, 180, 360, 540, 720],
        x: [0, 100, -50, 150, -100, 0],
        y: [0, -80, 120, -60, 100, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-full h-full rounded-sm"
        style={{
          backgroundColor: color,
          boxShadow: `
            0 0 10px ${color},
            0 0 20px ${color},
            0 0 30px ${color},
            inset 0 0 10px ${color}
          `,
          filter: 'blur(0.5px)',
        }}
      />
    </motion.div>
  );
}