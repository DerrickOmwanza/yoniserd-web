# Apply Design System - Step-by-Step

**Status**: Design system CSS imported ✅  
**Next**: Apply CSS classes to each section component  

---

## Section 1: Youth Leadership Section

**File**: `src/components/YouthLeadershipSection.jsx`

### Find This (the wrapper `<section>`):
```jsx
<section className="...some classes...">
  <div className="...container classes...">
```

### Replace With This Pattern:
```jsx
<section className="section-padded section-bg-champagne">
  <div className="container-max">
    {/* Keep existing content */}
```

### Detailed Changes:

**Change 1: Main Section Tag**
```diff
- <section className="py-16 md:py-20" style={{ backgroundColor: '#F7E7CE' }}>
+ <section className="section-padded section-bg-champagne">
```

**Change 2: Container Div**
```diff
- <div className="max-w-5xl mx-auto px-4">
+ <div className="container-max">
```

**Change 3: Heading (if h2)**
```diff
- <h2 className="text-3xl md:text-4xl font-bold">Heading text</h2>
+ <h2 className="section-title">Heading text</h2>
```

**Change 4: Subtitle/Description**
```diff
- <p className="text-lg leading-relaxed">Description text</p>
+ <p className="section-subtitle">Description text</p>
```

**Change 5: Body Text**
```diff
- <p className="text-base leading-relaxed">Body text</p>
+ <p className="section-body">Body text</p>
```

**Change 6: Button (if present)**
```diff
- <button className="bg-green-700 text-white px-8 py-3">Button text</button>
+ <a href="/..." className="btn-primary">Button text</a>
```

**Expected Result**:
- Background is warm champagne color
- Text aligned properly
- Heading looks larger and bold
- Spacing is consistent

---

## Section 2: Programs Section (Home.jsx lines 121-149)

**File**: `src/pages/Home.jsx`

### Current Code (find this):
```jsx
<section className="py-16 md:py-20" id="program-grid" style={{ backgroundColor: '#F7E7CE' }}>
  <div className="max-w-5xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
      <p className="text-lg max-w-2xl mx-auto leading-relaxed">Description</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="program-card rounded-xl p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-3">Program Title</h3>
        <p className="text-base leading-relaxed mb-6">Description</p>
        <Link className="inline-flex items-center font-semibold text-brand-accent">Learn more →</Link>
      </div>
    </div>
  </div>
</section>
```

### Replace With:
```jsx
<section className="section-padded section-bg-champagne" id="program-grid">
  <div className="container-max">
    <div className="text-center mb-12">
      <h2 className="section-title text-center">What We Do</h2>
      <p className="section-subtitle">Description</p>
    </div>
    <div className="card-grid-3">
      <div className="card card-champagne">
        <h3 className="card-title">Program Title</h3>
        <p className="card-description">Description</p>
        <Link className="card-link">Learn more →</Link>
      </div>
    </div>
  </div>
</section>
```

### Step-by-Step Changes:
1. Section: `py-16 md:py-20` + `style={{ backgroundColor: '#F7E7CE' }}` → `section-padded section-bg-champagne`
2. Container: `max-w-5xl mx-auto px-4` → `container-max`
3. Heading: `text-3xl md:text-4xl font-bold mb-4` → `section-title text-center`
4. Subtitle: `text-lg max-w-2xl mx-auto leading-relaxed` → `section-subtitle`
5. Grid: `grid md:grid-cols-3 gap-8` → `card-grid-3`
6. Card: `program-card rounded-xl p-8 shadow-lg` → `card card-champagne`
7. Card heading: `text-xl font-bold mb-3` → `card-title`
8. Card description: `text-base leading-relaxed mb-6` → `card-description`
9. Card link: `inline-flex items-center font-semibold text-brand-accent` → `card-link`

**Visual Check After**:
- ✅ Background is warm champagne
- ✅ Cards have consistent styling
- ✅ Heading is large and bold
- ✅ Spacing is consistent
- ✅ Links are green
- ✅ Hover effect works (card lifts)

---

## Section 3: Impact Metrics Section

**File**: `src/components/OptimizedImpactMetrics.jsx` or `src/components/ImpactMetrics.jsx`

### Find the Section Wrapper:
```jsx
<section className="py-20 bg-light">
  <div className="max-w-5xl mx-auto">
```

### Replace With:
```jsx
<section className="section-padded section-bg-white">
  <div className="container-max">
```

### Find the Metrics Grid:
```jsx
<div className="grid md:grid-cols-3 gap-8">
  <div className="text-center">
    <div className="text-5xl font-extrabold text-green-700">7+</div>
    <p className="text-sm uppercase mt-4 font-bold">Years of youth impact</p>
  </div>
  {/* repeat for each metric */}
</div>
```

### Replace With:
```jsx
<div className="card-grid-3">
  <div className="metric-card">
    <div className="metric-value">7+</div>
    <p className="metric-label">Years of youth impact</p>
  </div>
  {/* repeat for each metric */}
</div>
```

