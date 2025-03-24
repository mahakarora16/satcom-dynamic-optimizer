
import React, { useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import Solution from '@/components/Solution';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading to ensure animations trigger correctly
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className={`min-h-screen w-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Nav />
      <Solution />
      <Footer />
    </div>
  );
};

export default Index;
