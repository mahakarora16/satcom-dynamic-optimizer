
import React from 'react';
import { Satellite, WifiHigh, Earth, ArrowUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Satellite className="w-full h-full text-satellite-blue" />,
      title: "Smart Bandwidth Allocation",
      description: "Dynamically allocates bandwidth based on real-time demand, usage patterns, and priority levels.",
      delay: 0
    },
    {
      icon: <WifiHigh className="w-full h-full text-satellite-purple" />,
      title: "Adaptive Signal Processing",
      description: "Automatically adjusts signal parameters to counteract interference and environmental degradation.",
      delay: 200
    },
    {
      icon: <Earth className="w-full h-full text-satellite-indigo" />,
      title: "Global Coverage Optimization",
      description: "Intelligently manages satellite constellation resources to maximize coverage in high-demand areas.",
      delay: 400
    },
    {
      icon: <ArrowUp className="w-full h-full text-satellite-blue" />,
      title: "Latency Reduction",
      description: "Employs predictive routing to minimize communication delays in mission-critical applications.",
      delay: 600
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block glass px-4 py-2 rounded-full mb-4 animate-fade-in">
            <p className="text-sm font-medium">Key Capabilities</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in animation-delay-200">
            Advanced <span className="text-gradient">Features</span> That Make The Difference
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in animation-delay-400">
            Our AI-driven platform delivers unparalleled optimization for satellite communication networks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-8 flex gap-6 transform hover:translate-y-[-5px] transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className="w-16 h-16 shrink-0 rounded-xl bg-gradient-to-br from-satellite-dark/10 to-transparent flex items-center justify-center">
                <div className="w-8 h-8">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 relative">
          <div className="glass-card rounded-2xl p-8 md:p-12 overflow-hidden animate-scale-in">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-satellite-blue/10 blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-satellite-purple/10 blur-3xl"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">Ready to Optimize Your Satellite Network?</h3>
                <p className="text-muted-foreground">
                  Join leading aerospace organizations, telecommunication providers, and defense agencies that are already benefiting from our AI-driven optimization platform.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-2 glass rounded-full">
                    <p className="text-sm font-medium">Aerospace Industry</p>
                  </div>
                  <div className="px-6 py-2 glass rounded-full">
                    <p className="text-sm font-medium">Telecom Providers</p>
                  </div>
                  <div className="px-6 py-2 glass rounded-full">
                    <p className="text-sm font-medium">Defense Sector</p>
                  </div>
                  <div className="px-6 py-2 glass rounded-full">
                    <p className="text-sm font-medium">Research Institutions</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-satellite-blue mb-2">98%</div>
                  <p className="text-sm text-muted-foreground">Improved Bandwidth Utilization</p>
                </div>
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-satellite-purple mb-2">65%</div>
                  <p className="text-sm text-muted-foreground">Signal Degradation Reduction</p>
                </div>
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-satellite-indigo mb-2">3x</div>
                  <p className="text-sm text-muted-foreground">Faster Data Transmission</p>
                </div>
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-satellite-blue mb-2">99.9%</div>
                  <p className="text-sm text-muted-foreground">Network Reliability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
