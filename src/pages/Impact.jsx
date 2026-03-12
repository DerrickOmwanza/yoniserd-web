import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Impact = () => {
    const [counts, setCounts] = useState({
        youth: 0,
        communities: 0,
        programs: 0,
        employment: 0,
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    const metrics = [
        { label: 'Youth Reached', value: 10000, key: 'youth' },
        { label: 'Communities Served', value: 50, key: 'communities' },
        { label: 'Programs Running', value: 15, key: 'programs' },
        { label: 'Employment Success Rate', value: 75, key: 'employment' },
    ];

    const impactAreas = [
        {
            title: 'Youth Empowerment',
            description: 'Providing vocational training, mentorship, and leadership development to young people across 50 communities.',
            icon: '🚀',
            stats: '10,000+ youth trained',
        },
        {
            title: 'Economic Resilience',
            description: 'Enabling sustainable livelihoods through skills training, entrepreneurship support, and job placement.',
            icon: '💼',
            stats: '75% employment rate',
        },
        {
            title: 'Community Health',
            description: 'Youth-led health awareness campaigns on reproductive health, mental wellness, and disease prevention.',
            icon: '💚',
            stats: '2,500+ reached annually',
        },
        {
            title: 'Environmental Action',
            description: 'Climate-smart initiatives led by youth, including land restoration and sustainable agriculture.',
            icon: '🌍',
            stats: '50+ hectares restored',
        },
        {
            title: 'Research & Evidence',
            description: 'Building evidence through rigorous research to document impact and inform policy decisions.',
            icon: '📊',
            stats: '5+ publications',
        },
        {
            title: 'Gender Equality',
            description: 'Empowering young women as leaders in their communities and tackling gender-based violence.',
            icon: '👩‍⚖️',
            stats: '3,000+ girls reached',
        },
    ];

    const testimonials = [
        {
            quote: 'YoNISeRD gave me the skills and confidence to start my own business. Now I employ 5 other youth in my community.',
            author: 'Dennis',
            role: 'Carpentry Business Owner',
            icon: '🏗️',
        },
        {
            quote: 'The mentorship I received changed my perspective on leadership. I now lead a health club at my school.',
            author: 'Sarah',
            role: 'Youth Health Leader',
            icon: '👩‍⚕️',
        },
        {
            quote: 'Our partnership with YoNISeRD has amplified our environmental efforts. Together we restored 50 hectares of land.',
            author: 'Mr. Kipchoge',
            role: 'Community Partner',
            icon: '🌱',
        },
        {
            quote: 'The research conducted by YoNISeRD helped shape our youth development policy at the county level.',
            author: 'Dr. Kiplagat',
            role: 'Policy Maker',
            icon: '📋',
        },
    ];

    // Intersection Observer to trigger animation when section comes into view
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

    // Animate counter from 0 to target value
    const animateCounters = () => {
        const duration = 2000; // 2 seconds
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
            <div className="min-h-screen">
                {/* Page Header - Ocean Gradient (matches Homepage Hero) */}
                <section style={{ background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--navy-850) 50%, var(--teal-deep) 100%)' }} className="py-10 md:py-12 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xs font-bold uppercase tracking-widest mb-2 text-white" style={{ letterSpacing: '0.15em' }}>
                            Our Metrics
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 uppercase tracking-tight" style={{ letterSpacing: '0.05em' }}>
                            Our Impact
                        </h1>
                        <div className="h-1 w-16 bg-white mx-auto mb-4" style={{ opacity: '0.6' }}></div>
                        <p className="text-white/90 text-base md:text-lg">
                            7 years of measurable change, youth-led innovation, and sustainable development across Kenya's communities.
                        </p>
                    </div>
                </section>

                {/* Key Metrics - Champagne Background (Warm, professional) */}
                <section
                    ref={sectionRef}
                    style={{ backgroundColor: 'var(--champagne)' }}
                    className="py-10 md:py-12 px-6"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-emerald" style={{ letterSpacing: '0.15em', color: 'var(--emerald)' }}>
                                Statistics
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-900 uppercase tracking-tight" style={{ letterSpacing: '0.05em', color: 'var(--forest-dark)' }}>
                                Impact by the Numbers
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {metrics.map((metric) => (
                                <div
                                    key={metric.key}
                                    className="text-center p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105"
                                    style={{ backgroundColor: 'var(--white)', border: '2px solid var(--forest-dark)' }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--emerald)' }}>
                                        {metric.key === 'youth' && `${counts.youth.toLocaleString()}+`}
                                        {metric.key === 'communities' && `${counts.communities}+`}
                                        {metric.key === 'programs' && counts.programs}
                                        {metric.key === 'employment' && `${counts.employment}%`}
                                    </div>
                                    <p className="text-base md:text-lg font-semibold" style={{ color: 'var(--forest-dark)' }}>{metric.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Areas - Off-white/Light Background (Neutral, readable) */}
                <section style={{ backgroundColor: 'var(--surface-offwhite-alt)' }} className="py-10 md:py-12 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ letterSpacing: '0.15em', color: 'var(--emerald)' }}>
                                Focus Areas
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 uppercase tracking-tight" style={{ letterSpacing: '0.05em', color: 'var(--forest-dark)' }}>
                                Areas of Impact
                            </h2>
                            <p className="text-center max-w-2xl mx-auto" style={{ color: 'var(--text-gray)' }}>
                                Our work spans multiple sectors, always putting youth and communities at the center of change.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {impactAreas.map((area, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-l-4"
                                    style={{ backgroundColor: 'var(--white)', borderLeftColor: 'var(--emerald)' }}
                                >
                                    <div className="text-4xl mb-3">{area.icon}</div>
                                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--forest-dark)' }}>{area.title}</h3>
                                    <p className="mb-3" style={{ color: 'var(--text-gray)' }}>{area.description}</p>
                                    <div className="pt-3" style={{ borderTopColor: 'var(--champagne-deep)', borderTopWidth: '1px' }}>
                                        <p className="font-semibold" style={{ color: 'var(--emerald)' }}>{area.stats}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials - Champagne (Warm, welcoming) */}
                <section style={{ backgroundColor: 'var(--champagne)' }} className="py-10 md:py-12 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ letterSpacing: '0.15em', color: 'var(--emerald)' }}>
                                Testimonials
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-center uppercase tracking-tight" style={{ letterSpacing: '0.05em', color: 'var(--forest-dark)' }}>
                                Voices of Change
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-l-4"
                                    style={{ backgroundColor: 'var(--white)', borderLeftColor: 'var(--forest-dark)' }}
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="text-3xl">{testimonial.icon}</span>
                                        <div>
                                            <p className="font-bold" style={{ color: 'var(--forest-dark)' }}>{testimonial.author}</p>
                                            <p className="text-sm font-semibold" style={{ color: 'var(--emerald)' }}>{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="italic text-base" style={{ color: 'var(--text-gray)' }}>"{testimonial.quote}"</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Timeline - Forest to Emerald (matches Homepage CTA style) */}
                <section style={{ background: 'linear-gradient(135deg, var(--forest-dark) 0%, var(--emerald) 100%)' }} className="py-10 md:py-12 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-white" style={{ letterSpacing: '0.15em' }}>
                                Timeline
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-center text-white uppercase tracking-tight" style={{ letterSpacing: '0.05em' }}>
                                Our Journey
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                { year: '2018', milestone: 'Official Registration', description: 'YoNISeRD officially registered as an NGO on 30th April, 2018' },
                                { year: '2019', milestone: 'First Programs Launched', description: 'Seed of Hope vocational training and Community Health initiatives begin' },
                                { year: '2020', milestone: 'Community Expansion', description: 'Extended operations to 20 communities across Kenya during COVID-19 response' },
                                { year: '2021', milestone: 'Research Hub Launched', description: 'Created dedicated space for youth-led research and evidence-building' },
                                { year: '2023', milestone: 'Policy Influence', description: 'Our evidence shaped national youth development strategies' },
                                { year: '2024', milestone: '10,000+ Youth Reached', description: 'Operating in 50 communities with 15 active programs and growing impact' },
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 md:gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full font-bold text-base flex items-center justify-center text-white" style={{ backgroundColor: 'var(--emerald)' }}>
                                            {item.year.slice(-2)}
                                        </div>
                                        {index < 5 && <div className="w-1 h-16 mt-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>}
                                    </div>
                                    <div className="pb-6">
                                        <h3 className="text-lg font-bold text-white mb-1">{item.milestone}</h3>
                                        <p className="text-white/80 text-base">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Photo Showcase - Light (Clean, minimal) */}
                <section style={{ backgroundColor: 'var(--surface-offwhite-alt)' }} className="py-10 md:py-12 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ letterSpacing: '0.15em', color: 'var(--emerald)' }}>
                                Gallery
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 uppercase tracking-tight" style={{ letterSpacing: '0.05em', color: 'var(--forest-dark)' }}>
                                Real Impact, Real People
                            </h2>
                            <p className="text-center max-w-2xl mx-auto" style={{ color: 'var(--text-gray)' }}>
                                See our work in action through the voices and faces of the communities we serve.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-xl overflow-hidden shadow-lg group">
                                <div className="relative overflow-hidden h-56">
                                    <img
                                        src={require('../assets/gallery1.jpg')}
                                        alt="Youth Community Events"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="bg-white p-5">
                                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--forest-dark)' }}>Community Engagement</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>Youth leaders organizing impactful community awareness campaigns.</p>
                                </div>
                            </div>

                            <div className="rounded-xl overflow-hidden shadow-lg group">
                                <div className="relative overflow-hidden h-56">
                                    <img
                                        src={require('../assets/gallery2.jpg')}
                                        alt="Mental Health Awareness"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="bg-white p-5">
                                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--forest-dark)' }}>Health Advocacy</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>Young advocates promoting mental health and wellbeing in communities.</p>
                                </div>
                            </div>

                            <div className="rounded-xl overflow-hidden shadow-lg group">
                                <div className="relative overflow-hidden h-56">
                                    <img
                                        src={require('../assets/gallery3.jpg')}
                                        alt="National Mental Health Walk"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="bg-white p-5">
                                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--forest-dark)' }}>Large-Scale Campaigns</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>Thousands of community members participating in health awareness walks.</p>
                                </div>
                            </div>

                            <div className="rounded-xl overflow-hidden shadow-lg group">
                                <div className="relative overflow-hidden h-56">
                                    <img
                                        src={require('../assets/gallery4.jpg')}
                                        alt="Community Health Campaigns"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="bg-white p-5">
                                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--forest-dark)' }}>Field Work</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>Our team delivering health initiatives and support across Kisii region.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section - Forest + Emerald Gradient (Call to action) */}
                <section style={{ background: 'linear-gradient(135deg, var(--forest-dark) 0%, var(--emerald) 100%)' }} className="py-12 md:py-14 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-tight" style={{ letterSpacing: '0.05em' }}>
                            Be Part of the Change
                        </h2>
                        <p className="text-white/90 text-base mb-6 max-w-2xl mx-auto">
                            Join us in creating lasting impact. Whether through volunteering, partnership, or support, your involvement matters.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
                                style={{ color: 'var(--forest-dark)' }}
                            >
                                Partner with Us
                                <span>→</span>
                            </Link>
                            <Link
                                to="/contact#volunteer"
                                className="inline-flex items-center gap-2 border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-200"
                            >
                                Volunteer
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Impact;
