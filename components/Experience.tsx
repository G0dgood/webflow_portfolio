"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Pastech",
      type: "Contract",
      duration: "Feb 2026 - Mar 2026",
      location: "Ikeja, Lagos State, Nigeria · Remote",
      skills: ["Front-End Design", "JavaScript", "React.js"]
    },
    {
      role: "Frontend Developer",
      company: "SageByte",
      type: "Full-time",
      duration: "Dec 2024 - Nov 2025",
      location: "Canada · Remote",
      skills: ["React", "Next.js", "TypeScript", "Modern UI"]
    },
    {
      role: "React Native Developer",
      company: "Teners",
      type: "Contract",
      duration: "Jun 2024 - Dec 2024",
      location: "Abuja, Nigeria · Remote",
      skills: ["React Native", "React.js", "Software Architecture"]
    },
    {
      role: "React Native Developer",
      company: "EGF Logistics",
      type: "Contract",
      duration: "Sep 2024 - Nov 2024",
      location: "Cambodia · Remote",
      skills: ["React Native", "Expo", "Logistics Apps"]
    },
    {
      role: "Software Developer",
      company: "Outcess",
      type: "Full-time",
      duration: "Feb 2021 - Jul 2024",
      location: "Lagos State, Nigeria · Hybrid",
      skills: ["Bootstrap", "React Native", "Reforming Codebases"]
    },
    {
      role: "Lead Front-End Developer",
      company: "Safety Security Dynamics",
      type: "Freelance",
      duration: "Feb 2024 - Apr 2024",
      location: "Lagos State, Nigeria · Remote",
      skills: ["React.js", "TypeScript", "Front-End Web Development"]
    },
    {
      role: "React & React Native Developer",
      company: "Futti",
      type: "Contract",
      duration: "Oct 2023 - Jan 2024",
      location: "United Kingdom · Remote",
      skills: ["React Native", "Expo", "Analytics Integration"]
    },
    {
      role: "Front-End Web and Mobile Developer",
      company: "Arkland Group",
      type: "Contract",
      duration: "Aug 2022 - Dec 2023",
      location: "Victoria Island, Lagos · Hybrid",
      skills: ["React Native", "TypeScript", "Codebase Maintenance"]
    },
    {
      role: "Mobile Engineer",
      company: "Iverify.ng",
      type: "Contract",
      duration: "Dec 2021 - Oct 2022",
      location: "Lagos State, Nigeria · Remote",
      skills: ["React Native", "Cross Platform Development", "Interpersonal Communication"]
    },
    {
      role: "Front-End Developer",
      company: "Simplebooks (Simplebks)",
      type: "Contract",
      duration: "Apr 2021 - Sep 2021",
      location: "Lagos State, Nigeria · Remote",
      skills: ["JavaScript", "CSS", "Vue.js", "Tachyons"]
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const entryVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="px-6 py-32 md:px-12 lg:px-40 bg-black border-t border-[#484E53]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <p className="font-urbanist font-normal text-[14px] leading-[22px] tracking-[0.025em] text-[#A9A9A9]
          sm:text-[15px] sm:leading-[23px]
          md:text-[15px] md:leading-[24px]
          lg:text-[16px] lg:leading-[25px]
          xl:text-[17px] xl:leading-[26px] mb-4">My Journey</p>
        <h3 className="font-urbanist font-medium text-[26px] leading-[30px] tracking-[0.025em] text-[#DEDEDE]
           sm:text-[30px] sm:leading-[34px]
           md:text-[33px] md:leading-[38px]
           lg:text-[35px] lg:leading-[40px]
           xl:text-[37px] xl:leading-[42px]">
          Work Experience
        </h3>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-0"
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            variants={entryVariants}
            whileHover={{ x: 10 }}
            className="group flex flex-col md:flex-row justify-between py-10 border-b border-[#484E53]/30 hover:border-[#484E53] transition-all duration-300 cursor-default"
          >
            <div className="flex-1 max-w-2xl">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <h4 className="font-urbanist font-semibold text-[22px] md:text-[26px] text-[#DEDEDE] group-hover:text-white transition-colors">
                  {exp.role}
                </h4>
                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span className="font-urbanist font-medium text-[18px] md:text-[20px] text-[#A9A9A9]">
                  {exp.company}
                </span>
                <span className="inline-block px-3 py-1 text-[12px] font-bold tracking-widest text-orange-500/80 border border-orange-500/30 rounded-full uppercase w-fit">
                  {exp.type}
                </span>
              </div>
              <p className="font-urbanist font-normal text-[14px] md:text-[16px] text-[#5F5F5F] mb-6">
                {exp.location}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, si) => (
                  <span 
                    key={si} 
                    className="font-urbanist font-medium text-[13px] text-[#A9A9A9] bg-zinc-900/50 px-3 py-1 rounded-md group-hover:bg-zinc-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-6 md:mt-0 text-left md:text-right">
              <p className="font-urbanist font-medium text-[16px] md:text-[18px] text-[#DEDEDE]">
                {exp.duration}
              </p>
              <p className="font-urbanist font-normal text-[14px] text-[#5F5F5F] mt-1 italic">
                {[1, 2, 3, 4, 5].includes(index) ? "LinkedIn referral" : [6, 7, 8, 9].includes(index) ? "Personal referral" : ""}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
