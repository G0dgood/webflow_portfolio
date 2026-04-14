import React from 'react';
import Icon from './Icon';

const CTA = () => {
  return (
    <section className="px-6 py-32 md:px-12 lg:px-40 bg-black flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
      <div className="flex-1">
        <h2 className="font-bold capitalize tracking-[0.07em] text-[#DEDEDE] 
    text-[40px] leading-[1.06]        
    sm:text-[50px] sm:leading-[1.06]   
    md:text-[60px] md:leading-[1.06]  
    lg:text-[75px] lg:leading-[1.06]  
    xl:text-[80px] xl:leading-[1.06]  ">
          Let&apos;s <br />
          WorkTogether <span>-</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6 w-full md:w-auto">
        <a
          href="mailto:chinedu.go@gmail.com"
          className="flex items-center gap-4 px-6 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:bg-zinc-900 transition-all font-bold text-xl group box-border w-full md:w-[310px] h-auto md:h-[76.24px] border-[1.556px] border-[#A9A9A9] rounded-[6.703px] font-urbanist font-medium text-[18px] md:text-[18px] leading-[149.02%] text-justify text-[#DEDEDE]"
        >
          <Icon name="Gmail" size="md" className="opacity-70 group-hover:opacity-100 transition-opacity" />
          chinedu.go@gmail.com
        </a>
        <a
          href="https://www.upwork.com/freelancers/~0121d2c8d3473b2691"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-6 md:px-8 py-5 bg-[#1D6400] hover:bg-[#37a000]/90 rounded-2xl transition-all font-bold text-xl text-white group box-border w-full md:w-[310px] h-auto md:h-[76.24px] border-[1.556px] border-[#A9A9A9] rounded-[6.703px] font-urbanist font-medium text-[18px] md:text-[18px] leading-[149.02%] text-justify text-[#DEDEDE] whitespace-nowrap"
        >
          <Icon name="upwork 1" size="md" className="brightness-0 invert" />
          Hire me on Upwork
        </a>
      </div>
    </section>
  );
};

export default CTA;
