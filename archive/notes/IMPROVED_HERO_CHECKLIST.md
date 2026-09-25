# ImprovedHeroSection - Implementation Checklist

## Pre-Implementation Review
- [ ] Read `IMPROVED_HERO_INTEGRATION_GUIDE.md` (5 min)
- [ ] Review `IMPROVED_HERO_VISUAL_REFERENCE.md` (visual expectations)
- [ ] Backup your current `Home.jsx` (Ctrl+C the old hero section)

---

## Step 1: Add Component Files
- [ ] Copy `ImprovedHeroSection.jsx` to `src/components/`
- [ ] Copy `ImprovedHeroSection.css` to `src/components/`
- [ ] Verify files exist: `npm ls src/components/ImprovedHeroSection*` (check in file explorer)

---

## Step 2: Update Home.jsx

### Add Import
```jsx
// At the top with other imports
import ImprovedHeroSection from '../components/ImprovedHeroSection';
```
- [ ] Import statement added

### Replace Hero Section
Find the current hero (lines ~87-108) and replace with:
```jsx
{/* Improved Hero Section */}
<ImprovedHeroSection 
  heroImage={bannerImage}
  partnersLogos={[]}  // Empty array for now, can add logos later
/>
```
- [ ] Old hero section removed
- [ ] New component inserted in same location
- [ ] `bannerImage` variable still imported (line 14)

---

## Step 3: Test Locally

### Start Dev Server
```bash
npm start
```
- [ ] Dev server starts without errors
- [ ] Navigate to `http://localhost:3000` in browser
- [ ] Hero section loads on home page

### Visual Check (Desktop)
- [ ] Hero section displays 50/50 layout (text left, image right)
- [ ] Text content visible and readable (white on dark gradient)
- [ ] "Building Futures" text is in Emerald Green
- [ ] Image displays on right side with semi-transparent overlay
- [ ] Image caption visible at bottom of image
- [ ] "Get Involved" button is green with white text
- [ ] Background gradient visible (Deep Forest → Champagne)

### Visual Check (Mobile)
- [ ] Hero stacks vertically (text above image)
- [ ] Text is centered and properly sized (1.5rem heading)
- [ ] Image scales to fit screen (350px height)
- [ ] "Get Involved" button is full-width and clickable
- [ ] No overflow or broken layout
- [ ] Partner logos section displays (if added)

### Interaction Check
- [ ] Click "Get Involved" button → navigates to `/contact` page
- [ ] Hover over button → color darkens, button lifts slightly
- [ ] Tab through page → focus outline appears on button and any partner logos
- [ ] Focus states are clearly visible (blue outline)

### Browser DevTools Check
```javascript
// Open DevTools (F12) → Console tab
// Should show NO errors:
```
- [ ] Console has no red error messages
- [ ] Network tab shows hero image loading (status 200)
- [ ] No CSS errors in Elements tab

---

## Step 4: Accessibility Testing

### Keyboard Navigation
```
1. Press Tab repeatedly from top of page
   - [ ] Focus outline appears on CTA button
   - [ ] Focus outline visible on partner logos (if present)
   
2. Press Enter on focused button
   - [ ] Navigates to /contact page
```

### Screen Reader Test (if available)
```
Use NVDA (Windows) or VoiceOver (Mac):
- [ ] Hero heading announced correctly
- [ ] Sub-heading text read clearly
- [ ] Alt text for image announced
- [ ] CTA button labeled correctly
```

### Color Contrast
```
In DevTools → Inspect element → click heading:
- [ ] White text on Dark bg shows 11.5:1 ratio (AAA)
```

### Mobile Accessibility
```
- [ ] Touch targets (button) are ≥48px (44px minimum)
- [ ] All text readable at 200% zoom
```

---

## Step 5: Customization (Optional)

### Add Partner Logos
Create a partners array in Home.jsx:
```jsx
const partnerLogos = [
  {
    src: require('../assets/logo1.png').default,
    alt: 'Partner Name',
    link: 'https://partner-url.org'
  },
  // Add more...
];

// Then use:
<ImprovedHeroSection 
  heroImage={bannerImage}
  partnersLogos={partnerLogos}
/>
```
- [ ] Partner logos array created
- [ ] Component prop updated
- [ ] Logos display on page

### Customize Text Content
Edit `ImprovedHeroSection.jsx` lines 30-50:
- [ ] Heading text updated (if desired)
- [ ] Sub-heading updated (if desired)
- [ ] Button text updated (if desired)
- [ ] Image caption updated (if desired)
- [ ] Changes visible on live page

