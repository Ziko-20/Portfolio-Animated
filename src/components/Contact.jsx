import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

const contactCards = [
  { icon: Mail,     label: 'Email',    value: 'lemchaourizakaria1@gmail.com', href: 'mailto:lemchaourizakaria1@gmail.com', color: '#2563eb' },
  { icon: MapPin,   label: 'Location', value: 'Rabat, Morocco 🇲🇦',             href: null,                                    color: '#059669' },
  { icon: Github,   label: 'GitHub',   value: 'github.com/Ziko-20',             href: 'https://github.com/Ziko-20',            color: '#18181b' },
  { icon: Linkedin, label: 'LinkedIn', value: 'zakaria-lemchaouri',             href: 'https://linkedin.com/in/zakaria-lemchaouri', color: '#0077B5' },
];

function FloatingLabel({ id, label, type = 'text', as = 'input', rows, value, onChange, required }) {
  const [focused, setFocused] = useState(false);
  const Tag = as;
  const active = focused || value.length > 0;

  return (
    <div className="relative">
      <Tag id={id} name={id} type={type} rows={rows} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        required={required} placeholder=" "
        className="peer w-full rounded-xl px-4 pt-6 pb-3 text-sm outline-none transition-all duration-200 resize-none font-sans"
        style={{
          background: '#fff',
          border: `1.5px solid ${focused ? '#2563eb' : 'rgba(0,0,0,0.1)'}`,
          color: '#18181b',
          boxShadow: focused ? '0 0 0 3px rgba(37,99,235,0.1)' : 'none',
        }}
      />
      <label htmlFor={id}
        className="absolute left-4 pointer-events-none transition-all duration-200"
        style={{
          top: active ? '8px' : '16px',
          fontSize: active ? '11px' : '14px',
          color: active ? '#2563eb' : '#a1a1aa',
        }}>
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      window.location.href = `mailto:lemchaourizakaria1@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name}\n\n${form.message}`)}`;
      return;
    }
    setStatus('loading');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="w-full section-pad relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px]" style={{ background: '#2563eb' }} />
          <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: '#2563eb' }}>Contact</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-4 leading-tight" style={{ color: '#111111' }}>
            {t('contact.title1')}<span className="text-gradient">{t('contact.title_gradient')}</span>{t('contact.title2')}
          </h2>
          <p className="text-base max-w-xl leading-relaxed" style={{ color: '#71717a' }}>{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-3">
            <div className="glass-card p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div key="success"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: '#ECFDF5', border: '1px solid #A7F3D0' }}>
                      <CheckCircle size={32} style={{ color: '#059669' }} />
                    </div>
                    <h3 className="text-xl font-display font-bold" style={{ color: '#111111' }}>Message envoyé !</h3>
                    <p className="text-sm" style={{ color: '#71717a' }}>Je vous réponds dans les plus brefs délais.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" ref={formRef} onSubmit={handleSubmit}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FloatingLabel id="name" label="Votre nom" value={form.name} onChange={handleChange('name')} required />
                      <FloatingLabel id="email" label="Email" type="email" value={form.email} onChange={handleChange('email')} required />
                    </div>
                    <FloatingLabel id="subject" label="Sujet" value={form.subject} onChange={handleChange('subject')} required />
                    <FloatingLabel id="message" label="Message" as="textarea" rows={6} value={form.message} onChange={handleChange('message')} required />

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl"
                        style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#dc2626' }}>
                        <AlertCircle size={16} />
                        Erreur. Veuillez réessayer ou écrire directement par email.
                      </div>
                    )}

                    <motion.button type="submit" disabled={status === 'loading'}
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-white text-sm disabled:opacity-60"
                      style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 4px 20px rgba(37,99,235,0.25)' }}>
                      {status === 'loading'
                        ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        : <><Send size={16} /> Envoyer le message</>}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4">
            <p className="text-sm mb-2" style={{ color: '#71717a' }}>
              Je suis ouvert aux nouvelles opportunités et aux projets freelance. N'hésitez pas à me contacter !
            </p>
            {contactCards.map(({ icon: Icon, label, value, href, color }) => (
              <motion.div key={label} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    className="flex items-center gap-4 p-4 glass-card group transition-all duration-300"
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = `${color}30`}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
                    <div className="p-2.5 rounded-xl" style={{ background: `${color}10` }}>
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <div className="text-xs font-mono" style={{ color: '#a1a1aa' }}>{label}</div>
                      <div className="text-sm font-semibold" style={{ color: '#18181b' }}>{value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 glass-card">
                    <div className="p-2.5 rounded-xl" style={{ background: `${color}10` }}>
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <div className="text-xs font-mono" style={{ color: '#a1a1aa' }}>{label}</div>
                      <div className="text-sm font-semibold" style={{ color: '#18181b' }}>{value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
