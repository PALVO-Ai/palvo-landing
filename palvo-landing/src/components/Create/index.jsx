import React, { useEffect, useRef } from 'react';
import './Create.css';

// Logo Shape Components
const ShapeSquare = () => <div className="shape-square" />;

const ShapeStar = () => <div className="shape-star" />;

const ShapeTriangle = () => <div className="shape-triangle" />;

const ShapeCircle = () => <div className="shape-circle" />;

// Animated Logo Grid
const CreateLogo = () => {
  return (
    <div className="create-logo">
      <div className="logo-shape">
        <ShapeSquare />
      </div>
      <div className="logo-shape">
        <ShapeStar />
      </div>
      <div className="logo-shape">
        <ShapeTriangle />
      </div>
      <div className="logo-shape">
        <ShapeCircle />
      </div>
    </div>
  );
};

// Floating Particles Background
const FloatingParticles = () => {
  return (
    <div className="create-particles">
      {[...Array(7)].map((_, i) => (
        <div key={i} className="particle" />
      ))}
    </div>
  );
};

const Create = ({
  accentColor = '#8B5CF6',
  heading = 'a new way to create',
  subtext = {
    line1: 'turn any thought, idea, or conversation you can imagine',
    line2: 'into AI-powered notes',
    highlight: 'made just for you on palvo',
  },
  showParticles = true,
}) => {
  const sectionRef = useRef(null);

  // Optional: Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="create-section" ref={sectionRef}>
      {/* Floating particles background */}
      {showParticles && <FloatingParticles />}

      {/* Animated Logo */}
      <CreateLogo />

      {/* Main Heading */}
      <h2 className="create-heading">{heading}</h2>

      {/* Subtext */}
      <p className="create-subtext">
        {subtext.line1}
        <br />
        {subtext.line2} — <span>{subtext.highlight}</span>
      </p>

      {/* Accent Line */}
      <div
        className="create-accent-line"
        style={{
          background: `linear-gradient(90deg, ${accentColor}, #06B6D4)`,
        }}
      />
    </section>
  );
};

export default Create;