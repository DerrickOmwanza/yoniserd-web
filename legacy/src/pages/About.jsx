import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PrinciplesModal from '../components/PrinciplesModal';
import { ORG_INFO, CEO_INFO, MANAGING_DIRECTOR_INFO, BOARD_MEMBER_1_INFO, BOARD_MEMBER_2_INFO } from '../constants';
import ceo from '../assets/ceo.png';
import managingDirector from '../assets/managing director1.jpg';
import fieldOfficer from '../assets/Field Officer.jpg';
import programmeOfficer from '../assets/programme officer.jpeg';
import certificate from '../assets/gallery11.jpg';
import boardMember1 from '../assets/Board Member1.jpeg';
import boardMember2 from '../assets/programme officer2.jpeg';
import Card from '../components/Card';

const About = () => {
    const [activeSection, setActiveSection] = useState('mission');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['mission', 'ceo', 'leadership', 'journey', 'awards', 'impact', 'values'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 200 && rect.bottom >= 200;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        { label: 'Mission & Vision', id: 'mission' },
        { label: 'CEO', id: 'ceo' },
        { label: 'Leadership', id: 'leadership' },
        { label: 'Journey', id: 'journey' },
        { label: 'Awards', id: 'awards' },
        { label: 'Impact', id: 'impact' },
        { label: 'Values', id: 'values' }
    ];

    const impactStats = [
        { value: '7+', label: 'Years of Youth Impact' },
        { value: '50', label: 'Communities Served' },
        { value: '2000+', label: 'Youth Empowered' },
        { value: '75%', label: 'Graduate Employment Rate' }
    ];

    const journeyMilestones = [
        { year: 2018, title: 'Official Registration', description: 'YoNISeRD officially registered as an NGO on 30th April, 2018' },
        { year: 2019, title: 'First Program Launch', description: 'Seed of Hope vocational training program reaches 100+ youth' },
        { year: 2020, title: 'Community Expansion', description: 'Extended operations to 20 communities across Kenya' },
        { year: 2022, title: 'Research Hub Launch', description: 'Launched dedicated community research hub for evidence-building' },
        { year: 2023, title: 'Research Leadership', description: 'Recognized as leading youth research and development organization' },
        { year: 2024, title: '10,000+ Youth Reached', description: 'Operating in 50 communities with 15 active programs' }
    ];

    const testimonials = [
        { quote: 'YoNISeRD transformed my life through their programs and mentorship.', author: 'Youth Leader, Kisii', role: 'Program Graduate' },
        { quote: 'Their research-driven approach to youth development is exceptional.', author: 'Development Partner', role: 'International NGO' },
        { quote: 'The impact on our community has been remarkable and sustainable.', author: 'Community Leader', role: 'Local Government' }
    ];

    return (
        <Layout>
            <div className="min-h-screen">
                {/* Secondary Nav - Light background for visual separation from hero */}
                <nav aria-label="Page sections navigation" className="sticky top-16 z-40 hidden md:block" style={{ backgroundColor: 'var(--white)', borderBottom: '3px solid var(--primary-blue)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <div className="flex justify-center px-4 py-0">
                        <div className="flex gap-6 lg:gap-8 overflow-x-auto">
                            {sections.map(section => (
                                <a key={section.id} href={`#${section.id}`} onClick={() => setActiveSection(section.id)}
                                    className={`py-3 px-2 lg:px-3 font-semibold text-xs lg:text-sm uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${activeSection === section.id ? 'border-emerald text-emerald' : 'border-transparent text-gray-600 hover:text-primary-blue hover:border-primary-blue'}`}>
                                    {section.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* Hero Section - Ocean Gradient */}
                <section id="mission" aria-label="Mission and Vision statements" className="w-full py-8 md:py-12 px-6 scroll-mt-16" style={{ background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--navy-850) 50%, var(--teal-deep) 100%)' }}>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-6">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-white" style={{ letterSpacing: '0.15em' }}>About Us</p>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3 uppercase tracking-tight" style={{ color: 'var(--white)', letterSpacing: '0.05em' }}>Mission & Vision</h1>
                            <div className="h-1 w-16 mx-auto" style={{ backgroundColor: 'var(--primary-blue)' }}></div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                            <Card title="Our Mission">
                                <div className="flex items-center gap-3 mb-3"><span className="text-4xl">🎯</span></div>
                                <p className="text-base leading-relaxed">{ORG_INFO.mission}</p>
                            </Card>
                            <Card title="Our Vision">
                                <div className="flex items-center gap-3 mb-3"><span className="text-4xl">🌟</span></div>
                                <p className="text-base leading-relaxed">{ORG_INFO.vision}</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Organization Details */}
                <section className="py-12 px-6" style={{ backgroundColor: 'var(--surface-offwhite-alt)' }}>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8 pb-6 border-b-2" style={{ borderColor: 'var(--forest)' }}>
                            <h2 className="text-2xl md:text-3xl font-bold leading-tight uppercase tracking-tight" style={{ color: 'var(--forest-dark)', letterSpacing: '0.05em' }}>Organization Details</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}>🏢 Organization Name</p>
                                    <p className="text-base font-semibold" style={{ color: 'var(--forest-dark)' }}>{ORG_INFO.name}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}>📅 Founded</p>
                                    <p className="text-base font-semibold" style={{ color: 'var(--forest-dark)' }}>{ORG_INFO.founded}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}>📍 Headquarters</p>
                                    <p className="text-base font-semibold" style={{ color: 'var(--forest-dark)' }}>{ORG_INFO.headquarters}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}>⚖️ Legal Status</p>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--forest-dark)' }}>{ORG_INFO.legalStatus}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}>📜 Registration Number</p>
                                    <p className="text-base font-bold p-3 rounded-lg" style={{ color: 'var(--white)', backgroundColor: 'var(--forest)' }}>{ORG_INFO.registrationNumber}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}>📆 Registration Date</p>
                                    <p className="text-base font-semibold" style={{ color: 'var(--forest-dark)' }}>{ORG_INFO.registrationDate}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center" style={{ borderTop: '2px solid var(--forest)', paddingTop: '1.5rem' }}>
                            <p className="text-sm font-semibold mb-4 text-center" style={{ color: 'var(--forest-dark)' }}>Download Certificate of Registration</p>
                            <a href={certificate} download="YoNISeRD-Certificate-of-Registration.jpg" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg" style={{ backgroundColor: 'var(--forest-dark)', color: 'var(--white)', textDecoration: 'none' }}>
                                <span>📥</span><span>Download Certificate</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CEO Message Section - Champagne background */}
                <section className="py-12 px-6 scroll-mt-16" aria-label="CEO leadership message" id="ceo" style={{ backgroundColor: 'var(--champagne)' }}>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}>Leadership</p>
                            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-center uppercase tracking-tight" style={{ color: 'var(--forest-dark)', letterSpacing: '0.05em' }}>Message from the CEO</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 items-stretch max-w-6xl mx-auto">
                            <div className="flex flex-col items-center md:items-start">
                                <div className="w-full md:w-72 mb-4">
                                    <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: '100%', backgroundColor: 'var(--champagne)' }}>
                                        <img src={ceo} alt={`${CEO_INFO.name}, Chief Executive Officer`} className="absolute inset-0 h-full w-full object-cover" />
                                    </div>
                                </div>
                                <div className="text-center md:text-left w-full">
                                    <h4 className="text-xl font-bold mb-1" style={{ color: 'var(--forest-dark)' }}>{CEO_INFO.name}</h4>
                                    <p className="font-semibold text-sm mb-2" style={{ color: 'var(--forest)' }}>{CEO_INFO.title}</p>
                                    <p className="text-sm leading-snug" style={{ color: 'var(--text-gray)' }}>Leading sustainable youth development and community-led research initiatives</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--forest-dark)' }}>Welcome to YoNISeRD</h3>
                                    <p className="text-base leading-relaxed" style={{ color: 'var(--forest-dark)' }}>As CEO of {ORG_INFO.shortName}, I'm honored to welcome you. We believe that <span className="font-semibold" style={{ color: 'var(--forest)' }}>youth empowerment</span> is the cornerstone of sustainable development.</p>
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-base font-bold mb-2" style={{ color: 'var(--forest-dark)' }}>Our Core Commitment</h3>
                                    <ul style={{ color: 'var(--forest-dark)' }} className="space-y-2">
                                        <li className="flex gap-2 text-sm leading-snug"><span className="flex-shrink-0">🎯</span><span>Connect and empower youth through <span className="font-semibold">research-backed programs</span></span></li>
                                        <li className="flex gap-2 text-sm leading-snug"><span className="flex-shrink-0">🌱</span><span>Build <span className="font-semibold">resilient communities</span> through networks and knowledge</span></li>
                                        <li className="flex gap-2 text-sm leading-snug"><span className="flex-shrink-0">🤝</span><span>Address critical needs: youth development, health, <span className="font-semibold">sustainability</span></span></li>
                                    </ul>
                                </div>
                                <div className="flex-grow mb-4">
                                    <h3 className="text-base font-bold mb-2" style={{ color: 'var(--forest-dark)' }}>Together We Create Impact</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--forest-dark)' }}>Your partnership enables us to transform lives and create lasting, positive change.</p>
                                </div>
                                <div className="flex gap-3 flex-wrap justify-center">
                                    <Link to="/contact#volunteer" className="font-bold py-2 px-6 rounded-lg hover:-translate-y-1 transition-all duration-300 text-center shadow-md hover:shadow-lg inline-block" style={{ backgroundColor: 'var(--emerald)', color: 'var(--white)', textDecoration: 'none', fontSize: '0.9rem', minWidth: '140px' }}>Get Involved</Link>
                                    <Link to="/programs#partnerships" className="font-bold py-2 px-6 rounded-lg hover:-translate-y-1 transition-all duration-300 text-center inline-block" style={{ borderColor: 'var(--emerald)', color: 'var(--emerald)', border: '2px solid var(--emerald)', textDecoration: 'none', backgroundColor: 'transparent', fontSize: '0.9rem', minWidth: '140px' }}>Partner With Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leadership Team Section - Off-white background */}
                <section className="py-12 px-6 scroll-mt-16" id="leadership" aria-label="Leadership team" style={{ backgroundColor: 'var(--surface-offwhite-alt)' }}>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="font-bold uppercase tracking-widest text-sm text-center mb-2" style={{ color: 'var(--forest-dark)', letterSpacing: '0.2em' }}>Our Team</p>
                            <h2 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: 'var(--forest)', marginBottom: '0.5rem' }}>Leadership Team</h2>
                            <p className="text-base font-semibold italic text-center" style={{ color: 'var(--forest)', paddingBottom: '0.5rem', borderBottom: '2px solid var(--forest)', maxWidth: '100%' }}>Dedicated professionals driving our mission forward</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                                <div className="relative mb-4"><img src={ceo} alt={`${CEO_INFO.name}, Chief Executive Officer`} className="w-24 h-24 rounded-full object-cover shadow-md border-4 group-hover:scale-105 transition-transform duration-300" style={{ borderColor: 'var(--forest)' }} /></div>
                                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--forest-dark)' }}>{CEO_INFO.name}</h3>
                                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--forest)' }}>Chief Executive Officer</p>
                                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-2" />
                                <p className="text-xs leading-snug" style={{ color: 'var(--text-gray)' }}>Executive leadership and strategic vision</p>
                            </div>
                            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                                <div className="relative mb-4"><img src={managingDirector} alt={`${MANAGING_DIRECTOR_INFO.name}, Managing Director`} className="w-24 h-24 rounded-full object-cover shadow-md border-4 group-hover:scale-105 transition-transform duration-300" style={{ borderColor: 'var(--forest)' }} /></div>
                                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--forest-dark)' }}>{MANAGING_DIRECTOR_INFO.name}</h3>
                                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--forest)' }}>Managing Director</p>
                                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-2" />
                                <p className="text-xs leading-snug" style={{ color: 'var(--text-gray)' }}>{MANAGING_DIRECTOR_INFO.description}</p>
                            </div>
                            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                                <div className="relative mb-4"><img src={programmeOfficer} alt="Catherine Ngotho, Programme Officer" className="w-24 h-24 rounded-full object-cover shadow-md border-4 group-hover:scale-105 transition-transform duration-300" style={{ borderColor: 'var(--forest)' }} /></div>
                                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--forest-dark)' }}>Catherine Ngotho</h3>
                                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--forest)' }}>Programme Officer</p>
                                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-2" />
                                <p className="text-xs leading-snug" style={{ color: 'var(--text-gray)' }}>Program design and implementation</p>
                            </div>
                            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                                <div className="relative mb-4"><img src={fieldOfficer} alt="Odliah Temba, Field Officer" className="w-24 h-24 rounded-full object-cover shadow-md border-4 group-hover:scale-105 transition-transform duration-300" style={{ borderColor: 'var(--forest)' }} /></div>
                                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--forest-dark)' }}>Odliah Temba</h3>
                                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--forest)' }}>Field Officer</p>
                                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-2" />
                                <p className="text-xs leading-snug" style={{ color: 'var(--text-gray)' }}>Community engagement</p>
                            </div>
                            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                                <div className="relative mb-4"><img src={boardMember1} alt={`${BOARD_MEMBER_1_INFO.name}, Board Member`} className="w-24 h-24 rounded-full object-cover shadow-md border-4 group-hover:scale-105 transition-transform duration-300" style={{ borderColor: 'var(--forest)' }} /></div>
                                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--forest-dark)' }}>{BOARD_MEMBER_1_INFO.name}</h3>
                                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--forest)' }}>{BOARD_MEMBER_1_INFO.title}</p>
                                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-2" />
                                <p className="text-xs leading-snug" style={{ color: 'var(--text-gray)' }}>{BOARD_MEMBER_1_INFO.description}</p>
                            </div>
                            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                                <div className="relative mb-4"><img src={boardMember2} alt={`${BOARD_MEMBER_2_INFO.name}, Programme Officer`} className="w-24 h-24 rounded-full object-cover shadow-md border-4 group-hover:scale-105 transition-transform duration-300" style={{ borderColor: 'var(--forest)' }} /></div>
                                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--forest-dark)' }}>{BOARD_MEMBER_2_INFO.name}</h3>
                                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--forest)' }}>{BOARD_MEMBER_2_INFO.title}</p>
                                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-2" />
                                <p className="text-xs leading-snug" style={{ color: 'var(--text-gray)' }}>{BOARD_MEMBER_2_INFO.description}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Journey Section - Forest to Emerald gradient */}
                <section className="py-12 px-6 scroll-mt-16" id="journey" aria-label="Our organizational journey" style={{ background: 'linear-gradient(135deg, var(--forest-dark) 0%, var(--emerald) 100%)' }}>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-white" style={{ letterSpacing: '0.15em' }}>Timeline</p>
                            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-center mb-3 uppercase tracking-tight" style={{ color: 'var(--white)', letterSpacing: '0.05em' }}>Our Journey</h2>
                            <p className="text-base font-medium text-center mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>Key milestones in our commitment to youth empowerment</p>
                        </div>
                        <div className="space-y-0 max-w-4xl mx-auto relative">
                            <div className="hidden md:block absolute left-16 top-0 bottom-0 w-1" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
                            {journeyMilestones.map((milestone, index) => {
                                const icons = ['📜', '🚀', '🌍', '📊', '🏆', '💡'];
                                return (
                                    <div key={index} className="mb-6 md:mb-8 group">
                                        <div className="hidden md:flex gap-6 items-start relative">
                                            <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                                                <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-lg transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'var(--emerald)' }}>{milestone.year}</div>
                                            </div>
                                            <div className="flex-grow bg-white rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                                <div className="flex items-start gap-3 mb-2"><span className="text-3xl flex-shrink-0">{icons[index % icons.length]}</span><h3 className="text-lg font-bold leading-tight" style={{ color: 'var(--forest-dark)' }}>{milestone.title}</h3></div>
                                                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-gray)' }}>{milestone.description}</p>
                                            </div>
                                        </div>
                                        <div className="md:hidden space-y-3">
                                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full font-bold text-lg text-white shadow-md" style={{ backgroundColor: 'var(--emerald)' }}>{milestone.year}</div>
                                            <div className="bg-white rounded-lg p-4 shadow-md">
                                                <div className="flex items-start gap-2 mb-2"><span className="text-2xl flex-shrink-0">{icons[index % icons.length]}</span><h3 className="text-base font-bold leading-tight" style={{ color: 'var(--forest-dark)' }}>{milestone.title}</h3></div>
                                                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-gray)' }}>{milestone.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Awards Section - Off-white background */}
                <section className="py-12 px-4 scroll-mt-16" id="awards" aria-label="Awards and recognition" style={{ backgroundColor: 'var(--surface-offwhite-alt)' }}>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8 pb-4">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center justify-center gap-2" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}><span className="text-xl">🏆</span> Recognition</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight uppercase tracking-tight" style={{ color: 'var(--forest-dark)', letterSpacing: '0.05em' }}>Awards & Milestones</h2>
                            <p className="text-base max-w-2xl mx-auto font-medium" style={{ color: 'var(--forest)' }}>Notable achievements in our journey</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-6">
                            {[{ year: '2024', emoji: '🏅', title: 'Kisii Development Forum Recognition', description: 'Recognized for outstanding youth mentorship and research partnerships.' }, { year: '2023', emoji: '🌍', title: 'East African Innovation Index', description: 'Featured for bridging climate action with vocational skills.' }, { year: '2022', emoji: '🤝', title: 'Youth Networks Alliance Award', description: 'Awarded Best Community-Led Research Collaboration.' }].map((award, index) => (
                                <div key={index} className="group bg-white rounded-lg p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200 flex flex-col">
                                    <p className="text-xs uppercase tracking-wider font-bold mb-1" style={{ color: 'var(--forest)', letterSpacing: '0.1em' }}>Award Year</p>
                                    <p className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--emerald)' }}>{award.year}</p>
                                    <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-2" />
                                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{award.emoji}</div>
                                    <h3 className="text-base font-bold mb-2 leading-snug" style={{ color: 'var(--forest-dark)' }}>{award.title}</h3>
                                    <p className="text-xs leading-relaxed flex-grow mb-3" style={{ color: 'var(--text-gray)' }}>{award.description}</p>
                                    <Link to="/impact" className="inline-flex items-center text-xs font-semibold transition-all duration-300 gap-1" style={{ color: 'var(--emerald)' }}><span>Learn more</span><span>→</span></Link>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <Link to="/impact" className="inline-flex items-center justify-center gap-2 font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm" style={{ backgroundColor: 'var(--forest)', color: 'var(--white)' }}><span>🏆</span><span>View All</span></Link>
                        </div>
                    </div>
                </section>

                {/* Impact Statistics Section - Forest to Emerald gradient */}
                <section className="py-12 px-4 scroll-mt-16" id="impact" aria-label="Impact statistics and metrics" style={{ background: 'linear-gradient(135deg, var(--forest-dark) 0%, var(--emerald) 100%)' }}>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8 pb-4 border-b-2" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">Our Impact by Numbers</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                            {impactStats.map((stat, index) => {
                                const icons = ['⏱️', '📍', '👥', '💼'];
                                return (
                                    <div key={index} className="group bg-white/10 border border-white/20 rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center">
                                        <div className="text-3xl mb-2 text-white">{icons[index]}</div>
                                        <p className="text-2xl md:text-3xl font-bold mb-1 text-white">{stat.value}</p>
                                        <div className="w-6 h-0.5 bg-white/30 mb-2" />
                                        <p className="text-xs font-medium text-white/80">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section - White background */}
                <section className="py-12 px-6" aria-label="Success stories and testimonials" style={{ backgroundColor: 'var(--white)' }}>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8 pb-4">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center justify-center gap-2" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}><span className="text-xl">📖</span> Success Stories</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight uppercase tracking-tight" style={{ color: 'var(--forest-dark)', letterSpacing: '0.05em' }}>What People Say</h2>
                            <p className="text-base max-w-2xl mx-auto font-medium" style={{ color: 'var(--forest)' }}>Testimonials from beneficiaries and partners</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-6">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="group bg-white rounded-lg p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200 flex flex-col">
                                    <div className="mb-2 text-lg">⭐⭐⭐⭐⭐</div>
                                    <blockquote className="text-sm leading-relaxed italic mb-3 flex-grow" style={{ color: 'var(--forest-dark)' }}>"{testimonial.quote}"</blockquote>
                                    <div className="w-8 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-3" />
                                    <div><p className="font-bold text-sm" style={{ color: 'var(--forest-dark)' }}>{testimonial.author}</p><p className="font-medium text-xs" style={{ color: 'var(--text-gray)' }}>{testimonial.role}</p></div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <Link to="/our-work" className="inline-flex items-center justify-center gap-2 font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm" style={{ backgroundColor: 'var(--emerald)', color: 'var(--white)' }}><span>📖</span><span>Read More Stories</span></Link>
                        </div>
                    </div>
                </section>

                {/* Core Principles Section - Champagne background */}
                <section className="py-12 px-4 scroll-mt-16" id="values" aria-label="Core organizational principles" style={{ backgroundColor: 'var(--champagne)' }}>
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="mb-8 pb-4 border-b-2" style={{ borderColor: 'var(--forest)' }}>
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="text-xl">🔗</span>
                                <p className="text-sm uppercase tracking-widest font-bold" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}>Foundation</p>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight" style={{ color: 'var(--forest-dark)' }}>Our Core Values</h2>
                            <p className="text-base max-w-2xl mx-auto font-medium" style={{ color: 'var(--forest)' }}>Principles that guide every decision and partnership</p>
                        </div>
                        <PrinciplesModal />
                    </div>
                </section>

                {/* Final CTA Section - Forest to Emerald gradient */}
                <section className="px-4 py-12 md:py-14 relative overflow-hidden" aria-label="Call to action" style={{ background: 'linear-gradient(135deg, var(--forest-dark) 0%, var(--emerald) 100%)' }}>
                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight" style={{ color: 'var(--white)' }}>Ready to Join Our Movement?</h2>
                        <p className="text-white/95 text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">Discover how you can empower youth in Kenya and create lasting, positive change in communities across the nation.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1" style={{ backgroundColor: 'var(--white)', color: 'var(--forest-dark)' }} aria-label="Get in touch"><span>📧</span><span>Get in Touch</span></Link>
                            <Link to="/programs" className="inline-flex items-center justify-center gap-2 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1" style={{ backgroundColor: 'var(--champagne)', color: 'var(--forest-dark)', border: '2px solid var(--champagne)' }} aria-label="Explore programs"><span>📘</span><span>Explore Programs</span></Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default About;
