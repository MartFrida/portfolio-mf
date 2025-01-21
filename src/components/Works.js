import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//services data
import { dataWorks } from '../data/data.js'
import { useState, useEffect } from "react";

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="container xl:max-h-[90vh] lg:max-h-[90vh] max-w-[100vw] m-2 md:min-h-full" id="services">
      <div className="flex flex-col md:flex-row xl:mt-3 gap-12  overflow-y-auto md:overflow-visible sm:gap-0">
        {/* text & image */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 lg:bg-services lg:bg-bottom bg-cover backdrop-blur-xl bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
        >
          <h2 className="h2 text-accent mb-6 tracking-widest">What I Do.</h2>
          <h3 className="h3 max-w-full mb-6 font-normal tracking-wide md ">
            I focus on writing clean, well-structured code and enjoy exploring the most optimal solutions to challenges. Here you can find some of my latest projects.
          </h3>
        </motion.div>
        {/* section */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial={isMobile ? "active" : "hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 md:max-h-[90vh] p-2 md:overflow-x-hidden md:overflow-y-auto"
        >
          {/* service list */}

          <div className="sm:min-h-max sm:overflow-visible   ">
            {dataWorks.map((service, index) => {

              const { name, description, linkNetlify, linkGitLub, deploy } = service;
              return (
                <div
                  className="border-b flex border-white/20 my-4 sm:min-h-max  "
                  key={index}
                >
                  <div className="xl:max-w-[80%] ">
                    <h4 className="h4 tracking-widest font-semibold font-primary mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight text-[1rem] mb-4">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end mx-4 min-w-24 md:min-w-20">
                    <a
                      href={linkNetlify || deploy}
                      target="_blank"
                      className="btn w-9 h-9  mb-8 flex justify-center items-center"
                      rel="noreferrer">
                      <BsArrowUpRight />
                    </a>
                    <a
                      href={linkGitLub}
                      target="_blank"
                      className="text-gradient text-sm md:text-xs" rel="noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>

  );
};

export default Works;
