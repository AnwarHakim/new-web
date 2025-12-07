import React from 'react';
import { Page } from '../App';
import { Truck, Package, Sun, Anchor, Warehouse } from 'lucide-react';

interface ProcessProps {
  navigateTo: (page: Page) => void;
}

export const Process: React.FC<ProcessProps> = ({ navigateTo }) => {
  const steps = [
    {
      title: 'Harvesting',
      description: 'Skilled collectors carefully tap the trees in the wild woodlands. The resin tears are left to harden on the tree for several weeks before being hand-picked.',
      icon: Sun,
    },
    {
      title: 'Transportation',
      description: 'The raw resin is collected from remote collection points and transported to our regional sorting centers in 4x4 vehicles suitable for rugged terrain.',
      icon: Truck,
    },
    {
      title: 'Sorting & Grading',
      description: 'Our expert team cleans the resin, removing bark and impurities. It is then graded by size, color, and purity to meet specific international standards.',
      icon: Package,
    },
    {
      title: 'Storage',
      description: 'The graded product is stored in our climate-controlled warehouses to maintain freshness and prevent clumping or degradation before shipment.',
      icon: Warehouse,
    },
    {
      title: 'Exporting',
      description: 'We handle all logistics and documentation, ensuring smooth customs clearance. Products are shipped via sea or air freight to destinations worldwide.',
      icon: Anchor,
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">Our Export Process</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Harvest to Export: Our Commitment to Excellence. We ensure complete traceability and quality control at every step of the journey.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200 hidden md:block"></div>

            <div className="space-y-12">
                {steps.map((step, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-500 rounded-full border-4 border-white z-10 hidden md:block"></div>
                        
                        {/* Content side */}
                        <div className="w-full md:w-1/2 p-4">
                            <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                    <div className="p-3 bg-amber-100 rounded-full text-amber-600 mr-3 md:mr-0 md:ml-0">
                                        <step.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className={`text-xl font-bold text-gray-900 ml-3 ${index % 2 !== 0 ? 'md:mr-3 md:ml-0 order-first' : ''}`}>{step.title}</h3>
                                </div>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </div>

                        {/* Empty side for spacing */}
                        <div className="w-full md:w-1/2"></div>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to work with us?</h3>
            <button 
                onClick={() => navigateTo('contact')}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 md:text-lg transition-colors"
            >
                Start Your Order
            </button>
        </div>
      </div>
    </div>
  );
};