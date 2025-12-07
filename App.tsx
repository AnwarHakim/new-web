import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Products } from './components/Products';
import { Process } from './components/Process';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Legal } from './components/Legal';
import { MessageCircle } from 'lucide-react';

export type Page = 'home' | 'about' | 'products' | 'process' | 'gallery' | 'contact' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const navigateTo = (page: Page, product?: string) => {
    setCurrentPage(page);
    if (product) {
      setSelectedProduct(product);
    } else {
      setSelectedProduct(null);
    }
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'about':
        return <About navigateTo={navigateTo} />;
      case 'products':
        return <Products selectedProduct={selectedProduct} navigateTo={navigateTo} />;
      case 'process':
        return <Process navigateTo={navigateTo} />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Legal type="privacy" />;
      case 'terms':
        return <Legal type="terms" />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer navigateTo={navigateTo} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254700000000" // Replace with actual number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
};

export default App;