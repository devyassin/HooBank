import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="#home">
      {/* Global Container */}
      <div className="flex flex-col md:flex-row ">
        {/* First big Container */}

        <div className="flex relative flex-col items-center md:items-start space-y-10 py-20 w-full lg:w-1/2">
          {/* Item 1 */}
          <div className="flex space-x-2 sm:space-x-4  items-center justify-center bg-discount-gradient rounded-lg px-2 py-1">
            <img
              src={discount}
              className="w-[32px] h-[32px]"
              alt="dicount icon"
            />
            {/* text Container */}
            <div className="flex text-[12px] sm:text-lg space-x-2">
              <p>20%</p>
              <p className="opacity-60">DISCOUNT FOR</p>
              <p>1 MONTH</p>
              <p className="opacity-60">ACCOUNT</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col lg:flex-row justify-between w-full items-center md:items-start">
            {/* Title */}
            <div className="text-4xl flex flex-col items-center md:items-start lg:text-6xl font-semibold">
              <p className="mb-12">The Next</p>
              <h1 className="text-gradient">Generation</h1>
            </div>

            {/* Get Started Component */}

            <GetStarted />
          </div>
          {/* Item 3 */}
          <div className="text-4xl  lg:text-6xl font-semibold">
            Payment Method.
          </div>
          {/* Item 4 */}
          <p className="opacity-40 text-center md:text-left text-lg pt-2 font-thin max-w-lg  leading-7">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
          {/* Gradient */}
          <div className="absolute top-0 blue__gradient -z-10 w-1/3 h-1/3"></div>
        </div>
        <div className="flex md:hidden justify-center pb-10">
          <GetStarted activited={"mobile"} />
        </div>
        {/* Second Big Container */}
        <div className="w-full lg:w-1/2 relative">
          <img src={robot} className="w-full h-full" alt="" />
          <div className="absolute top-0 right-1/2 blue__gradient w-1/2 h-1/2 "></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
