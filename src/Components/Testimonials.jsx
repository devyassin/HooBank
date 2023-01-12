import React from "react";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants/index";

const Testimonials = () => {
  return (
    <section className="my-24">
      {/* Text Container */}
      <div className="flex flex-col mb-24 items-center text-center space-y-8 sm:space-y-0 sm:text-left sm:flex-row sm:justify-between sm:items-center">
        {/* title */}
        <div className="flex flex-col space-y-6 sm:w-1/2 items-center sm:items-start text-4xl font-semibold  sm:max-w-xl sm:text-5xl">
          <h1>What people are</h1>
          <h1>saying about us</h1>
        </div>

        {/* paragraph */}
        <p className=" sm:text-lg sm:w-1/2 opacity-60">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      {/* Feed Cards */}

      <div className="grid grid-rows-3 gap-y-6 items-center  sm:grid-rows-1 sm:gap-8  sm:grid-cols-3  ">
        {feedback.map((card) => {
          return <FeedbackCard key={card.id} {...card} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
