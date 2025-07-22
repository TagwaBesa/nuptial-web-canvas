import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BridalParty() {
  const bridesmaids = [
    {
      name: "Emma Johnson",
      role: "Maid of Honor",
      description: "Ruth's sister and best friend since childhood. Emma has been there through every milestone and adventure."
    },
    {
      name: "Lisa Chen",
      role: "Bridesmaid",
      description: "College roommate turned lifelong friend. Lisa and Ruth bonded over late-night study sessions and coffee runs."
    },
    {
      name: "Rachel Martinez",
      role: "Bridesmaid", 
      description: "Work colleague who became family. Rachel and Ruth share a love for hiking and trying new restaurants."
    }
  ];

  const groomsmen = [
    {
      name: "David Thompson",
      role: "Best Man",
      description: "Mwape's brother and partner in crime. David has been Mwape's biggest supporter and closest confidant."
    },
    {
      name: "James Wilson",
      role: "Groomsman",
      description: "Childhood friend since kindergarten. James and Mwape have shared countless adventures and inside jokes."
    },
    {
      name: "Alex Rodriguez",
      role: "Groomsman",
      description: "College buddy and basketball teammate. Alex brings laughter and energy to every gathering."
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