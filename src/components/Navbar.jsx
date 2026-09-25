import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const dropdownMenus = [
  {
    label: 'About Us',
    items: [
      { label: 'About YoNISeRD', description: 'Mission, vision & story', to: '/about#overview' },
      { label: 'Leadership', description: 'Meet our team', to: '/about#leadership' },
      { label: 'Awards', description: 'Milestones & recognition', to: '/about#awards' },
      { label: 'Contact', description: 'Reach out anytime', to: '/contact' },
    ],
  },
  {
    label: 'What We Do',
    items: [
      { label: 'Programs', description: 'Flagship initiatives', to: '/programs' },
      { label: 'Our Work', description: 'Stories from the field', to: '/our-work' },
      { label: 'Impact', description: 'Data & outcomes', to: '/impact' },
    ],
  },
  {
    label: 'Get Involved',
    items: [
      { label: 'Volunteer', description: 'Share your skills', to: '/contact#volunteer' },
      { label: 'Partner with Us', description: 'Collaborate on programs', to: '/programs#partnerships' },
      { label: 'Spread the Word', description: 'Share our story', to: '/#news' },
    ],
  },
];

const simpleLinks = [
  { label: 'Gallery', to: '/gallery' },
  { label: 'News', to: '/news' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const dropdownTimeoutRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle dropdown open with clear timeout
  const handleDropdownEnter = (label) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  // Handle dropdown close with delay
  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMobileToggle = (label) => {
    setMobileDropdowns((prev) => {
      // If the clicked dropdown is already open, close it
      if (prev[label]) {
        return { ...prev, [label]: false };
      }
      // If it's closed, open it and close all others
      return { [label]: true };
    });
  };

  return (
    <nav className="sticky top-0 z-50 px-4 sm:px-6 py-3 backdrop-blur-md navbar-bg" role="navigation" aria-label="Main navigation">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 sm:gap-3" aria-label="YoNISeRD Home" onClick={() => setActiveDropdown(null)}>
          <img src={logo} alt="YoNISeRD Logo" className="h-9 sm:h-11 w-auto rounded-full bg-white/90 p-1 shadow-lg" />
          <div className="flex flex-col text-white leading-tight">
            <span className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.3em] text-white/80">Youth Network Integrated Services</span>
            <span className="text-xs sm:text-base font-semibold">Research & Development</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="brand-nav hidden lg:flex items-center gap-8">
          {dropdownMenus.map((menu) => (
            <div
              key={menu.label}
              className={`dropdown-wrapper ${activeDropdown === menu.label ? 'open' : ''}`}
              onMouseEnter={() => handleDropdownEnter(menu.label)}
              onMouseLeave={() => handleDropdownLeave()}
            >
              <button type="button" className="nav-link flex items-center gap-2">
                {menu.label}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path d="M1 3L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="dropdown-panel" onMouseEnter={() => handleDropdownEnter(menu.label)} onMouseLeave={() => handleDropdownLeave()}>
                {menu.items.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className="dropdown-link"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <strong>{item.label}</strong>
                    <span>{item.description}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}

          {simpleLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className={({ isActive }) => `brand-cta ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white transition-all duration-300 ease-out"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation - Slide-in Drawer */}
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-400 ease-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Slide-in drawer panel */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-screen w-80 bg-slate-900/90 backdrop-blur-lg shadow-2xl lg:hidden transform transition-transform duration-400 ease-out flex flex-col border-l border-white/10 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
      >
        {/* Close button */}
        <div className="flex flex-shrink-0 justify-end p-4 border-b border-white/10">
          <button
            type="button"
            onClick={closeMenu}
            className="p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400 transition-all duration-300 ease-out"
            aria-label="Close navigation menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile menu content */}
        <div className="flex-1 overflow-y-auto bg-transparent w-full">
          {dropdownMenus.map((menu) => (
            <div key={menu.label}>
              <button
                 type="button"
                 className="w-full px-4 py-4 text-left bg-white/5 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400 transition-all duration-300 ease-out flex items-center justify-between border-b border-white/10 cursor-pointer z-10 relative"
                 onClick={() => handleMobileToggle(menu.label)}
                 aria-expanded={Boolean(mobileDropdowns[menu.label])}
               >
                 <span className="text-white font-bold text-base block">{menu.label}</span>
                 <svg
                   className={`w-5 h-5 text-white/70 transition-transform duration-400 ease-out ${mobileDropdowns[menu.label] ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                 >
                  <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileDropdowns[menu.label] && (
                <div className="mobile-dropdown">
                  {menu.items.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      onClick={() => {
                        closeMenu();
                        setMobileDropdowns({});
                      }}
                      className="block w-full px-6 py-3 bg-white/5 hover:bg-white/10 transition-all duration-300 ease-out text-white border-b border-white/10"
                    >
                      <strong className="block text-white text-sm font-bold">{item.label}</strong>
                      <span className="text-xs text-white/70 block leading-tight">{item.description}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          {simpleLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="block w-full px-4 py-4 font-bold text-white bg-white/5 hover:bg-white/15 transition-all duration-300 ease-out border-b border-white/10 text-base"
              onClick={() => {
                closeMenu();
                setMobileDropdowns({});
              }}
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="block w-full m-4 px-4 py-3 text-center font-bold text-base bg-cyan-400 text-slate-900 rounded-lg hover:bg-cyan-300 transition-all duration-300 ease-out"
            onClick={() => {
              closeMenu();
              setMobileDropdowns({});
            }}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
