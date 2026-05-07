'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'LuxeEstates',
    category: 'Real Estate Platform',
    image: '/projects/luxe-estate.png',
    description: 'A high-end real estate platform showcasing elite properties with a focus on elegant design and premium user experience.',
    link: 'https://luxe-estate-beta.vercel.app/',
  },
  {
    title: 'EatEasy Ecommerce',
    category: 'Full-Stack Development',
    image: '/projects/eat-easy.png',
    description: 'A premium food ordering platform built with Next.js and Node.js. Featuring seamless payments and real-time order tracking.',
    link: 'https://eat-easy-frontend.vercel.app/',
  },
  {
    title: 'Carrio Motors',
    category: 'Full-Stack Development',
    image: '/projects/carrio-motors.png',
    description: 'A premium automotive platform for luxury car enthusiasts, featuring a sleek inventory management system and modern UI.',
    link: 'https://carrio-mottors-a.vercel.app/',
  },
  {
    title: 'Tuscany Tours',
    category: 'Web Design',
    image: '/projects/tourTuscany.png',
    description: 'A minimalist travel agency landing page with immersive visual storytelling and smooth high-performance interactions.',
    link: 'https://awwal2007.github.io/tours-to-tuscany/',
  },
  {
    title: 'Belleville Dental',
    category: 'Frontend Development',
    image: '/projects/belleve.png',
    description: 'Clean and professional healthcare interface for a dental clinic.',
    link: 'https://awwal2007.github.io/Belleville-Dental/',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-6">Selected Works</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Case Studies</h3>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-3/5 overflow-hidden group rounded-2xl border border-border">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
              
              <div className="w-full md:w-2/5">
                <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4">{project.category}</p>
                <h4 className="text-4xl font-bold mb-6 tracking-tight">{project.title}</h4>
                <p className="text-muted text-lg mb-8 font-light leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold tracking-widest uppercase text-sm group"
                >
                  Explore Project
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