### Add "Partner With Us" Button Below Metrics:
```jsx
{/* After the metric grid closes */}
<div className="flex-center mt-lg">
  <a href="/contact" className="btn-primary">Partner With Us</a>
</div>
```

### Step-by-Step Changes:
1. Section: `py-20 bg-light` → `section-padded section-bg-white`
2. Container: `max-w-5xl mx-auto` → `container-max`
3. Heading: `text-4xl font-bold` → `section-title text-center`
4. Grid: `grid md:grid-cols-3 gap-8` → `card-grid-3`
5. Metric div: `text-center` → `metric-card`
6. Metric value: `text-5xl font-extrabold text-green-700` → `metric-value`
7. Metric label: `text-sm uppercase mt-4 font-bold` → `metric-label`
8. **Add CTA button**: `btn-primary` class (important for prominence!)

**Visual Check After**:
- ✅ Background is white
- ✅ Metric cards have champagne background
- ✅ Numbers are large and bold (green)
- ✅ Labels are small and uppercase
- ✅ **"Partner With Us" button is visible below** (KEY!)
- ✅ Button is primary green with white text

---

## Section 4: Stories Section (Home.jsx lines 157-190)

**File**: `src/pages/Home.jsx`

### Find the Section:
```jsx
<section className="section-padded bg-light" id="news">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
      <div>
        <p className="section-label uppercase tracking-wider text-gray-600">Latest stories</p>
        <h2 className="section-title text-gray-900 mt-2">Youth-led change that inspires</h2>
      </div>
      <Link to="/our-work" className="btn-alt shrink-0">View all stories</Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="story-card bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
        <span className="inline-block bg-brand-accent text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-2 w-fit">
          Our Work
        </span>
        <h3 className="text-base font-bold text-brand-primary mb-2 line-clamp-2">Story Title</h3>
        <p className="text-neutral-600 text-sm leading-relaxed flex-grow line-clamp-3 mb-3">Excerpt</p>
        <Link className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-primary transition-colors text-sm">
          Keep reading →
        </Link>
      </div>
    </div>
  </div>
</section>
```

### Replace With:
```jsx
<section className="section-padded section-bg-light" id="news">
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
        <p className="story-excerpt">Excerpt</p>
        <Link className="card-link">Keep reading →</Link>
      </div>
    </div>
  </div>
</section>
```

### Step-by-Step Changes:
1. Section: `section-padded bg-light` → `section-padded section-bg-light`
2. Container: `max-w-6xl mx-auto` → `container-max`
3. Section label: Keep as is (or add `section-label` class)
4. Heading: Keep `section-title` (already good)
5. "View all" button: `btn-alt` → `btn-secondary`
6. Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` → `square-card-grid`
7. Story card: `story-card bg-white rounded-lg shadow-md border border-gray-100` → `story-card`
8. Tag: Old classes → `story-tag`
9. Title: `text-base font-bold text-brand-primary mb-2 line-clamp-2` → `story-title`
10. Excerpt: `text-neutral-600 text-sm leading-relaxed flex-grow line-clamp-3 mb-3` → `story-excerpt`
11. Link: Old classes → `card-link`

**Visual Check After**:
- ✅ Background is light gray
- ✅ Cards are square (1:1 aspect ratio)
- ✅ Tag is green with white text
- ✅ Title is bold and dark
- ✅ Excerpt is smaller and muted
- ✅ Link is green
- ✅ "View all stories" button styled correctly
- ✅ Responsive: 3 cards (desktop), 1-2 (mobile)
- ✅ Hover effect works (card lifts)

---

## Section 5: Values Section (Home.jsx lines 193-199)

**File**: `src/pages/Home.jsx`

### Current Code:
```jsx
<section className="section-padded bg-light" id="values">
  <div className="max-w-6xl mx-auto">
    <p className="section-label text-center uppercase tracking-wider text-brand-blue text-2xl md:text-3xl font-extrabold mb-4">Values</p>
    <h2 className="section-title text-center text-gray-900 mt-3 text-4xl md:text-5xl font-bold">Principles that anchor every partnership</h2>
    <PrinciplesModal />
  </div>
</section>
```

### Replace With:
```jsx
<section className="section-padded section-bg-champagne" id="values">
  <div className="container-max text-center">
    <p className="section-label">Values</p>
    <h2 className="section-title">Principles that anchor every partnership</h2>
    <PrinciplesModal />
  </div>
