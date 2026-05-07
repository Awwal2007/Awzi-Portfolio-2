import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold tracking-tighter mb-8">Let's build<br/>something great.</h2>
          <Link 
            href="mailto:hello@awzi.dev" 
            className="text-2xl font-light hover:text-accent transition-colors underline underline-offset-8"
          >
            hello@awzi.dev
          </Link>
        </div>
        
        <div className="flex flex-col md:items-end justify-between">
          <div className="flex gap-8 text-sm tracking-widest uppercase mb-12">
            <Link href="https://github.com/Awwal2007" className="hover:text-accent transition-colors">GitHub</Link>
            <Link href="https://linkedin.com" className="hover:text-accent transition-colors">LinkedIn</Link>
            <Link href="https://instagram.com" className="hover:text-accent transition-colors">Instagram</Link>
          </div>
          
          <div className="text-muted-foreground text-sm flex flex-col md:items-end">
            <p>© {new Date().getFullYear()} AWZI. All rights reserved.</p>
            <p className="mt-2 opacity-50">Designed with passion, built with precision.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
