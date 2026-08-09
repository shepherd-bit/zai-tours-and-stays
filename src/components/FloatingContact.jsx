import { useState, useEffect } from "react";
import gsap from "gsap";

export default function FloatingContact() {
  const [isMobile, setIsMobile] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  // Updated credentials configurations
  const displayPhoneNumber = "+254 112 470 926"; 
  const dialPhoneNumber = "+254112470926";
  const whatsappNumber = "254745460891"; // Formatted strictly for wa.me URL pathway
  
  const whatsappMessage = "Hello ZAI Tours and Stays, I'd like to inquire about your services."; 
  const encodedMessage = encodeURIComponent(whatsappMessage);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkDevice();
    window.addEventListener("resize", checkDevice);
    
    gsap.fromTo(
      ".floating-btn-card",
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, delay: 0.8, ease: "power3.out" }
    );

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const handlePhoneClick = (e) => {
    // On mobile devices, let the browser execute the native tel protocol instantly
    if (isMobile) return;

    // On desktop, intercept to reveal the responsive layout info card
    e.preventDefault();
    setShowNumber(!showNumber);
    
    if (!showNumber) {
      gsap.fromTo(
        ".phone-card-tooltip",
        { opacity: 0, scale: 0.95, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  return (
    <div className="fixed right-6 bottom-8 z-50 flex flex-col gap-4 items-end pointer-events-none font-sans">
      
      {/* 1. WHATSAPP GATEWAY LINK */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp Business"
        className="floating-btn-card pointer-events-auto flex items-center justify-center md:justify-start gap-4 bg-white text-zinc-800 font-semibold text-sm w-11 h-11 md:w-64 md:h-14 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-zinc-100 px-4 md:px-3 py-4 hover:scale-[1.03] active:scale-95 transition-all duration-200"
      >
        {/* ICON CONTAINER */}
        <div className="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0">
          <img 
            src="./contact-icons/WhatsApp-icon.webp" 
            alt="WhatsApp" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Node */}
        <span className="hidden md:inline whitespace-nowrap tracking-wide">
          Chat on WhatsApp
        </span>
      </a>

      {/* 2. VOICE TELEPHONE CALL SYSTEM */}
      <div className="flex flex-col items-end gap-2 relative">
        
        {/* Desktop Dynamic Info Card */}
        {showNumber && !isMobile && (
          <div className="phone-card-tooltip pointer-events-auto absolute bottom-16 bg-zinc-950 text-white text-xs font-mono py-2.5 px-4 rounded-xl shadow-xl border border-zinc-800 whitespace-nowrap tracking-wider select-text">
            Direct Line: <span className="text-[#D98353] font-bold">{displayPhoneNumber}</span>
          </div>
        )}

        <a
          href={`tel:${dialPhoneNumber}`}
          onClick={handlePhoneClick}
          aria-label="Call ZAI Support"
          className="floating-btn-card pointer-events-auto flex items-center justify-center md:justify-start gap-4 bg-white text-zinc-800 font-semibold text-sm w-11 h-11 md:w-64 md:h-14 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-zinc-100 px-4 md:px-3 py-4 hover:scale-[1.03] active:scale-95 transition-all duration-200"
        >
          {/* ICON CONTAINER */}
          <div className="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0">
            <img 
              src="./contact-icons/telephone-icon.webp" 
              alt="Phone" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text Node */}
          <span className="hidden md:inline whitespace-nowrap tracking-wide">
            Call: {displayPhoneNumber}
          </span>
        </a>
      </div>

    </div>
  );
}