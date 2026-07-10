"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Footprints, Bike, Bus, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const transportOptions = [
  {
    id: "walk",
    name: "Jalan Kaki",
    icon: Footprints,
    saved: 100,
    desc: "Nol Emisi! Menjelajah perlahan sambil menikmati setiap sudut budaya Solo.",
    stroke: "stroke-emerald-500",
    border: "border-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: "bike",
    name: "Sepeda",
    icon: Bike,
    saved: 95,
    desc: "Bebas polusi, sehat, dan sangat fleksibel menelusuri gang-gang bersejarah.",
    stroke: "stroke-green-500",
    border: "border-green-500",
    bg: "bg-green-500/10",
  },
  {
    id: "becak",
    name: "Becak Lokal",
    icon: Leaf,
    saved: 80,
    desc: "Dukung ekonomi lokal dan rasakan hembusan angin otentik khas Surakarta.",
    stroke: "stroke-teal-500",
    border: "border-teal-500",
    bg: "bg-teal-500/10",
  },
  {
    id: "bus",
    name: "Batik Solo Trans",
    icon: Bus,
    saved: 60,
    desc: "Transportasi umum yang nyaman, mengurangi kemacetan dan emisi karbon bersama.",
    stroke: "stroke-cyan-600",
    border: "border-cyan-600",
    bg: "bg-cyan-600/10",
  },
];

interface FooterSectionProps {
  className?: string;
}

export function FooterSection({ className }: FooterSectionProps) {
  const [activeId, setActiveId] = useState(transportOptions[0].id);
  const selectedOption = transportOptions.find((opt) => opt.id === activeId)!;

  const radius = 88;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (selectedOption.saved / 100) * circumference;

  return (
    <footer className={cn("relative z-20 flex flex-col bg-white", className)}>
      {/* Interactive Eco-Calculator Section */}
      <section className="relative flex min-h-screen items-center justify-center bg-white px-6 py-24 text-black sm:px-12 overflow-hidden">
        {/* Rich Image Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/images/wisata_alam_solo.jpg" 
            alt="Background Alam" 
            className="w-full h-full object-cover opacity-[0.03] mix-blend-multiply grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/80 to-white" />
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_100%)]"></div>

        {/* Background Ambient Glow */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.15] blur-[100px] transition-all duration-1000 pointer-events-none">
          <div className={cn("size-[32rem] rounded-full transition-colors duration-1000", selectedOption.bg.replace('/10', '/50'))} />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Text & Selection */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
                Langkah Kecilmu,<br />
                <span className="text-black/60">Napas Baru untuk Solo</span>
              </h2>
              <p className="text-xl leading-relaxed text-black/70 max-w-lg">
                Setiap keputusan perjalananmu berdampak besar. Pilih transportasimu saat menjelajah Surakarta dan lihat dampaknya terhadap alam.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {transportOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = activeId === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setActiveId(opt.id)}
                    className={cn(
                      "group flex flex-col items-center justify-center gap-4 rounded-2xl border p-6 transition-all duration-300",
                      isSelected
                        ? cn(opt.border, opt.bg, "text-black scale-[1.02] shadow-xl")
                        : "border-black/10 bg-black/5 text-black/50 hover:bg-black/10 hover:text-black"
                    )}
                  >
                    <Icon className={cn("size-8 transition-transform duration-300", isSelected ? "scale-110" : "group-hover:scale-110")} />
                    <span className="font-medium text-sm sm:text-base">{opt.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right side: Result & CTA */}
          <div className="flex flex-col items-center justify-center space-y-10 rounded-[2.5rem] border border-black/10 bg-white/50 p-10 text-center backdrop-blur-md relative overflow-hidden shadow-sm">
            {/* Inner Glow */}
            <div className={cn("absolute inset-0 opacity-20 transition-colors duration-1000 pointer-events-none", selectedOption.bg)} />
            
            <div className="relative flex size-56 items-center justify-center rounded-full bg-white shadow-xl border border-black/5">
              {/* Progress circle */}
              <svg className="absolute inset-0 size-full -rotate-90 transform" viewBox="0 0 224 224">
                <circle
                  cx="112"
                  cy="112"
                  r={radius}
                  className="fill-none stroke-black/5 stroke-[8]"
                />
                <circle
                  cx="112"
                  cy="112"
                  r={radius}
                  className={cn("fill-none stroke-[8] transition-all duration-1000 ease-out", selectedOption.stroke)}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex flex-col items-center gap-1 z-10">
                <span className="text-6xl font-medium tracking-tighter text-black">
                  {selectedOption.saved}%
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-black/50">
                  Karbon Terhemat
                </span>
              </div>
            </div>

            <div className="min-h-[80px] flex items-center justify-center relative z-10">
              <p className="text-lg leading-relaxed text-black/80 max-w-sm transition-all duration-500">
                "{selectedOption.desc}"
              </p>
            </div>

            <a
              href="mailto:hello@suralestari.id"
              className="relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-8 py-5 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-black/90"
            >
              Mulai Perjalanan Hijau Ini
            </a>
          </div>
        </div>
      </section>



      {/* Footer Details & Background Illustration */}
      <section className="relative z-10 flex flex-col bg-white overflow-hidden border-t border-black/10">
        {/* Background Illustration */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-0">
          <img 
            src="/images/footer_bg.png" 
            alt="Ilustrasi Surakarta" 
            className="w-full h-auto object-bottom scale-105 origin-bottom"
          />
        </div>

        {/* Footer Details Content - Clean & Minimalist at the Top */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-between px-6 pt-16 pb-[50vw] sm:pb-[40vw] md:pb-[30vw] lg:pb-[25vw] text-black sm:px-12">
          <div className="flex flex-col gap-4">
            <span className="font-heading text-xl tracking-widest font-bold text-black sm:text-3xl">
              SuraLestari
            </span>
            <p className="text-sm font-medium text-black/50 tracking-wide">
              Eco Journey Surakarta © 2026. Merawat Bumi, Melestarikan Budaya.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <nav className="flex flex-wrap items-center gap-8">
              <Link
                href="#"
                className="group flex items-center gap-2 text-sm font-semibold tracking-wide text-black/60 transition-all duration-300 hover:text-black hover:-translate-y-1"
              >
                Instagram
                <ExternalLink className="size-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#"
                className="group flex items-center gap-2 text-sm font-semibold tracking-wide text-black/60 transition-all duration-300 hover:text-black hover:-translate-y-1"
              >
                YouTube
                <ExternalLink className="size-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#"
                className="group flex items-center gap-2 text-sm font-semibold tracking-wide text-black/60 transition-all duration-300 hover:text-black hover:-translate-y-1"
              >
                BytesFest 2026
                <ExternalLink className="size-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
}
