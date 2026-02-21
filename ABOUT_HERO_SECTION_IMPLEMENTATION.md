# About Hero Section Implementation Guide

## Overview
The new `AboutHeroSection` component provides a production-ready, accessible, and visually engaging hero section for your About Us page. It includes:
- Interactive slideshow with auto-play
- Image captions with overlay
- Navigation arrows and dots
- Keyboard accessible controls
- Smooth fade transitions
- Auto-play indicator
- Slide counter
- Fully responsive design
- WCAG 2.1 AA compliant

## Features

### 1. **Interactive Slideshow**
- Auto-advances every 6 seconds
- Users can manually navigate with arrows or dots
- Manual navigation pauses auto-play, resumes after 1 second of inactivity
- Smooth fade transitions between slides

### 2. **Visual Captions**
- Dynamic caption display under each image
- Gradient overlay (black to transparent) for readability
- Hover effects on images

### 3. **Navigation Controls**
- **Previous/Next Arrows** – Large, easy-to-click SVG arrows
- **Navigation Dots** – Visual indicators with dot animation (active = extended dot)
- **Slide Counter** – Shows current slide / total slides (e.g., "1 / 3")

### 4. **Auto-Play Indicator**
- Subtle badge in top-right showing "Auto" (playing) or "Manual" (paused)
- Green pulsing dot when auto-playing

### 5. **Accessibility**
- Keyboard navigation support (arrow buttons are focusable)
- ARIA labels for all interactive elements
- Alt text for images
- Live region announcements
- Focus rings for keyboard navigation
- Respects `prefers-reduced-motion` for users with motion sensitivity

### 6. **Responsive Design**
- Mobile: h-80 (320px)
- Tablet: h-96 (384px)
- Desktop: h-[550px]
- Button sizes scale on mobile

---

## Integration Steps

### Step 1: Import the Component
In your About page (or any page using this hero section), add:

```jsx
import AboutHeroSection from '../components/AboutHeroSection';
```

### Step 2: Prepare Your Data
Create arrays for images and captions. Example:

```jsx
// In your component or constants file
const aboutSlides = {
  images: [
    require('../assets/health-awareness.jpg'),
    require('../assets/climate-action.jpg'),
    require('../assets/innovation-lab.jpg'),
  ],
  captions: [
    'Health Awareness Campaigns',
    'Youth Climate Champions',
    'Community Innovation Labs',
  ],
};
```

Or import from constants:

```jsx
const { ABOUT_SLIDES } = require('../constants');
```

### Step 3: Add Component to Your Page
Place it in your About page layout. Example placement in the current About.jsx:

```jsx
import AboutHeroSection from '../components/AboutHeroSection';

const About = () => {
  const aboutSlides = {
    images: [
      /* your image array */
    ],
    captions: [
      /* your caption array */
    ],
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Navigation */}
        <nav>...</nav>

        {/* NEW: About Hero Section - Add this */}
        <AboutHeroSection 
          images={aboutSlides.images}
          captions={aboutSlides.captions}
          containerHeight="h-80 sm:h-96 md:h-[550px]"
        />

        {/* Existing Mission & Vision Section */}
        <section id="mission">...</section>

        {/* Rest of your page */}
      </div>
    </Layout>
  );
};
```

### Step 4: Customize (Optional)

#### Change Slide Duration
In `AboutHeroSection.jsx`, modify the interval:

```jsx
6000, // Change this (in milliseconds). Default: 6 seconds
```

#### Change Container Height
Pass a different height class:

```jsx
<AboutHeroSection 
  images={aboutSlides.images}
  captions={aboutSlides.captions}
  containerHeight="h-96 sm:h-[600px] md:h-[700px]"
/>
```

