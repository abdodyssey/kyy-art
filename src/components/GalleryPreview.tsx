"use client";

import { ART_WORKS } from "@/constants/dummy";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const GalleryPreview = () => {
  return (
    <section id="gallery" className="py-48 px-6 md:px-12 max-w-[1400px] mx-auto bg-white">
      {/* HEADER - MINIMAL & EDITORIAL */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
        <div className="max-w-xl">
          <span className="text-zinc-400 font-medium uppercase tracking-[0.4em] text-xs mb-6 block">
            The Selected Works
          </span>
          <h2 className="text-4xl md:text-8xl font-serif font-medium leading-[0.9] tracking-tighter text-zinc-950">
            Capturing <br /> <span className="italic block mt-4 pr-12">Fine Details.</span>
          </h2>
        </div>
        <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-950 hover:gap-6 transition-all duration-300 border-b border-zinc-950 pb-2" aria-label="Lihat Semua Portofolio">
          View All Commissions <ArrowUpRight strokeWidth={1.5} size={20} />
        </button>
      </div>

      {/* ASYMMETRICAL GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-x-12">
        {ART_WORKS.map((art, index) => {
          // Asymmetrical layout logic: manually staggering columns
          const isOdd = index % 2 !== 0;
          const colSpan = index === 0 ? "md:col-span-8" : isOdd ? "md:col-span-5 md:col-start-7" : "md:col-span-6";
          const mt = isOdd ? "md:-mt-24" : "md:mt-0";

          return (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group block relative overflow-visible ${colSpan} ${mt}`}
            >
              {/* IMAGE CONTAINER - MINIMAL */}
              <div className="relative overflow-hidden aspect-3/4 bg-zinc-100 flex items-center justify-center grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={art.image}
                  alt={`Sketsa Wajah Manual - ${art.title} oleh KYY ART`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 select-none pointer-events-none"
                  draggable={false}
                />
                
                {/* PROTECTIVE OVERLAY */}
                <div 
                  className="absolute inset-0 z-20 cursor-default" 
                  onContextMenu={(e) => e.preventDefault()}
                />
                
                {/* WATERMARK */}
                <div className="absolute bottom-6 right-6 text-[10px] font-bold text-white/50 tracking-widest uppercase pointer-events-none select-none z-30">
                  © KYY ART
                </div>
              </div>

              {/* ART INFO - REFINED */}
              <div className="mt-8">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-2 block">
                  {art.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-zinc-950 flex items-center gap-4">
                  {art.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
