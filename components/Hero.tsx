"use client";

import Image from 'next/image';
import Icon from './Icon';
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center pt-32 pb-16 px-6 text-center bg-black min-h-[85vh]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className="max-w-4xl font-urbanist font-normal text-[50px] leading-[60px] text-center tracking-[-0.02em] text-[#5F5F5F]
               sm:text-[60px] sm:leading-[72px]
               md:text-[68px] md:leading-[82px]
               lg:text-[75px] lg:leading-[90px]
               xl:text-[80px] xl:leading-[96px] mb-8"
        >
          Senior Frontend & <span className="font-urbanist font-semibold text-white">Mobile Developer.</span><br />
          <motion.span
            variants={itemVariants}
            className="font-urbanist font-medium text-[24px] md:text-[32px] text-zinc-500 mt-6 block"
          >
            Building Scalable & User-Centric Digital Experiences.
          </motion.span>
        </motion.h1>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition-colors px-8 py-4 rounded-full text-lg font-medium mb-16 border border-[#484E53] text-white"
        >
          Say hi <Image src="/images/👋🏻 1.svg" alt="hand wave" width={22} height={22} style={{ height: 'auto' }} />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="mt-auto"
        >
          <Icon name="scroll" size="lg" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
