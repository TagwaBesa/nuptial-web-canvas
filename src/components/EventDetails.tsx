import { Clock, MapPin, Shirt, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EventDetails() {
  return (
    <section id="details" className="py-20 subtle-gradient">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Event Details
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            All the important information you need for our special day
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Ceremony */}
          <Card className="soft-shadow border-2 border-rose-gold/20 bg-card/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="font-script text-3xl text-primary mb-2">Ceremony</h3>
                <div className="w-16 h-0.5 bg-rose-gold mx-auto"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-serif">4:00 PM</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-serif font-semibold">Rosewood Manor Gardens</p>
                    <p className="text-muted-foreground text-sm">
                      123 Garden Lane<br />
                      Riverside, CA 92501
                    </p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://maps.google.com/?q=Rosewood+Manor+Gardens+Riverside+CA', '_blank')}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Reception */}
          <Card className="soft-shadow border-2 border-rose-gold/20 bg-card/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="font-script text-3xl text-primary mb-2">Reception</h3>
                <div className="w-16 h-0.5 bg-rose-gold mx-auto"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-serif">6:00 PM - 11:00 PM</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-serif font-semibold">The Grand Ballroom</p>
                    <p className="text-muted-foreground text-sm">
                      456 Celebration Blvd<br />
                      Riverside, CA 92501
                    </p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://maps.google.com/?q=The+Grand+Ballroom+Riverside+CA', '_blank')}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dress Code */}
        <Card className="soft-shadow border-2 border-rose-gold/20 bg-card/95 backdrop-blur-sm max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <Shirt className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-script text-3xl text-primary mb-2">Dress Code</h3>
              <div className="w-16 h-0.5 bg-rose-gold mx-auto"></div>
            </div>
            <p className="font-serif text-lg mb-4">Cocktail Attire</p>
            <p className="text-muted-foreground">
              Semi-formal attire is requested. Think wedding guest elegant! 
              Ladies: cocktail dresses or dressy separates. 
              Gentlemen: suit and tie or dress shirt with dress pants.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}