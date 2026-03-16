import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const navKeys = ['about', 'projects', 'experience', 'contact'];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}>
          
          <a href="#" className="text-xl font-display tracking-tighter hover:text-blue-400 transition-colors">
            <span className="font-bold">Zakaria</span><span className="text-blue-500 font-light">.</span>
          </a>

          <ul className="hidden md:flex items-center space-x-8">
            {navKeys.map((key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {t(`nav.${key}`)}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  className={`px-2 py-1 text-xs font-medium rounded-full transition-colors ${
                    i18n.language.startsWith(lng.code) 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lng.label}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              {t('nav.letsTalk')}
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
