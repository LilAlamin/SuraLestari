"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Sprout, Trees, Recycle } from "lucide-react";

interface MetricItem {
  icon: React.ReactNode;
  number: string;
  label: string;
  sublabel: string;
  sdg: string;
  color: string;
  bgClass: string;
  accentClass: string;
}

const metrics: MetricItem[] = [
  {
    icon: <Sprout className="w-6 h-6" />,
    number: "85%",
    label: "Dana ke Komunitas Lokal",
    sublabel: "SDG 8 — Ekonomi & Kerja Layak",
    sdg: "SDG 8",
    color: "text-[#3b3f2d]",
    bgClass: "bg-[#f2fbed]",
    accentClass: "border-[#3b3f2d]/20",
  },
  {
    icon: <Trees className="w-6 h-6" />,
    number: "4,2",
    label: "Hektar Area Konservasi Terjaga",
    sublabel: "SDG 15 — Ekosistem Daratan",
    sdg: "SDG 15",
    color: "text-[#596342]",
    bgClass: "bg-[#def2ef]/60",
    accentClass: "border-[#596342]/20",
  },
  {
    icon: <Recycle className="w-6 h-6" />,
    number: "8.200",
    label: "Botol Plastik Berkurang",
    sublabel: "Ekonomi Sirkular",
    sdg: "Eco",
    color: "text-[#8B7D6B]",
    bgClass: "bg-[#f9f7f2]",
    accentClass: "border-[#8B7D6B]/20",
  },
];

const impactStats = [
  {
    sdg8: "120+ UMKM lokal tergabung dalam program ekowisata",
    sdg15: "3 jenis vegetasi langka dilestarikan di Taman Balekambang",
    eco: "6 stasiun isi ulang air minum di titik wisata utama",
  },
  {
    sdg8: "40 pemandu wisata lokal tersertifikasi",
    sdg15: "Populasi kijang di Balekambang meningkat 25%",
    eco: "Kemitraan dengan 10 penginapan ramah lingkungan",
  },
  {
    sdg8: "85% margin pariwisata kembali ke komunitas",
    sdg15: "Program penanaman 1.000 pohon per tahun",
    eco: "Workshop daur ulang sampah plastik jadi kerajinan",
  },
];

function TreeIllustration({ isVisible }: { isVisible: boolean }) {
  return (
    <svg
      viewBox="0 0 320 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "w-full max-w-[280px] mx-auto transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      aria-hidden="true"
    >
      {/* Ground */}
      <ellipse cx="160" cy="400" rx="90" ry="10" fill="#3b3f2d" opacity="0.08" />

      {/* Trunk */}
      <path
        d="M148 390 Q150 340 155 300 Q157 270 160 240"
        stroke="#7a6248"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M172 390 Q170 340 165 300 Q163 270 160 240"
        stroke="#8B7355"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Root left */}
      <path
        d="M152 385 Q130 390 110 395"
        stroke="#7a6248"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Root right */}
      <path
        d="M168 385 Q190 390 210 395"
        stroke="#7a6248"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      {/* Branch left lower */}
      <path
        d="M158 310 Q120 295 90 280"
        stroke="#7a6248"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      {/* Branch right lower */}
      <path
        d="M162 295 Q200 278 228 265"
        stroke="#7a6248"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Branch left upper */}
      <path
        d="M159 265 Q128 248 105 228"
        stroke="#7a6248"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Branch right upper */}
      <path
        d="M161 258 Q192 238 218 220"
        stroke="#7a6248"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Foliage — back layer (darkest) */}
      <ellipse cx="160" cy="170" rx="82" ry="72" fill="#2d3522" opacity="0.18" />

      {/* Foliage — main cluster center */}
      <ellipse cx="160" cy="155" rx="78" ry="68" fill="#3b3f2d" opacity="0.9" />

      {/* Foliage — left cluster */}
      <ellipse cx="108" cy="195" rx="52" ry="44" fill="#3b3f2d" opacity="0.85" />
      <ellipse cx="88" cy="178" rx="40" ry="36" fill="#404d2f" opacity="0.9" />

      {/* Foliage — right cluster */}
      <ellipse cx="212" cy="195" rx="52" ry="44" fill="#3b3f2d" opacity="0.85" />
      <ellipse cx="232" cy="178" rx="40" ry="36" fill="#404d2f" opacity="0.9" />

      {/* Foliage — top cluster */}
      <ellipse cx="160" cy="108" rx="56" ry="50" fill="#4a5e33" opacity="0.95" />
      <ellipse cx="138" cy="120" rx="38" ry="34" fill="#596342" opacity="0.9" />
      <ellipse cx="182" cy="118" rx="38" ry="34" fill="#596342" opacity="0.9" />

      {/* Foliage — highlights (lighter green) */}
      <ellipse cx="148" cy="96" rx="30" ry="26" fill="#6b7a44" opacity="0.7" />
      <ellipse cx="175" cy="100" rx="24" ry="22" fill="#7a8e50" opacity="0.6" />
      <ellipse cx="100" cy="168" rx="22" ry="18" fill="#6b7a44" opacity="0.55" />
      <ellipse cx="218" cy="168" rx="22" ry="18" fill="#6b7a44" opacity="0.55" />

      {/* Tiny leaf dots — texture */}
      <circle cx="132" cy="82" r="6" fill="#8fa856" opacity="0.5" />
      <circle cx="168" cy="75" r="5" fill="#8fa856" opacity="0.45" />
      <circle cx="190" cy="90" r="4" fill="#8fa856" opacity="0.4" />
      <circle cx="115" cy="148" r="5" fill="#8fa856" opacity="0.4" />
      <circle cx="205" cy="145" r="5" fill="#8fa856" opacity="0.4" />

      {/* Subtle glow behind tree */}
      <ellipse cx="160" cy="155" rx="95" ry="85" fill="#def2ef" opacity="0.12" />
    </svg>
  );
}

