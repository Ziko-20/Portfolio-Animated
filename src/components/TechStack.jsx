import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  SiReact, SiLaravel, SiPhp, SiJavascript, SiTailwindcss, SiMysql,
  SiGit, SiHtml5, SiFigma, SiGitlab, SiBootstrap, SiVite, SiChartdotjs, SiNodedotjs,
} from 'react-icons/si';

const row1 = [
  { Icon: SiLaravel,    name: 'Laravel',    color: '#FF2D20' },
  { Icon: SiReact,      name: 'React',      color: '#61DAFB' },
  { Icon: SiPhp,        name: 'PHP',        color: '#777BB4' },
  { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiTailwindcss,name: 'Tailwind',   color: '#06B6D4' },
  { Icon: SiMysql,      name: 'MySQL',      color: '#4479A1' },
  { Icon: SiGit,        name: 'Git',        color: '#F05032' },
  { Icon: SiHtml5,      name: 'HTML5',      color: '#E34F26' },
];
const row2 = [
  { Icon: SiFigma,      name: 'Figma',      color: '#F24E1E' },
  { Icon: SiNodedotjs,  name: 'Node.js',    color: '#339933' },
  { Icon: SiGitlab,     name: 'GitLab',     color: '#FC6D26' },
  { Icon: SiChartdotjs, name: 'Chart.js',   color: '#FF6384' },
  { Icon: SiBootstrap,  name: 'Bootstrap',  color: '#7952B3' },
  { Icon: SiVite,       name: 'Vite',       color: '#646CFF' },
  { Icon: SiReact,      name: 'React',      color: '#61DAFB' },
  { Icon: SiLaravel,    name: 'Laravel',    color: '#FF2D20' },
];

function MarqueeRow({ items, reverse = false, speed = 32 }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <div
        className={`flex gap-4 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map(({ Icon, name, color }, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 cursor-default whitespace-nowrap group"
            style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 4px 20px ${color}30`; e.currentTarget.style.borderColor = `${color}40`; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; }}
          >
            <Icon size={20} style={{ color }} />
            <span className="text-sm font-semibold" style={{ color: '#3f3f46' }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const { t } = useTranslation();
  return (
    <section id="techstack" className="w-full section-pad relative overflow-hidden">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #F4F4F5, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, #F4F4F5, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px]" style={{ background: '#2563eb' }} />
          <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: '#2563eb' }}>
            {t('techstack.label')}
          </span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-14">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4" style={{ color: '#111111' }}>
            {t('techstack.title1')}<span className="text-gradient">{t('techstack.title_gradient')}</span>
          </h2>
          <p className="text-base" style={{ color: '#71717a' }}>{t('techstack.subtitle')}</p>
        </motion.div>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={row1} speed={38} />
        <MarqueeRow items={row2} reverse speed={30} />
      </div>
    </section>
  );
}
