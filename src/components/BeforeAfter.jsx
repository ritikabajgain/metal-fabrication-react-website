import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { MoveHorizontal } from 'lucide-react'

function Slider({ beforeSrc, afterSrc, beforeLabel = 'Before', afterLabel = 'After' }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const update = useCallback((clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100))
    setPosition(pct)
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseMove = (e) => { if (dragging.current) update(e.clientX) }
  const onMouseUp = () => { dragging.current = false }
  const onTouchMove = (e) => update(e.touches[0].clientX)

  useEffect(() => {
    document.addEventListener('mouseup', onMouseUp)
    return () => document.removeEventListener('mouseup', onMouseUp)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-72 md:h-[480px] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-2xl"
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
    >
      {/* After image — full background */}
      <img
        src={afterSrc}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* Before image — clipped to left side */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 cursor-col-resize"
        style={{ left: `${position}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={() => { dragging.current = true }}
      >
        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-xl shadow-orange-500/50 border-[3px] border-white">
          <MoveHorizontal size={20} className="text-white" />
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-20 bg-white/60 pointer-events-none" />
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-20 bg-white/60 pointer-events-none" />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <span className="bg-black/70 backdrop-blur-sm text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded uppercase tracking-wider border border-white/20">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-4 right-4 z-10 pointer-events-none">
        <span className="bg-orange-500/90 backdrop-blur-sm text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded uppercase tracking-wider">
          {afterLabel}
        </span>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 bg-gray-50 dark:bg-steel-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-0.5 bg-orange-500" />
            Transformations
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Before <span className="text-orange-500">&</span> After
          </h2>
          <p className="section-subheading mx-auto">
            Drag the slider to reveal the dramatic difference our metalwork and repair
            services make. From worn-out to like-new.
          </p>
        </motion.div>

        {/* Instruction badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white dark:bg-steel-800 border border-gray-200 dark:border-steel-700 text-gray-600 dark:text-neutral-400 text-sm px-4 py-2 rounded-full shadow-sm dark:shadow-none transition-colors">
            <MoveHorizontal size={16} className="text-orange-500" />
            Drag the slider left or right
          </div>
        </motion.div>

        {/* Sliders */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Slider
              beforeSrc="/images/before_6.png"
              afterSrc="/images/6.jpg"
              beforeLabel="Raw Frame"
              afterLabel="Deck Complete"
            />
            <p className="text-gray-500 dark:text-neutral-400 text-sm text-center mt-4 font-medium">
              Tandem-Axle Trailer Build Progression
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Slider
              beforeSrc="/images/before_2.png"
              afterSrc="/images/2.jpg"
              beforeLabel="Internals"
              afterLabel="Finished Build"
            />
            <p className="text-gray-500 dark:text-neutral-400 text-sm text-center mt-4 font-medium">
              Custom Dual-Barrel Smoker Build
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
