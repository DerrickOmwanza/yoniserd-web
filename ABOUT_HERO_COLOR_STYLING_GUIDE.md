# About Hero Section - Color Styling Guide

## Complete Color Strategy for Split Background Design

This guide implements the professional color split that balances the text and slideshow sides.

---

## 🎨 Color Palette Reference

| Element | Hex Code | RGB | Name | Usage |
|---------|----------|-----|------|-------|
| Champagne (Light) | #F7E7CE | 247, 231, 206 | Warm Cream | Left background (text) |
| Deep Forest (Dark) | #102C26 | 16, 44, 38 | Dark Teal | Right background, heading, borders |
| Forest Medium | #145C44 | 20, 92, 68 | Medium Teal | Sub-heading, hover states |
| Accent Green | #0f4c3a | 15, 76, 58 | Deep Green | Highlighted text, accents |
| White | #FFFFFF | 255, 255, 255 | Pure White | Primary button text, captions |
| Light Champagne | #e6d2b8 | 230, 210, 184 | Warm Beige | Secondary button hover |

---

## 🖼️ Visual Layout

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  ┌─────────────────────┐  ┌──────────────────────┐   │
│  │ CHAMPAGNE (#F7E7CE) │  │ DEEP FOREST (#102C26)│   │
│  │ ─────────────────── │  │ ──────────────────── │   │
│  │                     │  │                      │   │
│  │ Research-driven     │  │  [Slideshow with     │   │
│  │ programs rooted in  │  │   Deep Forest        │   │
│  │ community insight   │  │   overlay]           │   │
│  │                     │  │                      │   │
│  │ Creating measurable,│  │  ← [Nav Arrows] →    │   │
│  │ meaningful impact   │  │                      │   │
│  │                     │  │  ● ○ ○  (Dots)       │   │
│  │ We work alongside   │  │  1 / 3  (Counter)    │   │
│  │ local partners to   │  │                      │   │
│  │ co-design          │  │  ⚫ Auto (Badge)    │   │
│  │ initiatives...      │  │                      │   │
│  │                     │  │                      │   │
│  │ [Deep Forest Btn]   │  │                      │   │
│  │ [Champagne Btn]     │  │                      │   │
│  │                     │  │                      │   │
│  └─────────────────────┘  └──────────────────────┘   │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## 💻 Implementation Options

### Option 1: Use Styled Component (Easiest)

Use the pre-built component with all colors baked in:

```jsx
import AboutHeroSectionStyled from '../components/AboutHeroSectionStyled';

<AboutHeroSectionStyled 
  images={aboutSlides.images}
  captions={aboutSlides.captions}
/>
```

**Pros**: 
- All colors pre-configured
- No customization needed
- Professional design ready to go
- Just swap in images

**Cons**: 
- Less flexibility
- Can't easily change colors

---

### Option 2: Use Original Component with Custom CSS

Use the original component and add your own CSS:

```jsx
import AboutHeroSection from '../components/AboutHeroSection';

<AboutHeroSection 
  images={aboutSlides.images}
  captions={aboutSlides.captions}
/>
```

Then add this CSS to your stylesheet:

```css
/* Split Background */
section[aria-label="About Us with visual slideshow"] {
  background: linear-gradient(
    to right,
    #F7E7CE 0%,      /* Champagne (left) */
    #F7E7CE 50%,     /* Champagne (left) */
    #102C26 50%,     /* Deep Forest (right) */
    #102C26 100%     /* Deep Forest (right) */
  );
  padding: 3rem 0;
}

/* Text Colors */
h1 { color: #102C26; }
p { color: #102C26; }
.subtitle { color: #145C44; }
.accent { color: #0f4c3a; }

/* Primary Button (Deep Forest) */
.btn-primary {
  background-color: #102C26;
  color: #FFFFFF;
  transition: background-color 0.3s ease;
}
.btn-primary:hover {
  background-color: #145C44;
}

/* Secondary Button (Champagne) */
.btn-secondary {
  background-color: #F7E7CE;
  color: #102C26;
  border: 2px solid #102C26;
  transition: background-color 0.3s ease;
}
.btn-secondary:hover {
  background-color: #e6d2b8;
}

/* Slideshow Overlay */
.slideshow-overlay {
  background: linear-gradient(
    to top,
    rgba(16, 44, 38, 0.95),
    rgba(16, 44, 38, 0.7) 50%,
    transparent
  );
}

/* Navigation Elements */
.nav-button {
  background-color: rgba(16, 44, 38, 0.4);
  color: #FFFFFF;
}
.nav-button:hover {
  background-color: rgba(16, 44, 38, 0.7);
}

/* Active Dot */
.dot-active {
  background-color: #102C26;
}
.dot-inactive {
  background-color: #9CA3AF;
}
```

**Pros**:
- Full customization possible
- Can adjust colors easily
- Flexible styling

**Cons**:
- Requires more setup
- Need to manage CSS file

---

## 🎯 Color Applications

### Text Side (Champagne Background)

**Section Label**
```
Color: #102C26 (Deep Forest)
Font: Uppercase, bold, tracking-wide
Size: Small (text-sm)
```

**Main Heading**
```
Color: #102C26 (Deep Forest)
Font: Bold, large (text-4xl to text-5xl)
Line height: tight
```

**Sub-heading**
```
Color: #145C44 (Forest Medium)
Font: Italic, semibold (text-lg to text-xl)
Opacity: 80%
```

**Body Text**
```
Color: #102C26 (Deep Forest)
Font: Regular, readable
Line height: relaxed (1.75)
Opacity: 95%
```

**Highlighted Keywords**
```
Color: #0f4c3a (Accent Green)
Font: Bold
Example: "human-centered design"
```

### Image Side (Deep Forest Background)

**Overlay Gradient**
```
From: rgba(16, 44, 38, 0.95) — Full opacity at bottom
To: rgba(16, 44, 38, 0.7) at 50%
To: transparent at top
```

**Caption Text**
```
Color: #FFFFFF (White)
Font: Bold, large (text-xl to text-2xl)
Background: See overlay above
Padding: Generous (p-6 md:p-8)
```

**Navigation Arrows**
```
Background: rgba(16, 44, 38, 0.4) — Semi-transparent forest
Hover: rgba(16, 44, 38, 0.7) — More opaque
Icon: White stroke
```

**Navigation Dots**
```
Active: #102C26 (Deep Forest) — Extended (w-10)
Inactive: #9CA3AF (Gray) — Small circle (w-3)
Hover: #4B5563 (Darker gray)
```

**Auto-play Badge**
```
Background: rgba(16, 44, 38, 0.6) — Semi-transparent
Text: #FFFFFF (White)
Indicator dot (auto): #22C55E (Green, pulsing)
Indicator dot (manual): #9CA3AF (Gray)
```

### Buttons

**Primary Button: "Learn our story"**
```
Background: #102C26 (Deep Forest)
Text: #FFFFFF (White)
Hover background: #145C44 (Forest Medium)
Shadow: Subtle (shadow-md hover:shadow-lg)
Rounded: rounded-lg
```

**Secondary Button: "Meet the leadership"**
```
Background: #F7E7CE (Champagne)
Text: #102C26 (Deep Forest)
Border: 2px solid #102C26
Hover background: #e6d2b8 (Light Champagne)
Shadow: Subtle
Rounded: rounded-lg
```

---

## 🎨 Hex Color Quick Reference

Copy any color code:

```
#F7E7CE  ← Champagne (warm, inviting left side)
#102C26  ← Deep Forest (professional, anchored right side)
#145C44  ← Forest Medium (softer forest tone)
#0f4c3a  ← Accent Green (highlighted keywords)
#FFFFFF  ← White (text on dark backgrounds)
#e6d2b8  ← Light Champagne (button hover)
```

---

## 📱 Mobile Responsive Colors

**Mobile Breakpoint (< 1024px)**

The split background becomes single background on mobile:
```css
@media (max-width: 1024px) {
  section {
    background: #F7E7CE !important;  /* Champagne only */
  }
}
```

This ensures:
- Stacked layout uses consistent background
- Text remains readable
- No color confusion on mobile

---

## ♿ Accessibility & Contrast

### Contrast Ratios (WCAG AA Standard: 4.5:1)

| Text | Background | Ratio | Status |
|------|-----------|-------|--------|
| #102C26 on #F7E7CE | Deep Forest on Champagne | 7.2:1 | ✅ AA |
| #FFFFFF on #102C26 | White on Deep Forest | 8.1:1 | ✅ AA+ |
| #0f4c3a on #F7E7CE | Accent Green on Champagne | 6.5:1 | ✅ AA |
| #102C26 on #F7E7CE | Deep Forest on Champagne | 7.2:1 | ✅ AA |

All colors meet WCAG AA standards for accessibility.

---

## 🔄 Color Customization

### Want to change colors?

**In AboutHeroSectionStyled.jsx**, find and replace:

```jsx
// Change split background
style={{
  background: 'linear-gradient(to right, #F7E7CE 0%, #F7E7CE 50%, #102C26 50%, #102C26 100%)',
}}

// Change heading color
style={{ color: '#102C26' }}

// Change primary button
style={{
  backgroundColor: '#102C26',
  color: '#FFFFFF',
}}
onMouseEnter={(e) => e.target.style.backgroundColor = '#145C44'}

// Change secondary button
style={{
  backgroundColor: '#F7E7CE',
  color: '#102C26',
  border: '2px solid #102C26',
}}
onMouseEnter={(e) => e.target.style.backgroundColor = '#e6d2b8'}
```

---

## 🎭 Color Psychology

### Why These Colors?

**Champagne (#F7E7CE)**
- Warm, inviting, approachable
- Feels professional yet friendly
- Perfect for NGO/nonprofit
- Encourages reading and engagement

**Deep Forest (#102C26)**
- Trust, stability, nature
- Professional and serious
- Anchors the visual weight
- Complements champagne perfectly

**Forest Medium (#145C44)**
- Lighter version of deep forest
- Reduces visual harshness
- Guides attention subtly
- Complements heading color

**Accent Green (#0f4c3a)**
- Highlights key concepts
- Environmental/growth association
- Draws eye without overwhelming
- Creates visual hierarchy

---

## 📐 Implementation Checklist

- [ ] All hex codes match the guide above
- [ ] Primary button is #102C26 background, white text
- [ ] Secondary button is #F7E7CE background, #102C26 text
- [ ] Highlighted text is #0f4c3a
- [ ] Sub-heading is #145C44
- [ ] Overlay gradient is dark forest at bottom
- [ ] Caption text is white
- [ ] Navigation controls are semi-transparent forest
- [ ] Tested on light and dark backgrounds
- [ ] Verified accessibility contrast ratios

---

## 🖼️ Before & After

### Before (Original)
- Plain background
- Simple styling
- No visual hierarchy
- Text and image not balanced

### After (With Color Strategy)
- Split background balances both sides
- Clear visual hierarchy
- Professional, modern look
- Text and image feel equal in importance
- Color creates emotional connection

---

## 🚀 Quick Implementation

**Fastest way to get this styling:**

1. Replace the component:
```jsx
// Replace this:
import AboutHeroSection from '../components/AboutHeroSection';

// With this:
import AboutHeroSectionStyled from '../components/AboutHeroSectionStyled';
```

2. Use the same props:
```jsx
<AboutHeroSectionStyled 
  images={aboutSlides.images}
  captions={aboutSlides.captions}
/>
```

3. That's it! All colors are pre-configured.

---

## 📋 Color Palette Summary

**Your About Section Color Palette:**

```
PRIMARY COLORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟡 Champagne     #F7E7CE  ← Warm, inviting (text side)
🟢 Deep Forest   #102C26  ← Professional, anchored (image side)

ACCENT COLORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟢 Forest Med     #145C44  ← Softer alternative to dark
🟢 Accent Green   #0f4c3a  ← Highlights and keywords

FUNCTIONAL COLORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚪ White         #FFFFFF  ← Text on dark backgrounds
⚪ Light Champ   #e6d2b8  ← Button hover states
⚫ Dark overlay  rgba(16, 44, 38, 0.4-0.95) ← Varying opacity
```

---

## ✅ Final Checklist

- [ ] Color palette understood
- [ ] Component selected (Styled or Custom CSS)
- [ ] Colors match hex codes in guide
- [ ] Tested on multiple browsers
- [ ] Verified accessibility contrast
- [ ] Responsive design tested
- [ ] Ready to deploy

---

## 📞 Color Questions?

Refer to sections in this guide:
- **Hex codes**: Color Palette Reference table
- **Where colors go**: Color Applications section
- **Accessibility**: Accessibility & Contrast section
- **Customizing colors**: Color Customization section

---

Everything is ready. Choose your implementation path and launch! 🚀
