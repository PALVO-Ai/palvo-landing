import React from 'react';

const BackgroundText = ({ 
  text = 'PALVO', 
  subText = 'P1',
  color = 'rgba(255, 255, 255, 0.08)'
}) => {
  return (
    <div 
      className="background-text"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'baseline',
        gap: '2vw',
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      {/* Main text - PALVO */}
      <span
        style={{
          fontSize: 'clamp(120px, 20vw, 300px)',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          color: color,
          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
          lineHeight: 0.85,
        }}
      >
        {text}
      </span>
      
      {/* Sub text - P1 */}
      <span
        style={{
          fontSize: 'clamp(100px, 18vw, 280px)',
          fontWeight: 200,
          letterSpacing: '-0.02em',
          color: color,
          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
          lineHeight: 0.85,
        }}
      >
        {subText}
      </span>
    </div>
  );
};

export default BackgroundText;