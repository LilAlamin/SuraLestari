'use client'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

/* ─────────────────────────────────────────────
   Single decorative cloud shape (SVG path)
   We'll render several of these at different
   sizes, positions, and animation timings.
───────────────────────────────────────────── */
function Cloud({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      viewBox="0 0 400 220"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <filter id="blur-cloud" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="blur-cloud-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
      {/* Main cloud body */}
      <ellipse cx="200" cy="160" rx="180" ry="55" fill="white" opacity="0.9" />
      {/* Big puff center */}
      <circle cx="200" cy="110" r="75" fill="white" opacity="0.95" />
      {/* Left puff */}
      <circle cx="120" cy="135" r="55" fill="white" opacity="0.9" />
      {/* Right puff */}
      <circle cx="290" cy="130" r="60" fill="white" opacity="0.9" />
      {/* Small top puff */}
      <circle cx="220" cy="75" r="40" fill="white" opacity="0.85" />
      {/* Far left puff */}
      <circle cx="55" cy="158" r="40" fill="white" opacity="0.8" />
      {/* Far right puff */}
      <circle cx="350" cy="152" r="42" fill="white" opacity="0.8" />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   Individual floating cloud with its own
   animation variants passed from parent.
───────────────────────────────────────────── */
interface FloatingCloudProps {
  initialX: string | number
  initialY: string | number
  exitX: string | number
  exitY?: string | number
  width: number
  opacity: number
  delay: number
  floatAmplitude?: number
  floatDuration?: number
  isExiting: boolean
  exitDuration?: number
}

function FloatingCloud({
  initialX,
  initialY,
  exitX,
  exitY = 0,
  width,
  opacity,
  delay,
  floatAmplitude = 18,
  floatDuration = 6,
  isExiting,
  exitDuration = 1.2,
}: FloatingCloudProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ width, top: initialY, left: initialX }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={
        isExiting
          ? {
              x: exitX,
              y: exitY,
              opacity: 0,
              scale: 1.15,
              transition: {
                duration: exitDuration,
                ease: [0.4, 0, 0.2, 1],
                delay: delay * 0.3,
              },
            }
          : {
              opacity,
              scale: 1,
              y: [0, -floatAmplitude, 0, floatAmplitude * 0.6, 0],
              transition: {
                opacity: { duration: 1.2, delay },
                scale: { duration: 1.2, delay },
                y: {
                  duration: floatDuration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: delay + 0.5,
                },
              },
            }
      }
    >
      <Cloud className="w-full h-auto drop-shadow-xl" />
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   Main SplashScreen
───────────────────────────────────────────── */
export function SplashScreen({
  onFinished,
  onStartFadeOut,
}: {
  onFinished: () => void
  onStartFadeOut: () => void
}) {
  const [isExiting, setIsExiting] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const logoControls = useAnimation()

  useEffect(() => {
    // Phase 2 — clouds leave, logo fades
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
      logoControls.start({
        opacity: 0,
        y: -20,
        transition: { duration: 0.5, ease: 'easeIn' },
      })
    }, 2800)

    // Phase 3 — overlay fades out while content fades in (cross-fade)
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true)
      onStartFadeOut()
    }, 4000)

    // Phase 4 — unmount overlay
    const unmountTimer = setTimeout(() => {
      setIsVisible(false)
      onFinished()
    }, 4900)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(fadeOutTimer)
      clearTimeout(unmountTimer)
    }
  }, [logoControls, onFinished, onStartFadeOut])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        className="fixed inset-0 z-[9999] overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, #b8dff5 0%, #d6eef8 30%, #e8f6fb 55%, #f0f9fc 75%, #f8fcfd 100%)',
        }}
        initial={{ opacity: 1 }}
        animate={{
          opacity: isFadingOut ? 0 : 1,
          transition: isFadingOut
            ? { duration: 0.9, ease: 'easeInOut' }
            : undefined,
        }}
      >
        {/* ── Atmospheric haze layers ── */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 120% 60% at 50% 100%, rgba(255,255,255,0.6) 0%, transparent 70%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(180,215,240,0.5) 0%, transparent 60%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2, delay: 0.3 } }}
        />

        {/* ── Background misty clouds (far / big) ── */}
        <FloatingCloud
          initialX="-12%"
          initialY="55%"
          exitX="-110%"
          exitY={-20}
          width={520}
          opacity={0.55}
          delay={0.1}
          floatAmplitude={12}
          floatDuration={9}
          isExiting={isExiting}
          exitDuration={1.4}
        />
        <FloatingCloud
          initialX="60%"
          initialY="50%"
          exitX="110%"
          exitY={-15}
          width={480}
          opacity={0.5}
          delay={0.2}
          floatAmplitude={14}
          floatDuration={8}
          isExiting={isExiting}
          exitDuration={1.3}
        />

        {/* ── Mid clouds ── */}
        <FloatingCloud
          initialX="-5%"
          initialY="30%"
          exitX="-105%"
          exitY={-40}
          width={380}
          opacity={0.72}
          delay={0.35}
          floatAmplitude={20}
          floatDuration={7}
          isExiting={isExiting}
          exitDuration={1.1}
        />
        <FloatingCloud
          initialX="65%"
          initialY="28%"
          exitX="105%"
          exitY={-35}
          width={360}
          opacity={0.68}
          delay={0.45}
          floatAmplitude={16}
          floatDuration={7.5}
          isExiting={isExiting}
          exitDuration={1.15}
        />

        {/* ── Top clouds ── */}
        <FloatingCloud
          initialX="20%"
          initialY="-4%"
          exitX={0}
          exitY={-160}
          width={420}
          opacity={0.6}
          delay={0.6}
          floatAmplitude={10}
          floatDuration={10}
          isExiting={isExiting}
          exitDuration={1.0}
        />
        <FloatingCloud
          initialX="-8%"
          initialY="8%"
          exitX="-100%"
          exitY={-60}
          width={300}
          opacity={0.5}
          delay={0.5}
          floatAmplitude={14}
          floatDuration={8.5}
          isExiting={isExiting}
          exitDuration={1.05}
        />
        <FloatingCloud
          initialX="70%"
          initialY="6%"
          exitX="100%"
          exitY={-55}
          width={320}
          opacity={0.52}
          delay={0.55}
          floatAmplitude={12}
          floatDuration={9}
          isExiting={isExiting}
          exitDuration={1.1}
        />

        {/* ── Foreground / close clouds ── */}
        <FloatingCloud
          initialX="-20%"
          initialY="68%"
          exitX="-115%"
          width={600}
          opacity={0.85}
          delay={0.0}
          floatAmplitude={8}
          floatDuration={11}
          isExiting={isExiting}
          exitDuration={1.5}
        />
        <FloatingCloud
          initialX="52%"
          initialY="70%"
          exitX="120%"
          width={550}
          opacity={0.8}
          delay={0.15}
          floatAmplitude={10}
          floatDuration={10}
          isExiting={isExiting}
          exitDuration={1.4}
        />

        {/* ── Center text ── */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none"
          animate={logoControls}
        >
          <motion.span
            style={{
              fontFamily: 'var(--font-syncopate), sans-serif',
              color: '#1e3a2f',
              fontSize: 'clamp(2rem, 6vw, 4.5rem)',
              fontWeight: 700,
              letterSpacing: '0.12em',
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.0, delay: 0.8, ease: [0.23, 1, 0.32, 1] },
            }}
          >
            SuraLestari
          </motion.span>
        </motion.div>

        {/* ── Bottom mist / ground fog ── */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '30%',
            background:
              'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(240,249,252,0.7) 40%, transparent 100%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5, delay: 0.2 } }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
