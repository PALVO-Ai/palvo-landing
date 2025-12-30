import React, { useState, useEffect, useCallback, useRef } from 'react';
import PalvoDevice from './PalvoDevice';
import DiscountBadge from './DiscountBadge';
import './Hero.css';

const Hero = ({
  brandText = 'palvo',
//   subText = 'p1',
  discount = '25%',
  discountLabel = 'save',
  dateRange = '12/10 - 12/31',
  accentColor = '#8B5CF6',
}) => {
  const [loaded, setLoaded] = useState(false);
  const [badges, setBadges] = useState([]);
  const textAreaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getRandomSize = () => {
    const sizes = ['sm', 'md', 'lg'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  // Handle click - only spawn badges if clicked in text area
  const handleTextAreaClick = useCallback((e) => {
    e.stopPropagation();

    const numBadges = Math.floor(Math.random() * 2) + 2;
    const newBadges = [];

    for (let i = 0; i < numBadges; i++) {
      newBadges.push({
        id: Date.now() + i,
        position: {
          top: `${Math.random() * 50 + 20}%`,
          left: `${Math.random() * 80 + 10}%`,
        },
        size: getRandomSize(),
        isVisible: true,
      });
    }

    setBadges(prev => [...prev, ...newBadges]);

    setTimeout(() => {
      setBadges(prev => prev.filter(b => !newBadges.find(nb => nb.id === b.id)));
    }, 3000);
  }, []);

  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-background" />

      {/* Main content - Compact vertical layout */}
      <div 
        className="hero-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '100%',
          paddingTop: '60px',
          overflow: 'hidden',
        }}
      >
        {/* Text Area - Edge to edge, clickable */}
        <div 
          ref={textAreaRef}
          onClick={handleTextAreaClick}
          className="text-area-clickable"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            gap: '1vw',
            width: '100%',
            padding: '10px 0',
            cursor: 'pointer',
            userSelect: 'none',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(-40px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        >
          {/* Discount badges - Only in this area */}
          {badges.map(badge => (
            <DiscountBadge
              key={badge.id}
              discount={discount}
              label={discountLabel}
              dateRange={dateRange}
              size={badge.size}
              color={accentColor}
              isVisible={badge.isVisible}
              style={badge.position}
            />
          ))}

          {/* Giant text - EDGE TO EDGE */}
          <span
            style={{
              fontSize: 'clamp(120px, 32vw, 500px)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              color: 'rgba(255, 255, 255, 0.92)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
              lineHeight: 0.85,
              textShadow: '0 0 120px rgba(139, 92, 246, 0.25)',
            }}
          >
            {brandText}
          </span>
          {/* <span
            style={{
              fontSize: 'clamp(110px, 30vw, 480px)',
              fontWeight: 200,
              letterSpacing: '-0.04em',
              color: 'rgba(255, 255, 255, 0.92)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
              lineHeight: 0.85,
            }}
          >
            {subText}
          </span> */}

          {/* Hint text */}
          <div
            style={{
              position: 'absolute',
              bottom: '-5px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '10px',
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          >
            Click text for discount
          </div>
        </div>

        {/* Device - Bigger, Compact spacing */}
        <div 
          className="hero-device"
          style={{
            position: 'relative',
            marginTop: '-30px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(100px)',
            transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
          }}
        >
          <PalvoDevice 
            accentColor={accentColor}
            showGlow={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;