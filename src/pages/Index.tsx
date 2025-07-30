import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CountdownTimer from "@/components/CountdownTimer";
import EventDetails from "@/components/EventDetails";
import BridalParty from "@/components/BridalParty";
// import RSVPForm from "@/components/RSVPForm";
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
        <StorySection />
        <CountdownTimer />
        <EventDetails />
        <BridalParty />
        {/* <RSVPForm /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
