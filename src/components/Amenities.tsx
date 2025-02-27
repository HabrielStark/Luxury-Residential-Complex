import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { School as Pool, Dumbbell, Utensils, Wifi, Users, Shield, Car, Wine } from 'lucide-react';

const amenities = [
  {
    icon: <Pool className="w-8 h-8 text-amber-400" />,
    title: 'Infinity Pool',
    description: 'Rooftop infinity pool with panoramic city views'
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-amber-400" />,
    title: 'Fitness Center',
    description: 'State-of-the-art equipment and personal training'
  },
  {
    icon: <Utensils className="w-8 h-8 text-amber-400" />,
    title: 'Private Dining',
    description: 'Exclusive dining room with chef service'
  },
  {
    icon: <Wifi className="w-8 h-8 text-amber-400" />,
    title: 'Smart Home',
    description: 'Integrated home automation systems'
  },
  {
    icon: <Users className="w-8 h-8 text-amber-400" />,
    title: 'Concierge',
    description: '24/7 concierge and doorman service'
  },
  {
    icon: <Shield className="w-8 h-8 text-amber-400" />,
    title: 'Security',
    description: 'Advanced security systems and personnel'
  },
  {
    icon: <Car className="w-8 h-8 text-amber-400" />,
    title: 'Valet Parking',
    description: 'Dedicated valet and private parking'
  },
  {
    icon: <Wine className="w-8 h-8 text-amber-400" />,
    title: 'Wine Cellar',
    description: 'Temperature-controlled wine storage'
  }
];

const Amenities = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div 
      id="amenities"
      className="py-24 bg-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Exclusive <span className="text-amber-400">Amenities</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ALTURA offers an unparalleled collection of amenities designed to elevate your lifestyle.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {amenities.map((amenity, index) => (
            <motion.div 
              key={index}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-lg hover:bg-black/70 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-medium mb-2">{amenity.title}</h3>
              <p className="text-gray-400">{amenity.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Video Section */}
        <motion.div 
          className="mt-24 relative rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="aspect-w-16 aspect-h-9 relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80")'
              }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <motion.div 
                className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1" />
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-2xl font-serif mb-2">Experience ALTURA</h3>
            <p className="text-gray-300">
              Take a virtual tour of our world-class amenities and living spaces.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Amenities;