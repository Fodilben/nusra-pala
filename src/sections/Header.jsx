import { useState } from "react";
<<<<<<< HEAD
import { logo, arabic, english } from "../assets";
const Header = () => {
  const [arabiclang, useArabiclang] = useState(true);
=======
import { logo, arabic } from "../assets";
const Header = () => {
  const { arabiclang, useArabiclang } = useState(true);
>>>>>>> c0af8048a810aece1b7b94a2e640a7d27c21dcfe
  return (
    <header className="px-4  bg-white w-full h-auto rounded-b-xl">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={logo} alt="logo" className="h-[80px]  rounded-full" />
        </a>
        <button onClick={() => useArabiclang(!arabiclang)}>
<<<<<<< HEAD
          <img
            src={arabiclang ? arabic : english}
            alt="langToggle"
            className="w-[80px]"
          />
=======
          <img src={arabic} alt="langToggle" className="w-[80px]" />
>>>>>>> c0af8048a810aece1b7b94a2e640a7d27c21dcfe
        </button>
      </nav>
    </header>
  );
};

export default Header;
