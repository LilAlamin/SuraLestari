'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { SplashScreen } from './SplashScreen'

export function SplashWrapper({ children }: { children: React.ReactNode }) {
  const [splashDone, setSplashDone] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  // Called when the splash overlay starts fading (cross-fade begins)
  const handleStartFadeOut = useCallback(() => {
    setContentVisible(true)
  }, [])

  // Called when splash fully finishes (overlay unmounted)
  const handleFinished = useCallback(() => {
    setSplashDone(true)
  }, [])

  return (
    <>
      {!splashDone && (
        <SplashScreen
          onFinished={handleFinished}
          onStartFadeOut={handleStartFadeOut}
        />
      )}

      {/* Content always rendered; fades in when splash starts its exit */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        style={{ minHeight: '100%', display: 'contents' }}
      >
        {children}
      </motion.div>
    </>
  )
}
