# Homepage Design System - Section-by-Section Implementation Guide

**Status**: Complete Design System Ready  
**File**: `src/styles/HomepageDesignSystem.css` (700+ lines of reusable styles)  

---

## Overview

This guide maps the entire homepage to a unified design system. Every section follows:
- **Color Rhythm**: Alternating Champagne / White / Forest backgrounds
- **Layout System**: Consistent 50/50 splits, card grids, spacing
- **Typography Hierarchy**: Clear H2 headings, subtitles, body text
- **CTA Prominence**: Primary/secondary button system
- **Image Integration**: Overlays and captions for clarity

---

## Quick Setup

### 1. Import the Design System CSS
In `src/index.css` or `src/pages/Home.jsx`, add:
```jsx
import '../styles/HomepageDesignSystem.css';
```

### 2. Use CSS Classes Across Sections
Apply the classes defined in `HomepageDesignSystem.css` to your existing sections. No component rewriting needed.

---

## Section-by-Section Blueprint

### 1. HERO SECTION (ImprovedHeroSection)
✅ Already implemented with gradient background and 50/50 layout

**CSS Classes to Ensure**:
- `.section-bg-gradient-forest` (Deep Forest gradient background)
- `.split-container` (50/50 text + image layout)
- `.section-title.with-accent` (heading with green underline)
- `.btn-primary` (green "Get Involved" button)

**Current Status**: ✅ Complete with all design system features

---

### 2. YOUTH LEADERSHIP SECTION
**Current File**: `src/components/YouthLeadershipSection.jsx`

**Apply Design System**:
```jsx
// Background
className="section-padded section-bg-champagne"

// Layout (50/50 text left, image right)
className="split-container"

// Heading
className="section-title with-accent"

// Subtitle
className="section-subtitle"

// Body text
className="section-body"

// CTA Button
className="btn-primary"
```

