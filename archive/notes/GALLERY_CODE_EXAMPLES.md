# Gallery Slideshow - Code Examples & Reference

## Navigation Handlers

### Image Navigation
```javascript
const handleImageNext = () => {
  setSelectedImageIndex((prev) => (prev + 1) % imageGallery.length);
};

const handleImagePrev = () => {
  setSelectedImageIndex((prev) => (prev - 1 + imageGallery.length) % imageGallery.length);
};
```

**How it works**:
- `(prev + 1) % imageGallery.length` → Advances index, wraps to 0 at end
- `(prev - 1 + imageGallery.length) % imageGallery.length` → Goes back, wraps to last item

### Video Navigation
```javascript
const handleVideoNext = () => {
  setSelectedVideoIndex((prev) => (prev + 1) % videoGallery.length);
};

const handleVideoPrev = () => {
  setSelectedVideoIndex((prev) => (prev - 1 + videoGallery.length) % videoGallery.length);
};
```

---

## Keyboard Event Handling

```javascript
React.useEffect(() => {
  if (!isOpen) return;

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') onNext?.();
    if (e.key === 'ArrowLeft') onPrev?.();
    if (e.key === 'Escape') onClose();
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [isOpen, onNext, onPrev, onClose]);
```

**Key features**:
- Listens only when lightbox is open (`if (!isOpen) return`)
- Cleans up event listener on unmount (prevents memory leaks)
- Supports optional chaining (`onNext?.()`)
- Only active when lightbox is visible

---

## Component Props

### Lightbox Props
```javascript
<Lightbox
  image={selectedImageIndex !== null ? imageGallery[selectedImageIndex]?.src : null}
  caption={selectedImageIndex !== null ? imageGallery[selectedImageIndex]?.caption : null}
  isOpen={lightboxOpen}
  onClose={() => setLightboxOpen(false)}
  onNext={handleImageNext}
  onPrev={handleImagePrev}
  currentIndex={selectedImageIndex}
  total={imageGallery.length}
/>
```

### VideoModal Props
```javascript
<VideoModal
  video={selectedVideoIndex !== null ? videoGallery[selectedVideoIndex]?.src : null}
  caption={selectedVideoIndex !== null ? videoGallery[selectedVideoIndex]?.caption : null}
  isOpen={videoModalOpen}
  onClose={() => setVideoModalOpen(false)}
  onNext={handleVideoNext}
  onPrev={handleVideoPrev}
  currentIndex={selectedVideoIndex}
  total={videoGallery.length}
/>
```

---

## CSS Styling Examples

### Gallery Grid
```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
}
```

### Image Card
```css
.gallery-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(126, 187, 191, 0.8);
}
```

### Lightbox Container
```css
.lightbox {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 15, 42, 0.95);
  text-align: center;
  padding-top: 60px;
}

.lightbox-content {
  max-width: 80%;
  max-height: 80%;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(126, 187, 191, 0.8);
}
```

### Navigation Buttons
```css
.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #FFFFFF;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  padding: 10px;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

.prev:hover, .next:hover {
  color: #7EBBBF;
  text-shadow: 0 0 10px rgba(126, 187, 191, 0.8);
}
```

---

## State Management Pattern

### Initial State
```javascript
const [activeTab, setActiveTab] = useState('images');
const [lightboxOpen, setLightboxOpen] = useState(false);
const [selectedImageIndex, setSelectedImageIndex] = useState(null);
const [videoModalOpen, setVideoModalOpen] = useState(false);
const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
```

### Click Handler
```javascript
const handleImageClick = (index) => {
  setSelectedImageIndex(index);
  setLightboxOpen(true);
};

const handleVideoClick = (index) => {
  setSelectedVideoIndex(index);
  setVideoModalOpen(true);
};
```

### Grid Rendering
```javascript
{imageGallery.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
    {imageGallery.map((item, index) => (
      <ImageCard
        key={index}
        image={item.src}
        caption={item.caption}
        onClick={() => handleImageClick(index)}  // Pass index!
      />
    ))}
  </div>
) : (
  <div className="gallery-placeholder">No images available</div>
)}
```

---

## Accessibility Features

### ARIA Labels
```jsx
<button
  onClick={onNext}
  className="..."
  aria-label="Next image"  // Screen reader text
>
  {/* icon */}
</button>
```

### Focus Management
```jsx
<div className="..." style={{ focusRing: '#145C44' }}>
  {/* Content receives focus ring on keyboard navigation */}
</div>
```

### Semantic HTML
```jsx
<dialog role="dialog" aria-label="Image lightbox">
  <img alt="Descriptive alt text" src="..." />
  <button aria-label="Close lightbox">×</button>
</dialog>
```

