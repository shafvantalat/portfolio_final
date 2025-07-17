'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const projects = [
  {
    id: 1,
    title: 'AI Bot Assistant',
    description: 'Intelligent chatbot with natural language processing capabilities for customer support.',
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['Python', 'TensorFlow', 'FastAPI'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['Next.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team features.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['React', 'Node.js', 'Socket.io'],
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with interactive maps and detailed forecasts.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['TypeScript', 'React', 'OpenWeather API'],
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Responsive portfolio website with modern design and smooth animations.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    demo: '#',
  },
  {
    id: 6,
    title: 'API Gateway',
    description: 'Scalable API gateway with rate limiting, authentication, and monitoring.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['Node.js', 'Express', 'Redis'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full group">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-slate-700/40 text-slate-300 rounded-md border border-slate-600/40 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </a>
                    </div>
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