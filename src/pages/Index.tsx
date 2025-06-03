
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, MessageCircle, Globe, Clock, Shield, Zap, ArrowRight, Plane, Calendar, Map } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";
import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [showChat, setShowChat] = useState(false);
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: MessageCircle,
      title: "Natural Language Planning",
      description: "Just tell us your dream trip in plain English. Our AI understands context, preferences, and creates perfect itineraries.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "End-to-End Booking",
      description: "From flights to restaurants, hotels to experiences. We handle every reservation with real-time price optimization.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "24/7 Travel Assistant",
      description: "Flight delayed? Restaurant closed? Your AI concierge handles changes, rebookings, and emergencies instantly.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Smart Risk Management",
      description: "Visa requirements, travel advisories, weather alerts. We monitor everything so you can focus on enjoying your trip.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Real-Time Adaptation",
      description: "Your itinerary evolves with you. Weather changes, mood shifts, or spontaneous discoveries - we adapt instantly.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: MapPin,
      title: "Local Intelligence",
      description: "Hidden gems, cultural insights, and local recommendations. Experience destinations like a well-connected local.",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  const handleStartPlanning = () => {
    setShowChat(true);
  };

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the waitlist signup
    console.log("Waitlist signup:", email);
    // Show success message or redirect
  };

  if (showChat) {
    return <ChatInterface onBack={() => setShowChat(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection onStartPlanning={handleStartPlanning} />
      
      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-cyan-400 border-cyan-400/30 bg-cyan-400/10">
            Powered by Advanced AI
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Personal Travel Revolution
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Replace travel agents, booking sites, and stress with one intelligent AI that handles everything from planning to real-time assistance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Dream to Departure
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Three simple steps to your perfect trip
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white">1. Tell Us Your Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300 text-center">
                "Plan a romantic 5-day trip to Paris in October with a $2000 budget." Our AI understands your preferences, style, and constraints.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white">2. Review & Refine</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300 text-center">
                Get a detailed day-by-day itinerary with flights, hotels, and experiences. Tweak anything with simple conversation.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white">3. Travel with Confidence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300 text-center">
                We book everything and stay with you 24/7. Flight delays, restaurant changes, or emergencies - we handle it all.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-slate-800/80 to-purple-800/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl text-white mb-4">
                Ready to Transform Your Travel?
              </CardTitle>
              <CardDescription className="text-xl text-slate-300">
                Join thousands of travelers who've discovered stress-free planning
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400"
                  required
                />
                <Button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold">
                  Join Waitlist
                </Button>
              </form>
              <div className="flex justify-center">
                <Button
                  onClick={handleStartPlanning}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3"
                >
                  Try Demo Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            AtlasMind
          </h3>
          <p className="text-slate-400 mb-4">
            Your personal AI travel planner. From dream to departure — fully handled.
          </p>
          <p className="text-slate-500 text-sm">
            © 2024 AtlasMind. Built with AI for the future of travel.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
