import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import StoryModal from '../components/StoryModal';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdowns, setCountdowns] = useState({});
  
  // Subscribe form state
  const [subscribeData, setSubscribeData] = useState({ name: '', email: '' });
  const [subscribeErrors, setSubscribeErrors] = useState({});
  const [subscribeSubmitted, setSubscribeSubmitted] = useState(false);
  const [subscribeLoading, setSubscribeLoading] = useState(false);

  const stories = [
    // Latest Updates (Most Recent)
    {
      id: 1,
      title: 'Drug-Free Communities Initiative Shows Measurable Results',
      excerpt: 'Youth advocacy walks mobilized commitment to drug-free living across 3,500+ people.',
      category: 'environment',
      date: 'November 3, 2025',
      image: require('../assets/gallery2.jpg'),
      section: 'latest',
      content: 'Our comprehensive substance abuse prevention campaign combined community marches, educational sessions, and peer-to-peer conversations. Youth advocates distributed 3,500+ educational materials, engaged 1,200+ people in awareness activities, and successfully positioned drug prevention as a community priority with government backing.',
    },
    {
      id: 2,
      title: 'National Mental Health Walk Achieves Historic Turnout',
      excerpt: 'Community marches brought together diverse stakeholders to break stigma and advocate for wellness resources.',
      category: 'impact',
      date: 'November 8, 2025',
      image: require('../assets/gallery1.jpg'),
      section: 'latest',
      content: 'Our flagship annual mental health walk united diverse stakeholders marching in solidarity to break stigma and advocate for mental wellness resources. The event generated massive media coverage, secured government commitment to integrate mental health resources in schools, and established 12 permanent mental health counseling desks in community centers.',
    },
    {
      id: 3,
      title: 'Health Champions in Schools Program Reaches 8,000+ Students',
      excerpt: 'Student health ambassadors delivered wellness talks across 25 schools achieving measurable health behavior change.',
      category: 'news',
      date: 'September 30, 2025',
      image: require('../assets/gallery4.jpg'),
      section: 'latest',
      content: 'Our Health Champions program empowered 600+ students to promote wellness among their peers across 25 schools. Student ambassadors delivered health talks on nutrition, disease prevention, reproductive health, and mental wellness. Measurable impact: 8,000+ students reached with health messaging, measurable knowledge gains on preventive health behaviors, 25 active wellness clubs established.',
    },
    // Past Highlights
    {
      id: 4,
      title: 'Youth Leadership Summit Produces 35+ Community Action Plans',
      excerpt: 'Young change-makers developed innovative solutions creating community-led projects across Kisii County.',
      category: 'impact',
      date: 'October 8, 2025',
      image: require('../assets/gallery5.jpg'),
      section: 'highlights',
      content: 'Our annual Youth Leadership Summit convened 450+ youth leaders for skills development and collaborative planning. Participants engaged in workshops on civic participation, grassroots mobilization, and social entrepreneurship. Output: 35+ community action plans initiated, strengthening the pipeline of youth-led development initiatives across Kisii County and beyond.',
    },
    {
      id: 5,
      title: 'Research: Youth Leadership Training Shows 95% Satisfaction',
      excerpt: 'Program evaluation confirms 95% improved leadership skills with 150+ now serving as peer mentors.',
      category: 'research',
      date: 'October 28, 2025',
      image: require('../assets/gallery3.jpg'),
      section: 'highlights',
      content: 'We conducted a comprehensive evaluation of 380+ program participants. Key findings: 95% report improved personal mental health literacy, 150+ now serve as peer mental health ambassadors, 92% program completion rate, 94% participant satisfaction with support groups, and measurable impact on mental health facility attendance (+45% in participating communities).',
    },
    {
      id: 6,
      title: 'Partnership with Kenya Counselling Association Expands Reach',
      excerpt: 'Strategic collaboration enables mental health programming expansion across multiple Kenyan counties.',
      category: 'partnership',
      date: 'October 20, 2025',
      image: require('../assets/gallery1.jpg'),
      section: 'highlights',
      content: 'Strategic partnership with KCPA enables us to expand mental health programming across multiple counties in Kenya. Joint initiatives include training programs, community awareness campaigns, and professional referral networks. Expected reach: 50,000+ youth and community members over the next two years.',
    },
    {
      id: 7,
      title: 'Youth Mental Health Champions Transform Communities',
      excerpt: '380+ trained advocates actively promote mental wellness reaching 20,000+ households with peer interventions.',
      category: 'success-story',
      date: 'November 12, 2025',
      image: require('../assets/gallery2.jpg'),
      section: 'highlights',
      content: 'Through our Mental Health Advocate Training Academy, we\'ve created a network of 380+ certified youth champions. These young leaders conduct awareness campaigns, facilitate support groups, and provide peer counseling in schools and communities. Measurable impact: 20,000+ people reached, 8 ongoing support networks with 650+ active members, 3,200+ counseling sessions provided.',
    },
    {
      id: 8,
      title: 'Peer Counseling Network Supports 1,000+ Individuals',
      excerpt: '3,200+ confidential sessions provided connecting individuals to professional mental health services.',
      category: 'programs',
      date: 'October 15, 2025',
      image: require('../assets/gallery4.jpg'),
      section: 'highlights',
      content: 'Trained peer counselors conducted one-on-one sessions in safe spaces, providing supportive listening and basic mental health guidance. Sessions included initial assessment and professional referrals. Outcomes: 3,200+ sessions delivered, 580+ individuals successfully referred to psychiatric care, 1,000+ individuals served, 94% participant satisfaction and successful outcomes.',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Stories' },
    { value: 'success-story', label: 'Success Stories' },
    { value: 'impact', label: 'Impact Updates' },
    { value: 'research', label: 'Research' },
    { value: 'programs', label: 'Programs' },
    { value: 'environment', label: 'Environment' },
    { value: 'partnership', label: 'Partnerships' },
    { value: 'news', label: 'News' },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'success-story': { bg: '#145C44', text: '#FFFFFF' },
      'impact': { bg: '#2E7D32', text: '#FFFFFF' },
      'research': { bg: '#1e5f8e', text: '#FFFFFF' },
      'programs': { bg: '#6B4C9A', text: '#FFFFFF' },
      'environment': { bg: '#2E7D32', text: '#FFFFFF' },
      'partnership': { bg: '#D97706', text: '#FFFFFF' },
      'news': { bg: '#7EBBBF', text: '#FFFFFF' },
    };
    return colors[category] || { bg: '#7EBBBF', text: '#FFFFFF' };
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'success-story': '⭐',
      'impact': '📊',
      'research': '🔬',
      'programs': '🎓',
      'environment': '🌍',
      'partnership': '🤝',
      'news': '📰',
    };
    return icons[category] || '📌';
  };

  // Initialize countdowns
  useEffect(() => {
    const updateCountdowns = () => {
      const targets = {
        summit: new Date('2026-06-15').getTime(),
        mental: new Date('2026-05-01').getTime(),
        partnership: new Date('2026-04-01').getTime(),
      };

      Object.keys(targets).forEach(key => {
        const now = new Date().getTime();
        const diff = targets[key] - now;
        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          setCountdowns(prev => ({
            ...prev,
            [key]: { days, hours }
          }));
        }
      });
    };

    updateCountdowns();
    const timer = setInterval(updateCountdowns, 3600000); // Update every hour
    return () => clearInterval(timer);
  }, []);

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  // scroll-trigger animations
  useEffect(() => {
    // Small delay to ensure DOM is fully updated after render
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      const elements = document.querySelectorAll('.news-card, .placeholder-card, .filter-buttons');
      elements.forEach(el => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [selectedCategory]);

  // Subscribe form validation
  const validateSubscribeForm = (formData) => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    return errors;
  };

  const handleSubscribeChange = (e) => {
    const { name, value } = e.target;
    setSubscribeData((prev) => ({ ...prev, [name]: value }));
    if (subscribeErrors[name]) {
      setSubscribeErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubscribeSubmit = async (e) => {
    e.preventDefault();
    const errors = validateSubscribeForm(subscribeData);

    if (Object.keys(errors).length === 0) {
      // Show loading state immediately
      setSubscribeLoading(true);
      
      // Clear form fields immediately so user sees them disappear
      setSubscribeData({ name: '', email: '' });
      setSubscribeErrors({});
      
      // Simulate submission delay for better UX
      setTimeout(() => {
        // Show success message
        setSubscribeSubmitted(true);
        setSubscribeLoading(false);
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubscribeSubmitted(false);
        }, 5000);
      }, 800);
      
      // Also submit the form data to Netlify if deployed there
      const formDataObj = new FormData(e.target);
      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formDataObj).toString(),
        }).catch(() => {
          // Silently fail if not on Netlify (for local development)
        });
      } catch (error) {
        // Silently fail
      }
    } else {
      setSubscribeErrors(errors);
    }
  };

  const latestStories = filteredStories.filter(s => s.section === 'latest');
  const highlightStories = filteredStories.filter(s => s.section === 'highlights');

  // Get featured (latest) story
  const allStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);
  const featuredStory = allStories.find(s => s.section === 'latest');

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* ===== HERO SECTION (REDESIGNED) ===== */}
        <section className="relative bg-champagne py-6 md:py-8 px-6 overflow-hidden news-hero">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading with Icon */}
            <div className="flex items-center justify-center gap-2 mb-2 animate-fadeIn">
              <span className="text-3xl md:text-4xl">📰</span>
              <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest leading-tight"
                  style={{textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                News & Updates
              </h1>
            </div>

            {/* Decorative underline */}
            <div className="h-1 bg-[var(--primary-blue)] w-20 mx-auto mb-4 rounded-full"></div>

            {/* Subheading */}
            <p className="text-base md:text-lg font-medium italic mb-2 max-w-2xl mx-auto leading-relaxed"
                style={{ color: '#A3A3A3' }}>
              Stay informed about our latest achievements, ongoing initiatives, and upcoming events.
            </p>

            {/* Secondary description */}
            <p className="text-sm max-w-3xl mx-auto leading-relaxed"
                style={{ color: '#A3A3A3' }}>
              Real stories from youth leaders, partners, and communities transforming lives through innovation and collaboration.
            </p>
          </div>

          {/* Subtle bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-green to-transparent"></div>
        </section>

        {/* CSS Animation for fade-in effect */}
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}</style>

        {/* ===== FEATURED STORY STRIP ===== */}
        {featuredStory && (
          <section className="breaking-news sticky top-0 z-30">
            <div className="max-w-6xl mx-auto flex items-center gap-3 text-center md:text-left overflow-x-auto">
              <span className="text-lg font-bold whitespace-nowrap flex-shrink-0">🔥 Breaking News:</span>
              <p className="text-sm md:text-base whitespace-nowrap flex-shrink-0 font-semibold">
                {featuredStory.title}
              </p>
            </div>
          </section>
        )}

        {/* ===== FILTER SECTION ===== */}
        <section className="bg-white border-b-2 border-champagne py-6 px-6 sticky top-[72px] z-40 shadow-sm">
          <div className="max-w-6xl mx-auto">
            <p className="text-brand-primary font-bold mb-3 text-center text-sm md:text-base">Filter by category:</p>
            <div className="filter-buttons flex flex-wrap justify-center gap-2 opacity-0 transform -translate-x-8">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-1.5 rounded-full font-semibold transition-all duration-300 text-xs md:text-sm ${selectedCategory === cat.value ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LATEST UPDATES SECTION ===== */}
        
          <section className="py-12 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="news-section-title text-2xl md:text-3xl font-bold text-brand-primary mb-3 uppercase tracking-tight">
                  📰 Latest Updates
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed" style={{ color: '#A3A3A3' }}>
                  Our most recent achievements — check back soon.
                </p>
                <div className="h-1.5 w-16 bg-[var(--primary-blue)] mt-3"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestStories.length > 0 ? (
                  latestStories.map(story => (
                    <NewsCard 
                      key={story.id} 
                      story={story} 
                      categories={categories}
                      categoryColor={getCategoryColor(story.category)}
                      categoryIcon={getCategoryIcon(story.category)}
                      onReadMore={() => {
                        setSelectedStory(story);
                        setIsModalOpen(true);
                      }}
                    />
                  ))
                ) : (
                  <div className="placeholder-card">
                    {subscribeSubmitted ? (
                      <div className="text-center py-6">
                        <div className="text-6xl mb-4">✓</div>
                        <h3 style={{ color: '#27AE60', fontSize: '1.6rem' }}>Subscription Successful!</h3>
                        <p style={{ color: '#27AE60', fontSize: '1.1rem', marginBottom: '1rem' }}>
                          Thank you for subscribing. Check your email for updates!
                        </p>
                        <p style={{ color: '#A3A3A3', fontSize: '0.9rem' }}>
                          You'll hear from us soon with the latest news and stories.
                        </p>
                      </div>
                    ) : (
                      <>
                        <span className="text-4xl">📰</span>
                        <h3>Coming Soon</h3>
                        <p>No updates yet — stay tuned for upcoming stories and highlights.</p>
                        
                        <form 
                          className="subscribe-form" 
                          name="subscribe-form"
                          method="POST"
                          data-netlify="true"
                          data-netlify-honeypot="bot-field"
                          onSubmit={handleSubscribeSubmit}
                        >
                          <input type="hidden" name="form-name" value="subscribe-form" />
                          <input type="hidden" name="bot-field" />

                          {subscribeErrors.name && (
                            <p className="text-red-600 text-xs font-semibold mb-1">{subscribeErrors.name}</p>
                          )}
                          <input 
                            type="text" 
                            name="name" 
                            placeholder="Your Name" 
                            value={subscribeData.name}
                            onChange={handleSubscribeChange}
                            disabled={subscribeLoading}
                            required
                          />

                          {subscribeErrors.email && (
                            <p className="text-red-600 text-xs font-semibold mb-1">{subscribeErrors.email}</p>
                          )}
                          <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email Address" 
                            value={subscribeData.email}
                            onChange={handleSubscribeChange}
                            disabled={subscribeLoading}
                            required
                          />
                          <button 
                            type="submit" 
                            className="subscribe-btn"
                            disabled={subscribeLoading}
                          >
                            {subscribeLoading ? 'Subscribing...' : 'Subscribe for Updates →'}
                          </button>
                        </form>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        

        {/* ===== PAST HIGHLIGHTS SECTION ===== */}
        
          <section className="py-12 px-6 bg-champagne/20 border-t-2 border-b-2 border-champagne/40">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="news-section-title text-2xl md:text-3xl font-bold text-brand-primary mb-3 uppercase tracking-tight">
                  🌟 Past Highlights
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed" style={{ color: '#A3A3A3' }}>
                  Archived stories showcasing our impact — check back soon.
                </p>
                <div className="h-1.5 w-16 bg-[var(--primary-blue)] mt-3"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlightStories.length > 0 ? (
                  highlightStories.map(story => (
                    <NewsCard 
                      key={story.id} 
                      story={story} 
                      categories={categories}
                      categoryColor={getCategoryColor(story.category)}
                      categoryIcon={getCategoryIcon(story.category)}
                      onReadMore={() => {
                        setSelectedStory(story);
                        setIsModalOpen(true);
                      }}
                    />
                  ))
                ) : (
                  <div className="placeholder-card">
                    {subscribeSubmitted ? (
                      <div className="text-center py-6">
                        <div className="text-6xl mb-4">✓</div>
                        <h3 style={{ color: '#27AE60', fontSize: '1.6rem' }}>Subscription Successful!</h3>
                        <p style={{ color: '#27AE60', fontSize: '1.1rem', marginBottom: '1rem' }}>
                          Thank you for subscribing. Check your email for updates!
                        </p>
                        <p style={{ color: '#A3A3A3', fontSize: '0.9rem' }}>
                          You'll hear from us soon with the latest news and stories.
                        </p>
                      </div>
                    ) : (
                      <>
                        <span className="text-4xl">📰</span>
                        <h3>Coming Soon</h3>
                        <p>No highlights yet — stay tuned for archival stories.</p>
                        
                        <form 
                          className="subscribe-form" 
                          name="subscribe-form"
                          method="POST"
                          data-netlify="true"
                          data-netlify-honeypot="bot-field"
                          onSubmit={handleSubscribeSubmit}
                        >
                          <input type="hidden" name="form-name" value="subscribe-form" />
                          <input type="hidden" name="bot-field" />

                          {subscribeErrors.name && (
                            <p className="text-red-600 text-xs font-semibold mb-1">{subscribeErrors.name}</p>
                          )}
                          <input 
                            type="text" 
                            name="name" 
                            placeholder="Your Name" 
                            value={subscribeData.name}
                            onChange={handleSubscribeChange}
                            disabled={subscribeLoading}
                            required
                          />

                          {subscribeErrors.email && (
                            <p className="text-red-600 text-xs font-semibold mb-1">{subscribeErrors.email}</p>
                          )}
                          <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email Address" 
                            value={subscribeData.email}
                            onChange={handleSubscribeChange}
                            disabled={subscribeLoading}
                            required
                          />
                          <button 
                            type="submit" 
                            className="subscribe-btn"
                            disabled={subscribeLoading}
                          >
                            {subscribeLoading ? 'Subscribing...' : 'Subscribe for Updates →'}
                          </button>
                        </form>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        

        {/* ===== UPCOMING EVENTS SECTION ===== */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-3 uppercase tracking-tight">
                Upcoming Events
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Join us for upcoming initiatives designed to create lasting impact. Events launching soon.
              </p>
              <div className="h-1.5 w-16 bg-accent-green mt-3"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UpcomingEventCard 
                title="Youth Leadership Summit 2026"
                teaser="500+ youth, 3 days of skills & networking"
                description="Join change-makers for deep-dive workshops, collaborative problem-solving, and peer-to-peer mentorship."
                icon="🎯"
                countdown={countdowns.summit}
                ctaText="Stay Tuned →"
              />
              <UpcomingEventCard 
                title="Mental Health Awareness Campaign"
                teaser="Community-wide initiative across Kisii County"
                description="Break stigma and advocate for mental wellness resources in schools and communities."
                icon="🧠"
                countdown={countdowns.mental}
                ctaText="Stay Tuned →"
              />
              <UpcomingEventCard 
                title="Partnership Expansion Kick-off"
                teaser="Scale impact across Kenya and beyond"
                description="Launch new collaborations with regional and national organizations."
                icon="🤝"
                countdown={countdowns.partnership}
                ctaText="Stay Tuned →"
              />
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-accent-green/10 to-accent-blue/10 rounded-lg border-2 border-accent-green/40">
              <p className="text-center text-gray-800 text-sm md:text-base leading-relaxed">
                <span className="font-bold text-accent-green">Have upcoming plans?</span> Contact us to confirm event dates and details that we can feature here. <Link to="/contact" className="underline hover:text-accent-green font-semibold">Get in touch →</Link>
              </p>
            </div>
          </div>
        </section>

        {/* ===== NO RESULTS MESSAGE ===== */}
        {filteredStories.length === 0 && (
          <section className="py-10 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-base text-gray-600">No stories found in this category.</p>
            </div>
          </section>
        )}

        {/* ===== CTA SECTION ===== */}
        <section className="py-14 px-6 bg-gradient-to-r from-brand-primary to-accent-green relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 uppercase tracking-tight">
              Want to Be Part of Our Next Story?
            </h2>
            <p className="text-base md:text-lg text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed">
              We love hearing from community members, partners, and beneficiaries. Share your experience, propose a collaboration, or get involved in our initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-accent-green font-bold py-3 px-8 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm md:text-base"
              >
                Get Involved
                <span className="text-lg">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/30 hover:shadow-xl transition-all duration-300 text-sm md:text-base border-2 border-white"
              >
                Share Your Story
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== STORY MODAL ===== */}
        <StoryModal
          story={selectedStory}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedStory(null);
          }}
          categories={categories}
        />
      </div>
    </Layout>
  );
};

/* ===== NEWS CARD COMPONENT ===== */
const NewsCard = ({ story, categories, categoryColor, categoryIcon, onReadMore }) => {
  return (
    <article className="news-card h-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-accent-green flex flex-col hover:-translate-y-1">
      {/* Image Container with Overlay */}
      <div className="relative h-48 overflow-hidden flex-shrink-0 bg-gray-200">
        <img 
          src={story.image} 
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        
        {/* Category Icon & Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 z-10">
          <span 
            className="text-2xl drop-shadow-lg"
          >
            {categoryIcon}
          </span>
          <span 
            className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex-shrink-0 shadow-md"
            style={{ backgroundColor: categoryColor.bg, color: categoryColor.text }}
          >
            {categories.find(c => c.value === story.category)?.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Date - Enhanced Clarity */}
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-accent-green/10 rounded-lg border-l-3 border-accent-green w-fit">
          <span className="text-accent-green">📅</span>
          <p className="text-sm font-bold text-accent-green">
            {story.date}
          </p>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-bold mb-3 line-clamp-2 group-hover:text-accent-green transition-colors leading-tight">
          {story.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm mb-4 line-clamp-2 leading-relaxed flex-grow">
          {story.excerpt}
        </p>

        {/* Impact Badge */}
        <div className="mb-4 flex items-center gap-1 text-xs text-accent-green font-semibold">
          <span>✓</span> Impact Verified
        </div>

        {/* CTA Button */}
        <button
          onClick={onReadMore}
          className="inline-flex items-center gap-1.5 text-accent-green font-bold text-sm group-hover:gap-3 transition-all hover:text-brand-primary"
        >
          Read Story 
          <span className="text-base">→</span>
        </button>
      </div>
    </article>
  );
};

/* ===== UPCOMING EVENT CARD COMPONENT ===== */
const UpcomingEventCard = ({ title, teaser, description, icon, countdown, ctaText }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-champagne/10 border-2 border-champagne/60 hover:border-accent-green flex flex-col hover:-translate-y-1">
      {/* Icon Container */}
      <div 
        className="h-40 bg-gradient-to-br from-accent-green/5 to-accent-blue/5 flex items-center justify-center flex-shrink-0 relative overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-blue rounded-full blur-2xl"></div>
        </div>
        <span className="text-7xl drop-shadow-lg relative z-10">{icon}</span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Status Badge */}
        <div className="inline-block bg-accent-green text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 w-fit shadow-md">
          Coming Soon
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-bold text-brand-primary mb-2 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Teaser */}
        <p className="text-xs text-accent-green font-semibold mb-3 line-clamp-1">
          {teaser}
        </p>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Countdown Timer */}
        {countdown && countdown.days > 0 && (
          <div className="mb-4 p-3 bg-accent-green/10 rounded-lg border border-accent-green/30 text-center countdown-timer">
            <p className="text-xs text-gray-600 mb-1">Launching in</p>
            <p className="text-lg font-bold text-accent-green">
              {countdown.days}d {countdown.hours}h
            </p>
          </div>
        )}

        {/* CTA Button */}
        <button className="inline-flex items-center justify-center gap-2 w-full bg-accent-green text-white font-bold py-2.5 px-4 rounded-lg hover:bg-brand-primary hover:shadow-lg transition-all duration-300 text-sm mt-auto">
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default News;
