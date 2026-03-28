import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, Wrench } from 'lucide-react'
import emailjs from '@emailjs/browser'

// ── EmailJS config ──────────────────────────────────────────────
// Fill these in after completing the EmailJS setup steps below.
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
// ───────────────────────────────────────────────────────────────

const services = [
  'Shipping Container Home',
  'Metal Repair',
  'Utility Trailer',
  'Barbecue Grill',
  'Wrought Iron Fence',
  'Other / Custom',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || 'Not provided',
          service: form.service || 'Not specified',
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      alert('Failed to send message. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-gray-50 dark:bg-steel-700 border border-gray-300 dark:border-steel-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-neutral-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-colors'

  return (
    <section id="contact" className="py-24 bg-white dark:bg-steel-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none" />

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
            Get In Touch
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Start Your <span className="text-orange-500">Project</span>
          </h2>
          <p className="section-subheading mx-auto">
            Ready to build something that lasts? Reach out for a free consultation
            and quote. Michael personally responds to every inquiry.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <a
              href="tel:+15551234567"
              className="card-surface p-5 flex items-start gap-4 group hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className="w-11 h-11 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                <Phone size={20} className="text-orange-500" />
              </div>
              <div>
                <div className="text-gray-500 dark:text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-1">Call Us</div>
                <div className="text-gray-900 dark:text-white font-semibold text-lg">(555) 123-4567</div>
                <div className="text-gray-400 dark:text-neutral-500 text-xs mt-0.5">Mon–Sat, 7am–6pm</div>
              </div>
            </a>

            <a
              href="mailto:info@millermetals.com"
              className="card-surface p-5 flex items-start gap-4 group hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className="w-11 h-11 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                <Mail size={20} className="text-orange-500" />
              </div>
              <div>
                <div className="text-gray-500 dark:text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-1">Email Us</div>
                <div className="text-gray-900 dark:text-white font-semibold">info@millermetals.com</div>
                <div className="text-gray-400 dark:text-neutral-500 text-xs mt-0.5">We reply within 24 hours</div>
              </div>
            </a>

            <div className="card-surface p-5 flex items-start gap-4">
              <div className="w-11 h-11 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-orange-500" />
              </div>
              <div>
                <div className="text-gray-500 dark:text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-1">Location</div>
                <div className="text-gray-900 dark:text-white font-semibold">Monroe, Louisiana</div>
                <div className="text-gray-400 dark:text-neutral-500 text-xs mt-0.5">Serving North Louisiana &amp; Surrounding Areas</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Clock, title: 'Fast Response', desc: 'Quote within 3–5 days' },
                { icon: Wrench, title: 'Free Consult', desc: 'No obligation estimate' },
              ].map((item) => (
                <div key={item.title} className="card-surface p-4 text-center">
                  <item.icon size={20} className="text-orange-500 mx-auto mb-2" />
                  <div className="text-gray-900 dark:text-white text-sm font-semibold mb-1">{item.title}</div>
                  <div className="text-gray-500 dark:text-neutral-500 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-steel-800 h-48 transition-colors">
              <iframe
                title="Siller Metals Location — Monroe, Louisiana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109258.63!2d-92.2606!3d32.5526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862a60e048af7365%3A0x875e2a3f4b2bf2b0!2sMonroe%2C%20LA%2C%20USA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="card-surface p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-neutral-400">
                    Thanks for reaching out. Michael will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                    className="mt-6 text-orange-500 font-semibold text-sm hover:text-orange-400 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-wide">
                    Request a Free Quote
                  </h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-gray-600 dark:text-neutral-400 text-sm font-medium mb-2">
                          Full Name <span className="text-orange-500">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text" required
                          value={form.name} onChange={handleChange}
                          placeholder="John Smith"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-600 dark:text-neutral-400 text-sm font-medium mb-2">
                          Email Address <span className="text-orange-500">*</span>
                        </label>
                        <input
                          id="email" name="email" type="email" required
                          value={form.email} onChange={handleChange}
                          placeholder="john@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-gray-600 dark:text-neutral-400 text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={form.phone} onChange={handleChange}
                          placeholder="(555) 000-0000"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-gray-600 dark:text-neutral-400 text-sm font-medium mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="service" name="service"
                          value={form.service} onChange={handleChange}
                          className={inputClass + ' cursor-pointer appearance-none'}
                        >
                          <option value="">Select a service…</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-600 dark:text-neutral-400 text-sm font-medium mb-2">
                        Project Details <span className="text-orange-500">*</span>
                      </label>
                      <textarea
                        id="message" name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Tell Michael about your project — dimensions, timeline, special requirements, etc."
                        className={inputClass + ' resize-none'}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>Send Message <Send size={16} /></>
                      )}
                    </button>

                    <p className="text-gray-400 dark:text-neutral-500 text-xs text-center">
                      By submitting, you agree to be contacted regarding your project inquiry. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
