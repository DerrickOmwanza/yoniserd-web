# About Hero Section - Code Examples

## Example 1: Basic Integration (3 Images)

```jsx
import React, { useState } from 'react';
import Layout from '../components/Layout';
import AboutHeroSection from '../components/AboutHeroSection';

// Import your images
import healthCampaign from '../assets/health-campaign.jpg';
import climateAction from '../assets/climate-action.jpg';
import innovationLab from '../assets/innovation-lab.jpg';

const About = () => {
  // Prepare slideshow data
  const aboutSlides = {
    images: [healthCampaign, climateAction, innovationLab],
    captions: [
      'Health Awareness Campaigns',
      'Youth Climate Champions',
      'Community Innovation Labs',
    ],
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Add the hero section */}
        <AboutHeroSection 
          images={aboutSlides.images}
          captions={aboutSlides.captions}
          containerHeight="h-80 sm:h-96 md:h-[550px]"
        />

        {/* Your existing sections continue below */}
        <section id="mission">
          {/* Mission & Vision content */}
        </section>
      </div>
    </Layout>
  );
};

export default About;
```

---

## Example 2: Using Existing Assets

```jsx
// If you want to use existing images from your About page
import ceo from '../assets/ceo.png';
import managingDirector from '../assets/Managing Director.jpg';
import fieldOfficer from '../assets/Field Officer.jpg';
import AboutHeroSection from '../components/AboutHeroSection';

const About = () => {
  const aboutSlides = {
    images: [fieldOfficer, managingDirector, ceo],
    captions: [
      'Community Engagement - Field Officers at Work',
      'Leadership - Managing Director Addressing Team',
      'Vision - CEO Presenting Strategic Direction',
    ],
  };

  return (
    <Layout>
      <AboutHeroSection 
        images={aboutSlides.images}
        captions={aboutSlides.captions}
      />
      {/* Rest of page */}
    </Layout>
  );
};
```

---

## Example 3: From Constants File

```jsx
// In src/constants/index.js
export const ABOUT_SLIDES = {
  images: [
    require('../assets/slide1.jpg'),
    require('../assets/slide2.jpg'),
    require('../assets/slide3.jpg'),
    require('../assets/slide4.jpg'),
  ],
  captions: [
    'Empowering Youth Through Education',
    'Building Community Partnerships',
    'Creating Economic Opportunities',
    'Sustainable Development Impact',
  ],
};

// In your About.jsx
import { ABOUT_SLIDES } from '../constants';
import AboutHeroSection from '../components/AboutHeroSection';

const About = () => {
  return (
    <Layout>
      <AboutHeroSection 
        images={ABOUT_SLIDES.images}
        captions={ABOUT_SLIDES.captions}
      />
      {/* Rest of page */}
    </Layout>
  );
};
```

---

## Example 4: Custom Container Height

```jsx
// Larger slideshow for landing page emphasis
<AboutHeroSection 
  images={aboutSlides.images}
  captions={aboutSlides.captions}
  containerHeight="h-96 sm:h-[500px] md:h-[700px]"
/>

// Smaller slideshow for sidebar/secondary use
<AboutHeroSection 
  images={aboutSlides.images}
  captions={aboutSlides.captions}
  containerHeight="h-64 sm:h-80 md:h-96"
/>
```

---

## Example 5: Customizing Button Routes

If you want different link destinations, modify the component:

```jsx
// In AboutHeroSection.jsx, update the Link components:

// Original:
<Link to="/about#mission">Learn our story</Link>
<Link to="/about#leadership">Meet the leadership →</Link>

// Custom example:
<Link to="/programs">Explore Our Programs</Link>
<Link to="/contact">Get Involved →</Link>
```

---

## Example 6: Full About Page Integration

```jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import AboutHeroSection from '../components/AboutHeroSection';
import { ORG_INFO, CORE_VALUES } from '../constants';

// Import images
import fieldOfficer from '../assets/Field Officer.jpg';
import managingDirector from '../assets/Managing Director.jpg';
import ceo from '../assets/ceo.png';

const About = () => {
  const [activeSection, setActiveSection] = useState('mission');

  // Prepare slides
  const aboutSlides = {
    images: [fieldOfficer, managingDirector, ceo],
    captions: [
      'Community-Centered Approach',
      'Youth Empowerment in Action',
      'Strategic Leadership Vision',
    ],
  };

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['mission', 'ceo', 'leadership'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Navigation Tabs */}
        <nav aria-label="Page sections" className="sticky top-16 bg-white shadow-md z-40 hidden md:block">
          <div className="flex justify-center px-4 py-0">
            <div className="flex gap-8 overflow-x-auto">
              {[
                { label: 'Mission & Vision', id: 'mission' },
                { label: 'CEO Message', id: 'ceo' },
                { label: 'Leadership Team', id: 'leadership' },
              ].map(section => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`py-4 px-3 font-semibold text-sm border-b-3 ${
                    activeSection === section.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* NEW: About Hero Section */}
        <AboutHeroSection 
          images={aboutSlides.images}
          captions={aboutSlides.captions}
          containerHeight="h-80 sm:h-96 md:h-[550px]"
        />

        {/* Mission & Vision Section */}
        <section id="mission" className="py-16 bg-cream">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-12 text-center text-dark-teal">
              Mission & Vision
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="rounded-xl p-10 bg-white shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-dark-teal">Our Mission</h2>
                <p className="text-lg leading-relaxed text-dark-teal">
                  {ORG_INFO.mission}
                </p>
              </div>

              <div className="rounded-xl p-10 bg-white shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-dark-teal">Our Vision</h2>
                <p className="text-lg leading-relaxed text-dark-teal">
                  {ORG_INFO.vision}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section id="ceo" className="py-16 bg-light-blue">
          {/* CEO content */}
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-16 bg-light-purple">
          {/* Leadership content */}
        </section>
      </div>
    </Layout>
  );
};

