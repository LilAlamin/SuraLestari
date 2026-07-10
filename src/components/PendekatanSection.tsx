import Image from "next/image";
import { cn } from "@/lib/utils";

const cards = [
  {
    number: "01",
    title: "Wisata Alam",
    subhead: "Eksplorasi Keindahan Alam Solo",
    body: "Surakarta dikelilingi panorama alam yang memukau. Dari hamparan hijau Taman Balekambang yang bersejarah, kesejukan Hutan Kota Kadipaten, hingga pesona Waduk Cengklik saat senja. Nikmati trekking di lereng Gunung Lawu yang menjulang di cakrawala utara Solo, atau bersantai di Kebun Raya Purwodadi yang menawarkan ribuan koleksi flora.",
    places: [
      "Taman Balekambang",
      "Waduk Cengklik",
      "Gunung Lawu",
    ],
    image: "/images/taman_balekambang_solo.png",
  },
  {
    number: "02",
    title: "Budaya & Heritage",
    subhead: "Warisan Leluhur yang Hidup",
    body: "Solo adalah denyut nadi budaya Jawa. Keraton Kasunanan Surakarta dan Pura Mangkunegaran berdiri sebagai sakbisanya sejarah yang masih lestari. Jelajahi Kampung Batik Laweyan dengan motif-motif klasiknya, saksikan pertunjukan Wayang Orang di Sriwedari, atau telusuri koleksi langka di Museum Radya Pustaka—museum tertua di Indonesia.",
    places: [
      "Keraton Kasunanan",
      "Pura Mangkunegaran",
      "Kampung Batik Laweyan",
      "Wayang Orang Sriwedari",
      "Museum Radya Pustaka",
    ],
    image: "/images/budaya_heritage_solo.jpg",
  },
  {
    number: "03",
    title: "UMKM & Komunitas",
    subhead: "Kreativitas dan Ekonomi Lokal",
    body: "Semangat wirausaha warga Solo menghidupkan setiap sudut kota. Berburu barang antik di Pasar Triwindu, mencicipi Nasi Liwet khas Solo di Pasar Gede, atau belajar membatik langsung dari pengrajin di Kampung Batik Kauman. Setiap pembelian Anda adalah dukungan nyata bagi keberlanjutan komunitas dan pelestarian tradisi.",
    places: [
      "Pasar Triwindu",
      "Pasar Gede",
      "Kampung Batik Kauman",
      "Solo Batik Carnival",
      "Kuliner Khas Solo",
    ],
    image: "/images/umkm_komunitas_solo.jpg",
  },
];

export function PendekatanSection() {
  return (
    <>
      {/* Sticky Approach Header */}
      <section
        id="pendekatan"
        className="section_sticky-header is-approach sticky top-0 z-10 w-full bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-[#3b3f2d] opacity-40"></span>
              <span className="font-heading text-xs tracking-[0.2em] text-[#3b3f2d] uppercase font-semibold">
                Eksplorasi Solo
              </span>
              <span className="w-8 h-[1px] bg-[#3b3f2d] opacity-40"></span>
            </div>

            <h2 className="font-heading text-4xl font-light tracking-tight text-[#181610] sm:text-5xl lg:text-6xl mb-4">
              Jenis Pariwisata
            </h2>

            <p className="font-serif italic text-[#596342] text-xl sm:text-2xl font-light mb-6">
              di Surakarta
            </p>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#181610]/60 sm:text-lg">
              Alam, budaya, dan komunitas menyatu dalam setiap perjalanan wisata berkelanjutan di Surakarta.
            </p>
          </div>
        </div>
      </section>

      {/* Card Sections — sticky overlapping effect */}
      {cards.map((card, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={index}
            className={cn(
              "section_sticky-header is-approach-card sticky top-0 w-full min-h-screen",
              "flex items-center",
              isEven ? "bg-white" : "bg-[#f9f7f2]",
            )}
            style={{ zIndex: 12 + index }}
          >
            <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-20">
              <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
                {/* Image — full photo, no cutout */}
                <div
                  className={cn(
                    "relative w-full",
                    isEven ? "md:order-1" : "md:order-2",
                  )}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
                  </div>
                  {/* Image caption */}
                  <div className="mt-3 flex items-center gap-2 text-xs font-mono tracking-wider text-[#3b3f2d]/50">
                    <span className="w-4 h-[1px] bg-[#3b3f2d]/30"></span>
                    {card.number} — Solo, Jawa Tengah
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={cn(
                    "flex flex-col justify-center gap-6",
                    isEven ? "md:order-2" : "md:order-1",
                  )}
                >
                  {/* Label + Title */}
                  <div className="space-y-2">
                    <span className="font-mono text-xs tracking-widest text-[#3b3f2d]/40">
                      {card.number}
                    </span>
                    <h3 className="font-syncopate text-2xl font-bold uppercase leading-tight tracking-wider text-[#181610] sm:text-3xl lg:text-4xl">
                      {card.title}
                    </h3>
                    <p className="font-serif italic text-base text-[#596342] sm:text-lg">
                      {card.subhead}
                    </p>
                  </div>

                  <p className="font-body text-sm leading-[1.7] text-[#181610]/70 sm:text-base pl-0 md:pl-10">
                    {card.body}
                  </p>

                  {/* Place chips */}
                  <div className="border-t border-[#3b3f2d]/10 pt-5 pl-0 md:pl-10">
                    <span className="mb-4 block text-xs font-syncopate font-bold uppercase tracking-[0.15em] text-[#3b3f2d]/50">
                      Destinasi Unggulan
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {card.places.map((place) => (
                        <span
                          key={place}
                          className="inline-flex items-center rounded-lg border border-[#3b3f2d]/15 bg-[#f2fbed]/50 px-3.5 py-2 text-xs font-syncopate font-bold uppercase tracking-wide text-[#3b3f2d]"
                        >
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
