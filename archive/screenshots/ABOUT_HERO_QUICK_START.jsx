/**
 * QUICK START: Copy this code snippet into your About.jsx
 * 
 * This is a minimal working example to add the AboutHeroSection
 * to your existing About page.
 */

// Step 1: Add this import at the top of your About.jsx
import AboutHeroSection from '../components/AboutHeroSection';

// Step 2: Add this data object near the top of your About component
// You'll need to import your actual images or use the ones you have
const aboutSlides = {
  images: [
    // Replace with your actual image imports
    // Example: require('../assets/campaign1.jpg'),
    fieldOfficer,      // From your existing imports
    managingDirector,  // From your existing imports
    ceo,               // From your existing imports
  ],
  captions: [
    'Health Awareness Campaigns',
    'Youth Climate Champions', 
    'Community Innovation Labs',
  ],
};

// Step 3: Add this JSX inside your <Layout> component, 
// BEFORE the existing Mission & Vision section
const AboutPage = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Navigation stays as is */}
        {/* ... existing nav code ... */}

        {/* ADD THIS COMPONENT RIGHT HERE */}
        <AboutHeroSection 
          images={aboutSlides.images}
          captions={aboutSlides.captions}
          containerHeight="h-80 sm:h-96 md:h-[550px]"
        />

        {/* Then keep your existing Mission & Vision section */}
        <section id="mission" aria-label="Mission and Vision statements" className="w-full">
          {/* ... existing mission code ... */}
        </section>

        {/* Rest of your page continues as normal */}
      </div>
    </Layout>
  );
};

// ============================================================
// THAT'S IT! The component handles everything else:
// ============================================================
// ✅ Auto-playing slideshow (6 seconds per slide)
// ✅ Manual navigation (previous/next buttons)
// ✅ Dot navigation (click to jump to slide)
// ✅ Image captions with overlay
// ✅ Keyboard accessible
// ✅ Mobile responsive
// ✅ Auto-play indicator
// ✅ Slide counter
// ✅ Smooth fade transitions
// ✅ Focus visible on all buttons

// ============================================================
// OPTIONAL: Customize the appearance
// ============================================================

// Change slide duration (in milliseconds):
// Open AboutHeroSection.jsx and find this line:
// }, 6000); // Change 6000 to your preferred duration

// Change container height:
// <AboutHeroSection 
//   images={aboutSlides.images}
//   captions={aboutSlides.captions}
//   containerHeight="h-96 sm:h-[600px] md:h-[700px]"  // Customize this
// />

// Change button links:
// In AboutHeroSection.jsx, find the Link components and update:
// to="/about#mission"      // Change this route
// to="/about#leadership"   // And this one

// ============================================================
// FULL MINIMAL EXAMPLE (Copy entire component below)
// ============================================================

/**
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import AboutHeroSection from '../components/AboutHeroSection';
import { ORG_INFO, CORE_VALUES, CEO_INFO } from '../constants';
import ceo from '../assets/ceo.png';
import managingDirector from '../assets/Managing Director.jpg';
import fieldOfficer from '../assets/Field Officer.jpg';

const About = () => {
  const aboutSlides = {
    images: [
      fieldOfficer,
      managingDirector,
      ceo,
    ],
    captions: [
      'Health Awareness Campaigns',
      'Youth Climate Champions',
      'Community Innovation Labs',
    ],
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <AboutHeroSection 
          images={aboutSlides.images}
          captions={aboutSlides.captions}
          containerHeight="h-80 sm:h-96 md:h-[550px]"
        />

        {/* Rest of your existing About page code */}
      </div>
    </Layout>
  );
};

export default About;
*/
