import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // 1. Initial Page Load Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-anim", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  // 2. Desktop Dropdown Animation
  useEffect(() => {
    if (dropdownOpen && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: 10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "power2.out" }
      );
    }
  }, [dropdownOpen]);

  // 3. Mobile Menu Overlay Animation
  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const servicesItems = ["Transport & Travel", "Accommodation", "Laundry"];

  return (
    <nav ref={navRef} className="relative z-50 w-full bg-white font-sans text-zinc-900 tracking-tight">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12 lg:py-8">
        
        {/* Left Side: Brand Logo */}
        <div className="nav-anim text-xl font-extrabold tracking-tighter sm:text-2xl">
          ZAI<span className="text-orange-500"> Tours & Stays</span>
        </div>

        {/* Right Side: Desktop Navigation Links */}
        <div className="hidden items-center gap-x-8 text-sm font-semibold sm:flex md:gap-x-12 md:text-base">
          <a href="#home" className="nav-anim relative py-2 transition-colors hover:text-orange-500 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
            Home
          </a>

          {/* Services Dropdown Trigger */}
          <div 
            className="nav-anim relative py-2"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 transition-colors hover:text-orange-500 focus:outline-none">
              Services <HiChevronDown className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div 
                ref={dropdownRef} 
                className="absolute top-full left-1/2 w-52 -translate-x-1/2 rounded-xl bg-white p-2 shadow-xl border border-zinc-100"
              >
                {servicesItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-50 hover:text-orange-500"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#about" className="nav-anim relative py-2 transition-colors hover:text-orange-500 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
            About
          </a>
        </div>

        {/* Mobile Burger Button */}
        <div className="nav-anim sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-2xl transition-colors hover:text-orange-500 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Menu Overlay */}
      {isOpen && (
        <div 
          ref={mobileMenuRef} 
          className="absolute top-full left-0 w-full border-b border-zinc-100 bg-white px-6 py-6 shadow-xl sm:hidden"
        >
          <div className="flex flex-col gap-y-4 text-center font-bold text-zinc-800">
            <a 
              href="#home" 
              onClick={() => setIsOpen(false)} 
              className="py-2 text-base tracking-wide transition-colors active:text-orange-500"
            >
              Home
            </a>
            
            {/* Mobile Submenu List (Flatted for easy mobile parsing) */}
            <div className="border-y border-zinc-50 py-3">
              <span className="text-xs uppercase tracking-widest text-zinc-400">Our Services</span>
              <div className="mt-2 flex flex-col gap-y-3 text-sm font-medium text-zinc-600">
                {servicesItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    onClick={() => setIsOpen(false)}
                    className="transition-colors active:text-orange-500"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <a 
              href="#about" 
              onClick={() => setIsOpen(false)} 
              className="py-2 text-base tracking-wide transition-colors active:text-orange-500"
            >
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}