### Adjust Colors (Advanced)
Edit `ImprovedHeroSection.css`:
- [ ] Find color hex values (#102C26, #2E7D32, #F7E7CE)
- [ ] Replace with your preferred colors
- [ ] Test contrast using WebAIM tool (webaim.org/resources/contrastchecker)
- [ ] Verify WCAG AA+ standards met (4.5:1 minimum)

---

## Step 6: Performance Verification

### Page Load
```bash
# In DevTools → Network tab (throttle to 3G)
```
- [ ] Hero section image loads in <1s
- [ ] No layout shift (CLS = 0)
- [ ] No console warnings

### Lighthouse Audit
```bash
# DevTools → Lighthouse → Generate report
```
- [ ] Performance: >90
- [ ] Accessibility: >95
- [ ] Best Practices: >90
- [ ] SEO: >90

---

## Step 7: Cross-Browser Testing

Test on these browsers (if available):
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (if on Mac)
- [ ] Mobile Safari (iPhone)
- [ ] Chrome Mobile (Android)

For each browser:
- [ ] Layout renders correctly
- [ ] Colors display consistently
- [ ] Animations work smoothly (no jank)
- [ ] No console errors

---

## Step 8: QA Before Deployment

### Full Page Check
```
Refresh page (Ctrl+Shift+R = hard refresh)
```
- [ ] Hero section renders without flashing
- [ ] Image loads smoothly (fade-in effect)
- [ ] Text is crisp and properly sized
- [ ] No broken images or missing styling

### Content Verification
- [ ] Heading text is correct and impactful
- [ ] Sub-heading clearly communicates mission
- [ ] CTA button text matches your call-to-action
- [ ] Image caption is accurate
- [ ] Partner logos (if included) are appropriate

### Link Verification
- [ ] "Get Involved" button links to `/contact`
- [ ] Partner logos link to correct external sites
- [ ] All links open in new tabs (if external)

### Mobile Viewport Check
```
Open page on actual mobile device (not just DevTools emulation)
```
- [ ] Text readable without pinch-zoom
- [ ] Button is easily tappable
- [ ] Image displays clearly
- [ ] No horizontal scrollbar
- [ ] Layout is balanced (not cramped)

---

## Step 9: Final Review & Backup

### Code Review
- [ ] `ImprovedHeroSection.jsx` properly formatted
- [ ] `ImprovedHeroSection.css` has no unused code
- [ ] `Home.jsx` imports are clean
- [ ] No commented-out code left
- [ ] All customizations complete

### Git Commit (if using version control)
```bash
git status
# Should show: ImprovedHeroSection.jsx, ImprovedHeroSection.css, Home.jsx modified
git add src/components/ImprovedHeroSection.*
git add src/pages/Home.jsx
git commit -m "feat: Replace hero banner with ImprovedHeroSection component

- Implements dual-tone gradient background (Deep Forest → Champagne)
- Balanced 50/50 layout (text + image)
- Accent color highlights on keywords
- Enhanced CTA button with hover states
- Fully responsive mobile layout
- WCAG AA+ accessibility"
```
- [ ] Changes committed to git
- [ ] Commit message is clear and descriptive

### Backup
- [ ] Saved old hero section code (in case rollback needed)
- [ ] All files backed up locally or in version control

---

## Step 10: Deployment Checklist

Before pushing to production:

### Final Verification
- [ ] No console errors
- [ ] Lighthouse scores >90 (all categories)
- [ ] Tested on desktop, tablet, mobile
- [ ] Accessibility audit passed
- [ ] Performance metrics acceptable

### Production Build
```bash
npm run build
# Should complete without errors
```
- [ ] Build completes successfully
- [ ] No build warnings
- [ ] Output in `build/` directory

### Deployment
- [ ] Push to production branch (e.g., main/deploy)
- [ ] Monitor error logs for 24 hours post-deploy
- [ ] Verify hero section loads on live site
- [ ] Share feedback from team/stakeholders

---

## Troubleshooting Quick Reference

| Issue | Solution |
|-------|----------|
| Hero image not showing | Check path in Home.jsx import; verify file exists in src/assets/ |
| Colors look wrong | Clear browser cache (Ctrl+Shift+Delete); hard refresh (Ctrl+Shift+R) |
| Layout broken on mobile | Check DevTools responsive view; verify CSS media queries |
| Button doesn't navigate | Check Link `to` prop points to correct route |
| Accessibility outline missing | Verify CSS focus-visible is not overridden; check global styles |
| Partner logos not displaying | Verify partnersLogos array syntax; check image paths |

---

## Success Criteria ✅

You know the implementation is successful when:

1. ✅ Hero section displays beautifully on desktop (50/50 layout)
2. ✅ Mobile view is fully responsive (stacked layout, readable)
3. ✅ All text is crisp, readable, with proper contrast (AA+)
4. ✅ CTA button is prominent and clearly clickable
5. ✅ No console errors or warnings
6. ✅ Keyboard navigation works (Tab + Enter)
7. ✅ Hover states work smoothly (button elevation, color change)
8. ✅ Image loads quickly and displays correctly
9. ✅ Lighthouse accessibility score >95
10. ✅ Team/stakeholders approve the visual update

---

## Timeline Estimate

- **Step 1-2** (File setup): 5 minutes
- **Step 3** (Testing): 10 minutes
- **Step 4** (Accessibility): 5 minutes
- **Step 5** (Customization): 10 minutes (optional)
- **Step 6-7** (Cross-browser): 15 minutes
- **Step 8-9** (QA + Review): 10 minutes
- **Step 10** (Deployment): 5 minutes

**Total: 45-60 minutes** (60-90 with customization)

---

## Next Actions

1. ✅ Have you read both guide documents? (INTEGRATION_GUIDE.md, VISUAL_REFERENCE.md)
2. ✅ Are the two component files in your src/components/ folder?
3. ✅ Have you updated Home.jsx with the new component?
4. ✅ Does `npm start` run without errors?
5. ✅ Does the hero section look good on your screen?

If all checks pass → **Ready to deploy!**
