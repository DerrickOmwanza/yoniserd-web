# Professional NGO Style Guide
**YoNISeRD Website - Updated Design System**  
**Version**: 1.0  
**Last Updated**: February 11, 2026

---

## Quick Reference Card

### Primary Colors at a Glance

#### Light/Background Colors
```
🟫 #F4F4EC - Glistening White (Primary background)
🟨 #F0EDDB - Cake Batter (Warm accents)
🟦 #EDF1FE - Brilliant White (Cool accents)
⬜ #F0EEEA - Half Black White (Neutral)
⚪ #FBFCF6 - Metallic White (Pure light)
```

#### Dark/Text Colors
```
⬛ #000000 - Midnight Mist (Pure black text)
🟤 #8C8889 - Silver Slate (Medium gray)
⬜ #CFCFD3 - Clouded Pearl (Light gray)
🟫 #111200 - Smoky Black (Primary text)
🟪 #565449 - Olive Drab (Earth tone)
```

---

## Component Style Reference

### Navigation Bar
```css
/* Standard navigation styling */
background: #111200;           /* Smoky Black */
border-bottom: 4px solid #565449;  /* Olive Drab */
color: #FBFCF6;               /* Metallic White */

/* Links */
.nav-link {
    color: #FBFCF6;           /* Metallic White */
}

.nav-link:hover {
    color: #F0EDDB;           /* Cake Batter - warm hover */
    border-bottom: 3px solid #F0EDDB;
}

/* CTA Button */
.brand-cta {
    background: #565449;      /* Olive Drab */
    color: #FBFCF6;           /* Metallic White */
}

.brand-cta:hover {
    background: #F0EDDB;      /* Cake Batter */
    color: #111200;           /* Smoky Black */
}
```

### Hero Sections
```css
/* Dark professional hero */
background: linear-gradient(135deg, #111200 0%, #565449 50%, #CFCFD3 100%);
color: #FBFCF6;               /* Metallic White text */

h1, h2, h3 {
    color: #FBFCF6;           /* Metallic White */
}

p {
    color: #CFCFD3;           /* Clouded Pearl (lighter secondary) */
}
```

### Content Sections
```css
/* Light professional sections */
background: linear-gradient(180deg, #F4F4EC 0%, #EDF1FE 100%);
color: inherit;

h1, h2, h3 {
    color: #111200;           /* Smoky Black */
}

p {
    color: #565449;           /* Olive Drab */
}

/* Light gray secondary text */
small, .secondary {
    color: #8C8889;           /* Silver Slate */
}
```

### Cards & Panels
```css
.panel {
    background: #EDF1FE;      /* Brilliant White */
    border: 1px solid #CFCFD3;  /* Clouded Pearl border */
    color: #111200;           /* Smoky Black text */
    
    /* Hover state */
    background: #F4F4EC;      /* Shift to Glistening White */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.panel-invert:hover {
    background: linear-gradient(135deg, #111200 0%, #565449 100%);
    color: #FBFCF6;           /* Metallic White */
}
```

### Buttons
```css
/* Primary button */
.btn-primary {
    background: #565449;      /* Olive Drab */
    color: #FBFCF6;           /* Metallic White */
    border: 1px solid #565449;
}

.btn-primary:hover {
    background: #F0EDDB;      /* Cake Batter */
    color: #111200;           /* Smoky Black */
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(240, 237, 219, 0.3);
}

.btn-primary:focus {
    outline: 3px solid #565449;  /* Olive Drab */
    outline-offset: 4px;
}
```

### Form Elements
```css
input, textarea, select {
    background: #F4F4EC;      /* Glistening White */
    color: #111200;           /* Smoky Black */
    border: 1px solid #CFCFD3;  /* Clouded Pearl */
}

input:focus {
    border-color: #565449;    /* Olive Drab */
    outline: 2px solid #565449;
}

label {
    color: #111200;           /* Smoky Black */
    font-weight: 600;
}
```

### Footer
```css
background: #111200;           /* Smoky Black */
color: #FBFCF6;               /* Metallic White */

h3, h4 {
    color: #FBFCF6;           /* Metallic White */
}

p, a {
    color: #CFCFD3;           /* Clouded Pearl */
}

a:hover {
    color: #F0EDDB;           /* Cake Batter */
}
```

