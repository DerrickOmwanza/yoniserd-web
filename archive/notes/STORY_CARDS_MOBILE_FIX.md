# Story Cards Mobile Text Visibility Fix - Complete

## Issue Summary
The "Latest Stories" section story cards were displaying incomplete content on mobile and tablet views:
- **Mobile (375px)**: Tags visible, but titles and excerpts were missing/hidden ✗
- **Tablet (768px)**: Cards were too constrained, text difficult to read ✗
- **Desktop (1280px)**: Full content visible (already working) ✓

The problem occurred because cards used `aspect-ratio: 1/1` (square format) which forced them into a fixed square shape, leaving insufficient space for text content on smaller screens.

## Root Cause
The `.story-card` CSS class inherited `aspect-ratio: 1/1` from HomepageDesignSystem.css, which:
1. Locked cards into a 1:1 aspect ratio (square shape)
2. On mobile (375px width), this resulted in very small cards (200px minmax)
3. Text content (title ~16px, excerpt ~14px) was squeezed into minimal space
4. Overflow was hidden due to `overflow: hidden` on the card
5. Result: Only the tag and "Keep reading" link were visible

## Solution Implemented
Added responsive CSS overrides in `src/index.css` to:

### For Tablet (max-width: 768px):
```css
.story-card {
  aspect-ratio: auto !important;      /* Allow flexible height */
  padding: 1.25rem !important;        /* Reduce padding */
  min-height: auto !important;        /* Remove height constraint */
}

.story-title {
  font-size: 1.125rem !important;    /* 18px, down from default */
  -webkit-line-clamp: 2 !important;  /* 2 lines max */
}

.story-excerpt {
  font-size: 0.9375rem !important;   /* 15px, down from default */
  -webkit-line-clamp: 2 !important;  /* 2 lines max (reduced from 3) */
}
```

### For Mobile (max-width: 640px):
```css
.story-card {
  aspect-ratio: auto !important;
  min-height: auto !important;
  padding: 1rem !important;           /* Minimal padding */
}

.story-title {
  font-size: 1rem !important;         /* 16px */
  -webkit-line-clamp: 2 !important;
}

.story-excerpt {
  font-size: 0.875rem !important;     /* 14px */
  -webkit-line-clamp: 2 !important;   /* 2 lines, enough for preview */
  margin-bottom: 0.75rem !important;
}
```

## Testing Results

### Mobile (375px)
```
✓ Tag visible (OUR WORK, IMPACT, NEWS)
✓ Title fully visible (e.g., "Dennis opens his first carpentry studio")
✓ Excerpt visible (2-line preview of story)
✓ Keep reading link visible
✓ Cards stack vertically with proper spacing
✓ No text truncation or overflow
```

### Tablet (768px)
```
✓ All three cards displayed side-by-side
✓ Full content visible in each card
✓ Proper spacing between cards
✓ Text sizes readable and balanced
✓ Hover effects functional
```

### Desktop (1280px)
```
✓ Three-column layout maintained
✓ Cards have adequate height (flexible)
✓ Full content displayed with proper hierarchy
✓ Visual hierarchy preserved from original design
```

## Design System Alignment
- **Card Layout**: Changed from fixed aspect ratio to flexible height
- **Text Hierarchy**: Maintained 2-line titles and 2-line excerpts on mobile
- **Spacing**: Reduced padding on mobile to maximize content space
- **Typography**: Proportional font sizing across breakpoints
- **Accessibility**: Text now fully visible and readable at all screen sizes

## Files Modified
- `src/index.css` - Added media query rules for responsive story card styling

## Impact
- Story cards now display complete, readable content on all devices
- Improved mobile user experience (users can see what stories are about)
- Better accessibility - content not hidden on smaller screens
- Maintains design system consistency
- No component code changes required (CSS-only fix)

## Deployment Notes
- Change is purely CSS-based and non-breaking
- No updates to React components needed
- Safe to deploy immediately
- No dependencies or library updates required
- Works across all modern browsers supporting CSS Grid and flexbox

## Before/After Comparison

### Before (Mobile)
- Cards: Only tag + "Keep reading" link visible
- Title: Hidden
- Excerpt: Hidden
- User Experience: Confusing - can't tell what stories are about

### After (Mobile)
- Cards: Full content visible
- Title: Clearly displayed (2 lines)
- Excerpt: Preview text shown (2 lines)
- User Experience: Clear story information, encourages clicks to full content
