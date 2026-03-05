import { useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function Cursor() {
  const springConfig = { damping: 40, stiffness: 350 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 5)
      cursorY.set(e.clientY - 5)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  )
}