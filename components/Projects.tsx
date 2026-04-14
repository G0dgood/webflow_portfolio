"use client";

import Image from 'next/image';
import React, { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { projects, Project } from '@/constants/projects';

interface ProjectsProps {
  limit?: number;
}

const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [filter, setFilter] = useState<'All' | 'Newbie' | 'Junior' | 'Intermediate' | 'Advanced'>('All');

  const filteredProjects = useMemo(() => {
    let result = projects;

    if (!isHomePage && filter !== 'All') {
      result = projects.filter(p => p.level === filter);
    }

    if (limit) {
      result = result.slice(0, limit);
    } else if (isHomePage) {
      // Default homepage limit if not specified
      result = projects.slice(0, 4);
    }

    return result;
  }, [filter, isHomePage, limit]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const filterOptions = ['All', 'Newbie', 'Junior', 'Intermediate', 'Advanced'] as const;

  return (
    <section className="px-6 py-4 md:px-12 lg:px-40 bg-black ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="font-urbanist font-normal text-[14px] leading-[22px] tracking-[0.025em] text-[#A9A9A9]
          sm:text-[15px] sm:leading-[23px]
          md:text-[15px] md:leading-[24px]
          lg:text-[16px] lg:leading-[25px]
          xl:text-[17px] xl:leading-[26px] mb-10">
          {isHomePage ? "Featured Projects" : "All Projects"}
        </h2>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h3 className="font-urbanist font-medium text-[26px] leading-[30px] tracking-[0.025em] text-[#DEDEDE]
             sm:text-[30px] sm:leading-[34px]
             md:text-[33px] md:leading-[38px]
             lg:text-[35px] lg:leading-[40px]
             xl:text-[37px] xl:leading-[42px] w-full md:w-1/2">
            I craft digital solutions that showcase my passion and expertise in design and development.
          </h3>

          {!isHomePage && (
            <div className="flex flex-wrap gap-3">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setFilter(option)}
                  className={`px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-urbanist transition-all duration-300 border ${filter === option
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-500'
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`grid grid-cols-1 md:grid-cols-2 ${isHomePage ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-x-8 gap-y-16`}
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title + index}
              layout
              variants={projectVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col gap-6 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes={isHomePage ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                />
                {project.level && (
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.level}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-urbanist font-medium text-[22px] leading-[28px] tracking-[0.025em] text-[#DEDEDE]">
                  {project.title}
                </h4>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 rounded-full text-[11px] text-zinc-400 font-urbanist font-normal border border-[#484E53] hover:bg-zinc-800 transition-colors cursor-pointer capitalize">
                      {project.subtitle}
                    </button>
                    <button className="px-3 py-1 rounded-full text-[11px] text-zinc-400 font-urbanist font-normal border border-[#484E53] hover:bg-zinc-800 transition-colors cursor-pointer capitalize">
                      {project.tech}
                    </button>
                  </div>
                  <a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-[11px] font-medium font-urbanist text-[#A9A9A9] px-3 py-1 border border-[#484E53] rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap ${!project.link && 'opacity-50 cursor-not-allowed pointer-events-none'}`}
                  >
                    View Project <Image src="/images/Vector.svg" alt="arrow" width={10} height={10} className="invert group-hover:invert-0" style={{ height: 'auto' }} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {isHomePage && (
        <div className="flex justify-center mt-20">
          <Link href="/portfolio" className="bg-zinc-900 hover:bg-zinc-800 transition-colors font-urbanist font-medium italic leading-[22px] text-center text-white
          sm:text-[14px]
          md:text-[14px]
          lg:text-[15px]
            xl:text-[15px] box-border w-[180px] h-[44px] bg-[#141414] border border-[#484E53] rounded-[4px] whitespace-nowrap flex items-center justify-center">
            Explore all the project
          </Link>
        </div>
      )}

      {!isHomePage && (
        <div className="flex justify-center mt-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-urbanist font-medium text-[14px] leading-[22px] tracking-[0.025em] text-[#DEDEDE] hover:text-orange-500 transition-colors flex items-center gap-2 group flex flex-col cursor-pointer"
          >
            <span className="w-8 h-8 rounded-full border border-[#484E53] flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Back to top
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;

