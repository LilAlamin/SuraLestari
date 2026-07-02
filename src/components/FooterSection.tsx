import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterSectionProps {
  className?: string;
}

export function FooterSection({ className }: FooterSectionProps) {
  return (
    <footer className={cn("relative z-20 flex flex-col", className)}>
      {/* Pledge Section */}
      <section className="section_sticky-header is-pledge sticky top-0 z-[1] flex min-h-screen items-center justify-center bg-black px-6 py-24 text-center text-white sm:px-12">
        <div className="mx-auto max-w-4xl space-y-6">
          <h2 className="text-4xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
            Janji untuk Bumi
          </h2>
          <p className="text-xl leading-relaxed text-white/80 sm:text-2xl lg:text-3xl">
            Kami percaya pada masa depan yang berkelanjutan, di mana wisata dan pelestarian alam berjalan beriringan.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section_sticky-header is-footer sticky top-0 z-[2] flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 text-center text-black sm:px-12">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="text-5xl font-medium tracking-tight sm:text-7xl lg:text-8xl">
            Siap Menjelajah?
          </h2>
          <p className="text-xl leading-relaxed text-black/70 sm:text-2xl">
            Hubungi kami untuk merencanakan perjalanan ekowisata Anda di Surakarta.
          </p>
          <div className="pt-8">
            <a
              href="mailto:hello@suralestari.id"
              className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-lg font-medium text-white transition-transform hover:scale-105"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Footer Details */}
      <section className="section_content is-footer relative z-10 flex min-h-screen flex-col justify-end bg-black px-6 pb-12 pt-24 text-white sm:px-12 sm:pb-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-8">
            <span className="font-heading text-3xl sm:text-4xl tracking-[0.08em] text-white">
              SuraLestari
            </span>
            <div className="flex items-center gap-4 text-white/70">
              <span className="text-sm">SuraLestari © 2026 — Eco Journey Surakarta</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
              <Link
                href="#"
                className="group flex items-center gap-2 text-sm font-medium transition-colors hover:text-white/70"
              >
                Instagram
                <ExternalLink className="size-4 opacity-50 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href="#"
                className="group flex items-center gap-2 text-sm font-medium transition-colors hover:text-white/70"
              >
                YouTube
                <ExternalLink className="size-4 opacity-50 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href="#"
                className="group flex items-center gap-2 text-sm font-medium transition-colors hover:text-white/70"
              >
                BytesFest 2026
                <ExternalLink className="size-4 opacity-50 transition-opacity group-hover:opacity-100" />
              </Link>
            </nav>
            <div className="hidden lg:block">
              <span className="text-5xl">🌿</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
