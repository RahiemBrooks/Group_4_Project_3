import React, { useState } from 'react';

const Hover = ({children,tooltip}) => {
    const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handleMouseEnter = (e) => {
    const left = e.clientX + 'px';
    const top = e.clientY + 'px';
    setPosition({ left, top });
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };
  return (
    <div
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{ position: 'relative' }}
  >
    {children}
    {isVisible && (
      <div
        id="your-div-id"
        style={{
          position: 'absolute',
          left: position.left,
          top: position.top,
          display: 'block',
        }}
      >
        {/* Your content goes here */}
        This is your hoverable div
      </div>
    )}
  </div>

  )
}

export default Hover