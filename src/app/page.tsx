'use client';

import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { Reviews } from "@/components/Reviews";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { Loading } from "@/components/Loading";
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Loading onLoadingComplete={() => setLoading(false)} />
      
      <AnimatePresence>
        {!loading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <Toaster position="top-center" richColors />
            <Navbar />
            <Hero />
            <Expertise />
            <Projects />
            <Reviews />
            <Skills />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
