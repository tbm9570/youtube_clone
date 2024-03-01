import React, { useState } from "react";
// import { categories } from "../utils/constants";
import { Link } from "react-router-dom";

import {
  FaBellSlash,
  FaCode,
  FaGraduationCap,
  FaHome,
  FaMusic,
  FaPodcast,
  FaReact,
  FaSchool,
} from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";
import { SiTaichigraphics } from "react-icons/si";
import { MdLiveTv, MdSports, MdTheaterComedy } from "react-icons/md";
import { CgGirl, CgGym, CgStyle } from "react-icons/cg";
import { TbBrandNextjs, TbCoinBitcoinFilled } from "react-icons/tb";

const Sidebar = ({ cruntCategory, setCruntCategory }) => {
  const categories = [
    {
      name: "New",
      icon: <FaHome size={22} />,
    },
    {
      name: "JS Mastery",
      icon: <FaCode size={22} />,
    },
    { name: "Coding", icon: <FaCode size={22} /> },
    { name: "ReactJS", icon: <FaReact size={22} /> },
    { name: "NextJS", icon: <TbBrandNextjs size={22} /> },
    { name: "Music", icon: <FaMusic size={22} /> },
    { name: "Education", icon: <FaGraduationCap size={22} /> },
    { name: "Podcast", icon: <FaPodcast size={22} /> },
    { name: "Movie", icon: <MdLiveTv size={22} /> },
    { name: "Gaming", icon: <IoGameController size={22} /> },
    { name: "Live", icon: <BiSolidCameraMovie size={22} /> },
    { name: "Sport", icon: <MdSports size={22} /> },
    { name: "Fashion", icon: <CgStyle size={22} /> },
    { name: "Beauty", icon: <CgGirl size={22} /> },
    { name: "Comedy", icon: <MdTheaterComedy size={22} /> },
    { name: "Gym", icon: <CgGym size={22} /> },
    { name: "Crypto", icon: <TbCoinBitcoinFilled size={22} /> },
  ];

  return (
    <>
      <section className="w-full lg:w-72  lg:h-[calc(100vh-3.5rem)] lg:fixed  bg-primary border-b-2 lg:border-b-0 lg:border-t-2 lg:border-r-2 border-solid  border-secondary overflow-auto no-scrollbar ">
        <div className="w-full flex   lg:flex-col lg:justify-center items-center lg:items-start lg:p-4">
          {categories.map((elem, index) => {
            return (
              <div
                className={` group  ${
                  elem.name == cruntCategory && "bg-secondary"
                } lg:w-full  rounded-full py-2 px-3 my-2 flex justify-start items-center gap-1 cursor-pointer hover:bg-secondary `}
                key={index}
                onClick={() => setCruntCategory(elem.name)}
              >
                <span
                  className={` text-secondary ${
                    elem.name == cruntCategory && "text-primary"
                  }  group-hover:text-black  `}
                >
                  {elem.icon}
                </span>

                <Link className="bg-red  text-white text-base font-Ralewa w-max">
                  {elem.name}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Sidebar;
