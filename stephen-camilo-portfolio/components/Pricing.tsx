
import React from 'react';

const plans = [
  {
    title: 'Drupal Maintenance',
    price: '50',
    unit: 'hour',
    subtitle: 'Basic Support',
    description: 'Ongoing maintenance for existing Drupal apps with security updates and minor enhancements.',
    features: ['Security Updates', 'Bug Fixes', 'Performance Monitoring', 'Monthly Reports', 'Backup Management']
  },
  {
    title: 'Custom Development',
    price: '75',
    unit: 'hour',
    subtitle: 'WordPress/Drupal',
    description: 'Custom module/plugin development, theme customization, and API integrations.',
    features: ['Custom Modules', 'Theme Customization', 'API Integration', 'E-commerce Setup', 'Security Hardening'],
    popular: true
  },
  {
    title: 'Enterprise Solution',
    price: 'Custom',
    unit: 'Quote',
    subtitle: 'Full Project',
    description: 'Complete enterprise platform development including marketplaces and complex systems.',
    features: ['Scalable Architecture', 'Multi-system Integration', 'Healthcare Systems', 'Payment Gateways', 'Ongoing Support']
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Packages</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">Service Plans</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-10 rounded-3xl transition-all duration-300 ${
                plan.popular 
                  ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 scale-105 z-10' 
                  : 'bg-slate-50 text-slate-900 border border-slate-200 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-slate-900 text-xs font-black rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                <p className={plan.popular ? 'text-slate-400' : 'text-slate-500'}>{plan.subtitle}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-black">
                  {plan.price === 'Custom' ? '' : '$'}{plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  / {plan.unit}
                </span>
              </div>
              
              <p className={`mb-8 text-sm leading-relaxed ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                {plan.description}
              </p>
              
              <div className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <i className="fas fa-check text-emerald-500 text-sm"></i>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="#contact" 
                className={`block w-full py-4 rounded-xl font-black text-center transition-all ${
                  plan.popular 
                    ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-600' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                CHOOSE PLAN
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
