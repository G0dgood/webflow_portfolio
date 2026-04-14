"use client";

import React from 'react';
import Icon from './Icon';
import { motion, Variants } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      title: "Full-Stack Development",
      desc: "Specializing in the MERN Stack (MongoDB, Express, React, Node.js) to build scalable, secure, and data-driven web applications.",
      icon: "Group 483229"
    },
    {
      title: "Mobile App Development",
      desc: "Expert in cross-platform mobile solutions using React Native and Expo, focusing on high-performance logistics and consumer apps.",
      icon: "Group 483233"
    },
    {
      title: "Modern Web Frameworks",
      desc: "Mastering Next.js for server-side rendering, improved SEO, and highly interactive user interfaces with optimal performance.",
      icon: "Group 483234"
    },
    {
      title: "State Management",
      desc: "Using Redux Toolkit, Context API, and modern state patterns to manage complex application data flows with precision.",
      icon: "Group 483265"
    },
    {
      title: "Backend & CMS",
      desc: "Integrating headless CMS like Strapi, real-time databases like Firebase, and building robust RESTful and GraphQL APIs.",
      icon: "Group 483264"
    },
    {
      title: "UI/UX Architecture",
      desc: "Transforming Figma designs into pixel-perfect responsive code using Tailwind CSS, Material UI, and modern styling libraries.",
      icon: "Group 483263"
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-6 py-24 md:px-12 lg:px-40 bg-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="font-urbanist font-normal text-[14px] leading-[22px] tracking-[0.025em] text-[#A9A9A9]
          sm:text-[15px] sm:leading-[23px]
          md:text-[15px] md:leading-[24px]
          lg:text-[16px] lg:leading-[25px]
          xl:text-[17px] xl:leading-[26px] mb-4">What Do I Do And How?</p>
        <h3 className="font-urbanist font-medium text-[26px] leading-[30px] tracking-[0.025em] text-[#DEDEDE]
           sm:text-[30px] sm:leading-[34px]
           md:text-[33px] md:leading-[38px]
           lg:text-[35px] lg:leading-[40px]
           xl:text-[37px] xl:leading-[42px] w-full md:w-1/2">
          I love to craft functional solutions for unique problems. These are some skills I&apos;ve picked up over my career.
        </h3>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            whileHover={{ y: -10, borderColor: "#777" }}
            className="p-10 border border-[#484E53] bg-zinc-950/20 hover:bg-zinc-900/40 transition-colors cursor-default"
          >
            <div className="w-12 h-12 mb-8 mt-30 flex items-center justify-center">
              <Icon name={skill.icon} size="lg" />
            </div>
            <h4 className="font-urbanist font-normal text-[22px] leading-[26px] tracking-[0.025em] text-[#DEDEDE]
           sm:text-[24px] sm:leading-[28px]
           md:text-[26px] md:leading-[30px]
           lg:text-[28px] lg:leading-[32px]
           xl:text-[30px] xl:leading-[34px] mb-4 capitalize">{skill.title}</h4>
            <p className="font-urbanist font-normal text-[12px] leading-[20px] tracking-[0.025em] text-[#A9A9A9]
          sm:text-[13px] sm:leading-[21px]
          md:text-[13px] md:leading-[22px]
          lg:text-[14px] lg:leading-[24px]
          xl:text-[15px] xl:leading-[25px]">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
