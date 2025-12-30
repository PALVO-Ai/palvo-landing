import React from 'react';

const Logo = ({ brandName = 'palvo' }) => {
  return (
    <a 
      href="/" 
      className="logo"
      aria-label={`${brandName} home`}
    >
      <span className="logo-text">{brandName}</span>
      <span className="logo-trademark">™</span>
    </a>
  );
};

export default Logo;