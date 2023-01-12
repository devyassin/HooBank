import React from "react";
import { instagram, facebook, twitter, linkedin, logo } from "../assets";
import { footerLinks, socialMedia } from "../constants/index";
import FooterElement from "./FooterElement";

const Footer = () => {
  return (
    <section id="footer" className="pt-24 pb-4">
      {/* part 1 */}
      <div className="flex flex-col items-center  space-y-16 sm:flex-row sm:items-start sm:space-x-8 sm:justify-between sm:space-y-0">
        {/* item 1 */}
        <div className="flex flex-col items-center space-y-6 sm:max-w-xs text-center sm:text-left sm:items-start">
          <img src={logo} alt="" />
          <p className="text-md opacity-40">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {/* item 2 */}

        {footerLinks.map((footerLinks, index) => {
          return <FooterElement key={index} footerLinks={footerLinks} />;
        })}
      </div>
      {/* part 2 */}

      <hr className="  opacity-30 my-10 rounded-lg w-full" />
      <div className="flex flex-col items-center space-y-6 py-6 sm:py-4 sm:flex-row sm:space-y-0 sm:justify-between">
        <p className="opacity-40 text-sm text-center sm:text-left">
          Copyright &copy; 2023 . Code implemented and improved by{"   "}
          <a
            href="https://www.linkedin.com/in/yassine-lamouadden/"
            target={"_blank"}
          >
            Yassine Lamouadden.
          </a>{" "}
          Design Inspired by{" "}
          <a
            href="https://www.youtube.com/@javascriptmastery"
            target={"_blank"}
          >
            JS Mastery
          </a>
        </p>

        <div className="flex space-x-4">
          {socialMedia.map((icon) => {
            return <img key={icon.id} className="hover:cursor-pointer hover:opacity-60 duration-150" src={icon.icon} alt="" />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
