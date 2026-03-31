"use client";

import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { motion } from "framer-motion";
import Link from "next/link";
import { WHATSAPP_URL } from "@/constants/dummy";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 cursor-none">
      <CustomCursor />
      <Navbar />

      {/* HERO SECTION - COMING SOON SCALE */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-zinc-400 font-bold uppercase tracking-[0.4em] text-xs mb-8 block"
          >
            Behind the Scenes
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[12vw] md:text-[8vw] font-serif leading-[0.8] tracking-tighter mb-12"
          >
            Coming <br /> <span className="italic block mt-4 pr-32">Soon.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-12"
          >
            <div className="w-12 h-px bg-zinc-200" />
            <p className="text-xl md:text-2xl text-zinc-500 font-sans leading-relaxed tracking-tight max-w-lg">
                Tunggu tanggal mainnya. Kami akan segera <span className="text-zinc-950 font-medium">spill</span> seluruh senjata rahasia di balik setiap garis sketsa KYY ART di sini.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="mt-32"
          >
             <Link href="/" className="text-xs font-bold uppercase tracking-[0.4em] border-b border-zinc-950 pb-2 hover:pb-4 transition-all">
                Kembali Jelajahi Galeri
             </Link>
          </motion.div>
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="py-24 px-6 md:px-12 border-t border-zinc-50 flex flex-col items-center bg-white">
          <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-zinc-300 text-[10px] uppercase font-bold tracking-[0.2em]">© 2026 KYY.ART.</p>
              <div className="flex gap-12">
                  <Link href={WHATSAPP_URL} className="text-zinc-400 text-[10px] uppercase font-bold tracking-[0.2em] hover:text-zinc-950 transition-colors">Order</Link>
                  <Link href="/#gallery" className="text-zinc-400 text-[10px] uppercase font-bold tracking-[0.2em] hover:text-zinc-950 transition-colors">Gallery</Link>
              </div>
          </div>
      </footer>
    </main>
  );
}
