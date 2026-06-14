'use client';

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'fade-in' | 'scale-in' | 'rotate-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean; // New prop to control continuous animations
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'slide-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  triggerOnce = false, // Default to continuous animations
}) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold, triggerOnce });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const durationClass = `duration-${duration}`;
    
    if (!isVisible) {
      switch (animation) {
        case 'slide-up':
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
        case 'slide-down':
          return `${baseClasses} ${durationClass} opacity-0 -translate-y-8`;
        case 'slide-left':
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`;
        case 'slide-right':
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`;
        case 'fade-in':
          return `${baseClasses} ${durationClass} opacity-0`;
        case 'scale-in':
          return `${baseClasses} ${durationClass} opacity-0 scale-95`;
        case 'rotate-in':
          return `${baseClasses} ${durationClass} opacity-0 rotate-3 scale-95`;
        default:
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;