import { useEffect, useRef } from "react";
import { 
  Compass, 
  MessageSquare, 
  ShieldCheck, 
  RefreshCw, 
  PhoneCall, 
  Video, 
  Send,
  Wifi,
  Signal,
  Battery
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Layout elements once on scroll
      gsap.fromTo(
        ".phone-wrapper",
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out", scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
          toggleActions: "play none none none"
        }}
      );

      gsap.fromTo(
        ".step-node",
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.15, ease: "power2.out", scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
          toggleActions: "play none none none"
        }}
      );

      // --- INFINITE CHAT TIMELINE LOOP ---
      const chatTl = gsap.timeline({
        repeat: -1,
        repeatDelay: 3.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        }
      });

      const leftTyping = document.querySelector(".typing-left");
      const rightTyping = document.querySelector(".typing-right");

      const simulateTyping = (side, show = true) => {
        const indicator = side === "left" ? leftTyping : rightTyping;
        const dotsSelector = side === "left" ? ".dot-l" : ".dot-r";

        if (show) {
          chatTl.set(indicator, { display: "flex", opacity: 1 })
            .fromTo(dotsSelector, 
              { y: 0 }, 
              { y: -4, duration: 0.25, stagger: 0.08, repeat: 2, yoyo: true, ease: "power1.inOut" }
            );
        } else {
          chatTl.set(indicator, { display: "none", opacity: 0 });
        }
      };

      // RESET STATE: Leave Message 1 visible, hide messages 2-5 at loop reset
      chatTl.set(["#msg-2", "#msg-3", "#msg-4", "#msg-5"], { display: "none", opacity: 0, y: 8 });
      chatTl.to({}, { duration: 1.2 }); 

      // Message 2: ZAI Homes (White - Left Side)
      simulateTyping("left", true);
      simulateTyping("left", false);
      chatTl.to("#msg-2", { display: "block", opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });

      // Message 3: ZAI Homes (White - Left Side)
      simulateTyping("left", true);
      simulateTyping("left", false);
      chatTl.to("#msg-3", { display: "block", opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });

      // Message 4: Customer (Green - Right Side)
      simulateTyping("right", true);
      simulateTyping("right", false);
      chatTl.to("#msg-4", { display: "block", opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });

      // Message 5: ZAI Homes (White - Left Side)
      simulateTyping("left", true);
      simulateTyping("left", false);
      chatTl.to("#msg-5", { display: "block", opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="contact" 
      ref={containerRef} 
      className="bg-white text-zinc-900 py-24 px-6 md:px-16 lg:px-24 border-t border-zinc-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT PANEL: HIGH-FIDELITY SIMULATED WHATSAPP */}
        <div className="lg:col-span-6 flex justify-center w-full order-2 lg:order-1">
          <div className="phone-wrapper w-full max-w-[365px] aspect-[9/18.5] bg-zinc-950 rounded-[3.2rem] p-3.5 shadow-2xl border-4 border-zinc-900 relative">
            
            {/* Phone Screen Canvas */}
            <div className="w-full h-full bg-[#efeae2] rounded-[2.6rem] overflow-hidden flex flex-col relative font-sans">
              
              {/* Realistic Mobile Status Bar */}
              <div className="bg-[#005e54] text-white/90 px-5 pt-2 pb-1 flex items-center justify-between text-[10px] font-medium tracking-tight select-none z-20">
                <span>20:53</span>
                <div className="flex items-center gap-1.5">
                  <Signal className="w-3 h-3 stroke-[2.5]" />
                  <Wifi className="w-3 h-3 stroke-[2.5]" />
                  <Battery className="w-3.5 h-3.5 rotate-0 stroke-[2]" />
                </div>
              </div>

              {/* WhatsApp Header Profile Area */}
              <div className="bg-[#005e54] text-white p-4 pt-2 flex items-center gap-3 shadow-md z-10">
                <div className="w-8 h-8 rounded-full bg-teal-700/60 border border-teal-600 flex items-center justify-center font-bold text-xs uppercase tracking-tight shadow-inner">
                  ZH
                </div>
                <div>
                  <h3 className="text-xs font-bold leading-tight tracking-wide">ZAI Homes</h3>
                  <span className="text-[9px] text-teal-200 font-medium tracking-wide">online</span>
                </div>
                <div className="ml-auto flex gap-4 text-teal-100 items-center">
                  <Video className="w-4 h-4 cursor-pointer opacity-90 hover:opacity-100" />
                  <PhoneCall className="w-3.5 h-3.5 cursor-pointer opacity-90 hover:opacity-100" />
                </div>
              </div>

              {/* Chat Window Viewport */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 flex flex-col justify-end pb-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-contain">
                
                {/* Message 1: Customer (Green - Right Side) */}
                <div id="msg-1" className="max-w-[85%] bg-[#d9fdd3] text-zinc-800 p-2.5 rounded-l-xl rounded-br-xl text-xs shadow-sm self-end relative">
                  <p className="leading-relaxed">Hello, are there any transport services available now for a pickup?</p>
                  <div className="flex items-center justify-end gap-0.5 mt-1">
                    <span className="text-[8px] text-zinc-400">20:53</span>
                    <div className="flex ml-1 text-[#34b7f1]">
                      <span className="text-[9px] font-bold leading-none -mr-1">✓</span>
                      <span className="text-[9px] font-bold leading-none">✓</span>
                    </div>
                  </div>
                </div>

                {/* Message 2: ZAI Homes (White - Left Side) */}
                <div id="msg-2" className="hidden opacity-0 translate-y-2 max-w-[85%] bg-white text-zinc-800 p-2.5 rounded-r-xl rounded-bl-xl text-xs shadow-sm self-start relative">
                  <p className="leading-relaxed">Thanks for reaching out!</p>
                  <span className="block text-[8px] text-zinc-400 text-right mt-1">20:53</span>
                </div>

                {/* Message 3: ZAI Homes (White - Left Side) */}
                <div id="msg-3" className="hidden opacity-0 translate-y-2 max-w-[85%] bg-white text-zinc-800 p-2.5 rounded-r-xl rounded-bl-xl text-xs shadow-sm self-start relative">
                  <p className="leading-relaxed">Yes, we have a driver ready for pickup. Please describe your location, or pinned Google map location.</p>
                  <span className="block text-[8px] text-zinc-400 text-right mt-1">20:54</span>
                </div>

                {/* Message 4: Customer (Green - Right Side) */}
                <div id="msg-4" className="hidden opacity-0 translate-y-2 max-w-[85%] bg-[#d9fdd3] text-zinc-800 p-2.5 rounded-l-xl rounded-br-xl text-xs shadow-sm self-end relative">
                  <p className="leading-relaxed">I am at the main Railway terminus, Mombasa.</p>
                  <div className="flex items-center justify-end gap-0.5 mt-1">
                    <span className="text-[8px] text-zinc-400">20:54</span>
                    <div className="flex ml-1 text-[#34b7f1]">
                      <span className="text-[9px] font-bold leading-none -mr-1">✓</span>
                      <span className="text-[9px] font-bold leading-none">✓</span>
                    </div>
                  </div>
                </div>

                {/* Message 5: ZAI Homes (White - Left Side) */}
                <div id="msg-5" className="hidden opacity-0 translate-y-2 max-w-[85%] bg-white text-zinc-800 p-2.5 rounded-r-xl rounded-bl-xl text-xs shadow-sm self-start relative">
                  <p className="leading-relaxed font-bold text-zinc-900">En Route, check back in 3 minutes.</p>
                  <span className="block text-[8px] text-zinc-400 text-right mt-1">20:54</span>
                </div>

                {/* Left Side 3-Dot Typing Box */}
                <div className="typing-left hidden items-center justify-center bg-white px-3 py-2.5 rounded-xl shadow-sm self-start min-w-[48px] border border-zinc-200/50">
                  <div className="flex gap-1 items-center">
                    <span className="dot-l w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
                    <span className="dot-l w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
                    <span className="dot-l w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
                  </div>
                </div>

                {/* Right Side 3-Dot Typing Box */}
                <div className="typing-right hidden items-center justify-center bg-[#d9fdd3] px-3 py-2.5 rounded-xl shadow-sm self-end min-w-[48px]">
                  <div className="flex gap-1 items-center">
                    <span className="dot-r w-1.5 h-1.5 bg-teal-600/60 rounded-full"></span>
                    <span className="dot-r w-1.5 h-1.5 bg-teal-600/60 rounded-full"></span>
                    <span className="dot-r w-1.5 h-1.5 bg-teal-600/60 rounded-full"></span>
                  </div>
                </div>

              </div>

              {/* Input Action Bar Shell */}
              <div className="bg-[#f0f2f5] p-2.5 flex items-center gap-2 border-t border-zinc-200">
                <div className="flex-1 bg-white rounded-xl px-3 py-2 text-[11px] text-zinc-400 shadow-inner select-none">
                  Type a message
                </div>
                <div className="w-8 h-8 rounded-full bg-[#00a884] text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-[#008f72] transition-colors">
                  <Send className="w-3.5 h-3.5 pl-0.5" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT PANEL: VERTICAL GUIDELINE NODES (Pushed right with breathing room) */}
        <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2 lg:pl-8">
          <div className="text-xs font-mono tracking-widest text-orange-600 uppercase mb-3 font-bold">
            Workflow Process
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-950 mb-10 leading-tight">
            Securing Stays & Transit Has Never Been Quicker
          </h2>

          <div className="relative border-l-2 border-zinc-100 ml-4 pl-8 space-y-10">
            
            <div className="step-node relative">
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-700 z-10 shadow-sm">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-zinc-950 tracking-tight">Browse For a Desired Service</h4>
              <p className="text-xs text-zinc-500 mt-1">Select from our fleet logistics or local accommodation layouts.</p>
            </div>

            <div className="step-node relative">
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 z-10 shadow-sm">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-zinc-950 tracking-tight">Make Contact Through Call or WhatsApp</h4>
              <p className="text-xs text-zinc-500 mt-1">Initiate safe dialogue via automated chat or place a direct operational phone call.</p>
            </div>

            <div className="step-node relative">
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-700 z-10 shadow-sm">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-zinc-950 tracking-tight">Secure Booking</h4>
              <p className="text-xs text-zinc-500 mt-1">Receive direct framework confirmation logs, precise coordinates, and transaction invoicing securely.</p>
            </div>

            <div className="step-node relative">
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-700 z-10 shadow-sm">
                <RefreshCw className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-zinc-950 tracking-tight">Constantly Check-in for Progress</h4>
                <span className="text-[9px] font-mono font-bold tracking-wider bg-zinc-100 text-zinc-600 px-1.5 py-0.5 rounded uppercase">Optional</span>
              </div>
              <p className="text-xs text-zinc-500 mt-1">Track upcoming scheduled transit updates or active dynamic room cleaning benchmarks.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}