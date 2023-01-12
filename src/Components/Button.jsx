import React from "react";

const Button = (props) => {
  return (
    <div className="text-black bg-blue-gradient py-4 px-8 font-semibold rounded-lg hover:cursor-pointer hover:opacity-80 duration-150">
      {props.title}
    </div>
  );
};

export default Button;
