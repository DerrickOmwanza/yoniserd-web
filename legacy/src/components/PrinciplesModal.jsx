import React, { useState } from 'react';
import { PRINCIPLES_ARRAY } from '../constants/principles';

const PrinciplesModal = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);

  return (
    <>
      {/* Principles Grid - Mobile responsive */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-8 md:mt-12">
        {PRINCIPLES_ARRAY.map((principle, index) => (
          <button
            key={principle.slug}
            onClick={() => setSelectedPrinciple(principle)}
            className="bg-white p-3 md:p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 cursor-pointer text-left"
            style={{
              animation: `staggerFadeUp 600ms ease-out ${index * 100}ms both`
            }}
          >
            <p className="text-[var(--forest-dark)] font-semibold text-xs md:text-sm lg:text-base leading-tight">
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
            className="absolute top-4 md:top-8 right-4 md:right-8 text-white text-3xl md:text-4xl hover:text-white/70 transition-all duration-200 font-light z-20 hover:scale-110"
            aria-label="Close modal"
          >
            ×
          </button>

          {/* Principle Card */}
          <div
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-12 max-w-sm md:max-w-2xl mx-4 transform transition-all duration-300 ease-out scale-95 hover:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Principle Title */}
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--forest-dark)] mb-4 md:mb-8 text-center">
              {selectedPrinciple.title}
            </h2>

            {/* Single Line Definition */}
            <p className="text-base md:text-xl text-[var(--forest-dark)] text-center font-medium leading-relaxed">
              {selectedPrinciple.definition}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PrinciplesModal;
