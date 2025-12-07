import React from 'react';
import { 
  BarChart, 
  Code, 
  Globe, 
  ShieldCheck, 
  Users, 
  Zap 
} from 'lucide-react';

const services = [
  {
    title: 'Business Analytics',
    description: 'Turn data into actionable insights with our advanced analytics and reporting tools.',
    icon: BarChart,
  },
  {
    title: 'Custom Development',
    description: 'Tailor-made software solutions designed to fit your unique business requirements.',
    icon: Code,
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your legacy systems and embrace the future of digital operations.',
    icon: Globe,
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your valuable assets with enterprise-grade security protocols and monitoring.',
    icon: ShieldCheck,
  },
  {
    title: 'Team Augmentation',
    description: 'Scale your workforce instantly with our pool of top-tier engineering talent.',
    icon: Users,
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure setup and management for maximum uptime.',
    icon: Zap,
  },
];

export const Services: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide a wide range of services to help you manage every aspect of your business more efficiently.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <dt className="text-lg leading-6 font-medium text-gray-900">{service.title}</dt>
                  <dd className="mt-2 text-base text-gray-500">{service.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};