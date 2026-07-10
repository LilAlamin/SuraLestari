"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Sprout, Trees, Recycle, Leaf, Check } from "lucide-react";

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

const actionItems = [
  {
    label: "Gunakan transportasi ramah lingkungan",
    icon: <Sprout className="w-4 h-4" />,
  },
  {
    label: "Beli produk langsung dari pengrajin lokal",
    icon: <Leaf className="w-4 h-4" />,
  },
  {
    label: "Bawa botol minum sendiri untuk isi ulang",
    icon: <Recycle className="w-4 h-4" />,
  },
  {
    label: "Ikuti tur berpemandu lokal bersertifikat",
    icon: <Trees className="w-4 h-4" />,
  },
  {
    label: "Pilih penginapan dengan sertifikasi hijau",
    icon: <Sprout className="w-4 h-4" />,
  },
];

export function DampakSection() {
  const [activeTab, setActiveTab] = useState<"statistik" | "aksi">("statistik");
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [showToast, setShowToast] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // IntersectionObserver for scroll-reveal
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleSupportClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section
      id="dampak"
      ref={sectionRef}
      className="relative z-20 w-full bg-white py-24 px-6 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Decorative background strip */}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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
              {/* SDG Badge */}
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

              {/* Number */}
              <div className={cn("font-heading text-4xl md:text-5xl font-bold tracking-tight mb-2", m.color)}>
                {m.number}
              </div>

              {/* Label */}
              <p className="font-sans font-medium text-[#181610] text-sm md:text-base mb-1">
                {m.label}
              </p>
              <p className="font-sans text-[#181610]/50 text-xs">
                {m.sublabel}
              </p>

              {/* Animated bottom bar */}
              <div className={cn(
                "absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-700 ease-out",
                i === 0 ? "bg-[#3b3f2d]" : i === 1 ? "bg-gradient-to-r from-[#596342] to-[#3b3f2d]" : "bg-gradient-to-r from-[#8B7D6B] to-[#C4A97D]",
                isVisible ? "scale-x-100" : "scale-x-0"
              )} />
            </div>
          ))}
        </div>

        {/* Tab Switcher */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab("statistik")}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-syncopate font-bold uppercase tracking-wider transition-all duration-300",
                activeTab === "statistik"
                  ? "bg-[#3b3f2d] text-white shadow-sm"
                  : "bg-white text-[#181610]/60 border border-[#3b3f2d]/15 hover:border-[#3b3f2d]/40"
              )}
            >
              Statistik Dampak
            </button>
            <button
              onClick={() => setActiveTab("aksi")}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-syncopate font-bold uppercase tracking-wider transition-all duration-300",
                activeTab === "aksi"
                  ? "bg-[#3b3f2d] text-white shadow-sm"
                  : "bg-white text-[#181610]/60 border border-[#3b3f2d]/15 hover:border-[#3b3f2d]/40"
              )}
            >
              Aksi Anda
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[200px] transition-all duration-300">
            {activeTab === "statistik" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {impactStats.map((row, i) => (
                    <div
                      key={i}
                      className={cn(
                        "rounded-xl p-5 border border-[#3b3f2d]/10 bg-[#f9f7f2]/50 backdrop-blur-sm transition-all duration-500",
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                      )}
                      style={{ transitionDelay: `${100 + i * 100}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-[10px] tracking-widest text-[#3b3f2d]/40 mt-0.5 shrink-0 select-none">
                          0{i + 1}
                        </span>
                        <div className="space-y-3">
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
            )}

            {activeTab === "aksi" && (
              <div className="rounded-xl border border-[#3b3f2d]/10 bg-[#f2fbed]/30 p-6 md:p-8">
                <p className="font-syncopate text-xs font-bold uppercase tracking-[0.15em] text-[#3b3f2d]/60 mb-6">
                  Checklist Wisatawan Bertanggung Jawab
                </p>
                <div className="space-y-3">
                  {actionItems.map((item, i) => {
                    const checked = checkedItems.has(i);
                    return (
                      <button
                        key={i}
                        onClick={() => toggleCheck(i)}
                        className={cn(
                          "w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left group",
                          checked
                            ? "border-[#3b3f2d]/25 bg-[#f2fbed]"
                            : "border-transparent bg-white/70 hover:bg-[#f9f7f2] hover:border-[#3b3f2d]/10"
                        )}
                      >
                        <div
                          className={cn(
                            "shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200",
                            checked
                              ? "bg-[#3b3f2d] border-[#3b3f2d] text-white"
                              : "border-[#3b3f2d]/30 text-transparent group-hover:border-[#3b3f2d]/50"
                          )}
                        >
                          <Check className="w-4 h-4" strokeWidth={3} />
                        </div>
                        <span className="font-sans text-sm text-[#181610] flex-1">
                          {item.label}
                        </span>
                        {item.icon && (
                          <span className={cn(
                            "shrink-0 transition-colors duration-200",
                            checked ? "text-[#3b3f2d]" : "text-[#3b3f2d]/30"
                          )}>
                            {item.icon}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Progress indicator */}
                <div className="mt-6 pt-4 border-t border-[#3b3f2d]/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-xs text-[#181610]/50">
                      {checkedItems.size} dari {actionItems.length} aksi
                    </span>
                    <span className="font-syncopate text-xs font-bold text-[#3b3f2d]">
                      {Math.round((checkedItems.size / actionItems.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#3b3f2d]/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#3b3f2d] to-[#596342] transition-all duration-500 ease-out"
                      style={{ width: `${(checkedItems.size / actionItems.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Support Button */}
          <div className="text-center mt-10">
            <button
              onClick={handleSupportClick}
              className={cn(
                "inline-flex items-center gap-3 px-8 py-4 rounded-full font-syncopate text-sm font-bold uppercase tracking-wider transition-all duration-300",
                "bg-[#3b3f2d] text-white hover:bg-[#596342] shadow-sm active:scale-[0.97]"
              )}
            >
              Dukung Misi Ini
              <Sprout className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        <div
          className={cn(
            "fixed bottom-8 right-8 z-50 px-6 py-4 rounded-2xl shadow-lg border transition-all duration-500 flex items-center gap-3",
            showToast
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-8 opacity-0 pointer-events-none",
            "bg-[#3b3f2d] text-white border-[#596342]/30"
          )}
        >
          <Leaf className="w-5 h-5 shrink-0" />
          <div>
            <p className="font-sans text-sm font-medium">Terima Kasih!</p>
            <p className="font-sans text-xs text-white/70">Aksi Anda berarti bagi bumi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
