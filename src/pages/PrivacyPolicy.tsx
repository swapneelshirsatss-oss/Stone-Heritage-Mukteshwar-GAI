import React from 'react';
import { Helmet } from 'react-helmet-async';

export function PrivacyPolicy() {
  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      <Helmet>
        <title>Privacy Policy | Stone Heritage Mukteshwar</title>
        <meta name="description" content="Privacy Policy for Stone Heritage Mukteshwar." />
      </Helmet>
      
      <div className="py-24 px-4 max-w-4xl mx-auto bg-white shadow-sm border border-stone-200 p-8 md:p-12 my-8">
        <h1 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary tracking-tight text-center">Privacy Policy</h1>
        <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-12"></div>
        
        <div className="text-primary/80 font-light leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-medium text-primary mb-4">Privacy Policy</h2>
            <p className="mb-4">This privacy policy sets out how we use and protect any information that guest(s) give us when they use this website.</p>
            <p className="mb-4">We are committed to ensuring that the guests' privacy is protected. Should we ask the visitor/guest to provide certain information by which they can be identified when using this website, then the visitor/guest can be assured that it will only be used in accordance with this privacy strategy.</p>
            <p>We at The Stone Heritage Mukteshwar are committed to the privacy of everyone who accesses our website https://thestoneheritage.in/. It only collects personal data about the visitor/guest as needed to provide them with outstanding services, and to help process their requests or provide them with information.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-medium text-primary mb-4">Cancellation Rules</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>If cancellation is done 7 or more days prior to arrival, then the full amount will be refunded.</li>
              <li>If cancellation is done between 5 - 7 days of arrival, then 50% of the booking amount will be charged.</li>
              <li>If cancellation is done within 5 days of arrival, then the full amount will be charged.</li>
              <li>If no show, then the full amount will be charged.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium text-primary mb-4">Booking Terms</h2>
            <p className="mb-4">You are making a booking with the hotel directly.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Please review the booking and cancellation policies for the bookings. In case you make a change or cancel the booking, the cancellation penalties specified may apply.</li>
              <li>You may be asked to furnish the form of payment and identification proofs during check-in.</li>
              <li>Other inclusions not listed as part of this booking may be chargeable.</li>
            </ul>
          </section>
          
          <div className="mt-12 pt-8 border-t border-stone-200">
            <h3 className="text-lg font-serif font-medium text-primary mb-2">Contact</h3>
            <p>Phone: <a href="tel:+919027844424" className="text-accent hover:underline">9027844424</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
