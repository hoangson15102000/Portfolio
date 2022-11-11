import Image from "next/image";
import Link from "next/link";
import React from "react";
import netflix from "../public/assets/projects/netflix.jpg";
import crypto from "../public/assets/projects/crypto.jpg";

import landing from "../public/assets/projects/landing1.png";

const Project = () => {
  return (
    <div id="projects" className="w-full md:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center p-3 h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="group-hover:opacity-10 rounded-xl "
              src={netflix}
              alt="/"
            />
            <div className="absolute hidden  group-hover:block ">
              <h3 className="text-2xl tracking-widest text-center ">
                Netflix{" "}
              </h3>
              <p className="text-xl tracking-widest text-center pb-4 pt-2">
                React Projects
              </p>
              <Link href="/">
                <p className="bg-gray-300 font-bold w-[55%] m-auto text-sm px-1 py-3  rounded-xl text-center hover:bg-[#5651e5] hover:text-white duration-700">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center px-2 h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="group-hover:opacity-10 rounded-xl "
              src={landing}
              alt="/"
            />
            <div className="absolute hidden  group-hover:block ">
              <h3 className="text-2xl tracking-widest text-center ">
                Landing Page{" "}
              </h3>
              <p className="text-xl tracking-widest text-center pb-4 pt-2">
                Tailwind Projects
              </p>
              <Link href="/">
                <p className="bg-gray-300 font-bold w-[55%] m-auto text-sm px-1 py-3  rounded-xl text-center hover:bg-[#5651e5] hover:text-white duration-700">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-3 h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="group-hover:opacity-10 rounded-xl "
              src={crypto}
              alt="/"
            />
            <div className="absolute hidden  group-hover:block ">
              <h3 className="text-2xl tracking-widest text-center ">Crypto </h3>
              <p className="text-xl tracking-widest text-center pb-4 pt-2">
                React Projects
              </p>
              <Link href="/">
                <p className="bg-gray-300 font-bold w-[55%] m-auto text-sm px-1 py-3  rounded-xl text-center hover:bg-[#5651e5] hover:text-white duration-700">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
