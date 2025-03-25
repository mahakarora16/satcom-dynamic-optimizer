
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
      for (let i = 0; i < 20; i++) {
        const orb = document.createElement('div');
        const size = Math.random() * 150 + 50;
        
        orb.className = 'absolute rounded-full';
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.left = `${Math.random() * 100}%`;
        orb.style.top = `${Math.random() * 100}%`;
        orb.style.background = getRandomGradient();
        orb.style.opacity = `${Math.random() * 0.3 + 0.1}`;
        orb.style.filter = 'blur(50px)';
        orb.style.animation = `float ${Math.random() * 15 + 10}s ease-in-out infinite alternate`;
        orb.style.animationDelay = `${Math.random() * 5}s`;
        orb.style.zIndex = '0';
        
        container.appendChild(orb);
      }
      
      // Create satellites
      for (let i = 0; i < 5; i++) {
        const satellite = document.createElement('div');
        satellite.className = 'absolute';
        satellite.style.left = `${Math.random() * 100}%`;
        satellite.style.top = `${Math.random() * 100}%`;
        satellite.style.transform = 'translate(-50%, -50%)';
        satellite.style.animation = `orbit ${Math.random() * 30 + 20}s linear infinite`;
        satellite.style.zIndex = '1';
        
        const satelliteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        satelliteIcon.setAttribute('viewBox', '0 0 24 24');
        satelliteIcon.setAttribute('width', '24');
        satelliteIcon.setAttribute('height', '24');
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
        
        satellite.appendChild(satelliteIcon);
        container.appendChild(satellite);
      }
      
      // Create pulse rings
      for (let i = 0; i < 3; i++) {
        const ring = document.createElement('div');
        ring.className = 'absolute rounded-full border-2 border-satellite-blue top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
        ring.style.width = '10vw';
        ring.style.height = '10vw';
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
        0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
        100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
      }
      
      @keyframes ping {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.4; }
        100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
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