#### Modify Colors
The component uses your existing color scheme (#102C26, #F7E7CE, blue-600). To customize:

1. Section background: Change `backgroundColor: '#F7E7CE'` in the component
2. Text colors: Modify `style={{ color: '#102C26' }}` 
3. Button colors: Update the Link components' Tailwind classes

#### Adjust Button Styling
The buttons are styled with Tailwind. To change:

```jsx
// Primary button (Learn our story)
<Link
  to="/about#mission"
  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
>
  Learn our story
</Link>

// Secondary button (Meet the leadership)
<Link
  to="/about#leadership"
  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-400 text-gray-700 font-bold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
>
  Meet the leadership →
</Link>
```

---

## Full Example Integration

Here's a complete example of how to integrate it into your About page:

```jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import AboutHeroSection from '../components/AboutHeroSection'; // NEW
import { ORG_INFO, CORE_VALUES, CEO_INFO } from '../constants';
import ceo from '../assets/ceo.png';
import managingDirector from '../assets/Managing Director.jpg';
import fieldOfficer from '../assets/Field Officer.jpg';

// NEW: Define your about slides
const aboutSlides = {
  images: [
    fieldOfficer,
    managingDirector,
    ceo,
    // Add more images as needed
  ],
  captions: [
    'Health Awareness Campaigns',
    'Youth Climate Champions',
    'Community Innovation Labs',
    // Add more captions matching your images
  ],
};

const About = () => {
  const [activeSection, setActiveSection] = useState('mission');

  useEffect(() => {
    // Existing scroll tracking code...
  }, []);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Existing Navigation */}
        <nav aria-label="Page sections navigation" className="sticky top-16 bg-white shadow-md z-40 hidden md:block">
          {/* ... existing code ... */}
        </nav>

        {/* NEW: About Hero Section - Add right here, before Mission & Vision */}
        <AboutHeroSection 
          images={aboutSlides.images}
          captions={aboutSlides.captions}
          containerHeight="h-80 sm:h-96 md:h-[550px]"
        />

        {/* Existing Mission & Vision Section */}
        <section id="mission" className="w-full" style={{ backgroundColor: '#F7E7CE', padding: '4rem 1rem' }}>
          {/* ... existing code ... */}
        </section>

        {/* Rest of your page... */}
      </div>
    </Layout>
  );
};

export default About;
```

---

## Adding to Constants (Optional)

For a cleaner setup, you can add the slides to your `constants.js`:

```javascript
// In src/constants/index.js or constants.js

export const ABOUT_SLIDES = {
  images: [
    require('../assets/health-awareness.jpg'),
    require('../assets/climate-action.jpg'),
    require('../assets/innovation-lab.jpg'),
  ],
  captions: [
    'Health Awareness Campaigns',
    'Youth Climate Champions',
    'Community Innovation Labs',
  ],
};
```

Then import it in your About page:

```jsx
import { ABOUT_SLIDES } from '../constants';

<AboutHeroSection 
  images={ABOUT_SLIDES.images}
  captions={ABOUT_SLIDES.captions}
/>
```

---

## Styling & Customization

### Color Scheme
The component respects your existing brand colors:
- Background: `#F7E7CE` (Cream)
- Text: `#102C26` (Dark teal)
- Buttons: Blue-600 (Tailwind default)

To adjust, modify in `AboutHeroSection.jsx`:

```jsx
style={{ backgroundColor: '#F7E7CE' }} // Change section background
style={{ color: '#102C26' }} // Change text color
className="... bg-blue-600 ..." // Change button color
```

### Animation Performance
The component uses CSS-based animations for optimal performance:
- Fade transitions: 700ms
- Button hover: 300ms
- All animations respect `prefers-reduced-motion`

### Responsive Breakpoints
- **Mobile** (default): Full-width, stacked layout
- **Tablet** (sm: 640px): Slight adjustments
- **Desktop** (lg: 1024px): Side-by-side layout with larger heights

---

## Accessibility Checklist

✅ **Keyboard Navigation**
- All buttons are focusable with Tab key
- Arrow keys would need custom handler (not auto-implemented)

✅ **Screen Reader Support**
- Image alt text provided
- ARIA labels on all buttons
- Live region for slide announcements

✅ **Color Contrast**
- Text on background: WCAG AA compliant
- Focus rings: Visible on all interactive elements

✅ **Motion**
- `prefers-reduced-motion` respected
- No flashing content

✅ **Touch Targets**
- Buttons sized 48px+ (mobile-friendly)
- Dots responsive to touch

---

## Troubleshooting

### Images not showing
1. Verify image paths are correct
2. Check that image imports match asset filenames
3. Ensure images exist in `src/assets/`

### Captions not appearing
1. Verify `captions` array matches `images` array length
2. Check caption text isn't empty

### Buttons not linking
1. Verify `react-router-dom` is imported
2. Ensure routes exist for `#mission` and `#leadership`
3. Check IDs in your page sections match link hashes

### Auto-play not working
1. Check browser console for JavaScript errors
2. Verify `isAutoPlay` state is being updated
3. Ensure interval isn't being cleared prematurely

### Animations not visible
1. Check `prefers-reduced-motion` in system settings
2. Verify browser supports CSS animations
3. Clear browser cache and reload

---

## Performance Considerations

- **Image Optimization**: Use compressed/optimized images (WebP format recommended)
- **Lazy Loading**: Images use `loading="lazy"` for performance
- **Memory**: Only one image is visible at a time (others hidden with `opacity-0`)
- **CPU**: CSS transitions instead of JavaScript animations reduce CPU usage

---

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## Next Steps

1. **Add your images**: Update `aboutSlides.images` with your actual images
2. **Write captions**: Create descriptive captions for each image
3. **Test on mobile**: Ensure layout looks good on all devices
4. **Gather feedback**: Test with users and stakeholders

---

## Questions?

Refer to the component source code in `src/components/AboutHeroSection.jsx` for detailed comments and implementation notes.
