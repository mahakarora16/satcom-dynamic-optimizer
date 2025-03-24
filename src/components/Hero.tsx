
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Earth, Satellite, WifiHigh } from "lucide-react";

const Hero = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create satellite beams dynamically
    const createBeams = () => {
      if (!orbitRef.current) return;
      
      const orbit = orbitRef.current;
      const centerX = orbit.offsetWidth / 2;
      const centerY = orbit.offsetHeight / 2;
      
      // Remove existing beams
      const existingBeams = orbit.querySelectorAll('.satellite-beam');
      existingBeams.forEach(beam => beam.remove());
      
      // Create new beams
      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = 70 + Math.random() * 60;
        
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        const beam = document.createElement('div');
        beam.className = 'satellite-beam';
        beam.style.height = `${30 + Math.random() * 50}px`;
        beam.style.left = `${x}px`;
        beam.style.top = `${y}px`;
        beam.style.animationDelay = `${Math.random() * 2}s`;
        
        orbit.appendChild(beam);
      }
    };

    createBeams();
    window.addEventListener('resize', createBeams);
    
    return () => {
      window.removeEventListener('resize', createBeams);
    };
  }, []);

  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-satellite-dark/10 z-0"></div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 pt-8 lg:pt-0">
            <div className="inline-block glass px-4 py-2 rounded-full animate-fade-in-up">
              <p className="text-sm font-medium flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-satellite-blue animate-pulse"></span>
                Next Generation Satellite Communication
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up animation-delay-200">
              Intelligent <span className="text-gradient">Satellite</span> Communication Optimizer
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in-up animation-delay-400">
              AI-driven optimization for satellite networks, maximizing bandwidth, reducing signal degradation, and enhancing communication efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <Button className="bg-gradient-to-r from-satellite-blue to-satellite-purple text-white hover:opacity-90 transition-opacity px-8 py-6">
                Request Demo
              </Button>
              <Button variant="outline" className="border-satellite-blue text-satellite-blue hover:bg-satellite-blue/10 px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center h-[400px] lg:h-[500px] animate-fade-in-up">
            <div ref={orbitRef} className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
              {/* Earth */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-b from-satellite-blue to-satellite-indigo shadow-lg shadow-satellite-blue/20 animate-float">
                  <Earth className="w-full h-full text-white opacity-30" />
                </div>
              </div>
              
              {/* Orbit paths */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] orbit-path"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] orbit-path"></div>
              
              {/* Satellites */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] animate-rotate-slow">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 glass-card p-2 rounded-lg shadow-lg z-30">
                  <Satellite className="w-6 h-6 text-satellite-blue" />
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] animate-rotate-slow" style={{ animationDuration: '25s' }}>
                <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 glass-card p-2 rounded-lg shadow-lg z-30">
                  <Satellite className="w-6 h-6 text-satellite-purple" />
                </div>
              </div>
              
              {/* Signal waves */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <WifiHigh className="w-48 h-48 lg:w-64 lg:h-64 text-satellite-blue" />
                </div>
                <div className="absolute top-0 left-0 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>
                  <WifiHigh className="w-64 h-64 lg:w-80 lg:h-80 text-satellite-purple" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-satellite-blue/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-satellite-purple/10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
