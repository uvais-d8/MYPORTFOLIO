import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

export const EducationSection: React.FC = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100 }
    }
  };

  return (
    <section id="education" style={{ padding: '2rem 0' }}>
      <h2 className="section-title">
        <span className="text-cyan">//</span> ACADEMIC_CREDENTIALS
      </h2>

      <motion.div 
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {portfolioConfig.education.map((edu) => (
          <motion.div
            key={edu.id}
            variants={cardVariants}
            whileHover={{ y: -5, borderColor: 'var(--neon-cyan)' }}
            className="cyber-panel corner-brackets"
            style={{
              background: 'rgba(17, 24, 39, 0.3)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '160px',
              transition: 'border-color var(--transition-fast)'
            }}
          >
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--neon-purple)',
                marginBottom: '0.5rem'
              }}>
                <div>[SEC_CRED: 0x{edu.id}]</div>
                <div style={{
                  color: edu.status === 'COMPLETED' ? 'var(--neon-green)' : 'var(--neon-cyan)',
                  fontWeight: 'bold'
                }}>
                  {edu.status}
                </div>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-hud)',
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.35rem'
              }}>
                <GraduationCap size={16} className="text-cyan" />
                {edu.degree}
              </h3>

              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)'
              }}>
                {edu.institution}
              </p>
            </div>

            <div style={{
              borderTop: '1px solid rgba(6, 182, 212, 0.1)',
              paddingTop: '0.5rem',
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--text-muted)'
            }}>
              <div>VERIFICATION: SIGNED</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: 'var(--neon-green)' }}>
                <CheckCircle size={10} />
                SECURE
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
