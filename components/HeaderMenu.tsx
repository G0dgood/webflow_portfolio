"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const HeaderMenu = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Process', href: '/process' },
  ];

  return (
    <div className="hidden lg:flex items-center gap-10">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={(e) => {
            if (link.href.startsWith('/#') && pathname === '/') {
              e.preventDefault();
              const targetId = link.href.split('#')[1];
              const el = document.getElementById(targetId);
              el?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className={`font-urbanist text-[15px] font-medium transition-colors duration-300 flex flex-col items-center group ${
            (link.href === pathname) 
              ? 'text-orange-500' 
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          {link.name}
          {(link.href === pathname) && (
            <motion.div 
              layoutId="activeNav"
              className="w-1 h-1 bg-orange-500 rounded-full mt-1"
            />
          )}
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
