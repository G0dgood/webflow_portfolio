import Image from 'next/image';
import React from 'react';

const Process = () => {
  const steps = [
    {
      id: "Step 01",
      title: "Planning",
      desc: "Define goal, wireframe, design concept, content write.",
      icon: "/images/Planning.svg",
      position: "top"
    },
    {
      id: "Step 02",
      title: "Design",
      desc: "Visual design, branding elements, color, typography and images.",
      icon: "/images/Design.svg",
      position: "bottom"
    },
    {
      id: "Step 03",
      title: "Development",
      desc: "Develop website with responsive design that works across different device.",
      icon: "/images/Development.svg",
      position: "top"
    },
    {
      id: "Step 04",
      title: "Launch",
      desc: "Once the website has been thoroughly tested and approved, launch it to the public.",
      icon: "/images/Launch.svg",
      position: "bottom"
    },
  ];

  return (
    <section className="px-6 py-40 md:px-12 lg:px-40 bg-black overflow-hidden border-t border-[#484E53]">
      <div className="relative max-w-7xl mx-auto min-h-[500px]">

        {/* Connecting Lines (Desktop Only) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
          {/* Line 1 -> 2 (Down) */}
          <div className="absolute top-[180px] left-[14%] w-[22%]">
            <Image src="/images/Line 19.svg" alt="" width={238} height={156} className="w-full h-auto" style={{ height: 'auto' }} />
          </div>
          {/* Line 2 -> 3 (Up) */}
          <div className="absolute top-[160px] left-[39%] w-[22%]">
            <Image src="/images/Line 20.svg" alt="" width={205} height={157} className="w-full h-auto" style={{ height: 'auto' }} />
          </div>
          {/* Line 3 -> 4 (Down) */}
          <div className="absolute top-[180px] left-[64%] w-[22%]">
            <Image src="/images/Line 19.svg" alt="" width={238} height={156} className="w-full h-auto" style={{ height: 'auto' }} />
          </div>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-32 lg:gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative z-10 flex flex-col items-center text-center w-full lg:w-1/4
                ${step.position === 'bottom' ? 'lg:mt-64' : ''}
              `}
            >
              {/* Top Content Layout */}
              {step.position === 'top' ? (
                <div className="flex flex-col items-center">
                  <p className="hidden lg:block font-urbanist font-normal text-[14px] leading-[22px] tracking-[0.025em] text-[#A9A9A9] opacity-70 mb-2 max-w-[200px]">
                    {step.desc}
                  </p>
                  <h4 className="font-urbanist font-medium text-[20px] md:text-[24px] tracking-[0.025em] text-[#DEDEDE] mb-6">
                    {step.title}
                  </h4>
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-[#484E53] bg-black flex items-center justify-center hover:border-white/20 transition-colors">
                    <div className="relative w-12 h-12 md:w-16 md:h-16">
                      <Image src={step.icon} alt={step.title} fill className="object-contain" sizes="64px" />
                    </div>
                  </div>
                </div>
              ) : (
                /* Bottom Content Layout */
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-[#484E53] bg-black flex items-center justify-center mb-6 hover:border-white/20 transition-colors">
                    <div className="relative w-12 h-12 md:w-16 md:h-16">
                      <Image src={step.icon} alt={step.title} fill className="object-contain" sizes="64px" />
                    </div>
                  </div>
                  <h4 className="font-urbanist font-medium text-[20px] md:text-[24px] tracking-[0.025em] text-[#DEDEDE] mb-4">
                    {step.title}
                  </h4>
                  <p className="hidden lg:block font-urbanist font-normal text-[14px] leading-[22px] tracking-[0.025em] text-[#A9A9A9] opacity-70 max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              )}

              {/* Mobile Description (Always below) */}
              <p className="lg:hidden mt-4 max-w-sm font-urbanist font-normal text-[14px] leading-[22px] tracking-[0.025em] text-[#A9A9A9] px-6">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
