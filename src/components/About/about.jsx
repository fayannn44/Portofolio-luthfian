import { motion } from "framer-motion";

export default function About() {
  const text = `
  Halo! Saya Luthfian — seorang Front-End Developer yang suka membangun tampilan website yang modern, rapi, dan penuh animasi halus. 
  Saya fokus membuat pengalaman pengguna yang nyaman, responsif, dan terlihat profesional. 
  Coding bagi saya bukan cuma pekerjaan, tapi cara untuk menuangkan ide menjadi sesuatu yang hidup dan bermanfaat.
  `;

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white pt-[220px] pb-24 px-6">
      {/* ↑↑↑ Bagian ini dibawahin (pt-[220px]) */}

      <div className="max-w-4xl mx-auto text-left">

        {/* JUDUL */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-extrabold mb-12 text-black"
        >
          Tentang Saya
        </motion.h2>

        {/* TEKS ANIMASI PER KATA */}
        <motion.p
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-[33px] text-gray-700 leading-relaxed font-medium"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={child}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

      </div>
    </section>
  );
}
