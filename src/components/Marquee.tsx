"use client";

import { motion } from "framer-motion";

export const Marquee = () => {
  const words = ["Bespoke Portaiture", "Hand-Drawn", "Graphite Excellence", "Manual Precision", "Personal Commissions", "2026 Studio", "Artisanal"];

  return (
    <div className="relative py-12 md:py-20 bg-zinc-950 text-white overflow-hidden flex flex-nowrap border-y border-zinc-800">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 40,
          ease: "linear",
          repeat: Infinity
        }}
        className="flex whitespace-nowrap gap-12 md:gap-24 uppercase font-serif text-5xl md:text-8xl tracking-tighter italic font-medium"
      >
        {/* WE DUPLICATE FOR INFINITY EFFECT */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 md:gap-24 pr-12 md:pr-24">
             {words.map((word) => (
                <span key={word} className="flex items-center gap-12 md:gap-24 after:content-['•'] after:text-zinc-600 after:text-2xl last:after:content-none whitespace-nowrap">
                   {word}
                </span>
             ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
