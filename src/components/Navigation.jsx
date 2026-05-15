import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

const navKeys = ['about', 'skills', 'projects', 'experience', 'contact'];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navKeys.map((k) => document.getElementById(k)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
              scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xl font-display font-bold tracking-tight hover:opacity-70 transition-opacity flex items-center gap-0.5"
              style={{ color: '#111111' }}
            >
              <span>Zakaria</span>
              <span style={{ color: '#2563eb' }}>.</span>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {navKeys.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    onClick={(e) => handleNavClick(e, key)}
                    className="relative px-4 py-2 text-sm font-medium rounded-xl transition-colors"
                    style={{ color: activeSection === key ? '#111111' : '#71717a' }}
                  >
                    {activeSection === key && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-xl"
                        style={{ background: 'rgba(0,0,0,0.06)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{t(`nav.${key}`)}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              {/* Language switcher */}
              <div
                className="hidden sm:flex items-center gap-0.5 rounded-xl p-1 border"
                style={{ background: 'rgba(0,0,0,0.04)', borderColor: 'rgba(0,0,0,0.08)' }}
              >
                {languages.map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => i18n.changeLanguage(lng.code)}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg transition-all"
                    style={
                      i18n.language.startsWith(lng.code)
                        ? { background: '#2563eb', color: '#fff' }
                        : { color: '#71717a' }
                    }
                  >
                    {lng.label}
                  </button>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90 shadow-sm"
                style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
              >
                {t('nav.letsTalk')}
              </a>

              {/* Mobile */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-xl border transition-colors"
                style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#52525b', background: 'rgba(0,0,0,0.03)' }}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden flex justify-end"
          >
            <div
              className="absolute inset-0 backdrop-blur-xl"
              style={{ background: 'rgba(244,244,245,0.7)' }}
              onClick={() => setMobileOpen(false)}
            />
            <div className="relative w-72 h-full glass-dark flex flex-col p-8 pt-24">
              <ul className="flex flex-col gap-2">
                {navKeys.map((key, i) => (
                  <motion.li key={key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <a
                      href={`#${key}`}
                      onClick={(e) => handleNavClick(e, key)}
                      className="block py-3 px-4 text-lg font-display font-semibold rounded-xl transition-all"
                      style={{ color: '#18181b' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.04)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      {t(`nav.${key}`)}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex gap-1 rounded-xl p-1 w-fit border"
                style={{ background: 'rgba(0,0,0,0.03)', borderColor: 'rgba(0,0,0,0.08)' }}>
                {languages.map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => { i18n.changeLanguage(lng.code); setMobileOpen(false); }}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg transition-all"
                    style={
                      i18n.language.startsWith(lng.code)
                        ? { background: '#2563eb', color: '#fff' }
                        : { color: '#71717a' }
                    }
                  >
                    {lng.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
