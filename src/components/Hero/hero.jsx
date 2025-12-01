export default function Hero() {
  return (
    // Container utama: min-h-screen, bg-gray, tengah, overflow-hidden
    <section className="w-full min-h-screen pt-28 bg-[#cfcfcf] flex items-center justify-center relative overflow-hidden">

      {/* TEXT BESAR DI BELAKANG (FULL WIDTH - LUTHFIAN) */}
      <h1
        className="
          absolute 
          inset-0 
          flex 
          items-center 
          justify-center 
          text-white 
          font-extrabold 
          leading-none 
          tracking-tight 
          select-none 
          
          /* UKURAN TEKS SANGAT BESAR DI SEMUA BREAKPOINT */
          /* Menggunakan '28vw' atau lebih besar untuk memastikan FULL WIDTH */
          text-[20vw]      /* HP */
          sm:text-[20vw]   /* tablet */
          lg:text-[20vw]   /* desktop */
        "
        // Style whiteSpace: "nowrap" dan margin-left: "-1%" membantu memastikan 
        // teks tidak melompat baris dan menjaga proporsi lebar yang ekstrem.
      
      >
        LUTHFIAN
      </h1>

      {/* TEXT DEPAN (PORTOFOLIO 2025) */}
      <div className="relative z-10 text-center">
        {/* PORTOFOLIO - Tebal dan lebih besar */}
        <h2 className="text-4xl md:text-5xl font-black text-black tracking-widest">
          PORTOFOLIO
        </h2>
        {/* 2025 - Lebih kecil dan sedikit menimpa PORTOFOLIO (dinaikkan) */}
        <p className="text-xl md:text-2xl font-black text-black -mt-2 ">
          2025
        </p>
      </div>

    </section>
  );
}