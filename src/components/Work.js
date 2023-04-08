import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Img1 from "../assets/project1.png";
import Img2 from "../assets/project2.png";
import Img3 from "../assets/project3.png";
import Img4 from "../assets/project4.png";
import Img5 from "../assets/project5.png";
import Img6 from "../assets/project6.png";
import Img7 from "../assets/project7.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0"
          >
            {/*text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-2">
                My portfolio showcases a collection of projects I have
                completed, each with its unique set of challenges and solutions.
                I have experience in a variety of programming languages and
                platforms. Overall, my projects demonstrate my passion for
                technology and my ability to solve complex problems through
                innovative solutions.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/*image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="image1"
              />
              {/*pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mb-10"
          >
            {/*image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt="image2"
              />
              {/*pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            {/*image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt="image3"
              />
              {/*pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            {/*image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img4}
                alt="image4"
              />
              {/*pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/*image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img5}
                alt="image5"
              />
              {/*pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            {/*image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img6}
                alt="image6"
              />
              {/*pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            {/*image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img7}
                alt="image7"
              />
              {/*pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
