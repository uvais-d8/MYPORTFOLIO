import React, { useState } from 'react';
import { portfolioConfig, type Project } from '../portfolioConfig';
import { ExternalLink, Award, FileCode, CheckCircle, Activity, X } from 'lucide-react';
import { playCyberSound } from './Header';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    playCyberSound('click');
    setSelectedProject(project);
  };

  const closeProject = () => {
    playCyberSound('click');
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h2 className="section-title">
        <span className="text-cyan">//</span> DEPLOYED_PROJECTS_DATABASE
      </h2>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {portfolioConfig.projects.map((project) => (
          <div
            key={project.id}
            className="cyber-panel corner-brackets project-card"
            onClick={() => openProject(project)}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '280px',
              background: 'rgba(11, 21, 40, 0.25)',
              transition: 'all var(--transition-normal)'
            }}
          >
            {/* Header */}
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--neon-purple)',
                marginBottom: '0.5rem'
              }}>
                <div>[ID: {project.id}]</div>
                <div>{project.category}</div>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-hud)',
                fontSize: '1.2rem',
                color: 'var(--text-primary)',
                letterSpacing: '0.5px',
                marginBottom: '0.35rem'
              }}>
                {project.title}
              </h3>

              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--neon-cyan)',
                marginBottom: '0.75rem'
              }}>
                {project.tagline}
              </p>

              <p style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.4,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical'
              } as any}>
                {project.description}
              </p>
            </div>

            {/* Footer metrics / tech */}
            <div style={{
              borderTop: '1px solid rgba(6, 182, 212, 0.1)',
              paddingTop: '0.75rem',
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              {/* Metrics summary */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {project.metrics?.slice(0, 2).map((m, i) => (
                  <div key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{m.label}: </span>
                    <span className="text-cyan">{m.value}</span>
                  </div>
                ))}
              </div>

              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--neon-purple)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem'
              }}>
                QUERY_DATA
                <ExternalLink size={10} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal overlay */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(3, 7, 18, 0.85)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div 
            className="cyber-panel corner-brackets"
            style={{
              width: '100%',
              maxWidth: '680px',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: 'rgba(11, 21, 40, 0.9)',
              borderColor: 'var(--neon-cyan)',
              boxShadow: '0 0 35px rgba(6, 182, 212, 0.25)',
              padding: '2rem',
              position: 'relative'
            }}
          >
            {/* Close button */}
            <button
              onClick={closeProject}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={() => playCyberSound('hover')}
              className="close-modal-btn"
            >
              <X size={20} />
            </button>

            {/* Modal content */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--neon-purple)',
              marginBottom: '0.5rem',
              borderBottom: '1px solid rgba(6, 182, 212, 0.1)',
              paddingBottom: '0.5rem'
            }}>
              <div>PORTFOLIO_LINK // DECRYPTED: 0x{selectedProject.id}</div>
              <div>{selectedProject.category}</div>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-hud)',
              fontSize: '1.75rem',
              color: 'var(--neon-cyan)',
              marginBottom: '0.5rem',
              textShadow: '0 0 10px var(--neon-cyan-glow)'
            }}>
              {selectedProject.title}
            </h3>

            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              {selectedProject.tagline}
            </p>

            {/* Main description */}
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              marginBottom: '1.5rem'
            }}>
              {selectedProject.description}
            </p>

            {/* Spec grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              {/* Telemetry info */}
              <div style={{
                background: 'rgba(6, 182, 212, 0.03)',
                border: '1px solid rgba(6, 182, 212, 0.1)',
                borderRadius: '6px',
                padding: '1rem'
              }}>
                <h4 style={{
                  fontFamily: 'var(--font-hud)',
                  fontSize: '0.75rem',
                  color: 'var(--neon-purple)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  <Activity size={12} />
                  PROJECT_TELEMETRY
                </h4>
                {selectedProject.metrics?.map((m, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{m.label}:</span>
                    <span className="text-cyan">{m.value}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>ROLE:</span>
                  <span style={{ color: 'var(--text-primary)', textAlign: 'right' }}>{selectedProject.role}</span>
                </div>
              </div>

              {/* Technologies */}
              <div style={{
                background: 'rgba(168, 85, 247, 0.03)',
                border: '1px solid rgba(168, 85, 247, 0.1)',
                borderRadius: '6px',
                padding: '1rem'
              }}>
                <h4 style={{
                  fontFamily: 'var(--font-hud)',
                  fontSize: '0.75rem',
                  color: 'var(--neon-cyan)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  <FileCode size={12} />
                  MODULE_COMPILATION
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {selectedProject.tech.map((t) => (
                    <span key={t} style={{
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.15rem 0.4rem',
                      background: 'rgba(3, 7, 18, 0.4)',
                      border: '1px solid var(--border-glass)',
                      borderRadius: '3px',
                      color: 'var(--text-secondary)'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements list */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{
                fontFamily: 'var(--font-hud)',
                fontSize: '0.8rem',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                <Award size={14} className="text-purple" />
                SYSTEM_MILESTONES
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedProject.achievements.map((ach, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    gap: '0.5rem',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.4
                  }}>
                    <CheckCircle size={12} style={{ color: 'var(--neon-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button onClick={closeProject} className="btn-cyber btn-cyber-purple">
                CLOSE_DB
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .project-card:hover {
          border-color: var(--neon-cyan) !important;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.15);
          transform: translateY(-4px);
        }
        .close-modal-btn:hover {
          color: var(--neon-pink) !important;
        }
      `}</style>
    </section>
  );
};
