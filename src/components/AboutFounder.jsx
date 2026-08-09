import { useEffect, useRef } from "react";
import { ArrowUpRight, ShieldCheck, Compass, Briefcase } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutFounder() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Reveal on Scroll
      gsap.fromTo(
        ".float-card",
        { opacity: 0, scale: 0.6, y: 30 },
        { 
          opacity: 1, 
          scale: window.innerWidth < 640 ? 0.75 : 1,
          y: 0, 
          duration: 1, 
          ease: "power3.out", 
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          }
        }
      );

      // 2. Independent, Organic Floating Tweens
      gsap.to("#card-hospitality", {
        y: -8,
        x: -1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("#card-operations", {
        y: -6,
        x: 2,
        duration: 2.4,
        delay: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("#card-logistics", {
        y: -10,
        x: -1,
        duration: 3.6,
        delay: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about-founder" 
      ref={containerRef} 
      className="bg-white text-zinc-900 py-24 sm:py-32 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-[10px] sm:text-xs font-mono tracking-widest text-orange-600 uppercase mb-2 sm:mb-3 font-bold">
            ZAI Executive Leadership
          </div>
          <h2 className="text-4xl sm:text-7xl font-black tracking-tighter text-zinc-950">
            Rashid Shiundu
          </h2>
        </div>

        {/* STACKED LAYER CONTAINER */}
        <div className="relative w-full max-w-[280px] sm:max-w-sm my-4">
          
          {/* CENTER PORTRAIT */}
          <div className="w-full aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] bg-zinc-100 relative z-10">
            <img 
              src="./rash-1.png" 
              alt="Rashid Shiundu" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* LEFT WIDGET: HOSPITALITY */}
          <div 
            id="card-hospitality"
            className="float-card absolute -left-20 sm:-left-44 top-[35%] w-36 sm:w-48 bg-white border border-zinc-100 p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.06)] z-20 origin-right scale-75 sm:scale-100 transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-2 sm:mb-3">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <h4 className="text-[9px] sm:text-[10px] font-bold text-zinc-950 uppercase tracking-wider mb-0.5 sm:mb-1">Hospitality</h4>
            <p className="text-[10px] sm:text-[11px] text-zinc-500 leading-snug">4 Years Airbnb Superhost managing premium coastal stays.</p>
          </div>

          {/* TOP RIGHT WIDGET: OPERATIONS */}
          <div 
            id="card-operations"
            className="float-card absolute -right-20 sm:-right-44 top-6 sm:top-12 w-36 sm:w-48 bg-white border border-zinc-100 p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.06)] z-20 origin-left scale-75 sm:scale-100 transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center mb-2 sm:mb-3">
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <h4 className="text-[9px] sm:text-[10px] font-bold text-zinc-950 uppercase tracking-wider mb-0.5 sm:mb-1">Operations</h4>
            <p className="text-[10px] sm:text-[11px] text-zinc-500 leading-snug">3 Years as an experienced local coastal tour guide.</p>
          </div>

          {/* BOTTOM RIGHT WIDGET: LOGISTICS */}
          <div 
            id="card-logistics"
            className="float-card absolute -right-20 sm:-right-44 bottom-10 sm:bottom-16 w-36 sm:w-48 bg-white border border-zinc-100 p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.06)] z-20 origin-left scale-75 sm:scale-100 transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center mb-2 sm:mb-3">
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <h4 className="text-[9px] sm:text-[10px] font-bold text-zinc-950 uppercase tracking-wider mb-0.5 sm:mb-1">Logistics</h4>
            <p className="text-[10px] sm:text-[11px] text-zinc-500 leading-snug">Certified Project Manager structuring safety metrics.</p>
          </div>

        </div>

        {/* BOTTOM ACTION */}
        <div className="mt-20 sm:mt-24 z-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-zinc-950 text-white text-xs font-extrabold px-6 py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-md"
          >
            Connect Directly
            <ArrowUpRight className="w-4 h-4 text-orange-500" />
          </a>
        </div>

      </div>
    </section>
  );
}