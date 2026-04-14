"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Icon from './Icon';

const Testimonial = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="px-6 py-24 md:px-12 lg:px-40 bg-black">
      <p className="text-zinc-500 font-medium tracking-tight text-sm uppercase mb-12">App Review</p>
      {/* <p className="text-zinc-500 font-medium tracking-tight text-sm uppercase mb-12">what my clients say?</p> */}

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="relative w-full lg:w-1/2 aspect-video bg-zinc-900 overflow-hidden group rounded-xl border border-zinc-800">
          {isPlaying ? (
            <div className="relative w-full h-full">
              <video
                src="/eezy-video.mp4"
                autoPlay
                controls
                className="w-full h-full object-contain"
                onEnded={() => setIsPlaying(false)}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(false);
                }}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group/close"
                aria-label="Close video"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ) : (
            <>
              <Image
                src="/images/play.png"
                alt="Testimonial video thumbnail"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                onClick={() => setIsPlaying(true)}
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Icon name="play" size="2xl" />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="w-full lg:w-1/2">
          <h3 className="font-urbanist font-medium text-[26px] leading-[30px] tracking-[0.025em] text-[#DEDEDE]
           sm:text-[28px] sm:leading-[33px]
           md:text-[30px] md:leading-[34px] w-full md:w-[80%]">
            The EezyHealth Patient App bridges the gap between healthcare providers and patients, fostering a seamless connection that ensures medical support is always within reach through its intuitive and efficient digital platform.
          </h3>
          <div className="flex flex-col mt-8">
            <span className="text-white font-bold text-xl">— Godwin Chinedu</span>
            {/* <span className="text-zinc-500">CEO</span> */}
          </div>

          {/* <div className="flex gap-4 mt-12">
            <button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-900 transition-colors">
              <Image src="/images/Arrow_Left_LG.svg" alt="Prev" width={16} height={16} />
            </button>
            <button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-900 transition-colors">
              <Image src="/images/Arrow_Right_LG.svg" alt="Next" width={16} height={16} />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
