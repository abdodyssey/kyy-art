"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-48 px-6 md:px-12 max-w-[1400px] mx-auto bg-white border-t border-zinc-100/50">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12 items-center">
        
        {/* TEXT AREA - EDITORIAL STYLE */}
        <div className="md:col-span-12 lg:col-span-6">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 font-bold uppercase tracking-[0.4em] text-xs mb-8 block"
          >
            Balik Goresan Pensil
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-serif font-medium leading-[0.9] tracking-tighter text-zinc-950 mb-12"
          >
            Kesabaran Adalah <br /> <span className="italic block mt-4">Kunci Proses.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8 text-zinc-500 font-sans leading-relaxed tracking-tight max-w-lg"
          >
            <p className="text-xl md:text-2xl text-zinc-950/80 font-medium italic">
                &ldquo;Bagi saya, setiap wajah adalah pelajaran tentang detail yang tak pernah usai.&rdquo;
            </p>
            <p className="text-lg">
                Dibalik KYY ART adalah <span className="text-zinc-950 font-bold">Muhammad Rizky</span>, seorang pelajar kelas 9 MTs asal Ogan Ilir, Palembang, yang mendedikasikan waktu diluar sekolah untuk mengasah ketajaman garis melalui sketsa wajah manual. 
            </p>
            <p className="text-lg">
                Berawal dari kecintaan pada media kertas dan pensil graphite, kini perjalanan kreatif saya mulai merambah ke dunia digital art. Setiap goresan adalah bukti proses belajar dan komitmen untuk menangkap karakter unik dari setiap subjek yang saya temui.
            </p>
          </motion.div>
        </div>

        {/* IMAGE AREA - MINIMALIST */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col justify-center items-center lg:items-end"
        >
          <div className="relative">
             <span className="text-[15vw] lg:text-[12vw] font-serif italic tracking-tighter text-zinc-950 block leading-none">
                Kyy.
             </span>
             <div className="mt-8 flex flex-col items-center lg:items-end gap-2">
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.4em]">Keaslian Goresan Tangan</span>
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.4em]">Sejak 2026</span>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
