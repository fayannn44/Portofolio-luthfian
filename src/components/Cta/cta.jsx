import React from "react";
import { motion } from "framer-motion";

// CLEAN BRUTALIST CTA SECTION
// - Background putih
// - Hitam / putih only
// - Bold, editorial, brutalist
// - Motion halus

export default function CTASection() {
  return (
    <section className="w-full bg-white py-28 px-6 sm:px-12 border-t-2 border-black">
      <div className="max-w-5xl mx-auto text-center">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-black"
        >
          Ready To Build Something Brutal & Aesthetic?
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-black/70 max-w-2xl mx-auto mt-6 text-sm sm:text-base leading-relaxed"
        >
          Gue ngerjain design yang editorial, brutalist, modern, dan aesthetic. Kalau lu butuh website, poster, identity visual, atau layout yang beda dari yang lain — langsung kontak.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          {/* MAIN CTA */}
          <button className="px-8 py-4 bg-black text-white uppercase font-bold text-sm tracking-wide shadow-[6px_6px_0_#000] hover:shadow-[10px_10px_0_#000] transition-all">
            Contact Me
          </button>

          {/* SECONDARY CTA */}
          <button className="px-8 py-4 border-2 border-black bg-white text-black uppercase font-bold text-sm tracking-wide shadow-[6px_6px_0_#000] hover:bg-black hover:text-white transition-all">
            View Any Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
