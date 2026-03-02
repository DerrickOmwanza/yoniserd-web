# Testing & Verification Checklist

## Pre-Deployment Testing

### Phase 1: Code Quality
- [ ] No TypeScript/ESLint errors: `npm run lint`
- [ ] No console warnings/errors: Open DevTools (F12)
- [ ] All imports resolved correctly
- [ ] No missing dependencies

### Phase 2: Visual Regression Testing

#### Typography
- [ ] About.jsx - Mission section uses consistent font sizes
- [ ] About.jsx - All section headings are 3xl/5xl (UPPERCASE)
- [ ] Programs.jsx - Card descriptions use text-base (not sm)
- [ ] Programs.jsx - "Learn More" buttons use text-base (not sm)
- [ ] Contact.jsx - Volunteer section heading is 3xl/5xl
- [ ] All body text appears to be 16px (base size)

#### Colors
- [ ] All section headings: #102C26 (Deep Forest)
- [ ] All labels: #145C44 (Accent Green)
- [ ] All decorative lines: #7EBBBF (Teal)
- [ ] Card text: #666666 or consistent gray
- [ ] No color flicker or inconsistency

#### Spacing
- [ ] Section padding: px-6 (consistent)
- [ ] Vertical padding: py-12 md:py-16 or py-16 md:py-20
- [ ] Label to heading: mb-3 gap
- [ ] Decorative line to subtitle: mb-6 gap
- [ ] Card gaps: gap-6

#### Decorative Lines
- [ ] Height: h-1 (4px)
- [ ] Width: w-16 (80px)
- [ ] Color: #7EBBBF (teal)
- [ ] Positioning: Centered (mx-auto)
- [ ] Margin: mb-6

#### Responsive Design

**Mobile (375px) - Check on iPhone SE/5:**
- [ ] Text remains readable
- [ ] Section headings scale down appropriately
- [ ] Cards stack in single column
- [ ] Padding adequate on left/right
- [ ] Decorative lines remain centered
- [ ] No horizontal scroll

**Tablet (768px) - Check on iPad:**
- [ ] Cards display in 2 columns where appropriate
- [ ] Text sizing appropriate
- [ ] Spacing balanced
- [ ] Full-width sections work correctly

**Desktop (1280px+):**
- [ ] Full design displays correctly
- [ ] Cards in 3-4 column grids
- [ ] Maximum width containers (max-w-6xl) honored
- [ ] Side padding (px-6) appropriate

### Phase 3: Component Testing

#### About.jsx
- [ ] Mission & Vision section displays correctly
- [ ] Cards have proper borders and shadows
- [ ] Organization Details section aligned
- [ ] CEO Message section layout correct
- [ ] Leadership cards styled properly
- [ ] Timeline/Journey section renders
  - [ ] Vertical line visible (desktop only)
  - [ ] Timeline items spaced correctly
  - [ ] Mobile layout works
- [ ] Awards section grid displays (3 cols desktop, 1 col mobile)
- [ ] Impact Statistics visible and colored correctly
- [ ] Success Stories/Testimonials cards render
- [ ] All hover states work (shadow, lift, color change)

#### Programs.jsx
- [ ] Hero section displays label + heading + line + subtitle
- [ ] Program cards display in 2-column grid
- [ ] Card backgrounds alternate (white/champagne)
- [ ] Icons scale on hover
- [ ] Card lift effect on hover (-translate-y-6)
- [ ] Program modal opens/closes
- [ ] Modal header displays correctly (icon + title)
- [ ] Modal body has proper spacing
- [ ] Modal close button works
- [ ] "Get Involved" button links to contact page
- [ ] Impact metrics section displays in 4 columns (desktop)
- [ ] Impact metrics responsive on mobile

#### Contact.jsx
- [ ] Hero section displays correctly (already tested)
- [ ] Contact form displays with all fields
- [ ] Volunteer section header displays new styling
- [ ] Volunteer cards display in 3-column grid (desktop)
- [ ] Volunteer card hover effects work
- [ ] Testimonial section displays
- [ ] CTA buttons work and link correctly
- [ ] Form validation works
- [ ] Success message appears after form submission

