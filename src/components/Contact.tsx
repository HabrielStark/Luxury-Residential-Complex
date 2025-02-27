import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-amber-400" />,
      title: 'Location',
      details: '123 Luxury Avenue, Downtown, New York, NY 10001'
    },
    {
      icon: <Phone className="w-6 h-6 text-amber-400" />,
      title: 'Phone',
      details: '+1 (212) 555-1234'
    },
    {
      icon: <Mail className="w-6 h-6 text-amber-400" />,
      title: 'Email',
      details: 'info@alturaresidences.com'
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-400" />,
      title: 'Sales Office Hours',
      details: 'Mon-Fri: 9AM-7PM | Sat-Sun: 10AM-5PM'
    }
  ];

  return (
    <div 
      id="contact"
      ref={ref}
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Contact <span className="text-amber-400">Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Schedule a private tour or request more information about ALTURA Residences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif mb-6">Request Information</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-black/50 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-black/50 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black/50 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-black/50 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">
                  I'm Interested In
                </label>
                <select
                  id="interest"
                  className="w-full bg-black/50 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option>Penthouse Suite</option>
                  <option>Sky Loft</option>
                  <option>Executive Suite</option>
                  <option>General Information</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black/50 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className="w-full px-8 py-3 bg-amber-400 text-black font-medium rounded-sm hover:bg-amber-300 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Information and Map */}
          <div>
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg mb-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative h-[300px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Map placeholder - in a real project, this would be an actual map */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2144&q=80")'
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-black" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;