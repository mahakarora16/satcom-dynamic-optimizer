
import React from 'react';
import { WifiHigh, ArrowRight, Satellite } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Solution = () => {
  return (
    <section id="solution" className="py-24 relative bg-satellite-dark/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-block glass px-4 py-2 rounded-full animate-fade-in">
              <p className="text-sm font-medium">Our Solution</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in animation-delay-200">
              AI-Driven <span className="text-gradient">Dynamic Optimization</span> System
            </h2>
            
            <p className="text-lg text-muted-foreground animate-fade-in animation-delay-400">
              Our platform leverages artificial intelligence and machine learning to provide real-time adaptation to changing conditions, optimizing bandwidth allocation and signal quality.
            </p>
            
            <div className="space-y-6 animate-fade-in animation-delay-600">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-satellite-blue/20 to-satellite-blue/5 flex items-center justify-center">
                  <span className="text-satellite-blue font-semibold">01</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Real-time Adaptation</h3>
                  <p className="text-muted-foreground">Continuously adjusts parameters based on environmental conditions and usage patterns.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-satellite-purple/20 to-satellite-purple/5 flex items-center justify-center">
                  <span className="text-satellite-purple font-semibold">02</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Predictive Allocation</h3>
                  <p className="text-muted-foreground">Anticipates demand fluctuations and preemptively adjusts resource allocation.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-satellite-indigo/20 to-satellite-indigo/5 flex items-center justify-center">
                  <span className="text-satellite-indigo font-semibold">03</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Intelligent Routing</h3>
                  <p className="text-muted-foreground">Optimizes data pathways to minimize latency and maximize throughput.</p>
                </div>
              </div>
            </div>
            
            <Button className="group animate-fade-in animation-delay-800">
              Explore Technical Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-fade-in-up">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden glass-card">
              <div className="absolute inset-0 bg-gradient-to-br from-satellite-blue/10 to-satellite-purple/10"></div>
              
              {/* Signal visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56">
                  <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                    <WifiHigh className="w-full h-full text-satellite-blue opacity-20" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <WifiHigh className="w-[90%] h-[90%] text-satellite-purple opacity-15" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                    <WifiHigh className="w-[80%] h-[80%] text-satellite-indigo opacity-10" />
                  </div>
                  
                  {/* Central element */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-satellite-blue to-satellite-purple flex items-center justify-center shadow-lg shadow-satellite-purple/20 animate-float">
                    <Satellite className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Data visualization elements */}
              <div className="absolute bottom-8 left-8 right-8 h-16 glass rounded-xl p-4">
                <div className="h-full flex items-center gap-4">
                  {[40, 65, 30, 85, 50, 70, 20, 60, 45, 75, 55, 90].map((height, index) => (
                    <div key={index} className="h-full flex items-end flex-1">
                      <div 
                        className="w-full bg-gradient-to-t from-satellite-blue to-satellite-purple rounded-t-sm animate-pulse"
                        style={{ 
                          height: `${height}%`, 
                          animationDelay: `${index * 0.1}s`,
                          opacity: 0.7
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Overlay text */}
              <div className="absolute top-8 left-8">
                <div className="glass px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-satellite-blue">AI-Optimization Active</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 rounded-full bg-satellite-blue/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
