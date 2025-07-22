import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Heart, Send } from "lucide-react";

export default function RSVPForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    guestName: "",
    email: "",
    attendance: "",
    guestCount: "1",
    mealPreference: "",
    dietaryRestrictions: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.guestName || !formData.email || !formData.attendance) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, you would send this data to your backend
    console.log("RSVP Submission:", formData);
    
    toast({
      title: "RSVP Submitted!",
      description: "Thank you for your response. We can't wait to celebrate with you!",
    });

    // Reset form
    setFormData({
      guestName: "",
      email: "",
      attendance: "",
      guestCount: "1",
      mealPreference: "",
      dietaryRestrictions: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="rsvp" className="py-20 bg-blush">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            RSVP
          </h2>
          <p className="text-lg text-muted-foreground font-serif">
            Please respond by May 1st, 2024
          </p>
        </div>

        <Card className="soft-shadow border-2 border-rose-gold/20 bg-card/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center font-script text-3xl text-primary">
              We Hope to See You There!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Guest Name */}
              <div className="space-y-2">
                <Label htmlFor="guestName" className="font-serif">Guest Name(s) *</Label>
                <Input
                  id="guestName"
                  value={formData.guestName}
                  onChange={(e) => handleInputChange("guestName", e.target.value)}
                  placeholder="Full name(s) as they appear on invitation"
                  className="border-rose-gold/30 focus:border-primary"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="font-serif">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className="border-rose-gold/30 focus:border-primary"
                />
              </div>

              {/* Attendance */}
              <div className="space-y-4">
                <Label className="font-serif">Will you be attending? *</Label>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) => handleInputChange("attendance", value)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="font-serif">Yes, wouldn't miss it!</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="font-serif">Sorry, can't make it</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.attendance === "yes" && (
                <>
                  {/* Guest Count */}
                  <div className="space-y-2">
                    <Label htmlFor="guestCount" className="font-serif">Number of Guests</Label>
                    <Select value={formData.guestCount} onValueChange={(value) => handleInputChange("guestCount", value)}>
                      <SelectTrigger className="border-rose-gold/30 focus:border-primary">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Meal Preference */}
                  <div className="space-y-2">
                    <Label htmlFor="mealPreference" className="font-serif">Meal Preference</Label>
                    <Select value={formData.mealPreference} onValueChange={(value) => handleInputChange("mealPreference", value)}>
                      <SelectTrigger className="border-rose-gold/30 focus:border-primary">
                        <SelectValue placeholder="Select your preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beef">Herb-Crusted Beef Tenderloin</SelectItem>
                        <SelectItem value="chicken">Lemon Herb Roasted Chicken</SelectItem>
                        <SelectItem value="salmon">Pan-Seared Atlantic Salmon</SelectItem>
                        <SelectItem value="vegetarian">Vegetarian Pasta Primavera</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Dietary Restrictions */}
                  <div className="space-y-2">
                    <Label htmlFor="dietaryRestrictions" className="font-serif">Dietary Restrictions or Allergies</Label>
                    <Input
                      id="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                      placeholder="Please specify any dietary needs"
                      className="border-rose-gold/30 focus:border-primary"
                    />
                  </div>
                </>
              )}

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="font-serif">Special Message (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Share your well wishes or any special notes"
                  className="border-rose-gold/30 focus:border-primary min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full romantic-gradient text-white font-serif text-lg py-3 rounded-full hover:scale-105 transition-transform duration-300 romantic-shadow"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit RSVP
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}