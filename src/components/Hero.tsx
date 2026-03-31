"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/dummy";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-white overflow-hidden flex flex-col items-center">
      
      {/* LARGE EDITORIAL HEADING */}
      <div className="w-full text-center relative">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.4em] font-medium text-zinc-400 mb-8 block lg:mb-12"
        >
          Curated Manual Portaiture
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[12vw] md:text-[10vw] font-serif leading-[0.85] tracking-tighter text-zinc-950 flex flex-col gap-4"
        >
          <span className="block italic pr-[15vw]">The Human</span>
          <span className="block pl-[10vw] -mt-[2vw]">Expression.</span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="mt-20 md:mt-32 max-w-xl mx-auto flex flex-col md:flex-row items-center gap-12 text-left"
        >
          <div className="w-px h-16 bg-zinc-200 hidden md:block" />
          <p className="text-xl md:text-2xl text-zinc-500 font-sans leading-relaxed tracking-tight">
            Capturing the nuances of the human soul through bespoke Graphite sketches. A commitment to silence and precision.
          </p>
        </motion.div>
      </div>

      {/* MINIMAL BUTTONS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-24 px-6 md:px-0"
      >
        <Link 
          href={WHATSAPP_URL}
          target="_blank"
          className="bg-zinc-950 text-white px-16 py-8 rounded-none text-sm uppercase tracking-[0.2em] font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 group text-center"
        >
          START COMMISSION
          <ArrowRight strokeWidth={1.5} size={20} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </motion.div>

      {/* EMPTY AREA FOR WHITESPACE FOCUS */}
      <div className="h-48 md:h-64" />
    </section>
  );
};
