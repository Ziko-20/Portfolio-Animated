import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const skills = [
  "PHP", "Laravel", "Livewire", "JavaScript", "React.js", 
  "Tailwind CSS", "Bootstrap", "Chart.js", "MySQL", 
  "HTML", "CSS", "Figma", "Git", "GitLab"
];

const About = () => {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const fullName = "Zakaria Lemchaouri";

  const startTyping = () => {
    if (hasStarted) return;
    setHasStarted(true);
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullName.slice(0, i + 1));
      i++;
      if (i >= fullName.length) clearInterval(interval);
    }, 100);
  };

  return (
    <section id="about" className="w-full py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('about.title1')}<span className="text-gradient">{t('about.title_gradient')}</span>{t('about.title2')}
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {t('about.p2')}
            </p>
            
            <div>
              <h3 className="text-xl font-display font-semibold mb-4 text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 rounded-full glass border border-white/5 text-sm font-medium text-slate-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-display font-semibold mb-4 text-white">{t('about.softSkillsTitle')}</h3>
              <div className="flex flex-wrap gap-3">
                {t('about.softSkills', { returnObjects: true }).map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            onViewportEnter={startTyping}
            transition={{ duration: 0.7 }}
            className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl"></div>
            <div className="relative h-full w-full glass-card overflow-hidden flex flex-col font-mono">
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 border-b border-white/10 bg-slate-900/80">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto text-xs font-medium text-slate-400">bash ~ zakaria</div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 text-sm text-slate-300 flex-grow flex flex-col gap-4">
                <div>
                  <span className="text-green-400">zakaria@macbook</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~/portfolio</span>
                  <span className="text-white">$ whoami</span>
                </div>
                
                <div className="text-yellow-300 font-bold text-lg min-h-[1.75rem]">
                  {typedText}
                  {typedText !== fullName && <span className="inline-block w-2 h-5 ml-1 bg-slate-400 animate-pulse align-middle"></span>}
                </div>

                {typedText === fullName && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 flex flex-col gap-2"
                  >
                    <div>
                      <span className="text-green-400">zakaria@macbook</span>
                      <span className="text-white">:</span>
                      <span className="text-blue-400">~/portfolio</span>
                      <span className="text-white">$ ./status</span>
                    </div>
                    <div className="text-slate-300">
                      <span className="text-blue-300">System:</span> Online and ready to code.<br/>
                      <span className="text-blue-300">Specialty:</span> Laravel & React.<br/>
                      <span className="text-blue-300">Status:</span> Open for opportunities.
                    </div>
                    <div className="mt-4">
                      <span className="text-green-400">zakaria@macbook</span>
                      <span className="text-white">:</span>
                      <span className="text-blue-400">~/portfolio</span>
                      <span className="text-white">$ </span>
                      <span className="inline-block w-2 h-4 ml-1 bg-slate-400 animate-pulse align-middle"></span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
