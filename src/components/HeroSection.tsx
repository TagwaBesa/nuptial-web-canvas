import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/wedding-hero.jpg";

export default function HeroSection() {
  const scrollToRSVP = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Couple Names */}
          <div>
            <h1 className="font-script text-6xl md:text-8xl mb-4 text-elegant-gold">
              Sarah & Michael
            </h1>
            <p className="text-xl md:text-2xl font-serif italic opacity-90">
              are getting married
            </p>
          </div>

          {/* Wedding Date & Location */}
          <div className="space-y-4 bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="flex items-center justify-center gap-3 text-lg md:text-xl">
              <Calendar className="w-6 h-6 text-elegant-gold" />
              <span className="font-serif">Friday, September 13th, 2024</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg md:text-xl">
              <MapPin className="w-6 h-6 text-elegant-gold" />
              <span className="font-serif">Rosewood Manor Gardens</span>
            </div>
          </div>

          {/* Welcome Message */}
          <p className="text-lg md:text-xl font-serif max-w-2xl mx-auto leading-relaxed opacity-95">
            Join us as we celebrate our love story and begin our journey together as husband and wife. 
            Your presence would make our special day complete.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={scrollToRSVP}
            size="lg"
            className="romantic-gradient text-white font-serif text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 romantic-shadow"
          >
            RSVP Now
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}