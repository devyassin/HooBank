import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ id, content, name, title, img }) => {
  const CardWrapperStyle = ` flex flex-col-reverse feature-card sm:justify-between hover:cursor-pointer h-full items-center space-y-6 sm:flex-col  sm:items-start  rounded-2xl px-4 pb-4 sm:p-8 ${
    id === "feedback-1" ? " card-active" : " "
  }`;
  return (
    <div className={CardWrapperStyle}>
      {/* Quote */}
      <img src={quotes} className="hidden sm:block" alt="" />
      {/* Text content */}
      <div className="text-center sm:text-left  opacity-90 text-md">
        {content}
      </div>
      {/* image Content */}
      <div className="flex flex-col space-y-10 sm:space-y-0  sm:space-x-4 items-center sm:flex-row">
        <img src={img} className="w-18 sm:w-12" alt="" />
        <div className="flex flex-col text-center items-center sm:items-start sm:text-left">
          <h1>{name}</h1>
          <p className="text-[12px] opacity-40">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
