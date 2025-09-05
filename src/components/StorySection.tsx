import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function StorySection() {
  return (
    <section id="story" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Our Love Story
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <Card className="soft-shadow border-2 border-rose-gold/20 bg-card/95">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-primary" />
                  <h3 className="font-script text-2xl text-primary">How We Met</h3>
                </div>
                <p className="font-serif text-muted-foreground leading-relaxed mb-4">
                 Mwape’s Account: The year was 2014 and BC screening was finally here, Trevor
                  (My Best man) and I go to the Sport Hall for screening. There we meet a gang of people he went to high school
                   with AKA The Cool Kids From Mpelembe. He introduces me to everyone and there she was, Ruth Kaacha
                  ( Alexa play Can’t help falling in Love by Elvis Presley), who I could tell had no idea she was going to be my wife.
                </p>
                <p className="font-serif text-muted-foreground leading-relaxed">
                 Ruth’s Account:
Let’s just say I neither confirm nor deny his account. However, something I do say for certain is that I am now a believer in coincidences ,
 random romantic gestures and meet cutes( the ladies will get this lol).
                </p>
              </CardContent>
            </Card>

            <Card className="soft-shadow border-2 border-rose-gold/20 bg-card/95">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-primary" />
                  <h3 className="font-script text-2xl text-primary">The Proposal</h3>
                </div>
                <p className="font-serif text-muted-foreground leading-relaxed mb-4">
                  The year was 2024, we’re now by some weird coincidence both working Kalumbila. According to some,
                   I followed her there… I neither deny nor accept the allegation.
Anyway, we go on a trip to down south for a weekend, and that Sunday afternoon we went on a boat cruise. 
Whilst on the cruise we experienced some engine trouble and had to park on a random Island between Zambia and
 Zimbabwe along the mighty Zambezi River. To pass time as the boat got worked on we decided to take a walk on the island. 
 As we took our walk we stumbled upon some words in the sand that read “Will You Marry Me”,
  at this very moment two random things happened spontaneously, out of nowhere music started playing 
  and I suddenly tripped and landed on one knee. Conveniently, I happened to have a box with a ring in my pocket… 
  and I felt so inspired I started 
to give a speech as I removed this ring out of the box and the rest of it as they say is history.
                </p>
                <p className="font-serif text-muted-foreground leading-relaxed">
                 
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Background Image/Decoration */}
          <div className="relative">
            <div className="aspect-square rounded-full subtle-gradient p-8 flex items-center justify-center">
              <div className="aspect-square rounded-full bg-white/10 backdrop-blur-sm border-2 border-rose-gold/30 flex items-center justify-center">
                <Heart className="w-24 h-24 text-primary/60" />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-rose-gold/20"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-primary/10"></div>
            <div className="absolute top-1/3 -right-8 w-6 h-6 rounded-full bg-accent/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}