import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioConfig } from '../portfolioConfig';
import { playCyberSound } from './Header';
import {
  Mail, Linkedin, Github, Instagram, Facebook,
  MessageCircle, Phone, MapPin, Copy, Check,
  ExternalLink, Send, X, Cpu, CheckCircle
} from 'lucide-react';

interface SocialCard {
  name: string;
  displayValue: string;
  description: string;
  icon: React.ComponentType<any>;
  url: string;
  brandColor: string;
  isCopyable?: boolean;
  tooltipText: string;
  floatDelay: number;
}

export const ContactForm: React.FC = () => {
  // Clipboard copy state
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Contact Form Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [transmitting, setTransmitting] = useState(false);
  const [transmissionPhase, setTransmissionPhase] = useState('');
  const [transmissionSuccess, setTransmissionSuccess] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    playCyberSound('success');
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setTransmitting(true);
    playCyberSound('click');

    setTransmissionPhase('INITIALIZING ENCRYPTION PROTOCOLS...');

    setTimeout(() => {
      setTransmissionPhase('COMPILING TRANSMISSION DATA PACKET...');
      playCyberSound('terminal');
    }, 1000);

    setTimeout(() => {
      setTransmissionPhase('ESTABLISHING SECURE CONNECTION...');
      playCyberSound('terminal');
    }, 2000);

    setTimeout(() => {
      setTransmissionPhase('TRANSMITTING TELEMETRY DATA...');
      playCyberSound('terminal');
    }, 3000);

    setTimeout(() => {
      setTransmitting(false);
      setTransmissionSuccess(true);
      playCyberSound('success');
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const closeFormModal = () => {
    playCyberSound('click');
    setIsModalOpen(false);
    setTransmissionSuccess(false);
  };

  const socialCards: SocialCard[] = [
    {
      name: "Email",
      displayValue: portfolioConfig.contactInfo.email,
      description: "Direct email for business enquiries.",
      icon: Mail,
      url: `mailto:${portfolioConfig.contactInfo.email}`,
      brandColor: "#ea4335",
      isCopyable: true,
      tooltipText: "Click to Copy Address",
      floatDelay: 0
    },
    {
      name: "LinkedIn",
      displayValue: "muhammed-uvais-t-aab0a5320",
      description: "Professional resume & network grid.",
      icon: Linkedin,
      url: `https://${portfolioConfig.contactInfo.linkedin}`,
      brandColor: "#0077b5",
      tooltipText: "Open LinkedIn Profile",
      floatDelay: 0.4
    },
    {
      name: "GitHub",
      displayValue: "@uvais-d8",
      description: "Core codebase logs & repository nodes.",
      icon: Github,
      url: `https://${portfolioConfig.contactInfo.github}`,
      brandColor: "#a855f7",
      tooltipText: "Explore GitHub Repositories",
      floatDelay: 0.2
    },
    {
      name: "WhatsApp",
      displayValue: "Secure Chat",
      description: "Real-time communication handshake.",
      icon: MessageCircle,
      url: `https://wa.me/${portfolioConfig.contactInfo.whatsapp}`,
      brandColor: "#25d366",
      tooltipText: "Launch WhatsApp Telemetry",
      floatDelay: 0.6
    },
    {
      name: "Phone",
      displayValue: portfolioConfig.contactInfo.phone,
      description: "Secure voice transmission line.",
      icon: Phone,
      url: `tel:${portfolioConfig.contactInfo.phone.replace(/\s+/g, '')}`,
      brandColor: "#10b981",
      isCopyable: true,
      tooltipText: "Click to Copy Number",
      floatDelay: 0.8
    },
    {
      name: "Instagram",
      displayValue: "@uvais_d8",
      description: "Creative logs & social snapshots.",
      icon: Instagram,
      url: `https://${portfolioConfig.contactInfo.instagram}`,
      brandColor: "#e1306c",
      tooltipText: "Open Instagram Stream",
      floatDelay: 1.0
    },
    {
      name: "Facebook",
      displayValue: "Muhammed Uvais",
      description: "Personal directory profile.",
      icon: Facebook,
      url: `https://${portfolioConfig.contactInfo.facebook}`,
      brandColor: "#1877f2",
      tooltipText: "Open Facebook Profile",
      floatDelay: 1.4
    },
    {
      name: "Location",
      displayValue: portfolioConfig.contactInfo.location,
      description: "Server hosting station origin.",
      icon: MapPin,
      url: portfolioConfig.contactInfo.mapLink,
      brandColor: "#ef4444",
      tooltipText: "Open Coordinate Map",
      floatDelay: 1.8
    }
  ];

  return (
    <section id="contact" style={{ padding: '2.5rem 0' }}>
      {/* "Let's Build Something Amazing Together" CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{
          fontFamily: 'var(--font-hud)',
          fontSize: '2.2rem',
          fontWeight: 900,
          color: 'var(--text-primary)',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          Let's Build <span style={{
            background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Something Amazing</span> Together
        </h2>
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Have an enterprise logistics problem, microservices project, or availability request? Connect via the channels below.
        </p>
      </motion.div>

      {/* Grid of Futuristic Social Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        marginBottom: '5rem'
      }}>
        {socialCards.map((card) => {
          const IconComponent = card.icon;
          const isCopied = copiedType === card.name.toLowerCase();

          return (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                borderColor: card.brandColor,
                boxShadow: `0 0 20px ${card.brandColor}33`
              }}
              className="cyber-panel corner-brackets social-card-item"
              style={{
                background: 'rgba(17, 24, 39, 0.45)',
                border: '1px solid var(--border-glass)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '210px',
                cursor: 'pointer',
                position: 'relative'
              }}
              onClick={() => {
                if (card.isCopyable) {
                  handleCopy(card.displayValue, card.name.toLowerCase());
                } else if (card.url !== '#') {
                  playCyberSound('click');
                  window.open(card.url, '_blank');
                }
              }}
            >
              {/* Tooltip */}
              <div className="card-tooltip" style={{
                position: 'absolute',
                top: '-2.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(3, 7, 18, 0.9)',
                border: `1px solid ${card.brandColor}`,
                color: '#fff',
                fontSize: '0.65rem',
                fontFamily: 'var(--font-mono)',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                pointerEvents: 'none',
                opacity: 0,
                transition: 'opacity 0.2s ease',
                whiteSpace: 'nowrap',
                zIndex: 10
              }}>
                {isCopied ? "COPIED SUCCESS!" : card.tooltipText}
              </div>

              {/* Card Header & Brand Icon */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div
                  className="social-icon-wrapper"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '6px',
                    border: '1px solid rgba(6, 182, 212, 0.1)',
                    background: 'rgba(3, 7, 18, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <IconComponent size={20} className="social-icon" style={{ color: 'var(--neon-cyan)', transition: 'color 0.3s ease' }} />
                </div>

                {card.isCopyable ? (
                  <div style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} className="copy-action-icon">
                    {isCopied ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                  </div>
                ) : (
                  card.url !== '#' && <ExternalLink size={12} style={{ color: 'var(--text-muted)' }} />
                )}
              </div>

              {/* Card Body */}
              <div style={{ marginTop: '1rem' }}>
                <h4 style={{
                  fontFamily: 'var(--font-hud)',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '0.5px',
                  marginBottom: '0.25rem',
                  textTransform: 'uppercase'
                }}>
                  {card.name}
                </h4>
                <p style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.4,
                  marginBottom: '0.5rem'
                }}>
                  {card.description}
                </p>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--neon-cyan)',
                  wordBreak: 'break-all',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {card.displayValue}
                </div>
              </div>

              {/* CSS hover trigger inline inject */}
              <style>{`
                .social-card-item:hover .card-tooltip {
                  opacity: 1 !important;
                }
                .social-card-item:hover .social-icon-wrapper {
                  border-color: ${card.brandColor}44 !important;
                  background: ${card.brandColor}11 !important;
                }
                .social-card-item:hover .social-icon {
                  color: ${card.brandColor} !important;
                  filter: drop-shadow(0 0 5px ${card.brandColor});
                }
                .social-card-item:hover .copy-action-icon {
                  color: ${card.brandColor} !important;
                }
              `}</style>
            </motion.div>
          );
        })}
      </div>

      {/* Professional Availability Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="cyber-panel corner-brackets contact-banner-grid"
        style={{
          background: 'rgba(17, 24, 39, 0.65)',
          border: '1px solid var(--border-glass-accent)',
          padding: '2.5rem',
        }}
      >
        <div>
          <div style={{
            fontFamily: 'var(--font-hud)',
            fontSize: '0.75rem',
            color: 'var(--neon-green)',
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            letterSpacing: '1.5px'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--neon-green)',
              borderRadius: '50%',
              display: 'inline-block',
              boxShadow: '0 0 8px var(--neon-green)',
              animation: 'flicker-keyframes 2s infinite'
            }}></span>
            ACTIVE_AVAILABILITY_STATUS: NOMINAL
          </div>

          <h3 style={{
            fontFamily: 'var(--font-hud)',
            fontSize: '1.4rem',
            color: 'var(--text-primary)',
            letterSpacing: '0.5px',
            marginBottom: '1rem'
          }}>
            Available For Technical Partnerships
          </h3>

          <ul className="contact-list-grid">
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--neon-green)' }}>[✓]</span> Full-Time Backend Developer Roles
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--neon-green)' }}>[✓]</span> Freelance Projects
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--neon-green)' }}>[✓]</span> Startup Collaborations
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--neon-green)' }}>[✓]</span> Open Source Contributions
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--neon-green)' }}>[✓]</span> Technical Discussions
            </li>
          </ul>
        </div>

        <div className="contact-button-container">
          <button
            onClick={() => {
              playCyberSound('click');
              setIsModalOpen(true);
            }}
            className="btn-cyber btn-cyber-purple"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              boxShadow: '0 0 15px var(--neon-purple-glow)'
            }}
          >
            LET'S TALK
          </button>
        </div>
      </motion.div>

      {/* Secure Telemetry Contact Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
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
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="cyber-panel corner-brackets"
              style={{
                width: '100%',
                maxWidth: '520px',
                background: 'rgba(17, 24, 39, 0.95)',
                borderColor: 'var(--neon-purple)',
                boxShadow: '0 0 35px rgba(168, 85, 247, 0.25)',
                padding: '2rem',
                position: 'relative'
              }}
            >
              <button
                onClick={closeFormModal}
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
                className="close-modal-btn"
              >
                <X size={20} />
              </button>

              {transmissionSuccess ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '2rem 0',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <CheckCircle size={48} className="text-green" style={{
                    marginBottom: '1rem',
                    filter: 'drop-shadow(0 0 8px var(--neon-green-glow))',
                    animation: 'flicker-keyframes 2s infinite'
                  }} />
                  <h3 style={{
                    fontFamily: 'var(--font-hud)',
                    fontSize: '1.2rem',
                    color: 'var(--neon-green)',
                    marginBottom: '0.75rem'
                  }}>
                    TRANSMISSION RECONCILED
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    Data packet sent and merged into central message buffer. Direct response link will generate soon.
                  </p>
                  <button onClick={closeFormModal} className="btn-cyber">
                    CLOSE COMM_LINK
                  </button>
                </div>
              ) : transmitting ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '3rem 0',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <Cpu size={32} className="text-purple" style={{
                    marginBottom: '1.5rem',
                    animation: 'spin 4s linear infinite',
                    filter: 'drop-shadow(0 0 6px var(--neon-purple-glow))'
                  }} />
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--neon-purple)',
                    letterSpacing: '1px',
                    textShadow: '0 0 8px var(--neon-purple-glow)',
                    marginBottom: '0.5rem'
                  }}>
                    {transmissionPhase}
                  </div>
                  <div style={{
                    width: '100%',
                    maxWidth: '300px',
                    height: '4px',
                    backgroundColor: 'rgba(168, 85, 247, 0.1)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      backgroundColor: 'var(--neon-purple)',
                      boxShadow: '0 0 8px var(--neon-purple)',
                      width: '60%',
                      animation: 'cyber-progress 4s linear infinite'
                    }} />
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    borderBottom: '1px solid rgba(168, 85, 247, 0.1)',
                    paddingBottom: '0.5rem'
                  }}>
                    <div>LINK_TRANS: SHIELD_SECURE_API</div>
                    <div className="text-purple">[OPERATOR: UVAIS]</div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontFamily: 'var(--font-hud)', fontSize: '0.7rem', color: 'var(--neon-cyan)', letterSpacing: '1px' }}>
                      [OPERATIVE_NAME]
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      placeholder="e.g. AGENT SHIELD"
                      style={{
                        background: 'rgba(3, 7, 18, 0.5)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: '4px',
                        padding: '0.75rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-mono)',
                        outline: 'none'
                      }}
                      className="hud-input"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontFamily: 'var(--font-hud)', fontSize: '0.7rem', color: 'var(--neon-cyan)', letterSpacing: '1px' }}>
                      [EMAIL_ADDRESS]
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="e.g. operator@terminal.org"
                      style={{
                        background: 'rgba(3, 7, 18, 0.5)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: '4px',
                        padding: '0.75rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-mono)',
                        outline: 'none'
                      }}
                      className="hud-input"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontFamily: 'var(--font-hud)', fontSize: '0.7rem', color: 'var(--neon-cyan)', letterSpacing: '1px' }}>
                      [MESSAGE_STREAM]
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      rows={4}
                      placeholder="Compile transmission body..."
                      style={{
                        background: 'rgba(3, 7, 18, 0.5)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: '4px',
                        padding: '0.75rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-mono)',
                        outline: 'none',
                        resize: 'none'
                      }}
                      className="hud-input"
                    />
                  </div>

                  <button type="submit" className="btn-cyber btn-cyber-purple" style={{ width: '100%', justifyContent: 'center' }}>
                    TRANSMIT SECURE DATA
                    <Send size={14} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
