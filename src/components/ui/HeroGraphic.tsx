import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface HeroGraphicProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function HeroGraphic({ children, className = '', delay = 0, ...props }: HeroGraphicProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`relative w-full min-h-[300px] md:aspect-video lg:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#060F1A] flex flex-col items-center justify-center ${className}`}
      {...props}
    >
      {/* Subtle inner glow and gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50 pointer-events-none" />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
        {children}
      </div>
    </motion.div>
  )
}
