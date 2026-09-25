# COMPREHENSIVE DESIGN ANALYSIS & ALIGNMENT GUIDE

## Executive Summary

This document provides a complete analysis of the **NEWS** and **GALLERY** pages (your reference/perfect pages) and a detailed alignment strategy to apply the same professional standards, colors, typography, and design patterns to:
- ABOUT US (dropdown)
- WHAT WE DO (dropdown)
- GET INVOLVED (dropdown)
- PROGRAMS page
- CONTACT page (font size alignment)

---

## SECTION 1: REFERENCE PAGES ANALYSIS

### 1.1 NEWS PAGE - Complete Design Breakdown

#### **Color System**
| Element | Color | Hex Code | Usage |
|---------|-------|----------|-------|
| Hero Background | Deep Dark (Primary Dark) | #050F2A | Hero section background |
| Hero Text | White | #FFFFFF | Main heading |
| Accent Line | Teal/Blue | #7EBBBF | Decorative underline |
| Subheading Text | Gray | #A3A3A3 | Secondary text |
| Category Badges | Various | Multiple | Success, Impact, Research, etc. |
| Card Backgrounds | Dark | #050F2A | News card bg |
| Card Borders | Teal | #7EBBBF | Card outline |
| Button Primary | Green | #145C44 | CTA buttons |
| Button Secondary | White/Teal | #FFFFFF / transparent | Secondary actions |

#### **Typography Specifications**
```
HERO SECTION
- H1 (Main Title): 
  * Font Size: 3rem (48px) desktop
  * Font Weight: 700 (Bold)
  * Color: #FFFFFF
  * Letter Spacing: Uppercase
  * Text Shadow: 0 2px 4px rgba(0,0,0,0.6)

- Subheading: 
  * Font Size: 1.4rem (22.4px) / md:1.2rem
  * Font Weight: 400 (Normal)
  * Color: #A3A3A3
  * Font Style: Regular

SECTION TITLES (H2)
- Font Size: 3rem (48px) / md:2.5rem
- Font Weight: 700 (Bold)
- Color: #102C26 (Deep Forest)
- Text Transform: UPPERCASE
- Letter Spacing: 0.05em tight
- Line Height: 1.2

SECTION SUBTITLES
- Font Size: 0.875rem to 1rem (14px-16px)
- Font Weight: 500 (Medium)
- Color: #666666 or #145C44
- Line Height: 1.6
- Max Width: 90%

NEWS CARD TITLES (H3)
- Font Size: 1rem / md:1.125rem (16px-18px)
- Font Weight: 700 (Bold)
- Color: #102C26 or white on dark
- Line Height: 1.5 (tight)

NEWS CARD DATE LABELS
- Font Size: 0.875rem (14px)
- Font Weight: 700 (Bold)
- Color: #145C44 (Accent Green)
- Background: #145C44 / 10 (light tint)
- Padding: Small (3px 12px)

NEWS CARD EXCERPT
- Font Size: 0.875rem (14px)
- Font Weight: 400 (Normal)
- Color: #666666 or #A3A3A3
- Line Height: 1.6
- Clamp: 2 lines max

CTA BUTTONS
- Font Size: 0.875rem to 1rem (14px-16px)
- Font Weight: 700 (Bold)
- Padding: py-3 px-8 (12px 32px)
- Border Radius: 8px (rounded-lg)
- Text Transform: Sentence case

FILTER BUTTONS
- Font Size: 0.875rem (14px)
- Font Weight: 600 (Semibold)
- Padding: 0.6rem 1.2rem (9.6px 19.2px)
- Border Radius: 20px (pill-shaped)

UPCOMING EVENT CARD TITLES
- Font Size: 1rem / md:1.125rem (16px-18px)
- Font Weight: 700 (Bold)
- Color: #102C26

UPCOMING EVENT TEASER
- Font Size: 0.75rem (12px)
- Font Weight: 600 (Semibold)
- Color: #145C44
- Text Transform: None

COUNTDOWN TIMER TEXT
- Font Size: 1.125rem (18px)
- Font Weight: 700 (Bold)
- Color: #145C44
- Glow Effect: text-shadow glow
```

#### **Card Design Patterns - NEWS PAGE**
```jsx
NEWS CARD STRUCTURE:
1. Image Container (h-48 / 192px)
   - Border Radius: rounded-xl
   - Overflow: hidden
   - Object Fit: cover
   - Hover Scale: 1.1 (zoom effect)
   - Overlay: black/0 to black/20 on hover

2. Category Badge
   - Position: absolute top-3 left-3
   - Style: rounded-full
   - Font Size: xs (12px)
   - Font Weight: bold
   - Padding: px-3 py-1.5
   - Text Transform: uppercase
   - Tracking: wider

3. Icon
   - Position: top-3 left-3
   - Font Size: 2xl (1.5rem)
   - Drop Shadow: lg

4. Content Area (p-5)
   - Date Badge:
     * Background: accent-green/10
     * Border Left: 3px accent-green
     * Padding: px-3 py-1.5
     * Border Radius: rounded-lg
     * Font Size: sm (14px)
   
   - Title:
     * Font Size: base / md:lg (16px / 18px)
     * Font Weight: bold
     * Color: #102C26
     * Line Height: tight
     * Clamp: 2 lines
     * Hover: text-accent-green
   
   - Excerpt:
     * Font Size: sm (14px)
     * Color: #666666
     * Clamp: 2 lines
     * Line Height: relaxed
   
   - Impact Badge:
     * Font Size: xs (12px)
     * Color: accent-green
     * Font Weight: semibold
     * Content: "✓ Impact Verified"
   
   - CTA Button:
     * Font Size: sm (14px)
     * Font Weight: bold
     * Color: accent-green
     * Hover: gap increase (1.5 → 3)
     * Hover Color: brand-primary

CARD SHADOW & BORDER
- Border: 2px border-transparent
- Border Hover: 2px border-accent-green
- Shadow: shadow-md
- Shadow Hover: shadow-xl
- Transition: all duration-300
- Transform Hover: -translate-y-1

UPCOMING EVENT CARD
- Border: 2px border-champagne/60
- Border Hover: 2px border-accent-green
- Background: gradient-to-br from-white to-champagne/10
- Padding: p-5
- Shadow & Transform: same as news card
- Icon Container:
   * Height: h-40 (160px)
   * Background: gradient accent-green/5 to accent-blue/5
   * Decorative circles with blur effect
   * Icon Font Size: 7xl (4.5rem)
```

