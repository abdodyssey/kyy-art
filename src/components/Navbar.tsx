"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/constants/dummy";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "/#gallery" },
    { name: "Process", href: "/#process" },
    { name: "Tools", href: "/tools" },
    { name: "Inquiry", href: "/#pricing" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-4 md:px-12 flex items-center justify-center border-b
      ${isScrolled ? 'py-4 bg-transparent border-transparent' : 'h-24 bg-white/80 backdrop-blur-md md:bg-white border-zinc-100/50'}`}
    >
      <div 
        className={`max-w-[1400px] w-full mx-auto flex justify-between items-center transition-all duration-700 ease-in-out
        ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2 px-8 rounded-full' : ''}`}
      >




        {/* LOGO - SIGNATURE STYLE */}
        <Link 
          href="/" 
          className="text-2xl md:text-3xl font-serif italic tracking-tighter hover:opacity-70 transition-opacity"
        >
          kyy.<span className="not-italic font-sans font-bold text-xs uppercase tracking-widest ml-1">art</span>
        </Link>

        {/* DESKTOP NAV - MINIMAL */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400 hover:text-zinc-950 transition-colors py-4 inline-block"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href={WHATSAPP_URL}
            target="_blank"
            className={`bg-zinc-950 text-white px-8 h-10 flex items-center rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-zinc-800 transition-all text-center`}
            aria-label="Pesan Sketsa Wajah via WhatsApp"
          >
            Order
          </Link>
          <Link href="/admin" className="w-px h-px opacity-0 flex items-center justify-center cursor-default" tabIndex={-1}>.</Link>

        </div>



        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden w-11 h-11 flex items-center justify-center text-zinc-950 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
        </button>

      </div>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-100 bg-white/90 flex flex-col"

          >
            {/* Header in Overlay */}
            <div className="flex justify-between items-center px-6 h-24 border-b border-zinc-100">
              <Link 
                href="/" 
                className="text-2xl font-serif italic tracking-tighter"
                onClick={() => setIsOpen(false)}
              >
                kyy.<span className="not-italic font-sans font-bold text-xs uppercase tracking-widest ml-1">art</span>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-zinc-950"
              >
                <X strokeWidth={1.5} size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-center px-8 space-y-10">
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-[0.4em]">Index</span>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-5xl font-serif tracking-tighter hover:italic transition-all inline-block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-12 border-t border-zinc-100 flex flex-col space-y-8">
                <Link 
                  href={WHATSAPP_URL}
                  target="_blank"
                  className="w-full bg-zinc-950 text-white py-6 rounded-full text-xs uppercase tracking-widest font-bold block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Start Commission
                </Link>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="flex flex-col gap-2">
                      <span className="text-[8px] uppercase font-bold text-zinc-400 tracking-widest">Social</span>
                      <Link href="#" className="text-sm font-medium">Instagram</Link>
                   </div>
                   <div className="flex flex-col gap-2">
                      <span className="text-[8px] uppercase font-bold text-zinc-400 tracking-widest">Contact</span>
                      <Link href="#" className="text-sm font-medium">Email Studio</Link>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Footer in Overlay */}
            <div className="p-8 border-t border-zinc-50">
               <p className="text-[8px] uppercase font-bold text-zinc-300 tracking-[0.2em]">
                 <Link href="/admin" onClick={() => setIsOpen(false)}>©</Link> 2026 KYY.ART STUDIO
               </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

