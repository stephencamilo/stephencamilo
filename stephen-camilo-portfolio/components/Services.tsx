
import React from 'react';

const services = [
  {
    icon: 'fa-code',
    title: 'Drupal Development',
    description: 'Enterprise Drupal applications (versions 8–11) with custom modules, themes, and REST API integrations for healthcare and complex systems.'
  },
  {
    icon: 'fa-layer-group',
    title: 'WordPress & Laravel',
    description: 'Full-stack development with WordPress, WooCommerce, and Laravel for e-commerce, marketplaces, and transactional platforms.'
  },
  {
    icon: 'fa-microchip',
    title: 'API & Marketplace',
    description: 'API integrations, payment gateways (Pix, Pagar.Me), and scalable marketplace platforms with performance and security focus.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Expertise</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2 text-left"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors">
                <i className={`fas ${service.icon} text-2xl text-emerald-500 group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#resume" className="inline-flex items-center text-emerald-600 font-bold hover:gap-2 transition-all">
                LEARN MORE <i className="fas fa-arrow-right ml-2 text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
