import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../portfolioConfig';
import { BookOpen, MessageSquare, Award, Terminal } from 'lucide-react';

export const ExtrasSection: React.FC = () => {
  // Generate random data for the simulated GitHub graph
  const gridRows = 7;
  const gridCols = 40;
  const contributionGrid: number[][] = [];

  for (let r = 0; r < gridRows; r++) {
    const row: number[] = [];
    for (let c = 0; c < gridCols; c++) {
      // Create random weights (0: none, 1: low, 2: mid, 3: high)
      const rand = Math.random();
      if (rand < 0.5) row.push(0);
      else if (rand < 0.75) row.push(1);
      else if (rand < 0.93) row.push(2);
      else row.push(3);
    }
    contributionGrid.push(row);
  }

  const getCellColor = (weight: number) => {
    switch (weight) {
      case 1: return 'rgba(6, 182, 212, 0.2)'; // light cyan
      case 2: return 'rgba(168, 85, 247, 0.5)'; // medium purple
      case 3: return 'rgba(236, 72, 153, 0.9)'; // glowing pink
      default: return 'rgba(17, 24, 39, 0.4)'; // dark card bg
    }
  };

  const statVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring' as const, stiffness: 120 } }
  };

  return (
    <section id="extras" style={{ padding: '1rem 0' }}>
      {/* 1. Metrics & GitHub telemetry dashboard */}
      <div className="extras-grid">
        {/* Glowing Simulated GitHub Contribution Grid */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="cyber-panel corner-brackets"
          style={{
            background: 'rgba(11, 21, 40, 0.25)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <h3 style={{
              fontFamily: 'var(--font-hud)',
              fontSize: '0.85rem',
              color: 'var(--neon-cyan)',
              marginBottom: '1rem',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Terminal size={14} />
              SYSTEM_COMMITS_MATRIX
            </h3>
            
            {/* SVG GitHub grid representation */}
            <div style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
              <svg width="100%" height="95" viewBox="0 0 540 95" style={{ minWidth: '480px' }}>
                {contributionGrid.map((row, rIdx) => 
                  row.map((val, cIdx) => (
                    <rect
                      key={`${rIdx}-${cIdx}`}
                      x={cIdx * 13 + 5}
                      y={rIdx * 13 + 5}
                      width="10.5"
                      height="10.5"
                      rx="2"
                      fill={getCellColor(val)}
                      style={{
                        transition: 'fill 0.3s ease',
                        filter: val === 3 ? 'drop-shadow(0 0 3px rgba(236, 72, 153, 0.6))' : 'none'
                      }}
                    />
                  ))
                )}
              </svg>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(6, 182, 212, 0.1)',
            paddingTop: '0.75rem',
            marginTop: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--text-muted)'
          }}>
            <div>TOTAL COMMITS: 1,482 // ACTIVE</div>
            <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
              <span>LESS</span>
              <span style={{ width: '8px', height: '8px', background: 'rgba(17, 24, 39, 0.4)', borderRadius: '1px' }}></span>
              <span style={{ width: '8px', height: '8px', background: 'rgba(6, 182, 212, 0.2)', borderRadius: '1px' }}></span>
              <span style={{ width: '8px', height: '8px', background: 'rgba(168, 85, 247, 0.5)', borderRadius: '1px' }}></span>
              <span style={{ width: '8px', height: '8px', background: 'rgba(236, 72, 153, 0.9)', borderRadius: '1px' }}></span>
              <span>MORE</span>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Statistics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem'
        }}>
          {portfolioConfig.profile.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4, borderColor: 'var(--neon-purple)' }}
              className="cyber-panel cyber-panel-accent"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.25rem',
                textAlign: 'center',
                background: 'rgba(17, 24, 39, 0.3)',
                minHeight: '110px',
                transition: 'border-color var(--transition-fast)'
              }}
            >
              <span style={{
                fontFamily: 'var(--font-hud)',
                fontSize: '2rem',
                fontWeight: 900,
                color: idx % 2 === 0 ? 'var(--neon-cyan)' : 'var(--neon-purple)',
                textShadow: idx % 2 === 0 ? '0 0 10px var(--neon-cyan-glow)' : '0 0 10px var(--neon-purple-glow)'
              }}>
                {stat.value}
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                marginTop: '0.25rem',
                letterSpacing: '0.5px'
              }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. Currently Learning grid */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 className="section-title">
          <span className="text-cyan">//</span> CURRENTLY_LEARNING_PIPELINE
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.65rem'
        }}>
          {portfolioConfig.learning.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, borderColor: 'var(--neon-cyan)' }}
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                padding: '0.5rem 1rem',
                background: 'rgba(6, 182, 212, 0.05)',
                border: '1px solid rgba(6, 182, 212, 0.15)',
                borderRadius: '4px',
                color: 'var(--neon-cyan)',
                cursor: 'default',
                transition: 'border-color var(--transition-fast)'
              }}
            >
              {`> ${item}`}
            </motion.span>
          ))}
        </div>
      </div>

      {/* 3. Core placeholders: Certs, Blog, Testimonials */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {/* Certificate telemetry */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cyber-panel corner-brackets"
          style={{ background: 'rgba(11, 21, 40, 0.15)' }}
        >
          <h4 style={{
            fontFamily: 'var(--font-hud)',
            fontSize: '0.85rem',
            color: 'var(--neon-purple)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Award size={14} />
            CERTIFICATES_VAULT
          </h4>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            padding: '1.5rem 0',
            textAlign: 'center',
            border: '1px dashed rgba(168, 85, 247, 0.2)',
            borderRadius: '4px',
            background: 'rgba(3, 7, 18, 0.4)'
          }}>
            [ENCRYPTED_FILES_EMPTY]<br/>
            // UPLOADING CREDENTIALS
          </div>
        </motion.div>

        {/* Blog logs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cyber-panel corner-brackets"
          style={{ background: 'rgba(11, 21, 40, 0.15)' }}
        >
          <h4 style={{
            fontFamily: 'var(--font-hud)',
            fontSize: '0.85rem',
            color: 'var(--neon-cyan)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <BookOpen size={14} />
            SYSTEM_LOG_BLOGS
          </h4>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            padding: '1.5rem 0',
            textAlign: 'center',
            border: '1px dashed rgba(6, 182, 212, 0.2)',
            borderRadius: '4px',
            background: 'rgba(3, 7, 18, 0.4)'
          }}>
            [TRANSMISSIONS_PENDING]<br/>
            // ARCHITECTING ARTICLES
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cyber-panel corner-brackets"
          style={{ background: 'rgba(11, 21, 40, 0.15)' }}
        >
          <h4 style={{
            fontFamily: 'var(--font-hud)',
            fontSize: '0.85rem',
            color: 'var(--neon-purple)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <MessageSquare size={14} />
            OPERATIVE_FEEDBACK
          </h4>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            padding: '1.5rem 0',
            textAlign: 'center',
            border: '1px dashed rgba(168, 85, 247, 0.2)',
            borderRadius: '4px',
            background: 'rgba(3, 7, 18, 0.4)'
          }}>
            [COMMUNICATION_LINK_EMPTY]<br/>
            // AWAITING INCOMING TELEMETRY
          </div>
        </motion.div>
      </div>
    </section>
  );
};