#### **Section Background Patterns - NEWS PAGE**
```
HERO SECTION:
- Background: linear-gradient(135deg, #0A1F2E 0%, #0A2139 100%)
- Padding: py-12 / md:py-16 px-6
- Centering: flex items-center justify-center

FILTER SECTION:
- Background: #FFFFFF
- Padding: py-6 / md:py-8 px-6
- Border Bottom: 2px border-champagne
- Sticky: sticky top-[72px] z-40
- Shadow: shadow-sm
- Text Alignment: center

STORIES GRID SECTION:
- Background: #FFFFFF
- Padding: py-12 / md:py-14 px-6
- Grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
- Gap: gap-6

UPCOMING EVENTS SECTION:
- Background: #FFFFFF
- Padding: py-12 / md:py-14 px-6
- Section Header Styling:
   * H2 Font Size: 3xl / md:4xl
   * H2 Font Weight: bold
   * H2 Color: brand-primary
   * Underline: h-1.5 w-16 bg-accent-green mt-3

SUBSCRIPTION SECTION:
- Background: gradient-to-r from-accent-green/10 to-accent-blue/10
- Border: 2px border-accent-green/40
- Border Radius: rounded-lg
- Padding: p-6
- Text Alignment: center

CTA SECTION (BOTTOM):
- Background: linear-gradient(to-r, brand-primary to accent-green)
- Padding: py-14 px-6
- Position: relative overflow-hidden
- Decorative circles (blur effect)
- H2 Color: white
- H2 Font Size: 3xl / md:4xl
- P Color: white/95
- Button Style:
   * Background: white
   * Color: accent-green
   * Font Weight: bold
   * Padding: py-3 px-8
   * Border Radius: rounded-lg
   * Hover: shadow-2xl scale-105
```

#### **Responsive Adjustments - NEWS PAGE**
```
MOBILE (< 768px):
- Hero H1: 1.8rem
- Hero P: 0.95rem
- Section Title: 2rem
- Card Font Sizes: -10% reduction
- Image Heights: h-40 / 160px
- Padding: px-4 / py-8
- Button Font: 0.875rem / 0.9rem

TABLET (768px - 1024px):
- Hero H1: 2.2rem
- Hero P: 1.1rem
- Card Image Height: h-40 / 160px
- Card Title: 1.4rem
- Card Excerpt: 1rem
- Padding: py-10 px-6

DESKTOP (> 1024px):
- Full sizing as specified above
```

---

### 1.2 GALLERY PAGE - Complete Design Breakdown

#### **Color System**
| Element | Color | Hex Code | Usage |
|---------|-------|----------|-------|
| Hero Background | Champagne/Light | #F7E7CE | Hero section |
| Hero Text Primary | Deep Dark | #102C26 | Heading |
| Hero Text Secondary | Gray | #A3A3A3 | Subheading |
| Accent Line | Teal | #7EBBBF | Decorative element |
| Tab Text Active | #102C26 | Font color when active |
| Tab Text Inactive | #8B8B8B | Font color when inactive |
| Tab Border | #7EBBBF | Bottom border on active |
| Gallery Background | #FFFFFF | Main gallery content |
| Card Border Hover | #7EBBBF | Focus ring & hover |
| CTA Button Primary | #145C44 | Green button |
| CTA Button Secondary | transparent | Border button |
| Lightbox Background | rgba(0,0,0,0.8) | Dark overlay |
| Lightbox Border | #7EBBBF | Box shadow glow |

