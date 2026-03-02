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
                <section className="py-12 px-6" style={{ backgroundColor: 'var(--champagne)' }} id="program-grid">
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

                {/* Stories / News - White background with enhanced cards */}
                <section className="py-12 px-6" style={{ backgroundColor: 'var(--white)' }} id="news">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                            <div className="order-2 sm:order-1">
                                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}>Latest stories</p>
                                <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--forest-dark)' }}>Youth-led change that inspires</h2>
                            </div>
                            <Link to="/our-work" className="order-1 sm:order-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ borderColor: 'var(--emerald)', color: 'var(--emerald)', backgroundColor: 'transparent' }}>View all stories →</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                            {storyHighlights.map((story) => (
                                <div key={story.title} 
                                    className="rounded-xl p-5 shadow-md border-2 transition-all duration-300 flex flex-col hover:-translate-y-1" 
                                    style={{ 
                                        minHeight: '260px',
                                        backgroundColor: 'var(--primary-dark)',
                                        borderColor: 'var(--primary-blue)',
                                        boxShadow: '0 0 12px rgba(126, 187, 191, 0.4)'
                                    }}
                                >
                                    <span className="inline-block text-white text-xs font-bold px-3 py-1 rounded uppercase mb-3 w-fit" style={{ backgroundColor: 'var(--primary-blue)' }}>{story.tag}</span>
                                    <h3 className="text-base font-bold mb-2 line-clamp-2" style={{ color: 'var(--white)', lineHeight: '1.4' }}>{story.title}</h3>
                                    <p className="text-sm mb-4 flex-grow" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.6' }}>{story.excerpt}</p>
                                    <Link to={story.link} className="font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" style={{ color: 'var(--primary-blue)' }}>Keep reading <span>→</span></Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values - Champagne background (different from Stories) */}
                <section className="py-12 px-6" style={{ backgroundColor: 'var(--champagne)' }} id="values">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}>Values</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--forest-dark)' }}>Principles that anchor every partnership</h2>
                        <PrinciplesModal />
                    </div>
                </section>

                {/* CTA - Forest to Emerald gradient */}
                <section className="py-12 px-6" style={{ background: 'linear-gradient(135deg, var(--forest-dark) 0%, var(--emerald) 100%)' }}>
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
