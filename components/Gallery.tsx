import React, { useState } from 'react';

type FilterType = 'all' | 'team' | 'resins' | 'storage' | 'transport';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const images = [
    // Team (5 images)
    { id: 1, type: 'team', src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600', alt: 'Executive Meeting' },
    { id: 2, type: 'team', src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600', alt: 'Field Operations Team' },
    { id: 3, type: 'team', src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600', alt: 'Logistics Manager' },
    { id: 4, type: 'team', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600', alt: 'Quality Assurance Team' },
    { id: 5, type: 'team', src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600', alt: 'CEO & Founder' },
    
    // Resins (15 images)
    { id: 6, type: 'resins', src: 'https://images.unsplash.com/photo-1615811361523-6bd03c7799a4?auto=format&fit=crop&q=80&w=600', alt: 'Premium Frankincense' },
    { id: 7, type: 'resins', src: 'https://images.unsplash.com/photo-1605335805581-2c069e2c694f?auto=format&fit=crop&q=80&w=600', alt: 'Raw Myrrh' },
    { id: 8, type: 'resins', src: 'https://images.unsplash.com/photo-1598512140866-26703565e31c?auto=format&fit=crop&q=80&w=600', alt: 'Gum Arabic Crystals' },
    { id: 9, type: 'resins', src: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=600', alt: 'Opoponax Tears' },
    { id: 10, type: 'resins', src: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=600', alt: 'Incense Burning' },
    { id: 11, type: 'resins', src: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&q=80&w=600', alt: 'Resin Sorting Process' },
    { id: 12, type: 'resins', src: 'https://images.unsplash.com/photo-1518531933037-8845e6963f0a?auto=format&fit=crop&q=80&w=600', alt: 'Golden Resin Tears' },
    { id: 13, type: 'resins', src: 'https://images.unsplash.com/photo-1620052086303-39d6dd3039d7?auto=format&fit=crop&q=80&w=600', alt: 'Hand Picked Selection' },
    { id: 14, type: 'resins', src: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600', alt: 'Natural Gums' },
    { id: 15, type: 'resins', src: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7c1d?auto=format&fit=crop&q=80&w=600', alt: 'Essential Oil Distillation' },
    { id: 16, type: 'resins', src: 'https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&q=80&w=600', alt: 'Amber Colored Resin' },
    { id: 17, type: 'resins', src: 'https://images.unsplash.com/photo-1515281239448-201633a2a8b3?auto=format&fit=crop&q=80&w=600', alt: 'Crystallized Sap' },
    { id: 18, type: 'resins', src: 'https://images.unsplash.com/photo-1622322303036-7c0b05b3834a?auto=format&fit=crop&q=80&w=600', alt: 'Dried Sap Samples' },
    { id: 19, type: 'resins', src: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600', alt: 'Graded Myrrh' },
    { id: 20, type: 'resins', src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=600', alt: 'Boswellia Tree' },
    
    // Storage (10 images)
    { id: 21, type: 'storage', src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600', alt: 'Main Warehouse' },
    { id: 22, type: 'storage', src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=600', alt: 'Stacked Inventory' },
    { id: 23, type: 'storage', src: 'https://images.unsplash.com/photo-1566576912902-1d6db6e22cc8?auto=format&fit=crop&q=80&w=600', alt: 'Loading Dock' },
    { id: 24, type: 'storage', src: 'https://images.unsplash.com/photo-1580674298662-043791f7a299?auto=format&fit=crop&q=80&w=600', alt: 'Climate Controlled Storage' },
    { id: 25, type: 'storage', src: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=600', alt: 'Bagging Area' },
    { id: 26, type: 'storage', src: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=600', alt: 'Storage Pallets' },
    { id: 27, type: 'storage', src: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=600', alt: 'Inventory Check' },
    { id: 28, type: 'storage', src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600', alt: 'Sacks of Resin' },
    { id: 29, type: 'storage', src: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=600', alt: 'Warehouse Exterior' },
    { id: 30, type: 'storage', src: 'https://images.unsplash.com/photo-1567789884554-0b844b5986c1?auto=format&fit=crop&q=80&w=600', alt: 'Organized Stock' },
    
    // Transport (5 images)
    { id: 31, type: 'transport', src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600', alt: 'Truck Loading' },
    { id: 32, type: 'transport', src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600', alt: 'Shipping Containers' },
    { id: 33, type: 'transport', src: 'https://images.unsplash.com/photo-1494412574643-35d324698420?auto=format&fit=crop&q=80&w=600', alt: 'Cargo Ship' },
    { id: 34, type: 'transport', src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600', alt: 'Air Freight' },
    { id: 35, type: 'transport', src: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&q=80&w=600', alt: 'Logistics Port' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.type === filter);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Gallery</h1>
            <p className="mt-4 text-xl text-gray-600">A glimpse into our world of operations, products, and people.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
                { label: 'All', value: 'all' },
                { label: 'Our Team', value: 'team' },
                { label: 'Resins & Gums', value: 'resins' },
                { label: 'Storage & Warehouse', value: 'storage' },
                { label: 'Transportation', value: 'transport' },
            ].map((f) => (
                <button
                    key={f.value}
                    onClick={() => setFilter(f.value as FilterType)}
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                        filter === f.value 
                        ? 'bg-amber-600 text-white shadow-md' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    {f.label}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((img) => (
                <div key={img.id} className="relative group overflow-hidden rounded-lg shadow-sm bg-gray-100 aspect-square">
                    <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium px-4 text-center">{img.alt}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};