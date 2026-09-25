# Homepage Design System - Implementation Checklist

**Goal**: Unify entire homepage with consistent color, layout, and typography  
**Time**: 2-3 hours for full implementation  
**Difficulty**: Easy (copy/paste CSS classes, no component rewrites)  

---

## Phase 1: Setup (10 minutes)

- [ ] Copy `src/styles/HomepageDesignSystem.css` file to your project
- [ ] Add import to `src/index.css`:
  ```css
  @import './styles/HomepageDesignSystem.css';
  ```
- [ ] Run `npm start` and verify no CSS errors in console
- [ ] Open DevTools and confirm CSS variables are available

---

## Phase 2: Hero Section (Already Complete ✅)

**File**: `src/components/ImprovedHeroSection.jsx`

- [x] Background uses gradient (Deep Forest → Champagne)
- [x] Layout is 50/50 split (text left, image right)
- [x] Heading has accent green color and underline
- [x] Button styled as primary (green background, white text)
- [x] Image has semi-transparent overlay
- [x] Caption anchored within image area

**Status**: ✅ No changes needed

---

## Phase 3: Other Sections (Apply CSS Classes)

### Section 2: Youth Leadership Section
**File**: `src/components/YouthLeadershipSection.jsx`

**Changes**:
- [ ] Add `section-padded section-bg-champagne` to wrapper div
- [ ] Add `split-container` to main layout div
- [ ] Add `section-title with-accent` to heading (h2/h3)
- [ ] Add `section-subtitle` to subtitle paragraph
- [ ] Add `section-body` to body text
- [ ] Add `btn-primary` to CTA button
- [ ] Verify background is Champagne (#F7E7CE)
- [ ] Verify layout is 50/50 (text left, image right)
- [ ] Test responsive at 768px width

**Visual Check**:
- [ ] Section background is warm champagne color
- [ ] Text and image are balanced side-by-side
- [ ] Heading has green underline
- [ ] Button is green with white text
- [ ] Mobile: content stacks vertically

---

### Section 3: About/Hero Section (AboutHeroSectionStyled)
**File**: `src/components/AboutHeroSectionStyled.jsx`

**Changes**:
- [ ] Add `section-padded section-bg-white` to wrapper
- [ ] Add `split-container-60-40` to layout (text 60%, image 40%)
- [ ] Add `section-title` to heading
- [ ] Add `split-image` class to image container
- [ ] Add image caption inside image div:
  ```html
  <div class="image-caption">
    <p>Your caption text here</p>
  </div>
  ```
- [ ] Add `btn-secondary` to CTA button
- [ ] Verify background is white
- [ ] Verify 60/40 split

**Visual Check**:
- [ ] Background is clean white
- [ ] Text is on left (60% width)
- [ ] Image is on right (40% width)
- [ ] Caption visible at bottom of image
- [ ] Button styled with champagne background

---

### Section 4: Program Highlights
**File**: `src/pages/Home.jsx` (lines 121-149)

**Current Code**:
```jsx
<section className="py-16 md:py-20" style={{ backgroundColor: '#F7E7CE' }}>
  <div className="max-w-5xl mx-auto px-4">
    {/* Grid of program cards */}
  </div>
</section>
```

**Changes**:
- [ ] Replace inline styles with `section-padded section-bg-champagne`
- [ ] Replace `max-w-5xl mx-auto px-4` with `container-max`
- [ ] Replace heading className with `section-title text-center`
- [ ] Replace grid className with `card-grid-3`
- [ ] Add `card card-champagne` to each program card div
- [ ] Add `card-title` class to h3 elements
- [ ] Add `card-description` class to p elements
- [ ] Add `card-link` class to Link elements

**Before**:
```jsx
<section className="py-16 md:py-20" style={{ backgroundColor: '#F7E7CE' }}>
  <div className="max-w-5xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
      <p className="text-lg max-w-2xl mx-auto leading-relaxed">Description</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="program-card rounded-xl p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-3">Program Name</h3>
        <p className="text-base leading-relaxed mb-6">Description</p>
        <Link className="inline-flex items-center font-semibold text-brand-accent">Learn more →</Link>
      </div>
    </div>
  </div>
</section>
```

**After**:
```jsx
<section className="section-padded section-bg-champagne">
  <div className="container-max">
    <div className="text-center mb-12">
      <h2 className="section-title text-center">What We Do</h2>
      <p className="section-subtitle">Description</p>
    </div>
    <div className="card-grid-3">
      <div className="card card-champagne">
        <h3 className="card-title">Program Name</h3>
        <p className="card-description">Description</p>
        <Link className="card-link">Learn more →</Link>
      </div>
    </div>
  </div>
</section>
```

**Visual Check**:
- [ ] Background is champagne
- [ ] Cards have consistent styling
- [ ] Heading is large and bold
- [ ] Spacing is consistent between cards
- [ ] Links are styled in green

---

### Section 5: Impact Metrics
**File**: `src/components/OptimizedImpactMetrics.jsx`

**Changes**:
- [ ] Add `section-padded section-bg-white` to wrapper
- [ ] Add `container-max` to main container
- [ ] Add `section-title text-center` to heading
- [ ] Replace grid with `card-grid-3`
- [ ] Add `metric-card` class to each metric
- [ ] Add `metric-value` class to stat numbers
- [ ] Add `metric-label` class to labels
- [ ] Add `btn-primary mt-lg` to "Partner With Us" button
- [ ] Verify button is visible and prominent below metrics

**Before**:
```jsx
<section className="py-20">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="text-5xl font-extrabold text-green-700">7+</div>
        <p className="text-sm uppercase mt-4">Years of youth impact</p>
      </div>
    </div>
  </div>
</section>
```

**After**:
```jsx
<section className="section-padded section-bg-white">
  <div className="container-max">
    <h2 className="section-title text-center">Our Impact</h2>
    <div className="card-grid-3">
      <div className="metric-card">
        <div className="metric-value">7+</div>
        <p className="metric-label">Years of youth impact</p>
      </div>
    </div>
    <div className="flex-center mt-lg">
      <a href="/contact" className="btn-primary">Partner With Us</a>
    </div>
  </div>
</section>
```

**Visual Check**:
- [ ] Background is white
- [ ] Metric cards have champagne background
- [ ] Numbers are large and bold (green)
- [ ] Labels are small and uppercase
- [ ] "Partner With Us" button is visible below
- [ ] Button is green (primary color)
- [ ] Hover effect works (darker green)

---

### Section 6: Latest Stories
**File**: `src/pages/Home.jsx` (lines 157-190)

**Changes**:
- [ ] Add `section-padded section-bg-light` to wrapper
- [ ] Replace `max-w-6xl mx-auto` with `container-max`
- [ ] Style header with flex + title:
  ```jsx
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
    <div>
      <p className="section-label">Latest stories</p>
      <h2 className="section-title">Youth-led change that inspires</h2>
    </div>
    <Link to="/our-work" className="btn-secondary">View all stories →</Link>
  </div>
  ```
- [ ] Replace grid with `square-card-grid`
- [ ] Add `story-card` to card divs
- [ ] Add `story-tag` to tag spans
- [ ] Add `story-title` to h3 elements
- [ ] Add `story-excerpt` to p elements
- [ ] Add `card-link` to link elements

**Before**:
```jsx
<section className="section-padded bg-light">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row gap-6 mb-12">
      <div>
        <h2 className="section-title">Latest stories</h2>
      </div>
      <Link to="/our-work" className="btn-alt">View all stories</Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="story-card bg-white rounded-lg">
        <span className="badge bg-green text-white">Our Work</span>
        <h3 className="text-lg font-bold">Story Title</h3>
        <p className="text-sm text-gray-600">Excerpt here</p>
        <Link className="inline-flex items-center text-green">Keep reading →</Link>
      </div>
    </div>
  </div>
</section>
```

**After**:
```jsx
<section className="section-padded section-bg-light">
  <div className="container-max">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
      <div>
        <p className="section-label">Latest stories</p>
        <h2 className="section-title">Youth-led change that inspires</h2>
      </div>
      <Link to="/our-work" className="btn-secondary">View all stories →</Link>
    </div>
    <div className="square-card-grid">
      <div className="story-card">
        <span className="story-tag">Our Work</span>
        <h3 className="story-title">Story Title</h3>
        <p className="story-excerpt">Excerpt here</p>
        <Link className="card-link">Keep reading →</Link>
      </div>
    </div>
  </div>
</section>
```

**Visual Check**:
- [ ] Background is light gray
- [ ] Cards are square (1:1 aspect ratio)
- [ ] Tag is green with white text
- [ ] Title is bold and dark
- [ ] Excerpt is smaller and muted
- [ ] Link is green
- [ ] "View all stories" button styled consistently
- [ ] Responsive: 3 cols (desktop), 1-2 (mobile)

---

### Section 7: Values/Principles
**File**: `src/pages/Home.jsx` (lines 193-199)

**Changes**:
- [ ] Add `section-padded section-bg-champagne` to wrapper
- [ ] Add `container-max text-center` to container
- [ ] Add section header:
  ```jsx
  <p className="section-label">Values</p>
  <h2 className="section-title">Principles that anchor every partnership</h2>
  ```
- [ ] Replace grid with `card-grid-4`
- [ ] Add `card card-champagne` to each value card
- [ ] Add `card-title` to headings
- [ ] Add `card-description` to descriptions

**Visual Check**:
- [ ] Background is champagne
- [ ] Cards arranged in 4-column grid
- [ ] Hover effect works (scale + shadow)
- [ ] Responsive: grid collapses on mobile
- [ ] Spacing consistent

---

### Section 8: Final CTA
**File**: `src/pages/Home.jsx` (lines 202-219)

**Changes**:
- [ ] Add `section-padded section-bg-gradient-forest` to wrapper
- [ ] Add `container-max text-center` to container
- [ ] Add `section-title inverted` to heading (white text)
- [ ] Add `section-subtitle inverted` to subtitle
- [ ] Add button wrapper with flex layout:
  ```jsx
  <div className="flex flex-wrap justify-center gap-6 mt-10">
    <a href="/contact" className="btn-primary">Talk to our team</a>
    <a href="..." className="btn-secondary">Share our story</a>
  </div>
  ```

**Before**:
```jsx
<section className="section-padded" style={{ backgroundColor: 'brand-primary-color' }}>
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-white text-4xl font-bold">Ready to collaborate...</h2>
    <p className="text-white text-lg mt-6">Let's co-design...</p>
    <div className="flex justify-center gap-6 mt-10">
      <Link className="bg-white text-blue font-bold py-3 px-8">Talk to our team</Link>
      <a href="..." className="border-2 border-white text-white">Share our story</a>
    </div>
  </div>
</section>
```

**After**:
```jsx
<section className="section-padded section-bg-gradient-forest">
  <div className="container-max text-center">
    <h2 className="section-title inverted">Ready to collaborate on youth-centered research and development?</h2>
    <p className="section-subtitle inverted">Let's co-design programs, document evidence, and amplify the leadership of Kenya's next generation.</p>
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      <a href="/contact" className="btn-primary">Talk to our team</a>
      <a href="..." className="btn-secondary">Share our story</a>
    </div>
  </div>
</section>
```

**Visual Check**:
- [ ] Background is dark forest gradient
- [ ] Text is white and readable
- [ ] Buttons styled correctly (primary + secondary)
- [ ] Spacing balanced
- [ ] Responsive: buttons stack on mobile

---

### Section 9: Footer
**File**: `src/components/Footer.jsx`

**Changes**:
- [ ] Add `section-bg-primary section-padded` to wrapper
- [ ] Add `container-max` to main container
- [ ] Add `card-grid-3` to footer content grid
- [ ] Add `section-title inverted` to column headings
- [ ] Add `section-body inverted` to footer text
- [ ] Style links with `card-link` (white → green on hover)
- [ ] Ensure social icons have hover effect

**Visual Check**:
- [ ] Background is deep forest (dark)
- [ ] Text is white
- [ ] 3-column layout on desktop
- [ ] Links styled in green
- [ ] Responsive: 1 column on mobile
- [ ] Social icons interactive

---

## Phase 4: Verification (20 minutes)

### Desktop View (1200px+)
- [ ] All sections have correct background colors
- [ ] Backgrounds alternate: Champagne ↔ White
- [ ] 50/50 splits are balanced
- [ ] Card grids display 3-4 columns
- [ ] Story cards are square (1:1 aspect)
- [ ] All buttons styled consistently
- [ ] Headings have accent underlines (where specified)
- [ ] Spacing is consistent throughout
- [ ] No gaps or misalignments

### Tablet View (768px)
- [ ] 50/50 splits switch to stacked layout
- [ ] Card grids reduce to 2 columns
- [ ] All text remains readable
- [ ] Buttons adjust width appropriately
- [ ] Spacing reduces proportionally
- [ ] No horizontal scrollbar

### Mobile View (480px)
- [ ] All content stacks vertically
- [ ] Card grids display 1-2 columns
- [ ] Buttons are full-width (where appropriate)
- [ ] Text is readable (no zoom needed)
- [ ] Images scale properly
- [ ] No overflow or broken layout
- [ ] Spacing is comfortable on small screens

### Color Consistency
- [ ] Deep Forest used for headings, CTAs, footer
- [ ] Champagne used for alternating sections
- [ ] White used for alternating sections
- [ ] Accent Green used for highlights, hover states
- [ ] No inconsistent colors
- [ ] All contrast ratios meet WCAG AA+ (4.5:1)

### Button Consistency
- [ ] All primary buttons: Deep Forest bg, white text
- [ ] All secondary buttons: Champagne bg, dark text
- [ ] All tertiary buttons: Green text, no background
- [ ] Hover effects consistent across all buttons
- [ ] Focus indicators visible (blue outline)
- [ ] Buttons have proper padding/sizing

### Typography
- [ ] All section titles use `.section-title` class
- [ ] All subtitles use `.section-subtitle` class
- [ ] All body text uses `.section-body` class
- [ ] Font sizes scale correctly on mobile
- [ ] Line heights are readable (1.5+)
- [ ] No orphaned text or awkward line breaks

---

## Phase 5: Performance Check (10 minutes)

```bash
npm start
```

- [ ] Page loads without errors
- [ ] No console warnings
- [ ] CSS loads correctly (check Network tab)
- [ ] No layout shifts (CLS = 0)
- [ ] Animations smooth (60fps)
- [ ] Responsive design works properly
- [ ] Print preview looks acceptable

**Lighthouse Audit**:
```bash
# Open DevTools → Lighthouse
```
- [ ] Performance: >90
- [ ] Accessibility: >95
- [ ] Best Practices: >90
- [ ] SEO: >90

---

## Phase 6: Testing Checklist

### Accessibility
- [ ] Focus outline visible on all buttons (Tab key)
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA+ (use WAVE tool)
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Screen reader tested (NVDA/VoiceOver)

### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (if available)
- [ ] Mobile browsers (iPhone/Android)

### Responsive
- [ ] 1920px (large desktop)
- [ ] 1024px (tablet landscape)
- [ ] 768px (tablet portrait)
- [ ] 480px (mobile)
- [ ] 320px (small mobile)

### Interactive Elements
- [ ] All buttons clickable
- [ ] All links functional
- [ ] Hover effects work
- [ ] Focus states visible
- [ ] Mobile touch targets ≥48px

---

## Final Checklist

- [ ] All 9 sections updated with design system classes
- [ ] Design system CSS imported in main stylesheet
- [ ] Color rhythm consistent (alternating backgrounds)
- [ ] Layout balanced (50/50 or proper grid proportions)
- [ ] Typography hierarchy clear
- [ ] Button system applied consistently
- [ ] Responsive design verified (mobile, tablet, desktop)
- [ ] Accessibility standards met (WCAG AA+)
- [ ] Performance optimized (Lighthouse >90)
- [ ] Cross-browser tested
- [ ] Team reviewed and approved
- [ ] Ready to commit and deploy

---

## Deployment Readiness

When all items are checked:

```bash
npm run build
# Verify build completes without errors

# Deploy to production
git add .
git commit -m "feat: Apply homepage design system for unified visual rhythm

- Implemented color system across all sections
- Standardized layout with CSS classes
- Unified typography hierarchy
- Consistent button styling
- WCAG AA+ accessibility
- Mobile-responsive throughout"

git push
```

---

## Success Metrics

After implementation:
- Homepage feels cohesive and professional
- Color rhythm creates visual flow
- Layout is balanced and aligned
- All CTAs stand out and drive action
- Mobile experience is seamless
- Accessibility standards met
- Performance is optimized
- Team and stakeholders approve

✅ **Homepage is now world-class!**
