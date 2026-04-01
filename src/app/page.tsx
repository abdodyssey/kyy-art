"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { CustomCursor } from "@/components/CustomCursor";
import { Pricing } from "@/components/Pricing";
import Link from "next/link";
import { WHATSAPP_URL } from "@/constants/dummy";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Jasa Sketsa Wajah Manual",
    "provider": {
      "@type": "Person",
      "name": "Muhammad Rizky",
      "brand": {
        "@type": "Brand",
        "name": "KYY ART"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ogan Ilir",
        "addressRegion": "Sumatera Selatan",
        "addressCountry": "ID"
      }
    },
    "description": "Jasa sketsa wajah manual & digital painting premium untuk kado unik.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": "100000",
      "availability": "https://schema.org/InStock",
      "url": "https://kyy.art"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white text-zinc-950 selection:bg-zinc-950 selection:text-white scroll-smooth overflow-x-hidden cursor-none">
        
        {/* CUSTOM CURSOR */}
        <CustomCursor />

        {/* 1. NAVBAR */}
        <Navbar aria-label="Main Navigation" />

        {/* 2. HERO SECTION */}
        <Hero />
        
        {/* 2.5 MARQUEE TICKER */}
        <Marquee />

        {/* 2.7 ABOUT THE ARTIST */}
        <About />

        {/* 3. GALLERY PREVIEW */}
        <GalleryPreview />

        {/* 4. PRICING & PROCESS */}
        <Pricing />

        {/* 5. FOOTER - MINIMAL GALLERY FOOTER */}
        <footer className="py-48 px-6 md:px-12 border-t border-zinc-100 flex flex-col items-center bg-white" aria-label="Site Footer">
          <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-24 items-start">
              
              {/* LOGO - SIGNATURE STYLE */}
              <div className="md:col-span-6">
                  <Link href="/" className="text-4xl md:text-5xl font-serif italic tracking-tighter block mb-8" aria-label="Halaman Utama KYY ART">
                  kyy.<span className="not-italic font-sans font-bold text-sm uppercase tracking-widest ml-1">art</span>
                  </Link>
                  <div className="max-w-xs">
                      <p className="text-zinc-410 text-sm leading-relaxed font-sans font-medium">Bespoke manual portrait sketches for the discerning collector from a private studio in <span className="text-zinc-950">Ogan Ilir, Sumatera Selatan.</span></p>
                  </div>
              </div>

              {/* NAV LINKS */}
              <div className="md:col-span-3 flex flex-col gap-6">
                  <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-[0.2em] mb-4">Navigasi</span>
                  <div className="flex flex-col gap-4">
                    {["Portfolio", "Tentang", "Harga"].map((link) => (
                      <Link key={link} href={`#${link.toLowerCase()}`} className="text-xl font-serif tracking-tighter hover:italic transition-all">
                        {link}
                      </Link>
                    ))}
                  </div>
              </div>

              {/* INFO CONTACT */}
              <div className="md:col-span-3 flex flex-col gap-6">
                  <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-[0.2em] mb-4">Mulai Kolaborasi</span>
                  <Link href={WHATSAPP_URL} target="_blank" className="font-serif text-2xl tracking-tighter hover:italic" aria-label="Hubungi Muhammad Rizky via WhatsApp">Pesan via WhatsApp</Link>
                  <Link href="#" className="font-serif text-2xl tracking-tighter hover:italic" aria-label="Follow KYY ART on Instagram">Instagram Portfolio</Link>
                  <Link href="#" className="font-serif text-2xl tracking-tighter hover:italic" aria-label="Contact via Email">Email Studio</Link>
              </div>
          </div>

          <div className="max-w-[1400px] w-full mx-auto mt-48 pt-12 border-t border-zinc-50 flex flex-row justify-between items-center gap-8">
              <p className="text-zinc-300 text-[10px] uppercase font-bold tracking-[0.2em]">
                  <Link href="/admin" className="cursor-default">©</Link> 2026 KYY.ART. Semua Hak Cipta Dilindungi.
              </p>

              <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-zinc-300 text-[10px] uppercase font-bold tracking-[0.2em] hover:text-zinc-950 transition-colors"
                  aria-label="Scroll ke atas halaman"
              >
                  Kembali ke Atas
              </button>
          </div>
        </footer>
      </main>
    </>
  );
}
