import React from 'react';

interface LegalProps {
  type: 'privacy' | 'terms';
}

export const Legal: React.FC<LegalProps> = ({ type }) => {
  if (type === 'privacy') {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-3xl mx-auto prose prose-amber">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-bold mt-6 mb-4">1. Introduction</h2>
          <p className="mb-4">Bari Trading Company respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>

          <h2 className="text-xl font-bold mt-6 mb-4">2. Data We Collect</h2>
          <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you including Identity Data (name) and Contact Data (email, phone number) when you fill out our contact form.</p>

          <h2 className="text-xl font-bold mt-6 mb-4">3. How We Use Your Data</h2>
          <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to respond to your inquiries and facilitate business transactions.</p>

          <h2 className="text-xl font-bold mt-6 mb-4">4. Data Security</h2>
          <p className="mb-4">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto prose prose-amber">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-xl font-bold mt-6 mb-4">1. Agreement to Terms</h2>
        <p className="mb-4">By accessing our website, you agree to be bound by these Terms and Conditions. If you do not agree to abide by the terms of this Agreement, you are not authorized to use or access the Website.</p>

        <h2 className="text-xl font-bold mt-6 mb-4">2. Intellectual Property</h2>
        <p className="mb-4">The Site and its original content, features, and functionality are owned by Bari Trading Company and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

        <h2 className="text-xl font-bold mt-6 mb-4">3. Product Information</h2>
        <p className="mb-4">We strive to ensure that all product information, images, and specifications are accurate. However, as our products are natural resins and gums, slight variations in color, texture, and appearance may occur.</p>

        <h2 className="text-xl font-bold mt-6 mb-4">4. Limitation of Liability</h2>
        <p className="mb-4">In no event shall Bari Trading Company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.</p>
      </div>
    </div>
  );
};