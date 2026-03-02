# Quick Reference - Design Standards

## For Future Development

When adding new sections or pages, use these standards to maintain consistency with NEWS and GALLERY pages.

---

## Section Header Pattern (REQUIRED)

Always use this exact pattern:

```jsx
{/* Section Header */}
<div className="text-center mb-12">
  <p className="text-xs font-bold uppercase tracking-widest mb-3" 
     style={{ color: '#145C44', letterSpacing: '0.15em' }}>
    SECTION LABEL
  </p>
  <h2 className="text-3xl md:text-5xl font-bold mb-3 uppercase tracking-tight"
      style={{ color: '#102C26', letterSpacing: '0.05em' }}>
    Section Heading
  </h2>
  <div className="h-1 w-16 bg-accent-green mx-auto mb-6" 
       style={{ backgroundColor: '#7EBBBF' }}></div>
  <p className="text-base md:text-lg font-medium text-center mx-auto"
     style={{ color: '#145C44' }}>
    Subtitle or supporting text
  </p>
</div>
```

---

## Color Palette (STANDARD)

**Always Use These Hex Codes** (not approximations):

```css
/* Primary Colors */
--brand-primary: #102C26;      /* Deep Forest - Headings */
--accent-green: #145C44;        /* Accent Green - Interactive */
--accent-blue: #7EBBBF;         /* Teal Blue - Decorative */
--champagne: #F7E7CE;           /* Champagne - Light BG */

/* Text Colors */
--text-dark: #102C26;           /* Headings */
--text-muted: #666666;          /* Body on light */
--text-light: #A3A3A3;          /* Secondary text */
--text-white: #FFFFFF;          /* White text */

/* Neutrals */
--gray-light: #F5F5F5;
--gray-medium: #8B8B8B;
--gray-dark: #565449;
```

---

## Typography Scale (STANDARD)

**NEVER use `text-sm` for body text. Always use `text-base`.**

```css
/* Font Sizes */
text-xs     = 0.75rem   (12px)  ← Labels only
text-sm     = 0.875rem  (14px)  ← DON'T USE (use base instead)
text-base   = 1rem      (16px)  ← Body text, form fields, small text
text-lg     = 1.125rem  (18px)  ← Card titles, small headings
text-xl     = 1.25rem   (20px)  ← Medium headings (rare)
text-2xl    = 1.5rem    (24px)  ← Subsection headings
text-3xl    = 1.875rem  (30px)  ← Mobile section headings
text-4xl    = 2.25rem   (36px)  ← Tablet section headings
text-5xl    = 3rem      (48px)  ← Desktop section headings

/* Font Weights */
font-normal     = 400   ← Body text
font-medium     = 500   ← Subtitles, labels
font-semibold   = 600   ← Emphasis (rare)
font-bold       = 700   ← Headings, buttons, labels
font-extrabold  = 900   ← (not used, use 700 instead)
```

---

## Spacing System (STANDARD)

**Section Padding**:
```jsx
// Standard section padding
<section className="py-12 md:py-16 px-6">
  {/* or for larger sections: */}
  {/* className="py-16 md:py-20 px-6" */}
</section>
```

**Internal Spacing**:
```jsx
// Label to heading
mb-3            // 12px (3 × 4px)

// Heading to decorative line
mb-3            // 12px (included above)

// Decorative line to subtitle
mb-6            // 24px (6 × 4px)

// Section items
gap-6           // 24px between grid items

// Card padding
p-6 or p-8      // 24px or 32px
```

---

## Card Pattern (STANDARD)

```jsx
<div className="rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200">
  {/* Content here */}
</div>
```

**Key Properties**:
- `rounded-lg` = 8px border radius
- `p-6` or `p-8` = 24px or 32px padding
- `shadow-md` default, `shadow-lg` on hover
- `hover:-translate-y-1` = lift 4px on hover
- `transition-all duration-300` = 0.3s smooth transition
- `border border-gray-200` or `border-2 border-accent-green`

---

## Button Style (STANDARD)

```jsx
<button className="text-base font-bold py-3 px-8 rounded-lg transition-all duration-300"
        style={{ backgroundColor: '#145C44', color: '#FFFFFF' }}>
  Button Text
</button>
```

**Key Properties**:
- `text-base font-bold` = 16px, weight 700
- `py-3 px-8` = 12px top/bottom, 32px left/right
- `rounded-lg` = 8px border radius
- Default color: #145C44, Text: white
- Hover: darker or shadow-lg
- `transition-all duration-300` = smooth 0.3s transition

---

## Decorative Line (STANDARD)

```jsx
<div className="h-1 w-16 bg-accent-green mx-auto mb-6" 
     style={{ backgroundColor: '#7EBBBF' }}></div>
```

**Properties**:
- Height: `h-1` (4px)
- Width: `w-16` (80px)
- Color: Always `#7EBBBF` (teal)
- Centering: `mx-auto`
- Margin below: `mb-6` (24px)

---

## Responsive Breakpoints (STANDARD)

```
Mobile:   < 640px   → Single column, compact spacing
Tablet:   640-1024px → 2 columns, medium spacing
Desktop:  > 1024px   → 3-4 columns, spacious layout
```

