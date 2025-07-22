import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <Heart className="w-8 h-8 mx-auto mb-4 text-elegant-gold" />
          <h3 className="font-script text-3xl mb-2">Sarah & Michael</h3>
          <p className="font-serif text-lg opacity-90">June 15th, 2024</p>
        </div>
        
        <div className="space-y-2 text-sm opacity-75">
          <p>Thank you for being part of our love story</p>
          <p>We can't wait to celebrate with you!</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-primary-foreground/20">
          <p className="text-xs opacity-60">
            © 2024 Sarah & Michael Wedding. Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}