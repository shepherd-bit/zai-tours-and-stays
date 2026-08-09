import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-zinc-400 pt-20 pb-8 border-t border-zinc-900 select-none">
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
        
        {/* TOP PANEL: BRANDING & LINK COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          
          {/* Column 1: Brand Identifier */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xl font-black tracking-tighter text-white uppercase block mb-4">
                ZAI<span className="text-[#D98353]">.</span>
              </span>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
                Synchronized transit networks and premium minimalist accommodations across the Kenyan Coast. Delivering flawless, stress-free travel frameworks.
              </p>
            </div>
          </div>

          {/* Column 2: Service Verticals */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase mb-2">
              Services
            </span>
            {[
              "Coastal Transit Coordination",
              "Bespoke Tour Routes",
              "Minimalist Stays",
              "Airport Fleet Pickup",
              "Corporate Logistical Gateways"
            ].map((link, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="text-xs text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group w-fit"
              >
                {link}
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            ))}
          </div>

          {/* Column 3: Contact & Base Operations */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase mb-1">
              Contact & Support
            </span>
            <div className="flex flex-col gap-3 text-xs text-zinc-400">
              <a 
                href="mailto:hello@zaitoursandstays.com" 
                className="flex items-center gap-2.5 hover:text-white transition-colors w-fit"
              >
                <Mail className="w-4 h-4 text-[#D98353]/80" />
                hello@zaitoursandstays.com
              </a>
              <a 
                href="https://wa.me/254700000000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 hover:text-white transition-colors w-fit"
              >
                <Phone className="w-4 h-4 text-[#D98353]/80" />
                +254745460891 (WhatsApp)
              </a>
              <div className="flex items-start gap-2.5 text-zinc-500 cursor-default">
                <MapPin className="w-4 h-4 text-[#D98353]/80 mt-0.5 flex-shrink-0" />
                <span>Kenyan Coast Operations Office,<br />Mombasa - Malindi Highway</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM PANEL: COPYRIGHT & BACK TO TOP */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] font-mono text-zinc-600 tracking-wide text-center sm:text-left">
            &copy; {currentYear} ZAI Tours & Stays Limited. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-[11px] font-mono">
            <a href="#" className="text-zinc-600 hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400 transition-colors">Terms of Fleet Service</a>
            <button 
              onClick={handleScrollToTop}
              className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1 cursor-pointer group font-bold"
            >
              Top 
              <span className="group-hover:-translate-y-0.5 transition-transform duration-200">↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}