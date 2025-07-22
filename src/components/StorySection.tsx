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
                  It was a rainy Tuesday morning at Cafe Luna when Ruth accidentally spilled her coffee 
                  on Mwape's laptop. What started as an embarrassing moment turned into hours of 
                  conversation and laughter over shared stories and dreams.
                </p>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  That coffee spill was the best accident that ever happened to us.
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
                  Three years later, Mwape took Ruth back to that same cafe. As they sat at their 
                  favorite corner table, he got down on one knee and asked her to be his forever 
                  coffee companion.
                </p>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  Of course, she said yes! (And promised to be more careful with her coffee.)
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