import Image from 'next/image';
import React from 'react';

const Brands = () => {
  const brands = [
    {
      name: "Meta",
      role: "Front-End Developer - 2023",
    },
    {
      name: "Andela",
      role: "React Developer - 2023",
    },
    {
      name: "Google",
      role: "Google Africa Developer - 2022",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-40 bg-black border-y border-[#484E53] mb-10 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className={`flex flex-col gap-2 py-10 px-12 ${brand.name === 'Andela' ? 'md:border-x border-[#484E53]' : ''}`}
          >
            <div className="flex items-center gap-4 justify-center md:justify-start mb-2">
              <span className="font-urbanist font-extrabold text-[28px] md:text-[32px] tracking-[-0.04em] text-white leading-none">
                {brand.name}<span className="text-orange-500">.</span>
              </span>
            </div>
            <p className="font-urbanist font-normal text-[16px] leading-[24px] tracking-[0.025em] text-[#A9A9A9]
          sm:text-[18px] sm:leading-[27px]
          md:text-[19px] md:leading-[29px]
          lg:text-[20px] lg:leading-[31px]
          xl:text-[22px] xl:leading-[34px]">{brand.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
