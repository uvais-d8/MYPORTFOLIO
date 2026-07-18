import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../portfolioConfig';
import { playCyberSound } from './Header';
import { ArrowRight, Download, Send } from 'lucide-react';
import me1 from '../assets/me1.jpeg';

export const HeroSection: React.FC = () => {
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = `> CONNECTED_TO_NODE_ID: // ${portfolioConfig.profile.alias}`;
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Typewriter effect on mount
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullTitle.length) {
        setTypedTitle((prev) => prev + fullTitle.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // 3D Tilt effect on HUD mesh based on mouse position
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotation({
      x: -y / 15,
      y: x / 15,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left - rect.width / 2;
    const y = touch.clientY - rect.top - rect.height / 2;
    setRotation({
      x: -y / 15,
      y: x / 15,
    });
  };

  const handleTouchEnd = () => {
    setRotation({ x: 0, y: 0 });
  };

  // Framer Motion Animation Settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  // Trigger local download of a mockup resume
  const handleDownloadResume = () => {
    playCyberSound('success');
    const dummyContent = `MUHAMMED UVAIS - BACKEND DEVELOPER RESUME\nEmail: ${portfolioConfig.contactInfo.email}\nPhone: ${portfolioConfig.contactInfo.phone}\nGitHub: ${portfolioConfig.contactInfo.github}\n\nNestJS, Node.js, Express, MongoDB, PostgreSQL, Docker, AWS, React`;
    const blob = new Blob([dummyContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${portfolioConfig.profile.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="hero" style={{ padding: '1rem 0', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-grid"
      >
        {/* Core telemetry details */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.div variants={itemVariants} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--neon-cyan)',
            marginBottom: '0.75rem',
            letterSpacing: '1px'
          }}>
            {typedTitle}
            <span style={{
              display: 'inline-block',
              width: '6px',
              height: '14px',
              backgroundColor: 'var(--neon-cyan)',
              marginLeft: '4px',
              animation: 'flicker-keyframes 1s infinite'
            }}></span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="glitch-text" 
            data-text={portfolioConfig.profile.name} 
            style={{
              fontFamily: 'var(--font-hud)',
              fontSize: '4rem',
              fontWeight: 900,
              lineHeight: 0.95,
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}
          >
            {portfolioConfig.profile.name}
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-hud)',
              fontSize: '1.3rem',
              color: 'var(--neon-purple)',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textShadow: '0 0 10px var(--neon-purple-glow)'
            }}
          >
            {portfolioConfig.profile.title}
          </motion.h2>

          {/* Headline details */}
          <motion.h3
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-hud)',
              fontSize: '1.6rem',
              fontWeight: 800,
              lineHeight: 1.25,
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              letterSpacing: '0.5px'
            }}
          >
            Building Powerful Backend Systems <br />
            <span style={{ color: 'var(--neon-cyan)' }}>For Modern Web Applications.</span>
          </motion.h3>

          <motion.p 
            variants={itemVariants}
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              maxWidth: '540px'
            }}
          >
            {portfolioConfig.profile.shortBio}
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <button
              onClick={handleDownloadResume}
              className="btn-cyber"
            >
              DOWNLOAD RESUME
              <Download size={14} />
            </button>

            <button
              onClick={() => {
                playCyberSound('click');
                const projects = document.getElementById('projects');
                if (projects) projects.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-cyber btn-cyber-purple"
            >
              VIEW PROJECTS
              <ArrowRight size={14} />
            </button>

            <button
              onClick={() => {
                playCyberSound('click');
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-cyber"
              style={{ borderColor: 'var(--border-glass)' }}
            >
              CONTACT ME
              <Send size={14} />
            </button>
          </motion.div>
        </div>

        {/* Floating Holographic Portrait Box */}
        <motion.div 
          variants={itemVariants}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px',
            cursor: 'crosshair',
            width: '100%'
          }}
        >
          <div 
            className={`cyber-panel corner-brackets ${rotation.x === 0 && rotation.y === 0 ? 'ambient-sway' : ''}`}
            style={{
              width: '100%',
              maxWidth: '320px',
              height: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transform: rotation.x === 0 && rotation.y === 0 ? undefined : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: rotation.x === 0 && rotation.y === 0 ? 'transform 1s ease, border-color var(--transition-normal), box-shadow var(--transition-normal)' : 'transform 0.1s ease-out',
              background: 'rgba(6, 182, 212, 0.02)',
              border: '1px solid var(--border-glass)',
            }}
          >
            {/* HUD Status Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--neon-cyan)'
            }}>
              <div>// BIO_AVATAR_RENDERER</div>
              <div>NOMINAL_OK</div>
            </div>

            {/* Glowing avatar placeholder */}
            <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              {/* Spinning decorative ring */}
              <svg width="220" height="220" viewBox="0 0 200 200" style={{ position: 'absolute' }}>
                <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="1" strokeDasharray="5,10" style={{ transformOrigin: 'center', animation: 'spin 60s linear infinite' }} />
                <circle cx="100" cy="100" r="70" fill="none" stroke="var(--neon-cyan)" strokeWidth="1" strokeDasharray="30,40" style={{ transformOrigin: 'center', animation: 'spin 20s linear infinite reverse', opacity: 0.6 }} />
              </svg>

              {/* Holographic Portrait Image Mask */}
              <div style={{ 
                position: 'relative', 
                width: '160px', 
                height: '160px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                border: '2.5px solid var(--neon-cyan)', 
                boxShadow: '0 0 20px var(--neon-cyan-glow)',
                zIndex: 2,
                background: 'rgba(3, 7, 18, 0.8)'
              }}>
                <img 
                  src={me1} 
                  alt={portfolioConfig.profile.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    filter: 'contrast(1.1) brightness(0.9)' 
                  }} 
                />
                
                {/* Scanline line overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: 'linear-gradient(180deg, transparent, var(--neon-cyan), transparent)',
                  boxShadow: '0 0 8px var(--neon-cyan)',
                  animation: 'scanner-line 4s linear infinite',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>

            {/* HUD Status Footer */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--text-muted)',
              borderTop: '1px solid rgba(6, 182, 212, 0.1)',
              paddingTop: '0.5rem'
            }}>
              <div>TARGET: UVAIS_NODE</div>
              <div style={{ textAlign: 'right', color: 'var(--neon-green)' }}>BIOMETRICS_VERIFIED</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Dynamic scanline animation style injection */}
      <style>{`
        @keyframes scanner-line {
          0% { transform: translateY(-10px); }
          50% { transform: translateY(170px); }
          100% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};