### Phase 4: Cross-Browser Testing

#### Chrome/Edge/Brave
- [ ] All fonts render correctly
- [ ] Colors display accurately
- [ ] Spacing/padding correct
- [ ] No layout shifts

#### Firefox
- [ ] Fonts match Chrome rendering
- [ ] Colors accurate
- [ ] Flexbox/Grid layouts work
- [ ] Box-shadow effects visible

#### Safari (Mac/iOS)
- [ ] -webkit prefixes working (font-smoothing, etc.)
- [ ] Fonts render smoothly
- [ ] Colors match expectations
- [ ] Mobile viewport looks correct

#### Mobile Safari (iPhone)
- [ ] Text readable without zoom
- [ ] Touch targets adequate (44px minimum)
- [ ] No horizontal scroll
- [ ] Buttons clickable

### Phase 5: Accessibility Audit

#### Color Contrast
- [ ] Headings vs background: >= 11.5:1 (AAA) ✓
- [ ] Labels vs background: >= 5.8:1 (AA+) ✓
- [ ] Body text vs background: >= 6.3:1 (AA+) ✓
- [ ] Use WCAG Contrast Checker tool

#### Heading Hierarchy
- [ ] H1 only appears once per page (main title)
- [ ] H2 used for sections (not h1)
- [ ] H3 used for subsections
- [ ] No skipped levels (e.g., no h1→h3)
- [ ] Check: View > Developer > View Page Structure

#### Keyboard Navigation
- [ ] Tab key moves through interactive elements logically
- [ ] Focus indicator visible (blue outline)
- [ ] Skip link present and functional (Tab → Enter)
- [ ] Form fields accessible via keyboard
- [ ] Modal can be closed with Escape key
- [ ] Links distinguishable from text

#### Screen Reader Testing
- [ ] Use NVDA (Windows) or VoiceOver (Mac)
- [ ] All headings announced correctly
- [ ] Links have descriptive text (not "click here")
- [ ] Images have descriptive alt text
- [ ] Form labels associated with inputs
- [ ] Button purposes clear

#### Mobile Accessibility
- [ ] Touch targets >= 44px
- [ ] Text zoom to 200% works without horizontal scroll
- [ ] Color not sole means of conveying information
- [ ] Animations respect prefers-reduced-motion

### Phase 6: Performance Testing

#### Lighthouse Audit
```
npm run build  # Create production build
# Then use Chrome DevTools > Lighthouse
```

Target Scores (mobile):
- [ ] Performance: >= 80
- [ ] Accessibility: >= 95
- [ ] Best Practices: >= 90
- [ ] SEO: >= 90

#### Image Optimization
- [ ] No oversized images
- [ ] Images optimized for web
- [ ] Lazy loading working where appropriate
- [ ] No layout shift from images

#### Bundle Size
- [ ] No large unused dependencies
- [ ] Code splitting working
- [ ] CSS not duplicated

### Phase 7: Form Testing

#### Contact Form (Contact.jsx)
- [ ] All fields render correctly
- [ ] Placeholder text visible
- [ ] Focus states visible
- [ ] Required field validation works
- [ ] Email format validation works
- [ ] Submit button functional
- [ ] Success message appears
- [ ] Form clears after submission
- [ ] Error messages display on validation fail
- [ ] Form can be submitted multiple times

#### Newsletter/Subscribe Form (if present)
- [ ] Email validation works
- [ ] Submit button functional
- [ ] Success/error messages display

### Phase 8: Link Testing

#### Internal Links
- [ ] All navigation links work
- [ ] All "Learn More" buttons link correctly
- [ ] All CTA buttons link to correct pages
- [ ] No broken links (404s)
- [ ] Links use correct routing

#### External Links
- [ ] Social media links open correctly (new tab)
- [ ] Download links work
- [ ] Email links open correctly

### Phase 9: Content Testing

#### Text Content
- [ ] No typos or grammar errors
- [ ] All placeholder text replaced with real content
- [ ] Text formatting correct (bold, italic, etc.)
- [ ] Lists formatted consistently

