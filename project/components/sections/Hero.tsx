'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, FileText } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import NeonSquare from '@/components/ui/NeonSquare';

export default function Hero() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Building Efficient{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Bots and APIs
            </span>{' '}
            for the Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Hi, I'm{' '}
            <span className="text-blue-400 font-semibold">Muhammed Shafvan</span>
            , a passionate Full-Stack Developer crafting innovative solutions
            with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 flex-wrap"
          >
            <AnimatedButton
              href="#projects"
              icon={<ArrowRight size={20} />}
              variant="primary"
            >
              Show my work
            </AnimatedButton>
            
            <AnimatedButton
              href="https://drive.google.com/file/d/your-resume-file-id/view"
              icon={<FileText size={20} />}
              variant="secondary"
              external={true}
            >
              View Resume
            </AnimatedButton>
            
            <AnimatedButton
              href="#contact"
              icon={<Download size={20} />}
              variant="secondary"
            >
              Get in touch
            </AnimatedButton>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Animated Neon Squares */}
          {Array.from({ length: 15 }).map((_, index) => {
            const neonColors = [
              '#00ffff', // Cyan
              '#ff00ff', // Magenta
              '#00ff00', // Lime
              '#ffff00', // Yellow
              '#ff0080', // Hot Pink
              '#8000ff', // Electric Purple
              '#00ff80', // Spring Green
              '#ff8000', // Orange
              '#0080ff', // Electric Blue
              '#80ff00', // Chartreuse
            ];
            
            const sizes = [8, 12, 16, 20, 24];
            const durations = [15, 20, 25, 30];
            
            return (
              <NeonSquare
                key={index}
                size={sizes[Math.floor(Math.random() * sizes.length)]}
                color={neonColors[Math.floor(Math.random() * neonColors.length)]}
                initialX={Math.random() * dimensions.width}
                initialY={Math.random() * dimensions.height}
                delay={Math.random() * 10}
                duration={durations[Math.floor(Math.random() * durations.length)]}
              />
            );
          })}
          
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-pink-500/15 rounded-full blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}