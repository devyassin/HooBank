import React from "react";
import { stats } from "../constants/index";

const Stats = () => {
  return (
    <section className="my-20">
      {/* Global Container */}
      <div className="flex flex-col items-center space-y-10 sm:flex-row sm:space-y-0 sm:justify-between">
        {stats.map((stat) => {
          // item
          return (
            <div
              key={stat.id}
              className="flex flex-col rounded-lg space-y-2 justify-center items-center sm:space-y-0 sm:flex-row sm:space-x-2 "
            >
              <h1 className="text-2xl font-semibold">{stat.value}</h1>
              <p className="uppercase text-gradient ">{stat.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
