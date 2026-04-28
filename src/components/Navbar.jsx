import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Hammer, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleClick = (href) => {
    setMobileOpen(false)
    setActive(href)
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-steel-950/95 backdrop-blur-md shadow-md dark:shadow-lg dark:shadow-black/40 border-b border-gray-200 dark:border-steel-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group min-w-0">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/25 group-hover:bg-orange-400 transition-colors">
              <Hammer size={18} className="text-white" />
            </div>
            <div className="leading-none min-w-0">
              <span className="sr-only">Sillers Welding and Renovation</span>
              <div className="flex items-baseline gap-2 sm:gap-3 whitespace-nowrap">
                <span
                  className={`font-display font-bold uppercase text-xl sm:text-2xl tracking-[0.18em] ${
                    scrolled ? 'text-gray-900 dark:text-white' : 'text-white'
                  } transition-colors`}
                >
                  SILLERS
                </span>
                <span className="font-display font-semibold text-base sm:text-xl tracking-[0.12em] text-orange-500">
                  Welding & Renovation
                </span>
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative px-4 py-2 font-display tracking-widest text-sm font-medium uppercase transition-colors duration-200 ${
                  active === link.href
                    ? 'text-orange-500'
                    : scrolled
                    ? 'text-gray-600 dark:text-neutral-300 hover:text-gray-900 dark:hover:text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500 rounded-full"
                  />
                )}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`ml-1 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                scrolled
                  ? 'text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-steel-800 hover:text-orange-500 dark:hover:text-orange-500'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={dark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {dark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href="#contact"
              className="ml-3 bg-orange-500 hover:bg-orange-400 text-white font-display font-semibold text-sm tracking-wider uppercase px-5 py-2.5 rounded transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={dark ? 'moon-mob' : 'sun-mob'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {dark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>
            <button
              className="text-white hover:text-orange-500 transition-colors p-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/98 dark:bg-steel-900/98 backdrop-blur-md border-t border-gray-200 dark:border-steel-800 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-4 py-3 font-display tracking-widest text-sm uppercase rounded transition-colors ${
                    active === link.href
                      ? 'text-orange-500 bg-orange-500/10'
                      : 'text-gray-700 dark:text-neutral-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-steel-800'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-orange-500 text-white font-display font-semibold text-sm tracking-wider uppercase px-4 py-3 rounded text-center"
              >
                Get a Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
