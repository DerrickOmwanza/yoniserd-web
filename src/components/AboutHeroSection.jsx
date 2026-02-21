import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';

const AboutHeroSection = ({
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
      }, 6000); // 6 seconds per slide
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
      className="w-full py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: '#F7E7CE' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-6 md:mb-8 animate-fadeIn">
          <p className="text-sm md:text-base font-bold uppercase tracking-widest mb-3" style={{ color: '#102C26' }}>
            Our Foundation
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center space-y-6 animate-slideInLeft">
            {/* Main Heading */}
            <div>
              <h1 
                className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4 transition-all duration-500"
                style={{ color: '#102C26' }}
              >
                Research-driven programs
                <br />
                rooted in community insight
              </h1>
              <p 
                className="text-lg md:text-xl font-semibold italic opacity-75 mb-6"
                style={{ color: '#102C26' }}
              >
                Creating measurable, meaningful impact
              </p>
            </div>

            {/* Body Text */}
            <p 
              className="text-lg leading-relaxed opacity-90"
              style={{ color: '#102C26' }}
            >
              We work alongside local partners to co-design initiatives that respond to the priorities of children, young women, and grassroots innovators. Our approach blends rigorous research with <span className="font-bold text-blue-600">human-centered design</span> so impact is measurable—and meaningful.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/about#mission"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Learn our story"
              >
                Learn our story
              </Link>
              <Link
                to="/about#leadership"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-400 text-gray-700 font-bold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Meet the leadership team"
              >
                Meet the leadership
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Slideshow */}
          <div className="relative animate-slideInRight">
            {/* Slideshow Container */}
            <div
              className={`relative overflow-hidden rounded-2xl shadow-2xl ${containerHeight} bg-gray-200`}
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
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}

              {/* Caption Display */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8 text-white transform transition-all duration-300">
                <p className="text-xl md:text-2xl font-bold leading-tight">
                  {captions[currentIndex] || `Slide ${currentIndex + 1}`}
                </p>
              </div>

              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white z-20"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white z-20"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Autoplay Indicator (subtle) */}
              <div className="absolute top-6 right-6 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full flex items-center gap-1 z-10 font-semibold">
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
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 ${
                    index === currentIndex
                      ? 'w-10 h-3 bg-blue-600'
                      : 'w-3 h-3 bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4 md:mt-6">
              <p className="text-sm font-semibold opacity-75" style={{ color: '#102C26' }}>
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

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out 0.1s backwards;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn,
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
      `}</style>
    </section>
  );
};

export default AboutHeroSection;
