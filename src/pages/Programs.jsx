import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

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
  { icon: '🌍', value: '5 Yrs', label: 'Impact Track' },
];

const ProgramModal = ({ program, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300"
        style={{
          animation: 'slideUp 0.3s ease-out',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className="p-8 border-b"
          style={{ backgroundColor: '#F7E7CE', borderColor: '#E8F3EE' }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center text-4xl"
                style={{
                  background: 'linear-gradient(135deg, #E8F3EE 0%, #D4E8E3 100%)',
                }}
              >
                {program.icon}
              </div>
              <h2 className="text-3xl font-bold" style={{ color: '#145C44' }}>
                {program.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-2xl transition-colors duration-200 hover:text-red-500"
              style={{ color: '#8B8B8B' }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-8">
          <h3 className="text-lg font-bold mb-4" style={{ color: '#102C26' }}>
            About This Program
          </h3>
          <p className="text-base leading-relaxed mb-6" style={{ color: '#666666' }}>
            {program.fullDescription}
          </p>

          <div
            className="p-4 rounded-lg mb-6"
            style={{ backgroundColor: '#F7E7CE' }}
          >
            <h3 className="font-bold mb-2" style={{ color: '#102C26' }}>
              📊 Impact & Reach
            </h3>
            <p className="text-sm" style={{ color: '#666666' }}>
              {program.impact}
            </p>
          </div>

          <h3 className="text-lg font-bold mb-3" style={{ color: '#102C26' }}>
            Get Involved
          </h3>
          <p className="text-sm mb-6" style={{ color: '#666666' }}>
            Interested in contributing to this program? We welcome partnerships, volunteer support, and advocacy partnerships at all levels.
          </p>
        </div>

        {/* Modal Footer */}
        <div
          className="p-6 border-t flex gap-3 justify-end"
          style={{ backgroundColor: '#FFFFFF', borderColor: '#E8F3EE' }}
        >
          <button
            onClick={onClose}
            className="px-6 py-2 rounded transition-colors duration-300"
            style={{
              backgroundColor: '#E8F3EE',
              color: '#102C26',
              fontWeight: '600',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#D4E8E3';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#E8F3EE';
            }}
          >
            Close
          </button>
          <Link
            to="/contact"
            className="px-6 py-2 rounded font-semibold transition-colors duration-300"
            style={{
              backgroundColor: '#145C44',
              color: '#FFFFFF',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#102C26';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#145C44';
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
        {/* Hero Section */}
        <section className="py-10 md:py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h1
              className="text-3xl md:text-4xl font-bold mb-2 text-center uppercase tracking-wide"
              style={{ color: '#102C26', letterSpacing: '0.05em' }}
            >
              Empowering Communities Through Action
            </h1>
            <p
              className="text-center text-base md:text-lg max-w-3xl mx-auto italic"
              style={{ color: '#145C44' }}
            >
              Our integrated programs address critical issues affecting youth and their communities.
            </p>
          </div>
        </section>

        {/* Programs Grid - Two Column */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => {
                const rowIndex = Math.floor(index / 2);
                const bgColor = rowIndex % 2 === 0 ? '#FFFFFF' : '#F7E7CE';
                
                return (
                  <div
                    key={program.id}
                    className="group h-full transition-all duration-300"
                    style={{
                      transform: 'none',
                    }}
                  >
                    <div
                      className="h-full p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg"
                      style={{
                        backgroundColor: bgColor,
                        transform: 'translateY(0)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-6px)';
                        e.currentTarget.style.boxShadow = '0 16px 32px rgba(16, 44, 38, 0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 44, 38, 0.06)';
                      }}
                    >
                      {/* Icon Container with Gradient */}
                      <div
                        className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, #E8F3EE 0%, #D4E8E3 100%)',
                        }}
                      >
                        {program.icon}
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl font-bold mb-3 transition-colors duration-300"
                        style={{ color: '#145C44' }}
                      >
                        {program.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed mb-5 flex-grow" style={{ color: '#8B8B8B' }}>
                        {program.shortDescription}
                      </p>

                      {/* Learn More Link */}
                      <button
                        onClick={() => setSelectedProgram(program)}
                        className="text-sm font-semibold transition-all duration-300 inline-flex items-center bg-transparent border-0 p-0 cursor-pointer"
                        style={{ color: '#102C26', textDecoration: 'none' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#145C44';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#102C26';
                        }}
                      >
                        Learn more <span className="ml-1">→</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Metrics - Horizontal Strip */}
        <section className="py-8 px-6" style={{ backgroundColor: '#F7E7CE' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <span className="text-4xl mb-2">{metric.icon}</span>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: '#145C44' }}>
                    {metric.value}
                  </p>
                  <p className="text-xs md:text-sm mt-1" style={{ color: '#102C26' }}>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#102C26' }}>
              How You Can Get Involved
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                className="p-6 rounded-lg text-center transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: '#F7E7CE' }}
              >
                <p className="text-3xl mb-3">🤝</p>
                <h3 className="font-bold mb-2 text-lg" style={{ color: '#102C26' }}>
                  Volunteer
                </h3>
                <p className="text-sm" style={{ color: '#666666' }}>
                  Contribute your skills and time to programs in your community.
                </p>
              </div>
              <div
                className="p-6 rounded-lg text-center border border-gray-200 transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <p className="text-3xl mb-3">💡</p>
                <h3 className="font-bold mb-2 text-lg" style={{ color: '#102C26' }}>
                  Collaborate
                </h3>
                <p className="text-sm" style={{ color: '#666666' }}>
                  Partner with us to co-design new initiatives and solutions.
                </p>
              </div>
              <div
                className="p-6 rounded-lg text-center transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: '#F7E7CE' }}
              >
                <p className="text-3xl mb-3">🙌</p>
                <h3 className="font-bold mb-2 text-lg" style={{ color: '#102C26' }}>
                  Support
                </h3>
                <p className="text-sm" style={{ color: '#666666' }}>
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
              background: 'linear-gradient(90deg, transparent, #145C44, transparent)',
            }}
          />
        </div>

         {/* Partnerships CTA Section */}
         <section className="py-12 px-6 bg-white" id="partnerships">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#102C26' }}
            >
              Let&apos;s co-design the next youth-powered program
            </h2>
            <p className="text-sm md:text-base mb-8 mx-auto max-w-2xl" style={{ color: '#666666' }}>
              Whether you&apos;re a community-based organization, research lab, or social enterprise, we&apos;d love to explore collaboration opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-8 py-3 rounded font-semibold transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: '#102C26',
                color: '#FFFFFF',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#145C44';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#102C26';
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