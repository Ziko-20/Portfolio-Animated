import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('projects.items.p1_title'),
      category: t('projects.categories.web'),
      description: t('projects.items.p1_desc'),
      image: "/project1.png",
      tags: ["Laravel 11", "Livewire", "MySQL", "React"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: t('projects.items.p2_title'),
      category: t('projects.categories.web'),
      description: t('projects.items.p2_desc'),
      image: "/project2.png",
      tags: ["React", "JavaScript", "localStorage", "Tailwind CSS"],
      liveLink: "https://to-do-react-xi-smoky.vercel.app/",
      githubLink: "https://github.com/Ziko-20/To-do-React.git"
    }
  ];

  return (
    <section id="projects" className="w-full py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">{t('projects.title1')}<span className="text-gradient">{t('projects.title_gradient')}</span></h2>
            <p className="text-slate-400 text-lg max-w-xl">{t('projects.subtitle')}</p>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="#"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group"
          >
            {t('projects.viewAll')}
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col glass-card h-full overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)]"
            >
              <div className={`aspect-video w-full relative overflow-hidden ${project.image.includes('/') ? 'bg-slate-900' : project.image}`}>
                {project.image.includes('/') && (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass border border-white/10 text-xs font-medium text-slate-200">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-slate-300 bg-white/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.liveLink} target={project.liveLink !== "#" ? "_blank" : undefined} rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-slate-300 hover:text-white">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href={project.githubLink} target={project.githubLink !== "#" ? "_blank" : undefined} rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-slate-300 hover:text-white">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
