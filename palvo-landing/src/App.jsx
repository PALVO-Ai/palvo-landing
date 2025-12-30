import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const navItems = [
    { label: 'p1', badge: 'new', showDot: true, href: '/product' },
    { label: 'creations', href: '/creations' },
    { label: 'studio', href: '/studio' },
    { label: 'blog', href: '/blog' },
    { label: 'newsroom', href: '/newsroom' },
    { label: 'support', href: '/support' },
  ];

  const handleCartClick = () => {
    console.log('Cart clicked');
  };

  return (
    <div className="app">
      {/* Header */}
      <Header 
        brandName="palvo"
        navItems={navItems}
        cartCount={cartCount}
        onCartClick={handleCartClick}
        backgroundColor="#8B5CF6"
      />

      {/* Hero Section */}
      <Hero 
        brandText="p a l v o"
        discount="25%"
        discountLabel="save"
        dateRange="12/10 - 12/31"
        accentColor="#8B5CF6"
      />

      {/* Features Section - Scrolls into view */}
      <Features 
        accentColor="#8B5CF6"
        price="$49"
        currency="USD"
      />
    </div>
  );
}

export default App;