'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  // Chain videos: Solo_Hero → solo2_hero → loop back
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playlist = ['/videos/Solo_Hero.mp4', '/videos/solo2_hero.mp4']
    let current = 0

    const playNext = () => {
      current = (current + 1) % playlist.length
      video.src = playlist[current]
      video.load()
      video.play().catch(() => {})
    }

    video.addEventListener('ended', playNext)
    return () => video.removeEventListener('ended', playNext)
  }, [])

  // Mountains video subtle parallax shift
  const bgParallax = scrollY * 0.15
  // Hero text opacity
  const textOpacity = Math.max(0, 1 - scrollY / 350)

  return (
    <div className="hero-sticky-wrapper relative w-full">

      {/* Sticky Hero Background & Text */}
      <header className="section_home-hero sticky top-0 z-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* Background Video (Mountains) */}
        <div className="home-hero_background-video-wrapper absolute bottom-0 left-[14.4px] right-[14.4px] top-[14.4px] z-0 overflow-hidden rounded-t-[64px] max-md:rounded-t-[32px] max-sm:rounded-t-[16px]">
          {/* Gradient overlay to ensure transparent navbar legibility over bright video frames */}
          <div className="video-overlay-layer absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/15 to-transparent" />
          <video
            ref={videoRef}
            className="home-hero_background-video h-full w-full scale-110 object-cover transition-transform duration-75 ease-out"
            style={{ transform: `translateY(${bgParallax}px) scale(1.1)` }}
            src="/videos/Solo_Hero.mp4"
            autoPlay
            muted
            playsInline
          />
        </div>

        {/* Hero Text */}
        <div 
          className="padding-global relative z-[2] flex h-full flex-col items-center justify-center pt-24 md:pt-0 px-4 md:px-6 lg:px-10 transition-opacity duration-150"
          style={{ opacity: textOpacity }}
        >
          <h1
            className={cn(
              'home-hero_hero-text',
              'font-heading text-center font-light leading-[1.1] md:leading-[1] tracking-[-0.03em]',
              'w-full max-w-[95vw] sm:max-w-[85vw] lg:max-w-[75vw]',
              'text-[clamp(2.25rem,8vw,144px)] md:text-[clamp(3rem,9.5vw,144px)]',
              'text-[#e9eaec] drop-shadow-2xl'
            )}
          >
            Jelajahi Keindahan{' '}
            <span className="home-hero_text-span inline-block">Surakarta.</span>
          </h1>
        </div>
      </header>

      {/* Cloud Video Layer that scrolls UP over the sticky Hero */}
      <div className="home-hero_bg-video-wrapper relative z-10 mix-blend-screen bg-gradient-to-b from-transparent via-[#b9b9b9ba] via-10% to-white to-25% w-full pointer-events-none">
        <div className="home-hero_cloud-video relative z-10 mix-blend-screen w-full mt-[-38vw] md:mt-[-38vw] max-md:mt-[-60vw] max-sm:mt-[-80vw] inline-block">
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

