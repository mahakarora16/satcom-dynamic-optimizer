
import React from 'react';
import { ArrowDown, ArrowUp, WifiLow } from 'lucide-react';

const Problem = () => {
  return (
    <section id="problem" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block glass px-4 py-2 rounded-full mb-4 animate-fade-in">
            <p className="text-sm font-medium">The Challenge</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in animation-delay-200">
            Current <span className="text-gradient">Limitations</span> in Satellite Communication
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in animation-delay-400">
            Static systems with limited adaptability lead to inefficiencies and challenges in modern satellite networks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-8 transform hover:translate-y-[-5px] transition-transform duration-300 animate-scale-in">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-satellite-blue/20 to-satellite-blue/10 flex items-center justify-center mb-6">
              <WifiLow className="w-7 h-7 text-satellite-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Signal Degradation</h3>
            <p className="text-muted-foreground">
              Adverse weather conditions severely impact signal quality and reliability without dynamic adaptation mechanisms.
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-8 transform hover:translate-y-[-5px] transition-transform duration-300 animate-scale-in animation-delay-200">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-satellite-purple/20 to-satellite-purple/10 flex items-center justify-center mb-6">
              <ArrowDown className="w-7 h-7 text-satellite-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Inefficient Bandwidth</h3>
            <p className="text-muted-foreground">
              Current static bandwidth allocation results in underutilization during low-demand periods and congestion during peak usage.
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-8 transform hover:translate-y-[-5px] transition-transform duration-300 animate-scale-in animation-delay-400">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-satellite-indigo/20 to-satellite-indigo/10 flex items-center justify-center mb-6">
              <ArrowUp className="w-7 h-7 text-satellite-indigo" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Communication Delays</h3>
            <p className="text-muted-foreground">
              Deep-space missions face significant latency issues without intelligent optimization systems capable of prioritizing critical data.
            </p>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto glass-card rounded-2xl p-8 animate-fade-in animation-delay-600">
          <h3 className="text-xl font-semibold mb-4">The Problem Statement</h3>
          <p className="text-muted-foreground">
            "The rapid advancement of satellite communication in telecommunications, space research, military defense, and satellite internet has introduced significant challenges in signal transmission optimization and bandwidth allocation. Current satellite operating systems are static and lack AI-driven adaptability, resulting in inefficient bandwidth utilization, signal degradation due to adverse weather, and delays in deep-space communication."
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background/80 to-transparent"></div>
    </section>
  );
};

export default Problem;
