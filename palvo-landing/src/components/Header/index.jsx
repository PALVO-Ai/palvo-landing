import React from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import CartIcon from './CartIcon';
import './Header.css';

const Header = ({ 
  brandName = 'palvo',
  navItems = [],
  cartCount = 0,
  onCartClick,
  backgroundColor = '#8B5CF6' // Purple theme for PALVO
}) => {
  // Default nav items if none provided
  const defaultNavItems = [
    { label: 'p1', badge: 'new', showDot: true, href: '/product' },
    { label: 'creations', href: '/creations' },
    { label: 'studio', href: '/studio' },
    { label: 'blog', href: '/blog' },
    { label: 'newsroom', href: '/newsroom' },
    { label: 'support', href: '/support' },
  ];

  const items = navItems.length > 0 ? navItems : defaultNavItems;

  return (
    <header 
      className="header"
      style={{ backgroundColor }}
    >
      <div className="header-container">
        {/* Left: Logo */}
        <div className="header-left">
          <Logo brandName={brandName} />
        </div>

        {/* Center: Navigation */}
        <nav className="header-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {items.map((item, index) => (
              <li key={index} className="nav-list-item">
                <NavItem
                  label={item.label}
                  href={item.href}
                  badge={item.badge}
                  showDot={item.showDot}
                  isActive={item.isActive}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Cart */}
        <div className="header-right">
          <CartIcon 
            itemCount={cartCount} 
            onClick={onCartClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;