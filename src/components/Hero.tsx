
import React from "react";
import { Button } from "@/components/ui/button";
import { Fish, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="relative z-10 section-container text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block animate-fade-in">
            <div className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full inline-flex items-center">
              <Fish className="h-5 w-5 mr-2 text-ocean-light" />
              <span className="text-sm font-medium">100% Sustainably Harvested</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in animate-delay-100">
            From Pond to Plate: Fresh, Sustainable Fish Delivered to You
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in animate-delay-200">
            Connecting you directly with local fish farmers for the freshest, most sustainable fish available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
            <Button className="btn-primary text-lg py-6" size="lg">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-secondary text-lg py-6 bg-white/20 backdrop-blur-lg hover:bg-white/30 border-white/40 text-white" size="lg">
              Track Fish Origin
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave SVG at bottom */}
      <div className="wave-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
