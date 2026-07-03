import React from 'react';
import { Helmet } from 'react-helmet-async';

export function TermsConditions() {
  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      <Helmet>
        <title>Terms and Conditions | Stone Heritage Mukteshwar</title>
        <meta name="description" content="Terms and Conditions for Stone Heritage Mukteshwar." />
      </Helmet>
      
      <div className="py-24 px-4 max-w-4xl mx-auto bg-white shadow-sm border border-stone-200 p-8 md:p-12 my-8">
        <h1 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary tracking-tight text-center">Terms and Conditions</h1>
        <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-12"></div>
        
        <div className="text-primary/80 font-light leading-relaxed space-y-6">
          <ul className="list-disc pl-5 space-y-4">
            <li>The Stone Heritage Standard Check-in time is 1300 hours IST and check-out time is 1000 IST</li>
            <li>Early check-in and late check-out are available on subject to availability.</li>
            <li>The guest will conduct the event on an orderly manner without causing nuisance and full in compliance with the directives and requirements of the Stone Heritage Mukteshwar.</li>
            <li>No gatherings and parties of any nature are allowed in the room. The Resort reserves the right to evict any additional occupants in the room.</li>
            <li>Stone Heritage Mukteshwar recognizes no oral representation or arrangements and the conditions of this contract can be only modified in writing when needed.</li>
            <li>Stone Heritage Mukteshwar or its employees shall not be responsible for any medical emergencies, illness like food poisoning, vomiting, diarrhea etc. if the guest brings any edible items from outside and places it in the buffet or in the rooms and serve to their guest at the stone heritage, the guest will solely responsible for all the damages and illness. Stone Heritage Mukteshwar will not entertain any complaints regarding the same.</li>
            <li>Children below 5yrs will be complimentary.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
