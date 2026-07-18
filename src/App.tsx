import { useState, useEffect } from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { EducationSection } from './components/EducationSection';
import { Projects } from './components/Projects';
import { ExtrasSection } from './components/ExtrasSection';
import { TerminalConsole } from './components/TerminalConsole';
import { ContactForm } from './components/ContactForm';
import { portfolioConfig } from './portfolioConfig';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [terminalMode, setTerminalMode] = useState(false);

  // Scroll spy to highlight active nav link
  useEffect(() => {
    if (terminalMode) return;

    const sections = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'extras', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [terminalMode]);

  return (
    <>
      {/* Background cyber grid & telemetry stats */}
      <BackgroundGrid />

      {/* Floating HUD Header Navigation */}
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        terminalMode={terminalMode} 
        setTerminalMode={setTerminalMode} 
      />

      {/* Main Content Layout */}
      {terminalMode ? (
        <main style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '7rem 2rem 2rem 2rem'
        }}>
          <TerminalConsole onClose={() => setTerminalMode(false)} />
        </main>
      ) : (
        <main className="content-wrapper">
          <HeroSection />
          
          <AboutSection />

          <TechStack />
          
          <Experience />

          <EducationSection />
          
          <Projects />

          <ExtrasSection />
          
          <ContactForm />

          {/* Footer telemetry and diagnostics panel */}
          <footer style={{
            borderTop: '1px solid var(--border-glass)',
            paddingTop: '2rem',
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)'
          }}>
            <div>
              [SYS_LINK: SECURE] // © {new Date().getFullYear()} [{portfolioConfig.profile.name.toUpperCase()}]
            </div>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <div>PING: 14ms</div>
              <div className="text-cyan">LINK_SYNC: SECURE</div>
            </div>
          </footer>
        </main>
      )}
    </>
  );
}

export default App;
