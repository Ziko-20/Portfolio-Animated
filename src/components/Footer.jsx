import React from 'react';
import { Twitter, Github, Linkedin, Dribbble } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-white/5 bg-slate-950/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-2xl font-display tracking-tighter mb-2">
            <span className="font-bold">Zakaria</span><span className="text-blue-500 font-light">.</span>
          </a>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} {t('footer.rights')}</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Ziko-20" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-3 glass rounded-full hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/zakaria-lemchaouri" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors p-3 glass rounded-full hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