#### **Typography Specifications**
```
HERO SECTION
- Main Title (H1):
  * Font Size: 3rem (48px) / md:3.5rem
  * Font Weight: 700 (Bold)
  * Color: #102C26
  * Letter Spacing: Tight
  * Text Align: center
  * Margin Bottom: mb-2

- Decorative Line:
  * Height: h-1 (4px)
  * Width: w-20 (80px)
  * Background: #7EBBBF
  * Border Radius: rounded-full
  * Margin Bottom: mb-4

- Subheading:
  * Font Size: 1.1rem (17.6px)
  * Font Style: italic
  * Color: #A3A3A3
  * Font Weight: 400
  * Line Height: relaxed (1.75)
  * Text Align: center
  * Max Width: max-w-2xl

TAB NAVIGATION
- Tab Button Font Size: 1rem / md:1.125rem (16px / 18px)
- Font Weight: bold (700)
- Text Transform: None (uses emoji prefix)
- Padding: pb-3 px-4
- Active Color: #102C26
- Inactive Color: #8B8B8B
- Border Bottom:
  * Active: 3px solid #7EBBBF
  * Inactive: none
- Transition: all duration-300

GALLERY GRID TITLES (H3 in cards):
- Font Size: Not directly visible (card component)
- Alt Text: Used for accessibility

CTA SECTION (Bottom)
- Main Heading (H2):
  * Font Size: 2xl / md:3xl (32px / 48px)
  * Font Weight: 700 (Bold)
  * Color: #102C26
  * Letter Spacing: 0.05em
  * Text Transform: UPPERCASE

- Body Text:
  * Font Size: base / md:lg (16px / 18px)
  * Font Weight: 400 (Normal)
  * Color: #666666
  * Line Height: relaxed (1.75)

- Emphasis Text:
  * Font Weight: bold
  * Color: #145C44

CTA BUTTONS
- Font Size: 0.875rem / md:base (14px / 16px)
- Font Weight: 700 (Bold)
- Padding: px-6 py-3 (24px 12px)
- Border Radius: rounded-lg
- Button Primary:
  * Background: #145C44
  * Color: #FFFFFF
  * Hover: opacity & shadow increase
  * Transition: all duration-300
  
- Button Secondary:
  * Background: transparent
  * Color: #145C44
  * Border: 2px solid #145C44
  * Hover: background #F0F9F6

STAT NUMBERS
- Font Size: 2xl / md:3xl (32px / 48px)
- Font Weight: 700 (Bold)
- Color: #145C44

STAT LABELS
- Font Size: 0.875rem / base (14px / 16px)
- Font Weight: 400 (Normal)
- Color: #888888

PLACEHOLDER TEXT
- H3 Font Size: 1.6rem (25.6px)
- H3 Color: #FFFFFF
- H3 Margin Top: mt-2
- P Font Size: 0.875rem (14px)
- P Color: #CCCCCC

CAPTION TEXT (Lightbox)
- Font Size: 0.875rem / base (14px / 16px)
- Color: #F7E7CE (Champagne)
- Text Align: center
- Margin Top: mt-4
```

#### **Card Design Patterns - GALLERY PAGE**
```jsx
GALLERY CARD (Image/Video):
1. Container Button:
   - Overflow: hidden
   - Border Radius: rounded-xl
   - Transition: all duration-300
   - Hover Effects:
     * Shadow: 0 0 15px rgba(126,187,191,0.8)
     * Transform: -translate-y-2 (move up)

2. Aspect & Image:
   - Aspect Ratio: square (aspect-square)
   - Background: bg-gray-200
   - Object Fit: cover
   - Group Hover Scale: 1.1

3. Overlay:
   - Position: absolute inset-0
   - Background: gradient rgba(16, 44, 38, 0.1) to rgba(126, 187, 191, 0.2)
   - Opacity: 0 to 1 on hover
   - Transition: opacity duration-300

LIGHTBOX/VIDEO MODAL:
- Fixed Overlay:
  * Background: black/80
  * Z Index: z-50
  * Display: flex center
  * Padding: p-4

- Close Button:
  * Position: absolute -top-10 right-0
  * Color: white
  * Hover Color: teal-400
  * Size: w-8 h-8

- Media Container:
  * Max Width: max-w-4xl
  * Aspect Ratio: Video aspect-video
  * Border Radius: rounded-lg
  * Box Shadow: 0 0 20px rgba(126, 187, 191, 0.6)

- Navigation Arrows:
  * Position: absolute left/right 4
  * Top: top-1/2 -translate-y-1/2
  * Color: white
  * Hover: teal-400
  * Size: w-10 h-10

- Counter:
  * Position: absolute -bottom-10 left-1/2 -translate-x-1/2
  * Color: white
  * Font Size: text-sm
  * Margin Top: mt-4

CTA CONTAINER (Make a Difference):
- Border Left: 4px border-champagne (#7EBBBF)
- Background: white
- Border Radius: rounded-xl
- Shadow: shadow-lg
- Padding: p-6 / md:p-8
- Grid: grid-cols-1 md:grid-cols-3
- Gap: gap-6 / md:gap-8

- Left Section (md:col-span-2):
  * Icon: text-4xl / md:text-5xl
  * Heading: text-2xl / md:text-3xl
  * Heading Color: #102C26
  * Text: text-base / md:text-lg
  * Text Color: #666666

- Right Section (md:border-l-2):
  * Border Color: #E8F3EE
  * Padding Left: md:pl-6
  * Stats Stack: space-y-4

STAT CARD (in CTA):
- Number: text-2xl / md:text-3xl font-bold color-#145C44
- Label: text-sm / md:text-base color-#888888
```

#### **Section Background Patterns - GALLERY PAGE**
```
HERO SECTION:
- Background: linear-gradient(180deg, #F7E7CE 0%, #FFFFFF 100%)
- Padding: py-12 / md:py-16 px-6
- Text Align: center
- Flex: flex items-center justify-center

TAB NAVIGATION SECTION:
- Background: #FFFFFF
- Border Bottom: 2px border-champagne
- Padding: py-5 px-6
- Position: sticky top-[72px] z-40
- Shadow: shadow-sm
- Display: flex justify-center

GALLERY CONTENT SECTION:
- Background: #FFFFFF
- Padding: py-8 / md:py-10 px-6
- Min Height: min-h-[400px]

GALLERY GRID:
- Grid Template Columns:
  * Images: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
  * Videos: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
- Gap: gap-3 sm:gap-4 md:gap-5

PLACEHOLDER (when empty):
- Background: gradient
- Padding: py-20 px-6
- Display: flex flex-col items-center
- Emoji: text-4xl
- Text: center

CTA SECTION (Bottom):
- Background: #FFFFFF
- Padding: py-8 / md:py-10 px-6
- Max Width Container: max-w-5xl
```

