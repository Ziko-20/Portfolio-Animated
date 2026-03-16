import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="w-full py-24 px-6 relative mt-12 mb-24">
      <div className="max-w-6xl mx-auto">
        
        <div className="glass p-[1px] rounded-[3rem] overflow-hidden bg-gradient-to-b from-slate-700/50 to-slate-800/20">
          <div className="bg-slate-900/60 rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden flex flex-col items-center text-center">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1/2 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
                {t('contact.title1')}<span className="text-gradient">{t('contact.title_gradient')}</span>{t('contact.title2')}
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">
                {t('contact.subtitle')}
              </p>
                
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="mailto:lemchaourizakaria1@gmail.com" className="group flex items-center justify-center px-8 py-4 font-medium text-slate-900 bg-white rounded-full transition-all hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <Mail className="w-5 h-5 mr-3" />
                  {t('contact.message')}
                </a>
                
                <div className="flex items-center justify-center px-8 py-4 font-medium text-slate-300 glass rounded-full border border-white/10">
                  <MapPin className="w-5 h-5 mr-3 text-slate-400" />
                  {t('contact.location')}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
