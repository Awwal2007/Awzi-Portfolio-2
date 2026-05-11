'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Jonathan Reeves",
    role: "CEO, TechFlow Systems",
    content: "Awwal's ability to translate complex business requirements into elegant digital solutions is unparalleled. The user interface he developed for our platform saw a 40% increase in user engagement.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Product Lead, Creative Pulse",
    content: "Working with Awwal was a seamless experience. He doesn't just write code; he thinks about the user journey and the brand identity in every pixel. Truly a senior-level talent.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Director of Engineering, VeloCity",
    content: "Exceptional technical depth combined with a refined eye for design. He delivered a robust Next.js architecture that exceeded our performance benchmarks while looking absolutely stunning.",
    rating: 5
  }
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-6">Client Feedback</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Testimonials</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group p-10 bg-white border border-border rounded-3xl hover:border-accent transition-colors duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <div className="relative mb-8">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-accent/10 group-hover:text-accent/20 transition-colors" />
                  <p className="text-xl text-muted font-light leading-relaxed italic relative z-10">
                    "{review.content}"
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-8">
                <h4 className="text-lg font-bold tracking-tight">{review.name}</h4>
                <p className="text-sm text-accent font-medium tracking-wide">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