#### **Responsive Adjustments - GALLERY PAGE**
```
MOBILE (< 640px):
- Hero Title: reduce font size by 15-20%
- Hero Subtitle: 0.95rem
- Tab Font Size: 1rem
- Tab Padding: pb-3 px-4
- Gallery Grid Cols: 1 column
- Card Gap: gap-3
- CTA Grid: grid-cols-1
- Button Width: full

TABLET (640px - 1024px):
- Gallery Grid Cols:
  * Images: 2 columns
  * Videos: 2 columns
- Card Gap: gap-4
- CTA Grid: grid-cols-3 (partial layout)

DESKTOP (> 1024px):
- Full sizing as specified
- Images: 4 columns
- Videos: 3 columns
```

---

## SECTION 2: COLOR PALETTE - MASTER REFERENCE

### 2.1 Primary Colors Used Across Perfect Pages
```
Deep Forest (Brand Primary):
- Hex: #102C26
- Usage: Main headings, dark backgrounds, text on light
- RGB: (16, 44, 38)

Champagne (Brand Secondary):
- Hex: #F7E7CE
- Usage: Section backgrounds, warm accents
- RGB: (247, 231, 206)

Accent Green:
- Hex: #145C44
- Usage: Buttons, interactive elements, highlights
- RGB: (20, 92, 68)

Bright/Emerald Green:
- Hex: #2E7D32
- Usage: Primary CTA buttons, high contrast
- RGB: (46, 125, 50)

Teal/Accent Blue:
- Hex: #7EBBBF
- Usage: Borders, accents, decorative lines, focus states
- RGB: (126, 187, 191)

White:
- Hex: #FFFFFF
- Usage: Main background, text on dark

Light Gray (Muted):
- Hex: #A3A3A3
- Usage: Secondary text, subheadings

Dark Gray:
- Hex: #8B8B8B
- Usage: Inactive states, placeholder text

Darker Gray:
- Hex: #666666
- Usage: Body text on light backgrounds

Overlay Dark:
- Hex: #050F2A (used in News)
- Usage: Hero backgrounds, dark overlays
```

### 2.2 Tailwind Color Mapping
```javascript
'brand-primary': '#102C26'         // Deep Forest
'brand-secondary': '#F7E7CE'       // Champagne  
'brand-accent': '#2E7D32'          // Emerald
'accent-green': '#145C44'          // Accent Green
'accent-blue': '#7EBBBFF'          // Teal
'champagne': '#F7E7CE'             // Champagne
'deep-forest': '#102C26'           // Deep Forest
```

---

## SECTION 3: TYPOGRAPHY STANDARDS

### 3.1 Font Family
```css
Font Stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 
            'Droid Sans', 'Helvetica Neue', sans-serif

Font Rendering:
- -webkit-font-smoothing: antialiased
- -moz-osx-font-smoothing: grayscale
- text-rendering: optimizeLegibility
```

### 3.2 Font Weight Hierarchy
```
100 - Thin (not used)
300 - Light (not used)
400 - Normal (body text, descriptions)
500 - Medium (subtitles, secondary headings)
600 - Semibold (labels, badges)
700 - Bold (headings, CTA text)
900 - Extrabold (section titles, emphasis)
```

### 3.3 Font Size Scale
```
12px (0.75rem)    - xs: tiny labels, badges
14px (0.875rem)   - sm: captions, small text
16px (1rem)       - base: body text, small headings
18px (1.125rem)   - lg: card titles
20px (1.25rem)    - xl: subsection headings
24px (1.5rem)     - 2xl: section highlights
32px (2rem)       - 3xl: major section headings
40px (2.5rem)     - 4xl: page hero titles
48px (3rem)       - 5xl: primary page headings
```

### 3.4 Line Height
```
1.2   (tight)    - Headings, short text
1.5   (normal)   - Body copy, labels
1.6   (relaxed)  - Long-form text, readability
1.75  (relaxed+) - Important body copy
```

### 3.5 Letter Spacing
```
-0.02em  - Headings (tighter)
-0.01em  - Subheadings
0        - Normal body
0.01em   - Neutral (body)
0.02em   - Subtle spacing
0.05em   - Uppercase labels
0.08em   - Navigation text
0.1em    - Very tight tracking
0.15em   - Ultra tight (org details labels)
```

---

## SECTION 4: DESIGN COMPONENTS INVENTORY

