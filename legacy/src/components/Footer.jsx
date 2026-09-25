import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SOCIAL_LINKS, ORG_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="text-white py-16 px-6 border-t-4" style={{ backgroundColor: 'var(--primary-dark)', borderColor: 'var(--primary-blue)' }} role="contentinfo">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: 'var(--primary-blue)' }}>About {ORG_INFO.shortName}</h3>
            <p className="text-white text-base leading-relaxed">
              {ORG_INFO.name} empowers youth through collaborative networks, innovative research, and sustainable development services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: 'var(--primary-blue)' }}>Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link to="/" className="text-white hover:text-[var(--primary-blue)] transition-all duration-300 focus:outline-none focus:ring-2 rounded px-1" style={{ textShadow: 'none' }} onMouseEnter={(e) => e.target.style.textShadow = '0 0 8px rgba(126, 187, 191, 0.6)'} onMouseLeave={(e) => e.target.style.textShadow = 'none'} onFocus={(e) => e.target.style.boxShadow = '0 0 12px rgba(126, 187, 191, 0.6)'} onBlur={(e) => e.target.style.boxShadow = 'none'}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-[var(--primary-blue)] transition-all duration-300 focus:outline-none focus:ring-2 rounded px-1" style={{ textShadow: 'none' }} onMouseEnter={(e) => e.target.style.textShadow = '0 0 8px rgba(126, 187, 191, 0.6)'} onMouseLeave={(e) => e.target.style.textShadow = 'none'} onFocus={(e) => e.target.style.boxShadow = '0 0 12px rgba(126, 187, 191, 0.6)'} onBlur={(e) => e.target.style.boxShadow = 'none'}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-white hover:text-[var(--primary-blue)] transition-all duration-300 focus:outline-none focus:ring-2 rounded px-1" style={{ textShadow: 'none' }} onMouseEnter={(e) => e.target.style.textShadow = '0 0 8px rgba(126, 187, 191, 0.6)'} onMouseLeave={(e) => e.target.style.textShadow = 'none'} onFocus={(e) => e.target.style.boxShadow = '0 0 12px rgba(126, 187, 191, 0.6)'} onBlur={(e) => e.target.style.boxShadow = 'none'}>
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="text-white hover:text-[var(--primary-blue)] transition-all duration-300 focus:outline-none focus:ring-2 rounded px-1" style={{ textShadow: 'none' }} onMouseEnter={(e) => e.target.style.textShadow = '0 0 8px rgba(126, 187, 191, 0.6)'} onMouseLeave={(e) => e.target.style.textShadow = 'none'} onFocus={(e) => e.target.style.boxShadow = '0 0 12px rgba(126, 187, 191, 0.6)'} onBlur={(e) => e.target.style.boxShadow = 'none'}>
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-[var(--primary-blue)] transition-all duration-300 focus:outline-none focus:ring-2 rounded px-1" style={{ textShadow: 'none' }} onMouseEnter={(e) => e.target.style.textShadow = '0 0 8px rgba(126, 187, 191, 0.6)'} onMouseLeave={(e) => e.target.style.textShadow = 'none'} onFocus={(e) => e.target.style.boxShadow = '0 0 12px rgba(126, 187, 191, 0.6)'} onBlur={(e) => e.target.style.boxShadow = 'none'}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-5" style={{ color: 'var(--primary-blue)' }}>Connect With Us</h3>
            <address className="text-white text-base md:text-lg mb-6 not-italic space-y-3 leading-relaxed">
              <p className="flex items-center gap-2">
                <span className="text-xl">📍</span>
                <span className="text-white">{CONTACT_INFO.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl">📧</span>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="text-white hover:text-[var(--primary-blue)] transition-all duration-300 focus:outline-none focus:ring-2 rounded px-1" 
                  style={{ textShadow: 'none' }}
                  onMouseEnter={(e) => e.target.style.textShadow = '0 0 8px rgba(126, 187, 191, 0.6)'}
                  onMouseLeave={(e) => e.target.style.textShadow = 'none'}
                  onFocus={(e) => e.target.style.boxShadow = '0 0 12px rgba(126, 187, 191, 0.6)'}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl">📞</span>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`} 
                  className="text-white hover:text-[var(--primary-blue)] transition-all duration-300 focus:outline-none focus:ring-2 rounded px-1" 
                  style={{ textShadow: 'none' }}
                  onMouseEnter={(e) => e.target.style.textShadow = '0 0 8px rgba(126, 187, 191, 0.6)'}
                  onMouseLeave={(e) => e.target.style.textShadow = 'none'}
                  onFocus={(e) => e.target.style.boxShadow = '0 0 12px rgba(126, 187, 191, 0.6)'}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </address>
            {/* Social Links */}
             <div className="flex gap-4 mt-6">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ borderColor: 'var(--primary-blue)', focusRingColor: 'var(--primary-blue)', focusRingOffsetColor: 'var(--primary-dark)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-blue)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(126, 187, 191, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg className="w-6 h-6 text-white hover:text-[var(--forest-dark)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.721-2.004 1.413-.103.25-.129.599-.129.948v5.444h-3.554s.05-8.829 0-9.74h3.554v1.375l-.022.034h.022v-.034c.429-.661 1.194-1.604 2.905-1.604 2.12 0 3.71 1.384 3.71 4.363v5.606zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.915.755 1.937 1.71 0 .951-.75 1.71-1.98 1.71zm1.581 11.597H3.715V9.567h3.203v10.885zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on X"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ borderColor: 'var(--primary-blue)', focusRingColor: 'var(--primary-blue)', focusRingOffsetColor: 'var(--primary-dark)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-blue)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(126, 187, 191, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg className="w-6 h-6 text-white hover:text-[var(--forest-dark)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-3.51l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ borderColor: 'var(--primary-blue)', focusRingColor: 'var(--primary-blue)', focusRingOffsetColor: 'var(--primary-dark)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-blue)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(126, 187, 191, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg className="w-6 h-6 text-white hover:text-[var(--forest-dark)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ borderColor: 'var(--primary-blue)', focusRingColor: 'var(--primary-blue)', focusRingOffsetColor: 'var(--primary-dark)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-blue)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(126, 187, 191, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg className="w-6 h-6 text-white hover:text-[var(--forest-dark)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8" style={{ borderTop: '1px solid rgba(126, 187, 191, 0.2)' }}></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-base text-white pt-4">
          <p>&copy; {new Date().getFullYear()} {ORG_INFO.shortName} | {ORG_INFO.name}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="text-white/70 hover:text-[var(--primary-blue)] transition-all duration-300 cursor-not-allowed" style={{ textShadow: 'none' }} onMouseEnter={(e) => e.target.style.textShadow = '0 0 8px rgba(126, 187, 191, 0.6)'} onMouseLeave={(e) => e.target.style.textShadow = 'none'}>Privacy Policy</span>
            <span className="text-white/70 hover:text-[var(--primary-blue)] transition-all duration-300 cursor-not-allowed" style={{ textShadow: 'none' }} onMouseEnter={(e) => e.target.style.textShadow = '0 0 8px rgba(126, 187, 191, 0.6)'} onMouseLeave={(e) => e.target.style.textShadow = 'none'}>Terms of Service</span>
            <span className="text-white/70 hover:text-[var(--primary-blue)] transition-all duration-300 cursor-not-allowed" style={{ textShadow: 'none' }} onMouseEnter={(e) => e.target.style.textShadow = '0 0 8px rgba(126, 187, 191, 0.6)'} onMouseLeave={(e) => e.target.style.textShadow = 'none'}>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
