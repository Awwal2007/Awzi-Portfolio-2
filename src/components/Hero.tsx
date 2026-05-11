'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const words = ['ELEGANCE', 'EXCELLENCE', 'INNOVATION'];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      const shouldDelete = isDeleting;
      
      setDisplayedText(prev => {
        if (shouldDelete) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });

      if (!shouldDelete && displayedText === currentWord) {
        setSpeed(2000); // Wait before deleting
        setIsDeleting(true);
      } else if (shouldDelete && displayedText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        setSpeed(150);
      } else {
        setSpeed(isDeleting ? 75 : 150);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, speed]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-30 pb-10 overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        {/* Subtle noise/grain effect could be added here via CSS */}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.p 
            variants={itemVariants}
            className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6"
          >
            Full-Stack Developer & Designer
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-[6rem] font-bold tracking-tighter leading-[0.9] mb-12"
          >
            CRAFTING<br/>
            DIGITAL<br/>
            <span className="text-accent italic">
              {displayedText}
              <span className="inline-block w-[1px] h-[0.9em] bg-accent ml-1 animate-pulse align-middle" />
            </span>
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl md:text-1xl text-muted leading-relaxed font-light mb-12">
              I transform complex challenges into seamless, high-end digital experiences 
              that blend technical excellence with sophisticated design.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="#projects" 
                className="inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase border-b-2 border-accent pb-2 hover:text-accent transition-colors"
              >
                View My Work
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-px h-24 bg-foreground"></div>
      </div>
    </section>
  );
};