### 4.1 Card Patterns (Reusable)
```jsx
PATTERN 1: News/Article Card
- Used in: News page, About page (potentially)
- Structure: Image + Content area
- Key Features: 
  * Border with hover color change
  * Category/Date badge
  * Title + excerpt + CTA
  * Hover: shadow increase, border color change, image zoom
  * Responsive: 1 col mobile, 2-3 cols tablet/desktop

PATTERN 2: Upcoming Event Card
- Used in: News page
- Structure: Icon area + Content
- Key Features:
  * Gradient background with overlay circles
  * Status badge ("Coming Soon")
  * Countdown timer
  * Title + teaser + description
  * CTA button
  * Responsive: 1 col mobile, 2-3 cols tablet/desktop

PATTERN 3: Volunteer/Role Card
- Used in: Contact page, Get Involved dropdown
- Structure: Icon + Content
- Key Features:
  * Icon (large emoji)
  * Title + description
  * Benefits list (checkmarks)
  * Rounded borders
  * Hover: shadow + lift effect
  * Responsive: 1 col mobile, 3 cols desktop

PATTERN 4: Award/Milestone Card
- Used in: About page
- Structure: Year badge + Icon + Content
- Key Features:
  * Large year display
  * Icon with hover scale
  * Title + description
  * "Learn more" link
  * Border styling
  * Responsive: 1 col mobile, 2-3 cols desktop

PATTERN 5: Testimonial Card
- Used in: About page
- Structure: Star rating + Quote + Author
- Key Features:
  * Star rating (visual)
  * Italic quote text
  * Author name + role
  * Subtle border
  * Responsive: 1 col mobile, 3 cols desktop

PATTERN 6: Impact Stat Card
- Used in: About page, Gallery page
- Structure: Icon + Number + Label
- Key Features:
  * Large number (4xl font)
  * Small label below
  * Icon or emoji
  * Subtle background tint
  * Responsive: scales appropriately
```

### 4.2 Button Styles (Standardized)
```jsx
PATTERN 1: Primary CTA Button
- Background: #145C44 (Accent Green)
- Text Color: #FFFFFF (White)
- Font Weight: bold (700)
- Padding: py-3 px-8 (12px 32px)
- Border Radius: rounded-lg
- Hover:
  * Background: darker shade
  * Shadow: shadow-lg or shadow-xl
  * Scale: scale-105 (optional)
- Focus: focus:ring-2 focus:ring-offset-1

PATTERN 2: Secondary Button
- Background: transparent
- Text Color: #145C44 (Accent Green)
- Border: 2px solid #145C44
- Font Weight: semibold or bold
- Padding: py-3 px-8
- Border Radius: rounded-lg
- Hover:
  * Background: #F0F9F6 (light tint)
  * Shadow: shadow-md

PATTERN 3: Tertiary Button
- Background: white/light
- Text Color: #145C44
- Border: none
- Font Weight: semibold
- Font Size: sm
- Hover: underline or color change

PATTERN 4: Icon Button (with arrow)
- Font: bold (700)
- Icon: → (arrow)
- Icon Spacing: gap-2 or gap-1.5
- Font Size: sm to base
- Hover: gap increases, color changes
```

### 4.3 Section Header Pattern (Standardized)
```jsx
SECTION HEADER STRUCTURE:
1. Label (optional)
   - Font Size: xs (0.75rem)
   - Font Weight: bold (700)
   - Text Transform: uppercase
   - Color: brand-primary or accent-green
   - Letter Spacing: 0.15em
   - Margin Bottom: mb-2 or mb-3

2. Main Heading (H2)
   - Font Size: 3xl to 4xl (48px-64px desktop)
   - Font Size: 2xl to 3xl (32px-48px tablet)
   - Font Size: xl to 2xl (20px-32px mobile)
   - Font Weight: bold or extrabold (700-900)
   - Color: brand-primary (#102C26)
   - Text Transform: UPPERCASE (on News/Gallery)
   - Letter Spacing: -0.02em to 0.05em
   - Line Height: 1.2 (tight)
   - Margin Bottom: mb-3 or mb-4

3. Subheading/Subtitle (P)
   - Font Size: base to lg (16px-18px)
   - Font Weight: medium (500)
   - Color: accent-green or gray (600-700)
   - Line Height: 1.6
   - Margin Bottom: mb-6 or mb-8
   - Max Width: max-w-2xl or max-w-3xl

4. Decorative Line (optional)
   - Height: h-1 (4px)
   - Width: w-16 to w-20 (64px-80px)
   - Background: accent-green or accent-blue
   - Border Radius: rounded-full
   - Margin Top: mt-3 or mt-4
   - Margin Bottom: mb-3 or mb-6

5. Bottom Border (optional)
   - Height: h-0.5 (2px)
   - Background: accent-green or gradient
   - Width: full or partial
   - Margin: mt-8 or pb-6
```

---

## SECTION 5: STYLING CONVENTIONS

### 5.1 Spacing Standards
```
Padding/Margin Scale:
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)

Section Padding:
- Mobile: px-4 to px-6, py-8 to py-12
- Tablet: px-6, py-12 to py-16
- Desktop: px-6 to px-8, py-16 to py-20

Container Max Width: max-w-6xl (1152px)
Inner Padding: px-6 or px-8
```

### 5.2 Shadows & Depth
```
Shadow Scale:
sm:    0 1px 2px 0 rgba(0, 0, 0, 0.05)
md:    0 4px 6px -1px rgba(0, 0, 0, 0.1)
lg:    0 10px 15px -3px rgba(0, 0, 0, 0.1)
xl:    0 20px 25px -5px rgba(0, 0, 0, 0.1)
2xl:   0 25px 50px -12px rgba(0, 0, 0, 0.25)

Usage:
- Cards: shadow-md to shadow-lg
- Hover Cards: shadow-xl
- CTA Sections: shadow-lg
- Modals/Overlays: shadow-2xl or box-shadow custom
```

