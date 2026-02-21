import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';
import img5 from '../assets/gallery5.jpg';
import img6 from '../assets/gallery6.jpg';
import img7 from '../assets/gallery7.jpg';
import img8 from '../assets/gallery8.jpg';
import img9 from '../assets/gallery9.jpg';

const initiatives = [
  {
    id: 1,
    image: img1,
    title: 'Community Anti-Substance Abuse Campaign',
    category: 'Advocacy & Community Action',
    shortSummary: 'Youth champions led 500+ community members in a march against substance abuse and GBV.',
    fullDescription: 'Youth champions led a massive community march against substance abuse, alcohol, and gender-based violence. With colorful placards and banner displays showcasing the NGO\'s mission, they mobilized over 500 community members across multiple locations.',
    results: 'Successfully raised awareness among vulnerable populations and inspired community commitment to drug-free living.'
  },
  {
    id: 2,
    image: img2,
    title: 'Youth Advocacy Walk on Substance Abuse',
    category: 'Advocacy & Community Action',
    shortSummary: 'Young advocates engaged in peer-to-peer conversations about zero tolerance for substance abuse.',
    fullDescription: 'Young advocates participated in an organized community walk carrying empowering messages about zero tolerance for substance abuse and its effects. The participants engaged in peer-to-peer conversations with community members about health risks.',
    results: 'Reached hundreds of people with critical prevention messages and strengthened youth voice in community health decisions.'
  },
  {
    id: 3,
    image: img3,
    title: 'Drug-Free Community Mobilization',
    category: 'Advocacy & Community Action',
    shortSummary: 'Large-scale outreach combining youth leadership with government partnership for prevention.',
    fullDescription: 'A large-scale community outreach event combining youth leadership with government partnership for substance abuse prevention. Youth advocates distributed educational materials and shared personal stories to build community resilience against drug addiction.',
    results: 'Successfully positioned substance abuse prevention as a community priority with strong government backing and media coverage.'
  },
  {
    id: 4,
    image: img4,
    title: 'World AIDS Day Community Commemoration',
    category: 'Health & Wellness',
    shortSummary: 'University leaders collaborated with National AIDS Control Council for HIV awareness march.',
    fullDescription: 'Youth leaders from Kisii University collaborated with the National AIDS Control Council in a commemorative march celebrating progress in HIV prevention and care. Participants shared messages of hope and unity for affected communities.',
    results: 'Strengthened community awareness on HIV/AIDS prevention and improved stigma reduction initiatives.'
  },
  {
    id: 5,
    image: img5,
    title: 'National Mental Health Walk Kisii',
    category: 'Health & Wellness',
    shortSummary: 'Thousands marched to advocate for mental health awareness and break stigma across Kenya.',
    fullDescription: 'A landmark community event where thousands marched in solidarity to advocate for mental health awareness and break stigma. The march united government officials, healthcare workers, teachers, and youth to promote mental wellness and community support.',
    results: 'Massive media coverage and government commitment to integrate mental health resources into schools.'
  },
  {
    id: 6,
    image: img6,
    title: 'Mental Health Awareness Campaign',
    category: 'Health & Wellness',
    shortSummary: 'National mental health walk promoting wellness and resilience through community marches.',
    fullDescription: 'Youth advocates partnered with the Kenya Counselling and Psychological Association in a national mental health walk promoting wellness and resilience. Participants marched through communities spreading messages about the importance of mental health care.',
    results: 'Established 8 new support groups and connected 65+ individuals to professional mental health services.'
  },
  {
    id: 7,
    image: img7,
    title: 'Youth Mental Wellness Advocacy',
    category: 'Youth Leadership & Empowerment',
    shortSummary: 'Young advocates trained 150+ peer health ambassadors across schools and communities.',
    fullDescription: 'Young advocates conducted community outreach promoting mental health awareness with focus messages on stress management and emotional wellbeing. Presenters shared strategies for healthy living while addressing stigma around mental health challenges.',
    results: 'Trained 150+ youth as peer mental health ambassadors deployed across schools and communities.'
  },
  {
    id: 8,
    image: img8,
    title: 'Stress Management & Mental Health Dialogue',
    category: 'Youth Leadership & Empowerment',
    shortSummary: 'Created 8 peer support networks with 650+ active members meeting weekly for support.',
    fullDescription: 'Youth leaders facilitated open community dialogues addressing stress, mental health, and healthy coping mechanisms. In safe spaces, participants shared experiences and learned practical techniques for emotional wellness.',
    results: 'Created 8 ongoing peer support networks with 650+ active members meeting weekly for mutual support.'
  },
  {
    id: 9,
    image: img9,
    title: 'One-on-One Peer Counseling Sessions',
    category: 'Youth Leadership & Empowerment',
    shortSummary: 'Delivered 3,200+ counseling sessions with 94% satisfaction and psychiatric referrals.',
    fullDescription: 'Trained peer counselors conducted confidential one-on-one sessions under sheltered spaces, providing listening support and basic mental health guidance to individuals facing personal challenges. Sessions included initial assessment and referral to professional services when needed.',
    results: 'Delivered 3,200+ counseling sessions with 94% participant satisfaction and successful referrals to psychiatric care.'
  },
];

