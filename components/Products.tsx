import React from 'react';
import { Page } from '../App';
import { Package, Truck, Info, Check, ArrowLeft, MessageCircle, ArrowRight, Tag, Layers, Leaf } from 'lucide-react';

interface ProductsProps {
  selectedProduct: string | null;
  navigateTo: (page: Page, product?: string) => void;
}

const productsData: Record<string, any> = {
  frankincense: {
    id: 'frankincense',
    name: 'Frankincense',
    subtitle: 'Gum Olibanum',
    description: 'Known for its spiritual significance and soothing aroma, Frankincense is extensively used in aromatherapy, skincare, and wellness products.',
    overview: 'Known for its spiritual significance and soothing aroma, Frankincense, also know as Gum Olibanum resin is extensively used in aromatherapy, skincare, and wellness products. Its calming scent has made it a staple in many therapeutic practices.',
    sources: 'Our Gum Olibanum is naturally and sustainably harvested from the wild terrains of Somalia, Ethiopia, and Kenya. The resin is carefully collected by skilled harvesters who follow traditional methods, ensuring both the quality of the product and the sustainability of the environment.',
    usage: 'Frankincense is widely used in the creation of incense, essential oils, and perfumes. Its anti-inflammatory properties make it a popular ingredient in skincare products, while its calming effects are valued in aromatherapy and meditation practices.',
    group: 'Aromatic Resin, Resin',
    applications: ['Cosmetics', 'Flavor + Fragrance', 'Incense', 'Perfumery', 'Technical', 'Aromatherapy', 'Supplements', 'Oral Health'],
    packaging: '25kg, 50kg, and 100kg bags',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03c7799a4?auto=format&fit=crop&q=80&w=1200'
  },
  myrrh: {
    id: 'myrrh',
    name: 'Myrrh',
    subtitle: 'Commiphora Myrrha',
    description: 'Myrrh gum is a highly sought-after and naturally-growing aromatic resin prized for its use in perfumery, traditional medicine, and religious rituals.',
    overview: 'Myrrh gum is a highly sought-after and naturally-growing aromatic resin prized for its use in perfumery, traditional medicine, and religious rituals. Its rich, earthy scent and therapeutic properties have been valued for centuries.',
    sources: 'Our Gum Myrrh is naturally and sustainably harvested from the wild regions of Somalia, Ethiopia, and Kenya. The collection process respects the natural growth cycles of the trees, ensuring that the environment remains undisturbed and the resin maintains its high quality.',
    usage: 'Myrrh is commonly used in incense and perfumes for its distinctive fragrance. It also plays a significant role in traditional medicine, where it is used for its antiseptic and healing properties. Additionally, Myrrh is a key component in many religious ceremonies and rituals.',
    group: 'Aromatic Resin, Resin',
    applications: ['Cosmetics', 'Flavor + Fragrance', 'Incense', 'Perfumery', 'Technical', 'Aromatherapy', 'Supplements', 'Oral Health'],
    packaging: '25kg, 50kg, and 100kg bags',
    image: 'https://images.unsplash.com/photo-1605335805581-2c069e2c694f?auto=format&fit=crop&q=80&w=1200'
  },
  'gum-arabic': {
    id: 'gum-arabic',
    name: 'Gum Arabic',
    subtitle: 'Acacia Gum',
    description: 'The Acacia Gum, also known as Arabic Gum, is a versatile resin highly valued in the food, pharmaceutical, and cosmetic industries.',
    overview: 'The Acacia Gum, also known as Arabic Gum, is a versatile resin highly valued in the food, pharmaceutical, and cosmetic industries. Its natural emulsifying and stabilizing properties make it an essential ingredient in numerous products.',
    sources: 'Our Gum Arabic is organically sourced and ethically harvested from the wild terrains of Somalia, Ethiopia, and Kenya. The resin is collected with great care to ensure its purity and quality, supporting both the local environment and communities.',
    usage: 'Gum Arabic is commonly used as a thickening agent in food products, a binder in pharmaceuticals, and an emulsifier in cosmetics. Its versatility and natural properties make it a critical component in many everyday items, from beverages and candies to skincare and medicinal products.',
    group: 'Adhesive Agent, Coating Agent, Emulsifier, Foam Stabiliser, Hydrocolloid, Suspension Aid, Thickening Agent',
    applications: ['Bakery', 'Beverage', 'Chewing Gum', 'Confectionery', 'Cosmetics', 'Dairy', 'Dietary Supplement', 'Flavor + Fragrance', 'Food', 'Personal Care', 'Petfood', 'Pharma', 'Print Industry', 'Pyrotechnics', 'Technical'],
    packaging: '25kg, 50kg, and 100kg bags',
    image: 'https://images.unsplash.com/photo-1598512140866-26703565e31c?auto=format&fit=crop&q=80&w=1200'
  },
  opoponax: {
    id: 'opoponax',
    name: 'Opoponax',
    subtitle: 'Sweet Myrrh',
    description: 'Often called "sweet myrrh" or "bisabol myrrh," Opoponax has an earthy-sweet, balsam-like, lavender-like fragrance when used as incense.',
    overview: 'Often called "sweet myrrh" or "bisabol myrrh," Opoponax has an earthy-sweet, balsam-like, lavender-like fragrance when used as incense. Its unique scent makes it a favorite in aromatherapy and perfumery.',
    sources: 'Our Gum Opoponax is naturally and sustainably harvested from the wild landscapes of Somalia, Ethiopia, and Kenya. Harvesters use traditional techniques to collect the resin, ensuring the preservation of both the trees and the surrounding environment.',
    usage: 'Opoponax is widely used in incense and perfumes due to its soothing and grounding scent. It is also valued in aromatherapy for its calming effects and is used in various therapeutic applications to promote relaxation and emotional well-being.',
    group: 'Aromatic Resin, Resin',
    applications: ['Cosmetics', 'Flavor + Fragrance', 'Incense', 'Perfumery', 'Technical', 'Aromatherapy', 'Supplements', 'Oral Health'],
    packaging: '25kg, 50kg, and 100kg bags',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=1200'
  }
};

