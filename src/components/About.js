import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiRedux, SiMui } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Front End",
    description: "HTML, CSS, JAVASCRIPT",
    icons: [<FaHtml5 />, <FaCss3 />, <FaJs />],
  },
  {
    name: "Frameworks",
    description: "REACT, BOOTSTRAP, TAILWIND, REDUX, MATERIAL UI",
    icons: [
      <FaReact />,
      <FaBootstrap />,
      <SiTailwindcss />,
      <SiRedux />,
      <SiMui />,
    ],
  },
  {
    name: "Back End & Database",
    description: "NODE.JS, MONGODB",
    icons: [<FaNodeJs />, <SiMongodb />],
  },
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text & img*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              There's a sense of endless possibility when it comes to
              programming; with just a few lines of code, I can create something
              new and exciting that didn't exist before. I love the way that it
              challenges me to think creatively and logically, and the
              satisfaction that comes with finding elegant solutions to complex
              problems.
            </h3>
            <button className="btn btn-sm">
              <a href="https://github.com/engijlr?tab=repositories">
                See my work
              </a>
            </button>
          </motion.div>
          {/*services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            {/*services list */}
            <div>
              {services.map((service, index) => {
                const { name, description, icons } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[160px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                      <div className="flex flex-row">
                        {icons.map((icon, i) => {
                          return (
                            <button
                              key={i}
                              className="btn w-9 h-9 my-2 mx-2 flex justify-center items-center"
                            >
                              {icon}
                            </button>
                          );
                        })}
                      </div>
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

export default About;
