import React from 'react';

const testimonials = [
  {
    content: "Apex Solutions completely transformed our digital workflow. Their team is knowledgeable, responsive, and a pleasure to work with.",
    author: "Sarah Johnson",
    role: "CEO at TechFlow",
    image: "https://picsum.photos/100/100?random=3"
  },
  {
    content: "The best investment we've made this year. The ROI on their analytics package was immediate and substantial.",
    author: "Michael Chen",
    role: "Director of Marketing, GreenLeaf",
    image: "https://picsum.photos/100/100?random=4"
  },
  {
    content: "Professional, timely, and exceeded expectations. I highly recommend Apex for any enterprise software needs.",
    author: "Emily Davis",
    role: "CTO, FutureScale",
    image: "https://picsum.photos/100/100?random=5"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-indigo-50 py-12 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              What our clients say
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Don't just take our word for it. Here is what industry leaders have to say about working with us.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {testimonials.map((item, index) => (
              <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-900">
                      "
                    </p>
                    <p className="text-base text-gray-500 italic">
                      {item.content}
                    </p>
                    <p className="text-xl font-semibold text-gray-900 text-right">
                      "
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={item.image} alt={item.author} />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {item.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};