export function DampakSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="dampak"
      ref={sectionRef}
      className="relative z-20 w-full bg-white py-24 px-6 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Decorative top strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b3f2d] via-[#596342] to-[#C4A97D] opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[#3b3f2d] opacity-40" />
            <span className="font-heading text-xs tracking-[0.2em] text-[#3b3f2d] uppercase font-semibold">
              Eco Impact
            </span>
            <span className="w-8 h-[1px] bg-[#3b3f2d] opacity-40" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#181610] mb-4">
            Dampak Nyata
          </h2>
          <p className="font-serif italic text-[#596342] text-xl md:text-2xl font-light mb-4">
            Perjalanan Anda
          </p>
          <p className="font-body text-[#181610]/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Setiap langkah Anda di Surakarta berkontribusi langsung pada pelestarian alam dan
            pemberdayaan masyarakat lokal — mendukung SDG 8 dan SDG 15.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={cn(
                "group relative rounded-2xl p-8 transition-all duration-500 ease-out border",
                m.bgClass,
                m.accentClass,
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={cn("p-2.5 rounded-xl bg-white/70 backdrop-blur-sm", m.color)}>
                  {m.icon}
                </div>
                <span className={cn(
                  "text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/70 backdrop-blur-sm",
                  m.color
                )}>
                  {m.sdg}
                </span>
              </div>
              <div className={cn("font-heading text-4xl md:text-5xl font-bold tracking-tight mb-2", m.color)}>
                {m.number}
              </div>
              <p className="font-sans font-medium text-[#181610] text-sm md:text-base mb-1">
                {m.label}
              </p>
              <p className="font-sans text-[#181610]/50 text-xs">
                {m.sublabel}
              </p>
              <div className={cn(
                "absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-700 ease-out",
                i === 0
                  ? "bg-[#3b3f2d]"
                  : i === 1
                  ? "bg-gradient-to-r from-[#596342] to-[#3b3f2d]"
                  : "bg-gradient-to-r from-[#8B7D6B] to-[#C4A97D]",
                isVisible ? "scale-x-100" : "scale-x-0"
              )} />
            </div>
          ))}
        </div>

        {/* Statistik Dampak + Tree — two column */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Stats cards */}
          <div className="flex-1 w-full">
            <p className="font-syncopate text-xs font-bold uppercase tracking-[0.15em] text-[#3b3f2d]/60 mb-6">
              Statistik Dampak
            </p>
            <div className="space-y-4">
              {impactStats.map((row, i) => (
                <div
                  key={i}
                  className={cn(
                    "rounded-xl p-5 border border-[#3b3f2d]/10 bg-[#f9f7f2]/50 backdrop-blur-sm transition-all duration-500",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  )}
                  style={{ transitionDelay: `${300 + i * 120}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[10px] tracking-widest text-[#3b3f2d]/40 mt-0.5 shrink-0 select-none">
                      0{i + 1}
                    </span>
                    <div className="space-y-2">
                      <p className="font-sans text-sm leading-relaxed text-[#181610]/80">
                        <span className="font-semibold text-[#181610]">SDG 8: </span>
                        {row.sdg8}
                      </p>
                      <p className="font-sans text-sm leading-relaxed text-[#181610]/80">
                        <span className="font-semibold text-[#181610]">SDG 15: </span>
                        {row.sdg15}
                      </p>
                      <div className="pt-1 border-t border-[#3b3f2d]/10">
                        <p className="font-sans text-xs leading-relaxed text-[#8B7D6B]">
                          ♻ {row.eco}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tree illustration */}
          <div
            className={cn(
              "w-full lg:w-[300px] shrink-0 flex flex-col items-center gap-4 transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <TreeIllustration isVisible={isVisible} />
            <p className="font-serif italic text-[#596342]/70 text-sm text-center">
              Menanam harapan,<br />satu perjalanan sekaligus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
