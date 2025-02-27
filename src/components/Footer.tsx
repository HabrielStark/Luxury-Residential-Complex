import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 mr-2 text-amber-400" />
              <span className="text-2xl font-serif tracking-wider">ALTURA</span>
            </div>
            <p className="text-gray-400 mb-6">
              ALTURA Residences represents the pinnacle of luxury living in the heart of the city.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-400 transition-colors"
                whileHover={{ y: -5 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-400 transition-colors"
                whileHover={{ y: -5 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-400 transition-colors"
                whileHover={{ y: -5 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-400 transition-colors"
                whileHover={{ y: -5 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Floor Plans', 'Amenities', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Residences</h3>
            <ul className="space-y-3">
              {['Penthouse Suite', 'Sky Loft', 'Executive Suite', 'Pricing', 'Availability'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new residences and exclusive events.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 border-none rounded-l-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="bg-amber-400 text-black px-4 py-2 rounded-r-sm hover:bg-amber-300 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ALTURA Residences. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;