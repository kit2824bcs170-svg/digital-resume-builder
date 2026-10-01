import React, { useEffect, useState } from 'react';

/**
 * AnimatedCounter
 * Smoothly animates numbers from 0 to value on mount with easeOutExpo
 */
const AnimatedCounter = ({ value = 0, duration = 1200, prefix = '', suffix = '', decimals = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const target = Number(value) || 0;
    if (target === 0) {
      setDisplayValue(0);
      return;
    }

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = eased * target;
      
      setDisplayValue(decimals > 0 ? current.toFixed(decimals) : Math.floor(current));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration, decimals]);

  return (
    <span>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
