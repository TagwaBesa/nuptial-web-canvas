import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 subtle-gradient">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Questions?
          </h2>
          <p className="text-lg text-muted-foreground font-serif">
            We're here to help make your experience wonderful
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="soft-shadow border-2 border-rose-gold/20 bg-card/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="font-script text-3xl text-primary mb-6 text-center">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-serif font-semibold">Call or Text</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-serif font-semibold">Email Us</p>
                    <p className="text-muted-foreground">sarah.michael.wedding@gmail.com</p>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('tel:+15551234567', '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('mailto:sarah.michael.wedding@gmail.com', '_self')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Wedding Party Contact */}
          <Card className="soft-shadow border-2 border-rose-gold/20 bg-card/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="font-script text-3xl text-primary mb-6 text-center">Wedding Party</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif font-semibold text-lg mb-3 text-center">Maid of Honor</h4>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-serif font-semibold">Emma Johnson</p>
                      <p className="text-muted-foreground">(555) 987-6543</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif font-semibold text-lg mb-3 text-center">Best Man</h4>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-serif font-semibold">James Miller</p>
                      <p className="text-muted-foreground">(555) 456-7890</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Feel free to reach out to our wedding party for any questions about accommodations, 
                    local recommendations, or other wedding weekend activities!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="mt-8 soft-shadow border-2 border-rose-gold/20 bg-card/95 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h3 className="font-script text-2xl text-primary mb-4">Wedding Coordinator</h3>
            <p className="font-serif mb-2">Perfect Day Events - Jennifer Williams</p>
            <p className="text-muted-foreground mb-4">(555) 111-2222 | jennifer@perfectdayevents.com</p>
            <p className="text-sm text-muted-foreground">
              For any day-of wedding questions or emergencies, please contact our wedding coordinator directly.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}