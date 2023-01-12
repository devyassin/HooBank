import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="my-24 sm:max-w-4xl sm:mx-auto">
      {/* Global Container */}
      <div className="flex flex-col items-center space-y-8 sm:space-y-0 p-12 sm:flex-row  sm:justify-between lg:p-24 card-active rounded-2xl">
        {/* part 1 */}
        <div className="flex flex-col items-center space-y-6  text-center sm:text-left sm:items-start">
          <h1 className="text-3xl sm:text-4xl font-semibold">Let’s try our service now!</h1>
          <p className="text-md opacity-40 sm:max-w-md">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        {/* part 2 */}
        <Button title="Get Started" />
      </div>
    </section>
  );
};

export default CTA;
