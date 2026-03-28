import { motion } from 'framer-motion'
import { ArrowRight, Tag } from 'lucide-react'

const projects = [
  {
    image: '/images/1.jpg',
    title: 'The Industrial Homestead — Shipping Container Conversion',
    description:
      'A fully repurposed shipping container transformed into a functional, modern living space. This build features custom spray foam insulation, steel-framed window openings, weatherproofed exterior cladding, a raised deck with welded steel railing, and full electrical rough-in. Industrial aesthetics meet everyday livability in every detail.',
    tags: ['Container Home', 'Custom Build', 'Residential'],
    stats: [
      { label: 'Size', value: '320 sq ft' },
      { label: 'Duration', value: '8 weeks' },
      { label: 'Material', value: 'Corten Steel' },
    ],
  },
  {
    image: '/images/2.jpg',
    title: 'Dual-Barrel Craftsmanship — Heavy-Duty Custom Smoker Trailer',
    description:
      'A competition-ready dual-barrel offset smoker built on a road-legal tandem-axle trailer. Both cooking chambers are fabricated from 3/16" plate steel with tight-welded seams for maximum heat retention. Features include reverse-flow baffles, fold-out prep shelves, stainless hardware, and a high-temp powder coat finish built to handle years of heavy use.',
    tags: ['BBQ Smoker', 'Trailer-Mounted', 'Competition'],
    stats: [
      { label: 'Chambers', value: '2 Barrels' },
      { label: 'Steel', value: '3/16" Plate' },
      { label: 'Finish', value: 'Powder Coat' },
    ],
  },
  {
    image: '/images/9.jpg',
    title: 'Curves in Iron — Spiral Banister & Ornamental Ironwork',
    description:
      'A showcase of ornamental welding at its finest. This spiral banister was hand-formed using solid wrought iron stock, with each curve shaped and fitted individually for a seamless flow. The interplay of light and shadow across the finished piece reflects the level of precision and artistry Michael brings to every decorative ironwork commission.',
    tags: ['Wrought Iron', 'Decorative', 'Custom Design'],
    stats: [
      { label: 'Material', value: 'Wrought Iron' },
      { label: 'Finish', value: 'Flat Black' },
      { label: 'Process', value: 'Hand-Formed' },
    ],
  },
]

export default function FeaturedProjects() {
  return (
    <section id="featured" className="py-24 bg-white dark:bg-steel-950 transition-colors duration-300">
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
            Showcase
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            A closer look at some of our most notable builds - each one a testament
            to the skill and dedication Michael brings to his craft.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Image */}
              <div className={`relative group ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Stats overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex-1 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-center border border-white/10"
                    >
                      <div className="font-display text-lg font-bold text-orange-500">{stat.value}</div>
                      <div className="text-neutral-300 text-xs font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center font-display text-xl font-bold text-white shadow-lg shadow-orange-500/40">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight tracking-wide">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-200 group"
                >
                  Start a Similar Project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
