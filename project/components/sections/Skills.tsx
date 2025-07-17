'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const skills = [
  {
    icon: <Code size={32} />,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.',
    color: 'text-blue-400',
  },
  {
    icon: <Database size={32} />,
    title: 'Backend Development',
    description: 'Creating robust APIs and server-side applications using Node.js, Express, and Python.',
    color: 'text-green-400',
  },
  {
    icon: <Globe size={32} />,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development with modern technologies and best practices.',
    color: 'text-purple-400',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Bot Development',
    description: 'Developing intelligent bots and automation solutions for various platforms and use cases.',
    color: 'text-yellow-400',
  },
];

export default function Skills() {
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
            Skills & Expertise
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Core competencies and areas of specialization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full group">
                <div className="text-center space-y-4">
                  <div className={`${skill.color} mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {skill.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}