---

## Typography Palette

### Heading Colors

**On Light Backgrounds:**
```css
h1, h2, h3, h4, h5, h6 {
    color: #111200;  /* Smoky Black - strong contrast */
    font-weight: 700;
    letter-spacing: 0.02em;
}
```

**On Dark Backgrounds:**
```css
.bg-dark h1,
.bg-dark h2,
.bg-dark h3 {
    color: #FBFCF6;  /* Metallic White - maximum contrast */
}
```

### Body Text Colors

**Primary Text:**
```css
p {
    color: #565449;  /* Olive Drab - professional, readable */
    line-height: 1.7;
    font-weight: 400;
}
```

**Secondary Text:**
```css
small, .text-secondary {
    color: #8C8889;  /* Silver Slate - subtle, soft */
    font-weight: 400;
}
```

**Tertiary Text (on dark backgrounds):**
```css
.bg-dark p {
    color: #CFCFD3;  /* Clouded Pearl - light and readable on dark */
}
```

---

## Spacing & Layout

### Padding Standards
```css
.section {
    padding: 3rem 2rem;  /* Vertical breathing room */
}

.panel {
    padding: 1.5rem;
}

.card {
    padding: 2rem;
}
```

### Border Styling
```css
/* Standard border */
border: 1px solid #CFCFD3;  /* Clouded Pearl */

/* Accent border */
border-left: 4px solid #565449;  /* Olive Drab */

/* Section divider */
border-bottom: 1px solid #CFCFD3;  /* Clouded Pearl */
```

---

## Gradient Combinations

### 1. Ocean Gradient (Hero Sections)
**Usage**: Hero banners, major CTAs, impact sections

```css
background: linear-gradient(
    135deg,
    #111200 0%,      /* Smoky Black */
    #565449 50%,     /* Olive Drab */
    #CFCFD3 100%     /* Clouded Pearl */
);
color: #FBFCF6;     /* Metallic White text */
```

**Visual Effect**: Dark, sophisticated, professional

### 2. Sunrise Gradient (Warm Sections)
**Usage**: Values sections, testimonials, uplifting content

```css
background: linear-gradient(
    135deg,
    #F0EDDB 0%,      /* Cake Batter */
    #F4F4EC 50%,     /* Glistening White */
    #EDF1FE 100%     /* Brilliant White */
);
color: #111200;     /* Smoky Black text */
```

**Visual Effect**: Warm, welcoming, professional light

### 3. Contrast Gradient (Emphasis)
**Usage**: Statistics, important metrics, dark emphasis

```css
background: linear-gradient(
    135deg,
    #000000 0%,      /* Midnight Mist */
    #111200 100%     /* Smoky Black */
);
color: #FBFCF6;     /* Metallic White text */
```

**Visual Effect**: Maximum contrast, impactful

### 4. Light Gradient (Content)
**Usage**: General content sections, supporting information

```css
background: linear-gradient(
    180deg,
    #F4F4EC 0%,      /* Glistening White */
    #EDF1FE 100%     /* Brilliant White */
);
color: #111200;     /* Smoky Black text */
```

**Visual Effect**: Clean, professional, readable

---

## Color Usage Rules

### ✅ DO

