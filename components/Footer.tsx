import React from 'react';
import Icon from './Icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-12 md:px-12 lg:px-40 bg-black border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="font-urbanist font-normal text-[16px] leading-[154.02%] tracking-[0.025em] lowercase text-[#A9A9A9]">
        © {currentYear} all rights reserved.
      </div>

      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/godwin-chinedu-okoro-765583139/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
          <Icon name="linkedin" size="md" />
        </a>
        <a href="https://www.upwork.com/freelancers/~0121d2c8d3473b2691?mp_source=share" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
          <Icon name="upwork 1" size="md" />
        </a>
        {/* <Icon name="dribbble" size="md" /> */}
        <a href="https://web.facebook.com/godgood.chinedu" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
          <Icon name="facebook" size="md" />
        </a>
        <a href="https://www.instagram.com/chinedu12366/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
          <Icon name="instagram" size="md" />
        </a>
        <a href="https://x.com/GoChinedu" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
          <Icon name="twitter" size="md" />
        </a>
        <a href="https://github.com/G0dgood" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
          <Icon name="/images/github.jpg" size="md" className="rounded-full overflow-hidden border border-zinc-500" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