---

## Common Use Cases

### Opening a Specific Image
```javascript
const openImageAtIndex = (index) => {
  setSelectedImageIndex(index);
  setLightboxOpen(true);
};

// Usage
openImageAtIndex(5); // Opens 6th image (0-indexed)
```

### Closing All Modals
```javascript
const closeAll = () => {
  setLightboxOpen(false);
  setVideoModalOpen(false);
};
```

### Getting Current Item Info
```javascript
const currentImage = imageGallery[selectedImageIndex];
const imageCaption = currentImage?.caption;
const imageSource = currentImage?.src;
```

### Navigating to Specific Position
```javascript
const goToImage = (number) => {
  const index = number - 1; // Convert 1-indexed to 0-indexed
  if (index >= 0 && index < imageGallery.length) {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  }
};

// Usage
goToImage(3); // Opens 3rd image
```

---

## Testing Snippets

### Test Navigation
```javascript
// In browser console
// Test going to next image
const images = document.querySelectorAll('.gallery-item');
images[0].click(); // Opens first image
document.querySelector('[aria-label="Next image"]').click(); // Go to next
```

### Test Keyboard
```javascript
// Simulate keyboard press
const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
document.dispatchEvent(event);
```

### Check Counter
```javascript
const counter = document.querySelector('[role="dialog"] .counter');
console.log(counter.textContent); // Should show "2 / 12" etc.
```

---

## Performance Tips

### Optimize Images
```javascript
// Use efficient image formats
// WebP for modern browsers, JPEG fallback
<img src="gallery.webp" 
     srcSet="gallery.webp, gallery.jpg" 
     loading="lazy"
     alt="Description" />
```

### Lazy Load Videos
```javascript
<video preload="metadata" src="video.mp4">
  {/* Metadata only, not entire video */}
</video>
```

### Minimize Re-renders
```javascript
// Use useCallback for navigation handlers
const handleNext = useCallback(() => {
  setSelectedImageIndex((prev) => (prev + 1) % imageGallery.length);
}, [imageGallery.length]);
```

---

## Customization Guide

### Change Glow Color
```css
/* Find this */
box-shadow: 0 0 15px rgba(126, 187, 191, 0.8);

/* Change to */
box-shadow: 0 0 15px rgba(255, 0, 0, 0.8); /* Red glow */
```

### Change Animation Speed
```css
/* Find this */
transition: transform 0.3s ease, box-shadow 0.3s ease;

/* Change to */
transition: transform 0.5s ease, box-shadow 0.5s ease; /* Slower */
```

### Change Grid Columns
```css
/* Current */
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

/* For 3-column desktop */
grid-template-columns: repeat(3, 1fr);

/* Responsive alternative */
@media (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}
```

### Change Dark Background
```jsx
/* Find this */
style={{ backgroundColor: '#050F2A' }}

/* Change to */
style={{ backgroundColor: '#1a1a2e' }} /* Different dark shade */
```

---

## Troubleshooting

### Lightbox Won't Open
```javascript
// Check:
1. Is index null? console.log(selectedImageIndex)
2. Is lightboxOpen state true? 
3. Are images in imageGallery array?
```

### Keyboard Shortcuts Don't Work
```javascript
// Check:
1. Is lightbox actually open?
2. Are event listeners attached? 
3. No other elements stealing focus?
```

### Counter Shows Wrong Number
```javascript
// Verify:
const currentIndex = selectedImageIndex; // Should be 0-indexed
const displayNumber = currentIndex + 1;  // Add 1 for display
```

---

## File Locations

```
src/pages/Gallery.jsx
├── Lightbox Component (lines 22-121)
├── VideoModal Component (lines 126-235)
├── ImageCard Component (lines 240-266)
├── VideoCard Component (lines 268-295)
├── Gallery Component (lines 297-641)
│   ├── Image Gallery Data (lines 331-344)
│   ├── Video Gallery Data (lines 346-353)
│   ├── State Management (lines 355-385)
│   ├── Handlers (lines 387-414)
│   └── JSX Rendering (lines 416-630)
```

---

## Quick Copy-Paste

### Test Image Click
```javascript
<button onClick={() => handleImageClick(0)}>Test Image 1</button>
```

### Test Video Click
```javascript
<button onClick={() => handleVideoClick(0)}>Test Video 1</button>
```

### Test Navigation
```javascript
<button onClick={handleImageNext}>Next →</button>
<button onClick={handleImagePrev}>← Prev</button>
```

---

**For complete implementation details, see `GALLERY_SLIDESHOW_IMPLEMENTATION_COMPLETE.md`**
