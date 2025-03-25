import React, { useEffect, useRef } from 'react';
import { Satellite } from 'lucide-react';

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
      
      // Create floating orbs
      for (let i = 0; i < 10; i++) {
        const orb = document.createElement('div');
        const size = Math.random() * 200 + 100; // Larger orbs
        
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
      for (let i = 0; i < 3; i++) {
        const orbitPath = document.createElement('div');
        const size = 300 + (i * 150); // Increasing orbit sizes
        
        orbitPath.className = 'absolute rounded-full orbit-path top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
        orbitPath.style.width = `${size}px`;
        orbitPath.style.height = `${size}px`;
        orbitPath.style.zIndex = '1';
        
        container.appendChild(orbitPath);
      }
      
      // Create satellites (larger and more prominent)
      for (let i = 0; i < 8; i++) {
        const satellite = document.createElement('div');
        satellite.className = 'absolute';
        satellite.style.left = '50%';
        satellite.style.top = '50%';
        satellite.style.transform = 'translate(-50%, -50%)';
        
        // Different orbit sizes and speeds
        const orbitSize = 150 + (i % 3) * 150;
        const orbitSpeed = 30 + (i % 5) * 10;
        const orbitDelay = i * (360 / 8); // Distribute satellites evenly around orbits
        
        satellite.style.animation = `orbit ${orbitSpeed}s linear infinite`;
        satellite.style.animationDelay = `-${orbitDelay}s`; // Offset each satellite
        satellite.style.zIndex = '2';
        
        // Create a container for the satellite to enable proper animation
        const satelliteContainer = document.createElement('div');
        satelliteContainer.style.position = 'absolute';
        satelliteContainer.style.width = '48px';
        satelliteContainer.style.height = '48px';
        satelliteContainer.style.transform = `translateX(${orbitSize / 2}px)`; // Position on the orbit
        satelliteContainer.style.animation = 'rotating 20s linear infinite'; // Rotate the satellite itself
        
        // Create the satellite SVG
        const satelliteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        satelliteIcon.setAttribute('viewBox', '0 0 24 24');
        satelliteIcon.setAttribute('width', '48');
        satelliteIcon.setAttribute('height', '48');
        satelliteIcon.setAttribute('fill', 'none');
        satelliteIcon.setAttribute('stroke', 'currentColor');
        satelliteIcon.setAttribute('stroke-width', '2');
        satelliteIcon.setAttribute('stroke-linecap', 'round');
        satelliteIcon.setAttribute('stroke-linejoin', 'round');
        
        // This is a simple path that resembles the Satellite icon
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M3.9 8.1L2 6.2m14.5 4.2c1.8-1.8 2.2-4.5.9-5.8s-4-1-5.8.9-2.2 4.5-.9 5.8 4 1 5.8-.9zM8 15l-1 1m9-9l-1 1m-5.6 5.6c-1 1-2.5 1-3.5 0s-1-2.5 0-3.5 2.5-1 3.5 0 1 2.5 0 3.5zm6 6c-1 1-2.5 1-3.5 0s-1-2.5 0-3.5 2.5-1 3.5 0 1 2.5 0 3.5z');
        
        satelliteIcon.appendChild(path);
        satelliteIcon.style.color = getRandomColor();
        
        satelliteContainer.appendChild(satelliteIcon);
        satellite.appendChild(satelliteContainer);
        container.appendChild(satellite);
        
        // Add a satellite beam for some satellites
        if (i % 3 === 0) {
          const beam = document.createElement('div');
          beam.className = 'satellite-beam';
          beam.style.height = '100px';
          beam.style.left = '50%';
          beam.style.top = '100%';
          satelliteContainer.appendChild(beam);
        }
      }
      
      // Keep the pulse rings (enhanced)
      for (let i = 0; i < 3; i++) {
        const ring = document.createElement('div');
        ring.className = 'absolute rounded-full border-2 border-satellite-blue top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
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
      const colors = ['#0EA5E9', '#8B5CF6', '#6366F1', '#F97316'];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    
    const getRandomGradient = () => {
      const gradients = [
        'linear-gradient(225deg, #0EA5E9, #8B5CF6)',
        'linear-gradient(90deg, #8B5CF6, #D946EF)',
        'linear-gradient(45deg, #F97316, #0EA5E9)',
        'linear-gradient(135deg, #6366F1, #0EA5E9)',
        'linear-gradient(90deg, #0EA5E9, #22D3EE)'
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
      <div className="absolute inset-0 bg-gradient-to-br from-background to-satellite-dark/20"></div>
    </div>
  );
};

export default AnimatedBackground;
