
import React, { useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading to ensure animations trigger correctly
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className={`min-h-screen w-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>
      <Nav />
      <AnimatedBackground />
      
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center space-y-10 max-w-4xl px-6">
          <h1 className="text-8xl md:text-9xl font-bold animate-fade-in-up animation-delay-200">
            <span className="text-gradient">SAT AI</span>
          </h1>
          
          <div className="flex justify-center animation-delay-600 animate-fade-in">
            <Button className="group pointer-events-auto animate-pulse bg-gradient-to-r from-satellite-blue to-satellite-purple hover:opacity-90 transition-opacity px-8 py-6 text-lg">
              Explore
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
