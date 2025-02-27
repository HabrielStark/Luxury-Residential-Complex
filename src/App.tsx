import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, MapPin, Phone, Mail, ChevronRight, Award, Home, Users, Shield } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import FloorPlans from './components/FloorPlans';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // City lights animation in the background
    const cityLights = document.querySelectorAll('.city-light');
    cityLights.forEach(light => {
      gsap.to(light, {
        opacity: gsap.utils.random(0.3, 1),
        duration: gsap.utils.random(1, 3),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: gsap.utils.random(0, 2)
      });
    });

    // Text animations on scroll
    const textElements = document.querySelectorAll('.animate-text');
    textElements.forEach(text => {
      gsap.from(text, {
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background city lights */}
      <div className="fixed inset-0 z-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="city-light absolute rounded-full bg-yellow-300"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <FloorPlans />
        <Amenities />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;