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

const About = () => {
    const [activeSection, setActiveSection] = useState('mission');

    // Handle scroll tracking for navigation
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
        {
            quote: 'YoNISeRD transformed my life through their programs and mentorship.',
            author: 'Youth Leader, Kisii',
            role: 'Program Graduate'
        },
        {
            quote: 'Their research-driven approach to youth development is exceptional.',
            author: 'Development Partner',
            role: 'International NGO'
        },
        {
            quote: 'The impact on our community has been remarkable and sustainable.',
            author: 'Community Leader',
            role: 'Local Government'
        }
    ];

    return (
        <Layout>
            <div className="min-h-screen">
                {/* Sticky Section Navigation */}
                <nav
                    aria-label="Page sections navigation"
                    className="sticky top-16 bg-white shadow-md z-40 hidden md:block"
                >
                    <div className="flex justify-center px-4 py-0">
                        <div className="flex gap-8 overflow-x-auto">
                            {sections.map(section => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`py-4 px-3 font-semibold text-sm uppercase tracking-wider transition-all border-b-3 whitespace-nowrap ${activeSection === section.id
                                        ? 'border-brand-blue text-brand-blue'
                                        : 'border-transparent text-gray-600 hover:text-brand-blue'
                                        }`}
                                    aria-current={activeSection === section.id ? 'page' : undefined}
                                >
                                    {section.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>



                {/* Mission & Vision Section - Spectacular & Compact */}
                <section
                    id="mission"
                    aria-label="Mission and Vision statements"
                    className="w-full py-16 md:py-20 px-4"
                    style={{
                        background: 'linear-gradient(180deg, #F7E7CE 0%, #FFFFFF 100%)',
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h1
                                className="text-4xl md:text-5xl font-bold leading-tight"
                                style={{ color: '#102C26' }}
                            >
                                Mission & Vision
                            </h1>
                        </div>

                        {/* Two-Column Grid - Compact Cards */}
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                            {/* Mission Card */}
                            <div
                                className="rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderColor: '#145C44'
                                }}
                            >
                                {/* Icon & Label */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl">🎯</span>
                                    <h2
                                        className="text-xl md:text-2xl font-bold"
                                        style={{ color: '#102C26' }}
                                    >
                                        Our Mission
                                    </h2>
                                </div>

                                {/* Content */}
                                <p
                                    className="text-sm md:text-base leading-relaxed"
                                    style={{ color: '#102C26', lineHeight: '1.6' }}
                                >
                                    {ORG_INFO.mission}
                                </p>
                            </div>

                            {/* Vision Card */}
                            <div
                                className="rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderColor: '#2E7D32'
                                }}
                            >
                                {/* Icon & Label */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl">🌟</span>
                                    <h2
                                        className="text-xl md:text-2xl font-bold"
                                        style={{ color: '#102C26' }}
                                    >
                                        Our Vision
                                    </h2>
                                </div>

                                {/* Content */}
                                <p
                                    className="text-sm md:text-base leading-relaxed"
                                    style={{ color: '#102C26', lineHeight: '1.6' }}
                                >
                                    {ORG_INFO.vision}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Organization Details - Compact & Professional */}
                <section
                    className="py-16 md:py-20 px-4"
                    style={{
                        background: 'linear-gradient(180deg, #F7E7CE 0%, #FFFFFF 100%)',
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-14 pb-8 border-b-2" style={{ borderColor: '#145C44' }}>
                            <h2
                                className="text-4xl md:text-5xl font-bold leading-tight"
                                style={{ color: '#102C26' }}
                            >
                                Organization Details
                            </h2>
                        </div>

                        {/* Two-Column Grid */}
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 max-w-5xl mx-auto">
                            {/* Left Column */}
                            <div className="space-y-6">
                                {/* Organization Name */}
                                <div>
                                    <p
                                        className="text-xs font-bold uppercase tracking-widest mb-2"
                                        style={{
                                            color: '#145C44',
                                            letterSpacing: '0.15em'
                                        }}
                                    >
                                        🏢 Organization Name
                                    </p>
                                    <p className="text-base font-semibold leading-snug" style={{ color: '#102C26' }}>
                                        {ORG_INFO.name}
                                    </p>
                                </div>

                                {/* Founded */}
                                <div>
                                    <p
                                        className="text-xs font-bold uppercase tracking-widest mb-2"
                                        style={{
                                            color: '#145C44',
                                            letterSpacing: '0.15em'
                                        }}
                                    >
                                        📅 Founded
                                    </p>
                                    <p className="text-base font-semibold" style={{ color: '#102C26' }}>
                                        {ORG_INFO.founded}
                                    </p>
                                </div>

                                {/* Headquarters */}
                                <div>
                                    <p
                                        className="text-xs font-bold uppercase tracking-widest mb-2"
                                        style={{
                                            color: '#145C44',
                                            letterSpacing: '0.15em'
                                        }}
                                    >
                                        📍 Headquarters
                                    </p>
                                    <p className="text-base font-semibold" style={{ color: '#102C26' }}>
                                        {ORG_INFO.headquarters}
                                    </p>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                {/* Legal Status */}
                                <div>
                                    <p
                                        className="text-xs font-bold uppercase tracking-widest mb-2"
                                        style={{
                                            color: '#145C44',
                                            letterSpacing: '0.15em'
                                        }}
                                    >
                                        ⚖️ Legal Status
                                    </p>
                                    <p className="text-sm leading-relaxed" style={{ color: '#102C26' }}>
                                        {ORG_INFO.legalStatus}
                                    </p>
                                </div>

                                {/* Registration Number - Highlighted */}
                                <div>
                                    <p
                                        className="text-xs font-bold uppercase tracking-widest mb-2"
                                        style={{
                                            color: '#145C44',
                                            letterSpacing: '0.15em'
                                        }}
                                    >
                                        📜 Registration Number
                                    </p>
                                    <p
                                        className="text-base font-bold p-3 rounded-lg"
                                        style={{
                                            color: '#FFFFFF',
                                            backgroundColor: '#145C44'
                                        }}
                                    >
                                        {ORG_INFO.registrationNumber}
                                    </p>
                                </div>

                                {/* Registration Date */}
                                <div>
                                    <p
                                        className="text-xs font-bold uppercase tracking-widest mb-2"
                                        style={{
                                            color: '#145C44',
                                            letterSpacing: '0.15em'
                                        }}
                                    >
                                        📆 Registration Date
                                    </p>
                                    <p className="text-base font-semibold" style={{ color: '#102C26' }}>
                                        {ORG_INFO.registrationDate}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Certificate Download Section - Compact */}
                        <div className="flex flex-col items-center justify-center" style={{ borderTop: '2px solid #145C44', paddingTop: '2rem' }}>
                            <p
                                className="text-sm font-semibold mb-6 text-center"
                                style={{
                                    color: '#102C26',
                                    lineHeight: '1.5'
                                }}
                            >
                                Download Certificate of Registration
                            </p>
                            <a
                                href={certificate}
                                download="YoNISeRD-Certificate-of-Registration.jpg"
                                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
                                style={{
                                    backgroundColor: '#102C26',
                                    color: '#FFFFFF',
                                    textDecoration: 'none'
                                }}
                            >
                                <span>📥</span>
                                <span>Download Certificate</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CEO Message Section - Compact & Beautiful */}
                <section
                    className="py-16 md:py-20 px-4"
                    aria-label="CEO leadership message"
                    id="ceo"
                    style={{
                        background: 'linear-gradient(180deg, #F2FDFF 0%, #FFFFFF 100%)',
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                         {/* Section Header */}
                         <div className="text-center mb-12">
                             <div style={{ marginBottom: '1.5rem' }}>
                                 <p
                                     className="font-bold uppercase tracking-widest text-sm md:text-base text-center"
                                     style={{
                                         color: '#145C44',
                                         letterSpacing: '0.2em',
                                         margin: '0 auto 0.5rem auto',
                                         display: 'block'
                                     }}
                                 >
                                     Leadership
                                 </p>
                                 <h2
                                     className="text-4xl md:text-5xl font-bold leading-tight text-center"
                                     style={{
                                         color: '#102C26',
                                         lineHeight: '1.3',
                                         margin: '0'
                                     }}
                                 >
                                     Message from the CEO
                                 </h2>
                             </div>
                         </div>

                         {/* Two-Column Grid - Compact */}
                         <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
                             {/* Left: CEO Portrait & Info */}
                             <div className="flex flex-col items-center md:items-start">
                                 {/* CEO Photo with Shadow */}
                                 <div className="w-full md:w-80 mb-6">
                                     <div
                                         className="relative rounded-2xl overflow-hidden shadow-lg"
                                         style={{
                                             paddingBottom: '100%',
                                             backgroundColor: '#F7E7CE'
                                         }}
                                     >
                                         <img
                                             src={ceo}
                                             alt={`${CEO_INFO.name}, Chief Executive Officer`}
                                             className="absolute inset-0 h-full w-full object-cover"
                                         />
                                     </div>
                                 </div>

                                 {/* CEO Info - Compact */}
                                 <div className="text-center md:text-left w-full">
                                     <h4 className="text-2xl font-bold mb-1" style={{ color: '#102C26' }}>
                                         {CEO_INFO.name}
                                     </h4>
                                     <p className="font-semibold text-sm mb-2" style={{ color: '#145C44' }}>
                                         {CEO_INFO.title}
                                     </p>
                                     <p className="text-sm leading-snug" style={{ color: '#565449' }}>
                                         Leading sustainable youth development and community-led research initiatives
                                     </p>
                                 </div>
                             </div>

                             {/* Right: Message & Commitments */}
                             <div className="flex flex-col">
                                 {/* Welcome Message */}
                                 <div className="mb-6">
                                     <h3 className="text-2xl font-bold mb-3" style={{ color: '#102C26' }}>
                                         Welcome to YoNISeRD
                                     </h3>
                                     <p className="text-base leading-relaxed" style={{ color: '#102C26' }}>
                                         As CEO of {ORG_INFO.shortName}, I'm honored to welcome you. We believe that <span className="font-semibold" style={{ color: '#145C44' }}>youth empowerment</span> is the cornerstone of sustainable development.
                                     </p>
                                 </div>

                                 {/* Core Commitments - Compact List */}
                                 <div className="mb-6">
                                     <h3 className="text-lg font-bold mb-3" style={{ color: '#102C26' }}>Our Core Commitment</h3>
                                     <ul style={{ color: '#102C26' }} className="space-y-2">
                                         <li className="flex gap-3 text-sm leading-snug">
                                             <span className="flex-shrink-0">🎯</span>
                                             <span>Connect and empower youth through <span className="font-semibold">research-backed programs</span></span>
                                         </li>
                                         <li className="flex gap-3 text-sm leading-snug">
                                             <span className="flex-shrink-0">🌱</span>
                                             <span>Build <span className="font-semibold">resilient communities</span> through networks and knowledge</span>
                                         </li>
                                         <li className="flex gap-3 text-sm leading-snug">
                                             <span className="flex-shrink-0">🤝</span>
                                             <span>Address critical needs: youth development, health, <span className="font-semibold">sustainability</span></span>
                                         </li>
                                     </ul>
                                 </div>

                                 {/* Impact Message - Auto fills remaining space */}
                                 <div className="flex-grow mb-6">
                                     <h3 className="text-lg font-bold mb-2" style={{ color: '#102C26' }}>Together We Create Impact</h3>
                                     <p className="text-sm leading-relaxed" style={{ color: '#102C26' }}>
                                         Your partnership enables us to transform lives and create lasting, positive change. Let's build a future where youth lead innovation.
                                     </p>
                                 </div>

                                 {/* CTAs - Side by Side */}
                                 <div className="flex gap-4 flex-wrap md:flex-nowrap w-full">
                                     <Link
                                         to="/contact#volunteer"
                                         className="flex-1 font-bold py-3 px-6 rounded-lg hover:-translate-y-1 transition-all duration-300 text-center shadow-md hover:shadow-lg"
                                         style={{
                                             backgroundColor: '#2E7D32',
                                             color: '#FFFFFF',
                                             textDecoration: 'none',
                                             display: 'block',
                                             fontSize: '0.95rem'
                                         }}
                                         aria-label="Get involved as a volunteer"
                                     >
                                         Get Involved
                                     </Link>
                                     <Link
                                         to="/programs#partnerships"
                                         className="flex-1 font-bold py-3 px-6 rounded-lg hover:-translate-y-1 transition-all duration-300 text-center"
                                         style={{
                                             borderColor: '#2E7D32',
                                             color: '#2E7D32',
                                             border: '2px solid #2E7D32',
                                             textDecoration: 'none',
                                             display: 'block',
                                             backgroundColor: 'transparent',
                                             fontSize: '0.95rem'
                                         }}
                                         aria-label="Partner with us"
                                     >
                                         Partner With Us
                                     </Link>
                                 </div>
                             </div>
                         </div>
                    </div>
                </section>

                {/* Leadership Team Section - Refined */}
                <section
                    className="section-padded"
                    id="leadership"
                    aria-label="Leadership team"
                    style={{
                        background: 'linear-gradient(180deg, #F7E7CE 0%, #FFFFFF 100%)',
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                         {/* Section Header - Compact & Refined */}
                         <div className="text-center mb-14">
                             {/* Heading Block - All text elements in one container */}
                             <div style={{ marginBottom: '2rem' }}>
                                 {/* Label: Our Team - Large & Authoritative */}
                                 <p
                                     className="font-bold uppercase tracking-widest text-sm md:text-base text-center"
                                     style={{
                                         color: '#102C26',
                                         letterSpacing: '0.2em',
                                         lineHeight: '1.4',
                                         margin: '0 auto 0.5rem auto',
                                         display: 'block'
                                     }}
                                 >
                                     Our Team
                                 </p>

                                 {/* Main Heading: Leadership Team - Accent Green */}
                                 <h2
                                     className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight"
                                     style={{ 
                                         color: '#145C44', 
                                         lineHeight: '1.3', 
                                         margin: '0 0 0.75rem 0'
                                     }}
                                 >
                                     Leadership Team
                                 </h2>

                                 {/* Tagline with Divider Line Below */}
                                 <p
                                     className="text-base md:text-lg font-semibold italic text-center"
                                     style={{ 
                                         color: '#145C44',
                                         margin: '0 auto 1rem auto',
                                         paddingBottom: '1rem',
                                         borderBottom: '2px solid #145C44',
                                         maxWidth: '100%',
                                         display: 'block',
                                         lineHeight: '1.6',
                                         letterSpacing: '0.02em'
                                     }}
                                 >
                                     Dedicated professionals driving our mission forward
                                 </p>
                             </div>
                         </div>

                        {/* Team Grid - Responsive */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {/* CEO Card */}
                            <div
                                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                            >
                                {/* Photo with Border */}
                                <div className="relative mb-6">
                                    <img
                                        src={ceo}
                                        alt={`${CEO_INFO.name}, Chief Executive Officer`}
                                        className="w-28 h-28 rounded-full object-cover shadow-md border-4 group-hover:scale-105 transition-transform duration-300"
                                        style={{ borderColor: '#145C44' }}
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: '#102C26' }}>
                                    {CEO_INFO.name}
                                </h3>

                                {/* Title */}
                                <p className="text-sm md:text-base font-semibold mb-3" style={{ color: '#145C44' }}>
                                    Chief Executive Officer
                                </p>

                                {/* Divider */}
                                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-3" />

                                {/* Description */}
                                <p className="text-xs md:text-sm leading-snug" style={{ color: '#565449' }}>
                                    Executive leadership and strategic vision for organizational growth and impact
                                </p>
                            </div>

                            {/* Managing Director Card */}
                            <div
                                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                            >
                                <div className="relative mb-6">
                                    <img
                                        src={managingDirector}
                                        alt={`${MANAGING_DIRECTOR_INFO.name}, Managing Director`}
                                        className="w-28 h-28 rounded-full object-cover shadow-lg border-4 group-hover:scale-105 transition-transform duration-300"
                                        style={{ 
                                            borderColor: '#145C44',
                                            filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                                            WebkitFilter: 'brightness(1.05) contrast(1.1) saturate(1.1)'
                                        }}
                                    />
                                </div>

                                <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: '#102C26' }}>
                                    {MANAGING_DIRECTOR_INFO.name}
                                </h3>

                                <p className="text-sm md:text-base font-semibold mb-3" style={{ color: '#145C44' }}>
                                    Managing Director
                                </p>

                                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-3" />

                                <p className="text-xs md:text-sm leading-snug" style={{ color: '#565449' }}>
                                    {MANAGING_DIRECTOR_INFO.description}
                                </p>
                            </div>

                            {/* Programme Officer Card */}
                            <div
                                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                            >
                                <div className="relative mb-6">
                                    <img
                                        src={programmeOfficer}
                                        alt="Catherine Ngotho, Programme Officer"
                                        className="w-28 h-28 rounded-full object-cover shadow-lg border-4 group-hover:scale-105 transition-transform duration-300"
                                        style={{ 
                                            borderColor: '#145C44',
                                            filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                                            WebkitFilter: 'brightness(1.05) contrast(1.1) saturate(1.1)'
                                        }}
                                    />
                                </div>

                                <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: '#102C26' }}>
                                    Catherine Ngotho
                                </h3>

                                <p className="text-sm md:text-base font-semibold mb-3" style={{ color: '#145C44' }}>
                                    Programme Officer
                                </p>

                                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-3" />

                                <p className="text-xs md:text-sm leading-snug" style={{ color: '#565449' }}>
                                    Oversight of program design, implementation, and community partnerships
                                </p>
                            </div>

                            {/* Field Officer Card */}
                            <div
                                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                            >
                                <div className="relative mb-6">
                                    <img
                                        src={fieldOfficer}
                                        alt="Odliah Temba, Field Officer"
                                        className="w-28 h-28 rounded-full object-cover shadow-lg border-4 group-hover:scale-105 transition-transform duration-300"
                                        style={{ 
                                            borderColor: '#145C44',
                                            filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                                            WebkitFilter: 'brightness(1.05) contrast(1.1) saturate(1.1)'
                                        }}
                                    />
                                </div>

                                <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: '#102C26' }}>
                                    Odliah Temba
                                </h3>

                                <p className="text-sm md:text-base font-semibold mb-3" style={{ color: '#145C44' }}>
                                    Field Officer
                                </p>

                                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-3" />

                                <p className="text-xs md:text-sm leading-snug" style={{ color: '#565449' }}>
                                    Direct community engagement and ground-level program execution
                                </p>
                            </div>

                            {/* Board Member 1 Card */}
                            <div
                                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                            >
                                <div className="relative mb-6">
                                    <img
                                        src={boardMember1}
                                        alt={`${BOARD_MEMBER_1_INFO.name}, Board Member`}
                                        className="w-28 h-28 rounded-full object-cover shadow-lg border-4 group-hover:scale-105 transition-transform duration-300"
                                        style={{ 
                                            borderColor: '#145C44',
                                            filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                                            WebkitFilter: 'brightness(1.05) contrast(1.1) saturate(1.1)'
                                        }}
                                    />
                                </div>

                                <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: '#102C26' }}>
                                    {BOARD_MEMBER_1_INFO.name}
                                </h3>

                                <p className="text-sm md:text-base font-semibold mb-3" style={{ color: '#145C44' }}>
                                    {BOARD_MEMBER_1_INFO.title}
                                </p>

                                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-3" />

                                <p className="text-xs md:text-sm leading-snug" style={{ color: '#565449' }}>
                                    {BOARD_MEMBER_1_INFO.description}
                                </p>
                            </div>

                            {/* Board Member 2 Card - Now Sherille Adoyo (Programme Officer) */}
                            <div
                                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                            >
                                <div className="relative mb-6">
                                    <img
                                        src={boardMember2}
                                        alt={`${BOARD_MEMBER_2_INFO.name}, Programme Officer`}
                                        className="w-28 h-28 rounded-full object-cover shadow-lg border-4 group-hover:scale-105 transition-transform duration-300"
                                        style={{ 
                                            borderColor: '#145C44',
                                            filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                                            WebkitFilter: 'brightness(1.05) contrast(1.1) saturate(1.1)'
                                        }}
                                    />
                                </div>

                                <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: '#102C26' }}>
                                    {BOARD_MEMBER_2_INFO.name}
                                </h3>

                                <p className="text-sm md:text-base font-semibold mb-3" style={{ color: '#145C44' }}>
                                    {BOARD_MEMBER_2_INFO.title}
                                </p>

                                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-3" />

                                <p className="text-xs md:text-sm leading-snug" style={{ color: '#565449' }}>
                                    {BOARD_MEMBER_2_INFO.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Journey / Timeline Section - Refined */}
                <section
                    className="section-padded"
                    id="journey"
                    aria-label="Our organizational journey"
                    style={{
                        background: 'linear-gradient(180deg, #F7E7CE 0%, #FFFFFF 100%)',
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                         {/* Section Header */}
                         <div className="text-center mb-16">
                             {/* Heading Block - All text elements in one container */}
                             <div style={{ marginBottom: '2rem' }}>
                                 {/* Label: Timeline - Large & Authoritative */}
                                 <p
                                     className="font-bold uppercase tracking-widest text-sm md:text-base text-center"
                                     style={{
                                         color: '#145C44',
                                         letterSpacing: '0.2em',
                                         lineHeight: '1.4',
                                         margin: '0 auto 0.5rem auto',
                                         display: 'block'
                                     }}
                                 >
                                     Timeline
                                 </p>

                                 {/* Main Heading: Our Journey - Deep Forest */}
                                 <h2
                                     className="text-4xl md:text-5xl font-bold leading-tight text-center"
                                     style={{
                                         color: '#102C26',
                                         lineHeight: '1.3',
                                         margin: '0 auto 0.75rem auto',
                                         display: 'block'
                                     }}
                                 >
                                     Our Journey
                                 </h2>

                                 {/* Tagline with Divider Line Below */}
                                 <p
                                     className="text-base md:text-lg font-medium text-center"
                                     style={{
                                         color: '#145C44',
                                         margin: '0 auto 1rem auto',
                                         paddingBottom: '1rem',
                                         borderBottom: '2px solid #145C44',
                                         maxWidth: '100%',
                                         display: 'block',
                                         lineHeight: '1.5'
                                     }}
                                 >
                                     Key milestones in our commitment to youth empowerment
                                 </p>
                             </div>
                         </div>

                        {/* Timeline Container */}
                        <div className="space-y-0 max-w-4xl mx-auto relative">
                            {/* Vertical Connector Line - Desktop Only */}
                            <div
                                className="hidden md:block absolute left-20 top-0 bottom-0 w-1"
                                style={{
                                    backgroundColor: '#145C44',
                                    transform: 'translateX(-50%)',
                                    opacity: 0.6
                                }}
                            ></div>

                            {/* Timeline Items */}
                            {journeyMilestones.map((milestone, index) => {
                                const icons = ['📜', '🚀', '🌍', '📊', '🏆', '💡'];
                                return (
                                    <div key={index} className="mb-8 md:mb-12 group">
                                        {/* Desktop Layout: Two Columns */}
                                        <div className="hidden md:flex gap-8 items-start relative">
                                            {/* Left Column: Year Badge */}
                                            <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                                                <div
                                                    className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl text-white shadow-lg ring-4 ring-white transition-all duration-300 group-hover:scale-110"
                                                    style={{ backgroundColor: '#145C44' }}
                                                >
                                                    {milestone.year}
                                                </div>
                                            </div>

                                            {/* Right Column: Milestone Card */}
                                            <div
                                                className="flex-grow bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                                                style={{ backgroundColor: '#FFFFFF' }}
                                            >
                                                {/* Icon + Title Row */}
                                                <div className="flex items-start gap-4 mb-3">
                                                    <span className="text-4xl flex-shrink-0">{icons[index % icons.length]}</span>
                                                    <h3 className="text-2xl font-bold leading-tight" style={{ color: '#102C26' }}>
                                                        {milestone.title}
                                                    </h3>
                                                </div>

                                                {/* Description */}
                                                <p className="text-base leading-relaxed" style={{ color: '#565449' }}>
                                                    {milestone.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Mobile Layout: Stacked */}
                                        <div className="md:hidden space-y-4">
                                            {/* Year Badge */}
                                            <div
                                                className="inline-flex items-center justify-center w-16 h-16 rounded-full font-bold text-lg text-white shadow-md"
                                                style={{ backgroundColor: '#145C44' }}
                                            >
                                                {milestone.year}
                                            </div>

                                            {/* Milestone Card */}
                                            <div
                                                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
                                                style={{ backgroundColor: '#FFFFFF' }}
                                            >
                                                {/* Icon + Title */}
                                                <div className="flex items-start gap-3 mb-3">
                                                    <span className="text-3xl flex-shrink-0">{icons[index % icons.length]}</span>
                                                    <h3 className="text-xl font-bold leading-tight" style={{ color: '#102C26' }}>
                                                        {milestone.title}
                                                    </h3>
                                                </div>

                                                {/* Description */}
                                                <p className="text-sm leading-relaxed" style={{ color: '#565449' }}>
                                                    {milestone.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Awards & Milestones Section */}
                <section
                    className="py-16 md:py-20 px-4"
                    id="awards"
                    aria-label="Awards and recognition"
                    style={{
                        backgroundColor: '#FFFFFF',
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header - Organized & Clear */}
                        <div className="text-center mb-10 pb-8 border-b-2" style={{ borderColor: '#145C44' }}>
                            {/* Recognition Label with Icon */}
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <span className="text-2xl">🏆</span>
                                <p className="text-sm uppercase tracking-widest font-bold" style={{ color: '#145C44', letterSpacing: '0.15em' }}>
                                    Recognition
                                </p>
                            </div>

                            {/* Main Heading */}
                            <h2
                                className="text-4xl md:text-5xl font-bold mb-3 leading-tight"
                                style={{ color: '#102C26' }}
                            >
                                Awards & Milestones
                            </h2>

                            {/* Subheading */}
                            <p className="text-base md:text-lg max-w-2xl mx-auto font-medium" style={{ color: '#145C44' }}>
                                Notable achievements in our journey
                            </p>
                        </div>

                        {/* Awards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8 mt-6">
                            {[
                                {
                                    year: '2024',
                                    emoji: '🏅',
                                    title: 'Kisii Development Forum Recognition',
                                    description: 'Recognized for outstanding youth mentorship and research partnerships.'
                                },
                                {
                                    year: '2023',
                                    emoji: '🌍',
                                    title: 'East African Innovation Index',
                                    description: 'Featured for bridging climate action with vocational skills.'
                                },
                                {
                                    year: '2022',
                                    emoji: '🤝',
                                    title: 'Youth Networks Alliance Award',
                                    description: 'Awarded Best Community-Led Research Collaboration.'
                                }
                            ].map((award, index) => (
                                <div
                                    key={index}
                                    className="group bg-champagne rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200 flex flex-col"
                                >
                                    {/* Award Year */}
                                    <p className="text-xs uppercase tracking-wider font-bold mb-1" style={{ color: '#145C44', letterSpacing: '0.1em' }}>
                                        Award Year
                                    </p>
                                    <p className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#2E7D32' }}>
                                        {award.year}
                                    </p>

                                    {/* Divider */}
                                    <div className="w-6 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-3" />

                                    {/* Icon */}
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {award.emoji}
                                    </div>

                                    {/* Award Title */}
                                    <h3 className="text-base md:text-lg font-bold mb-2 leading-snug" style={{ color: '#102C26' }}>
                                        {award.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs md:text-sm leading-relaxed flex-grow mb-4" style={{ color: '#565449' }}>
                                        {award.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <Link
                                        to="/impact"
                                        className="inline-flex items-center text-xs font-semibold transition-all duration-300 gap-1"
                                        style={{ color: '#2E7D32' }}
                                        aria-label={`Learn more about ${award.title}`}
                                    >
                                        <span>Learn more</span>
                                        <span>→</span>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center mt-6">
                            <Link
                                to="/impact"
                                className="inline-flex items-center justify-center gap-2 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
                                style={{
                                    backgroundColor: '#145C44',
                                    color: '#FFFFFF',
                                }}
                                aria-label="View all recognition and awards"
                            >
                                <span>🏆</span>
                                <span>View All</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Impact Statistics Section */}
                <section
                    className="py-16 md:py-20 px-4"
                    id="impact"
                    aria-label="Impact statistics and metrics"
                    style={{
                        backgroundColor: '#F7E7CE',
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-10 pb-6 border-b-2" style={{ borderColor: '#7EBBBF' }}>
                            <h2
                                className="text-3xl md:text-4xl font-bold leading-tight text-white"
                                style={{
                                    color: '#FFFFFF',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.6)',
                                }}
                            >
                                Our Impact by Numbers
                            </h2>
                        </div>

                        {/* Impact Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-6">
                            {impactStats.map((stat, index) => {
                                const icons = ['⏱️', '📍', '👥', '💼'];
                                return (
                                    <div
                                        key={index}
                                        className="impact-card group bg-[var(--primary-dark)] border border-[var(--primary-blue)] rounded-lg p-5 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center text-white"
                                    >
                                        {/* Icon */}
                                        <div className="impact-icon text-4xl mb-2 text-white">
                                            {icons[index]}
                                        </div>

                                        {/* Stat Value */}
                                        <p
                                            className="text-4xl md:text-5xl font-bold mb-2 text-white"
                                        >
                                            {stat.value}
                                        </p>

                                        {/* Divider */}
                                        <div className="w-6 h-0.5 bg-[var(--primary-blue)] mb-3" />

                                        {/* Stat Label */}
                                        <p
                                            className="text-xs md:text-sm font-medium text-gray-300"
                                        >
                                            {stat.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Testimonials / Success Stories Section */}
                <section
                    className="py-16 md:py-20 px-4"
                    aria-label="Success stories and testimonials"
                    style={{
                        backgroundColor: '#FFFFFF',
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header - Organized & Clear */}
                        <div className="text-center mb-10 pb-8 border-b-2" style={{ borderColor: '#145C44' }}>
                            {/* Success Stories Label with Icon */}
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <span className="text-2xl">📖</span>
                                <p className="text-sm uppercase tracking-widest font-bold" style={{ color: '#145C44', letterSpacing: '0.15em' }}>
                                    Success Stories
                                </p>
                            </div>

                            {/* Main Heading */}
                            <h2
                                className="text-4xl md:text-5xl font-bold mb-3 leading-tight"
                                style={{ color: '#102C26' }}
                            >
                                What People Say
                            </h2>

                            {/* Subheading */}
                            <p className="text-base md:text-lg max-w-2xl mx-auto font-medium" style={{ color: '#145C44' }}>
                                Testimonials from beneficiaries and partners who've experienced our impact
                            </p>
                        </div>

                        {/* Testimonials Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8 mt-6">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200 flex flex-col"
                                >
                                    {/* Star Rating */}
                                    <div className="mb-3 text-lg">
                                        ⭐⭐⭐⭐⭐
                                    </div>

                                    {/* Testimonial Quote */}
                                    <blockquote className="text-sm md:text-base leading-relaxed italic mb-4 flex-grow" style={{ color: '#102C26' }}>
                                        "{testimonial.quote}"
                                    </blockquote>

                                    {/* Divider */}
                                    <div className="w-8 h-0.5 bg-gradient-to-r from-accent-green to-champagne mb-4" />

                                    {/* Author Info */}
                                    <div>
                                        <p className="font-bold text-sm" style={{ color: '#102C26' }}>
                                            {testimonial.author}
                                        </p>
                                        <p className="font-medium text-xs" style={{ color: '#565449' }}>
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <Link
                                to="/our-work"
                                className="inline-flex items-center justify-center gap-2 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
                                style={{
                                    backgroundColor: '#2E7D32',
                                    color: '#FFFFFF',
                                }}
                                aria-label="Read more success stories"
                            >
                                <span>📖</span>
                                <span>Read More Stories</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Core Principles Section - Interactive Modal */}
                <section className="py-16 md:py-20 px-4" id="values" aria-label="Core organizational principles" style={{ backgroundColor: '#F7E7CE' }}>
                    <div className="max-w-6xl mx-auto text-center">
                        {/* Section Header - Organized & Clear */}
                        <div className="mb-12 pb-8 border-b-2" style={{ borderColor: '#145C44' }}>
                            {/* Foundation Label with Icon */}
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <span className="text-2xl">🔗</span>
                                <p className="text-sm uppercase tracking-widest font-bold" style={{ color: '#145C44', letterSpacing: '0.15em' }}>
                                    Foundation
                                </p>
                            </div>

                            {/* Main Heading */}
                            <h2
                                className="text-4xl md:text-5xl font-bold mb-3 leading-tight"
                                style={{ color: '#102C26' }}
                            >
                                Our Core Values
                            </h2>

                            {/* Subheading */}
                            <p className="text-base md:text-lg max-w-2xl mx-auto font-medium" style={{ color: '#145C44' }}>
                                Principles that guide every decision and partnership
                            </p>
                        </div>

                        {/* Principles Modal Component */}
                        <PrinciplesModal />
                    </div>
                </section>

                {/* Final CTA Section */}
                <section
                    className="px-4 py-20 md:py-28 relative overflow-hidden"
                    aria-label="Call to action"
                    style={{
                        background: 'linear-gradient(135deg, #102C26 0%, #1a4d47 50%, #145C44 100%)',
                    }}
                >
                    {/* Subtle background pattern overlay */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-5 pointer-events-none"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 20% 50%, white 0.5px, transparent 0.5px)',
                            backgroundSize: '30px 30px',
                        }}
                    />

                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{
                                color: '#FFFFFF',
                                textShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            Ready to Join Our Movement?
                        </h2>
                        <p className="text-white/95 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
                            Discover how you can empower youth in Kenya and create lasting, positive change in communities across the nation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 font-bold py-4 px-8 md:px-12 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
                                style={{
                                    backgroundColor: '#2E7D32',
                                    color: '#FFFFFF',
                                    border: '2px solid #2E7D32',
                                }}
                                aria-label="Get in touch to learn more about our initiatives"
                            >
                                <span>📧</span>
                                <span>Get in Touch</span>
                            </Link>
                            <Link
                                to="/programs"
                                className="inline-flex items-center justify-center gap-2 font-bold py-4 px-8 md:px-12 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
                                style={{
                                    backgroundColor: '#F7E7CE',
                                    color: '#102C26',
                                    border: '2px solid #F7E7CE',
                                }}
                                aria-label="Explore our programs and initiatives"
                            >
                                <span>📘</span>
                                <span>Explore Programs</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default About;