#### Media
- [ ] All images display correctly
- [ ] Images have descriptive alt text
- [ ] Videos (if any) play correctly
- [ ] Download files (if any) accessible

### Phase 10: Final QA

#### Browser DevTools Checks
```javascript
// In Console, paste and check for errors:
console.log('Page loaded successfully');

// Check for console errors (should be empty/warnings only)
// Check for unused CSS
// Check for unused JavaScript
```

#### Page Loading
- [ ] Page loads without errors
- [ ] No external resource failures
- [ ] No third-party script issues
- [ ] Analytics working (if installed)

#### Functionality
- [ ] All buttons clickable
- [ ] All forms submittable
- [ ] All modals open/close
- [ ] All modals have close button
- [ ] All navigation works
- [ ] Page refresh works
- [ ] Back button works

#### Visual Consistency
- [ ] Margins/padding consistent throughout
- [ ] Colors consistent across pages
- [ ] Typography consistent
- [ ] Spacing rhythm maintained
- [ ] Hover effects consistent
- [ ] Focus states consistent
- [ ] No visual glitches

---

## Regression Testing Checklist

### Pages Tested Thoroughly
- [ ] About.jsx - All sections
- [ ] Programs.jsx - Hero, Cards, Modal, Metrics
- [ ] Contact.jsx - Form, Volunteer section
- [ ] Home.jsx - Spot check (should not be affected)
- [ ] News.jsx - Spot check (reference page, should not change)
- [ ] Gallery.jsx - Spot check (reference page, should not change)

### Known Issues to Check
- [ ] No console errors on initial page load
- [ ] No layout shift on animations
- [ ] No color flashing/flickering
- [ ] No missing assets/images

---

## Sign-Off Checklist

### Visual QA
- [ ] About page looks professional and aligned with News/Gallery
- [ ] Programs page matches design standards
- [ ] Contact page volunteer section matches standards
- [ ] All new elements render correctly
- [ ] No visual regressions observed

### Functional QA
- [ ] All interactive elements work
- [ ] Forms submit correctly
- [ ] Navigation works throughout site
- [ ] No broken links

### Accessibility QA
- [ ] Color contrast adequate
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Mobile accessible

### Performance QA
- [ ] Page load time acceptable
- [ ] No performance regressions
- [ ] Lighthouse scores acceptable

### Ready for Deployment
- [ ] All tests passing
- [ ] No critical issues
- [ ] Client approval (if applicable)
- [ ] Final commit prepared

---

## Testing Environment Setup

### Before Testing:
1. Start dev server: `npm start`
2. Open DevTools: F12
3. Set to responsive design: Ctrl+Shift+M
4. Clear cache: DevTools > Network tab > Disable cache + hard refresh
5. Check mobile: Chrome > More tools > Remote devices

### Tools Needed:
- [ ] Chrome DevTools
- [ ] NVDA screen reader (Windows) OR VoiceOver (Mac)
- [ ] WCAG Contrast Checker extension
- [ ] Mobile device for real device testing

---

## Test Results Log

### Date: ___________

| Test | Status | Notes |
|------|--------|-------|
| Code Quality | [ ] Pass | |
| Typography | [ ] Pass | |
| Colors | [ ] Pass | |
| Spacing | [ ] Pass | |
| Mobile Responsive | [ ] Pass | |
| Components | [ ] Pass | |
| Cross-Browser | [ ] Pass | |
| Accessibility | [ ] Pass | |
| Forms | [ ] Pass | |
| Links | [ ] Pass | |
| Content | [ ] Pass | |
| Performance | [ ] Pass | |

### Overall Status: ___________
**READY FOR DEPLOYMENT** / **NEEDS FIXES** / **BLOCKED**

### Issues Found:
```
1. [Issue] - [Location] - [Severity]
2. [Issue] - [Location] - [Severity]
3. [Issue] - [Location] - [Severity]
```

### Sign-Off:
- QA Tester: ___________
- Date: ___________
- Approved: Yes [ ] / No [ ]