### 5.3 Border Radius
```
sm:     4px (rounded-sm)
md:     8px (rounded)
lg:     12px (rounded-lg)
xl:     16px (rounded-xl)
2xl:    20px (rounded-2xl)
full:   50% (rounded-full / pill shape)

Usage:
- Cards: rounded-lg to rounded-xl
- Buttons: rounded-lg
- Images: rounded-lg to rounded-xl
- Badges: rounded-full (pills)
- Small elements: rounded or rounded-sm
```

### 5.4 Border Styles
```
Width:
- 1px: default (border)
- 2px: border-2 (emphasis)
- 3px: border-3 (strong emphasis)
- 4px: border-l-4 (left accent)

Colors:
- Subtle: gray-200 to gray-300
- Medium: accent-green (#145C44)
- Strong: brand-primary (#102C26)
- Decorative: accent-blue (#7EBBBF)

Usage:
- Card borders: 2px with color change on hover
- Bottom borders: 2px full width
- Left borders: 4px on testimonials/quotes
- Focus states: colored border + ring
```

### 5.5 Transitions & Animations
```
Duration:
fast:     0.15s
base:     0.3s
slow:     0.5s
600ms:    0.6s (scroll triggers)

Easing:
ease:     cubic-bezier(0.25, 0.46, 0.45, 0.94)
ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94)
ease-in:  cubic-bezier(0.4, 0, 0.2, 1)

Common Transitions:
- Colors: duration-300
- Transforms: duration-300 to duration-500
- Shadows: duration-300
- Border colors: duration-200 to duration-300
- Opacity: duration-300 to duration-600

Scroll Animations:
- Fade in: opacity 0→1
- Slide up: translateY 20px→0
- Slide in: translateX -30px→0
- Scale: scale 0.95→1
```

### 5.6 Focus & Accessibility
```
Focus States (Keyboard Navigation):
- Ring: focus:ring-2
- Ring Color: #7EBBBF (accent-blue)
- Ring Offset: focus:ring-offset-2 or focus:ring-offset-1
- Outline: focus:outline-none (when using ring)

Visible Focus:
- All interactive elements must have visible focus state
- Color: accent-blue (#7EBBBF) with slight glow
- Ring Width: 2-3px
- Ring Offset: 1-2px

Skip Link:
- Position: absolute top-[-40px] left-0
- Background: brand-primary
- Color: white
- Focus: top-0 with outline
```

---

## SECTION 6: ALIGNMENT STRATEGY FOR EACH PAGE

### 6.1 ABOUT US PAGE - Alignment Plan

**Current State:**
- Uses various font sizes and spacing inconsistently
- Some sections use old color schemes
- Card designs vary

**Changes Required:**

