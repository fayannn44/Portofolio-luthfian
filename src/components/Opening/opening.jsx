import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Opening({ onFinish }) {
  const [visible, setVisible] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Step 1: Fade out text + mulai slide screen
      setSlideUp(true);

      // Step 2: hilangkan setelah animasi selesai
      setTimeout(() => {
        setVisible(false);
        onFinish();
      }, 1200);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
          initial={{ y: 0, opacity: 1 }}
          animate={slideUp ? { y: "-100%", opacity: 0.8 } : { y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={slideUp ? { opacity: 0, y: -20, filter: "blur(8px)" } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white tracking-widest"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              LUTHFIAN
            </motion.h1>

            <motion.p
              className="text-gray-300 mt-4 text-lg md:text-2xl tracking-wide"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
            >
              Front-End Developer
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
