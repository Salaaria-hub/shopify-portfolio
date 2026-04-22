'use client';

import { useState } from 'react';
import { CheckCircle, Clock, HeartHandshake, ArrowRight, Phone } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    project_type: '',
    budget: '',
    revenue: '',
    timeline: '',
    existing_store: '',
    store_url: '',
    body: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Request sent successfully! I will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      project_type: '',
      budget: '',
      revenue: '',
      timeline: '',
      existing_store: '',
      store_url: '',
      body: '',
    });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans text-neutral-100 flex items-center justify-center pt-24">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row bg-[#141414] rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden">
        
        {/* === Left Section: Value Proposition === */}
        <section className="flex-1 p-8 lg:p-16 bg-gradient-to-br from-[#111] to-[#1a1a1a] border-b lg:border-b-0 lg:border-r border-neutral-800 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-neutral-800 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-8 self-start">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
            Accepting New Projects
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            I Build Shopify Stores That <span className="text-green-400">Actually Convert.</span>
          </h1>
          <p className="text-lg text-neutral-400 mb-10 max-w-md">
            Stop losing money to slow speeds and poor UX. I engineer high-performance, premium Shopify 2.0 experiences designed specifically for scaling DTC brands.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-400 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-lg font-semibold mb-1">Conversion-Focused Development</h4>
                <p className="text-neutral-400 text-sm">Data-driven architecture, seamless checkout flows, and reduced friction to maximize your ROAS.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="text-green-400 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-lg font-semibold mb-1">Fast Turnaround & Execution</h4>
                <p className="text-neutral-400 text-sm">Agile development workflows tailored for high-growth startups moving at lightning speed.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <HeartHandshake className="text-green-400 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-lg font-semibold mb-1">Reliable Long-Term Support</h4>
                <p className="text-neutral-400 text-sm">I act as an extension of your team, providing proactive optimization and bug-free custom liquid code.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-auto pt-8">
            {['Shopify 2.0', 'Custom Liquid', 'CRO Strategy', 'Speed Optimization', 'Headless Build'].map(skill => (
              <span key={skill} className="px-4 py-2 bg-[#008060]/10 border border-[#008060]/20 text-green-400 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* === Right Section: High-Ticket Lead Form === */}
        <section className="flex-[1.1] p-8 lg:p-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Book a Free Strategy Call</h2>
            <p className="text-neutral-400 text-sm">Fill out the form below. I usually respond within 12–24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 text-neutral-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-[#1f1f1f] border border-neutral-800 rounded-xl focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Business Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@brand.com"
                  className="w-full px-4 py-3 bg-[#1f1f1f] border border-neutral-800 rounded-xl focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 bg-[#1f1f1f] border border-neutral-800 rounded-xl focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
              />
              <p className="text-xs text-neutral-500 mt-1">Required for fast communication. Serious inquiries only.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">Project Type <span className="text-red-500">*</span></label>
                <select
                  name="project_type"
                  value={formData.project_type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1f1f1f] border border-neutral-800 rounded-xl focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors appearance-none"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Store Design & Build">Store Design & Build</option>
                  <option value="Custom Liquid Dev">Custom Liquid Development</option>
                  <option value="CRO & Speed">CRO & Performance Optimization</option>
                  <option value="Bug Fixes & Retainer">Ongoing Support / Fixes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Project Budget <span className="text-red-500">*</span></label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1f1f1f] border border-neutral-800 rounded-xl focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors appearance-none"
                >
                  <option value="" disabled>Select budget range</option>
                  <option value="Under ₹15K">Under ₹15K</option>
                  <option value="₹15K - ₹35K">₹15K – ₹35K</option>
                  <option value="₹35K - ₹75K">₹35K – ₹75K</option>
                  <option value="₹75K+">₹75K+</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">Monthly Revenue</label>
                <select
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1f1f1f] border border-neutral-800 rounded-xl focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors appearance-none"
                >
                  <option value="" disabled>Current scale</option>
                  <option value="Pre-launch">Pre-launch / Idea phase</option>
                  <option value="Under ₹5L">Under ₹5L</option>
                  <option value="₹5L - ₹20L">₹5L – ₹20L</option>
                  <option value="₹20L+">₹20L+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1f1f1f] border border-neutral-800 rounded-xl focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors appearance-none"
                >
                  <option value="" disabled>How soon?</option>
                  <option value="ASAP">ASAP (Urgent)</option>
                  <option value="1-2 Weeks">1-2 Weeks</option>
                  <option value="1 Month+">1 Month+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Do you have an existing store? <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`cursor-pointer text-center py-3 rounded-xl border transition-all ${formData.existing_store === 'Yes' ? 'bg-[#008060]/10 border-[#008060] text-green-400' : 'bg-[#1f1f1f] border-neutral-800'}`}>
                  <input type="radio" name="existing_store" value="Yes" className="hidden" onChange={handleChange} required />
                  Yes
                </label>
                <label className={`cursor-pointer text-center py-3 rounded-xl border transition-all ${formData.existing_store === 'No' ? 'bg-[#008060]/10 border-[#008060] text-green-400' : 'bg-[#1f1f1f] border-neutral-800'}`}>
                  <input type="radio" name="existing_store" value="No" className="hidden" onChange={handleChange} />
                  No
                </label>
              </div>
            </div>

            {formData.existing_store === 'Yes' && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="block text-sm font-medium mb-1">Store URL <span className="text-red-500">*</span></label>
                <input
                  type="url"
                  name="store_url"
                  value={formData.store_url}
                  onChange={handleChange}
                  required
                  placeholder="https://yourstore.com"
                  className="w-full px-4 py-3 bg-[#1f1f1f] border border-neutral-800 rounded-xl focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1">Tell me about your brand & goals <span className="text-red-500">*</span></label>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleChange}
                required
                rows={4}
                placeholder="What are the biggest challenges you're currently facing with your store?"
                className="w-full px-4 py-3 bg-[#1f1f1f] border border-neutral-800 rounded-xl focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-[#008060] hover:bg-[#00664d] text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? 'Sending Request...' : 'Submit Request'}
              {!isSubmitting && <ArrowRight size={20} />}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
            <p className="text-neutral-400 text-sm mb-4">Not ready to fill the form?</p>
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 rounded-full text-sm font-medium hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all text-neutral-300"
            >
              <Phone size={18} />
              Chat on WhatsApp
            </a>
          </div>

        </section>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}