import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';
import { Page } from '../App';

interface HomeProps {
  navigateTo: (page: Page, product?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  // Carousel Logic
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1600",
      title: "Excellence in Export",
      subtitle: "Connecting African Resins & Gums to the World"
    },
    {
      image: "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?auto=format&fit=crop&q=80&w=1600",
      title: "Sustainable Harvest",
      subtitle: "Sourced directly from local communities in Kenya, Somalia, and Ethiopia"
    },
    {
      image: "https://images.unsplash.com/photo-1620052086303-39d6dd3039d7?auto=format&fit=crop&q=80&w=1600",
      title: "Premium Quality",
      subtitle: "Top-grade Frankincense, Myrrh, and Gum Arabic for global markets"
    },
    {
      image: "https://images.unsplash.com/photo-1580674298662-043791f7a299?auto=format&fit=crop&q=80&w=1600",
      title: "Global Logistics",
      subtitle: "Reliable shipping and warehousing solutions"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // FAQ Data
  const faqs = [
    { question: "Where do you source your products?", answer: "We source directly from trusted local communities and cooperatives across Kenya, Somalia, and Ethiopia, ensuring fair trade and quality." },
    { question: "Do you ship internationally?", answer: "Yes, we are a fully licensed export company capable of shipping our products to any destination worldwide via sea or air freight." },
    { question: "What is your minimum order quantity (MOQ)?", answer: "Our MOQ depends on the specific product and shipping method. Please contact us via WhatsApp for a personalized quote." },
    { question: "Can I get product samples?", answer: "Yes, we can arrange for samples to be sent to serious buyers for quality verification before placing a bulk order." }
  ];

  return (
    <div className="bg-white">
      {/* Carousel */}
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">{slide.title}</h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl drop-shadow-md">{slide.subtitle}</p>
              <button 
                onClick={() => navigateTo('products')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-transform hover:scale-105 shadow-lg border border-amber-500"
              >
                Explore Products
              </button>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm">
          <ChevronLeft size={30} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm">
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Featured Products Snippet */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our range of high-quality resins and gums, harvested with care and processed for excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: 'frankincense', name: 'Frankincense', img: 'https://images.unsplash.com/photo-1615811361523-6bd03c7799a4?auto=format&fit=crop&q=80&w=400', desc: 'Aromatic resin used in incense and perfumes.' },
            { id: 'myrrh', name: 'Myrrh', img: 'https://images.unsplash.com/photo-1605335805581-2c069e2c694f?auto=format&fit=crop&q=80&w=400', desc: 'Natural gum-resin with medicinal properties.' },
            { id: 'gum-arabic', name: 'Gum Arabic', img: 'https://images.unsplash.com/photo-1598512140866-26703565e31c?auto=format&fit=crop&q=80&w=400', desc: 'Essential stabilizer for the food industry.' },
            { id: 'opoponax', name: 'Opoponax', img: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=400', desc: 'Sweet myrrh used in high-end fragrances.' }
          ].map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="h-48 overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.desc}</p>
                <button 
                  onClick={() => navigateTo('products', product.id)}
                  className="text-amber-600 font-semibold hover:text-amber-800 flex items-center text-sm group-hover:translate-x-2 transition-transform"
                >
                  View Details <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button onClick={() => navigateTo('products')} className="px-8 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-full font-medium transition-colors duration-300">
            View All Products
          </button>
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Bari Trading Company</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We are a premier export company specializing in resins and gums. With established bases in Kenya, Somalia, and Ethiopia, we bridge the gap between traditional harvest methods and modern global demand.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700"><CheckCircle className="text-green-500 mr-2 h-5 w-5" /> Direct sourcing from communities</li>
              <li className="flex items-center text-gray-700"><CheckCircle className="text-green-500 mr-2 h-5 w-5" /> Quality control at every stage</li>
              <li className="flex items-center text-gray-700"><CheckCircle className="text-green-500 mr-2 h-5 w-5" /> Reliable international logistics</li>
            </ul>
            <button 
              onClick={() => navigateTo('about')}
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
            >
              Learn More About Us
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" 
              alt="Warehouse operations" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <HelpCircle className="text-amber-600" /> Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};