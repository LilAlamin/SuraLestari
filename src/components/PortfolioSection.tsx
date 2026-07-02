"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const startups = [
  { name: "Aarden", category: "ENABLING TECH", description: "AI-powered decision-making for land buyers.", url: "https://aarden.ai/", image: "/images/68e7cc56bd737048783dbb35_Aarden%20Photo%20Superorganism.png", logo: "/images/68e7cc657c0255d9f5607c44_Logo-Wordmark%20Light.png" },
  { name: "Amini", category: "ENABLING TECH", description: "Environmental data for Africa.", url: "http://amini.ai/", image: "/images/64fdd205fe33424639894d33_bottom-4.webp", logo: "/images/6500993e13fc4ae416a561f3_amini.svg" },
  { name: "Array Labs", category: "ENABLING TECH", description: "3D satellite imagery.", url: "https://www.arraylabs.io/", image: "/images/64fdd1e2d5d080d410570efc_bottom-5.webp", logo: "/images/6500997a8e0c284ad750699b_array-labs.svg" },
  { name: "BluumBio", category: "EXTINCTION DRIVERS", description: "Enzymes to break down pollutants.", url: "http://bluumbio.com/", image: "/images/6500e13b2689ad6cf647c5f1_bottom.jpg", logo: "/images/650099b002dbf0d67bd2277c_Logo%2BBlack%20(Traced).svg" },
  { name: "Cambium Carbon", category: "EXTINCTION DRIVERS", description: "Circular economy for urban timber.", url: "http://cambiumcarbon.com/", image: "/images/64fdd1823ba4d520ddd8b8ec_bottom-7.webp", logo: "/images/650099f213fc4ae416a625e1_CambiumCarbon.svg" },
  { name: "Cecil", category: "CLIMATE X BIODIVERSITY", description: "Data infrastructure for natural capital.", url: "http://cecil.earth/", image: "/images/64fdd0900e029101ef9b77e2_bottom-9.webp", logo: "/images/65009a2fe7920f7a7684acdc_logo-colour-dark%20(Traced).svg" },
  { name: "Foray", category: "ENABLING TECH", description: "Cell lines from plant species.", url: "http://foraybio.com/", image: "/images/6682dc9537fe5f3e30d2285e_Foray%20Bark.png", logo: "/images/" },
  { name: "Funga", category: "CLIMATE X BIODIVERSITY", description: "Rewilding the fungal microbiome for forests.", url: "https://www.funga.earth/", image: "/images/64fdd1abe5028769a056dd91_bottom-6.webp", logo: "/images/" },
  { name: "Inversa", category: "EXTINCTION DRIVERS", description: "Luxury leather from invasive species.", url: "http://inversaleathers.com/", image: "/images/64fe15819732cbbaa55000e6_bottom-3.webp", logo: "/images/650098fd022e8c6ac1316e20_INVERSA%20(Traced).svg" },
  { name: "LGND", category: "ENABLING TECH", description: "Infrastructure for geospatial AI.", url: "https://lgnd.io/", image: "/images/68703a83387d1eeb7db1ccd7_Aarden%20Image.png", logo: "/images/" },
  { name: "Planet A Foods", category: "EXTINCTION DRIVERS", description: "Chocolate via biomanufacturing.", url: "https://planet-a-foods.com/", image: "/images/6500ae5555127ddd52c8e609_bottom.webp", logo: "/images/65009d133b4317764e663fcd_planetafoods.svg" },
  { name: "Rosy Soil", category: "CLIMATE X BIODIVERSITY", description: "Peat-free soil from biochar.", url: "http://rosysoil.com/", image: "/images/6500ae4030666988d62f9948_bottom-1.webp", logo: "/images/" },
  { name: "Spoor", category: "CLIMATE X BIODIVERSITY", description: "AI for bird detection at wind farms.", url: "http://spoor.ai/", image: "/images/66635b6915985e5134b10360_Spoor%20Background.jpg", logo: "/images/666471909b17786e5ba771c4_Spoor%20White%20Logo.png" },
  { name: "Supercool", category: "CLIMATE X BIODIVERSITY", description: "Fungi-derived proteins to make snow and clouds.", url: "https://supercool-earth.com/", image: "/images/69e249645dd1e56b63e60672_Ermine%20background%20white.png", logo: "/images/" },
  { name: "Sway", category: "EXTINCTION DRIVERS", description: "Plastic replacements from seaweed.", url: "http://swaythefuture.com/", image: "/images/672cd6333dd03c23cb46a57a_Sway%20Image%20Card%202.png", logo: "/images/" },
  { name: "Thrive Lot", category: "EXTINCTION DRIVERS", description: "Transform yards into ecosystems.", url: "http://thrivelot.com/", image: "/images/6577ba2f961f2bbcf1b8a2be_bird-bottom.jpg", logo: "/images/" },
  { name: "Ulysses", category: "CLIMATE X BIODIVERSITY", description: "Kilometer-scale seagrass restoration.", url: "http://ulysses.eco/", image: "/images/672cd96659a11cf5a4056541_Shark%20Ulysses%20bottom%202.png", logo: "/images/" },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "EXTINCTION DRIVERS":
      return "bg-amber-900/80 text-amber-50";
    case "CLIMATE X BIODIVERSITY":
      return "bg-emerald-900/80 text-emerald-50";
    case "ENABLING TECH":
      return "bg-blue-900/80 text-blue-50";
    default:
      return "bg-gray-900/80 text-gray-50";
  }
};

export function PortfolioSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full relative z-20">
      <div className="section_sticky-header is-portfolio lg:w-1/3 lg:sticky lg:top-0 lg:h-screen p-8 lg:p-16 flex flex-col justify-center bg-zinc-50">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-zinc-900">
          Portfolio
        </h2>
        <p className="text-lg md:text-xl text-zinc-600 max-w-md">
          From fungi to fintech, we back pre-seed and seed startups that are literally changing the world.
        </p>
      </div>

      <div className="section_content is-portfolio lg:w-2/3 bg-white">
        <div className="padding-global p-4 md:p-8 lg:p-12">
          <div className="container-large">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {startups.map((startup, index) => (
                <a
                  key={index}
                  href={startup.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col rounded-2xl overflow-hidden bg-zinc-100 aspect-[4/5] hover:scale-105 transition-transform duration-300 ease-out border border-zinc-200"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={startup.image}
                      alt={`${startup.name} background`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {startup.logo && startup.logo !== "/images/" && (
                    <div className="absolute top-6 left-6 z-10 w-24 h-8 relative">
                      <Image
                        src={startup.logo}
                        alt={`${startup.name} logo`}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                  )}

                  <div className="relative z-10 mt-auto p-6 flex flex-col gap-3">
                    <div>
                      <span className={cn(
                        "inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide",
                        getCategoryColor(startup.category)
                      )}>
                        {startup.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {startup.name}
                    </h3>

                    <p className="text-sm text-zinc-300 line-clamp-2">
                      {startup.description}
                    </p>

                    <div className="mt-2 text-white font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      {startup.name} <span className="text-lg">→</span>
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
