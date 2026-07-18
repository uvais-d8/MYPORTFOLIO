import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Zap } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';
import me2 from '../assets/me2.jpeg';

export const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100 }
    }
  };

  const coreFocus = [
    { title: "Backend Specialist", desc: "Designing scalable microservices, REST APIs, and event-driven architectures.", icon: Database },
    { title: "Database Architect", desc: "Proficient in MongoDB indexes, aggregations, query telemetry, and SQL normalization.", icon: Shield },
    { title: "Clean Code Devotee", desc: "Prioritizing maintainable codebases, solid design patterns, and unit tests.", icon: Code },
    { title: "Passionate Learner", desc: "Constantly diving into System Design, caching strategies, and modern cloud orchestrations.", icon: Zap }
  ];

  return (
    <section id="about" style={{ padding: '4rem 0' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          <span className="text-cyan">//</span> EXECUTIVE_BIO
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          '@media (min-width: 992px)': {
            gridTemplateColumns: '1.2fr 1fr',
          }
        } as any}>
          {/* Detailed Narrative */}
          <motion.div variants={itemVariants} className="cyber-panel corner-brackets" style={{
            background: 'rgba(17, 24, 39, 0.4)',
            padding: '2rem'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-hud)',
              fontSize: '1.2rem',
              color: 'var(--neon-cyan)',
              marginBottom: '1rem',
              letterSpacing: '1px'
            }}>
              OVERVIEW_ANALYSIS
            </h3>
            
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '1.25rem'
            }}>
              {portfolioConfig.profile.bio}
            </p>
            
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '1.5rem'
            }}>
              Currently working in an enterprise product company managing complex driver and trip databases, I specialize in resolving production performance issues, refining API delivery paths, and building modular systems.
            </p>

            {/* Philosophy quote */}
            <div style={{
              borderLeft: '3px solid var(--neon-purple)',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              marginTop: '2rem',
              background: 'rgba(168, 85, 247, 0.05)',
              padding: '1rem'
            }}>
              "{portfolioConfig.philosophy}"
            </div>
          </motion.div>

          {/* Right column: dossier photo + pillars grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Subject Biometric Dossier */}
            <motion.div
              variants={itemVariants}
              className="cyber-panel corner-brackets"
              style={{
                background: 'rgba(17, 24, 39, 0.35)',
                borderColor: 'var(--border-glass-accent)',
                padding: '1.25rem',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}
            >
              {/* Profile Crop Frame */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '4px',
                border: '1px solid var(--neon-purple)',
                boxShadow: '0 0 10px var(--neon-purple-glow)',
                overflow: 'hidden',
                position: 'relative',
                flexShrink: 0
              }}>
                <img 
                  src={me2} 
                  alt="Muhammed Uvais Profile" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(rgba(168, 85, 247, 0.05) 0%, transparent 100%)',
                  pointerEvents: 'none'
                }} />
              </div>

              {/* dossier metadata */}
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-secondary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                flexGrow: 1
              }}>
                <div style={{ color: 'var(--neon-purple)', fontFamily: 'var(--font-hud)', fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                  // SUBJECT_BIOMETRIC_DATA
                </div>
                <div>NAME: Muhammed Uvais</div>
                <div>CLASS: Backend Developer</div>
                <div>COORDS: Malappuram, IN</div>
                <div>STATION_STATUS: NOMINAL_ONLINE</div>
              </div>
            </motion.div>

            {/* Pillars grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {coreFocus.map((focus, idx) => {
                const IconComp = focus.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -5, borderColor: 'var(--neon-purple)' }}
                    className="cyber-panel cyber-panel-accent"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '1.25rem',
                      background: 'rgba(17, 24, 39, 0.25)',
                      transition: 'border-color var(--transition-fast)'
                    }}
                  >
                    <div>
                      <div style={{
                        backgroundColor: 'rgba(168, 85, 247, 0.1)',
                        border: '1px solid rgba(168, 85, 247, 0.2)',
                        borderRadius: '4px',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.75rem',
                        color: 'var(--neon-purple)'
                      }}>
                        <IconComp size={16} />
                      </div>
                      <h4 style={{
                        fontFamily: 'var(--font-hud)',
                        fontSize: '0.8rem',
                        color: 'var(--text-primary)',
                        letterSpacing: '0.5px',
                        marginBottom: '0.35rem',
                        textTransform: 'uppercase'
                      }}>
                        {focus.title}
                      </h4>
                    </div>
                    <p style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.4
                    }}>
                      {focus.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
