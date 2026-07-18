import React, { useState } from 'react';
import { portfolioConfig } from '../portfolioConfig';
import * as Icons from 'lucide-react';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  // Helper to dynamically render Lucide Icons by name
  const renderSkillIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent size={18} style={{ color: 'var(--neon-cyan)', filter: 'drop-shadow(0 0 4px var(--neon-cyan-glow))' }} />;
    }
    return <Icons.Code size={18} />;
  };

  return (
    <section id="skills">
      <h2 className="section-title">
        <span className="text-cyan">//</span> SKILL_MATRIX_TELEMETRY
      </h2>

      <div className="skills-grid">
        {/* Category Selector Tabs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {portfolioConfig.skills.map((category, idx) => (
            <div
              key={category.title}
              onClick={() => setSelectedCategory(idx)}
              style={{
                padding: '1.25rem',
                cursor: 'pointer',
                background: selectedCategory === idx ? 'rgba(6, 182, 212, 0.08)' : 'rgba(11, 21, 40, 0.25)',
                border: selectedCategory === idx ? '1px solid var(--neon-cyan)' : '1px solid var(--border-glass)',
                borderRadius: '6px',
                transition: 'all var(--transition-normal)',
                position: 'relative',
                boxShadow: selectedCategory === idx ? '0 0 15px rgba(6, 182, 212, 0.1)' : 'none'
              }}
            >
              {selectedCategory === idx && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '15%',
                  height: '70%',
                  width: '3px',
                  backgroundColor: 'var(--neon-cyan)',
                  boxShadow: '0 0 8px var(--neon-cyan)'
                }} />
              )}
              <h3 style={{
                fontFamily: 'var(--font-hud)',
                fontSize: '0.85rem',
                letterSpacing: '1px',
                color: selectedCategory === idx ? 'var(--neon-cyan)' : 'var(--text-primary)',
                textTransform: 'uppercase',
              }}>
                {category.title}
              </h3>
              <p style={{
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                marginTop: '0.25rem'
              }}>
                [0{idx + 1} // {category.skills.length} MODULES]
              </p>
            </div>
          ))}
        </div>

        {/* Selected Category Skill Telemetry Dashboard */}
        <div className="cyber-panel corner-brackets" style={{
          minHeight: '320px',
          background: 'rgba(11, 21, 40, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          {/* Header specs */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--text-muted)',
            borderBottom: '1px solid rgba(6, 182, 212, 0.1)',
            paddingBottom: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <div>SPECS // MODULE_MAP_LOADED: 0x{selectedCategory + 1}F</div>
            <div className="text-cyan">// QUANTUM_COMPILER_READY</div>
          </div>

          {/* Grid of Skill Gauges */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            flexGrow: 1
          }}>
            {portfolioConfig.skills[selectedCategory].skills.map((skill) => (
              <div 
                key={skill.name} 
                className="skill-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '1rem',
                  border: '1px solid rgba(6, 182, 212, 0.05)',
                  borderRadius: '6px',
                  background: 'rgba(6, 182, 212, 0.02)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {/* Custom SVG Radial Gauge */}
                <div style={{ position: 'relative', width: '80px', height: '80px', marginBottom: '0.75rem' }}>
                  <svg width="80" height="80" viewBox="0 0 80 80" style={{ transform: 'rotate(-90deg)' }}>
                    {/* Background Circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      fill="none"
                      stroke="rgba(6, 182, 212, 0.08)"
                      strokeWidth="4"
                    />
                    {/* Animated Fill Circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      fill="none"
                      stroke="var(--neon-cyan)"
                      strokeWidth="4"
                      strokeDasharray={`${2 * Math.PI * 32}`}
                      strokeDashoffset={`${2 * Math.PI * 32 * (1 - skill.level / 100)}`}
                      style={{
                        strokeLinecap: 'round',
                        filter: 'drop-shadow(0 0 4px var(--neon-cyan-glow))',
                        transition: 'stroke-dashoffset 1s ease-out'
                      }}
                    />
                  </svg>
                  {/* Floating Center Icon */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {renderSkillIcon(skill.icon)}
                  </div>
                </div>

                <h4 style={{
                  fontFamily: 'var(--font-hud)',
                  fontSize: '0.8rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '0.5px',
                  textAlign: 'center',
                  marginBottom: '0.25rem'
                }}>
                  {skill.name}
                </h4>

                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--neon-purple)',
                  fontWeight: 'bold'
                }}>
                  {skill.level}% EFFICIENCY
                </span>
              </div>
            ))}
          </div>

          {/* Footer telemetry */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--text-muted)',
            borderTop: '1px solid rgba(6, 182, 212, 0.1)',
            paddingTop: '0.75rem',
            marginTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <div>TELEMETRY COMPILATION V2.6</div>
            <div>STABLE_SYS</div>
          </div>
        </div>
      </div>

      <style>{`
        .skill-card:hover {
          border-color: var(--neon-cyan) !important;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.1);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
