import { Hammer, Phone, Mail, MapPin } from 'lucide-react'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  </svg>
)

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Container Homes',
  'Metal Repair',
  'Utility Trailers',
  'BBQ Grills',
  'Wrought Iron Fences',
]

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-steel-900 border-t border-gray-200 dark:border-steel-800 transition-colors duration-300">
      {/* CTA banner */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-wide">
              Ready to Build Something That Lasts?
            </h3>
            <p className="text-orange-100 mt-1">Contact Michael today for a free consultation and quote.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="tel:+15551234567" className="bg-white text-orange-600 font-bold px-6 py-3 rounded flex items-center gap-2 hover:bg-orange-50 transition-colors">
              <Phone size={16} />
              (555) 123-4567
            </a>
            <a href="#contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded flex items-center gap-2 hover:bg-white/10 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-5 group">
              <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
                <Hammer size={20} className="text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-lg tracking-widest text-gray-900 dark:text-white leading-none transition-colors">
                  SILLER
                </div>
                <div className="font-display font-bold text-lg tracking-widest text-orange-500 leading-none">
                  METALS
                </div>
              </div>
            </a>
            <p className="text-gray-500 dark:text-neutral-500 text-sm leading-relaxed mb-5 transition-colors">
              Custom metal fabrication, container homes, utility trailers, and ornamental
              ironwork — built with precision, delivered with pride.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FacebookIcon, href: '#', label: 'Facebook' },
                { Icon: InstagramIcon, href: '#', label: 'Instagram' },
                { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white dark:bg-steel-800 border border-gray-200 dark:border-steel-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-neutral-400 hover:text-orange-500 hover:border-orange-500 transition-all shadow-sm dark:shadow-none"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-gray-900 dark:text-white uppercase tracking-widest text-sm mb-5 transition-colors">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 dark:text-neutral-500 hover:text-orange-500 dark:hover:text-orange-500 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-gray-900 dark:text-white uppercase tracking-widest text-sm mb-5 transition-colors">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-gray-500 dark:text-neutral-500 hover:text-orange-500 dark:hover:text-orange-500 text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-gray-900 dark:text-white uppercase tracking-widest text-sm mb-5 transition-colors">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+15551234567" className="flex items-start gap-3 group">
                  <Phone size={15} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-500 dark:text-neutral-500 group-hover:text-gray-900 dark:group-hover:text-white text-sm transition-colors">
                    (555) 123-4567
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@millermetals.com" className="flex items-start gap-3 group">
                  <Mail size={15} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-500 dark:text-neutral-500 group-hover:text-gray-900 dark:group-hover:text-white text-sm transition-colors">
                    info@millermetals.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-500 dark:text-neutral-500 text-sm transition-colors">
                    Monroe, Louisiana<br />Serving North Louisiana &amp; Surrounding Areas
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-5 pt-5 border-t border-gray-200 dark:border-steel-800 transition-colors">
              <div className="text-gray-500 dark:text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2">Hours</div>
              <div className="text-gray-500 dark:text-neutral-500 text-sm">Mon – Fri: 7am – 6pm</div>
              <div className="text-gray-500 dark:text-neutral-500 text-sm">Saturday: 8am – 4pm</div>
              <div className="text-gray-400 dark:text-neutral-600 text-sm">Sunday: Closed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-steel-800 py-6 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-400 dark:text-neutral-600 text-sm">
          <p>© {new Date().getFullYear()} Siller Metals. All rights reserved.</p>
          <p>
            Owned &amp; operated by{' '}
            <span className="text-gray-600 dark:text-neutral-400 font-medium">Michael Siller</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
