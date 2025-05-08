import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import { motion } from "framer-motion";

const NavMenuToggle = () => {
  const list = ["Home", "About", "Sem", "Notes", "Blogs", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    if (isOpen) {
      setActiveItem(null); // Reset activeItem when closing the menu
    }
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    const element = document.getElementById(`${item.toLowerCase()}-outer`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-full"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-lg flex justify-center items-center z-40"
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
                  className={`w-[90%] mx-auto text-lg font-semibold ${
                    activeItem === item ? "bg-black text-white" : ""
                  }`}
                >
                  <a
                    href={`#${item.toLowerCase()}-outer`}
                    className={`block cursor-pointer transition-colors duration-300 py-2 px-4 rounded ${
                      activeItem === item
                        ? "bg-black text-white"
                        : "hover:text-blue-500"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default NavMenuToggle;
