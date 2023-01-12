import React from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

const NavBar = () => {
  const [toggle, toggled] = useState(true);
  return (
    // Global Container
    <div className="flex items-center py-4 justify-between ">
      {/* Logo */}
      <img src={logo} className="w-32" alt="" />
      {/* Nav links */}
      <div className="hidden sm:flex ">
        {navLinks.map((navLink) => {
          return (
            <a
              key={navLink.id}
              className="ml-10 text-lg hover:opacity-90 duration-150"
              href={`#${navLink.id}`}
            >
              {navLink.title}
            </a>
          );
        })}
      </div>

      {/* Mobile version */}
      <img
        className="z-40 sm:hidden w-7 hover:cursor-pointer hover:opacity-90 duration-150"
        src={toggle ? menu : close}
        alt=""
        onClick={() => toggled((prev) => !prev)}
      />
      {/* Mobile Navs */}
      {!toggle && (
        <div className="absolute z-40 md:hidden bg-black-gradient  left-1/2 DropShadow -translate-x-1/2 top-1/2 -translate-y-1/2  px-32 rounded-2xl py-10 ">
          <div className="flex flex-col space-y-10 font-bold  items-center">
            {navLinks.map((navLink) => {
              return (
                <a
                  key={navLink.id}
                  className="text-lg hover:opacity-90 duration-150"
                  href={`#${navLink.id}`}
                >
                  {navLink.title}
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* blur */}
      {!toggle && (
        <div className="absolute md:hidden z-30 opacity-40 top-0 right-0 bottom-0 left-0 bg-black"></div>
      )}
    </div>
  );
};

export default NavBar;
