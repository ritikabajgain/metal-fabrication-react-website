import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const images = [
  { src: '/images/1.jpg', caption: 'The Industrial Homestead: Repurposed Shipping Container Living', category: 'Container Homes' },
  { src: '/images/2.jpg', caption: 'Dual-Barrel Craftsmanship: Heavy-Duty Custom Smoker Trailer', category: 'BBQ Grills' },
  { src: '/images/3.jpg', caption: 'Scrollwork Grandeur: Ornate Wrought Iron Archway', category: 'Wrought Iron' },
  { src: '/images/4.jpg', caption: 'Practical Boundaries: Sliding Security Gate with Privacy Slats', category: 'Fencing & Gates' },
  { src: '/images/5.jpg', caption: "The Pitmaster's Skeleton: Multi-Tiered Vertical Smoker Internals", category: 'BBQ Grills' },
  { src: '/images/6.jpg', caption: 'Bare Bones Utility: Skeleton of a Tandem-Axle Trailer', category: 'Trailers' },
  { src: '/images/7.jpg', caption: 'Foundation for the Road: Pressure-Treated Decking on a Custom Frame', category: 'Trailers' },
  { src: '/images/8.jpg', caption: 'Modernist Haven: Structured Balcony and Architectural Symmetry', category: 'Container Homes' },
  { src: '/images/9.jpg', caption: 'Curves in Iron: Elegant Spiral Banister and Shadowplay', category: 'Wrought Iron' },
]

const categories = ['All', ...Array.from(new Set(images.map((i) => i.category)))]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [selectedIdx, setSelectedIdx] = useState(null)

  const filtered = filter === 'All' ? images : images.filter((img) => img.category === filter)

  const navigate = useCallback(
    (dir) => {
      setSelectedIdx((i) => {
        if (i === null) return null
        const next = i + dir
        if (next < 0) return filtered.length - 1
        if (next >= filtered.length) return 0
        return next
      })
    },
    [filtered.length]
  )

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIdx === null) return
      if (e.key === 'Escape') setSelectedIdx(null)
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'ArrowRight') navigate(1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedIdx, navigate])

  useEffect(() => {
    document.body.style.overflow = selectedIdx !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedIdx])

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-steel-900 transition-colors duration-300">
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
            Our Work
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Project <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="section-subheading mx-auto">
            Click any photo to view it in full detail. Every image represents a real project
            completed with precision and pride.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                filter === cat
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white dark:bg-steel-800 text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-steel-700 hover:border-gray-400 dark:hover:border-neutral-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((image, idx) => {
              const isFeatured = idx === 0 || idx === 4
              return (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3 }}
                  className={`relative group cursor-pointer overflow-hidden rounded-xl bg-gray-200 dark:bg-steel-800 ${
                    isFeatured ? 'col-span-2 row-span-2' : ''
                  }`}
                  style={{ minHeight: isFeatured ? '380px' : '180px' }}
                  onClick={() => setSelectedIdx(idx)}
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    style={{ height: isFeatured ? '380px' : '180px' }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                    <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0" />
                    <p className="text-white text-xs md:text-sm font-medium text-center px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {image.caption}
                    </p>
                    <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox — always dark (modal over content) */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center"
            onClick={() => setSelectedIdx(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 text-neutral-400 hover:text-white transition-colors z-10 bg-white/10 p-2 rounded-full"
              onClick={() => setSelectedIdx(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <button
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 text-neutral-400 hover:text-orange-500 transition-colors bg-white/10 p-2 md:p-3 rounded-full"
              onClick={(e) => { e.stopPropagation(); navigate(-1) }}
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 text-neutral-400 hover:text-orange-500 transition-colors bg-white/10 p-2 md:p-3 rounded-full"
              onClick={(e) => { e.stopPropagation(); navigate(1) }}
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={selectedIdx}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl mx-4 w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[selectedIdx]?.src}
                alt={filtered[selectedIdx]?.caption}
                className="w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-lg">{filtered[selectedIdx]?.caption}</p>
                <div className="flex items-center justify-center gap-4 mt-2">
                  <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                    {filtered[selectedIdx]?.category}
                  </span>
                  <span className="text-neutral-500 text-sm">
                    {selectedIdx + 1} / {filtered.length}
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto">
              {filtered.map((img, i) => (
                <button
                  key={img.src}
                  onClick={(e) => { e.stopPropagation(); setSelectedIdx(i) }}
                  className={`w-12 h-12 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
                    i === selectedIdx ? 'border-orange-500 scale-110' : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
