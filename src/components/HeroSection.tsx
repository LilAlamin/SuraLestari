'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    const updateScroll = () => {
      setScrollY(window.scrollY)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll)
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mountains video subtle parallax shift
  const bgParallax = scrollY * 0.15
  // Hero text opacity
  const textOpacity = Math.max(0, 1 - scrollY / 350)

  return (
    <div className="hero-sticky-wrapper relative w-full">
      {/* Fixed Sticky Navbar Logo — fades out when leaving hero */}
      <div
        className="navbar_component fixed left-0 right-0 top-0 z-30 mt-[36px] px-[72px] max-md:mt-4 max-md:px-6 max-sm:px-4 flex items-center justify-center w-full pointer-events-none transition-opacity duration-300"
        style={{ opacity: textOpacity }}
      >
        <span className="font-heading text-[28px] tracking-[0.08em] text-[#e9eaec] select-none max-md:text-[22px] max-sm:text-[18px]">
          SuraLestari
        </span>
      </div>

      {/* Sticky Hero Background & Text */}
      <header className="section_home-hero sticky top-0 z-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* Background Video (Mountains) */}
        <div className="home-hero_background-video-wrapper absolute bottom-0 left-[14.4px] right-[14.4px] top-[14.4px] z-0 overflow-hidden rounded-t-[64px] max-md:rounded-t-[32px] max-sm:rounded-t-[16px]">
          <div className="video-overlay-layer absolute inset-0 z-[1] bg-black/15" />
          <video
            className="home-hero_background-video h-full w-full scale-110 object-cover transition-transform duration-75 ease-out"
            style={{ transform: `translateY(${bgParallax}px) scale(1.1)` }}
            autoPlay
            muted
            loop
            playsInline
            poster=""
          >
            <source
              src="/videos/Solo_Hero.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Hero Text */}
        <div 
          className="padding-global relative z-[2] flex h-full flex-col items-center justify-center px-10 max-md:px-6 max-sm:px-4 transition-opacity duration-150"
          style={{ opacity: textOpacity }}
        >
          <h1
            className={cn(
              'home-hero_hero-text',
              'font-heading text-center font-light leading-[0.95] tracking-[-0.03em]',
              'max-w-[75vw] text-[clamp(3rem,8vw,115px)]',
              'text-[#e9eaec]'
            )}
          >
            Jelajahi Keindahan{' '}
            <span className="home-hero_text-span inline-block">Surakarta.</span>
          </h1>
        </div>
      </header>

      {/* Cloud Video Layer that scrolls UP over the sticky Hero */}
      <div className="home-hero_bg-video-wrapper relative z-10 mix-blend-screen bg-gradient-to-b from-transparent via-[#b9b9b9ba] via-10% to-white to-25% w-full pointer-events-none">
        <div className="home-hero_cloud-video relative z-10 mix-blend-screen w-full mt-[-38vw] max-md:mt-[-50vw] inline-block">
          <video
            className="w-full h-auto object-cover scale-105 mix-blend-screen"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/videos/clouds-transcode.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  )
}

