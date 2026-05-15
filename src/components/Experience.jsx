import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const experienceData = [
  {
    institution: 'Wave Rabat',
    degree: 'Stagiaire Développeur PHP',
    period: 'Fév 2025 – Mar 2025',
    location: 'Rabat, Maroc',
    status: null,
    description: "Stage d'un mois au sein d'une entreprise spécialisée en développement PHP. Contribution à des projets web réels en environnement professionnel, découverte des bonnes pratiques de développement.",
    dotBg: 'linear-gradient(135deg,#059669,#0891b2)',
    glow: 'rgba(5,150,105,0.35)',
    badgeBg: '#ECFDF5', badgeBorder: '#A7F3D0', badgeText: '#059669',
  },
];

const educationData = [
  {
    institution: 'CMC Rabat',
    degree: 'Diplôme Technicien Spécialisé — Développement Digital',
    period: '2025 – 2026',
    location: 'Rabat, Maroc',
    status: 'En cours',
    description: "Formation spécialisée en développement digital : programmation, développement web, technologies modernes. Stage pratique d'un mois prévu en février 2026.",
    dotBg: 'linear-gradient(135deg,#2563eb,#7c3aed)',
    glow: 'rgba(37,99,235,0.35)',
    badgeBg: '#EFF6FF', badgeBorder: '#BFDBFE', badgeText: '#2563eb',
  },
  {
    institution: 'ISTA NTIC Rabat',
    degree: '1ère Année — Développement Digital',
    period: '2024 – 2025',
    location: 'Rabat, Maroc',
    status: null,
    description: "Bases solides en algorithmique, développement web, bases de données et POO à travers des projets académiques et pratiques.",
    dotBg: 'linear-gradient(135deg,#7c3aed,#db2777)',
    glow: 'rgba(124,58,237,0.35)',
    badgeBg: '#F5F3FF', badgeBorder: '#DDD6FE', badgeText: '#7c3aed',
  },
  {
    institution: 'Lycée Abi Bakr',
    degree: 'Baccalauréat Science Physique',
    period: '2024',
    location: 'Maroc',
    status: null,
    description: "Baccalauréat en sciences physiques — formation axée sur les mathématiques, la logique et les sciences expérimentales.",
    dotBg: 'linear-gradient(135deg,#d97706,#dc2626)',
    glow: 'rgba(217,119,6,0.35)',
    badgeBg: '#FFFBEB', badgeBorder: '#FDE68A', badgeText: '#b45309',
  },
];

function TimelineItem({ item, index, Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative flex gap-6 md:gap-10 pl-14 md:pl-20"
    >
      {/* Dot */}
      <div className="absolute left-[14px] md:left-[18px] top-5 z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.4, type: 'spring', stiffness: 300, damping: 20 }}
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: item.dotBg, boxShadow: `0 0 0 3px #fff, 0 0 14px ${item.glow}` }}
        >
          <Icon size={13} className="text-white" />
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        className="flex-1 glass-card p-6 md:p-7"
      >
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full"
            style={{ background: item.badgeBg, border: `1px solid ${item.badgeBorder}`, color: item.badgeText }}>
            <Calendar size={11} />
            {item.period}
          </span>
          {item.status && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', color: '#059669' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {item.status}
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-xs"
            style={{ color: '#a1a1aa' }}>
            <MapPin size={11} />{item.location}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-display font-bold mb-1 leading-tight" style={{ color: '#111111' }}>
          {item.degree}
        </h3>
        <h4 className="text-sm font-semibold mb-4" style={{ color: '#71717a' }}>{item.institution}</h4>
        <p className="text-sm leading-relaxed" style={{ color: '#71717a' }}>{item.description}</p>
      </motion.div>
    </motion.div>
  );
}

function TimelineSection({ items, Icon, lineGradient, inView }) {
  return (
    <div className="relative">
      <div className="absolute left-[27px] md:left-[31px] top-0 bottom-0 w-[1px]"
        style={{ background: 'rgba(0,0,0,0.08)' }} />
      <motion.div
        className="absolute left-[27px] md:left-[31px] top-0 w-[1px] origin-top"
        style={{ background: lineGradient }}
        initial={{ height: 0 }}
        animate={inView ? { height: '100%' } : { height: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />
      <div className="space-y-8">
        {items.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} Icon={Icon} />
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const { t } = useTranslation();
  const expRef = useRef(null);
  const eduRef = useRef(null);
  const expInView = useInView(expRef, { once: true, margin: '-80px' });
  const eduInView = useInView(eduRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="w-full section-pad relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px]" style={{ background: '#2563eb' }} />
          <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: '#2563eb' }}>Journey</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4" style={{ color: '#111111' }}>
            {t('experience.title1')}<span className="text-gradient">{t('experience.title_gradient')}</span>
          </h2>
          <p style={{ color: '#71717a' }}>{t('experience.subtitle')}</p>
        </motion.div>

        {/* ── Expérience Professionnelle ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl" style={{ background: '#ECFDF5', border: '1px solid #A7F3D0' }}>
            <Briefcase size={15} style={{ color: '#059669' }} />
          </div>
          <h3 className="text-lg font-display font-bold" style={{ color: '#111111' }}>Expérience Professionnelle</h3>
        </motion.div>

        <div ref={expRef} className="mb-16">
          <TimelineSection
            items={experienceData}
            Icon={Briefcase}
            lineGradient="linear-gradient(to bottom,#059669,#0891b2)"
            inView={expInView}
          />
        </div>

        {/* ── Parcours Académique ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl" style={{ background: '#EFF6FF', border: '1px solid #BFDBFE' }}>
            <GraduationCap size={15} style={{ color: '#2563eb' }} />
          </div>
          <h3 className="text-lg font-display font-bold" style={{ color: '#111111' }}>Parcours Académique</h3>
        </motion.div>

        <div ref={eduRef}>
          <TimelineSection
            items={educationData}
            Icon={GraduationCap}
            lineGradient="linear-gradient(to bottom,#2563eb,#7c3aed,#d97706)"
            inView={eduInView}
          />
        </div>
      </div>
    </section>
  );
}
