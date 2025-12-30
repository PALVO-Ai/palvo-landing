import React from 'react';

const NavIndicator = ({ type = 'dot', label = 'new' }) => {
  if (type === 'badge') {
    return (
      <span className="nav-badge">
        {label}
      </span>
    );
  }

  if (type === 'dot') {
    return (
      <span className="nav-dot" aria-hidden="true" />
    );
  }

  return null;
};

export default NavIndicator;