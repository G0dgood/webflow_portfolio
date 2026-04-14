"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FullMenu from './FullMenu';
import Icon from './Icon';
import HeaderMenu from './HeaderMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-40 bg-black relative z-40">
        <div className="font-inter font-bold text-[27px] leading-[33px] text-[#DEDEDE]">Godwin<span className="text-orange-500">.</span></div>

        <div className="flex items-center gap-10">
          <HeaderMenu />

          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 focus:outline-none transition-transform hover:scale-110"
            aria-label="Open Menu"
          >
            <Icon name="menu" width={24} height={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <FullMenu onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
