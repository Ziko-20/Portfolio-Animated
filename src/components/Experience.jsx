import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      id: 1,
      role: t('experience.items.e1_role'),
      company: t('experience.items.e1_company'),
      period: t('experience.items.e1_period'),
      description: t('experience.items.e1_desc')
    }
  ];

  return (
    <section id="experience" className="w-full py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">{t('experience.title1')}<span className="text-gradient">{t('experience.title_gradient')}</span></h2>
          <p className="text-slate-400 text-lg">{t('experience.subtitle')}</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] md:left-1/2 md:-ml-px top-0 bottom-0 w-[2px] bg-slate-800"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-[6px] md:left-1/2 md:-translate-x-1/2 w-[36px] h-[36px] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] border-4 border-slate-950 z-10" />
                </div>

                {/* Content */}
                <div className={`w-[calc(100%-60px)] md:w-5/12 ml-[60px] md:ml-0 glass-card p-8 group hover:-translate-y-1 transition-transform duration-300`}>
                  <div className="inline-block px-3 py-1 bg-slate-800/50 rounded-full text-xs font-medium text-blue-300 mb-4 border border-blue-500/20">
                    {exp.period}
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-slate-300 mb-4">{exp.company}</h4>
                  <p className="text-slate-400 leading-relaxed font-light">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
