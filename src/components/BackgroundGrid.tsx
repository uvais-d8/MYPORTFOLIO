import React, { useEffect, useState } from 'react';

export const BackgroundGrid: React.FC = () => {
  const [telemetry, setTelemetry] = useState({
    systemLoad: '0.15',
    networkTraffic: '2.4 GB/s',
    coreTemp: '42°C',
    coordinates: '12.9716° N / 77.5946° E',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate changing telemetry data
      setTelemetry({
        systemLoad: (Math.random() * 0.2 + 0.1).toFixed(2),
        networkTraffic: `${(Math.random() * 3 + 1).toFixed(1)} GB/s`,
        coreTemp: `${Math.floor(Math.random() * 5 + 40)}°C`,
        coordinates: `${(12.9716 + Math.random() * 0.001 - 0.0005).toFixed(4)}° N / ${(77.5946 + Math.random() * 0.001 - 0.0005).toFixed(4)}° E`,
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cyber-backdrop">
      <div className="laser-scanline"></div>
      
      {/* Decorative Floating Telemetry Grid Overlay */}
      <div style={{
        position: 'absolute',
        top: '1.5rem',
        left: '1.5rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'var(--neon-cyan)',
        opacity: 0.4,
        zIndex: -5,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
        pointerEvents: 'none'
      }}>
        <div>NODE: SECURE_CORE_01</div>
        <div>SYS_LOAD: {telemetry.systemLoad}</div>
        <div>COORDS: {telemetry.coordinates}</div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        right: '1.5rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'var(--neon-purple)',
        opacity: 0.4,
        zIndex: -5,
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
        pointerEvents: 'none'
      }}>
        <div>BANDWIDTH: {telemetry.networkTraffic}</div>
        <div>CORE_TEMP: {telemetry.coreTemp}</div>
        <div>STATUS: ONLINE_SYNCED</div>
      </div>

      {/* Grid Corner Decorative Brackets for Screen Border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        padding: '1.5rem',
        zIndex: -4,
        pointerEvents: 'none'
      }}>
        <div className="corner-brackets" style={{ width: '100%', height: '100%', position: 'relative' }}></div>
      </div>

      {/* Floating Telemetry Nodes */}
      <div className="telemetry-node" style={{ left: '15%', animationDelay: '0s', animationDuration: '18s' }}></div>
      <div className="telemetry-node" style={{ left: '45%', animationDelay: '4s', animationDuration: '22s' }}></div>
      <div className="telemetry-node" style={{ left: '75%', animationDelay: '2s', animationDuration: '16s' }}></div>
      <div className="telemetry-node" style={{ left: '90%', animationDelay: '8s', animationDuration: '25s' }}></div>
    </div>
  );
};
