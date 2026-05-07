'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Cpu } from 'lucide-react';

export const Expertise = () => {
  const skills = [
    {
      title: 'Frontend Architecture',
      description: 'Building performance-first, scalable user interfaces with React, Next.js, and TypeScript. Focusing on micro-interactions and accessibility.',
      icon: <Code2 className="w-8 h-8" />,
    },
    {
      title: 'Visual Identity & UI',
      description: 'Crafting minimalist, editorial design systems that elevate brands. Expertise in typography, grid systems, and motion design.',
      icon: <Palette className="w-8 h-8" />,
    },
    {
      title: 'Backend Systems',
      description: 'Developing robust API infrastructures and database architectures using Node.js, PostgreSQL, and cloud-native technologies.',
      icon: <Database className="w-8 h-8" />,
    },
    {
      title: 'Emerging Tech',
      description: 'Integrating AI capabilities and optimizing high-performance applications for the modern web ecosystem.',
      icon: <Cpu className="w-8 h-8" />,
    },
  ];

  return (
    <section id="expertise" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-6">Expertise</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Solving problems through <span className="text-muted italic font-light">refined</span> engineering.
            </h3>
          </div>
          <p className="text-muted text-lg max-w-sm font-light">
            My approach blends creative vision with technical rigor to deliver products that feel as good as they look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border overflow-hidden">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-12 hover:bg-background transition-colors group"
            >
              <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                {skill.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">{skill.title}</h4>
              <p className="text-muted leading-relaxed font-light">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
