import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; 

const NavMenuToggle = () => {
    const list = ["Home","About","Sem","Notes","Blogs","Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    if (!isOpen) {
      setActiveItem(null);
    }
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="relative">
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-full"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-lg z-40 flex justify-center items-center"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white p-6 rounded-2xl shadow-lg w-64"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-4 text-center">
                {list.map((item, index) => (
                  <li
                    key={index}
                    className={`text-lg font-semibold cursor-pointer transition-colors ${
                      activeItem === item ? 'bg-black text-white' : 'hover:text-blue-500 active:text-blue-700'
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                      <Link to={`/${item.toLowerCase()}`} onClick={() => handleItemClick(item)}>
                                            {item}
                                        </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenuToggle;