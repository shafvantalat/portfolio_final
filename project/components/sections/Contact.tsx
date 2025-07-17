'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin, Instagram, Github } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const contactMethods = [
  {
    icon: <MessageCircle size={24} />,
    label: 'WhatsApp',
    value: '+919746078283',
    href: 'https://wa.me/919746078283',
    color: 'text-green-400',
  },
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'muhammedshafvan269@gmail.com',
    href: 'mailto:muhammedshafvan269@gmail.com',
    color: 'text-blue-400',
  },
  {
    icon: <Linkedin size={24} />,
    label: 'LinkedIn',
    value: 'muhammed-shafvan-121585215',
    href: 'https://linkedin.com/in/muhammed-shafvan-121585215',
    color: 'text-blue-500',
  },
  {
    icon: <Instagram size={24} />,
    label: 'Instagram',
    value: '@shafvantalat_',
    href: 'https://instagram.com/shafvantalat_',
    color: 'text-pink-400',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project or connect for opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full group">
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 h-full"
                >
                  <div className={`${method.color} group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {method.label}
                    </h3>
                    <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <GlassCard>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-slate-300">
                <Github size={24} />
                <span className="text-lg">Check out my GitHub</span>
              </div>
              <a
                href="https://github.com/shafvantalat"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                View my GitHub →
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}