'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "p-6 bg-slate-800/20 backdrop-blur-md border border-slate-700/30 rounded-xl hover:bg-slate-700/25 hover:border-slate-600/40 transition-all duration-300 shadow-lg hover:shadow-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}