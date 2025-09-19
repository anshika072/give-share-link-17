import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-donation.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-glow rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-stats-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium mb-6 border border-white/20 shadow-glow-primary">
            💙 Connecting Communities
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="flex flex-col">
            <span className="text-white">Connecting Hearts,</span>
            <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent animate-pulse-glow">
              Sharing Resources
            </span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Bridge the gap between those who need help and those who can provide it. 
          Connect with NGOs and individuals to share resources and make a difference.
        </p>
        
        <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button asChild size="lg" className="bg-button-gradient hover:opacity-90 hover:scale-105 text-lg px-8 py-6 rounded-full shadow-glow-primary transition-all duration-300">
            <Link to="/signup">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;