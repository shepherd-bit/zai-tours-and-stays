import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Transport from "./components/Transport";
import Accommodation from "./components/Accommodation";
import Laundry from "./components/Laundry";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import AboutFounder from "./components/AboutFounder";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

export default function App() {
  return (
    <div className="min-h-screen font-sans text-zinc-900 antialiased relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Transport />
        <Accommodation />
        <Laundry />
        <CallToAction />
        <Testimonials />
        <AboutFounder />
      </main>
      <Footer />

      {/* Global floating action layer */}
      <FloatingContact />
    </div>
  );
}