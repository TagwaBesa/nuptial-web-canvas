import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BridalParty() {
  const bridesmaids = [
    {
      name: "Munyama",
      role: "Maid of Honor",
      description: "The bride’s right hand and closest confidante, Munyama brings grace, laughter, and unwavering support."
    },
    {
      name: "Vanessa",
      role: "Bridesmaid",
      description: "A lifelong friend with a heart of gold, Vanessa lights up every room with her warmth and spirit."
    },
    {
      name: "Kondwani",
      role: "Bridesmaid",
      description: "Always ready with a joke or a hug, Kondwani has been a steady and joyful presence in the bride's life."
    },
    {
      name: "Kunda",
      role: "Bridesmaid",
      description: "The calm in the storm — Kunda’s kindness and creativity have shaped countless memories over the years."
    }
  ];

  const groomsmen = [
    {
      name: "Kenny",
      role: "Best Man",
      description: "A brother in every way that matters — Kenny has been the groom’s go-to for advice, laughs, and loyalty."
    },
    {
      name: "Aston",
      role: "Groomsman",
      description: "With a spirit of adventure and a deep bond, Aston has been by the groom’s side through thick and thin."
    },
    {
      name: "Trevor",
      role: "Groomsman",
      description: "Known for his wit and big heart, Trevor brings a perfect mix of fun and reliability to the group."
    },
    {
      name: "Dalitso",
      role: "Groomsman",
      description: "A quiet force of strength and wisdom, Dalitso has been a trusted friend through every chapter."
    },
    {
      name: "Besa",
      role: "Groomsman",
      description: "Family by name, brother by choice — Besa's humor and loyalty make him unforgettable."
    }
  ];

  return (
    <section id="bridal-party" className="py-20 subtle-gradient">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Our Bridal Party
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            The special people who will stand by our side on our big day
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bridesmaids */}
          <div>
            <div className="text-center mb-8">
              <h3 className="font-script text-3xl text-primary mb-2">Bridesmaids</h3>
              <div className="w-16 h-0.5 bg-rose-gold mx-auto"></div>
            </div>
            <div className="space-y-6">
              {bridesmaids.map((person, index) => (
                <Card key={index} className="soft-shadow border-2 border-rose-gold/20 bg-card/95">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-semibold text-foreground mb-1">
                          {person.name}
                        </h4>
                        <p className="text-sm text-primary font-serif italic mb-2">
                          {person.role}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {person.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Groomsmen */}
          <div>
            <div className="text-center mb-8">
              <h3 className="font-script text-3xl text-primary mb-2">Groomsmen</h3>
              <div className="w-16 h-0.5 bg-rose-gold mx-auto"></div>
            </div>
            <div className="space-y-6">
              {groomsmen.map((person, index) => (
                <Card key={index} className="soft-shadow border-2 border-rose-gold/20 bg-card/95">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-semibold text-foreground mb-1">
                          {person.name}
                        </h4>
                        <p className="text-sm text-primary font-serif italic mb-2">
                          {person.role}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {person.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
