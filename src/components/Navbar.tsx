"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/constants/dummy";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Portfolio", href: "/#gallery" },
    { name: "Process", href: "/#process" },
    { name: "Tools", href: "/tools" },
    { name: "Inquiry", href: "/#pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-100/50 h-20 flex items-center px-6 md:px-12">
      <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center">
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
              className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400 hover:text-zinc-950 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href={WHATSAPP_URL}
            target="_blank"
            className="bg-zinc-950 text-white px-8 py-3 rounded-none text-xs uppercase tracking-widest font-bold hover:bg-zinc-800 transition-all text-center"
            aria-label="Pesan Sketsa Wajah via WhatsApp"
          >
            Order
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden p-2 text-zinc-950 focus:outline-none"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-zinc-100 shadow-2xl h-screen overflow-hidden"
          >
            <div className="flex flex-col p-12 space-y-8 h-full bg-white">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-serif tracking-tighter"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-12 border-t border-zinc-100">
                <Link 
                  href={WHATSAPP_URL}
                  target="_blank"
                  className="w-full bg-zinc-950 text-white px-6 py-6 text-sm uppercase tracking-widest font-bold block text-center"
                >
                  Book A Commission
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
