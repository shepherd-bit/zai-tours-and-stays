import { Sparkles, Weight, Bed, Home, Scissors, Sparkle, Footprints, ArrowUpRight } from "lucide-react";

export default function LaundryServices() {
  const services = [
    {
      title: "Standard Laundry",
      subtitle: "By Weight",
      price: "KES 100–150 / kg",
      items: ["Shirts", "Jeans", "Dresses", "Towels", "Gym wear"],
      icon: <Weight className="w-5 h-5 text-zinc-600" />,
    },
    {
      title: "Bedding",
      subtitle: "Deep Cleaning",
      price: "KES 500–600 (duvets)",
      items: ["Duvets", "Blankets", "Sheets", "Pillowcases"],
      icon: <Bed className="w-5 h-5 text-zinc-600" />,
    },
    {
      title: "Household Textiles",
      subtitle: "Home Care",
      price: "Per item (varies)",
      items: ["Curtains", "Tablecloths", "Seat covers"],
      icon: <Home className="w-5 h-5 text-zinc-600" />,
    },
    {
      title: "Delicate & Specialty",
      subtitle: "Premium Care",
      price: "Varies by item",
      items: ["Wedding gowns", "Suits", "Choir outfits"],
      icon: <Scissors className="w-5 h-5 text-zinc-600" />,
    },
    {
      title: "Ironing Only",
      subtitle: "Crisp Finish",
      price: "KES 30–100 / item",
      items: ["Shirts", "Kanzus", "Trousers"],
      icon: <Sparkle className="w-5 h-5 text-zinc-600" />,
    },
    {
      title: "Shoe Cleaning",
      subtitle: "Restoration",
      price: "KES 100 / pair",
      items: ["All shoe types", "Sneakers", "Formal shoes"],
      icon: <Footprints className="w-5 h-5 text-zinc-600" />,
    },
  ];

  return (
    <section 
      id="laundry" 
      className="bg-white text-zinc-900 py-24 px-6 md:px-16 lg:px-24 border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: FIXED BRAND FRAME WITH IMAGE */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-2 text-orange-600 font-bold text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            Professional Garment Care
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
            ZAI Laundry Station
          </h2>
          <p className="text-zinc-50 text-sm md:text-base mt-4 mb-8 leading-relaxed max-w-md">
            Simple, straightforward pricing on premium cleaning options for all your personal items and textiles.
          </p>

          {/* Expanded Wash Station Image Container */}
          <div className="w-full h-72 md:h-96 rounded-3xl overflow-hidden mb-8 relative shadow-inner group">
            <img 
              src="./landry-machine.jpg" 
              alt="Washing Machine Station" 
              className="w-full h-full object-cover filter contrast-105 group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent" />
          </div>
          
          {/* HIGH CONTRAST BLACK INQUIRY CARD */}
          <div className="w-full bg-zinc-950 text-white p-6 rounded-3xl shadow-xl text-left border border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-600/20 to-transparent rounded-bl-full pointer-events-none" />
            <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">Need Custom Care?</h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              We arrange bulk cycles, scheduled pickups, and commercial hosting packages on request.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-white hover:text-orange-400 transition-colors"
            >
              Get Custom Quote <ArrowUpRight className="w-3.5 h-3.5 text-orange-500" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: PERMANENTLY UNROLLED SERVICE LIST */}
        <div className="lg:col-span-7 w-full flex flex-col gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="border border-zinc-200/80 rounded-2xl bg-white p-5 md:p-6 shadow-[0_2px_15px_rgba(0,0,0,0.005)] hover:border-zinc-300 transition-all duration-200"
            >
              {/* Top Meta Line */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-600 flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-zinc-950 tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
                      {service.subtitle}
                    </span>
                  </div>
                </div>
                
                {/* Fixed Clean Rate Display */}
                <div className="sm:text-right pl-1 sm:pl-0">
                  <span className="font-mono font-bold text-sm md:text-base text-orange-600">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Explicit Content Frame (No Dropdowns) */}
              <div className="pt-3 border-t border-zinc-100">
                <div className="flex flex-wrap gap-1.5">
                  {service.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] bg-zinc-50 border border-zinc-200/50 text-zinc-600 px-2.5 py-1 rounded-lg font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}