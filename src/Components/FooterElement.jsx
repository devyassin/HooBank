import React from "react";

const FooterElement = (props) => {
  return (
    <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:items-start">
      <h1 className=" pb-4 sm:pb-6">{props.footerLinks.title}</h1>
      {props.footerLinks.links.map((element) => {
        return (
          <a
            className="opacity-60 sm:pb-4 hover:opacity-40 duration-150"
            key={element.name}
            href="#"
          >
            {element.name}
          </a>
        );
      })}
    </div>
  );
};

export default FooterElement;
