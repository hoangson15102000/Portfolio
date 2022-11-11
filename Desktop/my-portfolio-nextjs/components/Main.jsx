import React from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className=" w-full h-screen text-center  ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-500">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-600">
            Hi, I'm <span className="text-[#5651e5]">Nguyen Son</span>
          </h1>
          <h1 className="py-4 text-gray-600">
            A <span className="text-[#5651e5]">Front-End</span> Web Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] mx-auto">
            I'm a front-end web developer. I'm focused on building responsive
            front-end web applications while learning back-end technologies. My
            goal in the next 3 years is to become a full-stack developer.
          </p>

          <div className="flex justify-between my-4 w-full max-w-[330px] mx-auto text-[#5651e5] ">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 cursor-pointer hover:scale-110 ease-in duration-400">
              <AiFillLinkedin size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 cursor-pointer hover:scale-110 ease-in duration-400">
              <AiOutlineMail size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 cursor-pointer hover:scale-110 ease-in duration-400">
              <FaGithub size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 cursor-pointer hover:scale-110 ease-in duration-400">
              <BsFillPersonLinesFill size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
