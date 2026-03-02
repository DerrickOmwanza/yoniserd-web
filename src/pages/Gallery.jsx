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

// Lightbox Component
const Lightbox = ({ image, caption, isOpen, onClose }) => {
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
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
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
          className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
        />

        {/* Caption */}
        {caption && (
          <div className="mt-4 text-center">
            <p className="text-white text-sm sm:text-base" style={{ color: '#F7E7CE' }}>
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

// Video Modal Component
const VideoModal = ({ video, caption, isOpen, onClose }) => {
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
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close video player"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Player */}
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
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

        {/* Caption */}
        {caption && (
          <div className="mt-4 text-center">
            <p className="text-white text-sm sm:text-base" style={{ color: '#F7E7CE' }}>
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
      style={{ focusRing: '#145C44' }}
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
      <div className="p-3 sm:p-4 border-t-2" style={{ backgroundColor: '#050F2A', borderColor: 'var(--primary-blue)' }}>
        <p className="text-xs sm:text-sm font-semibold text-center" style={{ color: '#FFFFFF' }}>
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
      style={{ focusRing: '#145C44' }}
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
            style={{ backgroundColor: '#145C44' }}
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
      <div className="p-3 sm:p-4 border-t-2" style={{ backgroundColor: '#050F2A', borderColor: 'var(--primary-blue)' }}>
        <p className="text-xs sm:text-sm font-semibold text-center" style={{ color: '#FFFFFF' }}>
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setVideoModalOpen(true);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="py-8 md:py-12 px-6" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-6xl mx-auto text-center">
            <h1
              className="text-3xl md:text-4xl font-bold mb-3 uppercase tracking-wide"
              style={{ color: '#102C26', letterSpacing: '0.05em' }}
            >
              Gallery
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto italic"
              style={{ color: '#145C44' }}
            >
              See our work in action through images and videos
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-6 px-6 sticky top-[72px] z-40" style={{ backgroundColor: '#FFFFFF', borderBottom: '2px solid #145C44' }}>
          <div className="max-w-6xl mx-auto flex justify-center gap-6">
            <button
              onClick={() => setActiveTab('images')}
              className="pb-3 px-4 font-semibold text-lg transition-all duration-300 relative"
              style={{
                color: activeTab === 'images' ? '#102C26' : '#8B8B8B',
                borderBottom: activeTab === 'images' ? '3px solid #145C44' : 'none',
              }}
              aria-selected={activeTab === 'images'}
              role="tab"
            >
              📷 Images
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className="pb-3 px-4 font-semibold text-lg transition-all duration-300 relative"
              style={{
                color: activeTab === 'videos' ? '#102C26' : '#8B8B8B',
                borderBottom: activeTab === 'videos' ? '3px solid #145C44' : 'none',
              }}
              aria-selected={activeTab === 'videos'}
              role="tab"
            >
              🎬 Videos
            </button>
          </div>
        </section>

        {/* Images Tab */}
        {activeTab === 'images' && (
          <section className="py-12 px-6" style={{ backgroundColor: '#F7E7CE' }}>
            <div className="max-w-6xl mx-auto">
              {imageGallery.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {imageGallery.map((item, index) => (
                      <ImageCard
                        key={index}
                        image={item.src}
                        caption={item.caption}
                        onClick={() => handleImageClick(item)}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <button className="view-more-btn">View More</button>
                  </div>
                </>
              ) : (
                <div className="gallery-placeholder">
                  <span className="text-4xl">📸</span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginTop: '0.5rem' }}>
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
          <section className="py-12 px-6" style={{ backgroundColor: '#F7E7CE' }}>
            <div className="max-w-6xl mx-auto">
              {videoGallery.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {videoGallery.map((item, index) => (
                      <VideoCard
                        key={index}
                        video={item.src}
                        caption={item.caption}
                        onClick={() => handleVideoClick(item)}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <button className="view-more-btn">View More</button>
                  </div>
                </>
              ) : (
                <div className="gallery-placeholder">
                  <span className="text-4xl">🎬</span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginTop: '0.5rem' }}>
                    Coming Soon
                  </h3>
                  <p>No videos available yet. Check back later!</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Bottom CTA Section */}
        <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#F7E7CE' }}>
          <div className="max-w-5xl mx-auto">
            {/* Main CTA Container */}
            <div
              className="rounded-2xl shadow-2xl p-10 md:p-16 text-center border-4"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#145C44',
              }}
            >
              {/* Decorative Icon */}
              <div className="text-6xl mb-4">🤝</div>

              <h2
                className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide"
                style={{ color: '#102C26', letterSpacing: '0.05em' }}
              >
                Ready to Make a Difference?
              </h2>

              <p
                className="text-base md:text-lg mb-6 max-w-3xl mx-auto italic"
                style={{ color: '#145C44' }}
              >
                Join thousands of young leaders creating lasting change in their communities.
              </p>

              <p
                className="text-sm md:text-base mb-10 max-w-2xl mx-auto"
                style={{ color: '#666666' }}
              >
                Your skills, passion, and time can shape the future. Whether you have 5 hours a month or can commit weekly, we'll find the perfect role for you.
              </p>

              {/* Primary CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  to="/contact#volunteer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg font-bold text-base md:text-lg text-white transition-all duration-300 hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-offset-2"
                  style={{
                    backgroundColor: '#145C44',
                    focusRingColor: '#145C44',
                    focusRingOffsetColor: '#FFFFFF',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#102C26';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(16, 44, 38, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#145C44';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>🚀 Get Involved Now</span>
                  <span className="text-xl">→</span>
                </Link>

                {/* Secondary CTA */}
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 rounded-lg font-semibold text-base text-center transition-all duration-300 hover:shadow-lg border-2"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#145C44',
                    borderColor: '#145C44',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F0F9F6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span>📧 Contact Us</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12 pt-8" style={{ borderTop: '2px solid #E8F3EE' }}>
                <div>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: '#145C44' }}>
                    5+
                  </p>
                  <p className="text-xs md:text-sm" style={{ color: '#666666' }}>
                    Years of Impact
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: '#145C44' }}>
                    10K+
                  </p>
                  <p className="text-xs md:text-sm" style={{ color: '#666666' }}>
                    Youth Reached
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: '#145C44' }}>
                    50+
                  </p>
                  <p className="text-xs md:text-sm" style={{ color: '#666666' }}>
                    Partner Orgs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Lightbox
          image={selectedImage?.src}
          caption={selectedImage?.caption}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />

        {/* Video Modal */}
        <VideoModal
          video={selectedVideo?.src}
          caption={selectedVideo?.caption}
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
        />
      </div>
    </Layout>
  );
};

export default Gallery;
