import Image from "next/image";
import React from "react";
import myimg from "../public/assets/myimg.JPG";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen lg:pt-60">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl hover:scale-105 duration-300 shadow-gray-400 rounded-xl p-4 ">
            <div className="lg:p-4 h-full m-4">
              <div className="pb-2">
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://cdn.tgdd.vn/Files/2020/09/10/1288853/nhung-thao-tac-co-ban-giup-nguoi-moi-su-dung-macbo-4-652x367.jpg"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="uppercase text-3xl hover:text-red-700 duration-700 py-2">
                  Nguyen Hoang Son
                </h2>
                <p className="">Front-End Developer</p>
                <p className="text-xl tracking-widest py-2">
                  I am available for full-time positions. Contact me and let's
                  talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-20 ">Connect with me</p>
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
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl  ease-in duration-500 ">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">email</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">subject</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  />
                </div>
                <div className="py-2 ">
                  <button className="opacity-80 py-3 w-full uppercase bg-gradient-to-r from-[#5651e5] to-blue-300 hover:opacity-100 ease-in duration-200">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 cursor-pointer hover:scale-110 ease-in duration-400">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
