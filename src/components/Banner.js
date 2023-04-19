import React from "react";

import Image from "../assets/avatar1.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[88vh] flex items-center mb-12"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/*text*/}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[100px]"
            >
              ENGIBER <span>LOZADA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-4 text-[36px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1] min-h-[80px] lg:min-h-0"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Front-end-Developer",
                  2000,
                  "Front end Developer",
                  2000,
                ]}
                speed={1}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Who loves building visually stunning and user-friendly apps based
              on the fundamentals of today's front-end development, such as code
              reusability, semantic markup and accessibility.
              <br /> I am currently looking for an opportunity to continue
              growing, collaborating, and learning from more experienced
              developers, designers, data analysts, and/or product managers.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0"
            >
              <Link
                to="work"
                smooth={true}
                spy={true}
                className="btn btn-lg flex items-center justify-center cursor-pointer"
              >
                My Portfolio
              </Link>
            </motion.div>
            {/*socials*/}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/engijlr">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/engiber-lozada/">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/*image*/}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="Banner" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
