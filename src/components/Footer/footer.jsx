export default function Footer() {
  return (
    <footer className="relative w-full bg-neutral-900 text-white overflow-hidden mt-20">
      
      {/* ABSTRACT NOISE */}
      <div className="absolute inset-0 opacity-[0.13] pointer-events-none"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      ></div>

      {/* ANGLED SHAPES */}
      <div className="absolute -top-20 left-0 w-[60%] h-40 bg-neutral-800 rotate-[-6deg] opacity-60"></div>
      <div className="absolute -bottom-20 right-0 w-[55%] h-40 bg-neutral-700 rotate-[5deg] opacity-40"></div>

      {/* BODY */}
      <div className="relative z-10 px-8 py-20 max-w-6xl mx-auto">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* LEFT TITLE */}
          <div className="flex flex-col gap-3 max-w-md">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
              LET’S  
              <span className="block text-neutral-400">BUILD</span>
              SOMETHING COOL
            </h1>
            <p className="text-neutral-300 text-sm md:text-base">
              But in a way that's modern, abstract, and definitely not boring.
              Let your ideas become shapes.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 text-sm">

            <div className="flex flex-col gap-3">
              <p className="font-semibold text-neutral-200 tracking-wide text-xs">NAVIGATION</p>
              <a className="opacity-70 hover:opacity-100 duration-200">Home</a>
              <a className="opacity-70 hover:opacity-100 duration-200">Projects</a>
              <a className="opacity-70 hover:opacity-100 duration-200">About</a>
              <a className="opacity-70 hover:opacity-100 duration-200">Contact</a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-semibold text-neutral-200 tracking-wide text-xs">SOCIAL</p>
              <a className="opacity-70 hover:opacity-100 duration-200">Instagram</a>
              <a className="opacity-70 hover:opacity-100 duration-200">Github</a>
              <a className="opacity-70 hover:opacity-100 duration-200">LinkedIn</a>
              <a className="opacity-70 hover:opacity-100 duration-200">Dribbble</a>
            </div>

          </div>
        </div>

        {/* DIVIDER — ABSTRACT LINE */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-600 to-transparent mt-16"></div>

        {/* BOTTOM */}
        <div className="flex justify-between items-center mt-8 text-neutral-400 text-xs">
          <p>© 2025 — Crafted with style by Luthfian</p>
          <p className="opacity-70 hover:opacity-100 duration-200">Stay Modern</p>
        </div>

      </div>
    </footer>
  );
}
