import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';

const programs = [
  {
    id: 1,
    icon: '👶',
    title: "Children's Rights",
    shortDescription: "Advocating for the protection and empowerment of vulnerable children through education, policy, and community support.",
    fullDescription: "We advocate for the protection and empowerment of vulnerable children through comprehensive education, evidence-based policy engagement, and direct community support. Our initiatives focus on ensuring that every child has access to quality education, protection from exploitation, and a voice in decisions affecting their lives.",
    impact: "Reached 2,500+ children through direct programs and 10,000+ through advocacy campaigns.",
  },
  {
    id: 2,
    icon: '🌱',
    title: "Environment",
    shortDescription: "Promoting sustainable practices and environmental conservation through youth-led initiatives and awareness campaigns.",
    fullDescription: "We promote sustainable practices and environmental conservation by empowering youth as environmental leaders. Our programs focus on climate action, sustainable livelihoods, and community-based conservation efforts that integrate traditional knowledge with modern solutions.",
    impact: "Engaged 1,500+ youth in environmental initiatives, protecting 500+ hectares of natural resources.",
  },
  {
    id: 3,
    icon: '❤️',
    title: "Reproductive Health",
    shortDescription: "Providing access to reproductive health education and services to empower informed choices and healthy communities.",
    fullDescription: "We provide comprehensive reproductive health education and services that empower individuals to make informed decisions about their health and futures. Our approach is evidence-based, youth-centered, and focuses on breaking stigma while building healthy communities.",
    impact: "Reached 3,000+ young people with reproductive health education and services.",
  },
  {
    id: 4,
    icon: '🧪',
    title: "HIV/AIDS Awareness",
    shortDescription: "Conducting outreach programs to reduce stigma, raise awareness, and promote testing and treatment.",
    fullDescription: "We conduct comprehensive outreach programs designed to reduce stigma, raise awareness, and promote testing and treatment for HIV/AIDS. Our approach combines education, peer support, and access to healthcare services, creating pathways for prevention and care.",
    impact: "Reached 4,000+ individuals through awareness campaigns; 800+ accessed testing and treatment support.",
  },
  {
    id: 5,
    icon: '✊',
    title: "Gender-Based Violence",
    shortDescription: "Working to prevent GBV through advocacy, survivor support, and community mobilization.",
    fullDescription: "We work to prevent gender-based violence through multi-level interventions including advocacy, survivor support services, and community mobilization. Our approach empowers youth as agents of social change to create cultures of respect and safety.",
    impact: "Supported 600+ survivors; mobilized 5,000+ community members in prevention efforts.",
  },
];

const metrics = [
  { icon: '📋', value: '5', label: 'Core Programs' },
  { icon: '👥', value: '10K+', label: 'Youth Reached' },
  { icon: '🤝', value: '50+', label: 'Partner Orgs' },
  { icon: '🌍', value: '5 Yrs', label: 'ImpactTrack' },
];

