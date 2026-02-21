import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimatedCounter Component
 * Animates numeric values from 0 to target when element scrolls into view
 * 
 * @param {string|number} target - Target value (e.g., "7+", "50", "75%")
 * @param {string} label - Label text displayed below the counter
 * @param {number} duration - Animation duration in milliseconds (default: 2000)
 * @param {string} className - Optional additional CSS classes
 */
const AnimatedCounter = ({ target, label, duration = 2000, className = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  // Intersection Observer: trigger animation when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  // Animation logic: count from 0 to target
  useEffect(() => {
    if (!isVisible) return;

    // Extract numeric part of target (e.g., "75%" → 75)
    const targetNumber = parseInt(target.toString().replace(/[^\d]/g, ''), 10);
    
    // Handle invalid numbers
    if (isNaN(targetNumber)) {
      setCount(target);
      return;
    }

    // Calculate increment per frame
    const increment = targetNumber / (duration / 50);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(interval);
      } else {
        // Add slight randomness for natural feel
        setCount(Math.floor(current) + (Math.random() > 0.7 ? 1 : 0));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  // Extract suffix (e.g., "+", "%")
  const suffix = target.toString().match(/[^0-9]/g)?.[0] || '';
  
  // Format count with suffix
  const displayValue = `${count}${suffix}`;

  return (
    <div 
      ref={elementRef}
      className={`text-center transition-opacity duration-600 ${isVisible ? 'opacity-100' : 'opacity-50'} ${className}`}
    >
      <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
        {displayValue}
      </div>
      <p className="text-white/80 text-base md:text-lg leading-relaxed">
        {label}
      </p>
    </div>
  );
};

export default AnimatedCounter;
