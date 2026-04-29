import React, { useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface SlideContainerProps {
  children: React.ReactNode[]
  current: number
  onNext: () => void
  onPrev: () => void
  onGoTo?: (index: number) => void
  total: number
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
}

export default function SlideContainer({ children, current, onNext, onPrev, onGoTo, total }: SlideContainerProps) {
  const [direction, setDirection] = React.useState(1)
  const [prevCurrent, setPrevCurrent] = React.useState(current)

  // Derive direction synchronously during render to prevent Framer Motion from using obsolete direction on exit/enter
  if (current !== prevCurrent) {
    setDirection(current > prevCurrent ? 1 : -1)
    setPrevCurrent(current)
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault()
      onNext()
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      onPrev()
    }
  }, [onNext, onPrev])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="relative w-full h-full overflow-hidden bg-fhgr-dark">
      {/* Progress bar (top edge) */}
      <div className="absolute top-0 left-0 right-0 z-50 h-[3px] bg-white/10">
        <motion.div
          className="h-full bg-fhgr-accent shadow-[0_0_10px_rgba(232,168,124,0.5)]"
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>

      {/* Slide counter */}
      {total > 1 && (
        <div className="absolute top-4 right-6 z-50 text-white/30 text-xs font-mono tracking-widest hidden md:block">
          {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      )}

      {/* Slides */}
      <AnimatePresence custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 w-full h-full overflow-y-auto lg:overflow-hidden"
        >
          {children[current]}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Control Bar Hover Area */}
      {total > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 w-96 h-24 flex items-end justify-center group/nav pb-4">
          <div className="opacity-0 group-hover/nav:opacity-100 transition-opacity duration-500 flex items-center gap-4 bg-fhgr-dark/80 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/10 shadow-2xl">
            <button
              onClick={onPrev}
              disabled={current === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${current === 0 ? 'text-white/10' : 'text-white/50 hover:bg-white/10 hover:text-white'}`}
              aria-label="Previous slide"
            >
              ←
            </button>
            
            <div className="flex items-center gap-3 px-2">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => onGoTo ? onGoTo(i) : i < current ? onPrev() : i > current ? onNext() : null}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-6 h-2 bg-fhgr-petrol-light'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={onNext}
              disabled={current === total - 1}
              className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${current === total - 1 ? 'text-white/10' : 'text-white/50 hover:bg-white/10 hover:text-white'}`}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
