import Image from 'next/image';
import Icon from './Icon';

const About = () => {
 return (
  <section className="px-6 py-24 md:px-12 lg:px-40 bg-black border-t border-[#484E53]">
   <div className="flex flex-col md:flex-row justify-between mb-12">
    <h2 className="font-urbanist font-normal text-[14px] leading-[22px] tracking-[0.025em] text-[#A9A9A9]
          sm:text-[15px] sm:leading-[23px]
          md:text-[15px] md:leading-[24px]
          lg:text-[16px] lg:leading-[25px]
          xl:text-[17px] xl:leading-[26px]">About Me</h2>
    <div className="flex gap-4 mt-4 md:mt-0">
     <a href="https://www.linkedin.com/in/godwin-chinedu-okoro-765583139/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
      <Icon name="linkedin" size="md" />
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
    </div>
   </div>

   <div className="flex flex-col md:flex-row gap-16 items-start justify-between min-h-[400px]">
    <div className="flex-1">
     <h3 className="font-urbanist font-medium leading-[32px] tracking-[0.025em] text-[#DEDEDE]
            sm:text-[32px] sm:leading-[36px]
            md:text-[36px] md:leading-[40px]
            lg:text-[38px] lg:leading-[44px] mb-8">
      Hi, I am <span className="text-white">Godwin Chinedu Okoro!</span> I&apos;m a Senior Frontend & Mobile Developer with 5+ years of experience building scalable, secure, and user-centric applications.
     </h3>
     <p className="font-urbanist font-medium text-[20px] leading-[28px] tracking-[0.025em] text-[#A9A9A9]
            sm:text-[22px] sm:leading-[30px]
            md:text-[24px] md:leading-[34px]
            lg:text-[26px] lg:leading-[38px]
            xl:text-[28px] xl:leading-[42px] max-w-2xl">
      Specializing in the <span className="text-[#DEDEDE]">MERN Stack</span>, <span className="text-[#DEDEDE]">Next.js</span>, and <span className="text-[#DEDEDE]">React Native</span>, I bridge the gap between complex backend logic and pixel-perfect frontend interfaces.
     </p>
    </div>
    <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full mb-10 border-2 border-zinc-800 mx-auto md:mx-0">
     <Image
      src="/images/Avatar.JPG"
      alt="Godwin Chinedu Okoro"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 256px, 320px"
     />
    </div>
   </div>
  </section>
 );
};

export default About;
