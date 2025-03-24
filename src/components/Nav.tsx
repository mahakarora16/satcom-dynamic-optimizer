
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Satellite } from "lucide-react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled ? "bg-white/10 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Satellite className="h-6 w-6 text-satellite-blue" />
          <span className="font-semibold text-lg">SAT AI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#solution" className="text-sm font-medium hover:text-satellite-blue transition-colors">Solution</a>
          <a href="#contact" className="text-sm font-medium hover:text-satellite-blue transition-colors">Contact</a>
        </div>
        
        <Button 
          className="bg-gradient-to-r from-satellite-blue to-satellite-purple hover:opacity-90 transition-opacity"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
