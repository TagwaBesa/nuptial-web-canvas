import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EventDetails from "@/components/EventDetails";
import RSVPForm from "@/components/RSVPForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <EventDetails />
        <RSVPForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
