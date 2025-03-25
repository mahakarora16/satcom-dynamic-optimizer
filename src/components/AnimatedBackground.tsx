
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
      
      // Create Earth-like orb in the center
      const earth = document.createElement('div');
      earth.className = 'absolute rounded-full z-10';
      earth.style.width = '300px';
      earth.style.height = '300px';
      earth.style.left = '50%';
      earth.style.top = '50%';
      earth.style.transform = 'translate(-50%, -50%)';
      earth.style.background = 'radial-gradient(circle at 30% 30%, #2563eb, #1e40af, #0c1a47)';
      earth.style.boxShadow = '0 0 100px rgba(14, 165, 233, 0.4)';
      earth.style.animation = 'rotate-slow 60s linear infinite';
      
      // Add cloud-like texture
      const clouds = document.createElement('div');
      clouds.className = 'absolute rounded-full';
      clouds.style.width = '100%';
      clouds.style.height = '100%';
      clouds.style.background = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cpath fill=\'%23FFFFFF\' fill-opacity=\'0.15\' d=\'M-28.7,65.7C-13.8,56,6.1,57.4,22,63.2c15.9,5.8,27.8,16,42.5,20.4c14.7,4.4,32.1,3,44-4.8c11.9-7.8,18.3-22,18.5-36.5c0.2-14.4-5.6-29-15.7-39.7C101.4,3.1,87-2.5,73.1-2.2c-13.9,0.3-27.2,6.4-40.8,10.4c-13.7,4-27.8,5.9-35.7,16C-11.3,34.3-13,52.7-28.7,65.7\'/%3E%3C/svg%3E")';
      clouds.style.backgroundSize = '200% 200%';
      clouds.style.opacity = '0.8';
      clouds.style.animation = 'clouds 40s linear infinite';
      
      earth.appendChild(clouds);
      container.appendChild(earth);
      
      // Create orbit paths
      for (let i = 0; i < 5; i++) {
        const orbitPath = document.createElement('div');
        const size = 320 + (i * 90); // Increasing orbit sizes
        
        orbitPath.className = 'absolute rounded-full orbit-path top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
        orbitPath.style.width = `${size}px`;
        orbitPath.style.height = `${size}px`;
        orbitPath.style.border = '1px dashed rgba(255, 255, 255, 0.2)';
        orbitPath.style.zIndex = '1';
        
        container.appendChild(orbitPath);
      }
      
      // Create NOAA-like satellites in orbit
      const totalSatellites = 20;
      
      for (let i = 0; i < totalSatellites; i++) {
        const satellite = document.createElement('div');
        satellite.className = 'absolute';
        
        // Position satellites around the screen
        if (i < 8) {
          // Orbiting satellites (NOAA style)
          satellite.style.left = '50%';
          satellite.style.top = '50%';
          satellite.style.transform = 'translate(-50%, -50%)';
          
          const orbitSize = 160 + (i % 4) * 90;
          const orbitSpeed = 25 + (i % 5) * 10;
          const orbitDelay = i * (360 / 8);
          
          satellite.style.animation = `orbit ${orbitSpeed}s linear infinite`;
          satellite.style.animationDelay = `-${orbitDelay}s`;
        } else if (i < 13) {
          // Left side satellites with staggered vertical positioning (NOAA style)
          satellite.style.left = `${Math.random() * 15 + 2}%`;
          satellite.style.top = `${10 + ((i - 8) * 15)}%`;
          satellite.style.animation = `float-element ${8 + (i % 4) * 3}s ease-in-out infinite alternate`;
          satellite.style.animationDelay = `${(i - 8) * 0.7}s`;
        } else {
          // Right side satellites with staggered vertical positioning (NOAA style)
          satellite.style.left = `${Math.random() * 15 + 83}%`;
          satellite.style.top = `${10 + ((i - 13) * 15)}%`;
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
        
        if (i < 8) {
          // Center orbit satellites need special positioning
          const orbitSize = 160 + (i % 4) * 90;
          satelliteContainer.style.transform = `translateX(${orbitSize / 2}px)`;
        }
        
        satelliteContainer.style.animation = `${Math.random() > 0.5 ? 'rotating' : 'rotating-reverse'} ${15 + Math.random() * 10}s linear infinite`;
        
        // Create the satellite body (NOAA style - more technical looking)
        const satelliteBody = document.createElement('div');
        satelliteBody.className = 'satellite-body';
        satelliteBody.style.width = '40px';
        satelliteBody.style.height = '20px';
        satelliteBody.style.background = 'linear-gradient(145deg, #DDDDDD, #AAAAAA)';
        satelliteBody.style.borderRadius = '3px';
        satelliteBody.style.position = 'absolute';
        satelliteBody.style.left = '12px';
        satelliteBody.style.top = '22px';
        satelliteBody.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.3)';
        
        // Create more technical looking solar panels (NOAA style)
        const solarPanel1 = document.createElement('div');
        solarPanel1.className = 'solar-panel';
        solarPanel1.style.width = '30px';
        solarPanel1.style.height = '8px';
        solarPanel1.style.background = 'linear-gradient(90deg, #0EA5E9, #0C4A6E)';
        solarPanel1.style.position = 'absolute';
        solarPanel1.style.left = '-18px';
        solarPanel1.style.top = '27px';
        solarPanel1.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.3)';
        
        const solarPanel2 = document.createElement('div');
        solarPanel2.className = 'solar-panel';
        solarPanel2.style.width = '30px';
        solarPanel2.style.height = '8px';
        solarPanel2.style.background = 'linear-gradient(90deg, #0C4A6E, #0EA5E9)';
        solarPanel2.style.position = 'absolute';
        solarPanel2.style.right = '-18px';
        solarPanel2.style.top = '27px';
        solarPanel2.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.3)';
        
        // Add satellite equipment based on position
        if (i < 8) {
          // Orbiting satellites - add scanning equipment
          const scanner = document.createElement('div');
          scanner.className = 'scanner';
          scanner.style.width = '15px';
          scanner.style.height = '10px';
          scanner.style.borderRadius = '2px';
          scanner.style.background = '#222';
          scanner.style.position = 'absolute';
          scanner.style.left = '12px';
          scanner.style.bottom = '0px';
          
          const scannerLens = document.createElement('div');
          scannerLens.style.width = '8px';
          scannerLens.style.height = '8px';
          scannerLens.style.borderRadius = '50%';
          scannerLens.style.background = '#06b6d4';
          scannerLens.style.position = 'absolute';
          scannerLens.style.left = '3.5px';
          scannerLens.style.top = '1px';
          scannerLens.style.animation = 'pulse 2s ease-in-out infinite';
          
          scanner.appendChild(scannerLens);
          satelliteBody.appendChild(scanner);
          
          // Add data beam toward Earth
          const dataBeam = document.createElement('div');
          dataBeam.className = 'data-beam';
          dataBeam.style.position = 'absolute';
          dataBeam.style.width = '2px';
          dataBeam.style.height = '150px';
          dataBeam.style.background = 'linear-gradient(to bottom, rgba(14, 165, 233, 0), rgba(14, 165, 233, 0.8))';
          dataBeam.style.top = '30px';
          dataBeam.style.left = '32px';
          dataBeam.style.transformOrigin = 'top';
          dataBeam.style.transform = 'rotate(180deg)';
          dataBeam.style.animation = 'beam-pulse 3s ease-in-out infinite';
          
          satelliteContainer.appendChild(dataBeam);
        } else {
          // Side satellites - add dish or antenna
          if (i % 2 === 0) {
            const dish = document.createElement('div');
            dish.className = 'satellite-dish';
            dish.style.width = '16px';
            dish.style.height = '16px';
            dish.style.borderRadius = '50%';
            dish.style.background = 'linear-gradient(145deg, #DDDDDD, #999999)';
            dish.style.position = 'absolute';
            dish.style.left = '12px';
            dish.style.top = '5px';
            dish.style.transform = 'rotate(-30deg)';
            dish.style.boxShadow = 'inset 0 -2px 4px rgba(0, 0, 0, 0.4)';
            
            satelliteBody.appendChild(dish);
            
            // Signal waves animation
            for (let j = 0; j < 3; j++) {
              const signal = document.createElement('div');
              signal.className = 'signal-wave';
              signal.style.position = 'absolute';
              signal.style.width = `${10 + j * 6}px`;
              signal.style.height = `${10 + j * 6}px`;
              signal.style.borderRadius = '50%';
              signal.style.border = '1px solid rgba(14, 165, 233, 0.7)';
              signal.style.left = '20px';
              signal.style.top = '13px';
              signal.style.opacity = '0';
              signal.style.animation = `ping 2s cubic-bezier(0, 0, 0.2, 1) infinite`;
              signal.style.animationDelay = `${j * 0.5}s`;
              
              satelliteContainer.appendChild(signal);
            }
          } else {
            const antenna = document.createElement('div');
            antenna.className = 'antenna';
            antenna.style.width = '2px';
            antenna.style.height = '15px';
            antenna.style.background = '#999';
            antenna.style.position = 'absolute';
            antenna.style.left = '20px';
            antenna.style.top = '5px';
            
            const antennaTip = document.createElement('div');
            antennaTip.className = 'antenna-tip';
            antennaTip.style.width = '4px';
            antennaTip.style.height = '4px';
            antennaTip.style.borderRadius = '50%';
            antennaTip.style.background = '#F97316';
            antennaTip.style.position = 'absolute';
            antennaTip.style.left = '-1px';
            antennaTip.style.top = '-4px';
            antennaTip.style.animation = 'pulse 2s ease-in-out infinite';
            
            antenna.appendChild(antennaTip);
            satelliteBody.appendChild(antenna);
          }
        }
        
        // Add tracking data for some satellites
        if ((i % 3 === 0) && i >= 8) {
          const trackingData = document.createElement('div');
          trackingData.className = 'tracking-data';
          trackingData.style.position = 'absolute';
          trackingData.style.top = i < 13 ? '-20px' : '-20px';
          trackingData.style.left = i < 13 ? '20px' : '-60px';
          trackingData.style.fontSize = '8px';
          trackingData.style.whiteSpace = 'nowrap';
          trackingData.style.fontFamily = 'monospace';
          trackingData.style.color = '#0EA5E9';
          trackingData.textContent = `SAT-${(1000 + i).toString().substring(1)}`;
          
          // Blinking animation
          trackingData.style.animation = 'blink 2s infinite';
          satelliteContainer.appendChild(trackingData);
        }
        
        satelliteContainer.appendChild(satelliteBody);
        satelliteContainer.appendChild(solarPanel1);
        satelliteContainer.appendChild(solarPanel2);
        satellite.appendChild(satelliteContainer);
        container.appendChild(satellite);
      }
      
      // Create atmospheric scanning effects (NOAA style)
      const scanLines = document.createElement('div');
      scanLines.className = 'absolute w-full h-full';
      scanLines.style.background = 'linear-gradient(180deg, transparent 0%, transparent 50%, rgba(14, 165, 233, 0.05) 50%, rgba(14, 165, 233, 0.05) 51%, transparent 51%, transparent 100%)';
      scanLines.style.backgroundSize = '100% 8px';
      scanLines.style.opacity = '0.3';
      scanLines.style.pointerEvents = 'none';
      scanLines.style.zIndex = '20';
      container.appendChild(scanLines);
      
      // Add pulse rings (NOAA radar style)
      for (let i = 0; i < 3; i++) {
        const ring = document.createElement('div');
        ring.className = 'absolute rounded-full border-2 border-sky-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
        ring.style.width = '250px';
        ring.style.height = '250px';
        ring.style.opacity = '0';
        ring.style.zIndex = '1';
        ring.style.animation = 'ping 8s cubic-bezier(0, 0, 0.2, 1) infinite';
        ring.style.animationDelay = `${i * 2.6}s`;
        
        container.appendChild(ring);
      }
      
      // Create global grid overlay (NOAA style)
      const gridOverlay = document.createElement('div');
      gridOverlay.className = 'absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      gridOverlay.style.width = '320px';
      gridOverlay.style.height = '320px';
      gridOverlay.style.background = 'radial-gradient(circle, transparent 30%, rgba(14, 165, 233, 0.05) 70%), repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(14, 165, 233, 0.05) 20px, rgba(14, 165, 233, 0.05) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(14, 165, 233, 0.05) 20px, rgba(14, 165, 233, 0.05) 21px)';
      gridOverlay.style.opacity = '0.4';
      gridOverlay.style.pointerEvents = 'none';
      gridOverlay.style.zIndex = '11';
      container.appendChild(gridOverlay);
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
      
      @keyframes rotate-slow {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
      }
      
      @keyframes clouds {
        0% { background-position: 0% 0%; }
        100% { background-position: 200% 0%; }
      }
      
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      window.removeEventListener('resize', createAnimatedElements);
      document.head.removeChild(styleSheet);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden bg-gray-900" ref={containerRef}>
      {/* Background elements will be added via JavaScript */}
    </div>
  );
};

export default AnimatedBackground;
