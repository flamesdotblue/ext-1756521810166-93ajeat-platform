import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Trailer from './components/Trailer';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter',_system-ui,_sans-serif]">
      <Hero />
      <Features />
      <Trailer />
      <Footer />
    </div>
  );
}
