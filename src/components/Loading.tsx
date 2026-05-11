'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const Loading = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 800); // Call onComplete after exit animation
    }, 2000); 

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { 
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              className="mb-8"
            >
              <Image
                src="/projects/my-dev-logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="w-32 md:w-48 h-auto object-contain"
                priority
              />
            </motion.div>
            
            <div className="w-48 h-[2px] bg-border relative overflow-hidden rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ 
                  x: '100%',
                  transition: { 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="absolute inset-0 bg-accent"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.5, duration: 0.8 }
              }}
              className="mt-6 text-sm font-bold tracking-[0.3em] uppercase text-accent"
            >
              Initializing Excellence
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
