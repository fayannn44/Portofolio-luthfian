import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black py-16">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

    {/* Brand */}
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold tracking-tight">LUTHFIAN</h2>
      <p className="text-sm opacity-70">
        Portfolio digital yang simple, bersih, dan fokus pada kreativitas.
      </p>
      <button className="mt-4 w-fit px-5 py-2 bg-black text-white rounded-xl hover:opacity-80 transition">
        Get in Touch
      </button>
    </div>

    {/* Links */}
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold">Navigation</h3>
      <ul className="space-y-2 text-sm opacity-70">
        <li><a href="#about" className="hover:opacity-100 transition">About Me</a></li>
        <li><a href="#projects" className="hover:opacity-100 transition">Projects</a></li>
        <li><a href="#skills" className="hover:opacity-100 transition">Skills</a></li>
        <li><a href="#contact" className="hover:opacity-100 transition">Contact</a></li>
      </ul>
    </div>

    {/* Description */}
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold">More Info</h3>
      <p className="text-sm opacity-70 leading-relaxed">
        Saya membuat desain modern, layout bersih, dan animasi halus menggunakan
        React, Tailwind, dan Framer Motion. Fokus pada pengalaman visual yang
        sederhana tapi impactful.
      </p>
    </div>
  </div>

  {/* Bottom */}
  <div className="mt-16 text-center text-sm opacity-60">
    © 2025 Luthfian — All rights reserved.
  </div>
</footer>

  );
}
