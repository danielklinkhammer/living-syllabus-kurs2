import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'glass' | 'dark';
  className?: string;
  delay?: number;
}

export default function Card({ children, variant = 'default', className = '', delay = 0, ...props }: CardProps) {
  const baseStyle = "p-6 md:p-8 rounded-2xl md:rounded-3xl border transition-colors duration-300 relative overflow-hidden";
  
  const variants = {
    default: "border-white/10 bg-white/5",
    primary: "border-fhgr-petrol/30 bg-fhgr-petrol/10",
    glass: "border-white/10 bg-black/40 backdrop-blur-xl",
    dark: "border-white/10 bg-black/60",
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20, y: 10 }} 
      animate={{ opacity: 1, x: 0, y: 0 }} 
      transition={{ delay, duration: 0.4 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
