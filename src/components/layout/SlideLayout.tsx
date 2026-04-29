import type { ReactNode } from 'react'

interface SlideLayoutProps {
  children: ReactNode;
  /**
   * Optional custom background classes 
   * @default "bg-[#060F1A]" 
   */
  bgClassName?: string;
}

export default function SlideLayout({ children, bgClassName = "bg-[#060F1A]" }: SlideLayoutProps) {
  return (
    <div className={`w-full h-full flex flex-col justify-center text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative ${bgClassName}`}>
      {/* Universal Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Content Container */}
      <div className="max-w-6xl w-full mx-auto relative z-10 pt-16 pb-8 lg:py-0">
        {children}
      </div>
    </div>
  )
}
