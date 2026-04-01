"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/constants/dummy";

export const Navbar = () => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out flex items-center justify-center
      ${isScrolled 
        ? 'h-16 bg-white border-b border-zinc-100 md:bg-transparent md:border-none md:h-auto md:py-4 px-0 md:px-12' 
        : 'h-20 md:h-24 bg-white md:bg-white/80 backdrop-blur-md border-b border-zinc-100/50 px-6 md:px-12'}`}
    >
      <div 
        className={`max-w-[1400px] w-full mx-auto flex justify-between items-center transition-all duration-700 ease-in-out
        ${isScrolled ? 'md:bg-white/90 md:backdrop-blur-xl md:shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2 px-6 md:px-8 md:rounded-full' : 'px-0'}`}
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

      </div>
    </nav>
  );
};
