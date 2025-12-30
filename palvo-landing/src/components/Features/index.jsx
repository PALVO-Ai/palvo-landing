import React, { useState } from 'react';
import './Features.css';

// Pendant Device Component (same style as hero but front-facing)
const PendantDevice = ({ accentColor = '#8B5CF6' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="pendant-device"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow */}
      <div
        className="pendant-glow"
        style={{
          background: `radial-gradient(ellipse at center, ${accentColor}50 0%, ${accentColor}25 35%, transparent 60%)`,
          opacity: isHovered ? 1 : 0.7,
        }}
      />

      {/* Device body */}
      <div
        className="pendant-body"
        style={{
          transform: isHovered ? 'translateY(-15px) scale(1.03)' : 'translateY(0)',
          boxShadow: isHovered
            ? `0 80px 160px rgba(0,0,0,0.5), 0 0 200px ${accentColor}40, inset 0 4px 0 rgba(255,255,255,1)`
            : '0 60px 120px rgba(0,0,0,0.45), inset 0 4px 0 rgba(255,255,255,1)',
        }}
      >
        {/* Glossy highlight */}
        <div className="pendant-gloss" />
        <div className="pendant-gloss-top" />

        {/* Inner dark area */}
        <div className="pendant-inner">
          {/* Inner glow */}
          <div
            className="pendant-inner-glow"
            style={{
              background: `radial-gradient(ellipse at center, ${accentColor}30 0%, transparent 60%)`,
              opacity: isHovered ? 1 : 0.5,
            }}
          />

          {/* Voice wave animation */}
          <div className="voice-waves">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="voice-wave"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  backgroundColor: isHovered ? accentColor : 'rgba(255,255,255,0.4)',
                }}
              />
            ))}
          </div>

          {/* P Letter */}
          <span
            className="pendant-letter"
            style={{
              color: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
              textShadow: isHovered
                ? `0 0 60px ${accentColor}, 0 0 120px ${accentColor}60`
                : '0 0 30px rgba(255, 255, 255, 0.3)',
              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
            }}
          >
            P
          </span>
        </div>

        {/* Bottom indicator */}
        <div
          className="pendant-indicator"
          style={{
            background: isHovered
              ? `linear-gradient(90deg, ${accentColor}, #06B6D4)`
              : 'rgba(0, 0, 0, 0.2)',
            boxShadow: isHovered ? `0 0 20px ${accentColor}` : 'none',
          }}
        />
      </div>

      {/* Shadow */}
      <div
        className="pendant-shadow"
        style={{
          background: isHovered
            ? `radial-gradient(ellipse at center, ${accentColor}50 0%, rgba(0,0,0,0.4) 40%, transparent 70%)`
            : 'radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

const Features = ({
  accentColor = '#8B5CF6',
  price = '$49',
  currency = 'USD',
}) => {
  const features = [
    { text: 'no subscription' },
    { text: 'powered by palvoAI' },
    { text: 'always listening' },
    { text: 'private & secure' },
  ];

  return (
    <section className="features-section">
      {/* Top row - Features and Price */}
      <div className="features-top">
        {/* Features list */}
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Price and Buy */}
        <div className="price-section">
          <div className="price">
            <span className="price-amount">{price}</span>
            <span className="price-currency">{currency}</span>
          </div>
          <button
            className="buy-button"
            style={{ backgroundColor: accentColor }}
          >
            buy now
          </button>
        </div>
      </div>

      {/* Main headline */}
      <div className="powered-section">
        <h2 className="powered-text">your AI companion</h2>
        <p className="powered-subtext">
          Always there. Always listening. Always helpful.
        </p>
        <button
          className="keynote-button"
          style={{ backgroundColor: accentColor }}
        >
          experience palvo
        </button>
      </div>

      {/* Device Display */}
      <div className="device-display">
        <PendantDevice accentColor={accentColor} />
      </div>

      {/* Blue gradient floor */}
      <div className="floor-gradient" />
    </section>
  );
};

export default Features;