1. **Hero/Header Section**
   - Apply: News page hero pattern
   - Font: H1 3rem bold, subheading 1.4rem light
   - Colors: Background gradient (#F7E7CE to white) OR solid deep-forest with white text
   - Decorative line: h-1 w-16 bg-accent-green
   - Section Title: 3xl/4xl bold deep-forest UPPERCASE

2. **Mission & Vision Cards**
   - Apply: standardized card pattern
   - Border: 2px solid accent-green/brand-accent
   - Padding: p-8
   - Shadow: shadow-lg → shadow-xl on hover
   - Title Font: 2xl bold deep-forest
   - Body Font: base normal deep-forest
   - Hover: -translate-y-1

3. **Organization Details Section**
   - Font: sm labels (0.75rem, bold, uppercase, tracking-widest, color accent-green)
   - Font: base content (semibold, deep-forest)
   - Spacing: mb-6 between items
   - Colors: Maintain current but ensure consistent

4. **Leadership Section**
   - Apply: Award card pattern
   - Title: base/lg bold
   - Role: sm medium
   - Description: sm normal gray
   - Border: 2px brand-primary
   - Hover: shadow-lg -translate-y-1

5. **Awards Section**
   - Apply: Award card pattern (3 cards)
   - Year Badge: 3xl/4xl font-bold accent-green
   - Title: base/lg bold deep-forest
   - Description: xs/sm normal gray
   - Icon: 4xl hover:scale-110
   - Background: champagne
   - Border: 1px gray-200

6. **Impact Statistics**
   - Apply: Impact stat card pattern
   - Number: 4xl/5xl font-bold white
   - Label: sm font-medium gray-300
   - Background: dark (#050F2A recommended)
   - Icon: 4xl white

7. **Testimonials/Success Stories**
   - Apply: Testimonial card pattern
   - Rating: Star emoji display
   - Quote: sm/base italic deep-forest
   - Author: sm bold deep-forest
   - Role: xs medium gray
   - Border: 1px gray-200

8. **Values/Principles Section**
   - Apply: Generic card pattern or button grid
   - Maintain consistent styling
   - Ensure 3-4 column grid with proper gaps

9. **CTA Section (if present)**
   - Apply: News page CTA pattern
   - Background: gradient brand-primary to accent-green
   - Text: white, bold, 3xl/4xl
   - Button: white bg, accent-green text, bold
   - Padding: py-14 px-6

---

### 6.2 WHAT WE DO PAGE - Alignment Plan

**Current State:**
- Dropdown page (likely modal or detailed view)
- Needs consistent card design
- May have program cards or content lists

**Changes Required:**

1. **Page Hero/Header**
   - Apply: Gallery hero pattern
   - Background: champagne gradient or white
   - H1: 3rem bold deep-forest
   - Subheading: 1.1rem italic gray
   - Decorative line: h-1 w-20 bg-accent-blue

2. **Program/Service Cards** (if grid layout)
   - Apply: News card pattern or custom card
   - Icon: 4xl emoji at top or side
   - Title: lg bold deep-forest
   - Description: sm normal gray
   - Benefits/Details: sm normal with checkmarks
   - CTA: accent-green bold sm
   - Border: 2px with hover color change
   - Shadow: md → xl on hover
   - Responsive: 1 col mobile, 3 cols desktop

3. **Content Sections**
   - Apply: Section header pattern
   - Label: xs bold uppercase accent-green
   - H2: 3xl bold deep-forest UPPERCASE (optional)
   - Subtitle: lg medium accent-green
   - Decorative line: h-1 w-16 bg-accent-green

4. **Call-to-Action Elements**
   - Apply: Primary CTA button style
   - Font: bold, base/lg
   - Colors: accent-green bg, white text
   - Padding: py-3 px-8
   - Hover: darker shade, shadow-lg, scale-105

---

### 6.3 GET INVOLVED PAGE - Alignment Plan

**Current State:**
- Dropdown menu
- Contains sub-pages: Volunteer, Partner, Programs, Spread the Word
- Currently minimal styling

**Changes Required:**

1. **Main Get Involved Hero**
   - Apply: News/Gallery hero pattern
   - Background: Deep forest OR champagne gradient
   - H1: 3rem bold white/deep-forest
   - Subheading: 1.4rem light gray
   - Decorative line: h-1 bg-accent-green

2. **Volunteer Sub-page**
   - Apply: Contact page volunteer section styling (already good)
   - Keep current card design: 3 column grid
   - Ensure font sizes match (base/lg text)

3. **Partner With Us Sub-page**
   - Apply: Programs page card pattern
   - Use program/service card structure
   - Font sizes: base/lg for titles, sm for descriptions
   - Colors: Consistent green/dark forest

4. **Programs Sub-page**
   - Apply: Programs page styling
   - Cards: Icon + Title + Description + Impact
   - Modal: Consistent with News page StoryModal
   - Fonts: Standardized as per Programs.jsx

5. **Spread the Word Sub-page**
   - Apply: News/Gallery CTA pattern
   - Content: Link to home page (already perfect)
   - Ensure font size alignment with News/Gallery
   - Social sharing buttons: Standardized style

---

### 6.4 PROGRAMS PAGE - Alignment Plan

**Current State:**
- Has card grid and modal system
- Font sizes partially aligned but could be standardized

**Changes Required:**

1. **Hero Section**
   - Apply: News page hero pattern
   - Background: Deep dark with gradient
   - H1: 3rem bold white
   - Subheading: 1.4rem light gray
   - Metrics display: 2xl/3xl bold with labels

2. **Program Cards**
   - Apply: Standardized card pattern
   - Icon: 3xl/4xl emoji
   - Title: lg bold deep-forest
   - Short description: sm normal gray
   - CTA: "View Details" button (accent-green)
   - Border: 2px subtle
   - Shadow: md → lg on hover
   - Responsive: 1 col mobile, 2 cols tablet, 3-4 cols desktop

3. **Program Modal**
   - Apply: Refined modal pattern (similar to StoryModal)
   - Header: icon + title on champagne bg
   - Body: full description + impact
   - Close button: positioned correctly
   - Font sizes: base for body, lg for title
   - Colors: Maintain current (good design)

4. **Section Headers**
   - Apply: Section header pattern
   - Font sizes: 3xl/4xl for H2
   - Colors: deep-forest text
   - Decorative: accent-green line

---

### 6.5 CONTACT PAGE - Font Size Alignment Only

**Changes Required:**

1. **Hero Section - ALIGN FONT SIZES**
   - Current: Good structure, needs font size check
   - H1 Target: 2rem (32px) - currently seems OK
   - Subheading Target: 1.2rem (19px) - might need adjustment
   - Action: Ensure matches News/Gallery page sizing exactly

2. **Form Labels & Inputs**
   - Current: base font (16px) - GOOD
   - Action: Verify consistency, no change likely needed

3. **Contact Info Cards**
   - Title Font: lg bold (18px) - VERIFY
   - Content Font: sm/base (14-16px) - VERIFY
   - No major changes, just alignment check

4. **Volunteer Section**
   - H2 Font: 3xl/4xl bold - VERIFY matches News/Gallery
   - Card Titles: lg bold (18px) - VERIFY
   - Card Text: base normal (16px) - VERIFY
   - CTA Buttons: base/lg bold - VERIFY

5. **Overall Typography Audit**
   - Compare all font sizes with News page
   - Ensure consistency across sections
   - Main check: Section titles, card titles, body text
   - Target: ±1 size difference max for same hierarchy level

---

## SECTION 7: IMPLEMENTATION CHECKLIST

### Phase 1: Analysis & Preparation
- [ ] Review this entire document
- [ ] Open News.jsx and Gallery.jsx in parallel
- [ ] Compare current page styles with reference
- [ ] Document all discrepancies

### Phase 2: Color System Standardization
- [ ] Apply exact hex colors to all pages
- [ ] Update Tailwind color references if needed
- [ ] Verify hover/active states use correct colors
- [ ] Check light/dark contrast ratios (WCAG AA minimum)

### Phase 3: Typography Standardization
- [ ] Apply font-size scale consistently
- [ ] Audit all headings (H1, H2, H3, H4)
- [ ] Standardize font weights
- [ ] Verify line heights and letter spacing
- [ ] Mobile responsive font sizing

### Phase 4: Card Design Standardization
- [ ] Apply unified card pattern to all pages
- [ ] Standardize borders, shadows, hover effects
- [ ] Ensure responsive grid layouts (1/2/3/4 cols)
- [ ] Verify padding and gaps

### Phase 5: Button Design Standardization
- [ ] Apply unified button styles
- [ ] Verify all CTA buttons follow primary pattern
- [ ] Check secondary/tertiary button consistency
- [ ] Test hover/focus states

### Phase 6: Section Layout Standardization
- [ ] Apply section header pattern everywhere
- [ ] Standardize section padding
- [ ] Unify background patterns
- [ ] Verify max-width containers

### Phase 7: Component Updates
- [ ] Update About.jsx with new patterns
- [ ] Update Programs.jsx with standardized fonts
- [ ] Update OurWork.jsx (if separate page)
- [ ] Refine Get Involved components
- [ ] Audit Contact.jsx font sizes

### Phase 8: Responsive Testing
- [ ] Test mobile (375px)
- [ ] Test tablet (768px)
- [ ] Test desktop (1280px+)
- [ ] Verify all images scale properly
- [ ] Check text readability at all breakpoints

### Phase 9: Accessibility Check
- [ ] Verify heading hierarchy (h1 > h2 > h3, no skips)
- [ ] Check color contrast (WCAG AA: 4.5:1 normal, 3:1 large)
- [ ] Verify keyboard navigation
- [ ] Test focus states visibility
- [ ] Review alt text on all images

### Phase 10: Final QA
- [ ] Cross-browser testing
- [ ] Performance check (images, animations)
- [ ] Consistency audit across all pages
- [ ] Mobile menu functionality
- [ ] Form validation and submission
- [ ] Link functionality (internal/external)

---

## SECTION 8: QUICK REFERENCE TABLES

### 8.1 Font Size Quick Reference
```
Component                   | Desktop    | Tablet     | Mobile
Page Hero H1               | 3rem       | 2.5rem     | 1.8rem
Section H2 (main)          | 3rem       | 2.5rem     | 2rem
Section H2 (sub)           | 2.5rem     | 2rem       | 1.5rem
Card Title (H3)            | 1.125rem   | 1rem       | 1rem
Body Text                  | 1rem       | 1rem       | 0.9rem
Label/Badge                | 0.75rem    | 0.75rem    | 0.75rem
Button Text                | 1rem       | 0.9rem     | 0.875rem
Caption/Fine Print         | 0.875rem   | 0.875rem   | 0.75rem
```

### 8.2 Color Palette Quick Reference
```
Element                     | Color        | Hex        | Usage
Primary Text               | Deep Forest  | #102C26    | Headings, dark text
Secondary Text             | Gray         | #666666    | Body text on light
Tertiary Text              | Light Gray   | #A3A3A3    | Subheadings, captions
Primary Buttons            | Accent Green | #145C44    | CTAs, interactive
Secondary Buttons          | Em Green     | #2E7D32    | Important actions
Decorative Lines           | Accent Blue  | #7EBBBF    | Borders, accents
Section Backgrounds        | Champagne    | #F7E7CE    | Light section bgs
Dark Section Backgrounds   | Deep Dark    | #050F2A    | Dark overlays
White                      | Pure White   | #FFFFFF    | Main bg, text on dark
Card Borders (hover)       | Accent Green | #145C44    | Card interactive state
```

### 8.3 Spacing Quick Reference
```
Component           | Padding      | Margin      | Gap
Card Content       | p-5 to p-8   | -           | -
Section Container  | px-6 py-12   | -           | -
Card Grid          | -            | -           | gap-6
Button Group       | -            | -           | gap-4
List Items         | -            | mb-3 to mb-4| -
Hero Section       | py-12 to py-16| -          | -
```

---

## SECTION 9: ADDITIONAL NOTES

### Design Consistency Principles
1. **Color**: Use exact hex codes; no approximations
2. **Typography**: Follow font size scale strictly; no random sizes
3. **Spacing**: Use defined spacing scale; no arbitrary margins
4. **Shadows**: Use predefined shadow system; no custom shadows
5. **Border Radius**: Use standard radius values consistently
6. **Hover States**: Apply same hover effects to similar components
7. **Responsive**: Test all breakpoints; ensure proper scaling

### Common Mistakes to Avoid
1. Mixing font sizes from different pages
2. Using multiple shades of same color
3. Inconsistent border widths/colors
4. Varying shadow depths on similar elements
5. Different button styles for same action
6. Misaligned text decorative lines
7. Inconsistent card padding/spacing
8. Different hover effects on similar components

### Testing Checklist for Each Page
- [ ] All text readable at mobile size (min 12px)
- [ ] Buttons have minimum 44px touch target
- [ ] Images have descriptive alt text
- [ ] Color contrast meets WCAG AA
- [ ] Hover states visible on all interactive elements
- [ ] Mobile menu (if present) fully functional
- [ ] Forms have clear labels and validation
- [ ] Links have underline or clear distinction
- [ ] Loading states handled gracefully
- [ ] Accessibility: Tab order logical, focus visible

---

## CONCLUSION

This comprehensive guide provides:
1. **Complete analysis** of News & Gallery pages (your reference)
2. **Exact specifications** for colors, fonts, spacing
3. **Reusable component patterns** for consistency
4. **Alignment strategies** for each page needing updates
5. **Implementation checklist** for systematic rollout
6. **Quick reference tables** for quick lookups

Use this document as your source of truth for all design decisions going forward. Consistency across all pages will create a professional, cohesive experience for your users.

