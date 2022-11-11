import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleDisplayNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl  z-[100] bg-[#ecf0f3] "
          : "fixed w-full h-20  z-[100] bg-[#ecf0f3] "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home">
          <Image
            src="/../public/assets/navBarlogo.png"
            alt=""
            width={125}
            height={50}
          />
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link href="/#home">
              <li className="uppercase text-sm ml-10 hover:text-red-800">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="uppercase text-sm ml-10 hover:text-red-800">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="uppercase text-sm ml-10 hover:text-red-800">
                Skill
              </li>
            </Link>
            <Link href="/#projects">
              <li className="uppercase text-sm ml-10 hover:text-red-800">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="uppercase text-sm ml-10 hover:text-red-800">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={() => {
              handleDisplayNav();
            }}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70"
              : "fixed"
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-200%] top-0 ease-in duration-1000"
            }
          >
            <div className="flex justify-between w-full items-center">
              <Link href="/#home">
                <Image
                  src="/../public/assets/navBarlogo.png"
                  alt=""
                  width={150}
                  height={50}
                />
              </Link>

              <div
                onClick={() => {
                  handleDisplayNav();
                }}
                className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:bg-gray-200"
              >
                <AiOutlineClose onClick={handleDisplayNav} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%]">
                If you fall asleep now, you will dream. If you study now, you
                will live your dream.
              </p>
            </div>
            <div>
              <ul className="flex flex-col">
                <Link href="/#home">
                  <li
                    onClick={() => setNav(false)}
                    className="uppercase text-sm hover:text-red-800 py-4"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => setNav(false)}
                    className="uppercase text-sm hover:text-red-800 py-4"
                  >
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={() => setNav(false)}
                    className="uppercase text-sm hover:text-red-800 py-4"
                  >
                    Skill
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => setNav(false)}
                    className="uppercase text-sm hover:text-red-800 py-4"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    onClick={() => setNav(false)}
                    className="uppercase text-sm hover:text-red-800 my-8"
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase text-[#5651e5] hover:text-blue-700">
                  Let's connect
                </p>
                <div className="flex justify-between my-4 w-full sm:w-[50%] ">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 md:p-3 cursor-pointer hover:scale-105 ease-in duration-600">
                    <AiFillLinkedin size={25} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 md:p-3 cursor-pointer hover:scale-105 ease-in duration-600">
                    <AiOutlineMail size={25} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 md:p-3 cursor-pointer hover:scale-105 ease-in duration-600">
                    <FaGithub size={25} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 md:p-3 cursor-pointer hover:scale-105 ease-in duration-600">
                    <BsFillPersonLinesFill size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
