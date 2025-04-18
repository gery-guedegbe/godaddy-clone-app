import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import DomainSection from "./sections/DomainSection/DomainSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import ServiceSection from "./sections/ServiceSection/ServiceSection";
import TestimonialSection from "./sections/TestimonialSection/TestimonialSection";

const App = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col">
      <NavBar />
      <HeroSection />
      <DomainSection />
      <ServiceSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default App;
