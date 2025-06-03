
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Globe, Plane } from "lucide-react";

interface HeroSectionProps {
  onStartPlanning: () => void;
}

const HeroSection = ({ onStartPlanning }: HeroSectionProps) => {
  const [currentDestination, setCurrentDestination] = useState(0);
  const destinations = ["Paris", "Tokyo", "Bali", "Iceland", "Morocco", "Peru"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden px-4 md:px-8 pt-20 pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Plane className="absolute top-20 left-10 w-6 h-6 text-cyan-400 opacity-30 animate-float" />
        <Globe className="absolute top-40 right-20 w-8 h-8 text-purple-400 opacity-30 animate-float delay-1000" />
        <Sparkles className="absolute bottom-40 left-20 w-5 h-5 text-pink-400 opacity-30 animate-float delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <Badge variant="outline" className="mb-6 px-4 py-2 text-cyan-400 border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm">
          ✨ The Future of Travel Planning
        </Badge>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          Your Personal
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            AI Travel
          </span>
          <br />
          Concierge
        </h1>
        
        <div className="text-xl md:text-2xl text-slate-300 mb-4 h-8">
          Planning your dream trip to{" "}
          <span className="text-cyan-400 font-semibold transition-all duration-500">
            {destinations[currentDestination]}
          </span>
        </div>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          From dream to departure — fully handled. Replace travel agents, booking sites, and stress 
          with one intelligent AI that plans, books, and guides your perfect journey.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={onStartPlanning}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Start Planning Your Trip
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg backdrop-blur-sm"
          >
            Watch Demo
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-slate-400">AI Assistant</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">0</div>
            <div className="text-slate-400">Human Agents Needed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">∞</div>
            <div className="text-slate-400">Destinations Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
