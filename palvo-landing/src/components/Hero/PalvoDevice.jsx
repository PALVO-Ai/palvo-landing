import React, { useState } from 'react';

const PalvoDevice = ({ 
  accentColor = '#8B5CF6',
  showGlow = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="palvo-device-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        perspective: '2500px',
        cursor: 'pointer',
      }}
    >
      {/* Large glow effect */}
      {showGlow && (
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300%',
            height: '350%',
            background: `radial-gradient(ellipse at center, ${accentColor}45 0%, ${accentColor}20 30%, transparent 55%)`,
            filter: 'blur(120px)',
            opacity: isHovered ? 1 : 0.75,
            transition: 'opacity 0.8s ease',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Device wrapper */}
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? 'rotateX(45deg) rotateZ(-25deg) translateY(-40px) scale(1.06)' 
            : 'rotateX(50deg) rotateZ(-28deg)',
          transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Pill-shaped device body - MUCH BIGGER */}
        <div
          style={{
            width: '280px',
            height: '580px',
            borderRadius: '140px',
            position: 'relative',
            background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 15%, #e8e8e8 40%, #d0d0d0 70%, #b8b8b8 100%)',
            boxShadow: isHovered
              ? `
                0 120px 250px rgba(0, 0, 0, 0.6),
                0 60px 120px rgba(0, 0, 0, 0.4),
                0 0 200px ${accentColor}50,
                0 0 100px ${accentColor}30,
                inset 0 5px 0 rgba(255, 255, 255, 1),
                inset 0 -5px 20px rgba(0, 0, 0, 0.2)
              `
              : `
                0 100px 200px rgba(0, 0, 0, 0.55),
                0 50px 100px rgba(0, 0, 0, 0.35),
                inset 0 5px 0 rgba(255, 255, 255, 1),
                inset 0 -5px 20px rgba(0, 0, 0, 0.15)
              `,
            transition: 'box-shadow 0.8s ease',
            overflow: 'hidden',
          }}
        >
          {/* Glossy highlight - left side */}
          <div
            style={{
              position: 'absolute',
              top: '3%',
              left: '5%',
              width: '30%',
              height: '94%',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 40%, transparent 100%)',
              borderRadius: '140px 0 0 140px',
              pointerEvents: 'none',
            }}
          />

          {/* Top reflection */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '15%',
              right: '15%',
              height: '12%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, transparent 100%)',
              borderRadius: '140px 140px 50% 50%',
              pointerEvents: 'none',
            }}
          />

          {/* Edge highlight */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: '140px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.1) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Inner dark area */}
          <div
            style={{
              position: 'absolute',
              top: '50px',
              left: '35px',
              right: '35px',
              bottom: '50px',
              borderRadius: '105px',
              background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 40%, #000000 100%)',
              boxShadow: `
                inset 0 10px 40px rgba(0, 0, 0, 0.95),
                inset 0 -4px 20px rgba(255, 255, 255, 0.03)
              `,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            {/* Inner ambient glow */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                height: '90%',
                background: `radial-gradient(ellipse at center, ${accentColor}25 0%, transparent 60%)`,
                opacity: isHovered ? 1 : 0.4,
                transition: 'opacity 0.8s ease',
                pointerEvents: 'none',
              }}
            />

            {/* Pulsing ring effect on hover */}
            {isHovered && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  border: `2px solid ${accentColor}50`,
                  animation: 'pulseRing 2s ease-out infinite',
                }}
              />
            )}

            {/* "P" Letter - MUCH BIGGER */}
            <span
              style={{
                fontSize: '100px',
                fontWeight: '300',
                letterSpacing: '0.02em',
                color: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                textShadow: isHovered 
                  ? `0 0 60px ${accentColor}, 0 0 120px ${accentColor}60, 0 0 180px ${accentColor}30`
                  : '0 0 30px rgba(255, 255, 255, 0.3)',
                transition: 'all 0.8s ease',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              P
            </span>
          </div>

          {/* Bottom indicator line */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '6px',
              borderRadius: '3px',
              background: isHovered 
                ? `linear-gradient(90deg, ${accentColor}, #06B6D4)`
                : 'rgba(0, 0, 0, 0.2)',
              boxShadow: isHovered ? `0 0 25px ${accentColor}` : 'none',
              transition: 'all 0.6s ease',
            }}
          />
        </div>

        {/* Shadow underneath */}
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '50%',
            transform: 'translateX(-50%) rotateX(90deg)',
            width: '400px',
            height: '250px',
            background: isHovered
              ? `radial-gradient(ellipse at center, ${accentColor}60 0%, rgba(0,0,0,0.5) 40%, transparent 70%)`
              : 'radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, transparent 70%)',
            filter: 'blur(50px)',
            transition: 'all 0.8s ease',
          }}
        />
      </div>

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${5 + Math.random() * 5}px`,
                height: `${5 + Math.random() * 5}px`,
                borderRadius: '50%',
                background: i % 2 === 0 ? accentColor : '#06B6D4',
                top: `${5 + Math.random() * 90}%`,
                left: `${0 + Math.random() * 100}%`,
                opacity: 0,
                animation: `floatParticle 3s ease-out ${i * 0.15}s infinite`,
                pointerEvents: 'none',
              }}
            />
          ))}
        </>
      )}

      <style>{`
        @keyframes floatParticle {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0);
          }
          15% {
            opacity: 0.9;
            transform: translateY(-25px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-120px) scale(0.3);
          }
        }
        @keyframes pulseRing {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default PalvoDevice;