import React from 'react';

const CartIcon = ({ itemCount = 0, onClick }) => {
  return (
    <button 
      className="cart-button"
      onClick={onClick}
      aria-label={`Shopping cart${itemCount > 0 ? `, ${itemCount} items` : ''}`}
    >
      <svg 
        width="22" 
        height="22" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="cart-icon"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      
      {itemCount > 0 && (
        <span className="cart-count">{itemCount}</span>
      )}
    </button>
  );
};

export default CartIcon;