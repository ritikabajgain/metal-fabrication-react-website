import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/1.jpg"
          alt="Metal fabrication workshop"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-transparent to-black/30" />
      </div>

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 text-sm font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse-slow" />
            Professional Metal Fabrication
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-wide mb-6"
          >
            CUSTOM METAL
            <br />
            <span className="text-orange-500">FABRICATION</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-neutral-300 font-medium">
              & Container Homes
            </span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-neutral-400">
              Built to Last
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            From shipping container homes to custom wrought iron fences, Michael
            Siller brings decades of expertise and a passion for precision
            craftsmanship to every project.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#portfolio" className="btn-primary text-center justify-center sm:justify-start">
              View Our Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline text-center justify-center sm:justify-start">
              Get a Free Quote
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10"
          >
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '100%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-orange-500">{stat.value}</div>
                <div className="text-neutral-400 text-sm font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 hover:text-orange-500 transition-colors flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  )
}
