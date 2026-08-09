import { useEffect, useRef } from "react";
import { ArrowUpRight, Compass, ShieldCheck, Briefcase } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutFounder() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Direct, premium scroll entrance for the text elements
      gsap.fromTo(
        ".canvas-reveal",
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about-founder" 
      ref={containerRef} 
      className="bg-white text-zinc-900 py-24 px-6 md:px-16 lg:px-24 border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: THE DOMINANT VISUAL CANVAS (60% Desktop Width) */}
        <div className="lg:col-span-7 w-full aspect-[4/5] md:aspect-[3/4] max-h-[750px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-zinc-100 relative">
          <img 
            src="/path-to-your-image/Rashid_Shiundu.png" // Replace with your actual local file or hosted image link
            alt="Rashid Shiundu" 
            className="w-full h-full object-cover object-center contrast-[1.02]"
          />
          {/* Subtle gradient overlay to make the bottom left depth pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent" />
        </div>

        {/* RIGHT COLUMN: SPARSE, MINIMALIST METRICS (40% Desktop Width) */}
        <div className="lg:col-span-5 flex flex-col justify-center lg:pl-4">
          
          <div className="canvas-reveal text-xs font-mono tracking-widest text-orange-600 uppercase mb-2 font-bold">
            The Founder
          </div>
          
          <h2 className="canvas-reveal text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 mb-8">
            Rashid Shiundu
          </h2>

          {/* MINIMALIST EXPERIENCES (Strictly under 12 words per line) */}
          <div className="space-y-6 mb-10">
            
            {/* Experience Item 1 */}
            <div className="canvas-reveal flex items-center gap-4 pb-5 border-b border-zinc-100">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <p className="text-sm md:text-base font-bold text-zinc-800 tracking-tight">
                4 Years as an Airbnb Superhost managing premium stays.
              </p>
            </div>

            {/* Experience Item 2 */}
            <div className="canvas-reveal flex items-center gap-4 pb-5 border-b border-zinc-100">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center flex-shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <p className="text-sm md:text-base font-bold text-zinc-800 tracking-tight">
                3 Years as an experienced local coastal tour guide.
              </p>
            </div>

            {/* Experience Item 3 */}
            <div className="canvas-reveal flex items-center gap-4 pb-5 border-b border-zinc-100">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <p className="text-sm md:text-base font-bold text-zinc-800 tracking-tight">
                Certified Project Manager structuring absolute logistics safety.
              </p>
            </div>

          </div>

          {/* Quick Contact Pivot */}
          <div className="canvas-reveal">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-zinc-950 text-white text-xs font-extrabold px-6 py-4 rounded-xl hover:bg-orange-600 transition-colors duration-200 shadow-md"
            >
              Direct Consultation
              <ArrowUpRight className="w-4 h-4 text-orange-500" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}