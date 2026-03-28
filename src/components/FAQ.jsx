import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What areas do you serve?',
    a: "Siller Metals is based in Monroe, Louisiana, and primarily serves North Louisiana including Shreveport, Ruston, Alexandria, Natchitoches, and surrounding areas. For larger projects like container home builds, Michael is willing to travel — contact us to discuss your location and project scope.",
  },
  {
    q: 'How long does a shipping container home take to build?',
    a: "Most single-container home conversions take between 6–10 weeks from the date materials are on-site. Multi-container or more complex layouts can take 3–6 months. Timelines depend on permitting in your area, the complexity of the design, and material lead times. Michael provides a detailed timeline estimate during the quote process.",
  },
  {
    q: 'Do you offer warranties on your work?',
    a: "Yes. All structural fabrication work is backed by a 2-year warranty against defects in workmanship. Container home builds come with a 1-year warranty on all interior finishes and a 5-year structural warranty. For repair work, we warranty our repairs for 12 months. We stand behind every weld and every build.",
  },
  {
    q: 'What materials do you work with?',
    a: "Michael works primarily with mild steel, A36 structural steel, 3/16\" and 1/4\" plate steel for heavy-duty work, and COR-TEN (weathering steel) for container builds. For decorative work like fences and railings, wrought iron and ornamental steel are used. All materials are sourced from reputable domestic suppliers.",
  },
  {
    q: 'How does the quoting process work?',
    a: "Start by filling out the contact form below or calling directly. Michael will schedule a free consultation — either in person or via video call — to discuss your project in detail. After that, he'll provide a written quote typically within 3–5 business days. The quote covers materials, labor, and estimated timeline. No surprise fees.",
  },
  {
    q: 'Can you do custom or one-of-a-kind designs?',
    a: "Absolutely — that's what Siller Metals specializes in. Whether it's a container home with a rooftop deck, a competition smoker with unique features, or a wrought iron gate with custom scrollwork, Michael thrives on custom challenges. Bring your sketches, ideas, or inspiration photos and he'll make it happen.",
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 dark:border-steel-800 transition-colors">
      <button
        className="w-full text-left py-5 px-1 flex items-start justify-between gap-4 group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className={`font-display text-lg font-semibold tracking-wide transition-colors duration-200 ${
            isOpen ? 'text-orange-500' : 'text-gray-900 dark:text-white group-hover:text-orange-500'
          }`}
        >
          {faq.q}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 mt-0.5 ${
          isOpen
            ? 'bg-orange-500 border-orange-500 text-white'
            : 'border-gray-300 dark:border-steel-700 text-gray-500 dark:text-neutral-400 group-hover:border-orange-500 group-hover:text-orange-500'
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 dark:text-neutral-400 leading-relaxed pb-5 px-1 transition-colors">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-steel-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
              <span className="w-8 h-0.5 bg-orange-500" />
              FAQ
            </div>
            <h2 className="section-heading text-gray-900 dark:text-white mb-6">
              Common <span className="text-orange-500">Questions</span>
            </h2>
            <p className="text-gray-600 dark:text-neutral-400 leading-relaxed mb-8 transition-colors">
              Have a question not answered here? Don't hesitate to reach out directly.
              Michael personally responds to every inquiry.
            </p>

            <div className="relative rounded-xl overflow-hidden h-64">
              <img
                src="/images/3.jpg"
                alt="Metalwork detail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="font-display text-lg font-bold text-white mb-1">Still have questions?</div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-400 transition-colors"
                >
                  Contact Michael directly →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
