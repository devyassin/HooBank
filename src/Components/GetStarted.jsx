import React from "react";
import { arrowUp } from "../assets";

const GetStarted = (props) => {
  return (
    <div
      className={`justify-center items-center w-[140px] h-[140px] bg-blue-gradient cursor-pointer rounded-full p-[2px] ${
        props.activited ? "md:hidden" : "lg:flex  hidden"
      }
      `}
    >
      <div className="flex items-center justify-center w-full h-full bg-primary rounded-full">
        <div className="flex flex-col text-gradient font-semibold">
          <div className="flex space-x-2">
            <p>Get</p>
            <img src={arrowUp} alt="" />
          </div>
          <p>Started</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
