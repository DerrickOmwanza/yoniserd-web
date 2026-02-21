import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { PRINCIPLES } from '../constants/principles';
import './PrinciplePage.css';

const PrinciplePage = () => {
  const { principle } = useParams();
  const [paused, setPaused] = useState(false);
  const data = PRINCIPLES[principle];

  if (!data) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-light">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-brand-primary mb-4">Principle Not Found</h1>
            <p className="text-gray-600 text-lg mb-8">The principle you're looking for doesn't exist.</p>
            <Link to="/#values" className="bg-brand-accent text-white font-bold py-3 px-8 rounded hover:opacity-90 transition-all">
              Back to Values
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-light">
        {/* Header with back button */}
        <section className="bg-[#102C26] text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <Link 
              to="/#values" 
              className="inline-flex items-center text-[#F7E7CE] font-semibold hover:text-white transition-colors mb-6"
            >
              ← Back to Principles
            </Link>
            <h1 className="text-5xl font-extrabold">{data.title}</h1>
          </div>
        </section>

        {/* Definition Scrolling Section */}
        <section className="bg-[#F7E7CE] py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div 
              className="principle-ticker-container"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className={`principle-ticker-content ${paused ? 'paused' : ''}`}>
                <span className="principle-ticker-text">
                  {data.definition}
                </span>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              {paused ? 'Paused' : 'Hover to pause'}
            </p>
          </div>
        </section>

        {/* Context Section */}
        <section className="section-padded bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-bold text-brand-primary mb-6">How We Live This Principle</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                {data.context}
              </p>
            </div>

            {/* Navigation to other principles */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-brand-primary mb-8">Explore Other Principles</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(PRINCIPLES).map(([key, value]) => (
                  <Link
                    key={key}
                    to={`/values/${key}`}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 text-center font-semibold ${
                      key === principle
                        ? 'bg-[#102C26] text-white border-[#102C26]'
                        : 'bg-white text-[#102C26] border-gray-200 hover:border-brand-accent hover:bg-[#F7E7CE]'
                    }`}
                  >
                    {value.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padded brand-sunrise text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-[#102C26]">
              Want to live these principles with us?
            </h2>
            <p className="text-[#102C26] text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              Join our movement to empower youth, foster innovation, and create lasting change in Kenya's communities.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <Link to="/contact" className="bg-[#102C26] text-white font-bold py-3 px-8 rounded hover:opacity-90 transition-all">
                Partner With Us
              </Link>
              <Link to="/#values" className="border-2 border-[#102C26] text-[#102C26] font-bold py-3 px-8 rounded hover:bg-[#102C26] hover:text-white transition-all">
                View All Principles
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PrinciplePage;
