import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// FIXED: Moved outside the component so useEffect doesn't track it as a changing dependency
const transportData = [
  {
    id: "airport",
    num: "01",
    title: "Airport Pickups",
    tagline: "Seamless Arrivals",
    description: "Step off the plane directly into absolute comfort. Our professional drivers handle your luggage and coordinate perfectly with your flight schedule for a zero-stress transition to your destination.",
    imgSrc: "./transport-services/airport-pickups.jpg",
    speed: -30,
    isOffset: false,
  },
  {
    id: "hires",
    num: "02",
    title: "Car Hires",
    tagline: "Total Autonomy",
    description: "Explore at your own rhythm. Gain access to a pristine fleet of modern, reliable, and highly maintained vehicles tailored perfectly to your individual itinerary and driving preferences.",
    imgSrc: "./transport-services/car-hire-tour.jpg",
    speed: 20,
    isOffset: true,
  },
  {
    id: "train",
    num: "03",
    title: "Train Station Pickups (SGR)",
    tagline: "On-Time Transit",
    description: "Skip the chaotic terminal lines. Transition effortlessly from the train platform directly to your private vehicle.",
    imgSrc: "./transport-services/sgr.jpg",
    speed: -20,
    isOffset: false,
  },
  {
    id: "tours",
    num: "04",
    title: "Private Custom Tours",
    tagline: "Curated Wandering",
    description: "Unlock hidden local landscapes and iconic destinations. Sit back as our expert guides deliver intimate, privately driven excursions crafted beautifully around what you want to experience.",
    imgSrc: "./transport-services/private-tours.jpg",
    speed: 30,
    isOffset: true,
  },
];

export default function TransportServices() {
  const containerRef = useRef(null);
  
  // FIXED: Simply keep the empty array. We don't clear it inline during render anymore.
  const cardsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // FIXED: Loop over the elements that were actually collected in the ref array
      cardsRef.current.forEach((targetCard, index) => {
        if (!targetCard) return;
        const item = transportData[index];

        gsap.to(targetCard, {
          y: item.speed,
          ease: "none",
          scrollTrigger: {
            trigger: targetCard,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []); 

  const handleMouseEnter = (id) => {
    gsap.to(`#editorial-overlay-${id}`, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(`#editorial-img-${id}`, {
      scale: 1.06,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (id) => {
    gsap.to(`#editorial-overlay-${id}`, {
      clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)",
      duration: 0.5,
      ease: "power3.inOut",
    });

    gsap.to(`#editorial-img-${id}`, {
      scale: 1,
      duration: 0.5,
    });
  };

  return (
    <section
      ref={containerRef}
      className="w-full py-9 bg-white font-sans text-zinc-900 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Seamless Travel Solutions
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-3 text-zinc-900 leading-tight">
            Move With Minimum Effort
          </h2>
          <p className="mt-6 text-zinc-500 text-sm sm:text-base leading-relaxed">
            Whether arriving at the terminal or seeking bespoke local exploration, discover transport options crafted exclusively around your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-8 items-start">
          {/* FIXED: Removed 'index' here since it isn't needed by the map loop itself */}
          {transportData.map((item) => (
            <div
              key={item.id}
              ref={addToRefs}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              className="relative w-full flex flex-col cursor-pointer group"
              style={{
                marginTop: typeof window !== "undefined" && window.innerWidth > 768 && item.isOffset ? "60px" : "0px",
              }}
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-zinc-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] rounded-xl">
                <img
                  id={`editorial-img-${item.id}`}
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover origin-center"
                />

                <div
                  id={`editorial-overlay-${item.id}`}
                  className="absolute inset-0 bg-gradient-to-t from-orange-600 to-orange-500 mix-blend-multiply opacity-90"
                  style={{
                    clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)",
                  }}
                />

                <div className="absolute top-6 left-6 z-10 text-white font-mono text-xs tracking-widest bg-black/20 backdrop-blur-md py-1 px-3 border border-white/10 uppercase rounded-sm">
                  {item.tagline}
                </div>
              </div>

              <div className="relative -mt-16 ml-6 mr-6 p-6 bg-white border border-zinc-100 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] z-20 flex flex-col justify-between rounded-lg transition-all duration-300 group-hover:border-orange-200">
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
                    <span className="text-3xl font-black tracking-tighter font-mono text-zinc-200 group-hover:text-orange-200 transition-colors duration-300">
                      {item.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-100 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}