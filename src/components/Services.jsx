import { motion } from 'framer-motion'
import { Home, Wrench, Truck, Flame, Shield, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Shipping Container Homes',
    description:
      'Transform industrial shipping containers into stunning, modern living spaces. Custom layouts, full insulation, electrical, and plumbing - built to code and to your vision.',
    highlight: 'Most Popular',
    image: '/images/1.jpg',
  },
  {
    icon: Wrench,
    title: 'Metal Repair',
    description:
      'Expert welding and restoration services for trailers, equipment, gates, and structural metalwork. We bring worn-out pieces back to full strength and function.',
    highlight: null,
    image: '/images/7.jpg',
  },
  {
    icon: Truck,
    title: 'Utility Trailers',
    description:
      'Heavy-duty custom utility trailers fabricated from high-grade steel. From flatbeds to enclosed cargo trailers - built for the load you need to carry.',
    highlight: null,
    image: '/images/6.jpg',
  },
  {
    icon: Flame,
    title: 'Barbecue Grills',
    description:
      'One-of-a-kind custom offset smokers and BBQ pits built for the serious pitmaster. Thick-gauge steel, tight welds, and custom touches that make every cookout legendary.',
    highlight: null,
    image: '/images/2.jpg',
  },
  {
    icon: Shield,
    title: 'Wrought Iron Fences',
    description:
      'Elegant and durable wrought iron fencing, gates, and railings that enhance security without sacrificing style. Classic designs or fully custom patterns.',
    highlight: null,
    image: '/images/3.jpg',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-steel-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

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
            What We Do
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="section-subheading mx-auto">
            From structural builds to intricate custom work - Sillers Welding & Renovation delivers
            craftsmanship that stands the test of time.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-surface group relative overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                {service.highlight && (
                  <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                    {service.highlight}
                  </span>
                )}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/40">
                  <service.icon size={22} className="text-white" />
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white mb-3 tracking-wide group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-orange-500 text-sm font-semibold hover:gap-2 transition-all duration-200"
                >
                  Request a Quote <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 p-8 flex flex-col justify-between min-h-[200px]"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Don't See What You Need?
              </h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Michael specializes in custom work. If you can dream it, he can build it from steel.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 bg-white text-orange-600 font-bold text-sm px-5 py-3 rounded hover:bg-orange-50 transition-colors self-start"
            >
              Talk to Michael <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
