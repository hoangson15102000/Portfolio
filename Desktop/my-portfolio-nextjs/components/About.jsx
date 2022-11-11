import Image from "next/image";
import React from "react";
import myimg from "../public/assets/myimg.JPG";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 px-16">
          <p className="uppercase tracking-widest text-xl text-[#5651e5] hover:text-red-800 duration-700">
            About
          </p>
          <h2 className="py-2">Who I Am?</h2>
          <p className="py-2 text-gray-700 tracking-widest">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-700 tracking-widest"></p>
          <p className="py-2  tracking-widest">
            <span className="text-[#5651e5] hover:text-cyan-500 duration-700 underline cursor-pointer">
              Check out some of my latest projects.
            </span>
          </p>
        </div>
        <div className="max-w-[300px] min-w-[250px] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={myimg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
