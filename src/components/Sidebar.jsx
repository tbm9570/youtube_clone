import React, { useState } from "react";
import { categories } from "../utils/constants";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
const Sidebar = () => {
  const [cruntCategory, setCruntCategory] = useState("New");
  console.log("🚀 ~ cruntCategory:", cruntCategory);
  return (
    <>
      <section className="w-full lg:w-72  lg:h-[calc(100vh-3.5rem)] lg:fixed  bg-[#100f0f] border-b-2 lg:border-b-0 lg:border-r-2 border-solid  border-[#FB1507] overflow-auto ">
        <div className="w-full flex   lg:flex-col lg:justify-center items-center lg:items-start lg:p-4">
          {categories.map((elem, index) => {
            return (
              <div
                className={` group  ${
                  elem.name == cruntCategory && "bg-[#FB1507]"
                } lg:w-full  rounded-full py-2 px-3 my-2 flex justify-start items-center gap-1 cursor-pointer hover:bg-[#FB1507] `}
                key={index}
                onClick={() => setCruntCategory(elem.name)}
              >
                <span>
                  <FaCode
                    size={22}
                    className={` ${
                      elem.name === cruntCategory && "text-black"
                    } text-[#FB1507] group-hover:text-black  `}
                  />
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
