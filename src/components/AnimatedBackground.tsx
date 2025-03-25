import React, { useEffect, useRef } from 'react';
import { Satellite, Radio, Signal } from 'lucide-react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create animated elements
    const createAnimatedElements = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      // Clear existing elements
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      // Create floating orbs with more vibrant colors
      for (let i = 0; i < 12; i++) {
        const orb = document.createElement('div');
        const size = Math.random() * 250 + 150; // Larger orbs
        
        orb.className = 'absolute rounded-full';
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.left = `${Math.random() * 100}%`;
        orb.style.top = `${Math.random() * 100}%`;
        orb.style.background = getRandomGradient();
        orb.style.opacity = `${Math.random() * 0.3 + 0.1}`;
        orb.style.filter = 'blur(80px)';
        orb.style.animation = `float ${Math.random() * 15 + 10}s ease-in-out infinite alternate`;
        orb.style.animationDelay = `${Math.random() * 5}s`;
        orb.style.zIndex = '0';
        
        container.appendChild(orb);
      }
      
      // Create orbit paths
      for (let i = 0; i < 5; i++) {
        const orbitPath = document.createElement('div');
        const size = 300 + (i * 150); // Increasing orbit sizes
        
        orbitPath.className = 'absolute rounded-full orbit-path top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
        orbitPath.style.width = `${size}px`;
        orbitPath.style.height = `${size}px`;
        orbitPath.style.zIndex = '1';
        
        container.appendChild(orbitPath);
      }
      
      // Create more realistic satellites
      const totalSatellites = 20; // Increased number of satellites
      
      for (let i = 0; i < totalSatellites; i++) {
        const satellite = document.createElement('div');
        satellite.className = 'absolute';
        
        // Position satellites around the screen, with focus on the sides
        if (i < 5) {
          // Center orbit satellites
          satellite.style.left = '50%';
          satellite.style.top = '50%';
          satellite.style.transform = 'translate(-50%, -50%)';
          
          const orbitSize = 150 + (i % 3) * 150;
          const orbitSpeed = 30 + (i % 5) * 10;
          const orbitDelay = i * (360 / 5);
          
          satellite.style.animation = `orbit ${orbitSpeed}s linear infinite`;
          satellite.style.animationDelay = `-${orbitDelay}s`;
        } else if (i < 13) {
          // Left side satellites with staggered vertical positioning
          satellite.style.left = `${Math.random() * 15 + 2}%`;
          satellite.style.top = `${10 + ((i - 5) * 12)}%`;
          satellite.style.animation = `float-element ${8 + (i % 4) * 3}s ease-in-out infinite alternate`;
          satellite.style.animationDelay = `${(i - 5) * 0.7}s`;
        } else {
          // Right side satellites with staggered vertical positioning
          satellite.style.left = `${Math.random() * 15 + 83}%`;
          satellite.style.top = `${10 + ((i - 13) * 12)}%`;
          satellite.style.animation = `float-element ${8 + (i % 4) * 3}s ease-in-out infinite alternate-reverse`;
          satellite.style.animationDelay = `${(i - 13) * 0.7}s`;
        }
        
        satellite.style.zIndex = '2';
        
        // Create a container for the satellite to enable proper animation
        const satelliteContainer = document.createElement('div');
        satelliteContainer.className = 'realistic-satellite';
        satelliteContainer.style.position = 'absolute';
        satelliteContainer.style.width = '64px';
        satelliteContainer.style.height = '64px';
        
        if (i < 5) {
          // Center orbit satellites need special positioning
          const orbitSize = 150 + (i % 3) * 150;
          satelliteContainer.style.transform = `translateX(${orbitSize / 2}px)`;
        }
        
        satelliteContainer.style.animation = `${Math.random() > 0.5 ? 'rotating' : 'rotating-reverse'} ${15 + Math.random() * 10}s linear infinite`;
        
        // Create the satellite body (metallic look)
        const satelliteBody = document.createElement('div');
        satelliteBody.className = 'satellite-body';
        satelliteBody.style.width = '40px';
        satelliteBody.style.height = '20px';
        satelliteBody.style.background = 'linear-gradient(145deg, #CCC, #999)';
        satelliteBody.style.borderRadius = '4px';
        satelliteBody.style.position = 'absolute';
        satelliteBody.style.left = '12px';
        satelliteBody.style.top = '22px';
        satelliteBody.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.3)';
        
        // Create solar panels
        const solarPanel1 = document.createElement('div');
        solarPanel1.className = 'solar-panel';
        solarPanel1.style.width = '32px';
        solarPanel1.style.height = '10px';
        solarPanel1.style.background = 'linear-gradient(90deg, #2563eb, #3b82f6)';
        solarPanel1.style.position = 'absolute';
        solarPanel1.style.left = '-20px';
        solarPanel1.style.top = '26px';
        solarPanel1.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.3)';
        
        const solarPanel2 = document.createElement('div');
        solarPanel2.className = 'solar-panel';
        solarPanel2.style.width = '32px';
        solarPanel2.style.height = '10px';
        solarPanel2.style.background = 'linear-gradient(90deg, #2563eb, #3b82f6)';
        solarPanel2.style.position = 'absolute';
        solarPanel2.style.right = '-20px';
        solarPanel2.style.top = '26px';
        solarPanel2.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.3)';
        
        // Add satellite dish or antenna for some satellites
        if (i % 3 === 0) {
          const antenna = document.createElement('div');
          antenna.className = 'antenna';
          antenna.style.width = '2px';
          antenna.style.height = '15px';
          antenna.style.background = '#BBB';
          antenna.style.position = 'absolute';
          antenna.style.left = '32px';
          antenna.style.top = '7px';
          
          const antennaTip = document.createElement('div');
          antennaTip.className = 'antenna-tip';
          antennaTip.style.width = '6px';
          antennaTip.style.height = '6px';
          antennaTip.style.borderRadius = '50%';
          antennaTip.style.background = '#F97316';
          antennaTip.style.position = 'absolute';
          antennaTip.style.left = '-2px';
          antennaTip.style.top = '-6px';
          antennaTip.style.animation = 'pulse 2s ease-in-out infinite';
          
          antenna.appendChild(antennaTip);
          satelliteBody.appendChild(antenna);
        } else if (i % 3 === 1) {
          const dish = document.createElement('div');
          dish.className = 'satellite-dish';
          dish.style.width = '14px';
          dish.style.height = '14px';
          dish.style.borderRadius = '50%';
          dish.style.background = 'linear-gradient(145deg, #DDD, #AAA)';
          dish.style.position = 'absolute';
          dish.style.left = '13px';
          dish.style.top = '8px';
          dish.style.transform = 'rotate(-30deg)';
          dish.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.2)';
          
          satelliteBody.appendChild(dish);
        }
        
        // Add beam effect for some side satellites
        if (i > 5 && i % 4 === 0) {
          const beam = document.createElement('div');
          beam.className = 'satellite-beam';
          beam.style.position = 'absolute';
          beam.style.width = '2px';
          beam.style.height = '80px';
          beam.style.background = 'linear-gradient(to bottom, rgba(139, 92, 246, 0.8), rgba(139, 92, 246, 0))';
          
          if (i < 13) { // Left side satellites
            beam.style.left = '32px';
            beam.style.top = '30px';
            beam.style.transform = 'rotate(20deg)';
          } else { // Right side satellites
            beam.style.left = '32px';
            beam.style.top = '30px';
            beam.style.transform = 'rotate(-20deg)';
          }
          
          beam.style.animation = 'beam-pulse 2s ease-in-out infinite';
          satelliteContainer.appendChild(beam);
        }
        
        // Add signal waves for some satellites
        if (i > 5 && i % 5 === 0) {
          for (let j = 0; j < 3; j++) {
            const signalWave = document.createElement('div');
            signalWave.className = 'signal-wave';
            signalWave.style.position = 'absolute';
            signalWave.style.width = `${20 + j * 10}px`;
            signalWave.style.height = `${20 + j * 10}px`;
            signalWave.style.borderRadius = '50%';
            signalWave.style.border = '1px solid rgba(249, 115, 22, 0.7)';
            signalWave.style.left = '22px';
            signalWave.style.top = '22px';
            signalWave.style.opacity = '0';
            signalWave.style.animation = `ping 2s cubic-bezier(0, 0, 0.2, 1) infinite`;
            signalWave.style.animationDelay = `${j * 0.5}s`;
            
            satelliteContainer.appendChild(signalWave);
          }
        }
        
        satelliteContainer.appendChild(satelliteBody);
        satelliteContainer.appendChild(solarPanel1);
        satelliteContainer.appendChild(solarPanel2);
        satellite.appendChild(satelliteContainer);
        container.appendChild(satellite);
      }
      
      // Keep the pulse rings (enhanced)
      for (let i = 0; i < 3; i++) {
        const ring = document.createElement('div');
        ring.className = 'absolute rounded-full border-2 border-satellite-purple top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
        ring.style.width = '20vw';
        ring.style.height = '20vw';
        ring.style.opacity = '0';
        ring.style.animation = 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite';
        ring.style.animationDelay = `${i * 1.3}s`;
        ring.style.zIndex = '1';
        
        container.appendChild(ring);
      }
    };
    
    const getRandomColor = () => {
      // Updated vibrant colors
      const colors = ['#F97316', '#8B5CF6', '#6366F1', '#EC4899', '#06B6D4', '#10B981'];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    
    const getRandomGradient = () => {
      // Updated vibrant gradients
      const gradients = [
        'linear-gradient(225deg, #F97316, #8B5CF6)',
        'linear-gradient(90deg, #8B5CF6, #EC4899)',
        'linear-gradient(45deg, #F97316, #06B6D4)',
        'linear-gradient(135deg, #6366F1, #10B981)',
        'linear-gradient(90deg, #06B6D4, #10B981)'
      ];
      return gradients[Math.floor(Math.random() * gradients.length)];
    };
    
    createAnimatedElements();
    window.addEventListener('resize', createAnimatedElements);
    
    // Add keyframes for animations
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
      @keyframes float {
        0% { transform: translate(0, 0); }
        50% { transform: translate(20px, 20px); }
        100% { transform: translate(-20px, -20px); }
      }
      
      @keyframes orbit {
        0% { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-distance)) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-distance)) rotate(-360deg); }
      }
      
      @keyframes ping {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.4; }
        100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
      }
      
      @keyframes rotating {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes rotating-reverse {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }
      
      @keyframes float-element {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(10deg); }
        100% { transform: translateY(0) rotate(0deg); }
      }
      
      @keyframes beam-pulse {
        0% { opacity: 0.3; }
        50% { opacity: 1; }
        100% { opacity: 0.3; }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      window.removeEventListener('resize', createAnimatedElements);
      document.head.removeChild(styleSheet);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden" ref={containerRef}>
      {/* Background elements will be added via JavaScript */}
      <div className="absolute inset-0 bg-gradient-to-br from-satellite-dark to-purple-900/20"></div>
    </div>
  );
};

export default AnimatedBackground;
