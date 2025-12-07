import React from 'react';
import { Anchor, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  navigateTo: (page: Page, product?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <div className="flex items-center space-x-2 text-amber-500">
              <Anchor className="h-8 w-8" />
              <span className="font-bold text-xl tracking-tight text-white">BARI Trading</span>
            </div>
            <p className="text-gray-400 text-base">
              Premium exporters of Frankincense, Myrrh, and Gum Arabic. Connecting the Horn of Africa to the world.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">WhatsApp</span>
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <button onClick={() => navigateTo('home')} className="text-base text-gray-300 hover:text-white">Home</button>
                  </li>
                  <li>
                    <button onClick={() => navigateTo('about')} className="text-base text-gray-300 hover:text-white">About Us</button>
                  </li>
                  <li>
                    <button onClick={() => navigateTo('products')} className="text-base text-gray-300 hover:text-white">Products</button>
                  </li>
                  <li>
                    <button onClick={() => navigateTo('process')} className="text-base text-gray-300 hover:text-white">Our Process</button>
                  </li>
                   <li>
                    <button onClick={() => navigateTo('gallery')} className="text-base text-gray-300 hover:text-white">Gallery</button>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Products</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <button onClick={() => navigateTo('products', 'frankincense')} className="text-base text-gray-300 hover:text-white">Frankincense</button>
                  </li>
                  <li>
                    <button onClick={() => navigateTo('products', 'myrrh')} className="text-base text-gray-300 hover:text-white">Myrrh</button>
                  </li>
                  <li>
                    <button onClick={() => navigateTo('products', 'gum-arabic')} className="text-base text-gray-300 hover:text-white">Gum Arabic</button>
                  </li>
                  <li>
                    <button onClick={() => navigateTo('products', 'opoponax')} className="text-base text-gray-300 hover:text-white">Opoponax</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li className="text-base text-gray-300">Nairobi, Kenya</li>
                  <li className="text-base text-gray-300">Bosaso, Somalia</li>
                  <li className="text-base text-gray-300">Addis Ababa, Ethiopia</li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <button onClick={() => navigateTo('privacy')} className="text-base text-gray-300 hover:text-white">Privacy Policy</button>
                  </li>
                  <li>
                    <button onClick={() => navigateTo('terms')} className="text-base text-gray-300 hover:text-white">Terms & Conditions</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Bari Trading Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};