import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BridalParty() {
  const bridesmaids = [
    {
      name: "Kondwani",
      role: "Maid of Honor",
      description: "Friend turned sister- Koko's warmth and happiness always prompt a smile and a feeling of home."
    },
    {
      name: "Munyama",
      role: "Bridesmaid",
      description: "Cousin to the bride…a.k.a. the one she calls when she needs a last-minute partner in crime and zero questions asked."
    },
    {
      name: "Maria",
      role: "Bridesmaid",
      description: "Bridesmaid for a day, Ruth’s roomy for life " 
    },
    {
      name: "Kunda",
      role: "Bridesmaid",
      description: "Ru’s uni sister now bridesmaid. Soft spoken but don’t let that fool you… I bring the vibes when it counts"
    },
     {
      name: "Vanessa",
      role: "Bridesmaid",
      description: "A blessed friend with heart made to love. Supported this union from day one and happy to see the love birds become one. She is a bougie, beautiful hopeless romantic "

    }
  ];

  const groomsmen = [
    {
      name: "Trevor",
      role: "Best Man",
      description: "Friend by choice, Brother by evolution. Willingness to wake up at 02 and drive 150kms to pick up a phone box"
    },
    {
      name: "Dalitso",
      role: "Groomsman",
      description: "From mild acquaintances to insperable mischief makers to mature brothers united by a strong work eithic and drive for shared success."
    },
    {
      name: "Kenny",
      role: "Groomsman",
      description: "I joined the class on a Thursday feeling left out, until Mwape walked up and said, ‘Hi, I’m Mwape. What’s your name?’ From that moment, I knew I’d gained a brother."
    },
    {
      name: "Aston",
      role: "Groomsman",
      description: "God gave me an extra brother"
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
