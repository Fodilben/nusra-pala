import { useState } from "react";
import { logo, arabic, english } from "../assets";
import React, { useContext } from "react";
import { LanguageContext, LanguageProvider } from "../LanguageContext";
const Header = () => {
  const [arabiclang, useArabiclang] = useState(true);
  const { language, changeLanguage } = useContext(LanguageContext) || {
    language: "ar",
  };
  const handleLanguageChange = (event) => {
    changeLanguage(!arabiclang);
    useArabiclang(!arabiclang);
  };
  return (
    <header className="px-4  bg-white w-full h-auto rounded-b-xl">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={logo} alt="logo" className="h-[80px]  rounded-full" />
        </a>
        <button onClick={handleLanguageChange}>
          <img
            src={arabiclang ? arabic : english}
            alt="langToggle"
            className="w-[80px]"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
