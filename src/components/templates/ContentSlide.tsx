import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'

interface ContentSlideProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  bgClassName?: string;
}

export default function ContentSlide({ eyebrow, title, intro, leftContent, rightContent, bgClassName }: ContentSlideProps) {
  const hasRightPane = Boolean(rightContent);

  return (
    <SlideLayout bgClassName={bgClassName}>
      <div className={`grid grid-cols-1 ${hasRightPane ? 'lg:grid-cols-12 gap-12' : 'lg:grid-cols-1 gap-8 max-w-4xl mx-auto'} items-center`}>
        
        {/* Main/Left Column (Text & UI) */}
        <div className={`${hasRightPane ? 'lg:col-span-6' : 'lg:col-span-1'} flex flex-col justify-center`}>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            {eyebrow && (
               <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">{eyebrow}</div>
            )}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">{title}</h2>
            {intro && (
               <p className="text-lg text-white/50 leading-relaxed mb-8">{intro}</p>
            )}
          </motion.div>

          {leftContent && (
             <motion.div 
               initial={{opacity:0, y:10}} 
               animate={{opacity:1, y:0}} 
               transition={{ delay: 0.1 }}
               className="space-y-4"
             >
               {leftContent}
             </motion.div>
          )}
        </div>

        {/* Right Column (Visual) */}
        {hasRightPane && (
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full relative"
            >
              {rightContent}
            </motion.div>
          </div>
        )}

      </div>
    </SlideLayout>
  )
}
