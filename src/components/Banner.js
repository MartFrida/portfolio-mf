import React from "react";
// images
import Image from "../assets/avatar.png";
//icons
import { FaFacebook, FaTelegram, FaGithub, FaLinkedinIn } from "react-icons/fa";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";


const Banner = () => {
  return (
    <section
      className=" min-h-[85vh] lg:min-h-[78vh]"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left mb-20">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              MARY <span>FRYDA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex  items-center gap-x-6 mx-auto mb-12"
            >
              <a className="btn px-6 py-3 rounded-full" href="https://t.me/maryfryda" target="_blank" rel="noreferrer">
                Contact me
              </a>

              <a href="https://github.com/MartFrida"
                target="_blank"
                className="text-gradient btn-link" rel="noreferrer"
              >
                My GitHub
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("left", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/MartFrida" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/maryna.fryda" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href="https://t.me/maryfryda" target="_blank" rel="noreferrer">
                <FaTelegram />
              </a>
              <a href="https://www.linkedin.com/in/mari-frida/" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[30vw] lg:max-w-482px"
          >
            <img src={Image} alt="avatar" className=" xl:w-80 xl:mb-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
