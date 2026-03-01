import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomepageDesignSystem.css';
import Layout from '../components/Layout';
import YouthLeadershipSection from '../components/YouthLeadershipSection';
import AboutHeroSectionStyled from '../components/AboutHeroSectionStyled';
import ImprovedHeroSection from '../components/ImprovedHeroSection';
import OptimizedImpactMetrics from '../components/OptimizedImpactMetrics';
import MobileOptimizedImpactMetrics from '../components/MobileOptimizedImpactMetrics';
import PrinciplesModal from '../components/PrinciplesModal';
import { isMobileDevice } from '../utils/mobileOptimization';
import bannerImage from '../assets/gallery10.jpg';
import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';
import img5 from '../assets/gallery5.jpg';
import img6 from '../assets/gallery6.jpg';

const Home = () => {
    // Use mobile-optimized components on mobile devices
    const isMobile = useMemo(() => isMobileDevice(), []);
    const ImpactMetricsComponent = isMobile ? MobileOptimizedImpactMetrics : OptimizedImpactMetrics;

    const homeImages = [img1, img2, img3, img4, img5, img6];
    const homeDescriptions = [
        'Community outreach and youth empowerment initiatives',
        'Educational programs and workshops',
        'Health awareness campaigns',
        'Environmental conservation projects',
        'Gender equality and women empowerment',
        'Youth leadership development',
    ];

    const programHighlights = [
        {
            title: 'Seed of Hope',
            description: 'Vocational training and wellbeing support for teens and young adults.',
            link: '/programs',
        },
        {
            title: 'Community Health',
            description: 'Grassroots awareness campaigns led by youth advocates.',
            link: '/our-work',
        },
        {
            title: 'Green Futures',
            description: 'Climate-smart initiatives that build resilient livelihoods.',
            link: '/our-work',
        },
    ];

    const storyHighlights = [
        {
            title: 'Dennis opens his first carpentry studio',
            excerpt: 'Seed of Hope gave Dennis the tools and mentorship to launch a thriving workshop.',
            tag: 'Our Work',
            link: '/our-work',
        },
        {
            title: 'Girls leading community health clubs',
            excerpt: 'Teen leaders are driving conversations on wellbeing and rights in Kisii.',
            tag: 'Impact',
            link: '/impact',
        },
        {
            title: 'Youth climate champions',
            excerpt: 'Environmental clubs are restoring green spaces while earning dignified income.',
            tag: 'News',
            link: '/news',
        },
    ];

    return (
        <Layout>
            <div className="min-h-screen">
                {/* Improved Hero Section - Dual-tone gradient, balanced layout, accent colors */}
                <ImprovedHeroSection 
                    heroImage={bannerImage}
                    partnersLogos={[]}
                />

                {/* Youth Leadership Section */}
                <YouthLeadershipSection />

                {/* About Highlight - Enhanced with Styled Component */}
                <AboutHeroSectionStyled 
                    images={homeImages.slice(0, 3)}
                    captions={homeDescriptions.slice(0, 3)}
                    containerHeight="h-80 sm:h-96 md:h-[500px]"
                />

                {/* Program Highlights */}
                <section className="section-padded section-bg-champagne" id="program-grid">
                    <div className="container-max">
                        <div className="text-center mb-12">
                            <h2 className="section-title text-center">What We Do</h2>
                            <p className="section-subtitle">
                                We design and deliver youth-centered programs that build practical skills, foster confidence, and create pathways to dignified livelihoods.
                            </p>
                        </div>
                        <div className="card-grid-3">
                             {programHighlights.map((program) => (
                                 <div 
                                     key={program.title} 
                                     className="card card-champagne"
                                 >
                                     <h3 className="card-title">{program.title}</h3>
                                     <p className="card-description">{program.description}</p>
                                     <Link 
                                         to={program.link} 
                                         className="card-link"
                                     >
                                         Learn more
                                         <span className="ml-2">→</span>
                                     </Link>
                                 </div>
                             ))}
                          </div>
                    </div>
                </section>

                {/* Impact Metrics */}
                 <section id="impact" style={{ backgroundImage: 'linear-gradient(135deg, #0A1F2E 0%, #0A2139 100%)', backgroundColor: '#0A1F2E' }}>
                     <ImpactMetricsComponent />
                 </section>

                {/* Stories / News */}
                <section className="section-padded section-bg-light" id="news">
                    <div className="container-max">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
                            <div>
                                <p className="section-label">Latest stories</p>
                                <h2 className="section-title">Youth-led change that inspires</h2>
                            </div>
                            <Link to="/our-work" className="btn-secondary shrink-0">
                                View all stories →
                            </Link>
                        </div>
                        <div className="square-card-grid">
                              {storyHighlights.map((story) => (
                                  <div 
                                      key={story.title} 
                                      className="story-card"
                                  >
                                      <span className="story-tag">
                                          {story.tag}
                                      </span>
                                      <h3 className="story-title">{story.title}</h3>
                                      <p className="story-excerpt">{story.excerpt}</p>
                                      <Link 
                                          to={story.link} 
                                          className="card-link"
                                      >
                                          Keep reading
                                          <span className="ml-2">→</span>
                                      </Link>
                                  </div>
                              ))}
                          </div>
                    </div>
                </section>

                {/* Values */}
                <section className="section-padded section-bg-champagne" id="values">
                    <div className="container-max text-center">
                         <p className="section-label">Values</p>
                         <h2 className="section-title">Principles that anchor every partnership</h2>
                         <PrinciplesModal />
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padded section-bg-gradient-forest">
                    <div className="container-max text-center">
                        <h2 className="section-title inverted">
                            Ready to collaborate on youth-centered research and development?
                        </h2>
                        <p className="section-subtitle inverted">
                            Let&apos;s co-design programs, document evidence, and amplify the leadership of Kenya&apos;s next generation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 mt-10">
                            <Link to="/contact" className="btn-primary">
                                Talk to our team
                            </Link>
                            <Link to="/our-work" className="btn-secondary">
                                Share our story
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;