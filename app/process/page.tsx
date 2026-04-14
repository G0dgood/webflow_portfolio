"use client";


import Navbar from '@/components/Navbar';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import { motion, Variants } from 'framer-motion';

const ProcessPage = () => {
  const steps = [
    {
      id: "Step 01",
      title: "Get Started",
      desc: "Starting with create a coming soon page for your website. \n\n Why? Because it builds anticipation. A coming soon page generates buzz and excitement about your website before it even launches. This can be particularly helpful for new businesses or startups that want to generate interest and curiosity around their brand."
    },
    {
      id: "Step 02",
      title: "Planning",
      desc: "At Begin by defining the goals and objectives of the website. This includes understanding the target audience, identifying the key features and functionality required, and establishing a timeline for the project.\n\nDevelop a detailed plan for the project, including the site architecture, wireframes, and design concept with should also include a content strategy and a plan for search engine optimization."
    },
    {
      id: "Step 03",
      title: "Design",
      desc: "Identify branding elements: The first step in creating the visual design of a website is to identify the client's branding elements. This includes their logo, color palette, typography, and any other design elements that are part of your brand identity.\n\nChoose imagery: It's important to choose images that are high-quality, relevant to the content, and consistent with the brand identity. This can include photographs, illustrations, icons, and other graphic elements.\n\nCreate a design concept: That aligns with the your goals and objectives. This involves creating a mockup or prototype of the website that incorporates these elements and establishes a visual hierarchy for the content.\n\nRefine the design: After the initial design concept has been created, we will take a feedback from you, and we are ready to making some adjustments (if needed) to the layout, color scheme, typography, or imagery to better align with your goals and objectives."
    },
    {
      id: "Step 04",
      title: "Development",
      desc: "We will present a fully design demo website with mobile responsive design and it will iterate to get the visual right. After design approval we will develop the website.\n\nI will use platform like, WordPress, Webflow, Elementor, and Shopify to develop the website complete with a CMS (content management system) that will allow you to edit/manage your website's content without the need for a developer."
    },
    {
      id: "Step 05",
      title: "Launching",
      desc: "Testing: Conduct thorough testing of the website, including functional testing, user testing, and performance testing. This ensures that the website works as intended and meets user expectations.\n\nLaunch: Once the website has been thoroughly tested and approved, launch it to the public. This includes setting up hosting, domain registration, and any necessary DNS settings."
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-black text-white font-urbanist selection:bg-orange-500 selection:text-black">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="flex flex-col items-center justify-center pt-32 pb-16 px-6 text-center bg-black min-h-[60vh] ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-urbanist font-semibold text-[50px] leading-[60px] text-center tracking-[-0.02em] text-white
              sm:text-[60px] sm:leading-[72px]
              md:text-[68px] md:leading-[82px]
              lg:text-[75px] lg:leading-[90px]
              xl:text-[80px] xl:leading-[96px] mb-8">
              Working Process
            </h1>
            <p className="font-urbanist font-normal text-[16px] leading-[22px] text-center tracking-[0.025em] text-[#A9A9A9] max-w-full mx-auto sm:text-[18px] sm:leading-[24px] md:text-[24px] md:leading-[28px] md:max-w-[718px]">
              How I Combine design and technology to create exceptional user experiences.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className="mt-12 mb-10"
            >
              <Icon name="scroll" size="lg" />
            </motion.div>
          </motion.div>
        </section>

        {/* Steps Section */}
        <section className="px-6 py-24 md:px-12 lg:px-40 border-t border-[#484E53]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-32"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-12 md:gap-24 pt-16"
              >
                <div className="md:w-1/3">
                  <span className="font-urbanist font-normal text-[14px] leading-[22px] tracking-[0.025em] text-[#A9A9A9] sm:text-[15px] sm:leading-[24px] md:text-[16px] md:leading-[25px] lg:text-[16px] lg:leading-[25px]">
                    {step.id}
                  </span>
                  <h3 className="font-urbanist font-medium text-[24px] leading-[30px] tracking-[0.025em] text-[#DEDEDE] sm:text-[30px] sm:leading-[36px] md:text-[34px] md:leading-[40px] lg:text-[38px] lg:leading-[44px] mt-4">
                    {step.title}
                  </h3>
                </div>
                <div className="md:w-2/3 border-b border-[#484E53] pb-16">
                  <p className="text-zinc-500 text-xl leading-relaxed whitespace-pre-wrap font-urbanist font-normal text-[18px] leading-[21px] tracking-[0.025em] text-[#DEDEDE] sm:text-[20px] sm:leading-[23px] md:text-[24px] md:leading-[28px] lg:text-[24px] lg:leading-[28px]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default ProcessPage;
