import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';

const Impact = () => {
  const [counts, setCounts] = useState({
    youth: 0,
    communities: 0,
    programs: 0,
    employment: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const sectionRef = useRef(null);

  const metrics = [
    { label: 'Youth Reached', value: 10000, key: 'youth', icon: '👥' },
    { label: 'Communities Served', value: 50, key: 'communities', icon: '🌍' },
    { label: 'Programs Running', value: 15, key: 'programs', icon: '📊' },
    { label: 'Employment Success Rate', value: 75, key: 'employment', icon: '💼' },
  ];

  const impactAreas = [
    {
      title: 'Youth Empowerment',
      description: 'Vocational training, mentorship, and leadership development.',
      icon: '🚀',
      stat: '10,000+ youth trained',
    },
    {
      title: 'Economic Resilience',
      description: 'Sustainable livelihoods through skills and job placement.',
      icon: '💼',
      stat: '75% employment rate',
    },
    {
      title: 'Community Health',
      description: 'Youth-led health campaigns and disease prevention.',
      icon: '💚',
      stat: '2,500+ reached annually',
    },
    {
      title: 'Environmental Action',
      description: 'Climate-smart initiatives and land restoration.',
      icon: '🌍',
      stat: '50+ hectares restored',
    },
    {
      title: 'Research & Evidence',
      description: 'Rigorous research to inform policy and impact.',
      icon: '📊',
      stat: '5+ publications',
    },
    {
      title: 'Gender Equality',
      description: 'Empowering young women as leaders.',
      icon: '👩‍⚖️',
      stat: '3,000+ girls reached',
    },
  ];

  const testimonials = [
    {
      quote: 'YoNISeRD gave me the skills to start my business. Now I employ 5 other youth.',
      author: 'Dennis',
      role: 'Business Owner',
      icon: '🏗️',
    },
    {
      quote: 'The mentorship changed my perspective on leadership. I now lead a health club.',
      author: 'Sarah',
      role: 'Youth Health Leader',
      icon: '👩‍⚕️',
    },
    {
      quote: 'Our partnership amplified our environmental efforts. Together we restored 50 hectares.',
      author: 'Mr. Kipchoge',
      role: 'Community Partner',
      icon: '🌱',
    },
    {
      quote: 'YoNISeRD research shaped our youth development policy at county level.',
      author: 'Dr. Kiplagat',
      role: 'Policy Maker',
      icon: '📋',
    },
  ];

  const stackedImages = [
    { image: img1, title: 'Community Engagement', description: 'Youth leaders organizing community awareness campaigns.' },
    { image: img2, title: 'Health Advocacy', description: 'Young advocates promoting mental health and wellbeing.' },
    { image: img3, title: 'Large-Scale Campaigns', description: 'Community members participating in health awareness walks.' },
    { image: img4, title: 'Field Work', description: 'Our team delivering health initiatives across Kisii region.' },
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % stackedImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [stackedImages.length]);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const startTime = Date.now();

    const updateCounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        youth: Math.floor(10000 * progress),
        communities: Math.floor(50 * progress),
        programs: Math.floor(15 * progress),
        employment: Math.floor(75 * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      }
    };

    requestAnimationFrame(updateCounts);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-10 md:py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h1
              className="text-3xl md:text-4xl font-bold mb-2 text-center uppercase tracking-wide"
              style={{ color: '#102C26', letterSpacing: '0.05em' }}
            >
              Our Impact
            </h1>
            <p
              className="text-center text-base md:text-lg max-w-3xl mx-auto italic"
              style={{ color: '#145C44' }}
            >
              7 years of measurable change, youth-led innovation, and sustainable development across Kenya's communities.
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section ref={sectionRef} className="py-12 px-6" style={{ backgroundColor: '#F7E7CE' }}>
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              style={{ color: '#102C26' }}
            >
              Impact by the Numbers
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {metrics.map((metric) => (
                <div
                  key={metric.key}
                  className="text-center p-5 md:p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E8F3EE',
                  }}
                >
                  <div className="text-3xl mb-2">{metric.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#145C44' }}>
                    {metric.key === 'youth' && `${counts.youth.toLocaleString()}+`}
                    {metric.key === 'communities' && `${counts.communities}+`}
                    {metric.key === 'programs' && counts.programs}
                    {metric.key === 'employment' && `${counts.employment}%`}
                  </div>
                  <p className="text-xs md:text-sm" style={{ color: '#102C26' }}>
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas of Impact */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              style={{ color: '#102C26' }}
            >
              Areas of Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {impactAreas.map((area, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg transition-all duration-300 hover:shadow-lg group h-full"
                  style={{
                    backgroundColor: index % 2 === 0 ? '#F7E7CE' : '#FFFFFF',
                    border: '1px solid #E8F3EE',
                  }}
                >
                  <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#145C44' }}>
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#8B8B8B' }}>
                    {area.description}
                  </p>
                  <div
                    className="pt-3 border-t text-xs font-semibold"
                    style={{ borderColor: '#E8F3EE', color: '#145C44' }}
                  >
                    {area.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voices of Change */}
        <section className="py-12 px-6" style={{ backgroundColor: '#F7E7CE' }}>
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              style={{ color: '#102C26' }}
            >
              Voices of Change
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E8F3EE',
                  }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl flex-shrink-0">{testimonial.icon}</span>
                    <div>
                      <p className="font-bold" style={{ color: '#102C26' }}>
                        {testimonial.author}
                      </p>
                      <p className="text-xs" style={{ color: '#145C44' }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed italic" style={{ color: '#666666' }}>
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stacked Overlay Animation - Real Impact */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 text-center"
              style={{ color: '#102C26' }}
            >
              Real Impact, Real People
            </h2>
            <p className="text-center text-sm md:text-base max-w-2xl mx-auto mb-10" style={{ color: '#666666' }}>
              See our work in action through the voices and faces of the communities we serve.
            </p>

            <div className="max-w-4xl mx-auto">
              {/* Stacked Image Container */}
              <div className="relative h-80 md:h-96 mb-8">
                {stackedImages.map((img, index) => {
                  const isActive = index === activeImageIndex;
                  const isBefore = index < activeImageIndex;
                  const translateY = isBefore ? -20 : (isActive ? 0 : 20);
                  const opacity = isActive ? 1 : 0.3;

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden transition-all duration-700 ease-out"
                      style={{
                        transform: `translateY(${translateY}px)`,
                        opacity: opacity,
                        zIndex: activeImageIndex === index ? 10 : 5 - index,
                        visibility: isActive || isBefore ? 'visible' : 'hidden',
                      }}
                    >
                      <img
                        src={img.image}
                        alt={img.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Bottom Gradient Overlay - Minimal coverage */}
                      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80" />
                      
                      {/* Overlay Content - Text at bottom only */}
                      {isActive && (
                        <div 
                          className="absolute bottom-0 left-0 right-0 p-6 md:p-8 animate-fadeIn"
                          style={{ zIndex: 20 }}
                        >
                          {/* Title */}
                          <h3 
                            className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-wide"
                            style={{ 
                              color: '#FFFFFF',
                              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                              letterSpacing: '0.05em',
                            }}
                          >
                            {img.title}
                          </h3>
                          
                          {/* Description */}
                          <p 
                            className="text-xs md:text-sm leading-relaxed max-w-2xl"
                            style={{ 
                              color: '#F0F0F0',
                              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                              lineHeight: '1.5',
                            }}
                          >
                            {img.description}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3">
                {stackedImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: activeImageIndex === index ? '32px' : '12px',
                      height: '12px',
                      backgroundColor: activeImageIndex === index ? '#145C44' : '#E8F3EE',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Journey/Timeline - Horizontal Format */}
        <section className="py-16 px-6" style={{ backgroundColor: '#F7E7CE' }}>
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3 text-center uppercase tracking-wide"
              style={{ color: '#102C26', letterSpacing: '0.05em' }}
            >
              Our Journey
            </h2>
            <p
              className="text-center text-sm md:text-base max-w-2xl mx-auto mb-12 italic"
              style={{ color: '#145C44' }}
            >
              Milestones that shaped our impact across Kenya's communities
            </p>

            {/* Horizontal Timeline - Desktop */}
            <div className="hidden md:block">
              <div className="relative px-4 py-12">
                {/* Timeline Line */}
                <div
                  className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2"
                  style={{ backgroundColor: '#145C44' }}
                />

                {/* Timeline Markers Container */}
                <div className="flex justify-between relative z-10">
                  {[
                    { year: '2018', milestone: 'Official Registration', desc: 'YoNISeRD registered as an NGO', icon: '📜' },
                    { year: '2019', milestone: 'First Programs Launched', desc: 'Seed of Hope and Community Health begin', icon: '🚀' },
                    { year: '2020', milestone: 'Community Expansion', desc: 'Extended to 20 communities during COVID-19', icon: '🌍' },
                    { year: '2021', milestone: 'Research Hub Launched', desc: 'Created space for youth-led research', icon: '📊' },
                    { year: '2023', milestone: 'Policy Influence', desc: 'Evidence shaped national youth strategies', icon: '🏛️' },
                    { year: '2024', milestone: '10,000+ Youth Reached', desc: 'Operating in 50 communities, 15 programs', icon: '👥' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center group cursor-pointer flex-1"
                      style={{
                        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                      }}
                    >
                      {/* Card - alternates above and below timeline */}
                      <div
                        className={`relative mb-8 md:mb-0 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 rounded-lg p-4 text-center ${
                          index % 2 === 0 ? 'md:mb-20' : 'md:mt-20'
                        }`}
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '2px solid #145C44',
                          width: '160px',
                          minHeight: '140px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h3 className="font-bold text-xs md:text-sm leading-tight" style={{ color: '#102C26' }}>
                          {item.milestone}
                        </h3>
                        <p className="text-xs mt-2 leading-tight" style={{ color: '#666666' }}>
                          {item.desc}
                        </p>
                      </div>

                      {/* Connecting Line - only for non-mobile */}
                      <div
                        className={`hidden md:block absolute w-1 transition-all duration-300 group-hover:bg-yellow-600 ${
                          index % 2 === 0 ? 'top-full' : 'bottom-full'
                        }`}
                        style={{
                          backgroundColor: '#145C44',
                          height: '20px',
                          opacity: 0.3,
                        }}
                      />

                      {/* Milestone Marker - Circle on the line */}
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white shadow-md transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl relative z-20"
                        style={{
                          backgroundColor: '#102C26',
                          fontSize: '20px',
                        }}
                      >
                        {item.year.slice(-2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Timeline - Vertical Zig-Zag */}
            <div className="md:hidden space-y-4 px-2">
              {[
                { year: '2018', milestone: 'Official Registration', desc: 'YoNISeRD registered as an NGO', icon: '📜' },
                { year: '2019', milestone: 'First Programs Launched', desc: 'Seed of Hope and Community Health begin', icon: '🚀' },
                { year: '2020', milestone: 'Community Expansion', desc: 'Extended to 20 communities during COVID-19', icon: '🌍' },
                { year: '2021', milestone: 'Research Hub Launched', desc: 'Created space for youth-led research', icon: '📊' },
                { year: '2023', milestone: 'Policy Influence', desc: 'Evidence shaped national youth strategies', icon: '🏛️' },
                { year: '2024', milestone: '10,000+ Youth Reached', desc: 'Operating in 50 communities, 15 programs', icon: '👥' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{
                    backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F0F9F6',
                    border: '2px solid #145C44',
                    animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ backgroundColor: '#102C26' }}>
                    {item.year}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-base" style={{ color: '#102C26' }}>
                      {item.milestone}
                    </h3>
                    <p className="text-sm mt-2 leading-relaxed" style={{ color: '#666666' }}>
                      {item.desc}
                    </p>
                  </div>
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                </div>
              ))}
            </div>
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
          `}</style>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#102C26' }}>
              Be Part of the Change
            </h2>
            <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Join us in creating lasting impact. Whether through volunteering, partnership, or support, your involvement matters.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-8 py-3 rounded font-semibold transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: '#102C26',
                color: '#FFFFFF',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#145C44';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#102C26';
              }}
            >
              Get Involved
            </Link>
          </div>
        </section>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-in-out;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Impact;