**Container Max Width**:
```jsx
<div className="max-w-6xl mx-auto">  // 1152px max width
  {/* Content here */}
</div>
```

---

## Component Examples

### Example 1: Simple Card Grid
```jsx
<section className="py-12 md:py-16 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      <p className="text-xs font-bold uppercase tracking-widest mb-3" 
         style={{ color: '#145C44', letterSpacing: '0.15em' }}>
        CARDS
      </p>
      <h2 className="text-3xl md:text-5xl font-bold mb-3 uppercase tracking-tight"
          style={{ color: '#102C26', letterSpacing: '0.05em' }}>
        Card Grid Example
      </h2>
      <div className="h-1 w-16 bg-accent-green mx-auto mb-6" 
           style={{ backgroundColor: '#7EBBBF' }}></div>
    </div>

    {/* Card Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} 
             className="rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200">
          <h3 className="text-lg font-bold mb-3" style={{ color: '#102C26' }}>
            {item.title}
          </h3>
          <p className="text-base text-gray-600 mb-4">
            {item.description}
          </p>
          <button className="text-base font-bold" style={{ color: '#145C44' }}>
            Learn more →
          </button>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Example 2: Section with Split Content
```jsx
<section className="py-16 md:py-20 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      {/* ... header code ... */}
    </div>

    {/* Two Column Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Column */}
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-3" 
            style={{ color: '#102C26' }}>
          Column Title
        </h3>
        <p className="text-base text-gray-600 leading-relaxed">
          Content goes here...
        </p>
      </div>

      {/* Right Column */}
      <div>
        {/* More content */}
      </div>
    </div>
  </div>
</section>
```

---

## Common Mistakes to AVOID

❌ **DO NOT USE**:
- `text-sm` for body text (use `text-base`)
- `text-2xl` or `text-3xl` for section headings on desktop (use `text-4xl` or `text-5xl`)
- Custom colors instead of the standard palette
- Custom shadows instead of the shadow scale
- `px-4` for section padding (use `px-6`)
- `py-8` or `py-10` for sections (use `py-12` or `py-16`)
- Font colors other than: #102C26, #145C44, #7EBBBF, #666666, #A3A3A3, #FFFFFF

✅ **DO USE**:
- `text-base` for body text
- `text-3xl md:text-5xl` for section headings
- Standard hex colors only (copy-paste from this guide)
- Standard shadow scale (sm, md, lg, xl)
- `px-6` for all section padding
- `py-12 md:py-16` or `py-16 md:py-20`
- Exact font sizes from Typography Scale section

---

## Checklist for New Sections

When adding a new section, verify:

- [ ] Section header follows pattern (label + heading + line + subtitle)
- [ ] All text uses correct font size (no sm for body)
- [ ] All colors from standard palette
- [ ] Section padding is `py-12 md:py-16 px-6` minimum
- [ ] Cards use standard pattern (p-6, shadow, border, hover)
- [ ] Buttons use standard style (base font, correct colors)
- [ ] Responsive: 1 col mobile, 2 cols tablet, 3+ cols desktop
- [ ] Max-width container: `max-w-6xl`
- [ ] Spacing consistent with rest of page
- [ ] No custom CSS needed (use Tailwind + inline styles)

---

## Quick Copy-Paste Templates

### Section Header
```jsx
<div className="text-center mb-12">
  <p className="text-xs font-bold uppercase tracking-widest mb-3" 
     style={{ color: '#145C44', letterSpacing: '0.15em' }}>LABEL</p>
  <h2 className="text-3xl md:text-5xl font-bold mb-3 uppercase tracking-tight"
      style={{ color: '#102C26', letterSpacing: '0.05em' }}>Heading</h2>
  <div className="h-1 w-16 bg-accent-green mx-auto mb-6" 
       style={{ backgroundColor: '#7EBBBF' }}></div>
  <p className="text-base md:text-lg font-medium text-center mx-auto"
     style={{ color: '#145C44' }}>Subtitle</p>
</div>
```

### Card
```jsx
<div className="rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200">
  <h3 className="text-lg font-bold mb-3" style={{ color: '#102C26' }}>Title</h3>
  <p className="text-base text-gray-600 mb-4">Description</p>
  <button style={{ color: '#145C44' }} className="text-base font-bold">
    Learn more →
  </button>
</div>
```

### Button
```jsx
<button className="text-base font-bold py-3 px-8 rounded-lg transition-all duration-300"
        style={{ backgroundColor: '#145C44', color: '#FFFFFF' }}>
  Button Text
</button>
```

---

## Reference Files

- **Complete Analysis**: `COMPREHENSIVE_DESIGN_ANALYSIS_AND_ALIGNMENT_GUIDE.md`
- **Implementation Log**: `IMPLEMENTATION_STATUS_PHASE_1.md`
- **Visual Guide**: `VISUAL_CHANGES_QUICK_GUIDE.md`
- **Testing Checklist**: `TESTING_AND_VERIFICATION_CHECKLIST.md`

---

## Questions?

Refer to the appropriate file above or check the implemented examples in:
- About.jsx (Mission & Vision section)
- Programs.jsx (Hero section)
- Contact.jsx (Volunteer section)

These are production examples of the standards in action.

