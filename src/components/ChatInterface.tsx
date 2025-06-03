
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Sparkles, MapPin, Calendar, DollarSign, Users, Plane } from "lucide-react";

interface ChatInterfaceProps {
  onBack: () => void;
}

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestions?: string[];
  tripPlan?: any;
}

const ChatInterface = ({ onBack }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm your AI travel concierge. I'll help you plan the perfect trip from start to finish. What kind of adventure are you dreaming of?",
      timestamp: new Date(),
      suggestions: [
        "Plan a romantic getaway to Paris",
        "Adventure trip to New Zealand", 
        "Family vacation to Japan",
        "Solo backpacking through Europe"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content?: string) => {
    const messageContent = content || inputValue.trim();
    if (!messageContent) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageContent,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let aiResponse: Message;
      
      if (messageContent.toLowerCase().includes('paris') || messageContent.toLowerCase().includes('romantic')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: "Perfect! A romantic trip to Paris sounds wonderful. Let me create a personalized itinerary for you. I'll need a few details:",
          timestamp: new Date(),
          suggestions: [
            "5 days, $2000 budget for 2 people",
            "Week in October, luxury hotels",
            "3 days, boutique accommodations",
            "I need help with the dates"
          ]
        };
      } else if (messageContent.toLowerCase().includes('japan') || messageContent.toLowerCase().includes('family')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: "Japan for a family vacation is amazing! I'll help you create an unforgettable experience with activities for all ages. What's your family size and preferred travel style?",
          timestamp: new Date(),
          suggestions: [
            "Family of 4, kid-friendly activities",
            "2 weeks, mix of cities and culture",
            "Spring cherry blossom season",
            "Need help with budget planning"
          ]
        };
      } else if (messageContent.includes('$') || messageContent.toLowerCase().includes('budget')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: "Great! Based on your budget and preferences, I'm creating your personalized trip plan. Here's what I'm working on:",
          timestamp: new Date(),
          tripPlan: {
            destination: "Paris, France",
            duration: "5 days",
            budget: "$2,000",
            travelers: "2 people",
            style: "Romantic getaway"
          }
        };
      } else {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: "That sounds exciting! To create the perfect trip for you, I'll need to understand your preferences better. Could you tell me more about your ideal travel experience?",
          timestamp: new Date(),
          suggestions: [
            "I want adventure and outdoor activities",
            "Looking for cultural experiences",
            "Beach and relaxation focused",
            "City exploration and nightlife"
          ]
        };
      }
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onBack} className="text-slate-300 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-white font-semibold">AtlasMind AI</h2>
                <p className="text-xs text-green-400">● Online</p>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="text-cyan-400 border-cyan-400/30 bg-cyan-400/10">
            Demo Mode
          </Badge>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-3xl ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                <div className={`rounded-2xl p-4 ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                    : 'bg-slate-800/80 text-slate-100 border border-slate-700'
                }`}>
                  <p className="leading-relaxed">{message.content}</p>
                  
                  {message.tripPlan && (
                    <Card className="mt-4 bg-slate-700/50 border-slate-600">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-cyan-400 flex items-center gap-2">
                          <Plane className="w-4 h-4" />
                          Trip Overview
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-purple-400" />
                            <span className="text-slate-300">{message.tripPlan.destination}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-purple-400" />
                            <span className="text-slate-300">{message.tripPlan.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-purple-400" />
                            <span className="text-slate-300">{message.tripPlan.budget}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-purple-400" />
                            <span className="text-slate-300">{message.tripPlan.travelers}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                  
                  {message.suggestions && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-slate-400">Try saying:</p>
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="text-xs bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white"
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-2 px-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                  <span className="text-slate-400 text-sm">AtlasMind is typing...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-slate-800/80 backdrop-blur-sm border-t border-slate-700 px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex gap-4">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Describe your dream trip..."
              className="flex-1 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500"
              disabled={isTyping}
            />
            <Button 
              type="submit" 
              disabled={isTyping || !inputValue.trim()}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
