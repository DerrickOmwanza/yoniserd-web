import React, { useState } from 'react';
import { PRINCIPLES_ARRAY } from '../constants/principles';

const PrinciplesModal = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);

  return (
    <>
      {/* Principles Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {PRINCIPLES_ARRAY.map((principle, index) => (
          <button
            key={principle.slug}
            onClick={() => setSelectedPrinciple(principle)}
            className="principle-card bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 cursor-pointer group text-left hover:bg-[#F7E7CE]"
            style={{
              animation: `staggerFadeUp 600ms ease-out ${index * 100}ms both`
            }}
          >
            <p className="text-[#102C26] font-semibold text-base md:text-lg group-hover:text-[#102C26] transition-colors">
              {principle.title}
            </p>
          </button>
        ))}
      </div>

      {/* Principle Definition Modal Overlay */}
      {selectedPrinciple && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedPrinciple(null)}
        >
          {/* Close Button - Top Right */}
          <button
            onClick={() => setSelectedPrinciple(null)}
            className="absolute top-8 right-8 text-white text-4xl hover:text-white/70 transition-all duration-200 font-light z-20 hover:scale-110"
            aria-label="Close modal"
          >
            ×
          </button>

          {/* Principle Card */}
          <div
            className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl mx-4 transform transition-all duration-300 ease-out scale-95 hover:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Principle Title */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#102C26] mb-8 text-center">
              {selectedPrinciple.title}
            </h2>

            {/* Single Line Definition */}
            <p className="text-xl md:text-2xl text-[#102C26] text-center font-medium leading-relaxed whitespace-normal">
              {selectedPrinciple.definition}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PrinciplesModal;
