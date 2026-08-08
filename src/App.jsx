import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Transport from "./components/Transport";
import Accommodation from "./components/Accommodation";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import AboutFounder from "./components/AboutFounder";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans text-zinc-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Transport />
        <Accommodation />
        <CallToAction />
        <Testimonials />
        <AboutFounder />
      </main>
      <Footer />
    </div>
  );
}