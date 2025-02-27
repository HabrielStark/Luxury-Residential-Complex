import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const buildingY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  
  useEffect(() => {
    // Fog animation
    if (fogRef.current) {
      gsap.to(fogRef.current, {
        backgroundPosition: '0 100%',
        duration: 15,
        repeat: -1,
        ease: "none"
      });
    }
    
    // Building emerging animation
    if (buildingRef.current) {
      gsap.fromTo(buildingRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, delay: 0.5, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <motion.div 
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Background image with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          scale,
          y: buildingY
        }}
      />
      
      {/* Fog overlay */}
      <div 
        ref={fogRef}
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1613338027201-562efdce316f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',
          backgroundSize: '200% 200%',
          backgroundPosition: '0 0',
          opacity: 0.7,
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Building emerging from fog */}
      <div 
        ref={buildingRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-4 leading-tight">
            ALTURA <span className="block text-amber-400">Residences</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            Where luxury meets the sky. Experience unparalleled living in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              className="px-8 py-3 bg-amber-400 text-black font-medium rounded-sm hover:bg-amber-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Tour
            </motion.button>
            <motion.button 
              className="px-8 py-3 border border-white text-white font-medium rounded-sm hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Floor Plans
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm uppercase tracking-widest mb-2">Scroll to explore</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-white to-transparent relative">
            <motion.div 
              className="absolute top-0 w-full h-1/3 bg-amber-400"
              animate={{ 
                top: ["0%", "66%", "0%"],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;