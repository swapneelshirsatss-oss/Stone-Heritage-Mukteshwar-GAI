import React from 'react';

export function BookingWidget() {
  const handleBookingClick = () => {
    // dataLayer push event for tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'Booking_Widget_Click',
        category: 'Interaction',
        action: 'Click',
        label: 'Booking_Widget'
      });
      (window as any).dataLayer.push({
        event: 'WhatsApp_Lead_Initiated',
        category: 'Booking',
        action: 'Click',
        label: 'Sticky_Booking_Widget'
      });
    }

    // Redirect to WhatsApp
    const message = encodeURIComponent("Hi, I'm interested in booking a stay at Stone Heritage Mukteshwar. Can you share the details?");
    window.open(`https://wa.me/919027844424?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-md border-t border-secondary/20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] md:bottom-6 md:left-auto md:right-6 md:border md:rounded-2xl md:w-80">
      <div className="flex flex-col items-center gap-3">
        <div className="text-center w-full">
          <p className="text-sm font-semibold text-primary">Book Direct & Save</p>
          <p className="text-xs text-primary/70">Avoid OTA commissions for best rates</p>
        </div>
        <button
          onClick={handleBookingClick}
          className="w-full bg-highlight hover:bg-highlight/90 text-primary font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-95 shadow-md flex items-center justify-center gap-2"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
          </svg>
          Chat on WhatsApp
        </button>
      </div>
    </div>
  );
}
