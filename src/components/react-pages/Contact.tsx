import React, { useState } from 'react';


export function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', dates: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // dataLayer push for form submission
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'Form_Submission',
        category: 'Lead',
        action: 'Submit',
        label: 'Contact_Page_Form'
      });
    }

    // Format for WhatsApp fallback
    const text = `Name: ${formData.name}%0APhone: ${formData.phone}%0ADates: ${formData.dates}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919027844424?text=${text}`, '_blank');
  };

  return (
    <>
      
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-primary">Get in Touch</h1>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Planning your weekend getaway from Delhi to Mukteshwar? Contact us directly for the best rates and personalized arrangements.
          </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-secondary">Address</p>
                <p className="text-primary/80">Bhowali Dhanachuli Rd, South Gola Range,<br/>Mukteshwar, Uttarakhand 263138</p>
              </div>
              <div>
                <p className="font-semibold text-secondary">Phone</p>
                <p className="text-primary/80">+91 9027844424<br/>+91 7900200563</p>
              </div>
              <div>
                <p className="font-semibold text-secondary">Email</p>
                <p className="text-primary/80">thestoneheritage@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-[400px] bg-stone-200 border border-stone-200 shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.798426132153!2d79.64472459999999!3d29.434687300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0bd7d35a2e497%3A0x466b07899edd7565!2sStone%20Heritage%20Mukteshwar!5e0!3m2!1sen!2sin!4v1782816534338!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold mb-6">Direct Bookings & Real-Time Availability</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Full Name</label>
              <input 
                type="text" 
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">Phone Number / WhatsApp</label>
              <input 
                type="tel" 
                id="phone"
                required
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="dates" className="block text-sm font-medium text-primary mb-2">Preferred Dates</label>
              <input 
                type="text" 
                id="dates"
                placeholder="e.g. Oct 12 - Oct 15"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                value={formData.dates}
                onChange={e => setFormData({...formData, dates: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message or Special Requests</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-24 border-t border-stone-200 pt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h3 className="text-xl font-bold mb-3 text-secondary">1. Delhi to Mukteshwar Route & Itinerary Assistance</h3>
            <p className="text-primary/80">
              The fastest driving route from Delhi is via Moradabad, Haldwani, and Bhowali, taking about 8 hours. We can help you arrange reliable taxi pickups from Kathgodam railway station and suggest the best local itineraries for your weekend getaway.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h3 className="text-xl font-bold mb-3 text-secondary">2. Pet-Friendly Room Verification & Special Requests</h3>
            <p className="text-primary/80">
              Yes, we are a fully pet-friendly homestay! Please mention your pets in your booking inquiry so we can allocate a suitable room with easy outdoor access and prepare for any special requests.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h3 className="text-xl font-bold mb-3 text-secondary">3. Find Stone Heritage: South Gola Range Directions</h3>
            <p className="text-primary/80">
              We are situated on the Bhowali-Dhanachuli Road in the South Gola Range. Use our Google Maps pin for exact directions, and feel free to call us if you lose network connectivity in the mountains.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
