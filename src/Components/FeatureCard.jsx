import React from "react";

const FeatureCard = ({ icon, title, content, id }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center  space-y-4 sm:space-x-4 feature-card p-4 rounded-2xl hover:cursor-pointer duration-150 ${
        id === "feature-2" ? " card-active" : ""
      }`}
    >
      {/* Icon */}
      <div className="flex items-center justify-center bg-dimBlue rounded-full p-3">
        <img src={icon} alt="" />
      </div>

      {/* text Container */}
      <div className="flex items-center sm:items-start flex-col space-y-2 ">
        <h1>{title}</h1>
        <p className="opacity-50 text-sm">{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
