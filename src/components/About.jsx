import { motion } from 'framer-motion'
import { Award, Clock, Users, Wrench } from 'lucide-react'

const stats = [
  { icon: Clock, value: '20+', label: 'Years in Business' },
  { icon: Wrench, value: '500+', label: 'Projects Delivered' },
  { icon: Users, value: '300+', label: 'Happy Clients' },
  { icon: Award, value: '100%', label: 'Quality Guarantee' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-steel-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/2.jpg"
                alt="Dual-Barrel Craftsmanship: Heavy-Duty Custom Smoker Trailer by Michael Siller"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl shadow-orange-500/30"
            >
              <div className="font-display text-5xl font-bold leading-none">20+</div>
              <div className="text-sm font-semibold mt-1 uppercase tracking-wider">Years of<br />Craftsmanship</div>
            </motion.div>

            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-4 border-l-4 border-orange-500 rounded-tl-xl opacity-60" />
          </motion.div>

          {/* Text side */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
                <span className="w-8 h-0.5 bg-orange-500" />
                About Us
              </motion.div>

              <motion.h2 variants={fadeUp} className="section-heading text-gray-900 dark:text-white mb-6">
                Meet <span className="text-orange-500">Michael Siller</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-gray-600 dark:text-neutral-400 text-lg leading-relaxed mb-5">
                Michael Siller is a master metal fabricator with over two decades of hands-on
                experience in the industry. What started as a passion for working with steel has
                grown into a thriving business known throughout the region for exceptional quality
                and reliable craftsmanship.
              </motion.p>

              <motion.p variants={fadeUp} className="text-gray-600 dark:text-neutral-400 leading-relaxed mb-8">
                From innovative shipping container home conversions to precision-welded utility
                trailers, custom barbecue grills, and ornate wrought iron fences - Michael brings
                the same level of dedication and artistry to every single project, regardless of
                size. Every weld, every cut, every finish reflects his commitment to work that
                truly lasts.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                {['Licensed & Insured', 'Custom Designs', 'On-Time Delivery', 'Free Consultations'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-steel-800 border border-gray-200 dark:border-steel-700 text-gray-700 dark:text-neutral-300 text-sm font-medium px-4 py-2 rounded-full transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.a variants={fadeUp} href="#contact" className="btn-primary">
                Work With Michael
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-gray-200 dark:border-steel-800"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card-surface p-6 text-center group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-500/20 transition-colors">
                <stat.icon size={22} className="text-orange-500" />
              </div>
              <div className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-gray-500 dark:text-neutral-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
