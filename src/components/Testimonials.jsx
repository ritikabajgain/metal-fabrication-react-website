import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'James & Sarah Thompson',
    location: 'Shreveport, LA',
    project: 'Container Home',
    rating: 5,
    text: "Michael built our dream container home and it exceeded every expectation. He walked us through every decision, worked within our budget, and the finished product is absolutely stunning. The quality of the welds, the insulation, everything — it's top tier. We get compliments on it constantly. If you're thinking about a container home, there's no one else to call.",
    initials: 'JT',
  },
  {
    name: 'Randy Kowalski',
    location: 'Ruston, LA',
    project: 'Utility Trailer',
    rating: 5,
    text: "I've bought trailers from big manufacturers and none of them come close to the quality Michael builds. My gooseneck trailer is three years old and hauls heavy equipment every single week without a single issue. He built exactly what I spec'd out, added a few smart suggestions I hadn't thought of, and had it ready ahead of schedule. Worth every penny.",
    initials: 'RK',
  },
  {
    name: 'Maria & Carlos Reyes',
    location: 'West Monroe, LA',
    project: 'Wrought Iron Fence',
    rating: 5,
    text: "We hired Michael to build a custom wrought iron fence and gate for our property and it completely transformed the front of our house. He brought design sketches, made adjustments when we changed our minds, and the installation was flawless. Two years later it still looks brand new. The neighbors always ask who did it. Michael is truly a craftsman.",
    initials: 'MR',
  },
  {
    name: 'Tommy \"Pitmaster\" Briggs',
    location: 'Baton Rouge, LA',
    project: 'Custom BBQ Smoker',
    rating: 5,
    text: "I compete in BBQ tournaments across the South and my Sillers Welding & Renovation smoker has become my secret weapon. Michael built me a reverse-flow offset on a trailer that holds temp like a dream and has won me multiple trophies. The construction quality is insane — quarter-inch plate, tight welds, custom exhaust stacks. It's a work of art that happens to cook the best brisket you've ever tasted.",
    initials: 'TB',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-steel-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-0.5 bg-orange-500" />
            Client Reviews
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            What Our <span className="text-orange-500">Clients</span> Say
          </h2>
          <p className="section-subheading mx-auto">
            Our reputation is built project by project, weld by weld.
            Here's what real clients have to say.
          </p>
        </motion.div>

        {/* Featured testimonial carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="absolute -top-4 -left-4 text-orange-500/20">
            <Quote size={80} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="card-surface p-8 md:p-12 relative"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-orange-500 fill-orange-500" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-neutral-200 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-display font-bold text-white text-lg shadow-lg shadow-orange-500/30 flex-shrink-0">
                  {testimonials[current].initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonials[current].name}</div>
                  <div className="text-gray-500 dark:text-neutral-400 text-sm">{testimonials[current].location}</div>
                </div>
                <div className="ml-auto">
                  <span className="bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {testimonials[current].project}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-8 h-2 bg-orange-500' : 'w-2 h-2 bg-gray-300 dark:bg-steel-600 hover:bg-gray-400 dark:hover:bg-steel-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-steel-700 text-gray-500 dark:text-neutral-400 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-steel-700 text-gray-500 dark:text-neutral-400 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center transition-all"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Mini card grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.button
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setCurrent(i)}
              className={`card-surface p-5 text-left transition-all duration-200 hover:border-orange-500/60 w-full ${
                current === i ? 'border-orange-500 shadow-lg shadow-orange-500/10' : ''
              }`}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} className="text-orange-500 fill-orange-500" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-3">"{t.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <span className="text-gray-700 dark:text-neutral-300 text-sm font-medium">{t.name}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
