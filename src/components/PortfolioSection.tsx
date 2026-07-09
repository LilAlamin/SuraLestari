"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const destinations = [
  {
    name: "Keraton Surakarta",
    category: "SEJARAH & BUDAYA",
    description: "Istana resmi Kasunanan Surakarta yang penuh dengan nilai sejarah dan budaya Jawa.",
    url: "#",
    image: "/images/wisata/kasunanansurakarta.jpg"
  },
  {
    name: "Pura Mangkunegaran",
    category: "SEJARAH & BUDAYA",
    description: "Istana megah perpaduan arsitektur Jawa dan Eropa yang menjadi pusat seni dan budaya.",
    url: "#",
    image: "/images/wisata/mangkunegaran.jpg"
  },
  {
    name: "Pasar Gede",
    category: "KULINER & PASAR",
    description: "Pasar tradisional tertua di Solo, surga bagi pecinta kuliner khas dan jajanan tradisional.",
    url: "#",
    image: "/images/wisata/pasargede.jpg"
  },
  {
    name: "Kampung Batik Kauman",
    category: "BELANJA & SENI",
    description: "Kawasan bersejarah sentra industri batik tertua dengan arsitektur bangunan yang unik.",
    url: "#",
    image: "/images/wisata/kampungbatikkauman.jpg"
  },
  {
    name: "Masjid Raya Sheikh Zayed",
    category: "RELIGI & ARSITEKTUR",
    description: "Replika Sheikh Zayed Grand Mosque di Abu Dhabi yang menjadi ikon wisata religi baru di Solo.",
    url: "#",
    image: "/images/wisata/masjidrayasheikhzayed.jpg"
  },
  {
    name: "Taman Balekambang",
    category: "ALAM & REKREASI",
    description: "Taman kota bersejarah yang rindang, tempat bersantai menikmati alam dan pertunjukan seni.",
    url: "#",
    image: "/images/wisata/balekambangsurakarta.webp"
  },
  {
    name: "Solo Safari",
    category: "ALAM & REKREASI",
    description: "Kebun binatang modern yang menawarkan pengalaman edukasi dan interaksi satwa yang menyenangkan.",
    url: "https://tamansafari.com/solo-safari/",
    image: "/images/wisata/solosafari.jpg"
  },
  {
    name: "Museum Danar Hadi",
    category: "SEJARAH & BUDAYA",
    description: "Museum dengan koleksi kain batik terlengkap dari berbagai zaman dan daerah.",
    url: "https://danarhadibatik.com/id",
    image: "/images/wisata/museumdanarhadi.jpg"
  },
  {
    name: "Ngarsopuro Night Market",
    category: "BELANJA & SENI",
    description: "Pasar malam akhir pekan yang meriah dengan aneka kerajinan, seni, dan jajanan khas Solo.",
    url: "#",
    image: "/images/wisata/ngarsopuro.webp"
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "SEJARAH & BUDAYA":
      return "bg-amber-900/80 text-amber-50";
    case "KULINER & PASAR":
      return "bg-orange-900/80 text-orange-50";
    case "BELANJA & SENI":
      return "bg-purple-900/80 text-purple-50";
    case "RELIGI & ARSITEKTUR":
      return "bg-blue-900/80 text-blue-50";
    case "ALAM & REKREASI":
      return "bg-emerald-900/80 text-emerald-50";
    default:
      return "bg-gray-900/80 text-gray-50";
  }
};

export function PortfolioSection() {
  return (
    <section id="destinasi" className="flex flex-col lg:flex-row w-full relative z-20">
      <div className="section_sticky-header is-portfolio lg:w-1/3 lg:sticky lg:top-0 lg:h-screen p-8 lg:p-16 flex flex-col justify-center bg-zinc-50">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-zinc-900">
          Destinasi Wisata
        </h2>
        <p className="text-lg md:text-xl text-zinc-600 max-w-md">
          Jelajahi pesona kebudayaan, kuliner, dan keindahan alam di kota Surakarta yang tak terlupakan.
        </p>
      </div>

      <div className="section_content is-portfolio lg:w-2/3 bg-white">
        <div className="padding-global p-4 md:p-8 lg:p-12">
          <div className="container-large">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {destinations.map((destination, index) => (
                <a
                  key={index}
                  href={destination.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col rounded-2xl overflow-hidden bg-zinc-100 aspect-[4/5] hover:scale-105 transition-transform duration-300 ease-out border border-zinc-200"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={destination.image}
                      alt={`${destination.name} background`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>



                  <div className="relative z-10 mt-auto p-6 flex flex-col gap-3">
                    <div>
                      <span className={cn(
                        "inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide",
                        getCategoryColor(destination.category)
                      )}>
                        {destination.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {destination.name}
                    </h3>

                    <p className="text-sm text-zinc-300 line-clamp-2">
                      {destination.description}
                    </p>

                    <div className="mt-2 text-white font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Jelajahi <span className="text-lg">→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
