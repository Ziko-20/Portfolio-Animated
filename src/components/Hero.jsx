import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-blue-500/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-sm font-medium text-blue-200">{t('hero.available')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 max-w-4xl leading-tight"
        >
          {t('hero.title1')}<span className="text-gradient">{t('hero.title_gradient')}</span>{t('hero.title2')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 font-light leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-white/10 rounded-full overflow-hidden transition-all hover:bg-white/20 glass border border-white/20"
          >
            <span className="mr-2">{t('hero.explore')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#contact" 
            className="group inline-flex items-center justify-center px-8 py-4 font-medium text-slate-900 bg-white rounded-full transition-all hover:bg-slate-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            <span className="mr-2">{t('hero.cv')}</span>
            <Download className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
