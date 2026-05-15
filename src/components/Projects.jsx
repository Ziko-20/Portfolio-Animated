import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function TiltCard({ children, className }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1000, rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useTranslation();


  const allProjects = [
    {
      id: 1, title: t('projects.items.p1_title'), category: 'web',
      categoryLabel: t('projects.categories.web'),
      description: t('projects.items.p1_desc'), image: '/project1.png',
      tags: ['Laravel 11', 'Livewire', 'MySQL', 'Tailwind'],
      liveLink: 'https://github.com/Ziko-20/GestionClients-Abonnements',
      githubLink: 'https://github.com/Ziko-20/GestionClients-Abonnements',
      accentColor: '#FF2D20',
    },
    {
      id: 2, title: t('projects.items.p2_title'), category: 'web',
      categoryLabel: t('projects.categories.web'),
      description: t('projects.items.p2_desc'), image: '/project2.png',
      tags: ['React', 'JavaScript', 'localStorage', 'Tailwind'],
      liveLink: 'https://to-do-react-xi-smoky.vercel.app/',
      githubLink: 'https://github.com/Ziko-20/To-do-React.git',
      accentColor: '#61DAFB',
    },
    {
      id: 3, title: t('projects.items.p3_title'), category: 'fullstack',
      categoryLabel: t('projects.categories.fullstack'),
      description: t('projects.items.p3_desc'), image: '/project3.png',
      tags: ['React', 'Laravel', 'REST API', 'MySQL'],
      liveLink: 'https://github.com/Ziko-20/TechStore',
      githubLink: 'https://github.com/Ziko-20/TechStore',
      accentColor: '#7c3aed',
    },
  ];


  return (
    <section id="projects" className="w-full section-pad relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px]" style={{ background: '#2563eb' }} />
          <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: '#2563eb' }}>Projects</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-display font-black leading-tight" style={{ color: '#111111' }}>
              {t('projects.title1')}<span className="text-gradient">{t('projects.title_gradient')}</span>
            </h2>
            <p className="text-base mt-4 max-w-lg" style={{ color: '#71717a' }}>{t('projects.subtitle')}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, i) => (
            <motion.div key={project.id} layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}>
              <TiltCard className="h-full">
                <div className="h-full glass-card overflow-hidden flex flex-col group transition-all duration-500"
                  style={{ '--accent': project.accentColor }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 16px 48px ${project.accentColor}22`; e.currentTarget.style.borderColor = `${project.accentColor}25`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = ''; }}>
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden" style={{ background: '#F4F4F5' }}>
                    {project.image && (
                      <img src={project.image} alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    )}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.7), transparent)' }} />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', color: '#52525b', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-bold mb-3 leading-tight transition-colors duration-300" style={{ color: '#111111' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: '#71717a' }}>{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium"
                          style={{ background: '#F4F4F5', color: '#71717a', border: '1px solid rgba(0,0,0,0.06)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <a href={project.liveLink} target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-semibold transition-colors"
                        style={{ color: '#a1a1aa' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}>
                        <ExternalLink size={13} /> Live / Demo
                      </a>
                      <span style={{ color: '#e4e4e7' }}>·</span>
                      <a href={project.githubLink} target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-semibold transition-colors"
                        style={{ color: '#a1a1aa' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#18181b'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}>
                        <Github size={13} /> Source
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-14">
          <a href="https://github.com/Ziko-20" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 group"
            style={{ background: '#fff', border: '1.5px solid rgba(0,0,0,0.1)', color: '#52525b', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#BFDBFE'; e.currentTarget.style.color = '#2563eb'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'; e.currentTarget.style.color = '#52525b'; }}>
            <Github size={18} />
            {t('projects.viewAll')}
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
