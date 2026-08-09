import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";

const testimonials = [
  { 
    id: 1, 
    name: "Sarah Jenkins", 
    role: "Coastal Explorer", 
    text: "The transit service was exceptionally punctual. The driver knew all the best scenic shortcuts along the Kenyan Coast.", 
    rating: 5,
    photo: "/images/sarah.jpg"
  },
  { 
    id: 2, 
    name: "David K.", 
    role: "Business Traveler", 
    text: "Clean vehicles, seamless booking framework, and highly reliable. ZAI is my go-to for regional corporate logistics.", 
    rating: 5,
    photo: "/images/david.jpg"
  },
  { 
    id: 3, 
    name: "Elena Rostova", 
    role: "Vacationer", 
    text: "Beautiful accommodation layouts. Everything was spotless, minimalist, and exactly as advertised near the beach.", 
    rating: 5,
    photo: "/images/elena.jpg"
  },
  { 
    id: 4, 
    name: "Marcus Aubrey", 
    role: "Weekend Guest", 
    text: "Loved the rapid response over WhatsApp. The automated check-in benchmarks made arrival stress-free.", 
    rating: 4,
    photo: "/images/marcus.jpg"
  },
  { 
    id: 5, 
    name: "Amara Patel", 
    role: "Expat Traveler", 
    text: "Professional operators who understand local transit dynamics perfectly. Highly secure payment frameworks.", 
    rating: 5,
    photo: "/images/amara.jpg"
  },
  { 
    id: 6, 
    name: "Johnathan M.", 
    role: "Backpacker", 
    text: "Affordable luxury. The perfect blend of coastal transit coordination and pristine room booking.", 
    rating: 5,
    photo: "/images/johnathan.jpg"
  },
  { 
    id: 7, 
    name: "Clara Grosh", 
    role: "Family Trip", 
    text: "Spacious transport fleet and extremely accommodating hosts. The kids loved the stay layout.", 
    rating: 4,
    photo: "/images/clara.jpg"
  },
  { 
    id: 8, 
    name: "Liam Vance", 
    role: "Digital Nomad", 
    text: "Reliable Wi-Fi at the stay, minimalist aesthetics, and precise coordinates provided instantly upon booking.", 
    rating: 5,
    photo: "/images/liam.jpg"
  },
  { 
    id: 9, 
    name: "Naomi Wambua", 
    role: "Local Explorer", 
    text: "Incredible attention to detail. The dynamic room prep benchmarks are clearly operating at a very high standard.", 
    rating: 5,
    photo: "/images/naomi.jpg"
  },
  { 
    id: 10, 
    name: "Philip Brode", 
    role: "Frequent Flyer", 
    text: "Smooth pickup straight from the terminus. No delays, no hidden fees. Absolute operational professionalism.", 
    rating: 5,
    photo: "/images/philip.jpg"
  },
];

export default function TestimonialsCarousel() {
  const containerRef = useRef(null);
  const deckRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Standard carousel clock: rests for exactly 5 seconds per card focus
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = deckRef.current.children;
      const total = testimonials.length;

      testimonials.forEach((_, i) => {
        const cardElement = cards[i];
        if (!cardElement) return;

        // Calculate continuous circular distance relative to active center element
        let diff = i - activeIndex;
        if (diff < -5) diff += total;
        if (diff > 4) diff -= total;

        // Configuration sets for carousel positions based on vertical tracking logic
        if (diff === 0) {
          // Focused Center Card
          gsap.to(cardElement, {
            y: 0,
            scale: 1.06,
            opacity: 1,
            zIndex: 30,
            duration: 0.85,
            ease: "power2.inOut",
          });
        } else if (diff === -1) {
          // Top Card (Waiting above)
          gsap.to(cardElement, {
            y: -140,
            scale: 0.86,
            opacity: 0.45,
            zIndex: 20,
            duration: 0.85,
            ease: "power2.inOut",
          });
        } else if (diff === 1) {
          // Bottom Card (Moving out below)
          gsap.to(cardElement, {
            y: 140,
            scale: 0.86,
            opacity: 0.45,
            zIndex: 10,
            duration: 0.85,
            ease: "power2.inOut",
          });
        } else {
          // All other loop cards are completely hidden but tracking smoothly outside frames
          gsap.to(cardElement, {
            y: diff > 0 ? 280 : -280,
            scale: 0.75,
            opacity: 0,
            zIndex: 0,
            duration: 0.85,
            ease: "power2.inOut",
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <section 
      ref={containerRef} 
      className="bg-[#D98353]/10 py-28 border-t border-zinc-100 overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* LEFT PANEL */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          <span className="text-xs font-mono tracking-widest text-[#D98353] uppercase font-bold block mb-3">
            Guest Log
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-950 mb-6 leading-tight">
            What Customers Say About Zai Tours & Stays
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed max-w-sm">
            Discover how our synchronized transit logistics and local coast accommodations deliver flawless, stress-free journeys for our guests.
          </p>
        </div>

        {/* RIGHT PANEL: GENUINE CONTINUOUS VERTICAL MOTION CAROUSEL */}
        <div className="lg:col-span-7 flex justify-center items-center h-[560px] w-full relative">
          
          <div 
            ref={deckRef} 
            className="relative w-full max-w-[500px] h-[260px] flex items-center justify-center"
          >
            {testimonials.map((review, i) => {
              // Determine current focus directly for structural border modifications
              const isCenter = i === activeIndex;

              return (
                <div
                  key={review.id}
                  className={`absolute w-full bg-white p-7 sm:p-9 rounded-2xl flex flex-col justify-between transform will-change-transform opacity-0 ${
                    isCenter 
                      ? "border-2 border-zinc-950/10 shadow-[0_35px_70px_-15px_rgba(217,131,83,0.2)]" 
                      : "border border-zinc-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] pointer-events-none filter blur-[0.4px]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5 text-orange-500">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star 
                            key={starIndex} 
                            className={`w-4 h-4 ${starIndex < review.rating ? "fill-orange-500" : "text-zinc-200"}`} 
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 tracking-widest uppercase">
                        Verified Review
                      </span>
                    </div>

                    <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal tracking-wide line-clamp-3">
                      "{review.text}"
                    </p>
                  </div>

                  {/* FOOTER CONTAINER WITH INPUT IMAGE FRAME LINKS */}
                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 overflow-hidden flex-shrink-0">
                        <img 
                          src="" 
                          alt={`${review.name} avatar`}
                          className="w-full h-full object-cover"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 tracking-tight">{review.name}</h4>
                        <span className="text-xs text-zinc-400 font-medium tracking-wide">{review.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}