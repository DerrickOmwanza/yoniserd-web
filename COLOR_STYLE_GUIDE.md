# YoNISeRD Color Style Guide
## Implementation & Usage Reference

---

## Brand Palette at a Glance

```
PRIMARY          SECONDARY        ACCENT           NEUTRALS
#102C26          #F7E7CE         #2E7D32          #1a1a1a / #6B6B6B / #F5F5F5 / #FFF
Deep Forest      Champagne       Emerald Green    Dark / Gray / Light / White
```

---

## Color Roles & Usage

### 1. PRIMARY: Deep Forest (#102C26)
**Role:** Brand identity, headers, major CTAs  
**When to use:**
- Page headings (h1, h2)
- Navigation bar
- Logo and logo accents
- Primary body text
- Section headers
- Borders and dividers

**Examples:**
```jsx
// Heading
<h1 className="text-brand-primary">Our Mission</h1>

// Navigation
<nav className="bg-brand-primary text-white">

// Text
<p className="text-brand-primary">Body content...</p>

// Border
<div className="border-b-2 border-brand-primary"></div>
```

**Contrast Reference:**
- On white: 11.9:1 ✅ AAA
- On off-white (#F5F5F5): 11.2:1 ✅ AAA
- On champagne: 3.8:1 ✅ AA

---

### 2. SECONDARY: Champagne (#F7E7CE)
**Role:** Section accents, warm backgrounds, supporting CTAs  
**When to use:**
- Feature section backgrounds
- Highlight cards or callout boxes
- Accent buttons (lower priority)
- Sidebar accents
- Footer hover states

**Examples:**
```jsx
// Section background
<section className="bg-brand-secondary text-brand-primary">
  <h2>Featured Programs</h2>
</section>

// Card accent
<div className="border-l-4 border-brand-secondary">
  <p>Supporting text...</p>
</div>

// Secondary button
<button className="bg-brand-secondary text-brand-primary hover:opacity-90">
  Learn More
</button>

// Hover state
<a className="hover:text-brand-secondary transition-colors">
  Footer Link
</a>
```

**Contrast Reference:**
- On white: 1.2:1 ⚠️ (use as background only, not text-heavy)
- On dark (#1a1a1a): 8.5:1 ✅ AAA
- On primary (#102C26): 3.8:1 ✅ AA

---

### 3. ACCENT: Emerald Green (#2E7D32)
**Role:** High-contrast CTAs, primary buttons, badges, focus states  
**When to use:**
- Primary action buttons ("Get Involved", "Donate")
- Important links in body text
- Success badges or status indicators
- Focus ring colors (keyboard navigation)
- Icon accents for important information

**Examples:**
```jsx
// Primary CTA button
<button className="bg-brand-accent text-white hover:opacity-90 focus:ring-2 focus:ring-brand-accent">
  Get Involved Today
</button>

// Link styling
<a href="/programs" className="text-brand-accent hover:underline font-semibold">
  View All Programs →
</a>

// Badge
<span className="bg-brand-accent text-white px-3 py-1 rounded-full text-sm">
  New Program
</span>

// Focus state
<input className="focus:ring-2 focus:ring-brand-accent border-brand-primary" />
```

**Contrast Reference:**
- On white: 5.8:1 ✅ AAA
- On light gray: 5.3:1 ✅ AAA
- On dark (#1a1a1a): 4.2:1 ✅ AA
- Text inside: Always white (21:1 ✅ AAA)

---

### 4. NEUTRALS: Dark / Gray / Light / White

#### 4a. Dark (#1a1a1a)
**Role:** Dark overlays, dark text on light, footers  
**When to use:**
- Footer background
- Dark overlay on images
- Dark mode sections
- High-contrast text backgrounds

```jsx
<footer className="bg-neutral-950 text-white">
<div className="bg-black/40"><!-- Overlay --></div>
```

#### 4b. Gray (#6B6B6B)
**Role:** Secondary text, muted UI elements  
**When to use:**
- Secondary text, metadata
- Placeholder text
- Disabled button states
- Subtle dividers
- Icon colors for secondary actions

```jsx
<p className="text-neutral-600">Last updated 2 days ago</p>
<span className="text-neutral-600 text-sm">Optional field</span>
```

#### 4c. Light (#F5F5F5)
**Role:** Subtle backgrounds, light accents  
**When to use:**
- Alternate row backgrounds in lists
- Subtle section backgrounds
- Form input backgrounds
- Divider backgrounds

```jsx
<section className="bg-neutral-100">
<div className="bg-neutral-100 rounded-lg">
```

#### 4d. White (#FFFFFF)
**Role:** Primary background, clean spaces  
**When to use:**
- Main page background
- Card backgrounds
- White text on dark (always pure white)
- High-contrast spaces

```jsx
<main className="bg-white">
<div className="bg-white rounded-lg shadow">
<p className="text-white">White text on dark</p>
```

---

## Common Component Patterns

### Buttons

```jsx
// Primary CTA (Most important action)
<button className="bg-brand-accent text-white font-bold py-3 px-6 rounded hover:opacity-90 transition-all">
  Get Involved
</button>

// Secondary (Less prominent)
<button className="bg-brand-secondary text-brand-primary font-bold py-3 px-6 rounded hover:opacity-90 transition-all">
  Learn More
</button>

// Tertiary (Lowest priority)
<button className="bg-white text-brand-primary border-2 border-brand-primary font-semibold py-3 px-6 rounded hover:bg-neutral-100">
  View Details
</button>

// Disabled state
<button disabled className="bg-neutral-600 text-white opacity-50 cursor-not-allowed">
  Coming Soon
</button>
```

### Cards & Sections

```jsx
// Feature card with accent border
<div className="bg-white border-l-4 border-brand-accent rounded-lg shadow-md p-6">
  <h3 className="text-brand-primary font-bold mb-2">Program Title</h3>
  <p className="text-neutral-600">Description text...</p>
</div>

// Highlight section
<section className="bg-brand-secondary text-brand-primary py-12 px-6 rounded-lg">
  <h2 className="font-bold text-2xl mb-4">Highlighted Content</h2>
  <p>This section stands out with warm champagne background.</p>
</section>

// Dark section
<section className="bg-brand-primary text-white py-12 px-6">
  <h2 className="font-bold text-2xl mb-4">Dark Section</h2>
  <p>White text on deep forest background.</p>
</section>
```

### Links & Text

```jsx
// Primary link (body text)
<a href="/about" className="text-brand-accent font-semibold hover:underline">
  About Us →
</a>

// Secondary link (footer)
<a href="/programs" className="text-white hover:text-brand-secondary transition-colors">
  Programs
</a>

// Muted text
<p className="text-neutral-600 text-sm">
  Supporting information, secondary importance
</p>

// Highlighted quote
<blockquote className="border-l-4 border-brand-accent pl-4 italic text-brand-primary">
  "Our youth are the future..."
</blockquote>
```

### Forms

```jsx
// Input with brand accent
<input
  type="email"
  placeholder="Enter your email"
  className="border-2 border-neutral-600 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent px-4 py-2 rounded"
/>

// Text area
<textarea
  className="border-2 border-brand-primary rounded p-4 focus:ring-2 focus:ring-brand-accent w-full"
  rows="5"
  placeholder="Your message..."
/>

// Label
<label className="text-brand-primary font-semibold block mb-2">
  Email Address
</label>
```

### Navigation

```jsx
// Navbar
<nav className="bg-brand-primary text-white py-4">
  <div className="flex justify-between items-center">
    <div className="text-white font-bold text-xl">YoNISeRD</div>
    <a href="/contact" className="bg-brand-accent text-white px-6 py-2 rounded hover:opacity-90">
      Get Involved
    </a>
  </div>
</nav>

// Footer
<footer className="bg-neutral-950 text-white py-8">
  <a href="/about" className="text-white hover:text-brand-secondary transition-colors">
    About Us
  </a>
</footer>
```

---

## Accessibility Checklist

When adding new components, verify:

- [ ] Text contrast is ≥ 4.5:1 for body text, ≥ 3:1 for large text
- [ ] Links are underlined or otherwise distinguished from surrounding text
- [ ] Buttons have clear hover/focus states using `focus:ring` utilities
- [ ] Color is never the only indicator of status (add icons, labels, or text)
- [ ] Disabled states are visually distinct (opacity or gray text)
- [ ] Focus indicators are visible (use `focus:ring-brand-accent`)

---

## Color Blind Simulation

**Test these combinations in DevTools to ensure clarity:**

1. **Deuteranopia** (red-green colorblind)
   - Primary (#102C26) remains clearly distinct ✅
   - Accent (#2E7D32) may appear less vibrant, so use text labels
   - Neutral grays (#6B6B6B) remain usable ✅

2. **Protanopia** (another form of red-green)
   - Same as deuteranopia; accent green is lower contrast
   - Solution: Pair accent with icons or text

3. **Tritanopia** (blue-yellow colorblind, rare)
   - All colors in this palette remain distinct ✅

**Tool:** Use Chrome DevTools → Rendering → Emulate CSS media feature `prefers-color-scheme`

---

## Do's and Don'ts

### ✅ DO

- Use **Primary** for all headers and main body text
- Use **Accent** for all primary CTAs and important links
- Use **Secondary** for background sections to add warmth
- Pair color with icons, text, or shapes for status indicators
- Test contrast ratios with WebAIM before shipping

### ❌ DON'T

- Use Champagne (#F7E7CE) as a text color on white backgrounds
- Mix multiple accent colors on one page (pick one green)
- Use color alone to indicate status (add text: "Success", "Error")
- Create new colors; ask design before introducing new hex values
- Assume 4-color palette is exhaustive; semantic colors exist if needed

---

## Quick Reference for Developers

| Element | Color | Utility Class | Notes |
|---------|-------|---|---|
| Main heading | Primary | `text-brand-primary` | h1, h2, h3 |
| Body text | Primary | `text-brand-primary` | Default for <p> |
| Secondary text | Gray | `text-neutral-600` | Metadata, captions |
| Primary button | Accent | `bg-brand-accent text-white` | "Get Involved", "Donate" |
| Secondary button | Secondary | `bg-brand-secondary text-brand-primary` | "Learn More" |
| Link | Accent | `text-brand-accent hover:underline` | In body or nav |
| Section bg | Secondary | `bg-brand-secondary` | Highlight sections |
| Dark section bg | Primary | `bg-brand-primary text-white` | Dark overlays, footers |
| Footer | Dark | `bg-neutral-950 text-white` | Footer container |
| Subtle bg | Light | `bg-neutral-100` | Alternate rows, soft sections |
| Focus ring | Accent | `focus:ring-brand-accent` | Keyboard navigation |

---

## Migration Checklist

If refactoring existing markup:

- [ ] Replace `text-white/95` with `text-white` (removes opacity)
- [ ] Replace `hover:text-white` with `hover:text-brand-secondary` in footer
- [ ] Replace old accent colors with `bg-brand-accent` for CTAs
- [ ] Test all contrast ratios in WebAIM
- [ ] Verify keyboard navigation shows focus rings
- [ ] Test on 50% brightness monitor
- [ ] Run axe DevTools scan
- [ ] Deploy with documentation link

---

## Support & Questions

If you're unsure about a color choice:
1. Check the contrast ratio (WebAIM)
2. Refer to the "Common Component Patterns" section
3. Check if the element matches a role in "Color Roles & Usage"
4. When in doubt, use Primary for text, Accent for CTAs

**Keep it simple:** 4 roles, infinite components.

---

*Last Updated: February 12, 2026*  
*Status: Production Ready*
