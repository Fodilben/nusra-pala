import React from "react";
import { footerLinks, socialMedia } from "../constants";
import { orangeLogo } from "../assets";

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-gray-700 flex flex-col items-center py-8 ">
        <div>
          <img src={orangeLogo} className="h-[90px]" />
        </div>
        <ul>
          {footerLinks.map((link, index) => {
            return (
              <li key={index} className="text-white text-center mt-2">
                <a href={link.href}>{link.label}</a>
              </li>
            );
          })}
        </ul>
        <ul className="flex justify-center items-center gap-3 mt-4">
          {socialMedia.map((social, index) => {
            return (
              <li key={index} className="text-white text-center mt-2">
                <a href={social.link}>
                  <img src={social.icon} className="w-6" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
