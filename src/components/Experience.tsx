import React, { useState } from 'react';
import { portfolioConfig } from '../portfolioConfig';
import { Briefcase, Calendar, ChevronRight, Terminal as ConsoleIcon } from 'lucide-react';
import { playCyberSound } from './Header';

export const Experience: React.FC = () => {
  const [expandedLog, setExpandedLog] = useState<string | null>('exp-1');

  const toggleLog = (id: string) => {
    playCyberSound('click');
    setExpandedLog(expandedLog === id ? null : id);
  };

  return (
    <section id="experience">
      <h2 className="section-title">
        <span className="text-cyan">//</span> DEPLOYMENT_TIMELINE_LOGS
      </h2>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Timeline Core vertical line */}
        <div style={{
          position: 'absolute',
          left: '9px',
          top: '10px',
          bottom: '10px',
          width: '2px',
          background: 'linear-gradient(180deg, var(--neon-cyan), rgba(168, 85, 247, 0.5), transparent)',
          boxShadow: '0 0 8px var(--neon-cyan-glow)'
        }} />

        {/* Experience nodes */}
        {portfolioConfig.experience.map((exp) => {
          const isExpanded = expandedLog === exp.id;
          return (
            <div key={exp.id} style={{ marginBottom: '2.5rem', position: 'relative' }}>
              {/* Timeline dot */}
              <div 
                style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '6px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  border: `2px solid ${exp.status === 'ACTIVE' ? 'var(--neon-green)' : 'var(--neon-purple)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: exp.status === 'ACTIVE' 
                    ? '0 0 10px var(--neon-green-glow)' 
                    : '0 0 8px var(--neon-purple-glow)',
                  zIndex: 2,
                }}
              >
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: exp.status === 'ACTIVE' ? 'var(--neon-green)' : 'var(--neon-purple)',
                }} />
              </div>

              {/* Server Log Card */}
              <div 
                className={`cyber-panel ${exp.status === 'ACTIVE' ? '' : 'cyber-panel-accent'}`}
                style={{
                  cursor: 'pointer',
                  padding: '1.25rem',
                  background: isExpanded ? 'rgba(11, 21, 40, 0.45)' : 'rgba(11, 21, 40, 0.2)',
                  borderColor: isExpanded ? (exp.status === 'ACTIVE' ? 'var(--neon-cyan)' : 'var(--neon-purple)') : 'var(--border-glass)',
                  transition: 'all var(--transition-normal)'
                }}
                onClick={() => toggleLog(exp.id)}
              >
                {/* Header info */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-hud)',
                      fontSize: '1.05rem',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      {exp.role}
                      <span style={{
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.15rem 0.4rem',
                        background: exp.status === 'ACTIVE' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(168, 85, 247, 0.1)',
                        border: `1px solid ${exp.status === 'ACTIVE' ? 'var(--neon-green)' : 'var(--neon-purple)'}`,
                        borderRadius: '4px',
                        color: exp.status === 'ACTIVE' ? 'var(--neon-green)' : 'var(--neon-purple)',
                        fontWeight: 'bold',
                        letterSpacing: '0.5px'
                      }}>
                        STATUS_{exp.status}
                      </span>
                    </h3>
                    
                    <h4 style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      marginTop: '0.15rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}>
                      <Briefcase size={12} className="text-cyan" />
                      {exp.company}
                    </h4>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)'
                  }}>
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                {/* Short intro */}
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  margin: '0.75rem 0'
                }}>
                  {exp.summary}
                </p>

                {/* Collapsible server data stream */}
                <div style={{
                  maxHeight: isExpanded ? '400px' : '0',
                  opacity: isExpanded ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  paddingTop: isExpanded ? '0.75rem' : '0',
                  borderTop: isExpanded ? '1px solid rgba(6, 182, 212, 0.1)' : 'none',
                  marginTop: isExpanded ? '0.75rem' : '0'
                }}>
                  {/* Skill nodes */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                    {exp.tech.map((tech) => (
                      <span key={tech} style={{
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.5rem',
                        background: 'rgba(6, 182, 212, 0.05)',
                        border: '1px solid rgba(6, 182, 212, 0.15)',
                        borderRadius: '3px',
                        color: 'var(--neon-cyan)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Accomplishment Logs */}
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    <div style={{ color: 'var(--neon-purple)', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <ConsoleIcon size={10} />
                      SERVICE_LOG_STREAM:
                    </div>
                    {exp.achievements.map((ach, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        gap: '0.5rem',
                        lineHeight: 1.4,
                        paddingLeft: '0.5rem'
                      }}>
                        <span className="text-cyan">{`[LOG_0${idx + 1}]`}</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Toggle Icon */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '0.5rem',
                  color: 'var(--text-muted)'
                }}>
                  <ChevronRight size={16} style={{
                    transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform var(--transition-fast)'
                  }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
