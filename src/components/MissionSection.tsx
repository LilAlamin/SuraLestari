import Image from "next/image";

export function MissionSection() {
  return (
    <section id="tentang" className="relative z-20 w-full min-h-[85vh] bg-white flex flex-col items-center justify-center py-24 px-6 text-center overflow-hidden">
      {/* Background Image of Tugu Keris */}
      <div className="absolute inset-0 z-10 opacity-[0.07] pointer-events-none flex items-center justify-center select-none">
        <div className="relative w-full h-full max-w-[800px] max-h-[800px]">
          <Image
            src="/images/tugu_keris.png"
            alt="Tugu Keris Background"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain object-center scale-110 md:scale-125"
            priority
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-30 flex flex-col items-center max-w-[1000px] mx-auto w-full px-4">
        {/* Subtitle / Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <span className="w-6 h-[1px] bg-[#3b3f2d] opacity-50"></span>
          <span className="font-heading text-xs tracking-[0.2em] text-[#3b3f2d] uppercase font-semibold">
            Eco Journey Surakarta
          </span>
          <span className="w-6 h-[1px] bg-[#3b3f2d] opacity-50"></span>
        </div>

        {/* Large distinctive headline */}
        <h1 className="font-heading font-light text-black tracking-[-0.03em] text-[clamp(2.5rem,6vw,68px)] leading-[1.1] mb-8 max-w-[850px]">
          Wisata Berkelanjutan <br />
          <span className="font-serif italic text-[#596342] font-light">untuk Masa Depan</span>
        </h1>

        {/* Centered structured layout divide */}
        <div className="w-16 h-[2px] bg-[#3b3f2d] opacity-20 mb-8"></div>

        {/* Narrative / Body */}
        <p className="font-sans font-light text-[#181610] tracking-normal text-[clamp(1.125rem,1.8vw,20px)] leading-[1.6] max-w-[700px] mb-12">
          SuraLestari mengajak Anda mengenal destinasi ekowisata di Surakarta. Nikmati keindahan alam, lestarikan budaya lokal, dan dukung UMKM melalui perjalanan wisata yang bertanggung jawab.
        </p>
        {/* Subtle decorative highlight */}
      </div>
    </section>
  );
}
