import React from 'react';
import NavIndicator from './NavIndicator';

const NavItem = ({ 
  label, 
  href = '#', 
  badge = null,      // 'new', 'hot', etc.
  showDot = false,   // orange dot indicator
  isActive = false 
}) => {
  return (
    <a 
      href={href} 
      className={`nav-item ${isActive ? 'nav-item--active' : ''}`}
    >
      {badge && (
        <NavIndicator type="badge" label={badge} />
      )}
      <span className="nav-item-label">{label}</span>
      {showDot && (
        <NavIndicator type="dot" />
      )}
    </a>
  );
};

export default NavItem;