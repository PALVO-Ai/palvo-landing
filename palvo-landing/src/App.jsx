import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Create from './components/Create';

function App() {
  const [cartCount, setCartCount] = useState(0);

  // Shared accent color for consistency
  const accentColor = '#8B5CF6';

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
        backgroundColor={accentColor}
      />

      {/* Hero Section */}
      <Hero 
        brandText="palvo P1"
        discount="25%"
        discountLabel="save"
        dateRange="12/10 - 12/31"
        accentColor={accentColor}
      />

      {/* Features Section */}
      <Features 
        accentColor={accentColor}
        price="$49"
        currency="USD"
      />

      {/* Create Section - AI Note Taking */}
      <Create 
        accentColor={accentColor}
        heading="a new way to create"
        subtext={{
          line1: 'turn any thought, idea, or conversation you can imagine',
          line2: 'into AI-powered notes',
          highlight: 'made just for you on palvo.',
        }}
        showcaseImage="/images/palvo-showcase.png"
        showParticles={true}
        showGlows={true}
      />
    </div>
  );
}

export default App;