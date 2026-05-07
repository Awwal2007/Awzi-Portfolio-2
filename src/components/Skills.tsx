'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 
  'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Framer Motion',
  'UI/UX Design', 'System Architecture', 'API Design'
];

export const Skills = () => {
  return (
    <section className="py-32 bg-foreground text-background overflow-hidden">
      <div className="flex flex-col gap-12">
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity, 
              duration: 20, 
              ease: "linear" 
            }}
            className="flex gap-24 items-center"
          >
            {[...skills, ...skills].map((skill, index) => (
              <span 
                key={index} 
                className="text-6xl md:text-8xl font-bold tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-default"
              >
                {skill}
              </span >
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
