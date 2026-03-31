"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/dummy";
import Link from "next/link";

export const Pricing = () => {
  const plans = [
    {
      id: 1,
      title: "The Standard Sketch (A4)",
      price: "100k",
      description: "Ideal for intimate and warm personal collections.",
      features: ["Fine-Grain Kertas A4", "Premium Graphite Pensil", "Hardboard Protection Packing", "Secure Tracked Delivery", "3—5 Business Days"],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-64 bg-zinc-950 text-white px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-[1400px] w-full mx-auto">
        {/* HEADER - HIGH CONTRAST */}
        <div className="text-left mb-48 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-xs mb-8 block"
          >
            Commission Inquiry
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10vw] md:text-[6vw] font-serif font-medium mb-12 leading-[0.9] tracking-tighter"
          >
            Abadikan <br /> <span className="italic block mt-4">Wajah Tersayang.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-xl font-sans max-w-xl leading-relaxed"
          >
            Setiap karya adalah dedikasi kreatif yang mendalam. Kami membantu Anda mengabadikan detail karakter wajah dengan medium manual terbaik.
          </motion.p>
        </div>

        {/* PROCESS STEPS - STORYTELLING FLOW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-64 max-w-7xl mx-auto">
          {/* PRICE CARD - MINIMAL & CLEAN */}
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative p-12 md:p-16 border border-zinc-800 bg-zinc-950 flex flex-col items-start gap-12"
            >
              <div className="w-full flex justify-between items-start">
                <div>
                  <h3 className="text-4xl font-serif font-bold mb-4 tracking-tighter">{plan.title}</h3>
                  <p className="text-zinc-500 text-sm">{plan.description}</p>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold text-zinc-500 mb-2">Starts at</span>
                    <span className="text-6xl font-serif text-white">{plan.price}</span>
                </div>
              </div>

              <div className="w-full h-px bg-zinc-800" />

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-400 text-xs uppercase tracking-widest font-medium">
                    <div className="w-4 h-4 border border-zinc-700 flex items-center justify-center">
                      <Check strokeWidth={1.5} size={10} className="text-zinc-500" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                href={WHATSAPP_URL}
                target="_blank"
                className="w-full py-8 mt-4 bg-white text-zinc-950 text-xs uppercase tracking-[0.2em] font-black hover:bg-zinc-200 transition-all flex items-center justify-center gap-4 text-center"
              >
                BOOK THIS SERVICE <ArrowRight strokeWidth={1.5} size={16} />
              </Link>
            </motion.div>
          ))}

          {/* PROCESS BLOCK */}
          <div className="flex flex-col gap-12 justify-center">
            {[
              { id: "01", title: "Capture", desc: "Kirimkan foto dengan pencahayaan terbaik untuk menangkap karakter asli wajah." },
              { id: "02", title: "Interpret", desc: "Dedikasi kreatif kami tuangkan dalam setiap garis pensil (estimasi 3-7 hari)." },
              { id: "03", title: "Deliver", desc: "Hasil fisik dikirim dengan proteksi maksimal ke alamat Anda." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-12 group"
              >
                <div className="text-4xl md:text-5xl font-serif font-medium text-zinc-800 transition-colors group-hover:text-white pointer-events-none">
                  {step.id}
                </div>
                <div>
                    <h4 className="text-xl md:text-2xl font-serif font-bold mb-2 group-hover:text-white transition-colors">{step.title}</h4>
                    <p className="text-zinc-500 max-w-sm text-sm leading-relaxed tracking-tight group-hover:text-zinc-400 transition-colors">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
