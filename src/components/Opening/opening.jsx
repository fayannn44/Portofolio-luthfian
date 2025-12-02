import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Opening({ onFinish }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExit(true), 3000);
    const finish = setTimeout(() => onFinish && onFinish(), 3800);

    return () => {
      clearTimeout(timer);
      clearTimeout(finish);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: exit ? "-100%" : 0 }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-3 z-[9999]"
    >
      <div className="flex flex-col gap-6 text-center select-none">
        {/* MAIN WORDS */}
        {["DESIGN", "MOVE", "CREATE"].map((word, i) => (
          <motion.h1
            key={word}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 + i * 0.35,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-[55px] sm:text-[90px] font-bold text-black tracking-tight"
          >
            {word}
          </motion.h1>
        ))}
      </div>

      {/* TAGLINE + NAME */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
        className="text-center mt-6"
      >
        <p className="text-[14px] sm:text-[16px] tracking-wide font-medium text-black/70 uppercase">
          Creative Developer & Digital Designer
        </p>
        <p className="text-[16px] sm:text-[20px] font-bold text-black mt-1 tracking-tight">
          LUTHFIAN AZZAM
        </p>
      </motion.div>

      {/* Aesthetic Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </motion.div>
  );
}
