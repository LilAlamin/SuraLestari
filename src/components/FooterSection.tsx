"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Footprints, Bike, Bus, Leaf, TreePine, Wind } from "lucide-react";
import { cn } from "@/lib/utils";

const transportOptions = [
  {
    id: "walk",
    name: "Jalan Kaki",
    icon: Footprints,
    saved: 100,
    desc: "Nol emisi. Menjelajah perlahan sambil menikmati setiap sudut budaya Solo.",
    color: "#3b3f2d",
    bgTint: "bg-[#3b3f2d]/8",
  },
  {
    id: "bike",
    name: "Sepeda",
    icon: Bike,
    saved: 95,
    desc: "Bebas polusi, sehat, dan fleksibel menelusuri gang-gang bersejarah.",
    color: "#596342",
    bgTint: "bg-[#596342]/8",
  },
  {
    id: "becak",
    name: "Becak Lokal",
    icon: Leaf,
    saved: 80,
    desc: "Dukung ekonomi lokal dan rasakan hembusan angin otentik Surakarta.",
    color: "#7a8450",
    bgTint: "bg-[#7a8450]/8",
  },
  {
    id: "bus",
    name: "Batik Solo Trans",
    icon: Bus,
    saved: 60,
    desc: "Transportasi umum nyaman, kurangi kemacetan dan emisi bersama.",
    color: "#8B7D6B",
    bgTint: "bg-[#8B7D6B]/8",
  },
];

interface FooterSectionProps {
  className?: string;
}

export function FooterSection({ className }: FooterSectionProps) {
  const [activeId, setActiveId] = useState(transportOptions[0].id);
  const selectedOption = transportOptions.find((opt) => opt.id === activeId)!;

  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (selectedOption.saved / 100) * circumference;

  return (
    <footer className={cn("relative z-20 flex flex-col", className)}>
      {/* Eco Calculator Section */}
      <section className="relative w-full bg-[#f9f7f2] overflow-hidden">
        {/* Top decorative border */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#3b3f2d]/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 sm:px-10 lg:px-20">
          {/* Header */}
          <div className="mb-16 max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-[#3b3f2d] opacity-40" />
              <span className="font-heading text-xs tracking-[0.2em] text-[#3b3f2d] uppercase font-semibold">
                Kalkulator Jejak Karbon
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#181610] mb-4 leading-[1.1]">
              Langkah Kecilmu,{" "}
              <span className="font-serif italic text-[#596342]">
                Napas Baru untuk Solo.
              </span>
            </h2>
            <p className="font-body text-[#181610]/60 text-base md:text-lg leading-relaxed max-w-xl">
              Pilih cara menjelajah Surakarta dan lihat dampakmu terhadap alam.
            </p>
          </div>

          {/* Main Interactive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Transport Options — Left 3 cols */}
            <div className="lg:col-span-3 space-y-3">
              {transportOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = activeId === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setActiveId(opt.id)}
                    className={cn(
                      "w-full flex items-center gap-5 rounded-xl border p-5 text-left transition-all duration-300 group",
                      isSelected
                        ? "border-[#3b3f2d]/25 bg-white shadow-sm"
                        : "border-transparent bg-white/50 hover:bg-white hover:border-[#3b3f2d]/10"
                    )}
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        "shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                        isSelected ? "bg-[#3b3f2d] text-white" : "bg-[#3b3f2d]/5 text-[#3b3f2d]/60 group-hover:bg-[#3b3f2d]/10"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4">
                        <span className={cn(
                          "font-syncopate text-sm font-bold uppercase tracking-wider transition-colors",
                          isSelected ? "text-[#181610]" : "text-[#181610]/50"
                        )}>
                          {opt.name}
                        </span>
                        <span className={cn(
                          "font-heading text-2xl font-bold tracking-tight transition-colors",
                          isSelected ? "text-[#3b3f2d]" : "text-[#3b3f2d]/30"
                        )}>
                          {opt.saved}%
                        </span>
                      </div>
                      {isSelected && (
                        <p className="font-body text-sm text-[#181610]/50 mt-1 leading-relaxed">
                          {opt.desc}
                        </p>
                      )}
                    </div>

                    {/* Selection indicator */}
                    <div className={cn(
                      "shrink-0 w-2 h-2 rounded-full transition-all duration-300",
                      isSelected ? "bg-[#3b3f2d] scale-100" : "bg-[#3b3f2d]/10 scale-75"
                    )} />
                  </button>
                );
              })}
            </div>

            {/* Result Card — Right 2 cols */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-[#3b3f2d]/10 bg-white p-8 md:p-10 flex flex-col items-center text-center space-y-8 shadow-sm">
                {/* Circular Progress */}
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r={radius}
                      className="fill-none stroke-[#3b3f2d]/8"
                      strokeWidth="6"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r={radius}
                      fill="none"
                      stroke={selectedOption.color}
                      strokeWidth="6"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-700 ease-out"
                    />
                  </svg>
                  <div className="flex flex-col items-center z-10">
                    <span className="font-heading text-5xl font-bold tracking-tight text-[#181610]">
                      {selectedOption.saved}
                      <span className="text-2xl text-[#3b3f2d]/60">%</span>
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#3b3f2d]/50 mt-1">
                      Karbon Terhemat
                    </span>
                  </div>
                </div>

                {/* Eco Stats Row */}
                <div className="w-full grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-[#f2fbed]/60 p-4">
                    <TreePine className="w-4 h-4 text-[#3b3f2d]/50 mb-2" />
                    <span className="block font-heading text-lg font-bold text-[#181610]">
                      {Math.round(selectedOption.saved * 0.12)}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#3b3f2d]/50">
                      Pohon Diselamatkan
                    </span>
                  </div>
                  <div className="rounded-xl bg-[#def2ef]/40 p-4">
                    <Wind className="w-4 h-4 text-[#596342]/50 mb-2" />
                    <span className="block font-heading text-lg font-bold text-[#181610]">
                      {(selectedOption.saved * 0.23).toFixed(1)}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#3b3f2d]/50">
                      kg CO₂ Berkurang
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="mailto:hello@suralestari.id"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3b3f2d] px-6 py-4 text-sm font-syncopate font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#596342] active:scale-[0.97]"
                >
                  Mulai Perjalanan Hijau
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Details */}
      <section className="relative z-10 flex flex-col bg-white overflow-hidden border-t border-black/10">
        {/* Background Illustration */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-0">
          <img
            src="/images/footer_bg.png"
            alt="Ilustrasi Surakarta"
            className="w-full h-auto object-bottom scale-105 origin-bottom"
          />
        </div>

        {/* Footer Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-between px-6 pt-16 pb-[50vw] sm:pb-[40vw] md:pb-[30vw] lg:pb-[25vw] text-black sm:px-12">
          <div className="flex flex-col gap-4">
            <span className="font-heading text-xl tracking-widest font-bold text-black sm:text-3xl">
              SuraLestari
            </span>
            <p className="text-sm font-medium text-black/50 tracking-wide">
              Eco Journey Surakarta © 2026. Merawat Bumi, Melestarikan Budaya.
            </p>
          </div>


        </div>
      </section>
    </footer>
  );
}
