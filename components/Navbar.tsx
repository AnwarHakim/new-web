import React, { useState } from 'react';
import { Menu, X, ChevronDown, Anchor } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  currentPage: string;
  navigateTo: (page: Page, product?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  const products = [
    { name: 'Frankincense', id: 'frankincense' },
    { name: 'Myrrh', id: 'myrrh' },
    { name: 'Gum Arabic', id: 'gum-arabic' },
    { name: 'Opoponax', id: 'opoponax' },
  ];

  const handleNav = (page: Page, product?: string) => {
    navigateTo(page, product);
    setIsOpen(false);
    setIsProductOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => handleNav('home')}
              className="flex items-center space-x-2 text-amber-700"
            >
              <Anchor className="h-8 w-8" />
              <div className="flex flex-col items-start">
                <span className="font-bold text-xl tracking-tight text-gray-900 leading-none">BARI</span>
                <span className="text-xs uppercase tracking-widest text-amber-600">Trading Company</span>
              </div>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNav('home')}
              className={`text-sm font-medium transition-colors duration-200 ${
                currentPage === 'home' ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`text-sm font-medium transition-colors duration-200 ${
                currentPage === 'about' ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              About
            </button>
            
            {/* Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                  currentPage === 'products' ? 'text-amber-600' : 'text-gray-600 group-hover:text-amber-600'
                }`}
                onClick={() => handleNav('products')}
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform z-50 border border-gray-100">
                {products.map((p) => (
                  <button
                    key={p.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNav('products', p.id);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNav('process')}
              className={`text-sm font-medium transition-colors duration-200 ${
                currentPage === 'process' ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              Process
            </button>
            <button
              onClick={() => handleNav('gallery')}
              className={`text-sm font-medium transition-colors duration-200 ${
                currentPage === 'gallery' ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-b border-gray-200`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => handleNav('home')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
          >
            Home
          </button>
          <button
            onClick={() => handleNav('about')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
          >
            About
          </button>
          
          <div>
            <button
              onClick={() => setIsProductOpen(!isProductOpen)}
              className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
            >
              <span>Products</span>
              <ChevronDown className={`h-4 w-4 transform ${isProductOpen ? 'rotate-180' : ''}`} />
            </button>
            {isProductOpen && (
              <div className="pl-4 space-y-1">
                {products.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleNav('products', p.id)}
                    className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('process')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
          >
            Process
          </button>
          <button
            onClick={() => handleNav('gallery')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
          >
            Gallery
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="block w-full text-center mt-4 px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};