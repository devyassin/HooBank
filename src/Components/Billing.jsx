import React from "react";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section id="product" className="my-24">
      {/* Global Container */}
      <div className="flex flex-col-reverse  items-center sm:flex-row sm:space-y-0 sm:justify-between">
        {/* image content */}
        <img src={bill} className="w-full sm:w-1/2" alt="" />
        {/* text Content */}
        {/* place Content */}
        <div className="flex sm:justify-end sm:w-1/2">
          <div className="flex items-center text-center sm:text-left sm:items-start flex-col mb-20  space-y-10">
            <div className="text-3xl font-semibold sm:text-5xl">
              <h1 className="mb-6">Easily control your </h1>
              <h1> billing & invoicing.</h1>
            </div>
            <p className="opacity-50 sm:max-w-md pb-6 ">
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </p>
            {/* icons */}
            <div className="flex flex-row  space-x-8  ">
              <img
                src={apple}
                className="hover:cursor-pointer opacity-80 hover:opacity-100 duration-150"
                alt=""
              />
              <img
                src={google}
                className="hover:cursor-pointer opacity-80 hover:opacity-100 duration-150"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