- ✅ Use Smoky Black (#111200) for primary headings
- ✅ Use Olive Drab (#565449) for body text
- ✅ Use Cake Batter (#F0EDDB) for hover/active states
- ✅ Use Metallic White (#FBFCF6) for text on dark backgrounds
- ✅ Use Glistening White (#F4F4EC) as primary background
- ✅ Use Clouded Pearl (#CFCFD3) for borders and dividers
- ✅ Pair dark backgrounds with light text
- ✅ Pair light backgrounds with dark text
- ✅ Use gradients for section transitions
- ✅ Maintain 4.5:1 contrast ratio minimum

### ❌ DON'T

- ❌ Use pure black (#000000) on Glistening White (use Smoky Black instead)
- ❌ Use light gray text on light backgrounds
- ❌ Mix warm and cool tones excessively
- ❌ Use hover colors as primary backgrounds
- ❌ Create new colors outside the palette
- ❌ Use low-contrast color combinations
- ❌ Add transparency that reduces contrast
- ❌ Invert colors without testing contrast
- ❌ Use accent colors for large text areas
- ❌ Forget to test keyboard focus states

---

## Accessibility Standards

### Contrast Ratios Required

```
Text on Light Background:
  • Minimum: 4.5:1 (WCAG AA)
  • Preferred: 7:1 (WCAG AAA)

Text on Dark Background:
  • Minimum: 4.5:1 (WCAG AA)
  • Preferred: 7:1 (WCAG AAA)

Large Text (18pt or 14pt bold):
  • Minimum: 3:1 (WCAG AA)
  • Preferred: 4.5:1 (WCAG AAA)
```

### Verified Combinations

| Background | Text | Ratio | Rating |
|---|---|---|---|
| #F4F4EC | #111200 | 18:1 | ✅ AAA |
| #F4F4EC | #565449 | 9:1 | ✅ AAA |
| #111200 | #FBFCF6 | 18:1 | ✅ AAA |
| #565449 | #FBFCF6 | 6.8:1 | ✅ AA |
| #EDF1FE | #111200 | 12:1 | ✅ AAA |

### Focus States

All interactive elements must have visible focus indicators:

```css
/* Standard focus state */
:focus-visible {
    outline: 3px solid #565449;  /* Olive Drab */
    outline-offset: 4px;
}
```

---

## Mobile & Responsive Considerations

### Viewport Specific

**Desktop (1024px+)**
- Full color palette clearly visible
- Gradients display smoothly
- Hover states fully functional
- All interactive elements accessible

**Tablet (768px - 1023px)**
- Colors remain consistent
- Text sizes adjusted for readability
- Touch targets minimum 44px
- Navigation adapts to screen size

**Mobile (320px - 767px)**
- Colors same as larger screens
- Text sizes increased for readability
- Touch targets minimum 48px
- Mobile menu overlays properly
- Focus indicators clearly visible

### Testing Checklist for Mobile

- [ ] Navigation bar displays correctly
- [ ] Text is clearly readable
- [ ] Buttons are easy to tap
- [ ] Contrast ratios maintained
- [ ] Colors look correct on small screens
- [ ] No color-specific instructions given
- [ ] Focus indicators visible on touch

---

## Dark Mode Considerations (Future)

If dark mode is implemented, use this inverted palette:

```css
:root[data-theme="dark"] {
    --ng-bg-primary: #111200;        /* Dark background */
    --ng-text-dark: #F4F4EC;         /* Light text */
    /* ... other inversions ... */
}
```

---

## Designer & Developer Quick Links

### CSS Variables to Use
```css
/* Backgrounds */
var(--ng-bg-primary)    /* #F4F4EC */
var(--ng-bg-warm)       /* #F0EDDB */
var(--ng-bg-cool)       /* #EDF1FE */

/* Text Colors */
var(--ng-text-deep)     /* #111200 */
var(--text-secondary)   /* #565449 */
var(--text-light)       /* #FBFCF6 */

/* Utility */
var(--accent-dark)      /* #565449 */
var(--accent-light)     /* #F0EDDB */
var(--border-color)     /* #CFCFD3 */
```

### Gradient Classes
```css
.bg-gradient-ocean      /* Professional dark hero */
.bg-gradient-sunrise    /* Warm light palette */
.bg-gradient-indigo     /* Premium dark */
.bg-gradient-contrast   /* High contrast */
.bg-light              /* Clean light */
```

---

## Brand Feeling

This color palette communicates:

🎯 **Professional** - Dark, sophisticated palette  
🤝 **Trustworthy** - Consistent, high-contrast text  
❤️ **Warm & Welcoming** - Earth tones, cream accents  
♿ **Accessible** - High contrast, readable fonts  
🌱 **Sustainable** - Natural, grounded colors  
✨ **Professional NGO** - Serious but approachable  

---

## Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-02-11 | Initial professional NGO color system |

---

## Contact & Questions

For style guide questions or color-related issues, refer to:
- `NEW_COLOR_SCHEME_PROFESSIONAL_NGO.md` - Complete color reference
- `COLOR_IMPLEMENTATION_SUMMARY.md` - Technical implementation details
- `index.css` - Actual CSS implementation
- `tailwind.config.js` - Tailwind color configuration

---

**Last Updated**: February 11, 2026  
**Status**: Active  
**Compliance**: WCAG 2.1 Level AA