export default About;
```

---

## Example 7: Dynamic Images from API

If you fetch images from an API or CMS:

```jsx
const About = () => {
  const [slides, setSlides] = useState({ images: [], captions: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from your API
    fetch('/api/about-slides')
      .then(res => res.json())
      .then(data => {
        setSlides({
          images: data.images,
          captions: data.captions,
        });
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Layout>
      <AboutHeroSection 
        images={slides.images}
        captions={slides.captions}
      />
      {/* Rest of page */}
    </Layout>
  );
};
```

---

## Example 8: Styling Customization

To customize colors/appearance, modify the component:

```jsx
// In AboutHeroSection.jsx

// Change background color
<section style={{ backgroundColor: '#F7E7CE' }}>
  {/* Change to: */}
  {/* style={{ backgroundColor: '#ffffff' }} for white */}
  {/* style={{ backgroundColor: '#f3f4f6' }} for light gray */}
  {/* style={{ backgroundColor: '#dbeafe' }} for light blue */}
</section>

// Change text color
style={{ color: '#102C26' }}
// Change to:
// style={{ color: '#ffffff' }} for white
// style={{ color: '#1f2937' }} for dark gray
// style={{ color: '#0f766e' }} for teal

// Change button colors
className="... bg-blue-600 ..." // Primary button
className="... border-gray-400 text-gray-700 ..." // Secondary button
```

---

## Example 9: Adding More Images (More Than 3)

```jsx
const aboutSlides = {
  images: [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ],
  captions: [
    'Health Awareness Campaigns',
    'Youth Climate Champions',
    'Community Innovation Labs',
    'Economic Empowerment Programs',
    'Education & Mentorship',
    'Research & Development',
  ],
};

// The component automatically handles any number of images
// Navigation dots adjust accordingly
```

---

## Example 10: Integrating Existing About Page (Real Code)

```jsx
// Original About.jsx structure with new component added

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import AboutHeroSection from '../components/AboutHeroSection';
import { ORG_INFO, CORE_VALUES, CEO_INFO } from '../constants';
import ceo from '../assets/ceo.png';
import managingDirector from '../assets/Managing Director.jpg';
import fieldOfficer from '../assets/Field Officer.jpg';

const About = () => {
  const [activeSection, setActiveSection] = useState('mission');

  // ADD THIS OBJECT
  const aboutSlides = {
    images: [fieldOfficer, managingDirector, ceo],
    captions: [
      'Health Awareness Campaigns',
      'Youth Climate Champions',
      'Community Innovation Labs',
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      // ... existing code ...
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Existing Navigation */}
        <nav aria-label="Page sections navigation" className="sticky top-16 bg-white shadow-md z-40 hidden md:block">
          {/* ... existing nav code ... */}
        </nav>

        {/* ADD THIS COMPONENT HERE */}
        <AboutHeroSection 
          images={aboutSlides.images}
          captions={aboutSlides.captions}
          containerHeight="h-80 sm:h-96 md:h-[550px]"
        />

        {/* Keep all existing sections below unchanged */}
        <section id="mission" aria-label="Mission and Vision statements" className="w-full">
          {/* ... existing mission code ... */}
        </section>

        {/* All other sections remain the same */}
        {/* ... rest of your page ... */}
      </div>
    </Layout>
  );
};

export default About;
```

---

## Common Modifications

### Change Auto-Play Duration
**File**: `src/components/AboutHeroSection.jsx`
**Line**: ~20
```jsx
// Current (6 seconds):
}, 6000);

// Change to 10 seconds:
}, 10000);

// Change to 4 seconds:
}, 4000);
```

### Change Container Height
```jsx
// Small (hero)
containerHeight="h-64 sm:h-80 md:h-96"

// Medium (default)
containerHeight="h-80 sm:h-96 md:h-[550px]"

// Large (full height emphasis)
containerHeight="h-96 sm:h-[600px] md:h-[700px]"
```

### Hide Auto-Play Badge
In `AboutHeroSection.jsx`, find and comment out:
```jsx
{/* <div className="absolute top-6 right-6 ...">... */}
```

### Change Button Text
In `AboutHeroSection.jsx`:
```jsx
<Link ...>Learn our story</Link>
// Change to:
<Link ...>Read Our Story</Link>

<Link ...>Meet the leadership →</Link>
// Change to:
<Link ...>Our Leadership Team →</Link>
```

---

## Summary

These examples cover:
- ✅ Basic 3-image setup
- ✅ Using existing assets
- ✅ Constants-based configuration
- ✅ Custom sizing
- ✅ Custom routes
- ✅ Full page integration
- ✅ Dynamic/API-based images
- ✅ Styling customization
- ✅ Multiple images (4+)
- ✅ Real codebase integration

Choose the example that best matches your use case and adapt as needed.