export const Products: React.FC<ProductsProps> = ({ selectedProduct, navigateTo }) => {
  if (selectedProduct && productsData[selectedProduct]) {
    const product = productsData[selectedProduct];
    return (
      <div className="bg-white animate-fade-in pb-20">
        {/* Product Hero */}
        <div className="h-80 w-full relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl opacity-90">{product.subtitle}</p>
          </div>
          <button 
            onClick={() => navigateTo('products')}
            className="absolute top-6 left-6 z-30 text-white flex items-center bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Products
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{product.overview}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Usage</h2>
                  <p className="text-gray-600 leading-relaxed">{product.usage}</p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                        <Tag className="text-amber-600 h-6 w-6 mr-2" />
                        <h3 className="font-semibold text-gray-900">Group Info</h3>
                    </div>
                    <p className="text-gray-700">{product.group}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-amber-50 p-6 rounded-lg">
                        <div className="flex items-center mb-3">
                            <Leaf className="text-amber-600 h-6 w-6 mr-2" />
                            <h3 className="font-semibold text-gray-900">Our Sources</h3>
                        </div>
                        <p className="text-gray-700">{product.sources}</p>
                    </div>
                    <div className="bg-amber-50 p-6 rounded-lg">
                        <div className="flex items-center mb-3">
                            <Package className="text-amber-600 h-6 w-6 mr-2" />
                            <h3 className="font-semibold text-gray-900">Packaging</h3>
                        </div>
                        <p className="text-gray-700">{product.packaging}</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <Layers className="h-6 w-6 mr-2 text-amber-600" />
                        Applications
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.applications.map((app: string, idx: number) => (
                            <li key={idx} className="flex items-center text-gray-700">
                                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                {app}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>

              {/* Sidebar / CTA */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-xl sticky top-24 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in {product.name}?</h3>
                    <p className="text-gray-600 mb-6">Contact us today for a quote, specifications sheet, or sample request.</p>
                    
                    <a 
                        href={`https://wa.me/254700000000?text=I am interested in ${product.name}`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transition-colors mb-4 shadow-md"
                    >
                        <MessageCircle className="mr-2 h-5 w-5" /> Order via WhatsApp
                    </a>
                    
                    <button 
                         onClick={() => navigateTo('contact')}
                         className="w-full flex items-center justify-center border-2 border-gray-300 hover:border-gray-400 text-gray-700 py-4 rounded-lg font-semibold transition-colors"
                    >
                        Contact Sales Team
                    </button>

                    <div className="mt-8 border-t pt-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Truck className="h-4 w-4 mr-2" />
                            Global Shipping Available
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                            <Package className="h-4 w-4 mr-2" />
                            Bulk Quantities: {product.packaging}
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Products</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the finest selection of natural gums and resins, sustainably harvested and processed for the global market.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Object.values(productsData).map((p) => (
                <div 
                    key={p.id} 
                    onClick={() => navigateTo('products', p.id)}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                    <div className="h-64 overflow-hidden">
                        <img 
                            src={p.image} 
                            alt={p.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{p.name}</h3>
                        <p className="text-amber-600 font-medium mb-4">{p.subtitle}</p>
                        <p className="text-gray-600 line-clamp-3 mb-6">{p.description}</p>
                        <span className="text-amber-700 font-semibold group-hover:text-amber-900 flex items-center">
                            View Details <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
