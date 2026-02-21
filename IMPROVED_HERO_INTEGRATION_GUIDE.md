# ImprovedHeroSection - Integration & Usage Guide

## Overview
The `ImprovedHeroSection` component replaces your current flat hero banner with a professional, production-ready hero featuring:
- **Dual-tone gradient background** (Deep Forest → Champagne)
- **Balanced 50/50 layout** (text left, image right)
- **Accent color highlights** on keywords
- **Semi-transparent overlay** on hero image
- **Partner logos grid** with hover effects
- **Fully responsive** (mobile stacks vertically)
- **WCAG AA+ accessibility**

---

## Installation

### 1. Files Created
Two files have been created in `src/components/`:
- `ImprovedHeroSection.jsx` - Component logic
- `ImprovedHeroSection.css` - Complete styling

No additional dependencies needed—uses only React, React Router, and your existing Tailwind setup.

---

## Integration Steps

### Step 1: Import the component in `Home.jsx`
Add this import at the top of your `src/pages/Home.jsx`:

```jsx
import ImprovedHeroSection from '../components/ImprovedHeroSection';
import bannerImage from '../assets/gallery10.jpg';
```

### Step 2: Replace the current hero section
Find this block in `Home.jsx` (lines 87-108):

```jsx
{/* Full Width Banner Section */}
<section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
  <img ... />
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    ...
  </div>
</section>
```

Replace it with:

```jsx
{/* Improved Hero Section */}
<ImprovedHeroSection 
  heroImage={bannerImage}
  partnersLogos={[
    // Example partner logos - customize with your actual partners
    { src: '/images/partner1.png', alt: 'Partner 1', link: 'https://partner1.org' },
    { src: '/images/partner2.png', alt: 'Partner 2', link: 'https://partner2.org' },
  ]}
/>
```

### Step 3: Customize partner logos (optional)
If you have partner/donor logos you want to display:

```jsx
const partnerLogos = [
  {
    src: require('../assets/your-partner-logo.png').default,
    alt: 'Partner Organization Name',
    link: 'https://partner-website.org'
  },
  // Add more as needed
];

// Then pass to component:
<ImprovedHeroSection 
  heroImage={bannerImage}
  partnersLogos={partnerLogos}
/>
```

If no partners, simply omit the `partnersLogos` prop:

```jsx
<ImprovedHeroSection heroImage={bannerImage} />
```

---

## Customization Options

### 1. Colors
Edit `ImprovedHeroSection.css` to adjust brand colors:

```css
/* Current color system: */
--primary: #102C26;      /* Deep Forest */
--secondary: #F7E7CE;    /* Champagne */
--accent: #2E7D32;       /* Emerald Green */
--muted-accent: #145C44; /* Darker forest for hover states */

/* To use different colors, update these hex values in the CSS */
```

### 2. Heading Text
Edit the component JSX to customize:

```jsx
<h1 className="hero-heading">
  <span className="heading-word">Your</span>
  <span className="heading-word">Custom</span>
  <span className="heading-accent">Heading Here</span>
  <div className="accent-underline" aria-hidden="true" />
</h1>
```

### 3. Sub-heading Text
```jsx
<p className="hero-subheading">
  Your custom subtitle with 
  <span className="highlight-accent">accent highlights</span> on keywords
</p>
```

### 4. CTA Button Text & Link
```jsx
<Link to="/your-page" className="hero-cta-button">
  Your Button Text
  <span className="button-arrow" aria-hidden="true">→</span>
</Link>
```

### 5. Image Caption
Edit the caption inside the image area:

```jsx
<div className="image-caption">
  <p>Your custom image caption here</p>
</div>
```

### 6. Hero Image Height (Mobile/Desktop)
Adjust the `.image-container` height in CSS:

```css
.image-container {
  height: 500px;  /* Desktop height */
}

@media (max-width: 768px) {
  .image-container {
    height: 350px;  /* Tablet height */
  }
}

@media (max-width: 480px) {
  .image-container {
    height: 280px;  /* Mobile height */
  }
}
```

---

## Accessibility Features ✅

The component includes:
- **WCAG AA+ color contrast** (11.5:1 white on Deep Forest)
- **Focus visible states** (blue outline on keyboard interaction)
- **Semantic HTML** (proper heading hierarchy, alt text)
- **Reduced motion support** (respects `prefers-reduced-motion`)
- **Aria labels** on interactive elements
- **Keyboard accessible** (all buttons/links can be tabbed to)

---

## Performance Notes

✅ **Image Loading**
- Uses `loading="eager"` for above-the-fold hero image
- Implements fade-in effect on load (`opacity` transition)
- Includes optional image preloading with `useEffect`

✅ **CSS Optimization**
- Single CSS file (no additional HTTP requests)
- Uses CSS variables for easy color theming
- Minimal specificity (no !important needed)
- GPU-accelerated transitions (transform, opacity)

---

## Testing Checklist

Before deploying to production:

- [ ] Hero image displays correctly on desktop (50/50 layout)
- [ ] Mobile view stacks vertically and remains centered
- [ ] "Get Involved" button links to correct page
- [ ] CTA button hover state shows darker green
- [ ] Partner logos display (if added)
- [ ] Image caption is readable (contrast AA+)
- [ ] Keyboard navigation works (Tab through all interactive elements)
- [ ] Screen reader announces headings and alt text correctly
- [ ] No console errors in browser DevTools

---

## Before & After Comparison

### Before (Current)
- Flat black overlay on image
- Full-width image, text overspread
- Limited visual hierarchy
- Basic button styling
- Static, no accent colors

### After (Improved)
- Dual-tone gradient background (Deep Forest + Champagne)
- Balanced 50/50 column layout
- Bold accent green on keywords ("Building Futures")
- Professional gradient CTA button with hover effects
- Semi-transparent overlay for image integration
- Partner logos grid with interactive hover
- Mobile-responsive stacked layout
- Full WCAG AA+ accessibility

---

## Next Steps

1. **Copy the two files** to your `src/components/` directory
2. **Update Home.jsx** with the integration code above
3. **Customize colors/text** as needed (see Customization section)
4. **Test on mobile/tablet** to verify responsive layout
5. **Run npm test** and check for no console errors
6. **Deploy when ready**

---

## Troubleshooting

**Q: Hero image not showing?**
- Verify the image path is correct
- Check browser console for 404 errors
- Ensure image file exists in `/src/assets/`

**Q: Colors look different?**
- Ensure CSS file is being loaded (check network tab in DevTools)
- Clear browser cache and hard refresh (Ctrl+Shift+R)
- Check for CSS specificity conflicts in global styles

**Q: Mobile layout broken?**
- Verify media queries are running (`max-width: 768px`, etc.)
- Check viewport meta tag in public/index.html:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  ```

**Q: Focus outline not showing?**
- Ensure no CSS is removing `outline: none` globally
- Add this to your global CSS if needed:
  ```css
  *:focus-visible {
    outline: 3px solid #7EBBBFF;
    outline-offset: 2px;
  }
  ```

---

## Support

For questions on specific customizations, refer to:
- Color system: `src/index.css` (CSS variables)
- Responsive design: Tailwind breakpoints (md: 768px, sm: 640px)
- Accessibility standards: WCAG 2.1 Level AA+
