import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const socials = [
  { icon: Github,   href: 'https://github.com/Ziko-20',                      label: 'GitHub',   color: '#18181b' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/zakaria-lemchaouri',  label: 'LinkedIn', color: '#0077B5' },
  { icon: Mail,     href: 'mailto:lemchaourizakaria1@gmail.com',              label: 'Email',    color: '#2563eb' },
];

const navKeys = ['about', 'skills', 'projects', 'experience', 'contact'];

export default function Footer() {
  const { t } = useTranslation();
  const scrollTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full pt-16 pb-8 px-4 sm:px-6 overflow-hidden"
      style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollTop(); }}
              className="text-2xl font-display font-black tracking-tight mb-3 inline-flex items-baseline gap-0.5"
              style={{ color: '#111111' }}>
              <span>Zakaria</span>
              <span style={{ color: '#2563eb' }}>.</span>
            </a>
            <p className="text-sm leading-relaxed max-w-[240px] mt-2" style={{ color: '#a1a1aa' }}>
              {t('footer.location')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest mb-5" style={{ color: '#a1a1aa' }}>
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-3">
              {navKeys.map((key) => (
                <li key={key}>
                  <a href={`#${key}`}
                    onClick={(e) => { e.preventDefault(); document.getElementById(key)?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-sm transition-colors"
                    style={{ color: '#71717a' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#71717a'}>
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials + back to top */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest mb-5" style={{ color: '#a1a1aa' }}>
              {t('footer.connect')}
            </h4>
            <div className="flex gap-3 mb-8">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer" aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl transition-all duration-300"
                  style={{ border: '1.5px solid rgba(0,0,0,0.08)', color: '#71717a', background: '#fff' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = `${color}30`; e.currentTarget.style.boxShadow = `0 4px 16px ${color}20`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#71717a'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.boxShadow = ''; }}>
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>

            <motion.button onClick={scrollTop} whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm transition-colors group"
              style={{ color: '#a1a1aa' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}>
              <div className="p-2 rounded-xl transition-all"
                style={{ border: '1.5px solid rgba(0,0,0,0.08)', background: '#fff' }}>
                <ArrowUp size={14} />
              </div>
              {t('footer.backToTop')}
            </motion.button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <p className="text-xs" style={{ color: '#a1a1aa' }}>
            © {new Date().getFullYear()} Zakaria Lemchaouri. {t('footer.rights')}
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: '#a1a1aa' }}>
            {t('footer.madeWith')} <Heart size={12} className="text-red-400" fill="currentColor" /> in Rabat
          </p>
        </div>
      </div>
    </footer>
  );
}
