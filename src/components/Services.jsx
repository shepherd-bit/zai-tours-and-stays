import { useRef } from "react";
import gsap from "gsap";
import { Car, Home, Sparkles } from "lucide-react";

export default function Services() {
  const containerRef = useRef(null);

  const services = [
    {
      id: "transport",
      title: "Premium Transport",
      description: "From private coastal tours to reliable car hires, get where you need to go in absolute comfort.",
      icon: <Car className="w-6 h-6 text-white group-hover:text-orange-500 transition-colors duration-300" />,
      imgSrc: "./services-gallery/hire-1.PNG",
    },
    {
      id: "accommodation",
      title: "ZAI Stays & Airbnbs",
      description: "Immerse yourself in handpicked accommodation tailored to your budget.",
      icon: <Home className="w-6 h-6 text-white group-hover:text-orange-500 transition-colors duration-300" />,
      imgSrc: "./services-gallery/airbnb.jpg",
    },
    {
      id: "laundry",
      title: "Express Laundry",
      description: "Fresh, professional cleaning services right at your doorstep so you can keep exploring hassle-free.",
      icon: <Sparkles className="w-6 h-6 text-white group-hover:text-orange-500 transition-colors duration-300" />,
      imgSrc: "./services-gallery/laundry.jpg",
    },
  ];

  const handleMouseEnter = (id) => {
    // Dim down the non-hovered cards slightly to elevate the focused one
    gsap.to(".service-card", {
      opacity: 0.6,
      scale: 0.97,
      duration: 0.4,
      ease: "power2.out",
    });
    
    // Highlight, lift, and expand the shadow profile of the active floating card
    gsap.to(`#card-${id}`, {
      opacity: 1,
      scale: 1.03,
      y: -12,
      boxShadow: "0 30px 60px -15px rgba(249, 115, 22, 0.15), 0 15px 30px -20px rgba(0, 0, 0, 0.1)",
      borderColor: "rgba(249, 115, 22, 0.3)",
      duration: 0.4,
      ease: "power2.out",
    });

    // Fade up the brand color mask overlay
    gsap.to(`#overlay-${id}`, {
      opacity: 0.8,
      duration: 0.4,
    });

    // Zoom the background image smoothly
    gsap.to(`#img-${id}`, {
      scale: 1.08,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    // Reset all cards cleanly back to baseline resting boundaries
    gsap.to(".service-card", {
      opacity: 1,
      scale: 1,
      y: 0,
      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)",
      borderColor: "rgba(228, 228, 231, 1)", // zinc-200
      duration: 0.4,
      ease: "power2.out",
    });

    // Reset overlay colors back to subtle dark gradient base
    gsap.to(".color-overlay", {
      opacity: 0.45,
      duration: 0.4,
    });

    // Reset image scale
    gsap.to(".card-image", {
      scale: 1,
      duration: 0.4,
    });
  };

  return (
    <section
      ref={containerRef}
      className="w-full py-28 bg-white font-sans text-zinc-900 border-t border-zinc-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Modern Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-zinc-900">
            Services We Provide
          </h2>
        </div>

        {/* 3-Column Distinct Floating Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              id={`card-${service.id}`}
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={handleMouseLeave}
              className="service-card relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-900 p-8 flex flex-col justify-end items-start text-left border border-zinc-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300 group"
            >
              {/* IMAGE BACKGROUND LAYER */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  id={`img-${service.id}`}
                  src={service.imgSrc}
                  alt={service.title}
                  className="card-image w-full h-full object-cover transition-transform duration-500"
                />
                {/* Dynamic Overlay Mask (Blends dark gradient with active orange on hover) */}
                <div
                  id={`overlay-${service.id}`}
                  className="color-overlay absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-45 mix-blend-multiply transition-opacity duration-300"
                  style={{ backgroundColor: "#f97316" }}
                />
              </div>

              {/* FLOATING TEXT AND ICON LAYERS */}
              <div className="relative z-10 w-full">
                {/* Glassmorphic Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-5 group-hover:bg-white group-hover:border-white transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="mt-2 text-sm text-zinc-100 opacity-90 leading-relaxed max-w-[280px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}