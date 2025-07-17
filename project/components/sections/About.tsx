'use client';

import { motion } from 'framer-motion';
import { Code, Zap, Users, Target } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const aboutCards = [
  {
    icon: <Code size={24} />,
    title: 'Self-Taught Developer',
    description: 'Passionate about learning new technologies and solving complex problems through code.',
    color: 'text-blue-400',
  },
  {
    icon: <Zap size={24} />,
    title: 'Bot Development',
    description: 'Currently working on intelligent bots and automation solutions for various platforms.',
    color: 'text-yellow-400',
  },
  {
    icon: <Users size={24} />,
    title: 'Web Applications',
    description: 'Building responsive and user-friendly web applications using modern frameworks.',
    color: 'text-green-400',
  },
  {
    icon: <Target size={24} />,
    title: 'Problem Solver',
    description: 'Focused on creating efficient solutions that make a real impact on users\' lives.',
    color: 'text-purple-400',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A passionate developer dedicated to creating innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start gap-4">
                  <div className={`${card.color} mt-1`}>
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}