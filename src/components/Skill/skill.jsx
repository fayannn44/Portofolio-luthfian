import { motion } from "framer-motion";

// SKILL DATA ==========================================================
const skills = [
  {
    name: "HTML",
    desc: "Struktur dasar halaman web.",
    img: "/img/html.png",
  },
  {
    name: "CSS",
    desc: "Styling modern & responsive.",
    img: "/img/css.png",
  },
  {
    name: "JavaScript",
    desc: "Logic & interaktivitas website.",
    img: "/img/js.png",
  },
  {
    name: "React",
    desc: "Frontend framework cepat & modular.",
    img: "/img/react.png",
  },
  {
    name: "Tailwind CSS",
    desc: "Utility-first styling.",
    img: "/img/tailwind.png",
  },
  {
    name: "Framer Motion",
    desc: "Animasi smooth & sinematik.",
    img: "/img/framer.png",
  },
  {
    name: "Git",
    desc: "Version control untuk developer.",
    img: "/img/git.png",
  },
  {
    name: "UI/UX",
    desc: "Design yang fokus user experience.",
    img: "/img/uiux.png",
  },
];

// POSISI FIXED ========================================================
const skillsLayout = [
  { top: "5%", left: "10%", rotate: "-3deg" },
  { top: "15%", left: "55%", rotate: "2deg" },
  { top: "30%", left: "25%", rotate: "-2deg" },
  { top: "45%", left: "70%", rotate: "1deg" },
  { top: "60%", left: "15%", rotate: "3deg" },
  { top: "72%", left: "55%", rotate: "-1deg" },
  { top: "40%", left: "5%", rotate: "-2deg" },
  { top: "80%", left: "30%", rotate: "2deg" },
];

export default function SkillSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#0f0f0f] text-white py-40 overflow-hidden">
      
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-6xl font-extrabold tracking-tight mb-20"
      >
        Skills
      </motion.h2>

      {/* FIXED CHAOTIC LAYOUT */}
      <div className="relative w-full max-w-6xl mx-auto h-[1200px]">

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="absolute p-6 rounded-xl 
                       backdrop-blur-md bg-white/5 border border-white/10
                       shadow-[0_0_30px_rgba(255,255,255,0.1)]
                       hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]
                       transition-all"
            style={{
              top: skillsLayout[i].top,
              left: skillsLayout[i].left,
              rotate: skillsLayout[i].rotate,
              width: "220px",
            }}
          >
            {/* ICON */}
            <div className="w-full flex justify-center mb-3">
              <img src={skill.img} className="w-12 opacity-80" />
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-white/70">
              {skill.desc}
            </p>

            {/* LINE */}
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}
              className="h-[2px] bg-white/40 mt-3"
            />
          </motion.div>
        ))}

      </div>
    </section>
  );
}
