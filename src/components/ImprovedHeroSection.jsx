import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ImprovedHeroSection.css';

/**
 * ImprovedHeroSection - Production-ready hero component
 * Features:
 * - Dual-tone gradient background (Deep Forest + Champagne)
 * - Balanced 50/50 layout (text + image)
 * - Accent color highlights on keywords
 * - Semi-transparent gradient overlay on image
 * - Partner logos grid with hover effects
 * - Fully responsive (mobile stacks vertically)
 * - WCAG AA+ accessibility (contrast, alt text, focus states)
 * - Interactive CTA button
 */
const ImprovedHeroSection = ({ heroImage, partnersLogos = [] }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImageLoaded(true);
  }, [heroImage]);

  return (
    <section className="improved-hero-section">
      {/* Dual-tone gradient background */}
      <div className="hero-bg-gradient" aria-hidden="true" />

      <div className="hero-container">
        {/* Left Column: Text Content */}
        <div className="hero-text-block">
          <div className="hero-content">
            {/* Main Heading with accent underline */}
            <h1 className="hero-heading">
              <span className="heading-word">Empowering</span>
              <span className="heading-word">Youth,</span>
              <span className="heading-accent">Building Futures</span>
              <div className="accent-underline" aria-hidden="true" />
            </h1>

            {/* Sub-heading: Shorter, scannable */}
            <p className="hero-subheading">
              Join us in creating positive change through{' '}
              <span className="highlight-accent">youth leadership</span> and{' '}
              <span className="highlight-accent">community engagement</span>
            </p>

            {/* CTA Button - Primary action */}
            <Link
              to="/contact"
              className="hero-cta-button"
              aria-label="Get Involved - Learn more about our initiatives"
            >
              Get Involved
              <span className="button-arrow" aria-hidden="true">
                →
              </span>
            </Link>

            {/* Partner Logos / Supporting Assets */}
            {partnersLogos.length > 0 && (
              <div className="partner-logos-container">
                <p className="partner-label">Our Partners</p>
                <div className="partner-logos-grid">
                  {partnersLogos.map((logo, index) => (
                    <a
                      key={index}
                      href={logo.link || '#'}
                      className="partner-logo-item"
                      aria-label={`${logo.alt || 'Partner logo'} - Opens in new window`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt || 'Partner logo'}
                        className="partner-logo-image"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Hero Image with Overlay */}
        <div className="hero-image-block">
          <div className="image-container">
            {/* Semi-transparent gradient overlay for readability */}
            <div className="image-overlay" aria-hidden="true" />

            <img
              src={heroImage}
              alt="Youth leaders and community members at YoNISeRD initiative"
              className={`hero-image ${imageLoaded ? 'loaded' : ''}`}
              loading="eager"
              decoding="async"
            />

            {/* Optional: Image caption - anchored within image area */}
            <div className="image-caption">
              <p>Youth leaders at community engagement initiative</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprovedHeroSection;
