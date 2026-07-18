import React, { useState, useEffect, useRef } from 'react';
import { portfolioConfig } from '../portfolioConfig';
import { playCyberSound } from './Header';

interface TerminalConsoleProps {
  onClose?: () => void;
}

export const TerminalConsole: React.FC<TerminalConsoleProps> = ({ onClose }) => {
  const [history, setHistory] = useState<string[]>([
    portfolioConfig.terminal.welcomeMessage,
    "Type 'help' to initialize decryption protocol.",
    ""
  ]);
  const [inputVal, setInputVal] = useState('');
  const [matrixActive, setMatrixActive] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Matrix digital rain loop
  useEffect(() => {
    if (!matrixActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 16);
    const drops: number[] = Array(columns).fill(1);

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZMODULE_BYPASS_LOGISTICS_S9TRUCKS';

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0'; // bright green
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * 16, drops[i] * 16);

        if (drops[i] * 16 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const exitMatrix = () => {
      setMatrixActive(false);
      setHistory(prev => [...prev, "> BYPASS OVERLAY DISENGAGED. CONNECTED TO SECURE TERMINAL.", ""]);
    };

    // Press any key or click to exit matrix rain
    window.addEventListener('keydown', exitMatrix);
    canvas.addEventListener('click', exitMatrix);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', exitMatrix);
      if (canvas) canvas.removeEventListener('click', exitMatrix);
    };
  }, [matrixActive]);

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, `guest@neo-dev-terminal:~$ ${cmd}`];

    playCyberSound('terminal');

    switch (cleanCmd) {
      case 'help':
        newHistory.push(portfolioConfig.terminal.helpText, "");
        break;
      
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      
      case 'about':
        newHistory.push(
          `CODENAME: ${portfolioConfig.profile.alias}`,
          `NAME: ${portfolioConfig.profile.name}`,
          `TITLE: ${portfolioConfig.profile.title}`,
          `STATUS: ${portfolioConfig.profile.status}`,
          `LOCATION: ${portfolioConfig.profile.location}`,
          `BIO: ${portfolioConfig.profile.bio}`,
          ""
        );
        break;
      
      case 'skills':
        newHistory.push(
          "========================================",
          "SKILL_MODULE_COMPILE // TELEMETRY STACK",
          "========================================"
        );
        portfolioConfig.skills.forEach(cat => {
          newHistory.push(`[${cat.title}]`);
          cat.skills.forEach(s => {
            const barLength = Math.round(s.level / 10);
            const bar = '■'.repeat(barLength) + '░'.repeat(10 - barLength);
            newHistory.push(`  ${s.name.padEnd(20)} [${bar}] ${s.level}%`);
          });
          newHistory.push("");
        });
        break;
      
      case 'projects':
        newHistory.push(
          "========================================",
          "DEPLOYED_PROJECTS_DATABASES // DETECTED",
          "========================================"
        );
        portfolioConfig.projects.forEach((proj, idx) => {
          newHistory.push(`[PROJ_0${idx + 1}] ${proj.title}`);
          newHistory.push(`  TAGLINE: ${proj.tagline}`);
          newHistory.push(`  CORE_TECH: ${proj.tech.join(', ')}`);
          newHistory.push(`  ROLE: ${proj.role}`);
          newHistory.push("");
        });
        break;
      
      case 'experience':
        newHistory.push(
          "========================================",
          "TIMELINE_SERVICE_RECORDS // STREAMING",
          "========================================"
        );
        portfolioConfig.experience.forEach(exp => {
          newHistory.push(`[${exp.period}] - ${exp.role} @ ${exp.company}`);
          newHistory.push(`  SUMMARY: ${exp.summary}`);
          exp.achievements.forEach(ach => {
            newHistory.push(`    - ${ach}`);
          });
          newHistory.push("");
        });
        break;
      
      case 'contact':
        newHistory.push(
          "========================================",
          "COMMUNICATION_LINK_GATEWAYS // ONLINE",
          "========================================",
          `  EMAIL:     ${portfolioConfig.contactInfo.email}`,
          `  PHONE:     ${portfolioConfig.contactInfo.phone}`,
          `  GITHUB:    https://${portfolioConfig.contactInfo.github}`,
          `  LINKEDIN:  https://${portfolioConfig.contactInfo.linkedin}`,
          ""
        );
        break;
      
      case 'hack':
        newHistory.push("> WARNING: SYSTEM CORRUPTION PROTOCOL INITIALIZED. BYPASSING HUD SHELL...", "");
        setHistory(newHistory);
        setInputVal('');
        setTimeout(() => {
          setMatrixActive(true);
        }, 500);
        return;
      
      default:
        if (cleanCmd === '') {
          newHistory.push("");
        } else {
          newHistory.push(`ERROR: Command '${cmd}' not recognized. Type 'help' for documentation.`, "");
        }
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <>
      {matrixActive ? (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          background: '#000',
          cursor: 'none'
        }}>
          <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#0f0',
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            border: '1px solid #0f0',
            pointerEvents: 'none'
          }}>
            SYSTEM HACK ACTIVE // PRESS ANY KEY OR CLICK TO TERMINATE BYPASS
          </div>
        </div>
      ) : (
        <div className="terminal-container">
          {/* Header Console Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(168, 85, 247, 0.08)',
            borderBottom: '1px solid rgba(168, 85, 247, 0.2)',
            padding: '0.5rem 1rem',
            color: 'var(--neon-purple)',
            fontSize: '0.75rem'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }}></span>
              <span style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}>NEO_CORE_CLI v2.6.4</span>
            </div>
            
            {onClose && (
              <button 
                onClick={onClose}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--neon-purple)',
                  cursor: 'pointer',
                  fontSize: '0.7rem'
                }}
              >
                [EXIT_CLI]
              </button>
            )}
          </div>

          {/* Logs History Stream */}
          <div style={{
            flexGrow: 1,
            overflowY: 'auto',
            padding: '1.5rem',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            whiteSpace: 'pre-wrap'
          }}>
            {history.map((line, idx) => (
              <div key={idx} style={{ 
                color: line.startsWith('guest@neo-dev-terminal') 
                  ? 'var(--neon-cyan)' 
                  : line.startsWith('ERROR:') 
                  ? 'var(--neon-pink)' 
                  : 'var(--text-secondary)'
              }}>
                {line}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Console Input Line */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            borderTop: '1px solid rgba(168, 85, 247, 0.1)',
            padding: '0.75rem 1.5rem',
            background: 'rgba(3, 7, 18, 0.5)'
          }}>
            <span className="terminal-prefix" style={{ color: 'var(--neon-cyan)', marginRight: '0.5rem', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}></span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyPress}
              style={{
                flexGrow: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem'
              }}
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
};
