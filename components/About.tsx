import React from 'react';
import { Page } from '../App';
import { Target, Eye, Heart, Globe, Award } from 'lucide-react';

interface AboutProps {
  navigateTo: (page: Page) => void;
}

export const About: React.FC<AboutProps> = ({ navigateTo }) => {
  return (
    <div className="bg-white animate-fade-in">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            alt="African landscape"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">About Bari Trading Company</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Your trusted partner in the Horn of Africa for premium resins and gums.</p>
        </div>
      </div>

      {/* Description & What We Do */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Bari Trading Company was founded with a singular purpose: to bring the highest quality natural resins and gums from the Horn of Africa to the global market. Operating out of Kenya, Somalia, and Ethiopia, we have established deep roots in the regions where these precious resources are harvested.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in the export of Frankincense, Myrrh, Gum Arabic, and other natural gums. Our operations span from direct collection at the harvest sites to processing, grading, and exporting, ensuring complete traceability and quality assurance.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Globe className="h-6 w-6 text-amber-600 mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Global Export</h4>
                  <p className="text-gray-600">Connecting local supply to international demand in Europe, Asia, and the Americas.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-amber-600 mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Quality Grading</h4>
                  <p className="text-gray-600">Rigorous sorting and cleaning to meet pharmaceutical and food-grade standards.</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button 
                onClick={() => navigateTo('products')}
                className="bg-amber-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-700 transition-colors shadow-md"
              >
                View Our Products
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-lg shadow-lg w-full h-64 object-cover mt-8 transform hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1620052086303-39d6dd3039d7?auto=format&fit=crop&q=80&w=600" alt="Resin sorting" />
            <img className="rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1542358822-794d039f60bc?auto=format&fit=crop&q=80&w=600" alt="Gum arabic trees" />
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="bg-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To sustainably harvest and export the finest resins and gums while empowering local communities and maintaining ecological balance.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world's leading supplier of ethically sourced African gums and resins, setting the standard for quality and reliability.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, Sustainability, Community Empowerment, and Excellence in every shipment we deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};