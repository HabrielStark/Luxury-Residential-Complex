import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const floorPlans = [
  {
    id: 1,
    name: 'Penthouse Suite',
    size: '3,200 sq ft',
    bedrooms: 3,
    bathrooms: 3.5,
    price: 'Starting at $4.2M',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    model: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    name: 'Sky Loft',
    size: '2,400 sq ft',
    bedrooms: 2,
    bathrooms: 2.5,
    price: 'Starting at $3.1M',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    model: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 3,
    name: 'Executive Suite',
    size: '1,800 sq ft',
    bedrooms: 2,
    bathrooms: 2,
    price: 'Starting at $2.4M',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    model: 'https://images.unsplash.com/photo-1600566752229-250ed79470f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

const FloorPlans = () => {
  const [activePlan, setActivePlan] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      const tl = gsap.timeline();
      tl.fromTo('.floor-plan-title', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo('.floor-plan-card', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.4"
      );
    }
  }, [isInView]);

  const handlePlanChange = (index: number) => {
    setActivePlan(index);
  };

  return (
    <div 
      id="floor-plans"
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="floor-plan-title text-4xl md:text-5xl font-serif mb-16 text-center">
          Luxury <span className="text-amber-400">Floor Plans</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {floorPlans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              className={`floor-plan-card relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                activePlan === index ? 'ring-2 ring-amber-400' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => handlePlanChange(index)}
              whileHover={{ y: -10 }}
            >
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${plan.image})` }}
              />
              <div className="p-6 bg-gray-900">
                <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  <span>{plan.size}</span>
                  <span>{plan.bedrooms} BD | {plan.bathrooms} BA</span>
                </div>
                <p className="text-amber-400 font-medium">{plan.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 3D Floor Plan Visualization */}
        <motion.div 
          className="relative h-[500px] rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `url(${floorPlans[activePlan].model})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-serif mb-4">{floorPlans[activePlan].name}</h3>
              <p className="text-gray-300 mb-6">
                Experience unparalleled luxury in our meticulously designed {floorPlans[activePlan].name.toLowerCase()}. 
                Featuring floor-to-ceiling windows, premium finishes, and breathtaking views of the city skyline.
              </p>
              <motion.button 
                className="px-6 py-3 bg-amber-400 text-black font-medium rounded-sm hover:bg-amber-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Details
              </motion.button>
            </div>
          </div>
          
          {/* Interactive floor plan dots */}
          <div className="absolute inset-0">
            {[
              { top: '30%', left: '20%', label: 'Master Suite' },
              { top: '45%', left: '60%', label: 'Living Area' },
              { top: '70%', left: '40%', label: 'Kitchen' },
              { top: '25%', left: '80%', label: 'Balcony' },
            ].map((point, i) => (
              <motion.div 
                key={i}
                className="absolute"
                style={{ top: point.top, left: point.left }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 1 + (i * 0.2), duration: 0.5 }}
              >
                <div className="relative group">
                  <div className="w-4 h-4 bg-amber-400 rounded-full pulse-animation" />
                  <div className="absolute top-0 left-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-3 py-1 rounded text-sm">
                    {point.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FloorPlans;