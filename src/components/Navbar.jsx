import React from "react";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className="w-full sticky top-0  md:h-14  z-[999]  ">
        <div className="container m-auto bg-primary lg:border-b-2  border-solid  border-secondary ">
          <div className=" w-full px-4 py-2 flex justify-between items-center">
            <Link to="/">
              <div className="flex justify-center items-center gap-1">
                <img src={logo} alt="main_logo" className="w-8" />
                <h1 className="hidden md:block text-white text-2xl font-black font-Kdam_Thmor">
                  Royal Tube
                </h1>
              </div>
            </Link>
            <div className="relative">
              <input
                type="text"
                name=""
                className=" py-1 md:py-2 px-3 pr-9 w-56 md:w-72 text-base border-none outline  rounded-full"
              />
              <MdOutlineSearch
                size={25}
                className=" text-red-500   absolute right-1 top-1 md:right-2 md:top-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
