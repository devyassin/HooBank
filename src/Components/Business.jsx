import React from "react";
import Button from "./Button";
import FeatureCard from "./FeatureCard";
import { features } from "../constants/index";

const Business = () => {
  return (
    <section id="features" className="py-20">
      {/* Global Container */}
      <div className="flex flex-col items-center w-full sm:space-x-40  text-center sm:text-left sm:flex-row sm:items-start  ">
        {/* Part 1 */}
        <div className="flex items-center sm:w-1/2 sm:items-start flex-col mb-20  space-y-8">
          <div className="text-3xl font-semibold sm:text-5xl">
            <h1 className="mb-6">You do the business,</h1>
            <h1> we’ll handle the money.</h1>
          </div>
          <p className="opacity-50 sm:max-w-xl pb-6">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <Button title="Get Started" />
        </div>

        {/* part 2 */}
        <div className="flex sm:w-1/2 text-white flex-col space-y-4 sm:space-y-2 ">
          {features.map((feature) => {
            return <FeatureCard key={feature.id} {...feature} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Business;
