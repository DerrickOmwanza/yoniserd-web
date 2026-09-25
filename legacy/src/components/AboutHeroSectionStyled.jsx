import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';

const AboutHeroSectionStyled = ({
  images = [],
  captions = [],
  containerHeight = "h-80 sm:h-96 md:h-[550px]"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timerRef = useRef(null);
  const totalSlides = useMemo(() => images.length, [images.length]);

  // Reset and start timer
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (isAutoPlay) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((current) => (current + 1) % totalSlides);
      }, 6000);
    }
  }, [totalSlides, isAutoPlay]);

  // Auto-advance slides
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer]);

  const goToNext = useCallback(() => {
    setIsAutoPlay(false);
    setCurrentIndex((current) => (current + 1) % totalSlides);
    setTimeout(() => setIsAutoPlay(true), 1000);
  }, [totalSlides]);

  const goToPrevious = useCallback(() => {
    setIsAutoPlay(false);
    setCurrentIndex((current) => (current - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAutoPlay(true), 1000);
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlay(true), 1000);
  }, []);

  if (!images.length) return null;

  return (
    <section 
      aria-label="About Us with visual slideshow"
      className="w-full"
      style={{
        background: 'linear-gradient(to right, var(--champagne) 0%, var(--champagne) 50%, var(--forest-dark) 50%, var(--forest-dark) 100%)',
        padding: '3rem 0'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center space-y-6 animate-slideInLeft py-8 lg:py-0">
            {/* Section Label */}
            <div>
              <p className="text-sm md:text-base font-bold uppercase tracking-widest mb-4 transition-all duration-500" style={{ color: 'var(--forest-dark)' }}>
                Our Foundation
              </p>
            </div>

            {/* Main Heading */}
            <div>
              <h1 
                className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4 transition-all duration-500"
                style={{ color: 'var(--forest-dark)' }}
              >
                Research-driven programs
                <br />
                rooted in community insight
              </h1>
              <p 
                className="text-lg md:text-xl font-semibold italic opacity-80 mb-6"
                style={{ color: 'var(--forest)' }}
              >
                Creating measurable, meaningful impact
              </p>
            </div>

            {/* Body Text */}
            <p 
              className="text-lg leading-relaxed opacity-95"
              style={{ color: 'var(--forest-dark)' }}
            >
              We work alongside local partners to co-design initiatives that respond to the priorities of children, young women, and grassroots innovators. Our approach blends rigorous research with{' '}
              <span className="font-bold" style={{ color: 'var(--forest-mid)' }}>
                human-centered design
              </span>{' '}
              so impact is measurable—and meaningful.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/about#mission"
                className="inline-flex items-center justify-center px-8 py-4 font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 text-white"
                style={{
                  backgroundColor: 'var(--forest-dark)',
                  color: 'var(--white)',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--forest)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--forest-dark)'}
                aria-label="Learn our story"
              >
                Learn our story
              </Link>
              <Link
                to="/about#leadership"
                className="inline-flex items-center justify-center px-8 py-4 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4"
                style={{
                  backgroundColor: 'var(--champagne)',
                  color: 'var(--forest-dark)',
                  border: '2px solid var(--forest-dark)',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--champagne-hover)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--champagne)'}
                aria-label="Meet the leadership team"
              >
                Meet the leadership
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Slideshow */}
          <div className="relative animate-slideInRight py-8 lg:py-0">
            {/* Slideshow Container */}
            <div
              className={`relative overflow-hidden rounded-2xl shadow-2xl ${containerHeight} bg-gray-900`}
              role="region"
              aria-label="About Us image slideshow"
              aria-live="polite"
            >
              {/* Slides */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  role="img"
                  aria-label={captions[index] || `Slide ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={captions[index] || `About slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Deep Forest Overlay Gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(16, 44, 38, 0.6))' }}
                  ></div>
                </div>
              ))}

              {/* Caption Display with Enhanced Overlay for Maximum Clarity */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform transition-all duration-300"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.6) 70%, transparent 100%)',
                  paddingTop: '4rem',
                  paddingBottom: '2rem'
                }}
              >
                <p 
                  className="text-2xl md:text-3xl font-bold leading-tight"
                  style={{
                    color: 'var(--white)',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.7), 0 4px 12px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '0.5px'
                  }}
                >
                  {captions[currentIndex] || `Slide ${currentIndex + 1}`}
                </p>
              </div>

              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white z-20"
                style={{
                  backgroundColor: 'rgba(16, 44, 38, 0.4)',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(16, 44, 38, 0.7)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(16, 44, 38, 0.4)'}
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white z-20"
                style={{
                  backgroundColor: 'rgba(16, 44, 38, 0.4)',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(16, 44, 38, 0.7)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(16, 44, 38, 0.4)'}
                aria-label="Next image"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Autoplay Indicator */}
              <div 
                className="absolute top-6 right-6 px-3 py-1.5 text-white text-xs rounded-full flex items-center gap-1 z-10 font-semibold backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(16, 44, 38, 0.6)',
                }}
              >
                <span className={`inline-block w-2 h-2 rounded-full ${isAutoPlay ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></span>
                {isAutoPlay ? 'Auto' : 'Manual'}
              </div>
            </div>

            {/* Navigation Dots */}
            <div 
              className="flex justify-center gap-2 mt-6 md:mt-8"
              role="tablist"
              aria-label="Slideshow navigation"
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to slide ${index + 1}`}
                  className="transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{
                    width: index === currentIndex ? '2.5rem' : '0.75rem',
                    height: '0.75rem',
                    backgroundColor: index === currentIndex ? 'var(--forest-dark)' : 'var(--gray-slate-light)'
                  }}
                  onMouseEnter={(e) => !e.target.style.width && (e.target.style.backgroundColor = 'var(--gray-slate-dark)')}
                  onMouseLeave={(e) => !e.target.style.width && (e.target.style.backgroundColor = 'var(--gray-slate-light)')}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4 md:mt-6">
              <p className="text-sm font-semibold opacity-75" style={{ color: 'var(--forest-dark)' }}>
                {currentIndex + 1} <span className="opacity-50">/ {totalSlides}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out 0.1s backwards;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-slideInLeft,
          .animate-slideInRight,
          button,
          div {
            animation: none;
            transition: none;
          }
        }

        /* Focus visible for accessibility */
        button:focus-visible {
          outline: none;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 1024px) {
          section {
            background: var(--champagne) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHeroSectionStyled;
