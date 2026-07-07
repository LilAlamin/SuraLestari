"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Run once on mount to handle initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang", href: "#tentang" },
    { name: "Pendekatan", href: "#pendekatan" },
    { name: "Destinasi", href: "#destinasi" },
    { name: "Tim", href: "#tim" },
    { name: "Mentor", href: "#mentor" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out w-full border-b",
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-gray-200/50 shadow-sm py-4"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className={cn(
              "font-heading text-2xl tracking-[0.08em] select-none font-bold transition-colors duration-300",
              isScrolled || isMobileMenuOpen ? "text-[#181610]" : "text-[#e9eaec]"
            )}
          >
            SuraLestari
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "font-body text-sm font-medium tracking-wide transition-colors duration-300",
                  isScrolled
                    ? "text-[#181610]/85 hover:text-black"
                    : "text-[#e9eaec]/85 hover:text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#tentang"
              onClick={(e) => handleLinkClick(e, "#tentang")}
              className={cn(
                "inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-medium tracking-wide transition-all duration-300 shadow-sm",
                isScrolled
                  ? "bg-[#181610] hover:bg-[#3b3f2d] text-white"
                  : "bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm border border-white/20"
              )}
            >
              Mulai Perjalanan
            </a>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg focus:outline-none transition-colors duration-300 z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={cn(
                  "h-6 w-6 transition-colors duration-300",
                  isScrolled || isMobileMenuOpen ? "text-[#181610]" : "text-[#e9eaec]"
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "h-6 w-6 transition-colors duration-300",
                  isScrolled ? "text-[#181610]" : "text-[#e9eaec]"
                )}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out flex flex-col justify-between px-6 pt-28 pb-10",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-heading text-2xl font-light tracking-wide text-[#181610] hover:text-[#3b3f2d] border-b border-gray-100 pb-3 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div>
          <a
            href="#tentang"
            onClick={(e) => handleLinkClick(e, "#tentang")}
            className="flex h-12 items-center justify-center rounded-xl bg-[#181610] hover:bg-[#3b3f2d] text-white text-base font-medium transition-colors w-full shadow-sm"
          >
            Mulai Perjalanan
          </a>
        </div>
      </div>
    </>
  );
}