**Color**: Champagne background (#F7E7CE)  
**Layout**: 50/50 split (text left, image right)  
**CTA**: "Explore Our Approach" → Primary button  

---

### 3. ABOUT/HERO SECTION (AboutHeroSectionStyled)
**Current File**: `src/components/AboutHeroSectionStyled.jsx`

**Apply Design System**:
```jsx
// Background
className="section-padded section-bg-white"

// Layout (50/50 with image on right)
className="split-container-60-40"

// Heading
className="section-title"

// Image
className="split-image"
// Add caption:
<div className="image-caption">Your caption here</div>

// CTA
className="btn-secondary"
```

**Color**: White background  
**Layout**: 60/40 split (text 60%, image 40%)  
**CTA**: "Learn More" → Secondary button  

---

### 4. PROGRAM HIGHLIGHTS SECTION
**Current File**: `src/pages/Home.jsx` (lines 121-149)

**Apply Design System**:
```jsx
// Section wrapper
className="section-padded section-bg-champagne"

// Container
className="container-max"

// Heading
className="section-title text-center"

// Grid
className="card-grid-3"

// Card
className="card card-champagne"

// Card content
<h3 className="card-title">Program Title</h3>
<p className="card-description">Description</p>
<a href="..." className="card-link">Learn more →</a>
```

**Color**: Champagne background  
**Layout**: 3-column card grid  
**Cards**: Champagne background with hover effect  
**CTA**: "Learn more" → Tertiary links  

---

### 5. IMPACT METRICS SECTION
**Current File**: `src/components/OptimizedImpactMetrics.jsx`

**Apply Design System**:
```jsx
// Section wrapper
className="section-padded section-bg-white"

// Container
className="container-max"

// Heading
className="section-title text-center"

// Grid (3 metrics)
className="card-grid-3"

// Metric card
className="metric-card"

// Metric value
<div className="metric-value">7+</div>

// Metric label
<p className="metric-label">Years of youth impact</p>

// CTA Button (directly under metrics)
className="btn-primary mt-lg"
```

**Color**: White background  
**Layout**: 3-column metric grid  
**Cards**: Champagne background squares  
**CTA**: "Partner With Us" → Primary button (visible, prominent)  

---

### 6. LATEST STORIES SECTION
**Current File**: `src/pages/Home.jsx` (lines 157-190)

**Apply Design System**:
```jsx
// Section wrapper
className="section-padded section-bg-light"

// Container
className="container-max"

// Header with title + CTA
<div className="flex-between gap-lg">
  <div>
    <p className="section-label">Latest stories</p>
    <h2 className="section-title">Youth-led change that inspires</h2>
  </div>
  <a href="..." className="btn-secondary">View all stories →</a>
</div>

// Grid
className="square-card-grid"

// Story card
className="story-card"

// Card content
<span className="story-tag">Our Work</span>
<h3 className="story-title">Dennis opens his first carpentry studio</h3>
<p className="story-excerpt">Seed of Hope gave Dennis...</p>
<a href="..." className="card-link">Keep reading →</a>
```

**Color**: Light gray background (#F5F5F5)  
**Layout**: Responsive square grid (3 cols desktop, 1-2 mobile)  
**Cards**: White background, square aspect ratio  
**CTA**: "View all stories" → Secondary button in header  

---

### 7. VALUES/PRINCIPLES SECTION
**Current File**: `src/pages/Home.jsx` (lines 193-199)

**Apply Design System**:
```jsx
// Section wrapper
className="section-padded section-bg-champagne"

// Container
className="container-max text-center"

// Heading
<p className="section-label">Values</p>
<h2 className="section-title">Principles that anchor every partnership</h2>

// Grid (4 columns for values)
className="card-grid-4"

// Value card
className="card card-champagne"

// Card content
<h3 className="card-title">Value Name</h3>
<p className="card-description">Value description here</p>
```

**Color**: Champagne background  
**Layout**: 4-column card grid (responsive)  
**Cards**: Champagne background  
**Hover**: Scale up + shadow effect  

---

### 8. FINAL CTA SECTION
**Current File**: `src/pages/Home.jsx` (lines 202-219)

**Apply Design System**:
```jsx
// Section wrapper
className="section-padded section-bg-gradient-forest"

// Container
className="container-max text-center"

// Heading
<h2 className="section-title inverted">Ready to collaborate on youth-centered research and development?</h2>

// Subtitle
<p className="section-subtitle inverted">Let's co-design programs...</p>

// Button group
<div className="flex-center gap-lg">
  <a href="..." className="btn-primary">Talk to our team</a>
  <a href="..." className="btn-secondary">Share our story</a>
</div>
```

**Color**: Deep Forest to Accent Green gradient  
**Layout**: Centered text with 2-button CTA group  
**Buttons**: Primary + Secondary (white text on dark)  

---

### 9. FOOTER SECTION
**Current File**: `src/components/Footer.jsx`

**Apply Design System**:
```jsx
// Section wrapper
className="section-bg-primary section-padded"

// Container
className="container-max"

// Grid (3 columns: About, Links, Connect)
className="card-grid-3"

// Column
<div>
  <h3 className="section-title inverted">About Us</h3>
  <p className="section-body inverted">Footer text here...</p>
</div>

// Links
<ul style={{ listStyle: 'none', padding: 0 }}>
  <li><a href="..." className="card-link">Link text</a></li>
</ul>

// Social icons
// Styled with hover effect (white → green)
```

**Color**: Deep Forest background (#102C26)  
**Layout**: 3-column grid  
**Text**: White with green highlights on hover  

---

## Color Reference

### Alternating Pattern
```
Hero              → Deep Forest gradient
Youth Leadership  → Champagne
About             → White
Programs          → Champagne
Impact            → White
Stories           → Light gray
Values            → Champagne
Final CTA         → Deep Forest gradient
Footer            → Deep Forest
```

### Usage
- **Deep Forest (#102C26)**: Hero, CTA buttons, headings, footer
- **Champagne (#F7E7CE)**: Alternating sections (warm, inviting)
- **White (#FFFFFF)**: Alternating sections (clean, minimal)
- **Accent Green (#145C44)**: Highlights, hover states
- **Bright Green (#2E7D32)**: Primary CTAs, emphasis

---

## Typography Hierarchy

```
Section Title (H2)
  font-size: 2.5rem (40px)
  font-weight: 900
  color: Deep Forest
  with optional accent underline

Section Subtitle
  font-size: 1.125rem (18px)
  font-weight: 500
  color: Text Muted
  
Section Label (uppercase)
  font-size: 0.875rem (14px)
  font-weight: 700
  letter-spacing: 0.05em
  color: Accent Green

Body Text
  font-size: 1rem (16px)
  font-weight: 400
  line-height: 1.75
  color: Primary Text
```

---

## Button System

### Primary Button (Main CTAs)
```css
background: Deep Forest (#102C26)
text: White
hover: Bright Green (#2E7D32)
shadow: 0 4px 12px (elevation)
```
**Use for**: "Get Involved", "Partner With Us", "Talk to Our Team"

### Secondary Button (Alternative CTAs)
```css
background: Champagne (#F7E7CE)
text: Deep Forest
border: Champagne
hover: Light green background + green border
```
**Use for**: "Learn More", "View All", "Share Our Story"

### Tertiary Button (Links)
```css
background: None
text: Bright Green (#2E7D32)
hover: Darker green (#145C44)
```
**Use for**: "Keep reading →", "Learn more →", inline links

---

## Layout Patterns

### 50/50 Split (Hero, About, Leadership)
```
┌─────────────┬─────────────┐
│   TEXT      │   IMAGE     │
│  (50%)      │   (50%)     │
└─────────────┴─────────────┘
```
**CSS Class**: `.split-container`

### Card Grid 3 (Programs, Values)
```
┌────────┐ ┌────────┐ ┌────────┐
│ Card 1 │ │ Card 2 │ │ Card 3 │
└────────┘ └────────┘ └────────┘
```
**CSS Class**: `.card-grid-3`

### Square Grid (Stories)
```
┌────────┐ ┌────────┐ ┌────────┐
│Story 1 │ │Story 2 │ │Story 3 │
├────────┤ ├────────┤ ├────────┤
│ (1:1   │ │ (1:1   │ │ (1:1   │
│aspect) │ │aspect) │ │aspect) │
└────────┘ └────────┘ └────────┘
```
**CSS Class**: `.square-card-grid`

---

## Spacing Rhythm

```
Section top/bottom padding:    3rem (48px)
Card padding:                  1.5rem (24px)
Gap between columns:           2rem (32px)
Gap between cards:             2rem (32px)
Text block margin:             0 0 1.5rem 0
Heading to subtitle:           0.5rem bottom margin
Subtitle to body:              1.5rem bottom margin
```

---

## Implementation Workflow

### Step 1: Import Design System
Add to `src/index.css`:
```css
@import './styles/HomepageDesignSystem.css';
```

### Step 2: Apply to Each Section
Update each section component with appropriate CSS classes:
- Background: `.section-bg-[color]`
- Layout: `.split-container` or `.card-grid-3`
- Typography: `.section-title`, `.section-subtitle`, `.section-body`
- Buttons: `.btn-primary`, `.btn-secondary`, `.btn-tertiary`

### Step 3: Verify Consistency
Check that:
- [ ] Background colors alternate (Champagne ↔ White)
- [ ] Headings use `.section-title` class
- [ ] All CTAs use button system
- [ ] Layouts use grid system classes
- [ ] Spacing is consistent

### Step 4: Test Responsive
- [ ] Desktop (1200px+): All layouts display correctly
- [ ] Tablet (768px): Grid switches to 2-column
- [ ] Mobile (480px): All grids stack to 1 column

---

## Customization Guide

### Change Primary Color
Edit `HomepageDesignSystem.css` line 5:
```css
--color-primary: #102C26; /* Change to your color */
```

### Change Accent Color
Edit line 8:
```css
--color-accent-bright: #2E7D32; /* Change to your color */
```

### Change Champagne Background
Edit line 6:
```css
--color-secondary: #F7E7CE; /* Change to your color */
```

### Adjust Heading Size
Edit line 21:
```css
--font-size-3xl: 2.5rem; /* Change to larger/smaller */
```

---

## Accessibility Built-In

✅ **Color Contrast**: All text meets WCAG AA+ (4.5:1 minimum)  
✅ **Focus States**: All buttons have visible focus outline (3px blue)  
✅ **Reduced Motion**: Animations disabled if user prefers  
✅ **Typography**: Clear hierarchy with semantic HTML  
✅ **Button Sizing**: All clickable elements ≥44px (accessibility standard)  

---

## Performance Notes

- Single CSS file (700 lines) = minimal overhead
- CSS variables for easy customization
- No unused classes (all utility classes are optimized)
- Mobile-optimized with responsive breakpoints
- No JavaScript required (pure CSS)

---

## Next Steps

1. **Import** `HomepageDesignSystem.css` in your main CSS file
2. **Apply** CSS classes to each section (copy/paste from this guide)
3. **Test** on desktop, tablet, and mobile
4. **Adjust** colors/spacing as needed
5. **Deploy** confident that the entire homepage is unified

---

## Support

- **Color System**: See "Color Reference" section above
- **Layout Patterns**: See "Layout Patterns" section
- **Button Styles**: See "Button System" section
- **Customization**: See "Customization Guide" section

All CSS classes are defined in `src/styles/HomepageDesignSystem.css` with comments explaining each section.
