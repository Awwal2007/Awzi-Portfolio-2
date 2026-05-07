'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });


      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-6">Contact</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-12">
            Let's start a <span className="text-muted italic font-light">conversation</span>.
          </h3>
          <p className="text-muted text-lg mb-12 font-light leading-relaxed">
            Whether you have a specific project in mind or just want to say hello, 
            I'm always open to discussing new opportunities and creative ideas.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="group">
              <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">Location</p>
              <p className="text-xl">Lagos, Nigeria</p>
            </div>
            <div className="group">
              <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">Phone</p>
              <p className="text-xl">+234 903 711 8808</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="NAME"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-colors tracking-widest uppercase text-sm"
              />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-colors tracking-widest uppercase text-sm"
              />
            </div>
            <div className="relative group">
              <textarea 
                rows={4}
                placeholder="MESSAGE"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-colors tracking-widest uppercase text-sm resize-none"
              />
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
            className="w-full bg-foreground text-background py-6 rounded-full font-bold tracking-[0.2em] uppercase text-sm hover:bg-accent transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </div>
    </section>
  );
};
