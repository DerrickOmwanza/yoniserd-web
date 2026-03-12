import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';
import img5 from '../assets/gallery5.jpg';
import img6 from '../assets/gallery6.jpg';
import img7 from '../assets/gallery7.jpg';
import img8 from '../assets/gallery8.jpg';
import img9 from '../assets/gallery9.jpg';
import img10 from '../assets/gallery10.jpg';
import gallery12 from '../assets/gallery12.jpeg';
import gallery13 from '../assets/gallery13.jpeg';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import video5 from '../assets/video5.mp4';

// Lightbox Component with Slideshow Navigation
const Lightbox = ({ image, caption, isOpen, onClose, onNext, onPrev, currentIndex, total }) => {
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

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={handleBackdropClick}
      role="dialog"
      aria-label="Image lightbox"
    >
      <div className="relative max-w-4xl w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-[var(--primary-blue)] transition-colors z-10"
          aria-label="Close lightbox"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <img
          src={image}
          alt={caption}
          className="w-full h-auto rounded-lg max-h-[80vh] object-contain shadow-xl"
          style={{ boxShadow: '0 0 20px rgba(126, 187, 191, 0.6)' }}
        />

        {/* Navigation Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-teal-400 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-teal-400 transition-colors"
              aria-label="Next image"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm mt-4">
              {currentIndex + 1} / {total}
            </div>
          </>
        )}

        {/* Caption */}
        {caption && (
          <div className="mt-4 text-center">
            <p className="text-white text-sm sm:text-base" style={{ color: 'var(--champagne)' }}>
              {caption}
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        dialog {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

// Video Modal Component with Navigation
const VideoModal = ({ video, caption, isOpen, onClose, onNext, onPrev, currentIndex, total }) => {
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

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={handleBackdropClick}
      role="dialog"
      aria-label="Video player"
    >
      <div className="relative w-full max-w-4xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-[var(--primary-blue)] transition-colors z-10"
          aria-label="Close video player"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Player */}
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-xl" style={{ boxShadow: '0 0 20px rgba(126, 187, 191, 0.6)' }}>
          <video
            src={video}
            controls
            autoPlay
            className="w-full h-full"
            playsInline
            aria-label={caption}
          >
            <p className="text-white p-4">Your browser does not support the video tag.</p>
          </video>
        </div>

        {/* Navigation Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-teal-400 transition-colors"
              aria-label="Previous video"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-teal-400 transition-colors"
              aria-label="Next video"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm mt-4">
              {currentIndex + 1} / {total}
            </div>
          </>
        )}

        {/* Caption */}
        {caption && (
          <div className="mt-4 text-center">
            <p className="text-white text-sm sm:text-base" style={{ color: 'var(--champagne)' }}>
              {caption}
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        div[role="dialog"] > div {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

// Image Gallery Item
const ImageCard = ({ image, caption, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,187,191,0.8)] hover:-translate-y-2 focus:outline-none focus:ring-4"
      aria-label={`View image: ${caption}`}
    >
      <div className="aspect-square bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={caption}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(16, 44, 38, 0.7)' }}
        >
          <svg
            className="w-12 h-12 text-white transition-transform duration-300 group-hover:scale-125"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
            />
          </svg>
        </div>
      </div>

      {/* Caption */}
      <div className="p-4 sm:p-5 border-t-2" style={{ backgroundColor: 'var(--primary-dark)', borderColor: 'var(--primary-blue)' }}>
        <p className="text-sm md:text-base font-semibold text-center leading-tight" style={{ color: 'var(--white)' }}>
          {caption}
        </p>
      </div>
    </button>
  );
};

// Video Gallery Item
const VideoCard = ({ video, caption, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,187,191,0.8)] hover:-translate-y-2 focus:outline-none focus:ring-4"
      aria-label={`Play video: ${caption}`}
    >
      <div className="aspect-video bg-black overflow-hidden relative">
        <video
          src={video}
          className="w-full h-full object-cover"
          preload="metadata"
        />
        {/* Play Icon Overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: 'rgba(16, 44, 38, 0.6)' }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-125"
            style={{ backgroundColor: 'var(--forest)' }}
          >
            <svg
              className="w-8 h-8 text-white fill-current ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="p-4 sm:p-5 border-t-2" style={{ backgroundColor: 'var(--primary-dark)', borderColor: 'var(--primary-blue)' }}>
        <p className="text-sm md:text-base font-semibold text-center leading-tight" style={{ color: 'var(--white)' }}>
          {caption}
        </p>
      </div>
    </button>
  );
};

const Gallery = () => {
  // Image Gallery Data
  const imageGallery = [
    { src: img1, caption: 'Community outreach and youth empowerment initiatives' },
    { src: img2, caption: 'Educational programs and workshops' },
    { src: img3, caption: 'Health awareness campaigns' },
    { src: img4, caption: 'Environmental conservation projects' },
    { src: img5, caption: 'Gender equality and women empowerment' },
    { src: img6, caption: 'Youth leadership development' },
    { src: img7, caption: 'Team building and collaborative planning sessions' },
    { src: img8, caption: 'Capacity building workshops for community leaders' },
    { src: img9, caption: 'Advocacy and awareness raising activities' },
    { src: img10, caption: 'Partnership meetings and stakeholder engagements' },
    { src: gallery12, caption: 'Community health awareness campaign' },
    { src: gallery13, caption: 'Leadership engagement with youth' },
  ];

  // Video Gallery Data
  const videoGallery = [
    { src: video1, caption: 'Outdoor activities showcasing team unity and spirit' },
    { src: video2, caption: 'Executive members bonding through recreational activities' },
    { src: video3, caption: 'Team building exercises promoting unity and trust' },
    { src: video4, caption: 'Outdoor engagement session with all members' },
    { src: video5, caption: 'Collaborative activities strengthening our team bond' },
  ];

  // State Management
  const [activeTab, setActiveTab] = useState('images');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const handleImageNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % imageGallery.length);
  };

  const handleImagePrev = () => {
    setSelectedImageIndex((prev) => (prev - 1 + imageGallery.length) % imageGallery.length);
  };

  const handleVideoClick = (index) => {
    setSelectedVideoIndex(index);
    setVideoModalOpen(true);
  };

  const handleVideoNext = () => {
    setSelectedVideoIndex((prev) => (prev + 1) % videoGallery.length);
  };

  const handleVideoPrev = () => {
    setSelectedVideoIndex((prev) => (prev - 1 + videoGallery.length) % videoGallery.length);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* ===== HERO SECTION (COMPACT, NEWS-STYLE) ===== */}
        <section className="relative bg-[var(--primary-dark)] py-8 md:py-10 px-6 overflow-hidden gallery-hero">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading with Icon */}
            <div className="flex items-center justify-center gap-2 mb-3 animate-fadeIn">
              <span className="text-4xl md:text-5xl">🖼️</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-widest leading-tight"
                  style={{ fontSize: '2rem' }}>
                Gallery
              </h1>
            </div>

            {/* Decorative underline */}
            <div className="h-1 bg-[var(--primary-blue)] w-20 mx-auto mb-4 rounded-full"></div>

            {/* Subheading - Enhanced */}
            <p className="text-base md:text-lg font-medium italic max-w-2xl mx-auto leading-relaxed"
                style={{ color: 'var(--gray-muted)', fontSize: '1.1rem' }}>
              See our work in action through images and videos
            </p>
          </div>

          {/* Subtle bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--primary-blue)] to-transparent"></div>
        </section>

        {/* ===== TAB NAVIGATION (COMPACT) ===== */}
        <section className="bg-white border-b-2 border-champagne py-5 px-6 sticky top-[72px] z-40 shadow-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-6">
              <button
                onClick={() => setActiveTab('images')}
                className="pb-3 px-4 font-bold text-base md:text-lg transition-all duration-300 relative"
                style={{
                  color: activeTab === 'images' ? 'var(--forest-dark)' : 'var(--gray-mid)',
                  borderBottom: activeTab === 'images' ? '3px solid var(--primary-blue)' : 'none',
                }}
                aria-selected={activeTab === 'images'}
                role="tab"
              >
                📷 Images
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className="pb-3 px-4 font-bold text-base md:text-lg transition-all duration-300 relative"
                style={{
                  color: activeTab === 'videos' ? 'var(--forest-dark)' : 'var(--gray-mid)',
                  borderBottom: activeTab === 'videos' ? '3px solid var(--primary-blue)' : 'none',
                }}
                aria-selected={activeTab === 'videos'}
                role="tab"
              >
                🎬 Videos
              </button>
            </div>
          </div>
        </section>

        {/* Images Tab */}
        {activeTab === 'images' && (
          <section className="py-8 md:py-10 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              {imageGallery.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                    {imageGallery.map((item, index) => (
                      <ImageCard
                        key={index}
                        image={item.src}
                        caption={item.caption}
                        onClick={() => handleImageClick(index)}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center mt-6">
                    <button className="view-more-btn">View More</button>
                  </div>
                </>
              ) : (
                <div className="gallery-placeholder">
                  <span className="text-4xl">📸</span>
                  <h3 style={{ color: 'var(--white)', fontSize: '1.6rem', marginTop: '0.5rem' }}>
                    Coming Soon
                  </h3>
                  <p>No photos available yet. Check back later!</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <section className="py-8 md:py-10 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              {videoGallery.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                    {videoGallery.map((item, index) => (
                      <VideoCard
                        key={index}
                        video={item.src}
                        caption={item.caption}
                        onClick={() => handleVideoClick(index)}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center mt-6">
                    <button className="view-more-btn">View More</button>
                  </div>
                </>
              ) : (
                <div className="gallery-placeholder">
                  <span className="text-4xl">🎬</span>
                  <h3 style={{ color: 'var(--white)', fontSize: '1.6rem', marginTop: '0.5rem' }}>
                    Coming Soon
                  </h3>
                  <p>No videos available yet. Check back later!</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Bottom CTA Section - Compact & Modern */}
        <section className="py-8 md:py-10 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Main CTA Container - Streamlined */}
            <div
              className="rounded-xl shadow-lg p-6 md:p-8 border-l-4"
              style={{
                backgroundColor: 'var(--white)',
                borderColor: 'var(--primary-blue)',
              }}
            >
              {/* Content Grid - More Efficient */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                
                {/* Left: Main Message */}
                <div className="md:col-span-2">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-4xl md:text-5xl flex-shrink-0">🤝</span>
                    <h2
                      className="text-2xl md:text-3xl font-bold uppercase tracking-wide"
                      style={{ color: 'var(--forest-dark)', letterSpacing: '0.05em' }}
                    >
                      Make a Difference
                    </h2>
                  </div>

                  <p
                    className="text-base md:text-lg leading-relaxed mb-4"
                    style={{ color: 'var(--text-gray)' }}
                  >
                    Join thousands of young leaders creating lasting change. Whether you have 5 hours a month or can commit weekly, we'll find the perfect role for you.
                  </p>

                  {/* CTA Buttons - Compact */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact#volunteer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm md:text-base text-white transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-1"
                      style={{
                        backgroundColor: 'var(--forest)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--forest-dark)';
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(16, 44, 38, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--forest)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <span>🚀 Get Involved</span>
                      <span>→</span>
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:shadow-md border-2"
                      style={{
                        backgroundColor: 'transparent',
                        color: 'var(--forest)',
                        borderColor: 'var(--forest)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--mint-surface)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <span>📧 Contact</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Right: Trust Indicators - Vertical Stack */}
                <div className="md:border-l-2" style={{ borderColor: 'var(--border-soft)' }}>
                  <div className="md:pl-6 space-y-4">
                    <div>
                      <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--forest)' }}>
                        5+
                      </p>
                      <p className="text-sm md:text-base" style={{ color: 'var(--gray-soft)' }}>
                        Years Impact
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--forest)' }}>
                        10K+
                      </p>
                      <p className="text-sm md:text-base" style={{ color: 'var(--gray-soft)' }}>
                        Youth Reached
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--forest)' }}>
                        50+
                      </p>
                      <p className="text-sm md:text-base" style={{ color: 'var(--gray-soft)' }}>
                        Partner Orgs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
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

        {/* Video Modal */}
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
      </div>
    </Layout>
  );
};

export default Gallery;
