import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const compRef = useRef(null);
  const carouselRef = useRef(null);

  const images = [
    "/hero-gallery/pic1.jpg",
    "/hero-gallery/pic2.jpg",
    "/hero-gallery/pic3.jpg",
    "/hero-gallery/pic4.jpg",
    "/hero-gallery/pic5.jpg",
    "/hero-gallery/pic6.jpg",
    "/hero-gallery/pic7.jpg",
    "/hero-gallery/pic8.jpg",
    "/hero-gallery/pic9.jpg",
    "/hero-gallery/pic10.jpg"
  ];
  
  // Adjusted for aggressive downscaling: smaller widths on mobile, scaling up on tablets/desktops
  const widths = [
    "w-24 sm:w-48 aspect-square",  // Mobile width (w-24), Desktop width (sm:w-48)
    "w-32 sm:w-56 aspect-[4/3]",   
    "w-20 sm:w-40 aspect-[3/4]",   
    "w-28 sm:w-52 aspect-video"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Typewriter Animation
      gsap.to(".typewriter-target", {
        text: "Let's Create Memorable Journey...",
        duration: 3.5,
        delay: 0.5,
        ease: "none",
      });

      // Staggered fade up
      gsap.from(".hero-fade", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        stagger: 0.25,
        ease: "power3.out",
        delay: 1.5,
      });

      // Horizontal Scroll
      gsap.to(carouselRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 125,
        repeat: -1,
      });
    }, compRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={compRef}
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between py-12 lg:py-24 bg-zinc-950 font-sans text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./hero-1.jpg"
          alt="Kenyan Coast Background"
          className="w-full h-full object-cover brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950/50"></div>
      </div>

      {/* TOP CONTAINER: Centered Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center px-6 flex-grow flex flex-col justify-center items-center">
        <h1 className="min-h-[110px] xs:min-h-[130px] sm:min-h-[180px] text-3xl font-extrabold tracking-tight xs:text-4xl sm:text-6xl md:text-7xl leading-[1.2] xs:leading-[1.15]">
          <span className="typewriter-target border-b-4 border-orange-500 pb-2 inline-block"></span>
        </h1>

        <p className="hero-fade mt-6 lg:mt-8 text-sm sm:text-lg md:text-xl max-w-2xl text-zinc-300 leading-relaxed">
          Explore pristine white sands, rich swahili heritage, and hidden coastal paradises tailored beautifully to your pace.
        </p>
      </div>

      {/* MIDDLE CONTAINER: Responsive Downscaling Horizontal Carousel */}
      <div className="hero-fade relative z-10 w-full overflow-hidden mt-8 lg:mt-12 py-4">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none"></div>

        {/* Changed gap-6 to gap-4 on mobile so the smaller images stay tucked neatly together */}
        <div ref={carouselRef} className="flex gap-4 sm:gap-6 w-max whitespace-nowrap px-4">
          {[...images, ...images].map((src, idx) => {
            const widthClass = widths[idx % widths.length];
            return (
              <div
                key={`img-${idx}`}
                className={`flex-shrink-0 ${widthClass} rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-800 shadow-lg`}
              >
                <img
                  src={src}
                  alt="Coastal Getaway Spot"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM CONTAINER: Floating Offer Card */}
      <div className="hero-fade relative z-10 mx-auto mt-8 lg:mt-12 px-6 w-full max-w-md flex justify-center">
        <div className="w-full rounded-2xl border border-white/10 bg-zinc-900/80 p-5 text-center backdrop-blur-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] sm:p-6">
          <h3 className="text-sm font-bold text-white sm:text-lg">
            On a budget? <span className="text-orange-500">We Make Things Happen!</span>
          </h3>
          <p className="mt-2 text-[10px] font-semibold tracking-widest uppercase text-zinc-400 sm:text-xs">
            From as low as <span className="text-sm font-extrabold text-orange-500 sm:text-base">KSH. 2,000</span>
          </p>
        </div>
      </div>
    </section>
  );
}