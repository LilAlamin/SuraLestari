export function MissionSection() {
  return (
    <section id="tentang" className="relative z-20 w-full min-h-[80vh] bg-white flex flex-col items-center justify-center py-24 px-6 text-center">
      {/* Content Container */}
      <div className="relative z-30 flex flex-col items-center max-w-[768px] mx-auto w-full -mt-12">
        <div className="mb-6">
          <h1 className="font-heading font-light text-black tracking-[-0.03em] text-[clamp(2.5rem,5vw,56px)] leading-[1.1]">
            Wisata Berkelanjutan untuk Masa Depan.
          </h1>
        </div>

        <p className="font-sans font-light text-[#181610] tracking-[-0.02em] text-[clamp(1.125rem,2vw,22px)] leading-[1.4] max-w-[620px] mb-16">
          SuraLestari mengajak Anda mengenal destinasi ekowisata di Surakarta. Nikmati keindahan alam, lestarikan budaya lokal, dan dukung UMKM melalui perjalanan wisata yang bertanggung jawab.
        </p>

        <div className="hidden pt-6">
          <button type="button">We&apos;re hiring</button>
        </div>

        <span className="font-heading text-2xl tracking-[0.12em] text-[#3b3f2d] opacity-70 select-none">
          Eco Journey Surakarta
        </span>
      </div>
    </section>
  );
}



