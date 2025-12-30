import React from 'react';

const DiscountBadge = ({ 
  discount = '25%', 
  label = 'save',
  dateRange = '12/10 - 12/31',
  size = 'md',
  style = {},
  color = '#8B5CF6',
  isVisible = false,
  onAnimationEnd,
}) => {
  const sizes = {
    sm: { width: 70, fontSize: '9px', discountSize: '16px' },
    md: { width: 90, fontSize: '10px', discountSize: '20px' },
    lg: { width: 110, fontSize: '11px', discountSize: '24px' },
  };

  const s = sizes[size] || sizes.md;

  return (
    <div 
      className="discount-badge"
      onAnimationEnd={onAnimationEnd}
      style={{
        position: 'absolute',
        width: s.width,
        height: s.width,
        backgroundColor: color,
        borderRadius: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000000',
        boxShadow: `0 4px 20px ${color}50`,
        zIndex: 20,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0)',
        transition: 'none',
        animation: isVisible ? 'popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, floatBadge 3s ease-in-out 0.4s infinite, fadeOut 0.5s ease-out 2.5s forwards' : 'none',
        ...style,
      }}
    >
      <span style={{ 
        fontSize: s.fontSize, 
        fontWeight: 600,
        textTransform: 'lowercase',
        lineHeight: 1,
      }}>
        {label}
      </span>
      <span style={{ 
        fontSize: s.discountSize, 
        fontWeight: 700,
        lineHeight: 1.1,
      }}>
        {discount}
      </span>
      <span style={{ 
        fontSize: `calc(${s.fontSize} * 0.8)`, 
        opacity: 0.7,
        lineHeight: 1,
        marginTop: 2,
      }}>
        {dateRange}
      </span>
    </div>
  );
};

export default DiscountBadge;