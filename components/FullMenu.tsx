"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';

interface FullMenuProps {
  onClose: () => void;
}

import HeaderMenu from './HeaderMenu';

import { usePathname } from 'next/navigation';

import { motion } from "framer-motion";

const FullMenu: React.FC<FullMenuProps> = ({ onClose }) => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Process', href: '/process' },
  ];

  const socialIcons = [
    { name: 'linkedin', href: 'https://www.linkedin.com/in/godwin-chinedu-okoro-765583139/' },
    { name: 'upwork 1', href: 'https://www.upwork.com/freelancers/~0121d2c8d3473b2691?mp_source=share' },
    { name: 'facebook', href: 'https://web.facebook.com/godgood.chinedu' },
    { name: 'instagram', href: 'https://www.instagram.com/chinedu12366/' },
    { name: 'twitter', href: 'https://x.com/GoChinedu' },
    { name: '/images/github.jpg', href: 'https://github.com/G0dgood' },
  ];

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col md:flex-row overflow-y-auto"
    >
      {/* Header inside menu */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-6 md:px-12 lg:px-40 z-10">
        <div className="font-urbanist font-bold text-[27px] leading-[33px] text-[#DEDEDE]">Godwin<span className="text-orange-500">.</span></div>

        <div className="flex items-center gap-10">
          {/* <HeaderMenu /> */}
          <button
            onClick={onClose}
            className="p-2 focus:outline-none hover:rotate-90 transition-transform duration-300"
            aria-label="Close Menu"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Left Content (Bio) - Adjusted for scrollable mobile view */}
      <div className="flex-1 flex flex-col justify-start md:justify-center px-6 pt-32 pb-12 md:py-0 md:px-12 lg:pl-40 lg:pr-12 border-b md:border-b-0 md:border-r border-zinc-900/50">
        <div className="max-w-md">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full mb-10 border-2 border-zinc-800 mx-auto md:mx-0">
            <Image
              src="/images/Avatar.JPG"
              alt="Godwin Chinedu Okoro"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
          <h2 className="font-urbanist font-semibold text-[28px] leading-[32px] tracking-[0.025em] text-[#DEDEDE]
           sm:text-[32px] sm:leading-[36px]
           md:text-[35px] md:leading-[40px]
           lg:text-[38px] lg:leading-[44px]
           xl:text-[40px] xl:leading-[46px] mb-10 text-center md:text-left">
            Hi, I am Godwin (GodGooD)! I am a Senior Software Developer based in Nigeria.
          </h2>

          <div className="space-y-4 mb-12 text-zinc-500 font-medium text-center md:text-left">
            <div className="flex justify-center md:justify-start gap-2"><span>Country -</span> <span className="text-zinc-400">Nigeria</span></div>
            <div className="flex justify-center md:justify-start gap-2"><span>Whatsapp -</span> <span className="text-zinc-400">+2348064378786</span></div>
            <div className="flex justify-center md:justify-start gap-2"><span>Email -</span> <span className="text-zinc-400">chinedu.go@gmail.com</span></div>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.href}
                target={icon.href !== '#' ? "_blank" : undefined}
                rel={icon.href !== '#' ? "noopener noreferrer" : undefined}
                className="hover:opacity-75 transition-opacity"
              >
                <Icon name={icon.name} size="md" className={icon.name.includes('github') ? 'rounded-full border border-zinc-500 overflow-hidden' : ''} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Content (Nav Links) - Adjusted for scrollable mobile view */}
      <div className="flex-1 flex flex-col justify-start md:justify-center px-6 py-12 md:py-0 md:px-12 lg:px-24">
        <nav className="flex flex-col gap-6 md:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('/#')) {
                  if (pathname === '/') {
                    e.preventDefault();
                    onClose();
                    const targetId = link.href.split('#')[1];
                    const el = document.getElementById(targetId);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onClose();
                  }
                } else {
                  onClose();
                }
              }}
              className={`font-urbanist font-medium text-[42px] leading-[50px] tracking-[-0.005em] capitalize flex items-center gap-4 transition-all duration-300
           sm:text-[48px] sm:leading-[58px]
           md:text-[54px] md:leading-[64px]
           lg:text-[60px] lg:leading-[72px]
            xl:text-[66px] xl:leading-[78px] ${pathname === link.href
                  ? 'text-orange-500'
                  : 'text-[#DEDEDE] hover:text-orange-500'
                }`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.span
                  layoutId="activeDotMobile"
                  className="w-3 h-3 bg-orange-500 rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default FullMenu;
