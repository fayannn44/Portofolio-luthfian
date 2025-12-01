import React from "react";
import { motion } from "framer-motion";

export default function BrutalistKalcerSection() {
  const projects = [
    {
      id: 1,
      title: "Outlined Ultra Poster",
      desc: "Poster outline tebal dengan vibe editorial modern.",
      side: "Eksperimen garis tebal dan ruang kosong yang bikin kontras ekstrem.",
      image: "/images/m1.jpg",
      cta: "View Project",
    },
    {
      id: 2,
      title: "Broken Grid Aesthetic",
      desc: "Grid patah bergaya editorial brutalist.",
      side: "Layout tidak beraturan yang tetap rapi saat mobile.",
      image: "/images/m2.jpg",
      cta: "Explore",
    },
    {
      id: 3,
      title: "Sharp Editorial Blocks",
      desc: "Block-block tajam ala magazine layout.",
      side: "Visual yang kaku tapi tetap kalcer, cocok untuk identity design.",
      image: "/images/m3.jpg",
      cta: "See Details",
    },
    {
      id: 4,
      title: "Collage Motion Deck",
      desc: "Kolase motion mix modern.",
      side: "Eksperimen shape, cropping dan dinamika visual.",
      image: "/images/m4.jpg",
      cta: "Open",
    },
  ];

  const cardAnim = {
    initial: { opacity: 0, y: 40, scale: 0.97 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative w-full bg-[#dcdcdc] py-24 px-6 sm:px-12">
      {/* BIG BG TITLE */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-10 select-none">
        <h1 className="text-[120px] sm:text-[180px] font-extrabold text-black tracking-tight">
          PROJECTS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-24">
          <div className="w-[3px] h-32 bg-black mb-4"></div>
          <div className="px-6 py-3 bg-black text-white font-bold uppercase shadow-[6px_6px_0_#000]">
            Brutalist x Aesthetic Designer
          </div>
        </div>

        {/* ZIGZAG LAYOUT */}
        <div className="flex flex-col gap-24">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              custom={i}
              initial="initial"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardAnim}
              className={`relative flex flex-col sm:flex-row items-center gap-10`}
            >
              {/* TEXT DI LUAR (DESKTOP) */}
              <div
                className={`hidden sm:block w-1/3 ${
                  i % 2 === 0 ? "order-1 text-left" : "order-2 text-right"
                }`}
              >
                <h3 className="font-extrabold text-xl uppercase">{p.title}</h3>
                <p className="text-sm mt-2 text-black/80">{p.side}</p>
              </div>

              {/* CARD */}
              <div
                className={`relative w-full max-w-xl border-2 border-black bg-white rounded-xl shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#000] transition-all overflow-hidden ${
                  i % 2 === 0 ? "sm:order-2 -rotate-2" : "sm:order-1 rotate-2"
                }`}
              >
                {/* top bar */}
                <div className="absolute top-0 left-0 w-full h-7 bg-black text-white text-[10px] px-2 flex items-center uppercase">
                  {p.title}
                </div>

                <div className="aspect-[4/3] overflow-hidden mt-7">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* TEXT MASUK DALAM (MOBILE) */}
                <div className="p-6 sm:hidden">
                  <h4 className="text-lg font-extrabold uppercase">{p.title}</h4>
                  <p className="text-sm mt-1 text-black/70">{p.desc}</p>
                </div>

                {/* CTA BUTTON — selalu muncul */}
                <div className="px-6 pb-6">
                  <button className="mt-4 px-5 py-2 bg-black text-white text-xs uppercase font-bold shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] transition-all">
                    {p.cta}
                  </button>
                </div>
              </div>

              {/* spacer sisi kanan/kiri biar zigzag rapi */}
              <div
                className={`hidden sm:block w-1/3 ${
                  i % 2 === 0 ? "order-3" : "order-0"
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
