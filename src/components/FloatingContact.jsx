import { useState, useEffect } from "react";
import gsap from "gsap";

export default function FloatingContact() {
  const [isMobile, setIsMobile] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  const displayPhoneNumber = "+254 712 000 000"; 
  const dialPhoneNumber = "+254712000000";
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
    if (isMobile) return;

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
      
      {/* 1. WHATSAPP WHITE CARD */}
      <a
        href={`https://wa.me/${dialPhoneNumber.replace("+", "")}?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp Business"
        className="floating-btn-card pointer-events-auto flex items-center justify-start gap-4 bg-white text-zinc-800 font-semibold text-sm px-4 md:px-5 py-4 h-14 w-auto md:w-64 rounded-xl md:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-zinc-100 hover:scale-[1.03] active:scale-95 transition-transform duration-200"
      >
        {/* ICON IMAGE CONTAINER */}
        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
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

      {/* 2. TELEPHONE WHITE CARD */}
      <div className="flex flex-col items-end gap-2 relative">
        
        {/* Desktop Number Pop-up */}
        {showNumber && !isMobile && (
          <div className="phone-card-tooltip pointer-events-auto absolute bottom-16 bg-zinc-950 text-white font-mono text-xs font-semibold py-2.5 px-4 rounded-xl border border-zinc-800 shadow-2xl flex items-center gap-2 whitespace-nowrap">
            <span className="text-orange-500">Active Support:</span> {displayPhoneNumber}
          </div>
        )}

        <a
          href={`tel:${dialPhoneNumber}`}
          onClick={handlePhoneClick}
          aria-label="Call ZAI Support"
          className="floating-btn-card pointer-events-auto flex items-center justify-start gap-4 bg-white text-zinc-800 font-semibold text-sm px-4 md:px-5 py-4 h-14 w-auto md:w-64 rounded-xl md:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-zinc-100 hover:scale-[1.03] active:scale-95 transition-transform duration-200"
        >
          {/* ICON IMAGE CONTAINER */}
          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
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