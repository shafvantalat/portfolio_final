'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const socialLinks = [
  { icon: <Github size={20} />, href: 'https://github.com/shafvantalat', label: 'GitHub' },
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/muhammed-shafvan-121585215', label: 'LinkedIn' },
  { icon: <Instagram size={20} />, href: 'https://instagram.com/shafvantalat_', label: 'Instagram' },
  { icon: <Mail size={20} />, href: 'mailto:muhammedshafvan269@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-slate-800/40 backdrop-blur-md border border-slate-700/40 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/40 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-slate-400">
              © 2025 All rights reserved – Muhammed Shafvan
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}