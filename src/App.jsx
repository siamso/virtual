import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import WorkFLowSection from "./components/WorkFlowSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <main className="px-6 pt-20 mx-auto">
        <HeroSection />
        <FeaturesSection />
        <WorkFLowSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
