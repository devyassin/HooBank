import React from "react";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section className="my-14">
      {/* Global Container */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        {/* Part 1 */}
        <div className="flex items-center text-center sm:text-left sm:w-1/2 sm:items-start flex-col mb-20  space-y-8">
          <div className="text-3xl font-semibold sm:text-5xl">
            <h1 className="mb-6">Find a better card deal</h1>
            <h1> in few easy steps.</h1>
          </div>
          <p className="opacity-50 sm:max-w-md pb-6">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button title="Get Started" />
        </div>

        {/* Part 2 */}
        <img src={card} className="sm:w-1/2" alt="" />
      </div>
    </section>
  );
};

export default CardDeal;