</section>
```

### Changes:
1. Section: `bg-light` → `section-bg-champagne`
2. Container: `max-w-6xl mx-auto` → `container-max text-center`
3. Label: Simplify to just `section-label`
4. Heading: Simplify to just `section-title`

**Note**: If PrinciplesModal renders cards, ensure they use `.card card-champagne` class.

---

## Section 6: Final CTA Section (Home.jsx lines 202-219)

**File**: `src/pages/Home.jsx`

### Current Code:
```jsx
<section className="section-padded brand-sunrise text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="section-title text-[#102C26]">Ready to collaborate...</h2>
    <p className="text-[#102C26] text-lg leading-relaxed max-w-2xl mx-auto mt-6">Let's co-design...</p>
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      <Link to="/contact" className="bg-white text-brand-blue font-bold py-3 px-8 rounded">Talk to our team</Link>
      <Link className="border-2 border-white text-white font-bold py-3 px-8 rounded">Share our story</Link>
    </div>
  </div>
</section>
```

### Replace With:
```jsx
<section className="section-padded section-bg-gradient-forest">
  <div className="container-max text-center">
    <h2 className="section-title inverted">Ready to collaborate on youth-centered research and development?</h2>
    <p className="section-subtitle inverted">Let's co-design programs, document evidence, and amplify the leadership of Kenya's next generation.</p>
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      <Link to="/contact" className="btn-primary">Talk to our team</Link>
      <Link to="/#news" className="btn-secondary">Share our story</Link>
    </div>
  </div>
</section>
```

### Step-by-Step Changes:
1. Section: `brand-sunrise` → `section-bg-gradient-forest`
2. Heading: inline colors → `section-title inverted` (white on dark)
3. Subtitle: inline colors → `section-subtitle inverted` (white on dark)
4. Buttons: Custom classes → `btn-primary` + `btn-secondary`

**Visual Check After**:
- ✅ Background is dark forest gradient
- ✅ Text is white and readable
- ✅ Buttons styled correctly (primary + secondary)
- ✅ Spacing balanced
- ✅ Responsive: buttons stack on mobile

---

## Section 7: Footer (src/components/Footer.jsx)

**File**: `src/components/Footer.jsx`

### Find the Footer Section Tag:
```jsx
<footer className="bg-...">
  <div className="...">
```

### Apply These Changes:
```jsx
<footer className="section-bg-primary section-padded">
  <div className="container-max">
    {/* Keep existing content structure, just update classes */}
```

### Update Headings:
```diff
- <h3 className="text-lg font-bold text-white">Column Title</h3>
+ <h3 className="section-title inverted">Column Title</h3>
```

### Update Text:
```diff
- <p className="text-white">Footer text</p>
+ <p className="section-body inverted">Footer text</p>
```

### Update Links (if in lists):
```diff
- <a href="..." className="text-white hover:text-green">Link</a>
+ <a href="..." className="card-link">Link</a>
```

### Update Layout to 3-Column:
```diff
- <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
+ <div className="card-grid-3">
```

**Visual Check After**:
- ✅ Background is deep forest (dark)
- ✅ Text is white
- ✅ 3-column layout on desktop
- ✅ Links styled in green
- ✅ Responsive: 1 column on mobile
- ✅ Social icons interactive

---

## Summary of All Changes

| Section | File | Key Classes |
|---------|------|-------------|
| Hero | ImprovedHeroSection.jsx | ✅ Already done |
| Leadership | YouthLeadershipSection.jsx | `.section-padded .section-bg-champagne .container-max .section-title .btn-primary` |
| Programs | Home.jsx | `.section-bg-champagne .card-grid-3 .card .card-title .card-link` |
| Impact | OptimizedImpactMetrics.jsx | `.section-bg-white .card-grid-3 .metric-card .btn-primary` |
| Stories | Home.jsx | `.section-bg-light .square-card-grid .story-card .story-tag .card-link` |
| Values | Home.jsx | `.section-bg-champagne .card-grid-4 .card` |
| Final CTA | Home.jsx | `.section-bg-gradient-forest .section-title.inverted .btn-primary .btn-secondary` |
| Footer | Footer.jsx | `.section-bg-primary .card-grid-3 .section-title.inverted .card-link` |

---

## Testing After Each Section

After updating each section:

```bash
npm start
```

Check in browser:
- ✅ Section has correct background color
- ✅ Heading is styled properly
- ✅ Spacing looks consistent
- ✅ Buttons styled correctly
- ✅ Cards have hover effects
- ✅ Responsive at 768px width (should stack)
- ✅ No console errors

---

## Order of Implementation

1. **Programs** (easiest - straightforward grid)
2. **Impact** (add button prominence)
3. **Stories** (convert to square grid)
4. **Leadership** (apply basic section styles)
5. **Values** (simple card grid)
6. **Footer** (footer-specific styles)
7. **Final CTA** (gradient background)
8. **Full Test** (all sections together)

---

## Next Steps

1. Start with Programs section
2. Copy/paste the replacement code above
3. Run `npm start` and verify
4. Move to next section
5. Repeat until all done
6. Run full QA checklist

**Estimated time per section**: 5-10 minutes  
**Total time for all sections**: 1-2 hours

Ready to start? Pick one section and let me know if you need exact line numbers or have questions!
