import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, MapPin, Briefcase } from 'lucide-react';
import heroImage from '../assets/gallery4.jpg';

const MetricCard = ({ icon: Icon, number, label, backgroundColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        flex flex-col items-center justify-center
        px-4 py-6 rounded-lg
        border border-deep-forest/20
        transition-all duration-300 ease-out
        ${isHovered ? 'shadow-lg scale-105 border-accent-green' : 'shadow-md'}
        cursor-pointer
        focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-accent-blue
      `}
      style={{
        backgroundColor: isHovered ? 'var(--white)' : backgroundColor,
      }}
      role="article"
      tabIndex="0"
      aria-label={`${number} ${label}`}
    >
      {/* Icon Container */}
      <div
        className={`
          p-2.5 rounded-full mb-3
          transition-all duration-300
          ${isHovered ? 'scale-110' : ''}
        `}
        style={{
          backgroundColor: isHovered ? 'var(--forest)' : 'var(--forest-dark)',
        }}
      >
        <Icon size={24} strokeWidth={2} color="white" />
      </div>

      {/* Number */}
      <h3
        className={`
          text-2xl font-bold
          transition-colors duration-300
          ${isHovered ? 'text-accent-green' : 'text-deep-forest'}
        `}
      >
        {number}
      </h3>

      {/* Label */}
      <p className="text-xs font-semibold text-center text-deep-forest/60 mt-2 tracking-wider uppercase leading-tight">
        {label}
      </p>
    </div>
  );
};

const PartnerCTA = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        px-8 py-3
        rounded-lg font-bold text-base
        transition-all duration-300 ease-out
        transform whitespace-nowrap
        focus:outline-2 focus:outline-offset-2 focus:outline-accent-blue
      `}
      style={{
        backgroundColor: isHovered ? 'var(--forest)' : 'var(--forest-darker)',
        color: 'white',
        boxShadow: isHovered ? '0 8px 20px rgba(15, 61, 43, 0.35)' : '0 4px 12px rgba(15, 61, 43, 0.2)',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      aria-label="Partner with youth innovators - contact us for partnership opportunities"
    >
      Partner With Us
    </button>
  );
};

export default function YouthLeadershipSection() {
  const navigate = useNavigate();

  const handlePartnerClick = () => {
    navigate('/contact');
  };

  return (
    <section aria-label="Youth Leadership Impact Section" className="relative overflow-hidden">
      {/* Dual-tone Background Container */}
      <div className="relative">
        {/* Left side background (Champagne) */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-champagne/30"></div>
        {/* Right side background (White) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-white/50"></div>

        {/* Content */}
        <div className="relative py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Side: Text Content + Partner Info */}
              <div className="space-y-6">
                {/* Main Heading */}
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-deep-forest">
                    Bright futures
                    <br />
                    <span className="relative inline-block mt-1">
                      powered by youth
                      <span
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-accent-green rounded-full"
                        aria-hidden="true"
                      ></span>
                    </span>
                    <br />
                    leadership
                  </h2>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-deep-forest/80 leading-relaxed max-w-md">
                  We connect youth with networks, vocational skills, and research-backed programs to build resilient, inclusive futures.
                </p>

                {/* Metrics Grid - Compact */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 pt-2">
                  <MetricCard
                    icon={Clock}
                    number="7+"
                    label="Years of Impact"
                    backgroundColor="var(--champagne)"
                  />
                  <MetricCard
                    icon={MapPin}
                    number="50"
                    label="Communities"
                    backgroundColor="var(--champagne-spot-1)"
                  />
                  <MetricCard
                    icon={Briefcase}
                    number="75%"
                    label="Employed"
                    backgroundColor="var(--champagne-spot-2)"
                  />
                </div>

                {/* Partner Info Section */}
                <div className="space-y-3 pt-4">
                  <p className="text-xs font-semibold text-deep-forest/60 tracking-widest uppercase">
                    Get Involved
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-deep-forest">
                    Partner with youth innovators
                  </h3>
                  <p className="text-sm md:text-base text-deep-forest/75 leading-relaxed max-w-md">
                    Co-create solutions with community leaders driving education, health, and climate action.
                  </p>
                </div>
              </div>

              {/* Right Side: Image + Button + Bullets */}
              <div className="relative md:pl-6 space-y-6">
                {/* Image */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  {/* Image Container */}
                  <div className="bg-deep-forest aspect-square md:aspect-auto md:h-96 lg:h-[450px] flex items-center justify-center">
                    <img
                      src={heroImage}
                      alt="Youth leaders at Kisii University AIDS Day event"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Semi-transparent Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/70 via-deep-forest/30 to-transparent opacity-80"></div>

                  {/* Caption Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-forest to-transparent p-5 md:p-6">
                    <p className="text-white/95 text-sm md:text-base font-medium leading-snug">
                      Youth leading HIV awareness campaigns at Kisii University
                    </p>
                  </div>
                </div>

                {/* CTA Section - Button + Bullets */}
                <div className="space-y-4">
                  {/* Partner Button */}
                  <div>
                    <PartnerCTA onClick={handlePartnerClick} />
                  </div>

                  {/* Partnership Areas - Compact */}
                  <ul className="space-y-2 text-deep-forest/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green font-bold mt-0.5" aria-hidden="true">
                        •
                      </span>
                      <span>School-to-work transitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green font-bold mt-0.5" aria-hidden="true">
                        •
                      </span>
                      <span>Community research hubs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green font-bold mt-0.5" aria-hidden="true">
                        •
                      </span>
                      <span>Mentorship & wellbeing support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
