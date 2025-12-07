import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 animate-fade-in">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            We have operational bases in Kenya, Somalia, and Ethiopia to serve you better.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Kenya HQ */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mr-3">
                        <MapPin size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Kenya (HQ)</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                    <p className="flex items-start"><MapPin className="mr-2 h-5 w-5 mt-1 flex-shrink-0" /> Mombasa Road, Nairobi, Kenya</p>
                    <p className="flex items-center"><Phone className="mr-2 h-5 w-5 flex-shrink-0" /> +254 700 000 000</p>
                    <p className="flex items-center"><Mail className="mr-2 h-5 w-5 flex-shrink-0" /> kenya@baritrading.com</p>
                </div>
            </div>

            {/* Somalia */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                 <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                        <MapPin size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Somalia</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                    <p className="flex items-start"><MapPin className="mr-2 h-5 w-5 mt-1 flex-shrink-0" /> Port Area, Bosaso, Puntland</p>
                    <p className="flex items-center"><Phone className="mr-2 h-5 w-5 flex-shrink-0" /> +252 90 000 000</p>
                    <p className="flex items-center"><Mail className="mr-2 h-5 w-5 flex-shrink-0" /> somalia@baritrading.com</p>
                </div>
            </div>

            {/* Ethiopia */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                 <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                        <MapPin size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Ethiopia</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                    <p className="flex items-start"><MapPin className="mr-2 h-5 w-5 mt-1 flex-shrink-0" /> Bole District, Addis Ababa</p>
                    <p className="flex items-center"><Phone className="mr-2 h-5 w-5 flex-shrink-0" /> +251 11 000 000</p>
                    <p className="flex items-center"><Mail className="mr-2 h-5 w-5 flex-shrink-0" /> ethiopia@baritrading.com</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {/* Map for Kenya HQ */}
            <div className="bg-gray-200 rounded-xl overflow-hidden h-96 shadow-md">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.2255734892!2d36.70730704987037!3d-1.3031930252618037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1709848827725!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nairobi HQ Map"
                ></iframe>
            </div>

            {/* Contact Form */}
            <div className="bg-white">
                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                 <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full name
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border border-gray-300 rounded-md"
                        />
                    </div>
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="mt-1">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border border-gray-300 rounded-md"
                        />
                    </div>
                    </div>
                    <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <div className="mt-1">
                        <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border border-gray-300 rounded-md"
                        />
                    </div>
                    </div>
                    <div>
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                    >
                        {status === 'success' ? 'Message Sent!' : (
                            <>
                                Send Message
                                <Send className="ml-2 h-5 w-5" />
                            </>
                        )}
                    </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};