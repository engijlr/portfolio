import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Img1 from "../assets/spotify-clone.png";
import Img2 from "../assets/youtube.png";
import Img3 from "../assets/todo-list.png";
import Img4 from "../assets/yelpcamp.png";
import Img5 from "../assets/movie-app.png";
import Img6 from "../assets/calories-tracker.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex gap-y-10 mb-10 lg:mb-0"
          >
            {/*text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-4">
                My portfolio showcases a collection of projects I have
                completed, each with its unique set of challenges and solutions.
                I have experience in a variety of programming languages and
                platforms. Overall, my projects demonstrate my passion for
                technology and they are just a small sample of what I can build
                when solving complex problems.
              </p>
              <button className="btn btn-sm">
                <a href="https://github.com/engijlr?tab=repositories">
                  See all my projects
                </a>
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mb-10"
          >
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
              <div className="absolute -bottom-full left-6 group-hover:bottom-12 transition-all duration-500 z-50">
                <a
                  href="https://github.com/engijlr/spotify-clone"
                  className="text-white"
                >
                  See code
                </a>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-6 group-hover:bottom-4 transition-all duration-700 z-50">
                <a
                  href="https://el-spotify-clone.netlify.app"
                  className="text-xl text-gradient"
                >
                  Spotify Clone
                </a>
              </div>
            </div>
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
              <div className="absolute -bottom-full left-6 group-hover:bottom-12 transition-all duration-500 z-50">
                <a
                  href="https://github.com/engijlr/youtube-clone-react"
                  className="text-white"
                >
                  See code
                </a>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-6 group-hover:bottom-4 transition-all duration-700 z-50">
                <a
                  href="https://radiant-daifuku-4271a6.netlify.app"
                  className="text-xl text-gradient"
                >
                  Youtube Clone
                </a>
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
              <div className="absolute -bottom-full left-6 group-hover:bottom-12 transition-all duration-500 z-50">
                <a
                  href="https://github.com/engijlr/todolist-react"
                  className="text-white"
                >
                  See code
                </a>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-6 group-hover:bottom-4 transition-all duration-700 z-50">
                <a
                  href="https://cheerful-cucurucho-45fd9b.netlify.app"
                  className="text-xl text-gradient"
                >
                  Todo List
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
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
              <div className="absolute -bottom-full left-6 group-hover:bottom-12 transition-all duration-500 z-50">
                <a
                  href="https://github.com/engijlr/yelpcamp"
                  className="text-white"
                >
                  See code
                </a>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-6 group-hover:bottom-4 transition-all duration-700 z-50">
                <a
                  href="https://yelpcamp-2csv.onrender.com/"
                  className="text-xl text-gradient"
                >
                  Yelpcamp
                </a>
              </div>
            </div>
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
              <div className="absolute -bottom-full left-6 group-hover:bottom-12 transition-all duration-500 z-50">
                <a
                  href="https://github.com/engijlr/movie-app"
                  className="text-white"
                >
                  See code
                </a>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-6 group-hover:bottom-4 transition-all duration-700 z-50">
                <a
                  href="https://engijlr.github.io/movie-app/"
                  className="text-xl text-gradient"
                >
                  Movie App
                </a>
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
              <div className="absolute -bottom-full left-6 group-hover:bottom-12 transition-all duration-500 z-50">
                <a
                  href="https://github.com/engijlr/calories-tracker"
                  className="text-white"
                >
                  See code
                </a>
              </div>
              {/*title */}
              <div className="absolute -bottom-full left-6 group-hover:bottom-4 transition-all duration-700 z-50">
                <a
                  href="https://playful-druid-aff7d2.netlify.app"
                  className="text-xl text-gradient"
                >
                  Calories Tracker
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
