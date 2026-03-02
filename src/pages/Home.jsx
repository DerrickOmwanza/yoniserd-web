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
        { title: 'Seed of Hope', description: 'Vocational training and wellbeing support for teens and young adults.', link: '/programs' },
        { title: 'Community Health', description: 'Grassroots awareness campaigns led by youth advocates.', link: '/our-work' },
        { title: 'Green Futures', description: 'Climate-smart initiatives that build resilient livelihoods.', link: '/our-work' },
    ];

    const storyHighlights = [
        { title: 'Dennis opens his first carpentry studio', excerpt: 'Seed of Hope gave Dennis the tools and mentorship to launch a thriving workshop.', tag: 'Our Work', link: '/our-work' },
        { title: 'Girls leading community health clubs', excerpt: 'Teen leaders are driving conversations on wellbeing and rights in Kisii.', tag: 'Impact', link: '/impact' },
        { title: 'Youth climate champions', excerpt: 'Environmental clubs are restoring green spaces while earning dignified income.', tag: 'News', link: '/news' },
    ];

    return (
        <Layout>
            <div className="min-h-screen">
                <ImprovedHeroSection heroImage={bannerImage} partnersLogos={[]} />
                <YouthLeadershipSection />
                <AboutHeroSectionStyled images={homeImages.slice(0, 3)} captions={homeDescriptions.slice(0, 3)} containerHeight="h-80 sm:h-96 md:h-[500px]" />

                {/* Program Highlights - Champagne */}
                <section className="py-12 px-6 program-section" id="program-grid">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--forest-dark)' }}>What We Do</h2>
                            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-gray)' }}>We design and deliver youth-centered programs that build practical skills, foster confidence, and create pathways to dignified livelihoods.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {programHighlights.map((program) => (
                                <div key={program.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
                                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--forest-dark)' }}>{program.title}</h3>
                                    <p className="text-sm mb-4 flex-grow" style={{ color: 'var(--text-gray)' }}>{program.description}</p>
                                    <Link to={program.link} className="text-emerald font-bold text-sm flex items-center gap-1">Learn more <span>→</span></Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Metrics - Navy Gradient */}
                <section id="impact" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-800) 100%)' }}>
                    <ImpactMetricsComponent />
                </section>

                {/* Stories / News - Latest Stories Section with White Background and Dark Text */}
                <section className="py-12 px-6 bg-white" id="news">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                            <div className="order-2 sm:order-1">
                                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}>Latest stories</p>
                                <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--forest-dark)', borderBottom: '2px solid var(--emerald)', paddingBottom: '0.5rem', display: 'inline-block' }}>Youth-led change that inspires</h2>
                            </div>
                            <Link to="/our-work" className="order-1 sm:order-2 inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ backgroundColor: 'var(--emerald)', color: 'var(--white)' }}>View all stories →</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {storyHighlights.map((story, index) => (
                                <div key={story.title} 
                                    className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white" 
                                    style={{ 
                                        minHeight: '280px',
                                        border: '1px solid var(--champagne)'
                                    }}
                                >
                                    {/* Card Image Area - Forest Green Header */}
                                    <div className="relative h-32" style={{ height: '120px', background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-dark) 100%)' }}>
                                        {/* Category Badge Overlay */}
                                        <span className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded uppercase" style={{ backgroundColor: 'var(--emerald)' }}>
                                            {story.tag}
                                        </span>
                                    </div>
                                    
                                    {/* Card Content - Dark Text on White */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-base font-bold mb-2 line-clamp-2" style={{ color: 'var(--forest-dark)', lineHeight: '1.4' }}>{story.title}</h3>
                                        <p className="text-sm mb-4 flex-grow" style={{ color: 'var(--text-gray)', lineHeight: '1.6' }}>{story.excerpt}</p>
                                        <Link to={story.link} className="font-bold text-sm flex items-center gap-1 transition-all duration-300 hover:gap-2" style={{ color: 'var(--emerald)' }}>Keep reading <span>→</span></Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values - Principles Section */}
                <section className="py-12 px-6 values-section" id="values">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}>Values</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--forest-dark)' }}>Principles that anchor every partnership</h2>
                        <PrinciplesModal />
                    </div>
                </section>

                {/* CTA - Call to Action Section */}
                <section className="py-12 px-6 cta-section">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to collaborate on youth-centered research and development?</h2>
                        <p className="text-base mb-8 max-w-2xl mx-auto text-white/90">Let's co-design programs, document evidence, and amplify the leadership of Kenya's next generation.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1" style={{ backgroundColor: 'var(--white)', color: 'var(--forest-dark)' }}>Talk to our team</Link>
                            <Link to="/our-work" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 border-2 border-white/30 hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>Share our story</Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;
