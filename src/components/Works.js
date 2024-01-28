import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

//services data
const works = [
  {
    name: "Money Guard App",
    description:
      "Application for tracking expenses and income. Used React, Redux, JS",
    linkNetlify: "https://martfrida.github.io/project-CodeCrafters/",
    linkGitLub: "https://github.com/MartFrida/project-CodeCrafters",
  },
  {
    name: "Rental Car App",
    description:
      "This application is for the car rental service in Ukraine. Used React, Redux, JS, axios, vite",
    linkNetlify: "https://rental-car-for-you.netlify.app/",
    linkGitLub: "https://github.com/MartFrida/rental-car-for-you",
  },
  {
    name: "Bicicleta shop",
    description:
      "Using React, Typescript, HTML/CSS, react-router, json, Vite.js, svg, react-router-dom, bootstrap, React-bootstrap, react hooks",
    linkNetlify: "https://bicicletas-shop.netlify.app/",
    linkGitLub: "https://gitlab.com/mart.frida/bicicletashop",
  },
  {
    name: "Things store",
    description:
      "Using React, Tailwindcss, react-router-dom, bootstrap, react hooks",
    linkNetlify: "https://ec-react.netlify.app/",
    linkGitLub: "https://gitlab.com/mart.frida/ec-react",
  },
  {
    name: "Multistep form with rules",
    description: "Using React, Typescript, React-bootstrap, React hooks",
    linkNetlify: "https://mf-multistep-form.netlify.app/",
    linkGitLub: "https://gitlab.com/mart.frida/multistep-form-react",
  },
  {
    name: "Calculator",
    description:
      "Created simple calculator with react. Using react-Textfit, package manager:yarn, hooks: useState, createComponent, useComponent",
    linkNetlify: "https://calculator-reacthooks-textfit.netlify.app/",
    linkGitLub: "https://gitlab.com/mart.frida/calculator-react",
  },
  {
    name: "Quote Machine",
    description:
      "Created quote machiine with using React, Bootstrap, react-hooks:useState",
    linkNetlify: "https://quotemachine-react.netlify.app/",
    linkGitLub: "https://gitlab.com/mart.frida/quotaschange",
  },
];

const Works = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto m-1rem">
        <div className="flex flex-col lg:flex-row xl:mt-3 ">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-6">
              I strive for clean and structural code. It is interesting to look
              for the most optimal solutions.
            </h3>
          </motion.div>
          {/* section */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 xl:h-screen"
          >
            {/* service list */}
            <div>
              {works.map((service, index) => {

                const { name, description, linkNetlify, linkGitLub } = service;
                return (
                  <div
                    className="border-b flex border-white/20 h-[7rem] mb-[2rem]"
                    key={index}
                  >
                    <div className="max-w-[30rem]">
                      <h4 className="text-[1,3rem] tracking-wider font-semibold font-primary mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight text-[1rem]">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={linkNetlify}
                        target="_blank"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                        rel="noreferrer">
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={linkGitLub}
                        target="_blank"
                        className="text-gradient text-sm" rel="noreferrer"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Works;
