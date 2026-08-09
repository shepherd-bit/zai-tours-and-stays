import { useEffect, useRef } from "react";
import { Sparkles, Home, ArrowUpRight, BedDouble, Wifi, Tv, Car, Compass } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AccommodationServices() {
  const sectionRef = useRef(null);

  const airbnbProperties = [
    {
      id: 1,
      title: "The ZAI Cozy Beachside Apartment",
      location: "Bofa Beach, Kilifi",
      price: "$120 / night",
      image: "./airbnb-profile/hse-1.PNG",
      amenities: [
        { text: "3 Comfortable Bedrooms", icon: <BedDouble className="w-4 h-4" /> },
        { text: "High-Speed Wi-Fi (100Mbps)", icon: <Wifi className="w-4 h-4" /> },
        { text: "Stunning Ocean Breezes", icon: <Compass className="w-4 h-4" /> },
        { text: "Secure Parking Included", icon: <Car className="w-4 h-4" /> }
      ]
    },
    {
      id: 2,
      title: "Serene Suburban Retreat",
      location: "Elgon View, Eldoret",
      price: "$95 / night",
      image: "./airbnb-profile/hse-2.PNG",
      amenities: [
        { text: "2 Bedrooms En-suite", icon: <BedDouble className="w-4 h-4" /> },
        { text: "High-Speed Wi-Fi", icon: <Wifi className="w-4 h-4" /> },
        { text: "Private Garden Access", icon: <Compass className="w-4 h-4" /> },
        { text: "Smart TV with Streaming", icon: <Tv className="w-4 h-4" /> }
      ]
    },
    {
      id: 3,
      title: "Modern Minimalist Town Studio",
      location: "Kapsoya, Eldoret",
      price: "$65 / night",
      image: "./airbnb-profile/hse-3.PNG",
      amenities: [
        { text: "Functional Studio Layout", icon: <BedDouble className="w-4 h-4" /> },
        { text: "High-Speed Wi-Fi", icon: <Wifi className="w-4 h-4" /> },
        { text: "Easy Highway Access", icon: <Compass className="w-4 h-4" /> },
        { text: "On-site Gym Access", icon: <Tv className="w-4 h-4" /> }
      ]
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".immersive-stay-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".staycation-showcase-container",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="accommodation" 
      ref={sectionRef} 
      className="bg-white text-zinc-900 py-24 px-6 md:px-16 lg:px-24 border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* CENTER-ALIGNED HEADER BLOCK */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 border-b border-zinc-100 pb-10">
          <div className="flex items-center gap-2 text-orange-600 font-bold text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            Comfortable Staycations
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
            Immersive ZAI Stays.
          </h2>
          <p className="text-zinc-500 text-sm md:text-base mt-4 leading-relaxed">
            Fully equipped, budget-friendly spaces designed for a smooth and relaxing stay.
          </p>
        </div>

        {/* Listing Showcase Stack */}
        <div className="staycation-showcase-container flex flex-col gap-8 w-full">
          {airbnbProperties.map((property) => (
            <div
              key={property.id}
              className="immersive-stay-card bg-zinc-50/50 border border-zinc-200/60 rounded-[2rem] p-6 lg:p-8 flex flex-col lg:flex-row gap-8 items-stretch hover:border-zinc-300 hover:bg-zinc-50/80 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.01)] group"
            >
              
              {/* Wide Card Image Section */}
              <div className="w-full lg:w-[45%] h-64 lg:h-auto min-h-[260px] rounded-2xl overflow-hidden relative flex-shrink-0 shadow-inner">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
                
                {/* Brand Validation Label */}
                <div className="absolute top-4 left-4 bg-zinc-950 text-white text-[10px] font-extrabold tracking-wider uppercase px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
                  <Home className="w-3 h-3 text-orange-500 fill-orange-500" /> ZAI Stays
                </div>
              </div>

              {/* Information Content Panel */}
              <div className="flex flex-col justify-between flex-grow py-1">
                <div>
                  {/* Top Identifier Bar */}
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-xs font-bold text-zinc-400 font-mono tracking-wider uppercase">
                      {property.location}
                    </span>
                    <span className="text-lg font-mono font-bold text-orange-600">
                      {property.price}
                    </span>
                  </div>

                  {/* Property Headline */}
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-950 tracking-tight mb-6">
                    {property.title}
                  </h3>

                  {/* Clean Property Amenities Container */}
                  <div className="bg-white border border-zinc-200/50 p-5 rounded-2xl shadow-sm">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">
                      Key Highlights & Amenities
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.amenities.map((amenity, idx) => (
                        <li key={idx} className="text-xs md:text-sm text-zinc-600 flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-500 flex-shrink-0">
                            {amenity.icon}
                          </div>
                          <span className="font-medium">{amenity.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action Row */}
                <div className="mt-8 pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                  <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Ready for Check-in
                  </div>
                  <a
                    href="https://airbnb.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-zinc-950 text-white text-xs font-extrabold px-5 py-3 rounded-xl hover:bg-orange-600 hover:text-white transition-colors duration-200 shadow-md"
                  >
                    Book On Airbnb
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}