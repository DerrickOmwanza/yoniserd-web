import React from 'react';

const StoryModal = ({ story, isOpen, onClose, categories }) => {
  if (!isOpen || !story) return null;

  const category = categories.find(c => c.value === story.category)?.label || story.category;

  // Get category icon
  const getCategoryIcon = (categoryValue) => {
    const icons = {
      'success-story': '⭐',
      'impact': '📊',
      'research': '🔬',
      'programs': '🎓',
      'environment': '🌍',
      'partnership': '🤝',
      'news': '📰',
    };
    return icons[categoryValue] || '📌';
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
        style={{ backdropFilter: 'blur(5px)' }}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto py-8">
        <div
          className="w-full max-w-2xl rounded-2xl shadow-2xl bg-white hover:shadow-3xl transition-shadow duration-300 overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-brand-primary hover:text-accent-green transition-colors z-20 p-2 hover:bg-champagne/50 rounded-lg"
            aria-label="Close story"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Banner at Top */}
          <div className="h-72 bg-gradient-to-br from-champagne to-champagne/80 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-green rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-blue rounded-full blur-2xl"></div>
            </div>
            <div className="relative">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-full object-cover absolute inset-0 rounded-t-2xl"
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-8 md:p-10 border-t-2 border-champagne/40">
            {/* Category and Date Row */}
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              {/* Category Badge with Icon */}
              <span
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest text-white"
                style={{ backgroundColor: 'var(--forest)' }}
              >
                <span>{getCategoryIcon(story.category)}</span>
                {category}
              </span>
              {/* Date - Enhanced Clarity */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green/10 rounded-lg border-r-3 border-accent-green">
                <span className="text-accent-green">📅</span>
                <span className="text-sm font-bold text-accent-green">
                  {story.date}
                </span>
              </div>
            </div>

            {/* Divider Line */}
            <div className="h-1 w-16 bg-accent-green mb-6 rounded-full"></div>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-brand-primary"
            >
              {story.title}
            </h1>

            {/* Secondary Divider */}
            <div className="h-0.5 bg-champagne/30 mb-6"></div>

            {/* Excerpt */}
            <p
              className="text-lg font-semibold mb-6 leading-relaxed text-accent-green"
            >
              {story.excerpt}
            </p>

            {/* Full Content */}
            <div
              className="text-base leading-relaxed text-gray-700 space-y-4 mb-8"
            >
              <p className="first-letter:capitalize">{story.content}</p>
            </div>

            {/* Impact Stats Section (Optional) */}
            {story.excerpt && (
              <div className="my-6 p-4 bg-accent-green/5 border-l-4 border-accent-green rounded">
                <p className="text-sm font-semibold text-accent-green">
                  ✓ Impact Verified
                </p>
              </div>
            )}

            {/* Footer with CTA */}
            <div className="mt-8 pt-6 border-t-2 border-champagne/30 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-sm text-gray-600">
                Share this story or get involved
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 text-white bg-accent-green hover:bg-brand-primary hover:shadow-lg hover:scale-105"
                aria-label="Close story"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryModal;