const ProgramModal = ({ program, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ 
        backgroundColor: 'rgba(5, 15, 42, 0.6)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)'
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col transition-all duration-300"
        style={{
          animation: 'slideUp 0.3s ease-out',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header - Fixed at top */}
        <div
          className="p-6 border-b flex-shrink-0"
          style={{ backgroundColor: 'var(--champagne)', borderColor: 'var(--primary-light)' }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center text-3xl"
                style={{
                  background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--primary-light-soft) 100%)',
                }}
              >
                {program.icon}
              </div>
              <h2 className="text-2xl font-bold" style={{ color: 'var(--forest)' }}>
                {program.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-2xl transition-colors duration-200 hover:text-red-500 p-1"
              style={{ color: 'var(--text-gray)' }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
           <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--forest-dark)' }}>
             About This Program
           </h3>
           <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-gray)' }}>
             {program.fullDescription}
           </p>

           <div
             className="p-4 rounded-lg mb-6"
             style={{ backgroundColor: 'var(--champagne)' }}
           >
             <h3 className="text-base font-bold mb-2" style={{ color: 'var(--forest-dark)' }}>
               📊 Impact & Reach
             </h3>
             <p className="text-base" style={{ color: 'var(--text-gray)' }}>
               {program.impact}
             </p>
           </div>

           <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--forest-dark)' }}>
             Get Involved
           </h3>
           <p className="text-base mb-4" style={{ color: 'var(--text-gray)' }}>
             Interested in contributing to this program? We welcome partnerships, volunteer support, and advocacy partnerships at all levels.
           </p>
        </div>

        {/* Modal Footer - Fixed at bottom */}
        <div
          className="p-4 border-t flex gap-3 justify-end flex-shrink-0"
          style={{ backgroundColor: 'var(--white)', borderColor: 'var(--primary-light)' }}
        >
          <button
            onClick={onClose}
            className="px-5 py-2 rounded transition-colors duration-300"
            style={{
              backgroundColor: 'var(--primary-light)',
              color: 'var(--forest-dark)',
              fontWeight: '600',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--primary-light-soft)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--primary-light)';
            }}
          >
            Close
          </button>
          <Link
            to="/contact"
            className="px-5 py-2 rounded font-semibold transition-colors duration-300"
            style={{
              backgroundColor: 'var(--forest)',
              color: 'var(--white)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--forest-dark)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--forest)';
            }}
          >
            Get Involved
          </Link>
        </div>

        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Aligned with News/Gallery */}
        <section className="py-12 md:py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--forest)', letterSpacing: '0.15em' }}>
              Our Initiatives
            </p>
            <h1
              className="text-3xl md:text-5xl font-bold mb-3 uppercase tracking-tight"
              style={{ color: 'var(--forest-dark)', letterSpacing: '0.05em' }}
            >
              Empowering Communities Through Action
            </h1>
            <div className="h-1 w-16 bg-accent-green mx-auto mb-6" style={{ backgroundColor: 'var(--primary-blue)' }}></div>
            <p
              className="text-base md:text-lg max-w-3xl mx-auto"
              style={{ color: 'var(--forest)' }}
            >
              Our integrated programs address critical issues affecting youth and their communities.
            </p>
          </div>
        </section>

        {/* Programs Grid - Two Column */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <Card key={program.id} badge={program.icon} title={program.title} onClick={() => setSelectedProgram(program)}>
                  <p className="text-base leading-relaxed mb-5">{program.shortDescription}</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedProgram(program); }}
                    className="text-base font-bold transition-all duration-300 inline-flex items-center gap-1.5 bg-transparent border-0 p-0 cursor-pointer text-[var(--primary-blue)]"
                  >
                    Learn more <span>→</span>
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics - Horizontal Strip */}
        <section className="py-8 px-6" style={{ backgroundColor: 'var(--champagne)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <span className="text-4xl mb-2">{metric.icon}</span>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--forest)' }}>
                    {metric.value}
                  </p>
                  <p className="text-xs md:text-sm mt-1" style={{ color: 'var(--forest-dark)' }}>
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--forest-dark)' }}>
              How You Can Get Involved
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                className="p-6 rounded-lg text-center transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: 'var(--champagne)' }}
              >
                <p className="text-3xl mb-3">🤝</p>
                <h3 className="font-bold mb-2 text-lg" style={{ color: 'var(--forest-dark)' }}>
                  Volunteer
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-gray)' }}>
                  Contribute your skills and time to programs in your community.
                </p>
              </div>
              <div
                  className="p-6 rounded-lg text-center border border-gray-200 transition-all duration-300 hover:shadow-md"
                  style={{ backgroundColor: 'var(--white)' }}
                >
                <p className="text-3xl mb-3">💡</p>
                <h3 className="font-bold mb-2 text-lg" style={{ color: 'var(--forest-dark)' }}>
                  Collaborate
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-gray)' }}>
                  Partner with us to co-design new initiatives and solutions.
                </p>
              </div>
              <div
                className="p-6 rounded-lg text-center transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: 'var(--champagne)' }}
              >
                <p className="text-3xl mb-3">🙌</p>
                <h3 className="font-bold mb-2 text-lg" style={{ color: 'var(--forest-dark)' }}>
                  Support
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-gray)' }}>
                  Donate or advocate for youth-centered change in your networks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div
            style={{
              height: '1px',
              background: `linear-gradient(90deg, transparent, var(--forest), transparent)`,
            }}
          />
        </div>

         {/* Partnerships CTA Section */}
         <section className="py-12 px-6 bg-gradient-to-r from-brand-primary to-accent-green" id="partnerships">
           <div className="max-w-4xl mx-auto text-center">
             <h2
               className="text-3xl md:text-4xl font-bold mb-4 text-white"
               style={{ letterSpacing: '0.05em' }}
             >
               Let&apos;s co-design the next youth-powered program
             </h2>
             <p className="text-sm md:text-base mb-8 mx-auto max-w-2xl text-white/90">
               Whether you&apos;re a community-based organization, research lab, or social enterprise, we&apos;d love to explore collaboration opportunities.
             </p>
             <Link
               to="/contact"
               className="inline-flex px-8 py-3 rounded font-semibold transition-all duration-300 hover:shadow-lg"
               style={{
                 backgroundColor: '#1a4838',
                 color: 'var(--white)',
               }}
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = '#0d2d1e';
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = '#1a4838';
               }}
             >
               Start a conversation
             </Link>
           </div>
         </section>

        {/* Program Modal */}
        <ProgramModal
          program={selectedProgram}
          isOpen={selectedProgram !== null}
          onClose={() => setSelectedProgram(null)}
        />
      </div>
    </Layout>
  );
};

export default Programs;
