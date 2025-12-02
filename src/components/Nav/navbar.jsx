import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // === FUNCTION SCROLL TO SECTION ===
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto bg-black bg-opacity-70 backdrop-blur-md rounded-xl flex justify-between items-center px-4 py-2 mt-4 shadow-lg">

        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="logo.png" 
            alt="Logo" 
            className="h-10 w-auto object-contain" 
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white text-lg font-medium">
          <li 
            onClick={() => scrollToSection("home")}
            className="hover:text-gray-300 cursor-pointer transition"
          >
            Home
          </li>

          <li 
            onClick={() => scrollToSection("about")}
            className="hover:text-gray-300 cursor-pointer transition"
          >
            About
          </li>

          <li 
            onClick={() => scrollToSection("skill")}
            className="hover:text-gray-300 cursor-pointer transition"
          >
            Skill
          </li>

          <li 
            onClick={() => scrollToSection("project")}
            className="hover:text-gray-300 cursor-pointer transition"
          >
            Project
          </li>
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollToSection("cta")}
          className="hidden md:block ml-6 px-6 py-2 bg-white text-gray-800 font-semibold rounded-lg hover:opacity-80 transition"
        >
          Contact Me
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white font-semibold px-4 py-2 hover:opacity-80 transition"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-80 flex flex-col items-center py-6 space-y-4 md:hidden rounded-b-xl">

          <button 
            onClick={() => scrollToSection("home")}
            className="text-white text-lg hover:opacity-80 transition"
          >
            Home
          </button>

          <button 
            onClick={() => scrollToSection("about")}
            className="text-white text-lg hover:opacity-80 transition"
          >
            About
          </button>

          <button 
            onClick={() => scrollToSection("skill")}
            className="text-white text-lg hover:opacity-80 transition"
          >
            Skill
          </button>

          <button 
            onClick={() => scrollToSection("project")}
            className="text-white text-lg hover:opacity-80 transition"
          >
            Project
          </button>

          <button
            onClick={() => scrollToSection("cta")}
            className="px-6 py-2 bg-white text-gray-800 font-semibold rounded-lg hover:opacity-80 transition"
          >
            Contact Me
          </button>

        </div>
      )}
    </nav>
  );
}
