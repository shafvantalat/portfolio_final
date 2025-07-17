'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Server } from 'lucide-react';

const techStack = [
  { name: 'Node.js', icon: <Server size={16} />, color: 'text-green-400' },
  { name: 'Next.js', icon: <Globe size={16} />, color: 'text-white' },
  { name: 'Python', icon: <Code size={16} />, color: 'text-blue-400' },
  { name: 'HTML', icon: <Code size={16} />, color: 'text-orange-400' },
  { name: 'CSS', icon: <Code size={16} />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <Code size={16} />, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: <Code size={16} />, color: 'text-blue-600' },
  { name: 'MongoDB', icon: <Database size={16} />, color: 'text-green-500' },
  { name: 'PostgreSQL', icon: <Database size={16} />, color: 'text-blue-300' },
  { name: 'React', icon: <Globe size={16} />, color: 'text-cyan-400' },
  { name: 'Express', icon: <Server size={16} />, color: 'text-gray-400' },
  { name: 'Tailwind CSS', icon: <Code size={16} />, color: 'text-teal-400' },
];

export default function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Technologies I work with to build modern applications
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/40 backdrop-blur-md border border-slate-700/40 rounded-full hover:bg-slate-700/40 transition-all duration-300 hover:border-slate-600/40 shadow-md hover:shadow-lg">
                <span className={tech.color}>{tech.icon}</span>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}