import React from 'react';
import Navbar from '@/components/Navbar';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import Icon from '@/components/Icon';

const PortfolioPage = () => {
  return (
    <div className="bg-black text-white font-urbanist selection:bg-orange-500 selection:text-black">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center pt-32 pb-16 px-6 text-center bg-black min-h-[60vh]">
          <h1 className="max-w-5xl font-urbanist font-normal text-[50px] leading-[60px] text-center tracking-[-0.02em] text-[#5F5F5F]
           sm:text-[60px] sm:leading-[72px]
           md:text-[68px] md:leading-[82px]
           lg:text-[75px] lg:leading-[90px]
           xl:text-[80px] xl:leading-[96px]">
            Showcasing <span className="">my</span> <span className='font-urbanist font-semibold text-[50px] leading-[60px] text-center tracking-[-0.02em] text-white
           sm:text-[60px] sm:leading-[72px]
           md:text-[68px] md:leading-[82px]
           lg:text-[75px] lg:leading-[90px]
           xl:text-[80px] xl:leading-[96px]'>talent</span>
            <br className="hidden md:block" />
            and <span className='font-urbanist font-semibold text-[50px] leading-[60px] text-center tracking-[-0.02em] text-white
           sm:text-[60px] sm:leading-[72px]
           md:text-[68px] md:leading-[82px]
           lg:text-[75px] lg:leading-[90px]
           xl:text-[80px] xl:leading-[96px]'>passion</span>
          </h1>

          <div className="mt-auto animate-bounce opacity-50">
            <Icon name="scroll" size="lg" />
          </div>
        </section>

        {/* Projects Section */}
        <section className="border-t border-[#484E53]">
          <Projects />
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