const StoryModal = ({ initiative, isOpen, onClose }) => {
  if (!isOpen || !initiative) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{ animation: 'slideUp 0.3s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={initiative.image}
            alt={initiative.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg transition-colors duration-200 hover:bg-gray-200"
            style={{ color: '#102C26' }}
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8">
          {/* Category Badge */}
          <span
            className="text-xs font-bold px-4 py-2 rounded-full inline-block mb-4"
            style={{ backgroundColor: '#145C44', color: '#FFFFFF' }}
          >
            {initiative.category}
          </span>

          {/* Title */}
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#102C26' }}>
            {initiative.title}
          </h2>

          {/* About Section */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3" style={{ color: '#145C44' }}>
              About This Initiative
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
              {initiative.fullDescription}
            </p>
          </div>

          {/* Results Section */}
          <div
            className="p-4 rounded-lg mb-6"
            style={{ backgroundColor: '#F7E7CE' }}
          >
            <h3 className="font-bold mb-2" style={{ color: '#102C26' }}>
              📊 Results & Impact
            </h3>
            <p className="text-sm" style={{ color: '#666666' }}>
              {initiative.results}
            </p>
          </div>

          {/* CTA */}
          <p className="text-sm mb-6" style={{ color: '#666666' }}>
            Want to contribute to our work? Connect with us to learn how you can get involved.
          </p>
        </div>

        {/* Modal Footer */}
        <div
          className="p-6 border-t flex gap-3 justify-end"
          style={{ borderColor: '#E8F3EE', backgroundColor: '#FFFFFF' }}
        >
          <button
            onClick={onClose}
            className="px-6 py-2 rounded font-semibold transition-colors duration-300"
            style={{
              backgroundColor: '#E8F3EE',
              color: '#102C26',
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

const OurWork = () => {
  const [selectedInitiative, setSelectedInitiative] = useState(null);

  // Group initiatives by category
  const categories = [
    'Advocacy & Community Action',
    'Health & Wellness',
    'Youth Leadership & Empowerment'
  ];

  const getInitiativesByCategory = (category) => {
    return initiatives.filter(init => init.category === category);
  };

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
              Our Impact in Action
            </h1>
            <p
              className="text-center text-base md:text-lg max-w-3xl mx-auto italic"
              style={{ color: '#145C44' }}
            >
              Real stories and moments from our community-led programs across Kenya.
            </p>
          </div>
        </section>

        {/* Initiatives by Category */}
        {categories.map((category, categoryIndex) => {
          const categoryInitiatives = getInitiativesByCategory(category);
          
          return (
            <div key={category}>
              {/* Category Section */}
              <section
                className="py-12 px-6"
                style={{
                  backgroundColor: categoryIndex % 2 === 0 ? '#FFFFFF' : '#F7E7CE'
                }}
              >
                <div className="max-w-6xl mx-auto">
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-8 text-center"
                    style={{ color: '#102C26' }}
                  >
                    {category}
                  </h2>

                  {/* Initiatives Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryInitiatives.map((initiative) => (
                      <div
                        key={initiative.id}
                        className="group h-full rounded-lg overflow-hidden shadow-sm border transition-all duration-300 hover:shadow-lg cursor-pointer"
                        style={{
                          borderColor: '#E8F3EE',
                          backgroundColor: categoryIndex % 2 === 0 ? '#F7E7CE' : '#FFFFFF',
                        }}
                        onClick={() => setSelectedInitiative(initiative)}
                      >
                        {/* Image */}
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={initiative.image}
                            alt={initiative.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          {/* Category Badge */}
                          <span
                            className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-2"
                            style={{ backgroundColor: '#145C44', color: '#FFFFFF' }}
                          >
                            {category.split(' ')[0]}
                          </span>

                          {/* Title */}
                          <h3
                            className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-[#145C44]"
                            style={{ color: '#102C26' }}
                          >
                            {initiative.title}
                          </h3>

                          {/* Short Summary */}
                          <p className="text-sm leading-relaxed mb-4" style={{ color: '#8B8B8B' }}>
                            {initiative.shortSummary}
                          </p>

                          {/* View Story Link */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedInitiative(initiative);
                            }}
                            className="text-sm font-semibold transition-all duration-300 inline-flex items-center bg-transparent border-0 p-0 cursor-pointer"
                            style={{ color: '#102C26', textDecoration: 'none' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#145C44';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = '#102C26';
                            }}
                          >
                            View story <span className="ml-1">→</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Divider */}
              {categoryIndex < categories.length - 1 && (
                <div className="max-w-6xl mx-auto px-6">
                  <div
                    style={{
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, #145C44, transparent)',
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}

        {/* Impact Summary Section */}
        <section className="py-12 px-6" style={{ backgroundColor: '#F7E7CE' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#102C26' }}>
              Our Collective Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold" style={{ color: '#145C44' }}>9</p>
                <p className="text-sm mt-2" style={{ color: '#102C26' }}>Major Initiatives</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold" style={{ color: '#145C44' }}>10K+</p>
                <p className="text-sm mt-2" style={{ color: '#102C26' }}>Lives Reached</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold" style={{ color: '#145C44' }}>150+</p>
                <p className="text-sm mt-2" style={{ color: '#102C26' }}>Youth Trained</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold" style={{ color: '#145C44' }}>3.2K</p>
                <p className="text-sm mt-2" style={{ color: '#102C26' }}>Sessions Delivered</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#102C26' }}>
              Be Part of Our Story
            </h2>
            <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Every initiative we undertake is powered by community members, partners, and supporters like you. Join us in creating lasting change.
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
              Get Involved
            </Link>
          </div>
        </section>

        {/* Story Modal */}
        <StoryModal
          initiative={selectedInitiative}
          isOpen={selectedInitiative !== null}
          onClose={() => setSelectedInitiative(null)}
        />
      </div>
    </Layout>
  );
};

export default OurWork;
