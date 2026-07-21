import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../portfolioConfig';
import { Terminal, Shield, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  terminalMode: boolean;
  setTerminalMode: (mode: boolean) => void;
}

// Inline Synthesizer for Retro Cyber Audio Telemetry (No assets needed!)
export const playCyberSound = (type: 'hover' | 'click' | 'success' | 'terminal') => {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } else if (type === 'click') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.setValueAtTime(300, audioCtx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } else if (type === 'terminal') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.03);
    } else if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    }
  } catch (e) {
    // Audio Context is blocked or unsupported
  }
};

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
  terminalMode,
  setTerminalMode,
}) => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setCurrentTime(d.toISOString().slice(11, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNav = (section: string) => {
    if (audioEnabled) playCyberSound('click');
    setActiveSection(section);
    setTerminalMode(false);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTerminal = () => {
    if (audioEnabled) playCyberSound('click');
    setTerminalMode(!terminalMode);
  };

  const navItems = [
    { id: 'hero', label: 'SYS_CORE' },
    { id: 'about', label: 'EXEC_BIO' },
    { id: 'skills', label: 'TECH_STACK' },
    { id: 'experience', label: 'LOG_TIMELINE' },
    { id: 'education', label: 'ACADEMIC_CRED' },
    { id: 'projects', label: 'WORKS_DB' },
    { id: 'extras', label: 'CONTRIB_STATS' },
    { id: 'contact', label: 'COMM_LINK' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      background: 'rgba(3, 7, 18, 0.75)',
      borderBottom: '1px solid var(--border-glass)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      fontFamily: 'var(--font-hud)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0.75rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}>
        {/* Branding & Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div 
            onClick={() => handleNav('hero')}
            style={{ 
              fontSize: '1rem', 
              fontWeight: 800, 
              color: 'var(--neon-cyan)',
              cursor: 'pointer',
              letterSpacing: '1px',
              textShadow: '0 0 10px var(--neon-cyan-glow)'
            }}
            onMouseEnter={() => audioEnabled && playCyberSound('hover')}
          >
            [{portfolioConfig.profile.alias}]
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'rgba(6, 182, 212, 0.08)',
            border: '1px solid rgba(6, 182, 212, 0.2)',
            borderRadius: '4px',
            padding: '0.15rem 0.5rem',
            fontSize: '0.65rem',
            color: 'var(--neon-green)',
            fontFamily: 'var(--font-mono)'
          }}>
            <span style={{
              width: '5px',
              height: '5px',
              backgroundColor: 'var(--neon-green)',
              borderRadius: '50%',
              display: 'inline-block',
              boxShadow: '0 0 6px var(--neon-green)',
              animation: 'flicker-keyframes 2s infinite'
            }}></span>
            <span className="hide-mobile">UPTIME: </span>{portfolioConfig.profile.uptime}
          </div>
        </div>

        {/* Navigation Controls */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              onMouseEnter={() => audioEnabled && playCyberSound('hover')}
              aria-label={`Navigate to ${item.label} section`}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeSection === item.id && !terminalMode ? 'var(--neon-cyan)' : 'var(--text-secondary)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '1px',
                padding: '0.4rem 0.8rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                borderBottom: activeSection === item.id && !terminalMode ? '2px solid var(--neon-cyan)' : '2px solid transparent',
                position: 'relative'
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Dashboard Status Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* UTC Telemetry Time */}
          <div 
            className="hide-mobile"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)'
            }}
          >
            {currentTime}
          </div>

          {/* Audio Telemetry Toggle */}
          <div className="hide-mobile">
            <button
              onClick={() => {
                const nextState = !audioEnabled;
                setAudioEnabled(nextState);
                if (nextState) {
                  setTimeout(() => playCyberSound('success'), 100);
                }
              }}
              onMouseEnter={() => audioEnabled && playCyberSound('hover')}
              aria-label={`Toggle audio effects: currently ${audioEnabled ? 'ON' : 'OFF'}`}
              style={{
                background: audioEnabled ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                border: `1px solid ${audioEnabled ? 'var(--neon-cyan)' : 'var(--text-muted)'}`,
                color: audioEnabled ? 'var(--neon-cyan)' : 'var(--text-muted)',
                borderRadius: '4px',
                padding: '0.35rem 0.65rem',
                fontSize: '0.7rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-hud)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                transition: 'all var(--transition-fast)',
              }}
            >
              <Shield size={10} />
              AUDIO: {audioEnabled ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* Terminal Console mode toggle */}
          <button
            onClick={toggleTerminal}
            onMouseEnter={() => audioEnabled && playCyberSound('hover')}
            aria-label={terminalMode ? 'Exit Terminal CLI Mode' : 'Launch Terminal CLI Mode'}
            style={{
              background: terminalMode ? 'rgba(168, 85, 247, 0.15)' : 'transparent',
              border: `1px solid ${terminalMode ? 'var(--neon-purple)' : 'var(--border-glass)'}`,
              color: terminalMode ? 'var(--neon-purple)' : 'var(--text-primary)',
              borderRadius: '4px',
              padding: '0.35rem 0.65rem',
              fontSize: '0.7rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              transition: 'all var(--transition-fast)',
              boxShadow: terminalMode ? '0 0 10px var(--neon-purple-glow)' : 'none'
            }}
          >
            <Terminal size={12} />
            {terminalMode ? 'EXIT_CLI' : 'LAUNCH_CLI'}
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Navigation Menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Mobile Slide-Down Navigation Panel */}
        <div className={`mobile-nav-panel ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeSection === item.id && !terminalMode ? 'var(--neon-cyan)' : 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '1px',
                padding: '0.6rem 0',
                textAlign: 'left',
                cursor: 'pointer',
                borderBottom: `1px solid ${activeSection === item.id && !terminalMode ? 'rgba(6, 182, 212, 0.3)' : 'rgba(255,255,255,0.05)'}`,
                width: '100%'
              }}
            >
              {`> ${item.label}`}
            </button>
          ))}
          {/* Mobile Extra Controls inside Menu */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', borderTop: '1px solid rgba(6, 182, 212, 0.1)', paddingTop: '1rem' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)' }}>
              {currentTime}
            </div>
            <button
              onClick={() => {
                const nextState = !audioEnabled;
                setAudioEnabled(nextState);
                if (nextState) {
                  setTimeout(() => playCyberSound('success'), 100);
                }
              }}
              style={{
                background: audioEnabled ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                border: `1px solid ${audioEnabled ? 'var(--neon-cyan)' : 'var(--text-muted)'}`,
                color: audioEnabled ? 'var(--neon-cyan)' : 'var(--text-muted)',
                borderRadius: '4px',
                padding: '0.35rem 0.65rem',
                fontSize: '0.7rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-hud)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                transition: 'all var(--transition-fast)',
              }}
            >
              <Shield size={10} />
              AUDIO: {audioEnabled ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
